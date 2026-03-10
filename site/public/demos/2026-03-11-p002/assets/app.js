/* RSVP Funnel Simulator — vanilla demo (no network) */

const STORAGE_KEY = "pf_rsvp_funnel_sim_v1";
const $ = (id) => document.getElementById(id);

const scenarioSelect = $("scenarioSelect");
const newBtn = $("newBtn");
const resetBtn = $("resetBtn");

const eventDate = $("eventDate");
const deadlineDate = $("deadlineDate");
const invited = $("invited");
const baseResponse = $("baseResponse");
const speedDays = $("speedDays");
const lift = $("lift");
const saveBtn = $("saveBtn");
const err = $("err");

const remindersEl = $("reminders");
const addReminderBtn = $("addReminderBtn");

const chart = $("chart");
const ctx = chart.getContext("2d");
const byDeadline = $("byDeadline");

function safeParse(str, fb) {
  try { return JSON.parse(str); } catch { return fb; }
}

function uid() {
  return Math.random().toString(16).slice(2) + Date.now().toString(16);
}

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

function daysBetween(aIso, bIso) {
  const a = new Date(aIso + "T00:00:00");
  const b = new Date(bIso + "T00:00:00");
  return Math.round((b - a) / (24 * 3600 * 1000));
}

function addDays(iso, days) {
  const d = new Date(iso + "T00:00:00");
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

function defaultScenario() {
  const today = new Date();
  const ev = new Date(today); ev.setDate(ev.getDate() + 30);
  const dl = new Date(today); dl.setDate(dl.getDate() + 18);
  return {
    id: uid(),
    name: "Scenario " + new Date().toLocaleDateString(),
    eventDate: ev.toISOString().slice(0, 10),
    deadlineDate: dl.toISOString().slice(0, 10),
    invited: 120,
    baseResponse: 85,
    speedDays: 18,
    lift: 12,
    reminders: [
      { id: uid(), date: addDays(dl.toISOString().slice(0,10), -7), strength: 0.7 },
      { id: uid(), date: addDays(dl.toISOString().slice(0,10), -2), strength: 0.9 },
    ],
  };
}

let state = { scenarios: [], selectedId: null };

function load() {
  const raw = localStorage.getItem(STORAGE_KEY);
  const parsed = safeParse(raw, null);
  if (parsed?.scenarios?.length) state = parsed;
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function selected() {
  return state.scenarios.find((s) => s.id === state.selectedId) || null;
}

function upsertScenario(s) {
  const i = state.scenarios.findIndex((x) => x.id === s.id);
  if (i === -1) state.scenarios.unshift(s);
  else state.scenarios[i] = s;
  state.selectedId = s.id;
  save();
  render();
}

function removeScenario(id) {
  state.scenarios = state.scenarios.filter((s) => s.id !== id);
  if (state.selectedId === id) state.selectedId = state.scenarios[0]?.id || null;
  save();
  render();
}

function validateInputs() {
  err.textContent = "";
  if (!eventDate.value || !deadlineDate.value) {
    err.textContent = "Event date and deadline are required.";
    return false;
  }
  if (deadlineDate.value > eventDate.value) {
    err.textContent = "Deadline must be on/before the event date.";
    return false;
  }
  return true;
}

function currentFromForm() {
  const s = selected() || defaultScenario();
  return {
    ...s,
    eventDate: eventDate.value,
    deadlineDate: deadlineDate.value,
    invited: clamp(Number(invited.value || 0), 1, 10000),
    baseResponse: clamp(Number(baseResponse.value || 0), 0, 100),
    speedDays: clamp(Number(speedDays.value || 18), 1, 60),
    lift: clamp(Number(lift.value || 0), 0, 40),
  };
}

function responseCurve(day, speed) {
  // simple logistic-ish curve: rises from 0 toward 1.
  const k = 6 / speed;
  const x = day - speed / 2;
  return 1 / (1 + Math.exp(-k * x));
}

function reminderBoost(day, reminderDay, strength) {
  // a Gaussian-ish bump centered on reminderDay.
  const sigma = 2.0;
  const z = (day - reminderDay) / sigma;
  return Math.exp(-0.5 * z * z) * strength;
}

function simulate(s) {
  const horizon = clamp(daysBetween(new Date().toISOString().slice(0,10), s.eventDate), 7, 120);
  const startIso = new Date().toISOString().slice(0,10);

  const baseTarget = s.baseResponse / 100;
  const liftMax = s.lift / 100;

  const reminderDays = s.reminders
    .filter((r) => r.date)
    .map((r) => ({
      day: clamp(daysBetween(startIso, r.date), 0, horizon),
      strength: clamp(Number(r.strength || 0), 0, 1),
    }));

  const series = [];
  for (let d = 0; d <= horizon; d++) {
    const base = responseCurve(d, s.speedDays) * baseTarget;

    let bump = 0;
    for (const r of reminderDays) bump += reminderBoost(d, r.day, r.strength);

    const boosted = clamp(base + bump * liftMax, 0, 1);
    const expected = Math.round(boosted * s.invited);

    // crude range: +/- grows with uncertainty (less reminders, slower speed)
    const uncertainty = clamp(0.06 + (s.speedDays / 60) * 0.10 - reminderDays.length * 0.015, 0.04, 0.18);
    const low = Math.round(clamp(expected * (1 - uncertainty), 0, s.invited));
    const high = Math.round(clamp(expected * (1 + uncertainty), 0, s.invited));

    series.push({ day: d, date: addDays(startIso, d), expected, low, high });
  }

  const deadlineIdx = clamp(daysBetween(startIso, s.deadlineDate), 0, horizon);
  const byDl = series[deadlineIdx];
  return { startIso, horizon, series, deadlineIdx, byDl };
}

function drawChart(sim) {
  const w = chart.width;
  const h = chart.height;
  ctx.clearRect(0, 0, w, h);

  // padding
  const padL = 44, padR = 16, padT = 18, padB = 28;
  const innerW = w - padL - padR;
  const innerH = h - padT - padB;

  const maxY = Math.max(10, ...(sim.series.map((p) => p.high)));

  const xFor = (day) => padL + (day / sim.horizon) * innerW;
  const yFor = (val) => padT + innerH - (val / maxY) * innerH;

  // grid
  ctx.strokeStyle = "rgba(255,255,255,0.10)";
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = padT + (i / 4) * innerH;
    ctx.beginPath();
    ctx.moveTo(padL, y);
    ctx.lineTo(padL + innerW, y);
    ctx.stroke();
  }

  // y labels
  ctx.fillStyle = "rgba(138,160,191,0.95)";
  ctx.font = "12px system-ui";
  for (let i = 0; i <= 4; i++) {
    const val = Math.round(maxY * (1 - i / 4));
    ctx.fillText(String(val), 8, padT + (i / 4) * innerH + 4);
  }

  // range band
  ctx.fillStyle = "rgba(124,92,255,0.22)";
  ctx.beginPath();
  sim.series.forEach((p, idx) => {
    const x = xFor(p.day);
    const y = yFor(p.high);
    if (idx === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  for (let i = sim.series.length - 1; i >= 0; i--) {
    const p = sim.series[i];
    ctx.lineTo(xFor(p.day), yFor(p.low));
  }
  ctx.closePath();
  ctx.fill();

  // expected line
  ctx.strokeStyle = "rgba(73,166,255,0.95)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  sim.series.forEach((p, idx) => {
    const x = xFor(p.day);
    const y = yFor(p.expected);
    if (idx === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  // deadline line
  const dx = xFor(sim.deadlineIdx);
  ctx.strokeStyle = "rgba(255,176,32,0.9)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(dx, padT);
  ctx.lineTo(dx, padT + innerH);
  ctx.stroke();

  // x-axis labels (start, deadline, end)
  ctx.fillStyle = "rgba(138,160,191,0.95)";
  ctx.font = "12px system-ui";
  ctx.fillText(sim.series[0].date, padL, h - 10);
  ctx.fillText("Deadline", clamp(dx - 26, padL, padL + innerW - 60), h - 10);
  ctx.fillText(sim.series[sim.series.length - 1].date, padL + innerW - 96, h - 10);
}

function renderScenarioSelect() {
  scenarioSelect.innerHTML = "";
  for (const s of state.scenarios) {
    const opt = document.createElement("option");
    opt.value = s.id;
    opt.textContent = s.name;
    scenarioSelect.appendChild(opt);
  }
  scenarioSelect.value = state.selectedId || "";
}

function renderForm(s) {
  eventDate.value = s.eventDate;
  deadlineDate.value = s.deadlineDate;
  invited.value = s.invited;
  baseResponse.value = s.baseResponse;
  speedDays.value = s.speedDays;
  lift.value = s.lift;
}

function renderReminders(s) {
  remindersEl.innerHTML = "";
  if (!s.reminders.length) {
    const p = document.createElement("p");
    p.className = "hint";
    p.textContent = "No reminders yet. Add one to see how the curve shifts.";
    remindersEl.appendChild(p);
    return;
  }

  for (const r of s.reminders) {
    const wrap = document.createElement("div");
    wrap.className = "reminder";

    const dateL = document.createElement("label");
    dateL.innerHTML = `<span>Date</span><input type="date" value="${r.date || ""}">`;

    const strengthL = document.createElement("label");
    const strengthVal = Math.round((r.strength || 0) * 100);
    strengthL.innerHTML = `<span>Strength (%)</span><input type="number" min="0" max="100" value="${strengthVal}">`;

    const mini = document.createElement("div");
    mini.className = "mini";
    mini.innerHTML = `<div>Touchpoint</div>`;
    const rm = document.createElement("button");
    rm.type = "button";
    rm.className = "remove";
    rm.textContent = "Remove";

    const dateInput = dateL.querySelector("input");
    const strengthInput = strengthL.querySelector("input");

    dateInput.addEventListener("change", () => {
      r.date = dateInput.value;
      save();
      render();
    });

    strengthInput.addEventListener("change", () => {
      r.strength = clamp(Number(strengthInput.value || 0) / 100, 0, 1);
      save();
      render();
    });

    rm.addEventListener("click", () => {
      const s2 = selected();
      if (!s2) return;
      s2.reminders = s2.reminders.filter((x) => x.id !== r.id);
      upsertScenario(s2);
    });

    mini.appendChild(rm);
    wrap.append(dateL, strengthL, mini);
    remindersEl.appendChild(wrap);
  }
}

function renderForecast(s) {
  const sim = simulate(s);
  const dl = sim.byDl;
  byDeadline.textContent = `By deadline: ${dl.expected} (range ${dl.low}–${dl.high}) of ${s.invited}`;
  drawChart(sim);
}

function render() {
  if (!state.scenarios.length) {
    const s = defaultScenario();
    state.scenarios = [s];
    state.selectedId = s.id;
    save();
  }

  renderScenarioSelect();
  const s = selected() || state.scenarios[0];
  if (!s) return;

  renderForm(s);
  renderReminders(s);
  renderForecast(s);
}

scenarioSelect.addEventListener("change", () => {
  state.selectedId = scenarioSelect.value;
  save();
  render();
});

saveBtn.addEventListener("click", () => {
  if (!validateInputs()) return;
  const s = currentFromForm();
  upsertScenario(s);
});

newBtn.addEventListener("click", () => {
  const name = prompt("Scenario name?", "Schedule test");
  const s = defaultScenario();
  if (name) s.name = name;
  state.scenarios.unshift(s);
  state.selectedId = s.id;
  save();
  render();
});

addReminderBtn.addEventListener("click", () => {
  const s = selected();
  if (!s) return;
  s.reminders.push({ id: uid(), date: s.deadlineDate, strength: 0.7 });
  upsertScenario(s);
});

resetBtn.addEventListener("click", () => {
  const ok = confirm("Reset all scenarios? This clears localStorage for this demo.");
  if (!ok) return;
  localStorage.removeItem(STORAGE_KEY);
  state = { scenarios: [], selectedId: null };
  render();
});

(function init(){
  load();
  render();
})();
