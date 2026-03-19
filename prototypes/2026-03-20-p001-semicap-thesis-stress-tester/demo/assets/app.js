const $ = (id) => document.getElementById(id);

const presetEl = $("preset");
const resetBtn = $("resetBtn");

const exportEl = $("exportSeverity");
const slumpEl = $("demandSlump");
const fxEl = $("fx");
const ratesEl = $("rates");

const exportOut = $("exportOut");
const slumpOut = $("slumpOut");
const fxOut = $("fxOut");
const ratesOut = $("ratesOut");

const scoreNum = $("scoreNum");
const scoreFill = $("scoreFill");
const cardsEl = $("assumptionCards");
const nextEl = $("nextList");
const convictionPill = $("convictionPill");

const presets = {
  baseline: { exportSeverity: 20, demandSlump: 25, fx: 30, rates: 35 },
  export: { exportSeverity: 75, demandSlump: 30, fx: 35, rates: 40 },
  slump: { exportSeverity: 25, demandSlump: 80, fx: 35, rates: 45 },
  fx: { exportSeverity: 20, demandSlump: 35, fx: 85, rates: 45 },
  rates: { exportSeverity: 20, demandSlump: 35, fx: 35, rates: 85 },
  combo: { exportSeverity: 80, demandSlump: 75, fx: 45, rates: 55 },
};

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

function setInputs(values) {
  exportEl.value = values.exportSeverity;
  slumpEl.value = values.demandSlump;
  fxEl.value = values.fx;
  ratesEl.value = values.rates;
  syncOutputs();
  render();
}

function syncOutputs() {
  exportOut.textContent = exportEl.value;
  slumpOut.textContent = slumpEl.value;
  fxOut.textContent = fxEl.value;
  ratesOut.textContent = ratesEl.value;
}

function calcRisk(inputs) {
  // Weighted heuristic: export and slump hit core thesis harder.
  const w = { exportSeverity: 0.32, demandSlump: 0.34, fx: 0.16, rates: 0.18 };
  const raw =
    inputs.exportSeverity * w.exportSeverity +
    inputs.demandSlump * w.demandSlump +
    inputs.fx * w.fx +
    inputs.rates * w.rates;

  // Nonlinear penalty when BOTH export + slump are elevated.
  const combo = Math.max(0, (inputs.exportSeverity - 55) / 45) * Math.max(0, (inputs.demandSlump - 55) / 45);
  const bumped = raw + combo * 18;
  return clamp(Math.round(bumped), 0, 100);
}

function statusFromThreshold(v, watchAt, brokenAt) {
  if (v >= brokenAt) return "broken";
  if (v >= watchAt) return "watch";
  return "ok";
}

function buildAssumptions(inputs) {
  // Each assumption watches specific knobs.
  const a = [
    {
      key: "capex",
      title: "Customers keep capex on track",
      metric: Math.max(inputs.demandSlump, inputs.rates),
      status: statusFromThreshold(Math.max(inputs.demandSlump, inputs.rates), 55, 78),
      why: {
        ok: "Downcycle + rates are manageable; capex delays are possible but not forced.",
        watch: "Downcycle or tight money can push customers to pause tool orders.",
        broken: "Severe slump + tight rates likely force capex cuts / pushouts.",
      },
    },
    {
      key: "export",
      title: "Export controls don’t kneecap TAM",
      metric: inputs.exportSeverity,
      status: statusFromThreshold(inputs.exportSeverity, 50, 75),
      why: {
        ok: "Licensing risk exists but not dominant; shipments mix can adapt.",
        watch: "Controls may constrain certain tools / customers; mix and lead times worsen.",
        broken: "Tight controls likely remove a major segment or block shipments.",
      },
    },
    {
      key: "fx",
      title: "FX doesn’t erase margin",
      metric: inputs.fx,
      status: statusFromThreshold(inputs.fx, 60, 85),
      why: {
        ok: "FX moves are within hedging tolerance.",
        watch: "Volatile USD/KRW can distort reported margins and planning.",
        broken: "Extreme FX volatility can compress margins / raise imported costs.",
      },
    },
    {
      key: "multiple",
      title: "Valuation multiple survives",
      metric: inputs.rates,
      status: statusFromThreshold(inputs.rates, 55, 82),
      why: {
        ok: "Rates not high enough to dominate equity duration risk.",
        watch: "Higher-for-longer pressures multiples even if fundamentals hold.",
        broken: "Tight rates can compress multiples enough to kill near-term upside.",
      },
    },
  ];

  return a;
}

function convictionLabel(score) {
  if (score < 30) return { label: "Resilient", tone: "ok" };
  if (score < 55) return { label: "Caution", tone: "watch" };
  if (score < 75) return { label: "High risk", tone: "watch" };
  return { label: "Thesis likely broken", tone: "broken" };
}

function buildNextEvidence(assumptions) {
  const items = [];
  const broken = assumptions.filter((x) => x.status === "broken");
  const watch = assumptions.filter((x) => x.status === "watch");

  const add = (t) => items.push(t);

  if (broken.some((x) => x.key === "export") || watch.some((x) => x.key === "export")) {
    add("Check: latest BIS / license headlines; which tool categories are restricted?");
    add("Check: customer exposure (China-revenue share, service parts, lead-time changes).");
  }

  if (broken.some((x) => x.key === "capex") || watch.some((x) => x.key === "capex")) {
    add("Check: customer capex guidance updates and WFE revisions (company presentations).");
    add("Check: channel inventory / booking-to-bill signals (if any disclosed).");
  }

  if (broken.some((x) => x.key === "multiple") || watch.some((x) => x.key === "multiple")) {
    add("Check: rates path / inflation prints; watch equity duration risk regime shifts.");
    add("Plan: position size and time horizon — avoid forcing near-term multiple expansion.");
  }

  if (broken.some((x) => x.key === "fx") || watch.some((x) => x.key === "fx")) {
    add("Check: hedging notes in filings; timing of FX pass-through.");
    add("Check: imported component costs vs export revenue currency.");
  }

  if (items.length === 0) {
    add("Baseline looks stable. Write down 3 thesis assumptions and attach evidence links.");
  }

  return items.slice(0, 6);
}

function render() {
  const inputs = {
    exportSeverity: Number(exportEl.value),
    demandSlump: Number(slumpEl.value),
    fx: Number(fxEl.value),
    rates: Number(ratesEl.value),
  };

  const score = calcRisk(inputs);
  const conv = convictionLabel(score);

  convictionPill.textContent = conv.label;
  convictionPill.style.borderColor =
    conv.tone === "ok" ? "rgba(22,163,74,0.35)" : conv.tone === "broken" ? "rgba(220,38,38,0.35)" : "rgba(217,119,6,0.35)";

  scoreNum.textContent = String(score);
  scoreFill.style.width = `${score}%`;

  const assumptions = buildAssumptions(inputs);
  cardsEl.innerHTML = assumptions
    .map((a) => {
      const badgeClass = a.status;
      const label = a.status.toUpperCase();
      const why = a.why[a.status];
      return `
        <article class="card" data-status="${badgeClass}">
          <div class="cardTop">
            <div style="font-weight:900; font-size:13px;">${a.title}</div>
            <span class="badge ${badgeClass}">${label}</span>
          </div>
          <p>${why}</p>
        </article>
      `;
    })
    .join("");

  const next = buildNextEvidence(assumptions);
  nextEl.innerHTML = next.map((t) => `<li>${t}</li>`).join("");
}

presetEl.addEventListener("change", () => {
  const p = presets[presetEl.value] || presets.baseline;
  setInputs(p);
});

resetBtn.addEventListener("click", () => {
  const p = presets[presetEl.value] || presets.baseline;
  setInputs(p);
});

for (const el of [exportEl, slumpEl, fxEl, ratesEl]) {
  el.addEventListener("input", () => {
    syncOutputs();
    render();
  });
}

// init
setInputs(presets.baseline);
