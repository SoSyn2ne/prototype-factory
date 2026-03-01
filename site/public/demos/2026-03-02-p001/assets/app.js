"use strict";

const PRESETS = {
  "transient-5xx": {
    budget: 8000,
    a: { type: "linear", attempts: 6, baseDelay: 500, capDelay: 4000, jitter: "equal", p: 0.45 },
    b: { type: "exponential", attempts: 6, baseDelay: 300, capDelay: 5000, jitter: "full", p: 0.45 },
  },
  "rate-limit-429": {
    budget: 20000,
    a: { type: "linear", attempts: 8, baseDelay: 1200, capDelay: 15000, jitter: "equal", p: 0.28 },
    b: { type: "exponential", attempts: 8, baseDelay: 700, capDelay: 30000, jitter: "full", p: 0.28 },
  },
  "provider-outage": {
    budget: 90000,
    a: { type: "linear", attempts: 12, baseDelay: 2500, capDelay: 20000, jitter: "none", p: 0.12 },
    b: { type: "exponential", attempts: 12, baseDelay: 1500, capDelay: 60000, jitter: "equal", p: 0.12 },
  },
};

const SVG_NS = "http://www.w3.org/2000/svg";

function clamp(value, min, max, fallback) {
  const num = Number(value);
  if (!Number.isFinite(num)) {
    return fallback;
  }
  return Math.min(max, Math.max(min, num));
}

function asInt(value, min, max, fallback) {
  return Math.round(clamp(value, min, max, fallback));
}

function formatPercent(value) {
  return `${(value * 100).toFixed(2)}%`;
}

function formatMs(value) {
  return `${Math.round(value).toLocaleString()} ms`;
}

function getRawDelay(type, attempt, baseDelay, capDelay) {
  const linearDelay = baseDelay * attempt;
  const exponentialDelay = baseDelay * Math.pow(2, attempt - 1);
  const raw = type === "exponential" ? exponentialDelay : linearDelay;
  return Math.min(capDelay, raw);
}

function applyJitter(delay, jitter, rng = Math.random) {
  if (jitter === "full") {
    return rng() * delay;
  }
  if (jitter === "equal") {
    return delay / 2 + rng() * (delay / 2);
  }
  return delay;
}

function computeSchedule(config, rng = Math.random) {
  const rows = [];
  let cumulative = 0;
  for (let attempt = 1; attempt <= config.attempts; attempt += 1) {
    const base = getRawDelay(config.type, attempt, config.baseDelay, config.capDelay);
    const delay = Math.round(applyJitter(base, config.jitter, rng));
    cumulative += delay;
    const successAtAttempt = Math.pow(1 - config.p, attempt - 1) * config.p;
    rows.push({
      attempt,
      delay,
      cumulative,
      successAtAttempt,
    });
  }
  return rows;
}

function computeMetrics(config, rows, budgetMs) {
  const eventualSuccess = 1 - Math.pow(1 - config.p, config.attempts);
  const neverSuccess = 1 - eventualSuccess;

  const weightedAttemptSum = rows.reduce(
    (sum, row) => sum + row.attempt * row.successAtAttempt,
    0
  );
  const weightedTimeSum = rows.reduce(
    (sum, row) => sum + row.cumulative * row.successAtAttempt,
    0
  );

  const expectedAttempts = eventualSuccess > 0 ? weightedAttemptSum / eventualSuccess : null;
  const expectedTime = eventualSuccess > 0 ? weightedTimeSum / eventualSuccess : null;

  const attemptsWithinBudget = rows.filter((row) => row.cumulative <= budgetMs).length;
  const successByBudget = 1 - Math.pow(1 - config.p, attemptsWithinBudget);

  const budgetRows = rows.filter((row) => row.cumulative <= budgetMs);
  const budgetMass = budgetRows.reduce((sum, row) => sum + row.successAtAttempt, 0);
  const expectedTimeByBudget =
    budgetMass > 0
      ? budgetRows.reduce((sum, row) => sum + row.cumulative * row.successAtAttempt, 0) / budgetMass
      : Infinity;

  return {
    eventualSuccess,
    neverSuccess,
    expectedAttempts,
    expectedTime,
    attemptsWithinBudget,
    successByBudget,
    expectedTimeByBudget,
  };
}

function readStrategyConfig(panel) {
  const getField = (name) => panel.querySelector(`[data-field="${name}"]`);
  return {
    type: getField("type").value === "exponential" ? "exponential" : "linear",
    attempts: asInt(getField("attempts").value, 1, 20, 1),
    baseDelay: asInt(getField("baseDelay").value, 1, 3_600_000, 1),
    capDelay: asInt(getField("capDelay").value, 1, 3_600_000, 1),
    jitter: ["none", "full", "equal"].includes(getField("jitter").value)
      ? getField("jitter").value
      : "none",
    p: clamp(getField("p").value, 0, 1, 0),
  };
}

function writeStrategyConfig(panel, config) {
  panel.querySelector('[data-field="type"]').value = config.type;
  panel.querySelector('[data-field="attempts"]').value = config.attempts;
  panel.querySelector('[data-field="baseDelay"]').value = config.baseDelay;
  panel.querySelector('[data-field="capDelay"]').value = config.capDelay;
  panel.querySelector('[data-field="jitter"]').value = config.jitter;
  panel.querySelector('[data-field="p"]').value = config.p;
}

function renderMetrics(resultEl, metrics) {
  const metricGrid = resultEl.querySelector(".metric-grid");
  metricGrid.innerHTML = "";

  const items = [
    { label: "Eventual success", value: formatPercent(metrics.eventualSuccess) },
    { label: "Never succeeds", value: formatPercent(metrics.neverSuccess) },
    {
      label: "Expected attempts (given success)",
      value: metrics.expectedAttempts === null ? "N/A" : metrics.expectedAttempts.toFixed(2),
    },
    {
      label: "Expected time (given success)",
      value: Number.isFinite(metrics.expectedTime) ? formatMs(metrics.expectedTime) : "N/A",
    },
    { label: "Attempts within budget", value: `${metrics.attemptsWithinBudget}` },
    { label: "Success within budget", value: formatPercent(metrics.successByBudget) },
  ];

  items.forEach((item) => {
    const cell = document.createElement("div");
    cell.className = "metric";
    cell.innerHTML = `<span>${item.label}</span><strong>${item.value}</strong>`;
    metricGrid.appendChild(cell);
  });
}

function renderTable(resultEl, rows) {
  const tbody = resultEl.querySelector("tbody");
  tbody.innerHTML = "";

  rows.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${row.attempt}</td>
      <td>${row.delay.toLocaleString()}</td>
      <td>${row.cumulative.toLocaleString()}</td>
      <td>${formatPercent(row.successAtAttempt)}</td>
    `;
    tbody.appendChild(tr);
  });
}

function renderTimeline(resultEl, rows) {
  const svg = resultEl.querySelector(".timeline");
  while (svg.firstChild) {
    svg.removeChild(svg.firstChild);
  }

  const baseline = document.createElementNS(SVG_NS, "line");
  baseline.setAttribute("x1", "0");
  baseline.setAttribute("x2", "100");
  baseline.setAttribute("y1", "28");
  baseline.setAttribute("y2", "28");
  baseline.setAttribute("stroke", "#afc0cb");
  baseline.setAttribute("stroke-width", "0.7");
  svg.appendChild(baseline);

  const maxTime = rows.length > 0 ? rows[rows.length - 1].cumulative : 1;

  rows.forEach((row, index) => {
    const prevCumulative = index === 0 ? 0 : rows[index - 1].cumulative;
    const xStart = (prevCumulative / maxTime) * 100;
    const xEnd = (row.cumulative / maxTime) * 100;
    const width = Math.max(0.8, xEnd - xStart);

    const rect = document.createElementNS(SVG_NS, "rect");
    rect.setAttribute("x", xStart.toFixed(2));
    rect.setAttribute("y", "20");
    rect.setAttribute("width", width.toFixed(2));
    rect.setAttribute("height", "8");
    rect.setAttribute("rx", "0.8");
    rect.setAttribute("opacity", "0.42");
    svg.appendChild(rect);

    const marker = document.createElementNS(SVG_NS, "circle");
    marker.setAttribute("cx", xEnd.toFixed(2));
    marker.setAttribute("cy", "16");
    marker.setAttribute("r", "1.5");
    svg.appendChild(marker);

    const label = document.createElementNS(SVG_NS, "text");
    label.setAttribute("x", xEnd.toFixed(2));
    label.setAttribute("y", "12");
    label.setAttribute("font-size", "2.6");
    label.setAttribute("text-anchor", "middle");
    label.setAttribute("fill", "#4c616f");
    label.textContent = String(row.attempt);
    svg.appendChild(label);
  });
}

function renderCompareSummary(compareEl, budgetMs, aMetrics, bMetrics) {
  const fasterWithinBudget = (() => {
    const aTime = aMetrics.expectedTimeByBudget;
    const bTime = bMetrics.expectedTimeByBudget;

    if (!Number.isFinite(aTime) && !Number.isFinite(bTime)) return "Tie";
    if (!Number.isFinite(aTime)) return "B";
    if (!Number.isFinite(bTime)) return "A";
    if (Math.abs(aTime - bTime) < 0.5) return "Tie";
    return aTime < bTime ? "A" : "B";
  })();

  const higherProbability = (() => {
    if (Math.abs(aMetrics.eventualSuccess - bMetrics.eventualSuccess) < 0.000001) return "Tie";
    return aMetrics.eventualSuccess > bMetrics.eventualSuccess ? "A" : "B";
  })();

  const fasterLine =
    fasterWithinBudget === "Tie"
      ? "Both strategies are effectively tied on speed within the current budget."
      : `Strategy ${fasterWithinBudget} is faster within the ${formatMs(budgetMs)} budget.`;

  const probabilityLine =
    higherProbability === "Tie"
      ? "Both strategies have the same eventual success probability."
      : `Strategy ${higherProbability} has higher eventual success probability.`;

  compareEl.innerHTML = `
    <h3>Comparison Summary</h3>
    <p><strong>Budget:</strong> ${formatMs(budgetMs)}</p>
    <p><strong>A:</strong> ${formatPercent(aMetrics.successByBudget)} success by budget, ${formatPercent(aMetrics.eventualSuccess)} eventual.</p>
    <p><strong>B:</strong> ${formatPercent(bMetrics.successByBudget)} success by budget, ${formatPercent(bMetrics.eventualSuccess)} eventual.</p>
    <p class="winner">${fasterLine}</p>
    <p class="winner">${probabilityLine}</p>
    <p class="caution">Rerun Simulate to resample jitter and inspect variability.</p>
  `;
}

function simulateAll() {
  const strategyA = document.querySelector('[data-strategy="a"]');
  const strategyB = document.querySelector('[data-strategy="b"]');
  const resultA = document.getElementById("result-a");
  const resultB = document.getElementById("result-b");
  const compare = document.getElementById("compare-summary");

  const budgetInput = document.getElementById("time-budget");
  const budgetMs = asInt(budgetInput.value, 1, 86_400_000, 10_000);
  budgetInput.value = budgetMs;

  const configA = readStrategyConfig(strategyA);
  const configB = readStrategyConfig(strategyB);

  const rowsA = computeSchedule(configA);
  const rowsB = computeSchedule(configB);
  const metricsA = computeMetrics(configA, rowsA, budgetMs);
  const metricsB = computeMetrics(configB, rowsB, budgetMs);

  resultA.dataset.key = "a";
  resultB.dataset.key = "b";

  renderMetrics(resultA, metricsA);
  renderMetrics(resultB, metricsB);
  renderTable(resultA, rowsA);
  renderTable(resultB, rowsB);
  renderTimeline(resultA, rowsA);
  renderTimeline(resultB, rowsB);
  renderCompareSummary(compare, budgetMs, metricsA, metricsB);
}

function applyPreset(presetName) {
  const preset = PRESETS[presetName];
  if (!preset) {
    return;
  }

  writeStrategyConfig(document.querySelector('[data-strategy="a"]'), preset.a);
  writeStrategyConfig(document.querySelector('[data-strategy="b"]'), preset.b);
  document.getElementById("time-budget").value = preset.budget;
}

function init() {
  const presetSelect = document.getElementById("preset-select");
  const simulateBtn = document.getElementById("simulate-btn");

  presetSelect.addEventListener("change", () => {
    applyPreset(presetSelect.value);
    simulateAll();
  });

  simulateBtn.addEventListener("click", simulateAll);

  applyPreset(presetSelect.value);
  simulateAll();
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", init);
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    applyJitter,
    computeSchedule,
    computeMetrics,
    getRawDelay,
  };
}
