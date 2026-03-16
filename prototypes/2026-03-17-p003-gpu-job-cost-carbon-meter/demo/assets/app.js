// GPU Job Cost & Carbon Meter — offline.
// Formulas:
// hours = runtimeMinutes / 60
// kWh = (effectiveW * hours) / 1000
// costKRW = kWh * priceKrwPerKwh
// co2Kg = kWh * gridKgCo2PerKwh

const $ = (id) => document.getElementById(id);

const runtimeMinutesEl = $("runtimeMinutes");
const avgPowerWEl = $("avgPowerW");
const priceEl = $("priceKrwPerKwh");
const gridEl = $("gridKgCo2PerKwh");

const energyKwhEl = $("energyKwh");
const costKrwEl = $("costKrw");
const co2KgEl = $("co2Kg");
const effectiveWEl = $("effectiveW");

const capBtns = Array.from(document.querySelectorAll(".capBtn"));
let capPct = 0; // 0, -10, -20

function n(v) {
  const x = Number(v);
  return Number.isFinite(x) && x > 0 ? x : 0;
}

function fmt(num, digits = 2) {
  return num.toLocaleString(undefined, { maximumFractionDigits: digits, minimumFractionDigits: digits });
}

function fmtKrw(num) {
  return Math.round(num).toLocaleString(undefined);
}

function updateCapsUI() {
  capBtns.forEach((b) => {
    const p = Number(b.dataset.cap || 0);
    b.setAttribute("aria-pressed", String(p === capPct));
  });
}

function compute() {
  const runtimeMinutes = n(runtimeMinutesEl.value);
  const avgPowerW = n(avgPowerWEl.value);
  const price = n(priceEl.value);
  const grid = n(gridEl.value);

  const effectiveW = avgPowerW * (1 + capPct / 100);
  const hours = runtimeMinutes / 60;

  const kwh = (effectiveW * hours) / 1000;
  const cost = kwh * price;
  const co2 = kwh * grid;

  effectiveWEl.textContent = `${effectiveW.toFixed(1)} W  (avgPowerW ${avgPowerW.toFixed(1)} × ${1 + capPct / 100})`;
  energyKwhEl.textContent = `${fmt(kwh, 3)} kWh`;
  costKrwEl.textContent = `₩ ${fmtKrw(cost)}`;
  co2KgEl.textContent = `${fmt(co2, 3)} kg`;
}

[runtimeMinutesEl, avgPowerWEl, priceEl, gridEl].forEach((el) => {
  el.addEventListener("input", compute);
});

capBtns.forEach((b) => {
  b.addEventListener("click", () => {
    capPct = Number(b.dataset.cap || 0);
    updateCapsUI();
    compute();
  });
});

// init
capPct = 0;
updateCapsUI();
compute();
