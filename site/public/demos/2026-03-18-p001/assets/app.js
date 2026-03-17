const $ = (id) => document.getElementById(id);

const elNode = $("node");
const elSeverity = $("severity");
const elHorizon = $("horizon");
const elConc = $("conc");

const outSeverity = $("severityOut");
const outConc = $("concOut");
const outScore = $("scoreOut");
const meterFill = $("meterFill");
const rows = $("rows");
const spark = $("spark");
const sparkLabel = $("sparkLabel");

const nodeBase = {
  eda: 0.95,
  tools: 0.9,
  wafers: 0.8,
  memory: 0.7,
  packaging: 0.6,
};

const horizonMult = {
  "1w": 0.55,
  "1m": 0.75,
  "3m": 1.0,
  "6m": 1.15,
  "12m": 1.25,
};

const nodeImpacts = {
  eda: [
    { seg: "EDA vendors (e.g., SNPS/CDNS)", why: "license limits → revenue timing risk" },
    { seg: "AI accelerators", why: "design cycle delays ripple downstream" },
    { seg: "Fabless (advanced-node)", why: "tapeout friction increases" },
    { seg: "IP blocks / verification", why: "toolchain constraints" },
    { seg: "Chinese design houses", why: "substitution pressure" },
  ],
  tools: [
    { seg: "Litho/etch/metrology tool makers", why: "shipment bans / service limits" },
    { seg: "Leading-edge fabs", why: "capacity expansion slows" },
    { seg: "Advanced packaging", why: "CoWoS-style bottlenecks worsen" },
    { seg: "Equipment supply chain", why: "parts & maintenance disruptions" },
    { seg: "Semicap cycle", why: "capex downshift risk" },
  ],
  wafers: [
    { seg: "Foundries", why: "node access restrictions reshape demand" },
    { seg: "Fabless (GPU/AI)", why: "allocation / lead time shock" },
    { seg: "Analog/mixed-signal", why: "substitution & requalification" },
    { seg: "OSATs", why: "throughput mismatches" },
    { seg: "Memory attach", why: "BOM re-optimization" },
  ],
  memory: [
    { seg: "HBM supply", why: "export + demand whiplash" },
    { seg: "DRAM/NAND", why: "pricing swings on inventory" },
    { seg: "Server OEMs", why: "BOM constraints change builds" },
    { seg: "Networking", why: "AI cluster build-out shifts" },
    { seg: "Smartphone/PC", why: "downstream demand mix" },
  ],
  packaging: [
    { seg: "OSATs / advanced packaging", why: "capacity + export friction" },
    { seg: "Substrates", why: "lead times dominate" },
    { seg: "Test equipment", why: "qualification delays" },
    { seg: "GPU boards", why: "integration bottlenecks" },
    { seg: "System builders", why: "final assembly delays" },
  ],
};

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

function scoreColor(score) {
  if (score < 35) return "low";
  if (score < 70) return "mid";
  return "high";
}

function computeScore({ node, severity, horizon, conc }) {
  const base = nodeBase[node] ?? 0.75;
  const sev = clamp(severity, 0, 100) / 100;
  const h = horizonMult[horizon] ?? 1.0;
  const c = 0.7 + (clamp(conc, 0, 100) / 100) * 0.6; // 0.7..1.3
  const raw = 100 * base * sev * h * c;
  return Math.round(clamp(raw, 0, 100));
}

function buildRows({ node, score }) {
  const items = nodeImpacts[node] ?? [];
  const weights = items.map((_, i) => {
    // deterministic descending weights
    const falloff = 1 - i * 0.12;
    return clamp(falloff, 0.35, 1);
  });

  const total = weights.reduce((a, b) => a + b, 0) || 1;
  const out = items.map((it, i) => {
    const pct = Math.round((score * (weights[i] / total)) * 1.4);
    return { ...it, impact: clamp(pct, 0, 100) };
  });

  out.sort((a, b) => b.impact - a.impact);
  return out;
}

function shockSeries({ score, horizon }) {
  const n = 18;
  const h = horizon;
  const decay = {
    "1w": 0.55,
    "1m": 0.72,
    "3m": 0.82,
    "6m": 0.88,
    "12m": 0.92,
  }[h] ?? 0.82;

  const spike = 0.22; // first point jump
  const base = score / 100;

  const arr = [];
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1);
    // fast spike then exponential-ish decay
    const s = base * ((1 + spike) * Math.exp(-t * (1 - decay) * 4) + 0.08);
    arr.push(clamp(s, 0, 1));
  }
  return arr;
}

function renderSpark(values) {
  const w = 420;
  const h = 64;
  const pad = 10;
  const innerW = w - pad * 2;
  const innerH = h - pad * 2;

  const pts = values
    .map((v, i) => {
      const x = pad + (i / (values.length - 1)) * innerW;
      const y = pad + (1 - v) * innerH;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  const areaPts = `${pad},${h - pad} ${pts} ${w - pad},${h - pad}`;

  return `
  <svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Shock decay sparkline">
    <defs>
      <linearGradient id="g" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0" stop-color="rgba(34,197,94,.95)" />
        <stop offset="0.6" stop-color="rgba(245,158,11,.95)" />
        <stop offset="1" stop-color="rgba(239,68,68,.95)" />
      </linearGradient>
    </defs>
    <polyline points="${pts}" fill="none" stroke="url(#g)" stroke-width="3" stroke-linecap="round" />
    <polygon points="${areaPts}" fill="rgba(34,197,94,.10)" />
  </svg>`;
}

function render() {
  const node = elNode.value;
  const severity = Number(elSeverity.value);
  const horizon = elHorizon.value;
  const conc = Number(elConc.value);

  outSeverity.textContent = `${severity}`;
  outConc.textContent = `${conc}`;

  const score = computeScore({ node, severity, horizon, conc });
  outScore.textContent = `Exposure ${score}/100`;
  meterFill.style.width = `${score}%`;

  const series = shockSeries({ score, horizon });
  sparkLabel.textContent = `horizon=${horizon}, peak≈${Math.round(series[0] * 100)}`;
  spark.innerHTML = renderSpark(series);

  const items = buildRows({ node, score });
  rows.innerHTML = items
    .map(
      (it) => `
      <tr>
        <td>${escapeHtml(it.seg)}</td>
        <td class="muted small">${escapeHtml(it.why)}</td>
        <td class="num">${it.impact}</td>
      </tr>`
    )
    .join("");
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

[elNode, elSeverity, elHorizon, elConc].forEach((el) => {
  el.addEventListener("input", render);
  el.addEventListener("change", render);
});

render();
