/* Home GPU Sentinel — vanilla incident panel demo (simulated metrics) */

const STORAGE_THRESH = "pf.gpuSentinel.thresholds.v1";
const STORAGE_CHECK = "pf.gpuSentinel.checklist.v1";
const STORAGE_EVENTS = "pf.gpuSentinel.events.v1";

const DEFAULT_THRESHOLDS = {
  gpuTempC: 82,
  diskFreeGbMin: 60,
  vramUsedGb: 10,
};

const CHECKLIST_ITEMS = [
  { id: "deploy", title: "Did a deploy/upgrade happen?", meta: "gateway update, node upgrade, package installs" },
  { id: "disk", title: "Any disk churn?", meta: "logs, previews, model caches, npm cache" },
  { id: "jobs", title: "Cron/jobs status", meta: "prototype runs, preview generation, build failures" },
  { id: "thermal", title: "Thermals + airflow", meta: "fans, dust, room temp" },
  { id: "network", title: "Network/remote access", meta: "SSH, DNS, provider outages" },
  { id: "rollback", title: "Rollback decision", meta: "what’s the fastest safe rollback" },
];

function qs(id) {
  return document.getElementById(id);
}

function safeParse(raw, fallback) {
  try {
    const v = JSON.parse(raw);
    return v ?? fallback;
  } catch {
    return fallback;
  }
}

function loadThresholds() {
  return { ...DEFAULT_THRESHOLDS, ...(safeParse(localStorage.getItem(STORAGE_THRESH), {}) || {}) };
}

function saveThresholds(th) {
  localStorage.setItem(STORAGE_THRESH, JSON.stringify(th));
  setStatus("Saved");
}

function loadChecklist() {
  return safeParse(localStorage.getItem(STORAGE_CHECK), {}) || {};
}

function saveChecklist(v) {
  localStorage.setItem(STORAGE_CHECK, JSON.stringify(v));
}

function loadEvents() {
  const raw = safeParse(localStorage.getItem(STORAGE_EVENTS), []) || [];
  return Array.isArray(raw) ? raw : [];
}

function saveEvents(events) {
  localStorage.setItem(STORAGE_EVENTS, JSON.stringify(events.slice(0, 80)));
}

function nowIso() {
  return new Date().toISOString();
}

function formatTime(iso) {
  const d = new Date(iso);
  return d.toLocaleString();
}

function setStatus(text) {
  const el = qs("saveStatus");
  if (!el) return;
  el.textContent = `Local data: ${text}`;
  clearTimeout(setStatus._t);
  setStatus._t = setTimeout(() => (el.textContent = "Local data: ready"), 1400);
}

let state = {
  incident: false,
  thresholds: loadThresholds(),
  checklist: loadChecklist(),
  events: loadEvents(),
  metrics: {
    gpuTempC: 62,
    gpuUtilPct: 12,
    vramUsedGb: 3.5,
    diskFreeGb: 410,
    jobStatus: "OK",
  },
};

function breaches() {
  const b = [];
  if (state.metrics.gpuTempC >= state.thresholds.gpuTempC) b.push("GPU temp");
  if (state.metrics.vramUsedGb >= state.thresholds.vramUsedGb) b.push("VRAM used");
  if (state.metrics.diskFreeGb <= state.thresholds.diskFreeGbMin) b.push("Disk free");
  if (state.metrics.jobStatus !== "OK") b.push("Jobs");
  return b;
}

function pushEvent(kind, msg) {
  const evt = { ts: nowIso(), kind, msg };
  state.events.unshift(evt);
  saveEvents(state.events);
  renderEvents();
}

function simulateTick() {
  if (state.incident) return; // freeze in incident mode

  // gentle random walk
  state.metrics.gpuUtilPct = clamp(state.metrics.gpuUtilPct + rand(-8, 12), 0, 100);
  state.metrics.gpuTempC = clamp(state.metrics.gpuTempC + rand(-2.0, 3.5) + state.metrics.gpuUtilPct / 80, 35, 98);
  state.metrics.vramUsedGb = clamp(state.metrics.vramUsedGb + rand(-0.6, 1.2), 0.5, 22);
  state.metrics.diskFreeGb = clamp(state.metrics.diskFreeGb + rand(-4.2, 1.4), 1, 2000);

  // occasional job wobble
  if (Math.random() < 0.05) {
    state.metrics.jobStatus = Math.random() < 0.7 ? "OK" : "WARN";
    if (state.metrics.jobStatus !== "OK") pushEvent("job", "A scheduled run reported WARN — investigate logs.");
  }

  renderTiles();
  renderBreachPill();
}

function rand(min, max) {
  return min + Math.random() * (max - min);
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

function metricDefs() {
  return [
    { key: "gpuTempC", label: "GPU temp", unit: "°C", format: (v) => v.toFixed(0) },
    { key: "gpuUtilPct", label: "GPU util", unit: "%", format: (v) => v.toFixed(0) },
    { key: "vramUsedGb", label: "VRAM used", unit: "GB", format: (v) => v.toFixed(1) },
    { key: "diskFreeGb", label: "Disk free", unit: "GB", format: (v) => v.toFixed(0) },
    { key: "jobStatus", label: "Cron/jobs", unit: "", format: (v) => String(v) },
  ];
}

function tileSeverity(key) {
  if (key === "gpuTempC") {
    if (state.metrics.gpuTempC >= state.thresholds.gpuTempC + 8) return "danger";
    if (state.metrics.gpuTempC >= state.thresholds.gpuTempC) return "breach";
  }
  if (key === "diskFreeGb") {
    if (state.metrics.diskFreeGb <= Math.max(1, state.thresholds.diskFreeGbMin - 20)) return "danger";
    if (state.metrics.diskFreeGb <= state.thresholds.diskFreeGbMin) return "breach";
  }
  if (key === "vramUsedGb") {
    if (state.metrics.vramUsedGb >= state.thresholds.vramUsedGb + 4) return "danger";
    if (state.metrics.vramUsedGb >= state.thresholds.vramUsedGb) return "breach";
  }
  if (key === "jobStatus") {
    if (state.metrics.jobStatus === "WARN") return "breach";
    if (state.metrics.jobStatus === "FAIL") return "danger";
  }
  return "ok";
}

function renderTiles() {
  const root = qs("tiles");
  root.innerHTML = "";

  for (const def of metricDefs()) {
    const severity = tileSeverity(def.key);
    const div = document.createElement("div");
    div.className = "tile";
    if (severity === "breach") div.classList.add("tile--breach");
    if (severity === "danger") div.classList.add("tile--danger");

    const value = state.metrics[def.key];
    div.innerHTML = `
      <div class="tile__label">${escapeHtml(def.label)}</div>
      <div class="tile__value">${escapeHtml(def.format(value))}<span class="tile__unit">${escapeHtml(def.unit)}</span></div>
    `;

    root.appendChild(div);
  }
}

function renderChecklist() {
  const root = qs("checklist");
  root.innerHTML = "";

  for (const item of CHECKLIST_ITEMS) {
    const wrap = document.createElement("div");
    wrap.className = "item";

    const checked = Boolean(state.checklist[item.id]);

    wrap.innerHTML = `
      <input type="checkbox" id="chk-${item.id}" ${checked ? "checked" : ""} />
      <div>
        <label for="chk-${item.id}"><strong>${escapeHtml(item.title)}</strong></label>
        <div class="item__meta">${escapeHtml(item.meta)}</div>
      </div>
    `;

    const input = wrap.querySelector("input");
    input.addEventListener("change", () => {
      state.checklist[item.id] = input.checked;
      saveChecklist(state.checklist);
      setStatus("Checklist saved");
    });

    root.appendChild(wrap);
  }
}

function renderEvents() {
  const root = qs("events");
  root.innerHTML = "";

  const events = state.events.slice(0, 18);
  if (events.length === 0) {
    const li = document.createElement("li");
    li.innerHTML = `<time>${escapeHtml(new Date().toLocaleString())}</time><strong>No events yet</strong><div class="muted">Seed demo events or wait for simulated warnings.</div>`;
    root.appendChild(li);
    return;
  }

  for (const e of events) {
    const li = document.createElement("li");
    li.innerHTML = `
      <time>${escapeHtml(formatTime(e.ts))}</time>
      <strong>${escapeHtml(e.kind.toUpperCase())}</strong>
      <div class="muted">${escapeHtml(e.msg)}</div>
    `;
    root.appendChild(li);
  }
}

function renderBreachPill() {
  const b = breaches();
  const el = qs("breachPill");
  if (b.length === 0) {
    el.textContent = "No breaches";
    return;
  }
  el.textContent = `Breaches: ${b.join(", ")}`;
}

function renderClock() {
  qs("clock").textContent = new Date().toLocaleTimeString();
}

async function generateReport() {
  const b = breaches();
  const completed = CHECKLIST_ITEMS.filter((i) => state.checklist[i.id]).length;

  const report = [
    `Home GPU Sentinel — Incident report`,
    `Time: ${new Date().toLocaleString()}`,
    `Incident mode: ${state.incident ? "ON" : "OFF"}`,
    "",
    "Breaches:",
    b.length ? `- ${b.join(", ")}` : "- (none)",
    "",
    "Metrics:",
    `- GPU temp: ${state.metrics.gpuTempC.toFixed(0)}°C (threshold ${state.thresholds.gpuTempC}°C)`,
    `- GPU util: ${state.metrics.gpuUtilPct.toFixed(0)}%`,
    `- VRAM used: ${state.metrics.vramUsedGb.toFixed(1)} GB (threshold ${state.thresholds.vramUsedGb} GB)`,
    `- Disk free: ${state.metrics.diskFreeGb.toFixed(0)} GB (alert below ${state.thresholds.diskFreeGbMin} GB)`,
    `- Job status: ${state.metrics.jobStatus}`,
    "",
    "Recent events (last 5):",
    ...state.events.slice(0, 5).map((e) => `- ${formatTime(e.ts)} — ${e.kind}: ${e.msg}`),
    "",
    `Checklist completion: ${completed}/${CHECKLIST_ITEMS.length}`,
    ...CHECKLIST_ITEMS.map((i) => `- [${state.checklist[i.id] ? "x" : " "}] ${i.title}`),
    "",
    "Next action: pick the fastest reversible change and validate with a single controlled test.",
  ].join("\n");

  qs("reportOut").value = report;

  const status = qs("clipboardStatus");
  status.textContent = "";

  try {
    await navigator.clipboard.writeText(report);
    status.textContent = "Copied to clipboard.";
  } catch {
    status.textContent = "Could not auto-copy (browser blocked). You can manually copy from the textbox.";
  }
}

function seedEvents() {
  const samples = [
    { kind: "job", msg: "daily-prototype run: build-index succeeded" },
    { kind: "disk", msg: "disk free dropped quickly (preview generation?)" },
    { kind: "gpu", msg: "GPU util spiked during batch previews" },
    { kind: "net", msg: "transient DNS failure during web fetch" },
    { kind: "job", msg: "site build warning: large bundle detected" },
  ];

  for (const s of samples) {
    state.events.unshift({ ts: nowIso(), kind: s.kind, msg: s.msg });
  }
  saveEvents(state.events);
  renderEvents();
  setStatus("Seeded")
}

function resetAll() {
  const ok = confirm("Reset thresholds, checklist, events, and report output?");
  if (!ok) return;
  localStorage.removeItem(STORAGE_THRESH);
  localStorage.removeItem(STORAGE_CHECK);
  localStorage.removeItem(STORAGE_EVENTS);
  state.thresholds = loadThresholds();
  state.checklist = {};
  state.events = [];
  qs("reportOut").value = "";
  setStatus("Reset");
  hydrateThresholdInputs();
  renderChecklist();
  renderEvents();
  renderTiles();
  renderBreachPill();
}

function hydrateThresholdInputs() {
  qs("tGpuTemp").value = String(state.thresholds.gpuTempC);
  qs("tDiskFree").value = String(state.thresholds.diskFreeGbMin);
  qs("tVram").value = String(state.thresholds.vramUsedGb);
}

function escapeHtml(s) {
  return String(s || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function attach() {
  qs("incidentToggle").addEventListener("change", (e) => {
    state.incident = e.target.checked;
    pushEvent("mode", state.incident ? "Incident mode enabled (metrics frozen)." : "Incident mode disabled (metrics live)." );
    renderTiles();
    renderBreachPill();
  });

  qs("thresholdForm").addEventListener("submit", (e) => {
    e.preventDefault();
    state.thresholds = {
      gpuTempC: Number(qs("tGpuTemp").value || DEFAULT_THRESHOLDS.gpuTempC),
      diskFreeGbMin: Number(qs("tDiskFree").value || DEFAULT_THRESHOLDS.diskFreeGbMin),
      vramUsedGb: Number(qs("tVram").value || DEFAULT_THRESHOLDS.vramUsedGb),
    };
    saveThresholds(state.thresholds);
    pushEvent("config", "Thresholds updated.");
    renderTiles();
    renderBreachPill();
  });

  qs("btnReport").addEventListener("click", generateReport);
  qs("btnSeed").addEventListener("click", seedEvents);
  qs("btnReset").addEventListener("click", resetAll);
}

attach();
hydrateThresholdInputs();
renderChecklist();
renderEvents();
renderTiles();
renderBreachPill();

setInterval(() => {
  renderClock();
  simulateTick();
}, 1000);

renderClock();
