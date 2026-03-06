/* Catalyst-to-Conviction Scorecard — vanilla localStorage demo */

const STORAGE_CATALYSTS = "pf.c2c.catalysts.v1";
const STORAGE_WEIGHTS = "pf.c2c.weights.v1";
const STORAGE_SPRINT = "pf.c2c.sprint.v1";

const TYPES = [
  { key: "earnings", label: "Earnings" },
  { key: "launch", label: "Product launch" },
  { key: "subsidy", label: "Gov subsidy" },
  { key: "supply", label: "Supply constraint" },
  { key: "competitor", label: "Competitor issue" },
];

const DEFAULT_WEIGHTS = {
  earnings: 1.0,
  launch: 1.1,
  subsidy: 0.9,
  supply: 1.0,
  competitor: 0.8,
};

function qs(id) {
  return document.getElementById(id);
}

function uid() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function safeParse(raw, fallback) {
  try {
    const v = JSON.parse(raw);
    return v ?? fallback;
  } catch {
    return fallback;
  }
}

function loadCatalysts() {
  const v = safeParse(localStorage.getItem(STORAGE_CATALYSTS), []);
  return Array.isArray(v) ? v : [];
}

function saveCatalysts(c) {
  localStorage.setItem(STORAGE_CATALYSTS, JSON.stringify(c));
  setStatus("Saved");
}

function loadWeights() {
  return { ...DEFAULT_WEIGHTS, ...(safeParse(localStorage.getItem(STORAGE_WEIGHTS), {}) || {}) };
}

function saveWeights(w) {
  localStorage.setItem(STORAGE_WEIGHTS, JSON.stringify(w));
  setStatus("Weights saved");
}

function loadSprint() {
  return safeParse(localStorage.getItem(STORAGE_SPRINT), null);
}

function saveSprint(s) {
  localStorage.setItem(STORAGE_SPRINT, JSON.stringify(s));
  setStatus("Sprint saved");
}

function setStatus(text) {
  const el = qs("saveStatus");
  if (!el) return;
  el.textContent = `Local data: ${text}`;
  clearTimeout(setStatus._t);
  setStatus._t = setTimeout(() => (el.textContent = "Local data: ready"), 1400);
}

function escapeHtml(s) {
  return String(s || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function typeLabel(key) {
  return (TYPES.find((t) => t.key === key) || { label: key }).label;
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function directionSign(dir) {
  return dir === "neg" ? -1 : 1;
}

function dueDate(createdAt, horizonDays) {
  const ms = Number(createdAt) + Number(horizonDays) * 24 * 3600 * 1000;
  return new Date(ms);
}

function freshness(createdAt, horizonDays) {
  const now = Date.now();
  const start = Number(createdAt);
  const end = dueDate(createdAt, horizonDays).getTime();
  if (now >= end) return 0;
  if (now <= start) return 1;
  const t = (end - now) / (end - start);
  return clamp(t, 0, 1);
}

function computeTickerScores(catalysts, weights) {
  /** @type {Map<string, {ticker:string, score:number, active:number, overdue:number}>} */
  const map = new Map();

  for (const c of catalysts) {
    const t = String(c.ticker || "").toUpperCase().trim();
    if (!t) continue;

    const weight = Number(weights[c.type] ?? 1);
    const conf = clamp(Number(c.confidence) || 0, 0, 100);
    const f = freshness(c.createdAt, c.horizonDays);

    const contrib = directionSign(c.direction) * conf * weight * f / 100;

    if (!map.has(t)) map.set(t, { ticker: t, score: 0, active: 0, overdue: 0 });
    const row = map.get(t);

    if (f > 0) row.active += 1;
    if (f === 0) row.overdue += 1;
    row.score += contrib;
  }

  const arr = Array.from(map.values());
  arr.sort((a, b) => b.score - a.score || a.ticker.localeCompare(b.ticker));
  return arr;
}

let state = {
  catalysts: loadCatalysts(),
  weights: loadWeights(),
  sprint: loadSprint(),
};

function renderWeights() {
  const root = qs("weights");
  root.innerHTML = "";

  for (const t of TYPES) {
    const card = document.createElement("div");
    card.className = "weightCard";
    const value = Number(state.weights[t.key] ?? 1);

    card.innerHTML = `
      <strong>${escapeHtml(t.label)}</strong>
      <label class="hint" for="w-${t.key}">Weight (0.0–2.0)</label>
      <input id="w-${t.key}" type="number" step="0.1" min="0" max="2" value="${escapeHtml(value.toFixed(1))}" />
    `;

    const input = card.querySelector("input");
    input.addEventListener("input", () => {
      state.weights[t.key] = clamp(Number(input.value || 1), 0, 2);
      saveWeights(state.weights);
      render();
    });

    root.appendChild(card);
  }
}

function renderScores() {
  const scores = computeTickerScores(state.catalysts, state.weights);

  const overdueTotal = scores.reduce((n, s) => n + s.overdue, 0);
  qs("overduePill").textContent = `Overdue: ${overdueTotal}`;

  const tbody = qs("scoreRows");
  tbody.innerHTML = "";

  if (scores.length === 0) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td colspan="4" class="hint">No catalysts yet. Add one or load sample catalysts.</td>`;
    tbody.appendChild(tr);
    return;
  }

  for (const s of scores) {
    const tr = document.createElement("tr");
    const overdueTag = s.overdue > 0 ? `<span class="tag tag--over">${s.overdue}</span>` : "0";

    tr.innerHTML = `
      <td><strong>${escapeHtml(s.ticker)}</strong></td>
      <td>${escapeHtml(s.score.toFixed(2))}</td>
      <td>${escapeHtml(String(s.active))}</td>
      <td>${overdueTag}</td>
    `;
    tbody.appendChild(tr);
  }
}

function renderCatalysts() {
  const tbody = qs("catalystRows");
  tbody.innerHTML = "";

  const sorted = state.catalysts
    .slice()
    .sort((a, b) => b.createdAt - a.createdAt);

  for (const c of sorted) {
    const t = String(c.ticker || "").toUpperCase();
    const due = dueDate(c.createdAt, c.horizonDays);
    const isOverdue = Date.now() >= due.getTime();

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${escapeHtml(t)}</td>
      <td>${escapeHtml(typeLabel(c.type))}</td>
      <td>${c.direction === "neg" ? '<span class="tag tag--neg">-</span>' : '<span class="tag tag--pos">+</span>'}</td>
      <td>${escapeHtml(String(c.confidence))}</td>
      <td>${isOverdue ? '<span class="tag tag--over">Overdue</span>' : escapeHtml(due.toLocaleDateString())}</td>
      <td>${escapeHtml(c.notes || "")}</td>
      <td class="right">
        <div class="smallBtns">
          <button class="smallBtn" data-action="edit" data-id="${c.id}">Edit</button>
          <button class="smallBtn" data-action="delete" data-id="${c.id}">Delete</button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  }
}

function setEditing(c) {
  qs("cid").value = c ? c.id : "";
  qs("ticker").value = c ? c.ticker : "";
  qs("type").value = c ? c.type : "earnings";
  qs("direction").value = c ? c.direction : "pos";
  qs("confidence").value = c ? c.confidence : "65";
  qs("horizon").value = c ? c.horizonDays : "30";
  qs("notes").value = c ? c.notes : "";

  qs("btnCancel").hidden = !c;
  qs("btnSave").textContent = c ? "Update catalyst" : "Save catalyst";
}

function onSubmit(e) {
  e.preventDefault();

  const id = qs("cid").value || uid();
  const c = {
    id,
    ticker: String(qs("ticker").value || "").toUpperCase().trim(),
    type: qs("type").value,
    direction: qs("direction").value,
    confidence: clamp(Number(qs("confidence").value || 0), 0, 100),
    horizonDays: clamp(Number(qs("horizon").value || 1), 1, 365),
    notes: String(qs("notes").value || "").trim(),
    createdAt: Date.now(),
  };

  if (!c.ticker) return;

  const idx = state.catalysts.findIndex((x) => x.id === id);
  if (idx >= 0) {
    // keep createdAt stable on edit
    c.createdAt = state.catalysts[idx].createdAt;
    state.catalysts[idx] = c;
  } else {
    state.catalysts.push(c);
  }

  saveCatalysts(state.catalysts);
  setEditing(null);
  render();
}

function onTableClick(e) {
  const btn = e.target.closest("button[data-action]");
  if (!btn) return;
  const action = btn.getAttribute("data-action");
  const id = btn.getAttribute("data-id");
  const c = state.catalysts.find((x) => x.id === id);
  if (!c) return;

  if (action === "edit") {
    setEditing(c);
    qs("ticker").focus();
    return;
  }

  if (action === "delete") {
    const ok = confirm(`Delete catalyst for ${c.ticker}?`);
    if (!ok) return;
    state.catalysts = state.catalysts.filter((x) => x.id !== id);
    saveCatalysts(state.catalysts);
    render();
  }
}

function sprintTemplateForTicker(ticker, catalysts) {
  const byType = new Map();
  for (const c of catalysts) {
    if (c.ticker.toUpperCase() !== ticker) continue;
    byType.set(c.type, true);
  }

  const items = [];
  items.push({ id: uid(), text: `Write the claim: “${ticker} will outperform because …” (1 sentence).`, done: false });
  items.push({ id: uid(), text: `List 3 disconfirming observations (what would prove you wrong).`, done: false });

  if (byType.has("earnings")) items.push({ id: uid(), text: `Earnings check: compare guidance vs consensus; identify 1 KPI that must improve.`, done: false });
  if (byType.has("launch")) items.push({ id: uid(), text: `Launch check: find evidence of adoption (orders, reviews, benchmarks).`, done: false });
  if (byType.has("subsidy")) items.push({ id: uid(), text: `Subsidy check: confirm timeline + conditions; what breaks the subsidy?`, done: false });
  if (byType.has("supply")) items.push({ id: uid(), text: `Supply check: look for lead time changes or supplier commentary.`, done: false });
  if (byType.has("competitor")) items.push({ id: uid(), text: `Competitor check: validate competitor issue is real and durable, not noise.`, done: false });

  items.push({ id: uid(), text: `Set a re-check date and log a single measurable signal to watch weekly.`, done: false });

  // cap to a manageable list
  return items.slice(0, 9);
}

function startSprint() {
  const scores = computeTickerScores(state.catalysts, state.weights);
  if (scores.length === 0) {
    alert("Add catalysts first.");
    return;
  }

  const top = scores[0];
  const ticker = top.ticker;
  const list = sprintTemplateForTicker(ticker, state.catalysts);

  const sprint = {
    ticker,
    createdAt: Date.now(),
    reason: `Top conviction score (${top.score.toFixed(2)}). Active catalysts: ${top.active}. Overdue: ${top.overdue}.`,
    items: list,
  };

  state.sprint = sprint;
  saveSprint(sprint);
  renderSprint();
}

function renderSprint() {
  const tickerEl = qs("sprintTicker");
  const reasonEl = qs("sprintReason");
  const root = qs("sprintList");
  root.innerHTML = "";

  if (!state.sprint) {
    tickerEl.textContent = "—";
    reasonEl.textContent = "—";
    root.innerHTML = '<p class="hint">No sprint yet. Click “Start 7-day falsification sprint”.</p>';
    return;
  }

  tickerEl.textContent = state.sprint.ticker;
  reasonEl.textContent = state.sprint.reason;

  for (const it of state.sprint.items) {
    const div = document.createElement("div");
    div.className = "sprintItem";
    div.innerHTML = `
      <input type="checkbox" id="sp-${it.id}" ${it.done ? "checked" : ""} />
      <label for="sp-${it.id}"><strong>${escapeHtml(it.text)}</strong></label>
    `;

    const input = div.querySelector("input");
    input.addEventListener("change", () => {
      it.done = input.checked;
      saveSprint(state.sprint);
    });

    root.appendChild(div);
  }
}

function seedSample() {
  const now = Date.now();
  const sample = [
    { ticker: "NVDA", type: "earnings", direction: "pos", confidence: 75, horizonDays: 30, notes: "Guidance up + backlog commentary" },
    { ticker: "TSM", type: "subsidy", direction: "pos", confidence: 55, horizonDays: 90, notes: "Policy support reduces capex risk" },
    { ticker: "AMD", type: "launch", direction: "pos", confidence: 60, horizonDays: 45, notes: "New GPU benchmarks + OEM wins" },
    { ticker: "INTC", type: "supply", direction: "neg", confidence: 40, horizonDays: 60, notes: "Yield/lead-time rumor (needs verification)" },
    { ticker: "NVDA", type: "competitor", direction: "neg", confidence: 35, horizonDays: 20, notes: "Competitor catch-up risk in inference" },
  ].map((c) => ({ ...c, id: uid(), createdAt: now - Math.floor(Math.random() * 7) * 24 * 3600 * 1000 }));

  state.catalysts = sample;
  state.sprint = null;
  saveCatalysts(sample);
  localStorage.removeItem(STORAGE_SPRINT);
  render();
}

function resetAll() {
  const ok = confirm("Reset catalysts, weights, and sprint?" );
  if (!ok) return;
  localStorage.removeItem(STORAGE_CATALYSTS);
  localStorage.removeItem(STORAGE_WEIGHTS);
  localStorage.removeItem(STORAGE_SPRINT);
  state.catalysts = [];
  state.weights = { ...DEFAULT_WEIGHTS };
  state.sprint = null;
  setEditing(null);
  render();
}

function render() {
  renderWeights();
  renderScores();
  renderCatalysts();
  renderSprint();
}

function attach() {
  qs("catalystForm").addEventListener("submit", onSubmit);
  qs("catalystRows").addEventListener("click", onTableClick);
  qs("btnCancel").addEventListener("click", () => setEditing(null));
  qs("btnSprint").addEventListener("click", startSprint);
  qs("btnClearSprint").addEventListener("click", () => {
    state.sprint = null;
    localStorage.removeItem(STORAGE_SPRINT);
    renderSprint();
  });
  qs("btnSeed").addEventListener("click", seedSample);
  qs("btnReset").addEventListener("click", resetAll);
}

attach();
render();
