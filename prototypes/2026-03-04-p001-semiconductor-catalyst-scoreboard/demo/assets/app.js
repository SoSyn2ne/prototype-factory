const WATCHLIST = ["NVDA", "AMD", "TSM", "ASML"];
const STORAGE_KEY = "semiconductor-catalyst-entries";

const WEIGHTS = {
  confidence: {
    low: 1,
    medium: 2,
    high: 3,
  },
  horizon: {
    near: 1.0,
    mid: 0.8,
    long: 0.6,
  },
  direction: {
    bullish: 1,
    bearish: -1,
  },
};

const form = document.getElementById("catalyst-form");
const scoreboard = document.querySelector(".scoreboard");
const entriesBody = document.getElementById("entries-body");
const feedback = document.getElementById("form-feedback");
const clearAllButton = document.getElementById("clear-all");
const lastUpdated = document.getElementById("last-updated");

let entries = loadEntries();

init();

function init() {
  renderAll();

  form.addEventListener("submit", handleAddEntry);
  clearAllButton.addEventListener("click", handleClearAll);
}

function handleAddEntry(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const ticker = String(formData.get("ticker") || "").trim().toUpperCase();
  const direction = String(formData.get("direction") || "").trim().toLowerCase();
  const category = String(formData.get("category") || "").trim();
  const sourceUrl = String(formData.get("sourceUrl") || "").trim();
  const confidence = String(formData.get("confidence") || "").trim().toLowerCase();
  const horizon = String(formData.get("horizon") || "").trim().toLowerCase();
  const notes = String(formData.get("notes") || "").trim();

  const isValidTicker = WATCHLIST.includes(ticker);
  const isValidDirection = Object.prototype.hasOwnProperty.call(WEIGHTS.direction, direction);
  const isValidConfidence = Object.prototype.hasOwnProperty.call(WEIGHTS.confidence, confidence);
  const isValidHorizon = Object.prototype.hasOwnProperty.call(WEIGHTS.horizon, horizon);

  if (!isValidTicker || !isValidDirection || !category || !isValidConfidence || !isValidHorizon || !isValidUrl(sourceUrl)) {
    feedback.textContent = "Please complete all required fields with a valid source URL.";
    return;
  }

  const entry = {
    id: createId(),
    ticker,
    direction,
    category,
    sourceUrl,
    confidence,
    horizon,
    notes,
    timestamp: new Date().toISOString(),
  };

  entries.unshift(entry);
  saveEntries(entries);
  renderAll();

  form.reset();
  form.querySelector("#ticker").value = "NVDA";
  form.querySelector("#direction").value = "bullish";
  form.querySelector("#confidence").value = "low";
  form.querySelector("#horizon").value = "near";

  feedback.textContent = `Entry added for ${entry.ticker}.`;
}

function handleClearAll() {
  if (entries.length === 0) {
    feedback.textContent = "There are no entries to clear.";
    return;
  }

  const confirmed = window.confirm("Clear all catalyst entries? This cannot be undone.");
  if (!confirmed) {
    feedback.textContent = "Clear canceled.";
    return;
  }

  entries = [];
  saveEntries(entries);
  renderAll();
  feedback.textContent = "All entries cleared.";
}

function renderAll() {
  renderScoreboard();
  renderTable();
  renderLastUpdated();
}

function renderScoreboard() {
  const summaries = WATCHLIST.map((ticker) => {
    const tickerEntries = entries.filter((entry) => entry.ticker === ticker);
    const score = tickerEntries.reduce((sum, entry) => sum + computeEntryScore(entry), 0);
    const latest = tickerEntries.length > 0 ? formatTimestamp(tickerEntries[0].timestamp) : "No updates";

    return {
      ticker,
      score,
      evidenceCount: tickerEntries.length,
      latest,
    };
  });

  scoreboard.innerHTML = summaries
    .map((item) => {
      const scoreClass = item.score > 0 ? "positive" : item.score < 0 ? "negative" : "";
      const signedScore = item.score > 0 ? `+${item.score.toFixed(1)}` : item.score.toFixed(1);

      return `
        <article class="score-card">
          <h3>${escapeHtml(item.ticker)}</h3>
          <p class="score ${scoreClass}">${escapeHtml(signedScore)}</p>
          <div class="meta">
            <span>Evidence count: ${item.evidenceCount}</span>
            <span>Latest: ${escapeHtml(item.latest)}</span>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderTable() {
  if (entries.length === 0) {
    entriesBody.innerHTML = `<tr><td class="empty-row" colspan="8">No catalyst entries yet.</td></tr>`;
    return;
  }

  entriesBody.innerHTML = entries
    .map((entry) => {
      const noteText = entry.notes ? escapeHtml(entry.notes) : "-";
      const sourceLabel = shortenUrl(entry.sourceUrl);

      return `
        <tr>
          <td>${escapeHtml(entry.ticker)}</td>
          <td><span class="tag ${escapeHtml(entry.direction)}">${capitalize(entry.direction)}</span></td>
          <td>${escapeHtml(entry.category)}</td>
          <td><a href="${escapeAttribute(entry.sourceUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(sourceLabel)}</a></td>
          <td>${capitalize(entry.confidence)}</td>
          <td>${capitalize(entry.horizon)}</td>
          <td>${escapeHtml(formatTimestamp(entry.timestamp))}</td>
          <td>${noteText}</td>
        </tr>
      `;
    })
    .join("");
}

function renderLastUpdated() {
  if (entries.length === 0) {
    lastUpdated.textContent = "No entries yet";
    return;
  }

  lastUpdated.textContent = `Last update: ${formatTimestamp(entries[0].timestamp)}`;
}

function computeEntryScore(entry) {
  return WEIGHTS.direction[entry.direction] * WEIGHTS.confidence[entry.confidence] * WEIGHTS.horizon[entry.horizon];
}

function loadEntries() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter(isValidEntryShape);
  } catch {
    return [];
  }
}

function saveEntries(nextEntries) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextEntries));
}

function isValidEntryShape(entry) {
  return (
    entry &&
    typeof entry.id === "string" &&
    WATCHLIST.includes(entry.ticker) &&
    typeof entry.category === "string" &&
    typeof entry.sourceUrl === "string" &&
    typeof entry.notes === "string" &&
    typeof entry.timestamp === "string" &&
    Object.prototype.hasOwnProperty.call(WEIGHTS.direction, entry.direction) &&
    Object.prototype.hasOwnProperty.call(WEIGHTS.confidence, entry.confidence) &&
    Object.prototype.hasOwnProperty.call(WEIGHTS.horizon, entry.horizon)
  );
}

function isValidUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function createId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  return `entry-${Date.now()}-${Math.floor(Math.random() * 1e6)}`;
}

function formatTimestamp(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "Unknown";
  }

  return date.toLocaleString();
}

function shortenUrl(value) {
  try {
    const url = new URL(value);
    return `${url.hostname}${url.pathname === "/" ? "" : url.pathname}`;
  } catch {
    return value;
  }
}

function capitalize(value) {
  if (!value) {
    return "";
  }

  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}
