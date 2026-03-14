const elTranscript = document.getElementById('transcript');
const elBuckets = document.getElementById('buckets');
const elHighlights = document.getElementById('highlights');
const elStatus = document.getElementById('status');

const btnSlice = document.getElementById('btnSlice');
const btnExample = document.getElementById('btnExample');
const btnClear = document.getElementById('btnClear');

const BUCKETS = [
  { key: 'all', name: 'All', color: null },
  { key: 'guidance', name: 'Guidance', color: 'guid' },
  { key: 'demand', name: 'Demand', color: 'dem' },
  { key: 'supply', name: 'Supply', color: 'sup' },
  { key: 'ai', name: 'AI', color: 'ai' },
];

// Deterministic heuristics.
// Strong phrases are worth more than weak keywords.
const RULES = {
  guidance: {
    strong: [
      'raise guidance',
      'lower guidance',
      'reaffirm guidance',
      'full-year outlook',
      'q4 outlook',
      'revenue guidance',
      'eps guidance',
      'we expect',
      'we now expect',
      'we continue to expect',
    ],
    weak: ['guidance', 'outlook', 'forecast', 'range', 'estimate', 'expects', 'expected', 'reaffirm', 'update'],
  },
  demand: {
    strong: ['strong demand', 'weak demand', 'demand is', 'order book', 'pipeline is', 'bookings were'],
    weak: ['demand', 'orders', 'bookings', 'pipeline', 'backlog', 'customers', 'churn', 'retention', 'conversion', 'pricing'],
  },
  supply: {
    strong: ['supply constrained', 'lead times', 'capacity constraints', 'inventory levels'],
    weak: ['supply', 'capacity', 'constraint', 'constraints', 'lead time', 'inventory', 'availability', 'fulfillment', 'production', 'shipments'],
  },
  ai: {
    strong: ['generative ai', 'large language model', 'llm', 'inference', 'training'],
    weak: ['ai', 'gpu', 'accelerator', 'cuda', 'model', 'models', 'copilot', 'agent', 'inference', 'training'],
  },
};

const STATE = {
  active: 'all',
  slices: [],
  stats: {},
};

function norm(s) {
  return String(s || '').toLowerCase();
}

function escapeHtml(s) {
  return String(s || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function splitSentences(text) {
  const t = String(text || '').replace(/\s+/g, ' ').trim();
  if (!t) return [];
  // Simple segmentation: split on punctuation or strong line breaks.
  // Keep it deterministic and small.
  const parts = t
    .replace(/\s*([?!])\s+/g, '$1\n')
    .replace(/\s*([.])\s+/g, '$1\n')
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean);
  return parts;
}

function scoreSentence(sentence) {
  const s = norm(sentence);
  const out = {};
  for (const key of ['guidance', 'demand', 'supply', 'ai']) {
    const strong = RULES[key].strong;
    const weak = RULES[key].weak;
    let strongHits = 0;
    let weakHits = 0;

    for (const p of strong) if (s.includes(p)) strongHits++;
    for (const w of weak) {
      // Avoid counting 'ai' inside words too aggressively.
      if (w.length <= 2) {
        const re = new RegExp(`\\b${w.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')}\\b`, 'g');
        if (re.test(s)) weakHits++;
      } else {
        if (s.includes(w)) weakHits++;
      }
    }

    const score = strongHits * 3 + weakHits;
    out[key] = { score, strongHits, weakHits };
  }
  return out;
}

function pickBucket(scores) {
  let bestKey = null;
  let bestScore = 0;
  for (const k of ['guidance', 'demand', 'supply', 'ai']) {
    const sc = scores[k].score;
    if (sc > bestScore) {
      bestScore = sc;
      bestKey = k;
    }
  }
  // Threshold keeps noise down.
  if (!bestKey || bestScore < 2) return null;
  return { key: bestKey, bestScore };
}

function computeConfidence(stat) {
  // Heuristic: strong hits matter more than weak.
  const raw = stat.strongHits * 18 + stat.weakHits * 6;
  return Math.max(0, Math.min(100, Math.round(raw)));
}

function slice(text) {
  const sentences = splitSentences(text);
  const slices = [];

  const stats = {
    guidance: { count: 0, strongHits: 0, weakHits: 0 },
    demand: { count: 0, strongHits: 0, weakHits: 0 },
    supply: { count: 0, strongHits: 0, weakHits: 0 },
    ai: { count: 0, strongHits: 0, weakHits: 0 },
  };

  for (const sentence of sentences) {
    const sc = scoreSentence(sentence);
    const picked = pickBucket(sc);
    if (!picked) continue;

    const b = picked.key;
    stats[b].count += 1;
    stats[b].strongHits += sc[b].strongHits;
    stats[b].weakHits += sc[b].weakHits;

    slices.push({ sentence, bucket: b, score: picked.bestScore, stats: sc[b] });
  }

  const conf = {};
  for (const k of ['guidance', 'demand', 'supply', 'ai']) {
    conf[k] = computeConfidence(stats[k]);
  }

  return { slices, stats, conf };
}

function bucketLabel(key) {
  if (key === 'guidance') return 'Guidance';
  if (key === 'demand') return 'Demand';
  if (key === 'supply') return 'Supply';
  if (key === 'ai') return 'AI';
  return key;
}

function classForBucket(key) {
  if (key === 'guidance') return 'guid';
  if (key === 'demand') return 'dem';
  if (key === 'supply') return 'sup';
  if (key === 'ai') return 'ai';
  return '';
}

function renderBuckets() {
  const { stats, conf } = STATE;
  elBuckets.innerHTML = '';

  for (const b of BUCKETS) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'bucket';
    btn.setAttribute('aria-pressed', String(STATE.active === b.key));

    const left = document.createElement('div');
    left.className = 'name';

    const dot = document.createElement('span');
    dot.className = 'dot';
    dot.style.background = b.color ? `var(--${b.color})` : 'rgba(255,255,255,.35)';

    const name = document.createElement('span');
    name.textContent = b.name;

    left.appendChild(dot);
    left.appendChild(name);

    const right = document.createElement('div');
    right.className = 'meta';

    if (b.key === 'all') {
      right.textContent = `${STATE.slices.length} hits`;
    } else {
      right.textContent = `${stats[b.key]?.count || 0} · ${conf[b.key] || 0}`;
    }

    btn.appendChild(left);
    btn.appendChild(right);

    btn.addEventListener('click', () => {
      STATE.active = b.key;
      renderBuckets();
      renderHighlights();
    });

    elBuckets.appendChild(btn);
  }
}

function renderHighlights() {
  const active = STATE.active;
  const rows = active === 'all' ? STATE.slices : STATE.slices.filter((s) => s.bucket === active);

  if (!STATE.slices.length) {
    elHighlights.innerHTML = '<p class="hint">No matches yet. Paste a transcript and click Slice.</p>';
    return;
  }

  if (!rows.length) {
    elHighlights.innerHTML = `<p class="hint">No highlights in bucket: <b>${escapeHtml(bucketLabel(active))}</b>.</p>`;
    return;
  }

  elHighlights.innerHTML = '';
  for (const r of rows) {
    const wrap = document.createElement('div');
    wrap.className = 'sentence';

    const badge = document.createElement('div');
    badge.className = 'badge';
    badge.innerHTML = `<span class="mark ${classForBucket(r.bucket)}">${escapeHtml(bucketLabel(r.bucket))}</span><span>score <b>${r.stats.strongHits * 3 + r.stats.weakHits}</b> (strong ${r.stats.strongHits}, weak ${r.stats.weakHits})</span>`;

    const p = document.createElement('div');
    p.className = `mark ${classForBucket(r.bucket)}`;
    p.style.display = 'block';
    p.style.padding = '10px';
    p.style.marginTop = '6px';
    p.style.lineHeight = '1.35';
    p.textContent = r.sentence;

    wrap.appendChild(badge);
    wrap.appendChild(p);
    elHighlights.appendChild(wrap);
  }
}

function setStatus(msg) {
  elStatus.textContent = msg;
}

btnExample.addEventListener('click', () => {
  elTranscript.value = `Operator: Good afternoon.\n\nCEO: We are reaffirming our full-year revenue guidance and we now expect gross margin to improve sequentially.\n\nCFO: Orders were strong in the data center and our backlog increased as customers accelerated deployments.\n\nCEO: Lead times are still elevated due to capacity constraints at key suppliers, but availability is improving.\n\nCFO: We are seeing meaningful demand for inference workloads and increased GPU consumption across generative AI customers, including large language model training.`;
  setStatus('Example loaded. Click Slice.');
});

btnClear.addEventListener('click', () => {
  elTranscript.value = '';
  STATE.slices = [];
  STATE.stats = { guidance: {}, demand: {}, supply: {}, ai: {} };
  STATE.active = 'all';
  setStatus('Cleared.');
  renderBuckets();
  renderHighlights();
});

btnSlice.addEventListener('click', () => {
  const text = elTranscript.value;
  if (!String(text || '').trim()) {
    setStatus('Paste a transcript first.');
    return;
  }
  const t0 = performance.now();
  const res = slice(text);
  const t1 = performance.now();

  STATE.slices = res.slices;
  STATE.stats = res.stats;
  STATE.conf = res.conf;
  STATE.active = 'all';

  setStatus(`Sliced ${res.slices.length} highlights in ${Math.round(t1 - t0)}ms.`);
  renderBuckets();
  renderHighlights();
});

// initial
STATE.stats = { guidance: {count:0,strongHits:0,weakHits:0}, demand: {count:0,strongHits:0,weakHits:0}, supply: {count:0,strongHits:0,weakHits:0}, ai: {count:0,strongHits:0,weakHits:0} };
STATE.conf = { guidance: 0, demand: 0, supply: 0, ai: 0 };
renderBuckets();
renderHighlights();
