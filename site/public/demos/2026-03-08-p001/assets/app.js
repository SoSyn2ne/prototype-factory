const els = {
  presetSelect: document.getElementById('presetSelect'),
  transcriptInput: document.getElementById('transcriptInput'),
  extractBtn: document.getElementById('extractBtn'),
  filterInput: document.getElementById('filterInput'),
  signals: document.getElementById('signals'),
  queue: document.getElementById('queue'),
  clearQueueBtn: document.getElementById('clearQueueBtn'),
  notice: document.getElementById('notice'),
  visibleCount: document.getElementById('visibleCount'),
};

const PRESETS = {
  gpu: `Operator: Good afternoon.
CFO: Data center demand remains strong. We see broad-based uptake in inference and training, though we are monitoring lead times closely.
CEO: We are being prudent on guidance: we assume a more normalizing cadence in H2.
CFO: Gross margin improved sequentially due to mix and lower expedite fees. We expect some headwinds from new capacity coming online.
Analyst: Any color on supply?
CEO: Supply has loosened in some components, but advanced packaging remains tight.
CFO: We repurchased $2B of stock this quarter and will remain opportunistic.`,
  foundry: `Operator: Welcome.
CEO: Customer visibility is improving, but we still see pockets of inventory correction in mature nodes.
CFO: We are guiding capex slightly lower as we sequence tool installs to match demand. Advanced node utilization remains healthy.
CEO: We continue to prioritize long-term capacity; near-term margins will reflect ramp costs.
Analyst: How should we think about pricing?
CFO: Pricing remains disciplined. We are focusing on value-based pricing for advanced packaging and specialty processes.`,
};

let currentSignals = [];
const falsifySet = new Set();

function setNotice(text, kind = '') {
  els.notice.textContent = text;
  els.notice.className = `notice ${kind}`.trim();
}

function tokenize(s) {
  return String(s || '').toLowerCase().trim();
}

function extractSignalsFromTranscript(t) {
  // This is a UI prototype; extraction is deterministic + template-y.
  // We still derive excerpts by searching for relevant keywords when possible.
  const transcript = String(t || '').trim();
  const lines = transcript.split(/\n+/).map((l) => l.trim()).filter(Boolean);

  function findExcerpt(keywords, fallback) {
    const low = lines.map((l) => l.toLowerCase());
    for (let i = 0; i < low.length; i++) {
      if (keywords.some((k) => low[i].includes(k))) return lines[i];
    }
    return fallback;
  }

  return [
    {
      id: 'guidance',
      category: 'Guidance',
      excerpt: findExcerpt(['guide', 'guidance', 'prudent', 'outlook', 'assume'], '"We are being prudent on guidance and assume a more normalizing cadence in the second half."'),
      confidence: 62,
    },
    {
      id: 'demand',
      category: 'Demand',
      excerpt: findExcerpt(['demand', 'uptake', 'visibility', 'backlog', 'inference', 'training'], '"Demand remains strong, with broad-based uptake across key workloads."'),
      confidence: 70,
    },
    {
      id: 'supply',
      category: 'Supply',
      excerpt: findExcerpt(['supply', 'tight', 'lead time', 'packaging', 'capacity', 'tool installs'], '"Supply has loosened in some areas, but advanced packaging remains tight."'),
      confidence: 58,
    },
    {
      id: 'margin',
      category: 'Margin',
      excerpt: findExcerpt(['margin', 'gross', 'mix', 'headwind', 'ramp costs'], '"Margins improved on mix, though near-term headwinds remain from ramp costs."'),
      confidence: 55,
    },
    {
      id: 'capital',
      category: 'Capital',
      excerpt: findExcerpt(['capex', 'repurchase', 'buyback', 'return', 'opportunistic'], '"We repurchased stock this quarter and are sequencing capex to match demand."'),
      confidence: 64,
    },
  ];
}

function renderSignals() {
  const q = tokenize(els.filterInput.value);
  const visible = [];

  els.signals.innerHTML = '';
  for (const s of currentSignals) {
    const hay = tokenize(`${s.category} ${s.excerpt}`);
    const isVisible = !q || hay.includes(q);
    if (isVisible) visible.push(s);

    const card = document.createElement('article');
    card.className = 'card';
    card.dataset.signalId = s.id;
    card.style.display = isVisible ? '' : 'none';

    const top = document.createElement('div');
    top.className = 'cardTop';

    const badge = document.createElement('div');
    badge.className = 'badge';
    badge.textContent = s.category;

    const falsifyBtn = document.createElement('button');
    falsifyBtn.type = 'button';
    falsifyBtn.className = falsifySet.has(s.id) ? 'btn btnGhost' : 'btn';
    falsifyBtn.textContent = falsifySet.has(s.id) ? 'Queued' : 'Falsify';
    falsifyBtn.addEventListener('click', () => addToQueue(s.id));

    top.appendChild(badge);
    top.appendChild(falsifyBtn);

    const quote = document.createElement('p');
    quote.className = 'quote';
    quote.textContent = s.excerpt;

    const sliderRow = document.createElement('div');
    sliderRow.className = 'sliderRow';

    const lbl = document.createElement('label');
    lbl.textContent = 'Confidence';

    const range = document.createElement('input');
    range.type = 'range';
    range.min = '0';
    range.max = '100';
    range.value = String(s.confidence);
    range.setAttribute('aria-label', `${s.category} confidence`);

    const val = document.createElement('div');
    val.className = 'kv';
    val.textContent = `${s.confidence}%`;

    range.addEventListener('input', () => {
      s.confidence = Number(range.value);
      val.textContent = `${s.confidence}%`;
      if (falsifySet.has(s.id)) {
        const qItem = els.queue.querySelector(`[data-signal-id="${CSS.escape(s.id)}"]`);
        if (qItem) {
          const meta = qItem.querySelector('[data-role="meta"]');
          if (meta) meta.textContent = `${s.category} • confidence ${s.confidence}%`;
        }
      }
    });

    sliderRow.appendChild(lbl);
    sliderRow.appendChild(range);
    sliderRow.appendChild(val);

    card.appendChild(top);
    card.appendChild(quote);
    card.appendChild(sliderRow);

    els.signals.appendChild(card);
  }

  els.visibleCount.textContent = String(visible.length);
  if (currentSignals.length && !visible.length) {
    setNotice('No signals match that keyword.', 'warn');
  } else {
    setNotice('');
  }
}

function renderQueue() {
  els.queue.innerHTML = '';
  if (!falsifySet.size) {
    const empty = document.createElement('div');
    empty.className = 'muted';
    empty.textContent = 'Queue is empty. Click “Falsify” on a signal card.';
    els.queue.appendChild(empty);
    return;
  }

  for (const id of falsifySet) {
    const s = currentSignals.find((x) => x.id === id);
    if (!s) continue;

    const item = document.createElement('div');
    item.className = 'qItem';
    item.dataset.signalId = id;

    const head = document.createElement('div');
    head.className = 'qHead';

    const title = document.createElement('p');
    title.className = 'qTitle';
    title.textContent = s.category;

    const remove = document.createElement('button');
    remove.type = 'button';
    remove.className = 'smallBtn';
    remove.textContent = 'Remove';
    remove.addEventListener('click', () => removeFromQueue(id));

    head.appendChild(title);
    head.appendChild(remove);

    const meta = document.createElement('p');
    meta.className = 'qMeta';
    meta.dataset.role = 'meta';
    meta.textContent = `${s.category} • confidence ${s.confidence}%`;

    const quote = document.createElement('p');
    quote.className = 'qMeta';
    quote.textContent = s.excerpt;

    item.appendChild(head);
    item.appendChild(meta);
    item.appendChild(quote);

    els.queue.appendChild(item);
  }
}

function addToQueue(id) {
  if (!currentSignals.length) return;
  const was = falsifySet.has(id);
  falsifySet.add(id);
  renderQueue();
  renderSignals();

  const el = els.queue.querySelector(`[data-signal-id="${CSS.escape(id)}"]`);
  if (el) {
    el.classList.remove('flash');
    // force reflow
    void el.offsetWidth;
    el.classList.add('flash');
    el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
  if (was) setNotice('Already in queue — focused it for you.', 'ok');
}

function removeFromQueue(id) {
  falsifySet.delete(id);
  renderQueue();
  renderSignals();
}

function clearQueue() {
  falsifySet.clear();
  renderQueue();
  renderSignals();
}

function onExtract() {
  const t = String(els.transcriptInput.value || '').trim();
  if (!t) {
    setNotice('Paste a transcript (or choose a preset) before extracting.', 'warn');
    return;
  }
  currentSignals = extractSignalsFromTranscript(t);
  setNotice('Extracted 5 signals. Adjust confidence, then queue falsification checks.', 'ok');
  renderQueue();
  renderSignals();
}

els.presetSelect.addEventListener('change', () => {
  const key = els.presetSelect.value;
  if (!key) return;
  els.transcriptInput.value = PRESETS[key] || '';
  setNotice('Preset loaded. Click “Extract signals”.', 'ok');
});

els.extractBtn.addEventListener('click', onExtract);
els.filterInput.addEventListener('input', renderSignals);
els.clearQueueBtn.addEventListener('click', clearQueue);

// initial
renderQueue();
renderSignals();
