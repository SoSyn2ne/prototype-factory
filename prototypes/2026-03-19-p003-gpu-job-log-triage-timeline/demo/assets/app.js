/* GPU Job Log Triage Timeline — deterministic offline demo */

const $ = (sel) => document.querySelector(sel);

const presetEl = $("#preset");
const filterEl = $("#filter");
const loadBtn = $("#load");
const triageBtn = $("#triage");
const logInput = $("#logInput");
const incidentsEl = $("#incidents");
const renderedEl = $("#rendered");
const summaryEl = $("#summary");

const PRESETS = {
  train: `2026-03-19 05:58:01 INFO starting training rank=0\n2026-03-19 05:58:14 INFO dataloader warmed\n2026-03-19 05:59:02 WARN step=120 loss=nan detected\n2026-03-19 05:59:03 ERROR RuntimeError: CUDA out of memory. Tried to allocate 1.50 GiB (GPU 0; 11.00 GiB total capacity; 9.92 GiB already allocated)\n2026-03-19 05:59:05 INFO attempting gradient checkpointing fallback\n2026-03-19 05:59:21 ERROR NCCL WARN Watchdog caught collective operation timeout: WorkNCCL(SeqNum=141, OpType=ALLREDUCE, Timeout(ms)=600000)\n2026-03-19 05:59:22 ERROR ProcessGroupNCCL.cpp:1234, ncclUnhandledCudaError\n2026-03-19 06:00:02 WARN checkpoint save slow\n2026-03-19 06:00:07 ERROR OSError: [Errno 28] No space left on device: '/runs/checkpoints/ckpt_0001.pt'\n2026-03-19 06:00:09 INFO cleanup\n`,
  deploy: `Mar 19 05:57:11 node-2 docker[123]: pulling image registry.local/model:latest\nMar 19 05:57:14 node-2 docker[123]: error: net/http: request canceled while waiting for connection (Client.Timeout exceeded while awaiting headers)\nMar 19 05:57:33 node-2 kubelet[555]: Back-off restarting failed container\nMar 19 05:58:02 node-2 python[999]: CUDA error: invalid device ordinal\nMar 19 05:58:03 node-2 python[999]: torch.cuda.is_available() -> False\nMar 19 05:58:20 node-2 nvidia-smi[777]: Failed to initialize NVML: Driver/library version mismatch\nMar 19 05:58:44 node-2 app[111]: ERROR timeout while calling upstream /v1/infer after 30s\n`,
};

const SIGNATURES = [
  { type: "OOM", severity: "High", weight: 90, pattern: /(CUDA out of memory|out of memory|OOM)/i, hint: "Reduce batch/seq, enable gradient checkpointing, watch fragmentation." },
  { type: "NCCL", severity: "High", weight: 88, pattern: /(NCCL.*timeout|ProcessGroupNCCL|allreduce.*timeout|ncclUnhandledCudaError)/i, hint: "Check network, hung rank, IB, timeouts, and CUDA errors preceding it." },
  { type: "CUDA", severity: "Med", weight: 70, pattern: /(CUDA error:|invalid device ordinal|Driver\/library version mismatch|Failed to initialize NVML)/i, hint: "Verify driver/runtime match, visible devices, container runtime." },
  { type: "DISK", severity: "High", weight: 82, pattern: /(No space left on device|ENOSPC|disk quota exceeded)/i, hint: "Free space, change checkpoint path, enforce retention." },
  { type: "NET", severity: "Med", weight: 62, pattern: /(Client\.Timeout exceeded|connection reset|TLS handshake timeout|temporary failure in name resolution)/i, hint: "Check registry/upstream availability, DNS, proxy." },
  { type: "TIMEOUT", severity: "Low", weight: 52, pattern: /(timeout while calling|timed out|deadline exceeded)/i, hint: "Check upstream latency, timeouts, retries, batch sizes." },
];

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function severityRank(sev) {
  return sev === "High" ? 3 : sev === "Med" ? 2 : 1;
}

function parseTimestamp(line) {
  // Supports "YYYY-MM-DD HH:MM:SS" and syslog-ish "Mar 19 05:57:11".
  const iso = line.match(/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2}:\d{2})/);
  if (iso) return `${iso[1]} ${iso[2]}`;
  const sys = line.match(/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2}\s+\d{2}:\d{2}:\d{2}/);
  if (sys) return sys[0];
  return null;
}

function makeSnippet(lines, i) {
  const start = Math.max(0, i - 1);
  const end = Math.min(lines.length, i + 2);
  return lines.slice(start, end).join("\n");
}

function triage(text) {
  const lines = String(text || "").split(/\r?\n/);
  const hits = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line) continue;
    for (const sig of SIGNATURES) {
      if (sig.pattern.test(line)) {
        hits.push({
          hitId: `${sig.type}-${i}`,
          type: sig.type,
          severity: sig.severity,
          weight: sig.weight,
          lineIndex: i,
          ts: parseTimestamp(line),
          line,
          snippet: makeSnippet(lines, i),
          hint: sig.hint,
        });
        break;
      }
    }
  }

  // Group hits into incidents if within N lines of previous.
  const WINDOW = 6;
  const incidents = [];
  let current = null;

  for (const h of hits) {
    if (!current) {
      current = { id: `inc-${h.hitId}`, type: h.type, severity: h.severity, maxWeight: h.weight, start: h.lineIndex, end: h.lineIndex, ts: h.ts, hits: [h] };
      continue;
    }

    const close = h.lineIndex <= current.end + WINDOW;
    const sameType = h.type === current.type;

    if (close && sameType) {
      current.end = h.lineIndex;
      current.hits.push(h);
      if (h.weight > current.maxWeight) current.maxWeight = h.weight;
      if (severityRank(h.severity) > severityRank(current.severity)) current.severity = h.severity;
    } else {
      incidents.push(current);
      current = { id: `inc-${h.hitId}`, type: h.type, severity: h.severity, maxWeight: h.weight, start: h.lineIndex, end: h.lineIndex, ts: h.ts, hits: [h] };
    }
  }
  if (current) incidents.push(current);

  incidents.sort((a, b) => {
    const s = severityRank(b.severity) - severityRank(a.severity);
    if (s !== 0) return s;
    return b.maxWeight - a.maxWeight;
  });

  return { lines, hits, incidents };
}

function renderLog(lines, activeIncident) {
  // Mark all lines in active incident range.
  if (!lines.length) {
    renderedEl.innerHTML = `<span class="muted">(paste logs to render)</span>`;
    return;
  }

  const start = activeIncident ? activeIncident.start : -1;
  const end = activeIncident ? activeIncident.end : -1;

  const html = lines
    .map((ln, i) => {
      const active = activeIncident && i >= start && i <= end;
      const safe = escapeHtml(ln);
      if (active && ln.trim()) {
        return `<mark data-line="${i}" data-active="${i === start ? "true" : "false"}">${safe}</mark>`;
      }
      return safe;
    })
    .join("\n");

  renderedEl.innerHTML = html;
}

function renderIncidents(model) {
  const filter = filterEl.value;
  const incidents = model.incidents.filter((inc) => filter === "all" || inc.type === filter);

  summaryEl.textContent = incidents.length
    ? `Found ${incidents.length} incident(s) (${filter === "all" ? "all types" : filter}).`
    : `No incidents for filter: ${filter}.`;

  incidentsEl.innerHTML = incidents.length
    ? incidents
        .map((inc, idx) => {
          const sevClass = inc.severity === "High" ? "sev-high" : inc.severity === "Med" ? "sev-med" : "sev-low";
          const anchor = inc.ts ? inc.ts : `line ${inc.start + 1}`;
          const first = inc.hits[0];
          return `
          <button class="inc" type="button" data-id="${escapeHtml(inc.id)}">
            <div class="incTop">
              <div class="badges">
                <span class="badge">${escapeHtml(inc.type)}</span>
                <span class="badge ${sevClass}">${escapeHtml(inc.severity)}</span>
                <span class="badge">${escapeHtml(anchor)}</span>
              </div>
              <span class="muted">#${idx + 1}</span>
            </div>
            <div class="snip">${escapeHtml(first.line.trim().slice(0, 180))}${first.line.trim().length > 180 ? "…" : ""}</div>
            <div class="muted" style="margin-top:8px;">Hint: ${escapeHtml(first.hint)}</div>
          </button>`;
        })
        .join("")
    : `<div class="muted">No incidents detected by the current signature library.</div>`;

  for (const btn of incidentsEl.querySelectorAll(".inc")) {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      const inc = model.incidents.find((x) => x.id === id);
      if (!inc) return;
      state.active = inc;
      renderLog(model.lines, inc);
      const mark = renderedEl.querySelector(`mark[data-line="${inc.start}"]`);
      if (mark) mark.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }
}

const state = { model: null, active: null };

function run() {
  const text = (logInput.value || "").trim();
  if (!text) {
    summaryEl.textContent = "Paste logs or load a preset first.";
    incidentsEl.innerHTML = `<div class="muted">(no data)</div>`;
    renderedEl.innerHTML = `<span class="muted">(paste logs to render)</span>`;
    state.model = null;
    state.active = null;
    return;
  }

  const model = triage(text);
  state.model = model;
  state.active = null;

  renderIncidents(model);
  renderLog(model.lines, null);
}

loadBtn.addEventListener("click", () => {
  const key = presetEl.value;
  if (!key || !PRESETS[key]) return;
  logInput.value = PRESETS[key];
  summaryEl.textContent = `Loaded preset: ${key}. Click Triage.`;
});

triageBtn.addEventListener("click", run);
filterEl.addEventListener("change", () => {
  if (!state.model) return;
  state.active = null;
  renderIncidents(state.model);
  renderLog(state.model.lines, null);
});

renderedEl.innerHTML = `<span class="muted">(paste logs to render)</span>`;
