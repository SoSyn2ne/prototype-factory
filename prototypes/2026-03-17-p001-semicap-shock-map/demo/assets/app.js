// Semicap Shock Map — offline, deterministic heuristic ranking.
// Model idea: each ticker has static exposures; each shock type applies a formula.
// This is NOT investment advice. It's a thinking tool.

const $ = (id) => document.getElementById(id);

const shockTypeEl = $("shockType");
const shockPctEl = $("shockPct");
const shockPctOut = $("shockPctOut");
const rowsEl = $("rows");
const explainTextEl = $("explainText");
const modePill = $("modePill");
const resetBtn = $("resetBtn");

/**
 * Static exposures (0..1). Chosen to be plausible, not accurate.
 * - equip: benefits when equipment cycle/demand rises; hurt when fabs delay capex.
 * - fabConc: sensitivity to a single/few fabs / supply concentration.
 * - aiDemand: sensitivity to AI/data-center demand surges.
 * - geoRisk: sensitivity to export controls / geopolitics.
 */
const tickers = [
  { t: "ASML", role: "EUV tools", x: { equip: 1.0, fabConc: 0.4, aiDemand: 0.6, geoRisk: 0.8 } },
  { t: "TSM", role: "Foundry", x: { equip: 0.3, fabConc: 1.0, aiDemand: 0.8, geoRisk: 0.9 } },
  { t: "NVDA", role: "AI chips", x: { equip: 0.2, fabConc: 0.6, aiDemand: 1.0, geoRisk: 0.7 } },
  { t: "AMD", role: "CPU/GPU", x: { equip: 0.2, fabConc: 0.6, aiDemand: 0.7, geoRisk: 0.6 } },
  { t: "AMAT", role: "Semi equip", x: { equip: 0.9, fabConc: 0.3, aiDemand: 0.6, geoRisk: 0.5 } },
  { t: "LRCX", role: "Semi equip", x: { equip: 0.9, fabConc: 0.3, aiDemand: 0.5, geoRisk: 0.5 } },
];

// Baseline preference weights (stable, modestly pro-AI).
const baseW = { equip: 0.25, fabConc: 0.15, aiDemand: 0.45, geoRisk: -0.20 };

function clamp(n, lo, hi) {
  return Math.max(lo, Math.min(hi, n));
}

function scoreBaseline(x) {
  return (
    baseW.equip * x.equip +
    baseW.fabConc * x.fabConc +
    baseW.aiDemand * x.aiDemand +
    baseW.geoRisk * x.geoRisk
  );
}

function scoreWithShock(x, kind, pct) {
  const s = pct / 100;

  // Scenario-specific deltas.
  // Intuition:
  // - capacity cut: hurts fab concentration; helps pricing power for scarce AI chips; equipment suffers near-term.
  // - export restriction: increases geoRisk penalty; equipment exposed; foundry/designer impacted.
  // - demand surge: boosts AI + equipment; less penalty for fab concentration.
  let dEquip = 0;
  let dFab = 0;
  let dAI = 0;
  let dGeo = 0;

  if (kind === "capacity") {
    dEquip = -0.25 * s;
    dFab = -0.50 * s;
    dAI = +0.35 * s;
    dGeo = -0.10 * s;
  } else if (kind === "export") {
    dEquip = -0.35 * s;
    dFab = -0.20 * s;
    dAI = -0.20 * s;
    dGeo = -0.65 * s;
  } else if (kind === "demand") {
    dEquip = +0.35 * s;
    dFab = +0.05 * s;
    dAI = +0.60 * s;
    dGeo = -0.05 * s;
  }

  const w = {
    equip: baseW.equip + dEquip,
    fabConc: baseW.fabConc + dFab,
    aiDemand: baseW.aiDemand + dAI,
    geoRisk: baseW.geoRisk + dGeo,
  };

  return w.equip * x.equip + w.fabConc * x.fabConc + w.aiDemand * x.aiDemand + w.geoRisk * x.geoRisk;
}

function kindLabel(kind) {
  if (kind === "capacity") return "Capacity cut";
  if (kind === "export") return "Export restriction";
  return "Demand surge";
}

function shortReason(kind, x) {
  if (kind === "capacity") {
    if (x.fabConc > 0.8) return "High fab concentration risk";
    if (x.aiDemand > 0.85) return "Scarcity + AI pricing power";
    if (x.equip > 0.85) return "Capex pause headwind";
    return "Mixed exposure";
  }
  if (kind === "export") {
    if (x.geoRisk > 0.8) return "Export/geopolitics sensitivity";
    if (x.equip > 0.85) return "Tool shipment risk";
    return "Secondary exposure";
  }
  // demand surge
  if (x.aiDemand > 0.85) return "AI demand leverage";
  if (x.equip > 0.85) return "Capacity build tailwind";
  return "Moderate uplift";
}

function render() {
  const kind = shockTypeEl.value;
  const pct = Number(shockPctEl.value || 0);
  shockPctOut.textContent = `${pct}%`;

  const baseline = tickers
    .map((it) => ({ ...it, base: scoreBaseline(it.x) }))
    .sort((a, b) => b.base - a.base);

  const ranked = tickers
    .map((it) => ({
      ...it,
      base: scoreBaseline(it.x),
      score: scoreWithShock(it.x, kind, pct),
    }))
    .sort((a, b) => b.score - a.score);

  // UI pill
  modePill.textContent = pct === 0 ? "Baseline" : `${kindLabel(kind)} • ${pct}%`;
  modePill.style.background = pct === 0 ? "rgba(34,211,238,.10)" : "rgba(167,139,250,.12)";

  // Rows
  rowsEl.innerHTML = "";
  ranked.forEach((it, idx) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${idx + 1}</td>
      <td><strong>${it.t}</strong></td>
      <td>${it.role}</td>
      <td class="num">${(it.score * 100).toFixed(1)}</td>
      <td>${shortReason(kind, it.x)}</td>
    `;
    rowsEl.appendChild(tr);
  });

  // Explanation: compare baseline top vs scenario top, and mention biggest factor.
  const topNow = ranked[0];
  const topBase = baseline[0];

  if (pct === 0) {
    explainTextEl.textContent = `No shock applied. Baseline top is ${topBase.t} because it has strong AI demand exposure with moderate penalties.`;
    return;
  }

  const moved = topNow.t !== topBase.t;
  const delta = (topNow.score - topNow.base) * 100;
  const why =
    kind === "capacity"
      ? "Capacity cuts penalize fab concentration and near-term capex, while rewarding scarce AI-levered names."
      : kind === "export"
        ? "Export restrictions increase geopolitics/tool-shipment penalties across the stack."
        : "Demand surges reward AI sensitivity and equipment tailwinds.";

  explainTextEl.textContent = moved
    ? `${topNow.t} moved to #1 (was behind ${topBase.t} at baseline). Net shock impact for ${topNow.t}: ${delta.toFixed(1)} pts. ${why}`
    : `${topNow.t} stayed #1. Net shock impact for ${topNow.t}: ${delta.toFixed(1)} pts. ${why}`;
}

shockTypeEl.addEventListener("change", render);
shockPctEl.addEventListener("input", render);
resetBtn.addEventListener("click", () => {
  shockTypeEl.value = "capacity";
  shockPctEl.value = "0";
  render();
});

render();
