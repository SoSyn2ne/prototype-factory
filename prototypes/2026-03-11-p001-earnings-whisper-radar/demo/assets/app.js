/* Earnings Whisper Radar — vanilla demo (no network) */

const STORAGE_KEY = "pf_earnings_whisper_radar_v1";

const DEFAULT_CHECKLIST = [
  "Read last quarter transcript + note 2 key questions",
  "Write your 'change-my-mind' condition",
  "Identify 1–2 near-term catalysts beyond earnings",
  "Set position sizing / max loss rule",
  "Draft 3 scenarios (beat / inline / miss) and your action",
];

function safeJsonParse(str, fallback) {
  try {
    return JSON.parse(str);
  } catch {
    return fallback;
  }
}

function uid() {
  return Math.random().toString(16).slice(2) + Date.now().toString(16);
}

function normTicker(t) {
  return String(t || "").trim().toUpperCase();
}

function fmtDate(iso) {
  if (!iso) return "—";
  return iso;
}

function volLabel(vol) {
  return vol === "high" ? "High" : vol === "med" ? "Medium" : "Low";
}

function volPenalty(vol) {
  // How much uncertainty we apply to the readiness score.
  if (vol === "high") return 18;
  if (vol === "med") return 10;
  return 4;
}

function readinessScore(item) {
  const total = item.checklist?.length || 0;
  const done = (item.checklist || []).filter((x) => x.done).length;
  const pct = total ? done / total : 0;
  const base = Math.round(pct * 100);
  const penalty = volPenalty(item.vol);
  const score = Math.max(0, Math.min(100, base - penalty));
  return { score, done, total, base, penalty };
}

function badgeForScore(score) {
  if (score >= 75) return { cls: "good", label: "Ready" };
  if (score >= 45) return { cls: "warn", label: "In progress" };
  return { cls: "bad", label: "Unprepared" };
}

function withinRange(dateStr, fromStr, toStr) {
  if (!dateStr) return true;
  const d = new Date(dateStr + "T00:00:00");
  if (fromStr) {
    const f = new Date(fromStr + "T00:00:00");
    if (d < f) return false;
  }
  if (toStr) {
    const t = new Date(toStr + "T23:59:59");
    if (d > t) return false;
  }
  return true;
}

const $ = (id) => document.getElementById(id);

const addForm = $("addForm");
const tickerInput = $("tickerInput");
const dateInput = $("dateInput");
const volInput = $("volInput");
const whisperInput = $("whisperInput");
const whisperOut = $("whisperOut");
const formError = $("formError");

const fromInput = $("fromInput");
const toInput = $("toInput");
const clearFiltersBtn = $("clearFiltersBtn");
const summary = $("summary");

const rows = $("rows");
const resetBtn = $("resetBtn");
const storagePill = $("storagePill");

const detailTitle = $("detailTitle");
const detailEmpty = $("detailEmpty");
const detailPane = $("detailPane");
const deleteBtn = $("deleteBtn");

const dTicker = $("dTicker");
const dDate = $("dDate");
const dVol = $("dVol");
const dWhisper = $("dWhisper");

const checklistEl = $("checklist");
const reviewSurprise = $("reviewSurprise");
const reviewNext = $("reviewNext");
const saveReviewBtn = $("saveReviewBtn");
const saveHint = $("saveHint");

let state = {
  items: [],
  selectedId: null,
  filters: { from: "", to: "" },
};

function load() {
  const raw = localStorage.getItem(STORAGE_KEY);
  const parsed = safeJsonParse(raw, null);
  if (parsed && Array.isArray(parsed.items)) {
    state = { ...state, ...parsed };
  }
}

function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    storagePill.textContent = "Local";
  } catch {
    storagePill.textContent = "No storage";
  }
}

function selectedItem() {
  return state.items.find((x) => x.id === state.selectedId) || null;
}

function setSelected(id) {
  state.selectedId = id;
  save();
  render();
}

function addItem({ ticker, earningsDate, vol, whisper }) {
  const item = {
    id: uid(),
    ticker,
    earningsDate,
    vol,
    whisper,
    createdAt: new Date().toISOString(),
    checklist: DEFAULT_CHECKLIST.map((t) => ({ id: uid(), text: t, done: false })),
    review: { surprise: "", next: "" },
  };
  state.items = [item, ...state.items].sort((a, b) => (a.earningsDate || "").localeCompare(b.earningsDate || ""));
  state.selectedId = item.id;
  save();
  render();
}

function deleteSelected() {
  if (!state.selectedId) return;
  state.items = state.items.filter((x) => x.id !== state.selectedId);
  state.selectedId = null;
  save();
  render();
}

function renderSummary() {
  const visible = visibleItems();
  const doneTotal = visible.reduce((acc, it) => acc + readinessScore(it).done, 0);
  const allTotal = visible.reduce((acc, it) => acc + readinessScore(it).total, 0);
  const pct = allTotal ? Math.round((doneTotal / allTotal) * 100) : 0;
  summary.textContent = `${visible.length} tickers • ${pct}% checklist done`;
}

function visibleItems() {
  const { from, to } = state.filters;
  return state.items.filter((it) => withinRange(it.earningsDate, from, to));
}

function renderTable() {
  const items = visibleItems();
  rows.innerHTML = "";

  if (items.length === 0) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = 6;
    td.className = "empty";
    td.textContent = "No tickers in this window. Add one above.";
    tr.appendChild(td);
    rows.appendChild(tr);
    return;
  }

  for (const it of items) {
    const r = readinessScore(it);
    const b = badgeForScore(r.score);

    const tr = document.createElement("tr");

    const tdTicker = document.createElement("td");
    tdTicker.textContent = it.ticker;

    const tdDate = document.createElement("td");
    tdDate.textContent = fmtDate(it.earningsDate);

    const tdVol = document.createElement("td");
    tdVol.textContent = volLabel(it.vol);

    const tdWhisper = document.createElement("td");
    tdWhisper.textContent = `${it.whisper > 0 ? "+" : ""}${it.whisper}`;

    const tdScore = document.createElement("td");
    const badge = document.createElement("span");
    badge.className = "badge";
    badge.title = `Base ${r.base} - penalty ${r.penalty} = ${r.score}`;
    badge.innerHTML = `<span class="dot ${b.cls}"></span><strong>${r.score}</strong> <span style="color:var(--muted)">${b.label}</span>`;
    tdScore.appendChild(badge);

    const tdOpen = document.createElement("td");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn btn-ghost";
    btn.textContent = it.id === state.selectedId ? "Open" : "Open";
    btn.addEventListener("click", () => setSelected(it.id));
    tdOpen.appendChild(btn);

    tr.append(tdTicker, tdDate, tdVol, tdWhisper, tdScore, tdOpen);
    rows.appendChild(tr);
  }
}

function renderDetails() {
  const it = selectedItem();
  if (!it) {
    detailTitle.textContent = "Details";
    detailEmpty.hidden = false;
    detailPane.hidden = true;
    deleteBtn.disabled = true;
    return;
  }

  detailTitle.textContent = `Details — ${it.ticker}`;
  detailEmpty.hidden = true;
  detailPane.hidden = false;
  deleteBtn.disabled = false;

  dTicker.textContent = it.ticker;
  dDate.textContent = fmtDate(it.earningsDate);
  dVol.textContent = volLabel(it.vol);
  dWhisper.textContent = `${it.whisper > 0 ? "+" : ""}${it.whisper}`;

  checklistEl.innerHTML = "";
  for (const c of it.checklist) {
    const li = document.createElement("li");

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = !!c.done;
    cb.addEventListener("change", () => {
      c.done = cb.checked;
      save();
      render();
    });

    const text = document.createElement("div");
    text.textContent = c.text;

    li.append(cb, text);
    checklistEl.appendChild(li);
  }

  reviewSurprise.value = it.review?.surprise || "";
  reviewNext.value = it.review?.next || "";
}

function render() {
  fromInput.value = state.filters.from || "";
  toInput.value = state.filters.to || "";
  renderSummary();
  renderTable();
  renderDetails();
}

whisperInput.addEventListener("input", () => {
  whisperOut.textContent = whisperInput.value;
});

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formError.textContent = "";

  const ticker = normTicker(tickerInput.value);
  const earningsDate = dateInput.value;
  const vol = volInput.value;
  const whisper = Number.parseInt(whisperInput.value, 10) || 0;

  if (!ticker) {
    formError.textContent = "Ticker is required.";
    tickerInput.focus();
    return;
  }
  if (!earningsDate) {
    formError.textContent = "Earnings date is required.";
    dateInput.focus();
    return;
  }

  addItem({ ticker, earningsDate, vol, whisper });

  // Reset quick-entry fields
  tickerInput.value = "";
  whisperInput.value = "0";
  whisperOut.textContent = "0";
  tickerInput.focus();
});

function setFilters(next) {
  state.filters = { ...state.filters, ...next };
  save();
  render();
}

fromInput.addEventListener("change", () => setFilters({ from: fromInput.value }));
toInput.addEventListener("change", () => setFilters({ to: toInput.value }));

clearFiltersBtn.addEventListener("click", () => {
  setFilters({ from: "", to: "" });
});

resetBtn.addEventListener("click", () => {
  const ok = confirm("Reset demo data? This clears localStorage for this prototype.");
  if (!ok) return;
  localStorage.removeItem(STORAGE_KEY);
  state = { items: [], selectedId: null, filters: { from: "", to: "" } };
  render();
});

deleteBtn.addEventListener("click", () => {
  const it = selectedItem();
  if (!it) return;
  const ok = confirm(`Delete ${it.ticker}?`);
  if (!ok) return;
  deleteSelected();
});

saveReviewBtn.addEventListener("click", () => {
  const it = selectedItem();
  if (!it) return;
  it.review = {
    surprise: String(reviewSurprise.value || "").trim(),
    next: String(reviewNext.value || "").trim(),
  };
  save();
  saveHint.textContent = "Saved.";
  setTimeout(() => (saveHint.textContent = ""), 1200);
});

(function init() {
  load();
  state.filters = state.filters || { from: "", to: "" };
  whisperOut.textContent = whisperInput.value;
  render();
})();
