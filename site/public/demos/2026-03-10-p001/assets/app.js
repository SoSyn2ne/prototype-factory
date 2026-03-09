function fmtMoney(n) {
  if (!Number.isFinite(n)) return "—";
  return new Intl.NumberFormat(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

function fmtMoney2(n) {
  if (!Number.isFinite(n)) return "—";
  return new Intl.NumberFormat(undefined, { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);
}

function clamp(n, a, b) {
  return Math.min(b, Math.max(a, n));
}

const VOL_PRESETS = {
  low: { name: "Low", suggestedStopPct: 5 },
  med: { name: "Medium", suggestedStopPct: 8 },
  high: { name: "High", suggestedStopPct: 12 },
};

let selectedVol = "med";

function getNum(id) {
  const el = document.getElementById(id);
  const v = Number(el.value);
  return Number.isFinite(v) ? v : 0;
}

function setNum(id, value) {
  const el = document.getElementById(id);
  el.value = String(value);
}

function update() {
  const account = Math.max(0, getNum("account"));
  const riskPctRaw = getNum("riskPct");
  const riskPct = Math.max(0, riskPctRaw);
  const entry = getNum("entry");
  const stopPctRaw = getNum("stopPct");
  const stopPct = Math.max(0, stopPctRaw);
  const conviction = Number(document.getElementById("conviction").value);

  document.getElementById("convictionLabel").textContent = `${conviction}/5`;

  const riskBudget = (account * riskPct) / 100;
  const riskPerShare = entry > 0 ? (entry * stopPct) / 100 : NaN;
  const maxShares = entry > 0 && riskPerShare > 0 ? Math.floor(riskBudget / riskPerShare) : NaN;
  const maxNotional = entry > 0 && Number.isFinite(maxShares) ? maxShares * entry : NaN;
  const stopPrice = entry > 0 ? Math.max(0, entry * (1 - stopPct / 100)) : NaN;

  document.getElementById("riskBudget").textContent = fmtMoney(riskBudget);
  document.getElementById("riskPerShare").textContent = fmtMoney2(riskPerShare);
  document.getElementById("maxShares").textContent = Number.isFinite(maxShares) ? String(maxShares) : "N/A";
  document.getElementById("maxNotional").textContent = fmtMoney(maxNotional);
  document.getElementById("stopPrice").textContent = fmtMoney2(stopPrice);

  const warningsEl = document.getElementById("warnings");
  const warnings = [];
  let severity = "good";

  if (riskPctRaw > 2) {
    warnings.push("High risk-per-trade (>2%). Consider lowering to reduce tail risk.");
    severity = "warn";
  }

  if (stopPctRaw <= 0) {
    warnings.push("Stop distance must be > 0% to compute sizing. Start with a volatility preset.");
    severity = "bad";
  } else if (stopPctRaw < 2) {
    warnings.push("Very tight stop (<2%). Expect whipsaws + slippage; sizing may be misleading.");
    severity = severity === "bad" ? "bad" : "warn";
  } else if (stopPctRaw > 20) {
    warnings.push("Very wide stop (>20%). Make sure your thesis truly allows this drawdown.");
    severity = severity === "bad" ? "bad" : "warn";
  }

  if (entry <= 0) {
    warnings.push("Entry price is missing/0 — share count can’t be computed (risk budget still shown). ");
    severity = severity === "bad" ? "bad" : "warn";
  }

  const reminder = conviction <= 2
    ? "Low conviction: consider using a smaller position or demand stronger evidence before sizing up."
    : conviction === 3
      ? "Medium conviction: keep the plan explicit; don’t increase risk just because it feels ‘fine’."
      : "High conviction: guardrails still apply. Increase research, not risk %.";

  warnings.push(reminder);

  warningsEl.textContent = warnings.join(" ");
  warningsEl.className = `note ${severity}`;

  const preset = VOL_PRESETS[selectedVol];
  const suggested = preset ? preset.suggestedStopPct : 8;
  document.getElementById("stopHint").textContent = `Preset: ${preset.name} volatility suggests ~${suggested}% stop distance (override as needed).`;

  const planLines = [];
  planLines.push("Risk Budget Guardrails");
  planLines.push(`- Account: $${account.toFixed(0)}`);
  planLines.push(`- Max risk per trade: ${riskPct.toFixed(2)}% => ${fmtMoney(riskBudget)}`);
  planLines.push(`- Entry: ${entry > 0 ? fmtMoney2(entry) : "(missing)"}`);
  planLines.push(`- Stop distance: ${stopPct.toFixed(2)}% (preset: ${preset.name})`);
  planLines.push(`- Suggested stop price: ${fmtMoney2(stopPrice)}`);
  planLines.push(`- Max shares: ${Number.isFinite(maxShares) ? maxShares : "N/A"}`);
  planLines.push(`- Max notional: ${fmtMoney(maxNotional)}`);
  planLines.push("- Reminder: " + reminder);
  planLines.push("(Not financial advice.)");

  document.getElementById("planText").value = planLines.join("\n");
}

function setVol(volKey) {
  selectedVol = volKey;
  document.querySelectorAll(".seg-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.vol === volKey);
  });

  const preset = VOL_PRESETS[volKey];
  if (preset) {
    const current = getNum("stopPct");
    // If user hasn't changed much, nudge to preset. Otherwise, leave their value.
    if (!current || Math.abs(current - preset.suggestedStopPct) <= 0.6) {
      setNum("stopPct", preset.suggestedStopPct);
    }
  }
  update();
}

async function copyPlan() {
  const text = document.getElementById("planText").value;
  const status = document.getElementById("copyStatus");

  try {
    await navigator.clipboard.writeText(text);
    status.textContent = "Copied.";
  } catch {
    status.textContent = "Copy failed (browser blocked clipboard).";
  }
  setTimeout(() => (status.textContent = ""), 1500);
}

function resetDefaults() {
  setNum("account", 10000);
  setNum("riskPct", 1);
  setNum("entry", 100);
  setNum("stopPct", 8);
  document.getElementById("conviction").value = "3";
  setVol("med");
  update();
}

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("input").forEach((el) => {
    el.addEventListener("input", update);
  });

  document.querySelectorAll(".seg-btn").forEach((btn) => {
    btn.addEventListener("click", () => setVol(btn.dataset.vol));
  });

  document.getElementById("copyBtn").addEventListener("click", copyPlan);
  document.getElementById("resetBtn").addEventListener("click", resetDefaults);

  setVol("med");
  update();
});
