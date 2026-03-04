const STORAGE_KEY = "catalyst-calendar-triage:v1";

const DEFAULT_EVENTS = [
  {
    id: "seed-nvda-earnings",
    date: "2026-03-10",
    ticker: "NVDA",
    category: "Earnings",
    title: "Q4 FY26 earnings and forward demand commentary",
    impact: 5,
    confidence: 4,
    horizon: 6,
    watched: true,
  },
  {
    id: "seed-aapl-product",
    date: "2026-03-12",
    ticker: "AAPL",
    category: "Product",
    title: "Spring hardware event and AI roadmap updates",
    impact: 4,
    confidence: 3,
    horizon: 8,
    watched: false,
  },
  {
    id: "seed-xlf-macro",
    date: "2026-03-18",
    ticker: "XLF",
    category: "Macro",
    title: "FOMC rate decision and SEP release",
    impact: 5,
    confidence: 3,
    horizon: 14,
    watched: true,
  },
  {
    id: "seed-tsla-reg",
    date: "2026-03-22",
    ticker: "TSLA",
    category: "Regulatory",
    title: "US autonomous-vehicle compliance hearing",
    impact: 4,
    confidence: 2,
    horizon: 18,
    watched: false,
  },
];

const elements = {
  clock: document.getElementById("clock"),
  eventGroups: document.getElementById("event-groups"),
  watchedOnly: document.getElementById("watched-only"),
  stats: document.getElementById("stats"),
  form: document.getElementById("triage-form"),
  date: document.getElementById("event-date"),
  ticker: document.getElementById("event-ticker"),
  category: document.getElementById("event-category"),
  title: document.getElementById("event-title"),
  impact: document.getElementById("event-impact"),
  confidence: document.getElementById("event-confidence"),
  horizon: document.getElementById("event-horizon"),
  preview: document.getElementById("priority-preview"),
};

const state = loadState();

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function generateId() {
  return `evt-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
}

function parseDateLabel(dateString) {
  const safe = new Date(`${dateString}T00:00:00`);
  if (Number.isNaN(safe.getTime())) return dateString;
  return safe.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function sanitizeEvent(raw) {
  return {
    id: raw.id || generateId(),
    date: typeof raw.date === "string" ? raw.date : "",
    ticker: String(raw.ticker || "").trim().toUpperCase(),
    category: String(raw.category || "Other").trim() || "Other",
    title: String(raw.title || "").trim(),
    impact: clamp(Number(raw.impact) || 1, 1, 5),
    confidence: clamp(Number(raw.confidence) || 1, 1, 5),
    horizon: clamp(Number(raw.horizon) || 30, 1, 30),
    watched: Boolean(raw.watched),
  };
}

function isEventValid(event) {
  return Boolean(event.date && event.ticker && event.title);
}

function priorityOf(event) {
  const impact = clamp(Number(event.impact) || 1, 1, 5);
  const confidence = clamp(Number(event.confidence) || 1, 1, 5);
  const horizon = clamp(Number(event.horizon) || 30, 1, 30);
  const proximityBoost = 1 + ((30 - horizon) / 30) * 0.2;
  return impact * confidence * proximityBoost;
}

function sortByPriority(events) {
  return [...events].sort((a, b) => {
    const diff = priorityOf(b) - priorityOf(a);
    if (diff !== 0) return diff;
    if (a.date !== b.date) return a.date.localeCompare(b.date);
    return a.ticker.localeCompare(b.ticker);
  });
}

function loadState() {
  const fallback = {
    events: DEFAULT_EVENTS.map(sanitizeEvent),
    watchedOnly: false,
  };

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    const events = Array.isArray(parsed.events) ? parsed.events.map(sanitizeEvent).filter(isEventValid) : fallback.events;
    return {
      events: events.length > 0 ? events : fallback.events,
      watchedOnly: Boolean(parsed.watchedOnly),
    };
  } catch (_error) {
    return fallback;
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (_error) {
    /* no-op: localStorage might be unavailable in some file contexts */
  }
}

function createMetric(label, value, extraClass = "") {
  const span = document.createElement("span");
  span.className = `metric ${extraClass}`.trim();
  span.textContent = `${label}: ${value}`;
  return span;
}

function createEventCard(event) {
  const priority = priorityOf(event).toFixed(2);
  const card = document.createElement("article");
  card.className = "event-card";

  const row = document.createElement("div");
  row.className = "event-row";

  const symbols = document.createElement("div");
  symbols.className = "event-symbols";

  const ticker = document.createElement("p");
  ticker.className = "ticker";
  ticker.textContent = event.ticker;

  const category = document.createElement("p");
  category.className = "category";
  category.textContent = event.category;

  symbols.append(ticker, category);

  const watchButton = document.createElement("button");
  watchButton.type = "button";
  watchButton.className = `watch-toggle ${event.watched ? "watched" : ""}`.trim();
  watchButton.dataset.action = "toggle-watch";
  watchButton.dataset.id = event.id;
  watchButton.textContent = event.watched ? "Watched" : "Watch";
  watchButton.setAttribute("aria-pressed", event.watched ? "true" : "false");

  row.append(symbols, watchButton);

  const title = document.createElement("p");
  title.className = "event-title";
  title.textContent = event.title;

  const metrics = document.createElement("div");
  metrics.className = "metrics";
  metrics.append(
    createMetric("Priority", priority, "priority"),
    createMetric("Impact", event.impact),
    createMetric("Confidence", event.confidence),
    createMetric("Horizon", `${event.horizon}d`)
  );

  card.append(row, title, metrics);
  return card;
}

function renderEvents() {
  if (!elements.eventGroups || !elements.stats) return;

  const visibleEvents = state.watchedOnly ? state.events.filter((event) => event.watched) : state.events;
  const ranked = sortByPriority(visibleEvents);

  elements.eventGroups.innerHTML = "";

  if (ranked.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = state.watchedOnly ? "No watched catalysts yet." : "No catalysts yet. Add one from the triage panel.";
    elements.eventGroups.appendChild(empty);
  } else {
    const grouped = new Map();
    for (const event of ranked) {
      if (!grouped.has(event.date)) grouped.set(event.date, []);
      grouped.get(event.date).push(event);
    }

    for (const [date, events] of grouped.entries()) {
      const section = document.createElement("section");
      section.className = "date-group";

      const heading = document.createElement("h3");
      heading.className = "date-title";
      heading.textContent = parseDateLabel(date);

      const list = document.createElement("div");
      list.className = "event-list";
      for (const event of events) {
        list.appendChild(createEventCard(event));
      }

      section.append(heading, list);
      elements.eventGroups.appendChild(section);
    }
  }

  const watchedCount = state.events.filter((event) => event.watched).length;
  elements.stats.textContent = `${state.events.length} events • ${watchedCount} watched`;
}

function updatePriorityPreview() {
  if (!elements.preview) return;
  const sample = {
    impact: Number(elements.impact?.value),
    confidence: Number(elements.confidence?.value),
    horizon: Number(elements.horizon?.value),
  };
  elements.preview.textContent = `Priority preview: ${priorityOf(sample).toFixed(2)}`;
}

function setDefaultDate() {
  if (!elements.date) return;
  const d = new Date();
  d.setDate(d.getDate() + 1);
  elements.date.value = d.toISOString().slice(0, 10);
}

function handleSubmit(event) {
  event.preventDefault();

  const incoming = sanitizeEvent({
    date: elements.date?.value,
    ticker: elements.ticker?.value,
    category: elements.category?.value,
    title: elements.title?.value,
    impact: Number(elements.impact?.value),
    confidence: Number(elements.confidence?.value),
    horizon: Number(elements.horizon?.value),
    watched: false,
  });

  if (!isEventValid(incoming)) return;

  state.events.push(incoming);
  saveState();
  renderEvents();

  elements.form?.reset();
  setDefaultDate();
  if (elements.impact) elements.impact.value = "3";
  if (elements.confidence) elements.confidence.value = "3";
  if (elements.horizon) elements.horizon.value = "14";
  updatePriorityPreview();
}

function handleEventGroupClick(event) {
  const toggle = event.target.closest("[data-action='toggle-watch']");
  if (!toggle) return;
  const { id } = toggle.dataset;
  const item = state.events.find((entry) => entry.id === id);
  if (!item) return;
  item.watched = !item.watched;
  saveState();
  renderEvents();
}

function initClock() {
  if (!elements.clock) return;
  const updateClock = () => {
    elements.clock.textContent = new Date().toLocaleTimeString();
  };
  updateClock();
  setInterval(updateClock, 1000);
}

function init() {
  initClock();
  renderEvents();
  updatePriorityPreview();
  setDefaultDate();

  elements.form?.addEventListener("submit", handleSubmit);
  elements.eventGroups?.addEventListener("click", handleEventGroupClick);

  elements.watchedOnly?.addEventListener("change", (event) => {
    state.watchedOnly = Boolean(event.target.checked);
    saveState();
    renderEvents();
  });

  [elements.impact, elements.confidence, elements.horizon].forEach((input) => {
    input?.addEventListener("input", updatePriorityPreview);
  });

  if (elements.watchedOnly) {
    elements.watchedOnly.checked = state.watchedOnly;
  }
}

init();
