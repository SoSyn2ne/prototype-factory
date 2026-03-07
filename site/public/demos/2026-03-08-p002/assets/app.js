const els = {
  guestBody: document.getElementById('guestBody'),
  attendingCount: document.getElementById('attendingCount'),
  plusOneCount: document.getElementById('plusOneCount'),
  dietCount: document.getElementById('dietCount'),
  queue: document.getElementById('queue'),
  detail: document.getElementById('detail'),
  simulateBtn: document.getElementById('simulateBtn'),
  resetBtn: document.getElementById('resetBtn'),
};

const INITIAL_GUESTS = [
  { id: 'g1', name: 'Minji Kim', status: 'Yes', plusOne: 0, diet: '—', table: 'A' },
  { id: 'g2', name: 'Joon Park', status: 'Yes', plusOne: 1, diet: 'No pork', table: 'B' },
  { id: 'g3', name: 'Sora Lee', status: 'No', plusOne: 0, diet: '—', table: '—' },
  { id: 'g4', name: 'Daniel Choi', status: 'Yes', plusOne: 0, diet: 'Vegetarian', table: 'C' },
  { id: 'g5', name: 'Hana Song', status: 'Maybe', plusOne: 0, diet: '—', table: 'D' },
  { id: 'g6', name: 'Eunseo Yoon', status: 'Yes', plusOne: 0, diet: '—', table: 'A' },
];

let guests = deepClone(INITIAL_GUESTS);
let driftQueue = [];
let selectedDriftId = '';

function deepClone(x) {
  return JSON.parse(JSON.stringify(x));
}

function computeStats() {
  let attending = 0;
  let plusOnes = 0;
  let diets = 0;
  for (const g of guests) {
    if (g.status === 'Yes') attending += 1;
    plusOnes += Number(g.plusOne || 0);
    if (g.diet && g.diet !== '—') diets += 1;
  }
  els.attendingCount.textContent = String(attending);
  els.plusOneCount.textContent = String(plusOnes);
  els.dietCount.textContent = String(diets);
}

function pill(text, cls) {
  const span = document.createElement('span');
  span.className = `pill ${cls || ''}`.trim();
  span.textContent = text;
  return span;
}

function renderGuests() {
  els.guestBody.innerHTML = '';
  for (const g of guests) {
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.textContent = g.name;

    const tdStatus = document.createElement('td');
    const statusClass = g.status === 'Yes' ? 'ok' : (g.status === 'No' ? 'no' : '');
    tdStatus.appendChild(pill(g.status, statusClass));

    const tdPlus = document.createElement('td');
    tdPlus.textContent = String(g.plusOne);

    const tdDiet = document.createElement('td');
    tdDiet.textContent = g.diet || '—';

    const tdTable = document.createElement('td');
    tdTable.textContent = g.table || '—';

    tr.appendChild(tdName);
    tr.appendChild(tdStatus);
    tr.appendChild(tdPlus);
    tr.appendChild(tdDiet);
    tr.appendChild(tdTable);

    els.guestBody.appendChild(tr);
  }
  computeStats();
}

function severityForChange(before, after, changes) {
  // Seat-breakers: attendance flip, plus-one changes, new diet restriction.
  let score = 0;
  if (changes.includes('status')) {
    const flip = (before.status === 'Yes' && after.status !== 'Yes') || (before.status !== 'Yes' && after.status === 'Yes');
    if (flip) score += 70;
  }
  if (changes.includes('plusOne')) score += 55;
  if (changes.includes('diet')) {
    const beforeDiet = before.diet && before.diet !== '—';
    const afterDiet = after.diet && after.diet !== '—';
    if (!beforeDiet && afterDiet) score += 65;
    else score += 25;
  }
  if (changes.includes('name')) score += 10;
  if (changes.includes('table')) score += 20;
  return Math.min(100, score);
}

function classifySeverity(score) {
  return score >= 55 ? 'Seat-breaker' : 'Minor';
}

function diffGuest(before, after) {
  const keys = ['name', 'status', 'plusOne', 'diet', 'table'];
  const changes = [];
  for (const k of keys) {
    if (String(before[k]) !== String(after[k])) changes.push(k);
  }
  return changes;
}

function pushDriftEvent(before, after, changes) {
  const score = severityForChange(before, after, changes);
  const sev = classifySeverity(score);
  const id = `d${Date.now()}-${Math.random().toString(16).slice(2)}`;
  driftQueue.unshift({
    id,
    when: new Date().toISOString(),
    guestId: before.id,
    guestName: after.name,
    score,
    severity: sev,
    changes,
    before,
    after,
  });
  driftQueue.sort((a, b) => b.score - a.score);
  selectedDriftId = id;
}

function renderQueue() {
  els.queue.innerHTML = '';
  if (!driftQueue.length) {
    const empty = document.createElement('p');
    empty.className = 'muted';
    empty.textContent = 'No drift yet. Click “Simulate update”.';
    els.queue.appendChild(empty);
    els.detail.innerHTML = '';
    return;
  }

  for (const item of driftQueue) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'item';
    btn.dataset.driftId = item.id;

    const top = document.createElement('div');
    top.className = 'itemTop';

    const title = document.createElement('p');
    title.className = 'itemTitle';
    title.textContent = item.guestName;

    const sev = document.createElement('div');
    sev.className = `sev ${item.severity === 'Seat-breaker' ? 'high' : 'low'}`;
    sev.textContent = `${item.severity} • ${item.score}`;

    top.appendChild(title);
    top.appendChild(sev);

    const meta = document.createElement('p');
    meta.className = 'itemMeta';
    meta.textContent = `Changed: ${item.changes.join(', ')}`;

    btn.appendChild(top);
    btn.appendChild(meta);

    btn.addEventListener('click', () => {
      selectedDriftId = item.id;
      renderDetail();
    });

    els.queue.appendChild(btn);
  }

  renderDetail();
}

function renderDetail() {
  const item = driftQueue.find((d) => d.id === selectedDriftId) || driftQueue[0];
  if (!item) return;

  const title = `Review: ${item.guestName}`;
  const sev = `${item.severity} (score ${item.score})`;

  els.detail.innerHTML = `
    <h3>${escapeHtml(title)}</h3>
    <p class="muted">${escapeHtml(sev)} • Changed: ${escapeHtml(item.changes.join(', '))}</p>
    <div class="diff" role="region" aria-label="Diff">
      ${diffRow('Status', item.before.status, item.after.status)}
      ${diffRow('+1', item.before.plusOne, item.after.plusOne)}
      ${diffRow('Diet', item.before.diet, item.after.diet)}
      ${diffRow('Table', item.before.table, item.after.table)}
      ${diffRow('Name', item.before.name, item.after.name)}
    </div>
    <div class="smallBtns">
      <button class="small ok" id="ackBtn" type="button">Acknowledge</button>
      <button class="small danger" id="dropBtn" type="button">Delete event</button>
    </div>
  `;

  els.detail.querySelector('#ackBtn').addEventListener('click', () => {
    driftQueue = driftQueue.filter((d) => d.id !== item.id);
    selectedDriftId = driftQueue[0]?.id || '';
    renderQueue();
  });
  els.detail.querySelector('#dropBtn').addEventListener('click', () => {
    driftQueue = driftQueue.filter((d) => d.id !== item.id);
    selectedDriftId = driftQueue[0]?.id || '';
    renderQueue();
  });
}

function diffRow(key, before, after) {
  const b = escapeHtml(String(before ?? '—'));
  const a = escapeHtml(String(after ?? '—'));
  const changed = b !== a;
  return `
    <div class="diffRow">
      <div class="k">${escapeHtml(key)}</div>
      <div>${changed ? `<span style="color:#a7b2cc">${b}</span> → <strong>${a}</strong>` : `<span style="color:#a7b2cc">${b}</span>`}</div>
    </div>
  `;
}

function escapeHtml(s) {
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function randomPick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function simulateUpdate() {
  const beforeAll = deepClone(guests);

  // Choose a target guest.
  const idx = Math.floor(Math.random() * guests.length);
  const g = guests[idx];
  const before = deepClone(g);

  // Choose a mutation type.
  const mutation = randomPick(['statusFlip', 'plusOne', 'diet', 'name', 'table']);

  if (mutation === 'statusFlip') {
    g.status = g.status === 'Yes' ? randomPick(['No', 'Maybe']) : 'Yes';
    if (g.status !== 'Yes') {
      g.table = '—';
      g.plusOne = 0;
    }
  }

  if (mutation === 'plusOne') {
    if (g.status !== 'Yes') g.status = 'Yes';
    g.plusOne = g.plusOne === 0 ? 1 : 0;
  }

  if (mutation === 'diet') {
    const diets = ['—', 'Vegetarian', 'Vegan', 'No pork', 'Gluten-free'];
    g.diet = randomPick(diets.filter((d) => d !== g.diet));
  }

  if (mutation === 'name') {
    // Minor: small correction
    g.name = g.name.includes(' ') ? g.name.replace(' ', '-') : g.name.replace('-', ' ');
  }

  if (mutation === 'table') {
    const tables = ['A', 'B', 'C', 'D', 'E', '—'];
    if (g.status !== 'Yes') g.status = 'Yes';
    g.table = randomPick(tables.filter((t) => t !== g.table));
  }

  const after = deepClone(g);
  const changes = diffGuest(before, after);

  // Only create drift if something actually changed.
  if (changes.length) {
    pushDriftEvent(before, after, changes);
  }

  renderGuests();
  renderQueue();
}

function resetAll() {
  guests = deepClone(INITIAL_GUESTS);
  driftQueue = [];
  selectedDriftId = '';
  renderGuests();
  renderQueue();
}

els.simulateBtn.addEventListener('click', simulateUpdate);
els.resetBtn.addEventListener('click', resetAll);

resetAll();
