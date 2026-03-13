/* GPU Power-Cap Experiment Planner — offline vanilla JS */

const STORAGE_KEY = "pf.gpu-power-cap-planner.runs.v1";

const caps = [120, 140, 160, 180, 200];

const el = {
  gpuModel: document.getElementById("gpuModel"),
  baseW: document.getElementById("baseW"),
  baseC: document.getElementById("baseC"),
  baseUph: document.getElementById("baseUph"),
  price: document.getElementById("price"),
  currency: document.getElementById("currency"),
  jobUnits: document.getElementById("jobUnits"),
  sens: document.getElementById("sens"),
  sensLabel: document.getElementById("sensLabel"),
  planTbody: document.getElementById("planTbody"),
  runs: document.getElementById("runs"),
  btnClear: document.getElementById("btnClear"),
};

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

function n(v, fallback = 0) {
  const x = Number(v);
  return Number.isFinite(x) ? x : fallback;
}

function fmtMoney(x, cur) {
  const v = Number.isFinite(x) ? x : 0;
  if (cur === "KRW") return `${Math.round(v).toLocaleString()} KRW`;
  return `$${v.toFixed(2)}`;
}

function fmt(x, digits = 1) {
  const v = Number.isFinite(x) ? x : 0;
  return v.toFixed(digits);
}

function estimateRow({ capW, baseW, baseC, baseUph, sens, pricePerKwh, jobUnits }) {
  const ratio = capW / Math.max(1, baseW);

  // Throughput scales sublinearly with power.
  // sens=1.0 => simple power ratio; sens<1 => more resilient; sens>1 => more sensitive.
  const estUph = baseUph * Math.pow(ratio, sens);

  // Temp drops as cap reduces (rough). 0.07°C per watt reduction + mild floor.
  const estC = baseC - (baseW - capW) * 0.07;

  const kwhPerHr = capW / 1000;
  const unitsPerKwh = estUph / Math.max(0.000001, kwhPerHr);
  const costPerHr = kwhPerHr * pricePerKwh;

  const hoursPerJob = jobUnits > 0 ? jobUnits / Math.max(0.000001, estUph) : null;
  const costPerJob = hoursPerJob === null ? null : hoursPerJob * costPerHr;

  return { capW, estUph, estC, unitsPerKwh, costPerHr, costPerJob, hoursPerJob };
}

function getInputs() {
  const baseW = clamp(n(el.baseW.value, 200), 1, 1000);
  const baseC = clamp(n(el.baseC.value, 70), -10, 120);
  const baseUph = clamp(n(el.baseUph.value, 100), 0, 1e9);
  const pricePerKwh = clamp(n(el.price.value, 0), 0, 1e9);
  const jobUnits = clamp(n(el.jobUnits.value, 0), 0, 1e9);
  const sens = clamp(n(el.sens.value, 1.0), 0.6, 1.4);

  return { baseW, baseC, baseUph, pricePerKwh, jobUnits, sens };
}

function loadRuns() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveRuns(runs) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(runs));
  } catch {
    // ignore
  }
}

function renderPlan() {
  const { baseW, baseC, baseUph, pricePerKwh, jobUnits, sens } = getInputs();
  el.sensLabel.textContent = sens.toFixed(2);

  const cur = el.currency.value;

  el.planTbody.innerHTML = "";

  const rows = caps.map((capW) =>
    estimateRow({ capW, baseW, baseC, baseUph, sens, pricePerKwh, jobUnits })
  );

  // Highlight best units/kWh
  const best = rows.reduce((acc, r) => (r.unitsPerKwh > acc.unitsPerKwh ? r : acc), rows[0]);

  for (const r of rows) {
    const tr = document.createElement("tr");
    const isBest = r.capW === best.capW;

    tr.innerHTML = `
      <td><span class="pill"><strong>${r.capW}W</strong>${isBest ? " <span style=\"color:var(--good)\">best</span>" : ""}</span></td>
      <td class="num">${fmt(r.estC, 1)}°C</td>
      <td class="num">${fmt(r.estUph, 1)}</td>
      <td class="num">${fmt(r.unitsPerKwh, 1)}</td>
      <td class="num">${fmtMoney(r.costPerHr, cur)}</td>
      <td class="num">${r.costPerJob === null ? "—" : fmtMoney(r.costPerJob, cur)}</td>
      <td class="num"><button class="btn" data-log="${r.capW}" type="button">Log result</button></td>
    `;

    el.planTbody.appendChild(tr);
  }

  el.planTbody.querySelectorAll("[data-log]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const capW = Number(btn.getAttribute("data-log"));
      logResult(capW);
    });
  });
}

function logResult(capW) {
  const { baseW, baseC, baseUph, pricePerKwh, jobUnits, sens } = getInputs();
  const cur = el.currency.value;

  const est = estimateRow({ capW, baseW, baseC, baseUph, sens, pricePerKwh, jobUnits });

  const actualUph = window.prompt(`Actual throughput (units/hr) for ${capW}W?`, String(est.estUph.toFixed(1)));
  if (actualUph === null) return;

  const actualC = window.prompt(`Peak temp (°C) for ${capW}W?`, String(est.estC.toFixed(1)));
  if (actualC === null) return;

  const notes = window.prompt("Notes (optional)", "");
  if (notes === null) return;

  const run = {
    id: crypto.randomUUID(),
    ts: Date.now(),
    gpuModel: String(el.gpuModel.value || "").trim(),
    capW,
    est: {
      uph: est.estUph,
      c: est.estC,
      costPerHr: est.costPerHr,
      costPerJob: est.costPerJob,
      unitsPerKwh: est.unitsPerKwh,
    },
    actual: {
      uph: n(actualUph, est.estUph),
      c: n(actualC, est.estC),
    },
    currency: cur,
    notes: String(notes || "").trim(),
  };

  const runs = loadRuns();
  runs.unshift(run);
  saveRuns(runs.slice(0, 30));
  renderRuns();
}

function renderRuns() {
  const runs = loadRuns();
  el.runs.innerHTML = "";

  if (runs.length === 0) {
    el.runs.innerHTML = '<div class="empty">No runs logged yet.</div>';
    return;
  }

  for (const r of runs) {
    const div = document.createElement("div");
    div.className = "run";

    const when = new Date(r.ts).toLocaleString();
    div.innerHTML = `
      <div class="t">
        <div><strong>${escapeHtml(r.gpuModel || "GPU")}</strong> — ${r.capW}W</div>
        <div class="pill"><strong>${fmt(r.actual.uph, 1)}</strong> uph</div>
      </div>
      <div class="meta">
        ${escapeHtml(when)} · temp ${fmt(r.actual.c, 1)}°C · est units/kWh ${fmt(r.est.unitsPerKwh, 1)}
        ${r.notes ? ` · notes: ${escapeHtml(r.notes)}` : ""}
      </div>
    `;

    el.runs.appendChild(div);
  }
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function bind() {
  const rerender = () => renderPlan();

  [el.baseW, el.baseC, el.baseUph, el.price, el.currency, el.jobUnits].forEach((i) => i.addEventListener("input", rerender));
  el.sens.addEventListener("input", rerender);

  el.btnClear.addEventListener("click", () => {
    if (!confirm("Clear all logged runs from this browser?")) return;
    saveRuns([]);
    renderRuns();
  });
}

bind();
renderPlan();
renderRuns();
