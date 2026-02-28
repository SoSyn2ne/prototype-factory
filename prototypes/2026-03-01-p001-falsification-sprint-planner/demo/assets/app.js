/* Falsification Sprint Planner — vanilla demo
   - localStorage persistence
   - live scoring + prioritization
   - run-today selection + evidence log + verdict
*/

const STORAGE_KEY = "pf:2026-03-01-p001:falsification-sprint-planner:v1";

function uid() {
  return Math.random().toString(16).slice(2) + "-" + Date.now().toString(16);
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function safeNumber(v, fallback = 0) {
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
}

function scoreFor(card) {
  const impact = clamp(safeNumber(card.impact, 1), 1, 5);
  const confidence = clamp(safeNumber(card.confidence, 1), 1, 5);
  const effort = Math.max(1, safeNumber(card.effort, 1));
  return (impact * confidence) / effort;
}

function formatScore(n) {
  if (!Number.isFinite(n)) return "—";
  return (Math.round(n * 100) / 100).toFixed(2);
}

function nowStamp() {
  const d = new Date();
  // Short, local, deterministic-ish for display.
  return d.toLocaleString(undefined, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function seedState() {
  const exampleId = uid();
  return {
    selectedId: exampleId,
    runTodayId: exampleId,
    cards: [
      {
        id: exampleId,
        assumption: "Indie founders will write measurable kill criteria if the UI forces a number + timeframe.",
        hypothesis:
          "If we provide a simple experiment template + score, users can produce a run-ready plan in under 10 minutes.",
        testType: "Cold outreach",
        killCriteria: "Fail if: < 5 replies from 50 DMs within 24 hours.",
        successCriteria: "Pass if: ≥ 10 replies from 50 DMs within 24 hours.",
        effort: 2,
        impact: 4,
        confidence: 3,
        verdict: "inconclusive",
        evidence: [
          { ts: nowStamp(), note: "Drafted DM script. 0 sent yet.", metric: "sent=0" },
        ],
      },
    ],
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return seedState();
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.cards)) return seedState();
    return parsed;
  } catch {
    return seedState();
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function el(id) {
  const node = document.getElementById(id);
  if (!node) throw new Error(`Missing element: #${id}`);
  return node;
}

function setStatus(text) {
  const node = document.getElementById("statusText");
  if (node) node.textContent = text;
}

const ui = {
  cards: () => el("cards"),
  addCardBtn: () => el("addCardBtn"),
  prioritizeBtn: () => el("prioritizeBtn"),
  resetBtn: () => el("resetBtn"),

  editor: () => el("editor"),
  cardId: () => el("cardId"),
  assumption: () => el("assumption"),
  hypothesis: () => el("hypothesis"),
  testType: () => el("testType"),
  killCriteria: () => el("killCriteria"),
  successCriteria: () => el("successCriteria"),
  effort: () => el("effort"),
  impact: () => el("impact"),
  confidence: () => el("confidence"),
  impactVal: () => el("impactVal"),
  confidenceVal: () => el("confidenceVal"),
  verdict: () => el("verdict"),
  scoreVal: () => el("scoreVal"),

  saveBtn: () => el("saveBtn"),
  runTodayBtn: () => el("runTodayBtn"),
  deleteBtn: () => el("deleteBtn"),

  runTitle: () => el("runTitle"),
  runVerdict: () => el("runVerdict"),
  evidenceForm: () => el("evidenceForm"),
  evidenceNote: () => el("evidenceNote"),
  evidenceMetric: () => el("evidenceMetric"),
  evidenceList: () => el("evidenceList"),
};

let state = loadState();

function getCardById(id) {
  return state.cards.find((c) => c.id === id) || null;
}

function ensureSelection() {
  if (!state.selectedId || !getCardById(state.selectedId)) {
    state.selectedId = state.cards[0]?.id || null;
  }
  if (!state.runTodayId || !getCardById(state.runTodayId)) {
    state.runTodayId = state.selectedId;
  }
}

function verdictLabel(v) {
  if (v === "pass") return "PASS";
  if (v === "fail") return "FAIL";
  return "INCONCLUSIVE";
}

function verdictClass(v) {
  if (v === "pass") return "pass";
  if (v === "fail") return "fail";
  return "inconclusive";
}

function renderCards() {
  const root = ui.cards();
  root.innerHTML = "";

  state.cards.forEach((card) => {
    const s = scoreFor(card);
    const isSelected = card.id === state.selectedId;
    const isRunToday = card.id === state.runTodayId;

    const cardEl = document.createElement("button");
    cardEl.type = "button";
    cardEl.className = "card";
    cardEl.setAttribute("role", "listitem");
    cardEl.setAttribute("aria-selected", String(isSelected));

    const verdict = card.verdict || "inconclusive";

    cardEl.innerHTML = `
      <div class="row">
        <div class="title">${escapeHtml(card.testType || "Experiment")}</div>
        <div class="score" aria-label="Score">
          <span class="score-badge">${formatScore(s)}</span>
          <span class="badge ${verdictClass(verdict)}">${verdictLabel(verdict)}</span>
          ${isRunToday ? '<span class="badge run">RUN TODAY</span>' : ""}
        </div>
      </div>
      <div class="meta">${escapeHtml(shorten(card.hypothesis || card.assumption || "", 90))}</div>
      <div class="meta">Impact ${card.impact}/5 · Confidence ${card.confidence}/5 · Effort ${card.effort}h</div>
    `;

    cardEl.addEventListener("click", () => {
      state.selectedId = card.id;
      saveState(state);
      render();
    });

    root.appendChild(cardEl);
  });
}

function escapeHtml(str) {
  return String(str || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function shorten(str, max) {
  const s = String(str || "").trim();
  if (s.length <= max) return s;
  return s.slice(0, Math.max(0, max - 1)).trimEnd() + "…";
}

function renderEditor() {
  const card = getCardById(state.selectedId);

  const hasCard = Boolean(card);
  ui.deleteBtn().disabled = !hasCard;
  ui.saveBtn().disabled = !hasCard;
  ui.runTodayBtn().disabled = !hasCard;

  if (!card) {
    ui.cardId().value = "";
    ui.assumption().value = "";
    ui.hypothesis().value = "";
    ui.testType().value = "Landing page";
    ui.killCriteria().value = "";
    ui.successCriteria().value = "";
    ui.effort().value = "1";
    ui.impact().value = "3";
    ui.confidence().value = "3";
    ui.verdict().value = "inconclusive";
    updateLiveScore();
    return;
  }

  ui.cardId().value = card.id;
  ui.assumption().value = card.assumption || "";
  ui.hypothesis().value = card.hypothesis || "";
  ui.testType().value = card.testType || "Landing page";
  ui.killCriteria().value = card.killCriteria || "";
  ui.successCriteria().value = card.successCriteria || "";
  ui.effort().value = String(card.effort ?? 1);
  ui.impact().value = String(card.impact ?? 3);
  ui.confidence().value = String(card.confidence ?? 3);
  ui.verdict().value = card.verdict || "inconclusive";

  updateLiveScore();
}

function renderRunToday() {
  const card = getCardById(state.runTodayId);
  const title = card
    ? `${card.testType}: ${shorten(card.hypothesis || card.assumption || "", 72)}`
    : "No card selected";

  ui.runTitle().textContent = title;

  const verdict = card?.verdict || "inconclusive";
  const pill = ui.runVerdict();
  pill.textContent = verdictLabel(verdict);
  pill.className = "pill";
  // Apply inline-ish styling via class addition (CSS uses .badge classes; pill gets border only)
  if (verdict === "pass") pill.style.borderColor = "rgba(52, 211, 153, 0.5)";
  else if (verdict === "fail") pill.style.borderColor = "rgba(251, 113, 133, 0.6)";
  else pill.style.borderColor = "rgba(251, 191, 36, 0.55)";

  ui.evidenceForm().querySelector("button[type=submit]").disabled = !card;
  ui.evidenceNote().disabled = !card;
  ui.evidenceMetric().disabled = !card;

  const list = ui.evidenceList();
  list.innerHTML = "";

  const evidence = card?.evidence || [];
  if (!card) return;

  if (evidence.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No evidence yet. Add an observation when you run the test.";
    list.appendChild(li);
    return;
  }

  evidence
    .slice()
    .reverse()
    .forEach((e) => {
      const li = document.createElement("li");
      const metric = e.metric ? ` (${e.metric})` : "";
      li.textContent = `${e.ts}: ${e.note}${metric}`;
      list.appendChild(li);
    });
}

function updateLiveScore() {
  const effort = Math.max(0, safeNumber(ui.effort().value, 0));
  const impact = clamp(safeNumber(ui.impact().value, 3), 1, 5);
  const confidence = clamp(safeNumber(ui.confidence().value, 3), 1, 5);

  ui.impactVal().textContent = String(impact);
  ui.confidenceVal().textContent = String(confidence);

  const s = (impact * confidence) / Math.max(1, effort || 0);
  ui.scoreVal().textContent = formatScore(s);
}

function addCard() {
  const id = uid();
  const card = {
    id,
    assumption: "",
    hypothesis: "",
    testType: "Landing page",
    killCriteria: "",
    successCriteria: "",
    effort: 2,
    impact: 3,
    confidence: 3,
    verdict: "inconclusive",
    evidence: [],
  };

  state.cards.unshift(card);
  state.selectedId = id;
  if (!state.runTodayId) state.runTodayId = id;
  saveState(state);
  setStatus("Added card");
  render();
  ui.assumption().focus();
}

function deleteSelected() {
  const id = state.selectedId;
  if (!id) return;

  const idx = state.cards.findIndex((c) => c.id === id);
  if (idx === -1) return;

  state.cards.splice(idx, 1);
  if (state.runTodayId === id) state.runTodayId = state.cards[0]?.id || null;
  state.selectedId = state.cards[0]?.id || null;

  saveState(state);
  setStatus("Deleted card");
  render();
}

function saveEditorToState() {
  const id = ui.cardId().value;
  const card = getCardById(id);
  if (!card) return;

  card.assumption = ui.assumption().value.trim();
  card.hypothesis = ui.hypothesis().value.trim();
  card.testType = ui.testType().value;
  card.killCriteria = ui.killCriteria().value.trim();
  card.successCriteria = ui.successCriteria().value.trim();
  card.effort = Math.max(0, safeNumber(ui.effort().value, 0));
  card.impact = clamp(safeNumber(ui.impact().value, 3), 1, 5);
  card.confidence = clamp(safeNumber(ui.confidence().value, 3), 1, 5);
  card.verdict = ui.verdict().value;

  saveState(state);
  setStatus("Saved");
}

function prioritize() {
  state.cards.sort((a, b) => scoreFor(b) - scoreFor(a));
  saveState(state);
  setStatus("Prioritized by score");
  render();
}

function setRunToday() {
  const id = state.selectedId;
  if (!id) return;
  state.runTodayId = id;
  saveState(state);
  setStatus("Set Run today");
  render();
}

function addEvidence(note, metric) {
  const card = getCardById(state.runTodayId);
  if (!card) return;

  const cleanNote = String(note || "").trim();
  const cleanMetric = String(metric || "").trim();
  if (!cleanNote) return;

  card.evidence = Array.isArray(card.evidence) ? card.evidence : [];
  card.evidence.push({ ts: nowStamp(), note: cleanNote, metric: cleanMetric });
  saveState(state);
  setStatus("Evidence added");
  renderRunToday();
}

function resetAll() {
  localStorage.removeItem(STORAGE_KEY);
  state = seedState();
  saveState(state);
  setStatus("Reset");
  render();
}

function render() {
  ensureSelection();
  renderCards();
  renderEditor();
  renderRunToday();
}

function wire() {
  ui.addCardBtn().addEventListener("click", addCard);
  ui.prioritizeBtn().addEventListener("click", prioritize);
  ui.resetBtn().addEventListener("click", () => {
    const ok = confirm("Reset planner? This clears localStorage for this demo.");
    if (ok) resetAll();
  });

  ui.impact().addEventListener("input", updateLiveScore);
  ui.confidence().addEventListener("input", updateLiveScore);
  ui.effort().addEventListener("input", updateLiveScore);

  ui.runTodayBtn().addEventListener("click", setRunToday);
  ui.deleteBtn().addEventListener("click", () => {
    const ok = confirm("Delete this experiment card?");
    if (ok) deleteSelected();
  });

  ui.editor().addEventListener("submit", (e) => {
    e.preventDefault();
    saveEditorToState();
    renderCards();
    renderRunToday();
  });

  // Keep verdict changes live without needing Save.
  ui.verdict().addEventListener("change", () => {
    const id = ui.cardId().value;
    const card = getCardById(id);
    if (!card) return;
    card.verdict = ui.verdict().value;
    saveState(state);
    setStatus("Verdict updated");
    renderCards();
    renderRunToday();
  });

  ui.evidenceForm().addEventListener("submit", (e) => {
    e.preventDefault();
    addEvidence(ui.evidenceNote().value, ui.evidenceMetric().value);
    ui.evidenceNote().value = "";
    ui.evidenceMetric().value = "";
    ui.evidenceNote().focus();
  });
}

(function main() {
  ensureSelection();
  saveState(state);
  wire();
  render();
  updateLiveScore();
})();
