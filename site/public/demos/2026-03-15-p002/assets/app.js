const elGuestForm = document.getElementById('guestForm');
const elGuestName = document.getElementById('guestName');
const elGuestSide = document.getElementById('guestSide');
const elGuestNotes = document.getElementById('guestNotes');
const elGuestMsg = document.getElementById('guestMsg');

const elA = document.getElementById('aSelect');
const elB = document.getElementById('bSelect');
const elType = document.getElementById('cType');
const elWeight = document.getElementById('cWeight');
const elCForm = document.getElementById('constraintForm');
const elCMsg = document.getElementById('cMsg');

const elGuestList = document.getElementById('guestList');
const elHotspots = document.getElementById('hotspots');
const elConstraintList = document.getElementById('constraintList');
const elMatrixWrap = document.getElementById('matrixWrap');

const btnMap = document.getElementById('btnMap');
const btnExample = document.getElementById('btnExample');
const btnReset = document.getElementById('btnReset');

const TYPE_FACTOR = { separate: 2, near: 1 };

const STATE = {
  guests: [], // {id, name, side, notes}
  constraints: [], // {id,a,b,type,weight}
  mapped: false,
  guestFriction: new Map(),
  constraintFriction: new Map(),
  selectedGuestId: null,
};

function uid() {
  return Math.random().toString(16).slice(2) + Date.now().toString(16);
}

function normName(s) {
  return String(s || '').trim().toLowerCase();
}

function setMsg(el, msg) {
  el.textContent = msg || '';
}

function constraintKey(a, b) {
  const x = String(a);
  const y = String(b);
  return x < y ? `${x}__${y}` : `${y}__${x}`;
}

function computeFriction() {
  STATE.guestFriction = new Map();
  STATE.constraintFriction = new Map();

  for (const g of STATE.guests) STATE.guestFriction.set(g.id, 0);

  for (const c of STATE.constraints) {
    const f = Number(c.weight) * TYPE_FACTOR[c.type];
    STATE.constraintFriction.set(c.id, f);
    STATE.guestFriction.set(c.a, (STATE.guestFriction.get(c.a) || 0) + f);
    STATE.guestFriction.set(c.b, (STATE.guestFriction.get(c.b) || 0) + f);
  }

  STATE.mapped = true;
}

function guestById(id) {
  return STATE.guests.find((g) => g.id === id) || null;
}

function renderSelects() {
  const opts = STATE.guests.map((g) => ({ id: g.id, label: g.name }));
  const prevA = elA.value;
  const prevB = elB.value;

  elA.innerHTML = '';
  elB.innerHTML = '';

  for (const o of opts) {
    const oa = document.createElement('option');
    oa.value = o.id;
    oa.textContent = o.label;
    elA.appendChild(oa);

    const ob = document.createElement('option');
    ob.value = o.id;
    ob.textContent = o.label;
    elB.appendChild(ob);
  }

  if (opts.length === 0) {
    const oa = document.createElement('option');
    oa.value = '';
    oa.textContent = 'Add guests first';
    elA.appendChild(oa);
    const ob = oa.cloneNode(true);
    elB.appendChild(ob);
  }

  if (prevA) elA.value = prevA;
  if (prevB) elB.value = prevB;
}

function renderGuests() {
  elGuestList.innerHTML = '';
  const hasSelection = !!STATE.selectedGuestId;

  const rows = [...STATE.guests].map((g) => {
    const friction = STATE.guestFriction.get(g.id) || 0;
    return { g, friction };
  });

  // Show in insertion order; user can use hotspots for ranking.
  for (const { g, friction } of rows) {
    const li = document.createElement('li');
    li.className = 'item';
    if (STATE.selectedGuestId === g.id) li.classList.add('selected');
    if (hasSelection && STATE.selectedGuestId !== g.id) li.classList.add('dim');

    const left = document.createElement('div');
    left.className = 'left';

    const title = document.createElement('div');
    title.className = 'title';
    title.textContent = g.name;

    const pill = document.createElement('div');
    pill.className = 'pill';
    const dot = document.createElement('span');
    dot.className = `dot dot--${g.side}`;
    const sideText = document.createElement('span');
    sideText.textContent = g.side === 'bride' ? 'Bride side' : 'Groom side';
    const fText = document.createElement('span');
    fText.textContent = STATE.mapped ? ` · friction ${friction}` : '';
    pill.appendChild(dot);
    pill.appendChild(sideText);
    pill.appendChild(fText);

    const notes = document.createElement('div');
    notes.className = 'hint';
    notes.textContent = g.notes ? g.notes : '';

    left.appendChild(title);
    left.appendChild(pill);
    if (g.notes) left.appendChild(notes);

    const right = document.createElement('div');
    right.style.display = 'flex';
    right.style.gap = '8px';

    const btnSel = document.createElement('button');
    btnSel.type = 'button';
    btnSel.className = 'btnMini';
    btnSel.textContent = STATE.selectedGuestId === g.id ? 'Unselect' : 'Select';
    btnSel.addEventListener('click', () => {
      STATE.selectedGuestId = STATE.selectedGuestId === g.id ? null : g.id;
      renderAll();
    });

    const btnDel = document.createElement('button');
    btnDel.type = 'button';
    btnDel.className = 'btnMini';
    btnDel.textContent = 'Delete';
    btnDel.addEventListener('click', () => {
      STATE.guests = STATE.guests.filter((x) => x.id !== g.id);
      STATE.constraints = STATE.constraints.filter((c) => c.a !== g.id && c.b !== g.id);
      if (STATE.selectedGuestId === g.id) STATE.selectedGuestId = null;
      STATE.mapped = false;
      renderAll();
    });

    right.appendChild(btnSel);
    right.appendChild(btnDel);

    li.appendChild(left);
    li.appendChild(right);
    elGuestList.appendChild(li);
  }
}

function renderHotspots() {
  elHotspots.innerHTML = '';
  if (!STATE.mapped) {
    elHotspots.innerHTML = '<li class="hint">Click <b>Map friction</b> to rank hotspots.</li>';
    return;
  }

  const rows = STATE.guests
    .map((g) => ({ g, friction: STATE.guestFriction.get(g.id) || 0 }))
    .sort((a, b) => b.friction - a.friction || a.g.name.localeCompare(b.g.name));

  for (const r of rows) {
    const li = document.createElement('li');
    li.className = 'item';
    if (STATE.selectedGuestId && STATE.selectedGuestId !== r.g.id) li.classList.add('dim');
    if (STATE.selectedGuestId === r.g.id) li.classList.add('selected');

    const left = document.createElement('div');
    left.className = 'left';
    const title = document.createElement('div');
    title.className = 'title';
    title.textContent = r.g.name;

    const pill = document.createElement('div');
    pill.className = 'pill';
    const dot = document.createElement('span');
    dot.className = `dot dot--${r.g.side}`;
    pill.appendChild(dot);
    pill.appendChild(document.createTextNode(`friction ${r.friction}`));

    left.appendChild(title);
    left.appendChild(pill);

    const right = document.createElement('div');
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'btnMini';
    btn.textContent = STATE.selectedGuestId === r.g.id ? 'Unselect' : 'Select';
    btn.addEventListener('click', () => {
      STATE.selectedGuestId = STATE.selectedGuestId === r.g.id ? null : r.g.id;
      renderAll();
    });
    right.appendChild(btn);

    li.appendChild(left);
    li.appendChild(right);
    elHotspots.appendChild(li);
  }
}

function renderConstraints() {
  elConstraintList.innerHTML = '';

  if (STATE.constraints.length === 0) {
    elConstraintList.innerHTML = '<li class="hint">No constraints yet.</li>';
    return;
  }

  const rows = STATE.constraints
    .map((c) => {
      const a = guestById(c.a);
      const b = guestById(c.b);
      const f = STATE.constraintFriction.get(c.id) || (Number(c.weight) * TYPE_FACTOR[c.type]);
      return { c, aName: a?.name || '?', bName: b?.name || '?', friction: f };
    })
    .sort((x, y) => y.friction - x.friction);

  for (const r of rows) {
    const li = document.createElement('li');
    li.className = 'item';

    const touchesSelected = STATE.selectedGuestId && (r.c.a === STATE.selectedGuestId || r.c.b === STATE.selectedGuestId);
    if (STATE.selectedGuestId && !touchesSelected) li.classList.add('dim');
    if (touchesSelected) li.classList.add('selected');

    const left = document.createElement('div');
    left.className = 'left';

    const title = document.createElement('div');
    title.className = 'title';
    title.textContent = `${r.aName} ↔ ${r.bName}`;

    const pill = document.createElement('div');
    pill.className = 'pill';
    const badge = document.createElement('span');
    badge.className = `badge ${r.c.type === 'near' ? 'badge--near' : 'badge--sep'}`;
    badge.textContent = r.c.type === 'near' ? 'must-sit-near' : 'must-separate';

    const w = document.createElement('span');
    w.textContent = `weight ${r.c.weight} · friction ${r.friction}`;

    pill.appendChild(badge);
    pill.appendChild(w);

    left.appendChild(title);
    left.appendChild(pill);

    const right = document.createElement('div');
    const btnDel = document.createElement('button');
    btnDel.type = 'button';
    btnDel.className = 'btnMini';
    btnDel.textContent = 'Delete';
    btnDel.addEventListener('click', () => {
      STATE.constraints = STATE.constraints.filter((x) => x.id !== r.c.id);
      STATE.mapped = false;
      renderAll();
    });
    right.appendChild(btnDel);

    li.appendChild(left);
    li.appendChild(right);
    elConstraintList.appendChild(li);
  }
}

function renderMatrix() {
  const max = 12;
  const gs = STATE.guests.slice(0, max);
  if (gs.length === 0) {
    elMatrixWrap.innerHTML = '<p class="hint" style="padding:10px">Add guests to see the matrix.</p>';
    return;
  }

  const byPair = new Map();
  for (const c of STATE.constraints) {
    const k = constraintKey(c.a, c.b);
    byPair.set(k, c); // last write wins (simple)
  }

  const table = document.createElement('table');
  table.className = 'matrix';

  const thead = document.createElement('thead');
  const trh = document.createElement('tr');
  const corner = document.createElement('th');
  corner.textContent = 'Guest';
  trh.appendChild(corner);

  for (const g of gs) {
    const th = document.createElement('th');
    th.textContent = g.name;
    trh.appendChild(th);
  }

  thead.appendChild(trh);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  for (const row of gs) {
    const tr = document.createElement('tr');
    const th = document.createElement('td');
    th.textContent = row.name;
    tr.appendChild(th);

    for (const col of gs) {
      const td = document.createElement('td');
      if (row.id === col.id) {
        td.textContent = '—';
        td.className = 'cellEmpty';
      } else {
        const k = constraintKey(row.id, col.id);
        const c = byPair.get(k);
        if (!c) {
          td.textContent = '';
          td.className = 'cellEmpty';
        } else {
          td.textContent = c.type === 'near' ? 'N' : 'S';
          td.title = `${row.name} ↔ ${col.name} (${c.type}, w=${c.weight})`;
          td.className = c.type === 'near' ? 'cellNear' : 'cellSep';
        }
      }

      if (STATE.selectedGuestId && (STATE.selectedGuestId === row.id || STATE.selectedGuestId === col.id)) {
        td.classList.add('cellHi');
      }

      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }

  table.appendChild(tbody);
  elMatrixWrap.innerHTML = '';
  elMatrixWrap.appendChild(table);
}

function renderAll() {
  renderSelects();
  renderGuests();
  renderHotspots();
  renderConstraints();
  renderMatrix();
}

elGuestForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = String(elGuestName.value || '').trim();
  const side = elGuestSide.value === 'groom' ? 'groom' : 'bride';
  const notes = String(elGuestNotes.value || '').trim();

  if (!name) return;

  const exists = STATE.guests.some((g) => normName(g.name) === normName(name));
  if (exists) {
    setMsg(elGuestMsg, 'Duplicate name (case-insensitive).');
    return;
  }

  STATE.guests.push({ id: uid(), name, side, notes });
  STATE.mapped = false;
  setMsg(elGuestMsg, 'Added.');

  elGuestName.value = '';
  elGuestNotes.value = '';
  renderAll();
});

elCForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (STATE.guests.length < 2) {
    setMsg(elCMsg, 'Add at least 2 guests first.');
    return;
  }

  const a = elA.value;
  const b = elB.value;
  if (!a || !b || a === b) {
    setMsg(elCMsg, 'Pick two different guests.');
    return;
  }

  const type = elType.value === 'near' ? 'near' : 'separate';
  const weight = Math.max(1, Math.min(3, Number(elWeight.value || 1)));

  // Keep one constraint per pair: overwrite existing.
  const k = constraintKey(a, b);
  const existing = STATE.constraints.find((c) => constraintKey(c.a, c.b) === k);
  if (existing) {
    existing.type = type;
    existing.weight = weight;
    setMsg(elCMsg, 'Updated existing pair constraint.');
  } else {
    STATE.constraints.push({ id: uid(), a, b, type, weight });
    setMsg(elCMsg, 'Added.');
  }

  STATE.mapped = false;
  renderAll();
});

btnMap.addEventListener('click', () => {
  if (STATE.guests.length === 0) {
    setMsg(elCMsg, 'Add guests first.');
    return;
  }
  computeFriction();
  setMsg(elCMsg, 'Mapped. Click a guest to highlight.');
  renderAll();
});

btnExample.addEventListener('click', () => {
  STATE.guests = [
    { id: uid(), name: 'Bride Mom', side: 'bride', notes: 'Divorced' },
    { id: uid(), name: 'Bride Dad', side: 'bride', notes: 'Divorced' },
    { id: uid(), name: 'Groom Mom', side: 'groom', notes: '' },
    { id: uid(), name: 'Groom Dad', side: 'groom', notes: '' },
    { id: uid(), name: 'College Friends', side: 'bride', notes: 'Prefer together' },
    { id: uid(), name: 'Uncle Min', side: 'groom', notes: 'Loud when drinking' },
    { id: uid(), name: 'Cousin Jae', side: 'groom', notes: '' },
    { id: uid(), name: 'Best Man', side: 'groom', notes: '' },
    { id: uid(), name: 'Maid of Honor', side: 'bride', notes: '' },
  ];

  const byName = new Map(STATE.guests.map((g) => [g.name, g.id]));
  const addC = (a, b, type, w) => STATE.constraints.push({ id: uid(), a: byName.get(a), b: byName.get(b), type, weight: w });
  STATE.constraints = [];
  addC('Bride Mom', 'Bride Dad', 'separate', 3);
  addC('Uncle Min', 'Cousin Jae', 'separate', 2);
  addC('Best Man', 'Maid of Honor', 'near', 2);
  addC('College Friends', 'Maid of Honor', 'near', 1);
  addC('Groom Mom', 'Groom Dad', 'near', 1);

  STATE.selectedGuestId = null;
  STATE.mapped = false;
  setMsg(elGuestMsg, 'Example loaded.');
  setMsg(elCMsg, 'Click Map friction.');
  renderAll();
});

btnReset.addEventListener('click', () => {
  STATE.guests = [];
  STATE.constraints = [];
  STATE.mapped = false;
  STATE.selectedGuestId = null;
  setMsg(elGuestMsg, '');
  setMsg(elCMsg, '');
  renderAll();
});

renderAll();
