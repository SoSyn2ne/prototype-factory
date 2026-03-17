const $ = (id) => document.getElementById(id);

const elIncident = $("incident");
const elCrit = $("crit");
const elTTL = $("ttl");
const ttlOut = $("ttlOut");

const tTemp = $("tTemp");
const tUtil = $("tUtil");
const tMem = $("tMem");
const tDisk = $("tDisk");

const riskOut = $("riskOut");
const meterFill = $("meterFill");
const actionsEl = $("actions");
const timelineEl = $("timeline");
const simulateBtn = $("simulateBtn");

let simTimer = null;

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

function computeRisk({ incident, crit, ttlMin, flags }) {
  const base = {
    oom: 52,
    thermal: 46,
    driver: 60,
    disk: 48,
    hung: 44,
  }[incident] ?? 50;

  const critBump = crit === "high" ? 18 : crit === "med" ? 10 : 4;
  const urgency = clamp(1 - ttlMin / 120, 0, 1); // 0..1
  const urgBump = Math.round(22 * urgency);

  const signalBump =
    (flags.temp ? 10 : 0) +
    (flags.util ? 6 : 0) +
    (flags.mem ? 10 : 0) +
    (flags.disk ? 10 : 0);

  const incidentFit =
    (incident === "oom" && flags.mem ? 10 : 0) +
    (incident === "thermal" && flags.temp ? 10 : 0) +
    (incident === "disk" && flags.disk ? 10 : 0) +
    (incident === "driver" && flags.util && flags.temp ? 6 : 0);

  const raw = base + critBump + urgBump + Math.round(signalBump * 0.6) + incidentFit;
  return clamp(Math.round(raw), 0, 100);
}

function buildActions({ incident, crit, ttlMin, flags }) {
  const urgent = ttlMin <= 20 || crit === "high";

  const common = [
    "Stop the bleeding: pause new jobs / stop the launcher.",
    "Capture a quick snapshot: nvidia-smi (util, mem, temps) + top (GPU processes).",
    "Write a 2-line incident note: what changed + what you saw.",
  ];

  const byIncident = {
    oom: [
      flags.mem ? "Reduce batch size / sequence length; enable gradient accumulation." : "Confirm GPU memory pressure (nvidia-smi shows high mem).",
      "Kill the single largest offending process (target the PID using most GPU mem).",
      "Enable safer defaults: max_split_size_mb, checkpointing, smaller eval batch.",
      "Prevent repeat: add OOM guardrails + log peak memory per run.",
    ],
    thermal: [
      flags.temp ? "Verify temps and clocks; confirm throttle state." : "Check temps; thermal issues often hide behind 'slow' jobs.",
      "Increase fan / airflow; remove dust; re-seat if needed.",
      urgent ? "Power cap immediately to stabilize." : "Consider a power cap + re-run a shorter test.",
      "Prevent repeat: set temp alerts; cap power for long jobs.",
    ],
    driver: [
      "Check dmesg/journal for GPU Xid errors or driver resets.",
      urgent ? "If safe, restart the GPU job runner; avoid full reboot unless required." : "Restart display manager / persistence daemon if applicable.",
      "Pin CUDA/driver versions; avoid 'latest' churn during critical periods.",
      "Prevent repeat: stress test (short) after upgrades.",
    ],
    disk: [
      flags.disk ? "Confirm disk usage; identify the top offenders (datasets, checkpoints, logs)." : "Check disk usage; disk full often masquerades as random failures.",
      urgent ? "Free space fast: delete old checkpoints/logs; move artifacts off-disk." : "Clean safely: archive runs; enforce retention.",
      "Verify write paths (tmp, cache, output directories) and permissions.",
      "Prevent repeat: quotas + scheduled cleanup.",
    ],
    hung: [
      "Identify stuck process; check GPU process list and CPU wait.",
      urgent ? "Try a graceful stop; if stuck, SIGKILL the process holding the GPU." : "Attempt graceful cancel first; capture logs.",
      "Clear orphaned locks / temp files; re-run a small sanity check.",
      "Prevent repeat: timeouts, watchdog, and job-level heartbeats.",
    ],
  };

  const extraSignals = [];
  if (flags.disk && incident !== "disk") extraSignals.push("Disk looks high → verify logging/checkpoint path isn't exploding.");
  if (flags.temp && incident !== "thermal") extraSignals.push("Temps high → consider thermal as secondary cause.");
  if (flags.mem && incident !== "oom") extraSignals.push("Memory high → consider OOM pressure or fragmentation.");

  const list = [...common, ...(byIncident[incident] ?? [])];
  if (extraSignals.length) list.splice(2, 0, ...extraSignals);

  // Make checklist shorter when not urgent
  if (!urgent) return list.slice(0, 7);
  return list.slice(0, 9);
}

function buildTimeline({ incident, crit, ttlMin }) {
  const urgent = ttlMin <= 20 || crit === "high";
  const core = [
    "Detect: job unhealthy (errors / slowdown / no progress)",
    "Stabilize: stop new launches; isolate the offending job",
    "Verify: confirm the primary symptom (mem/temp/disk/driver)",
    "Recover: apply the smallest fix that gets back to green",
    "Prevent: record what happened + add one guardrail",
  ];
  if (urgent) core.splice(3, 0, `Escalate: choose speed over perfection (deadline=${ttlMin}m)`);
  if (incident === "driver") core.splice(2, 0, "Safety: avoid repeated hard resets; risk of filesystem/job corruption");
  return core;
}

function stopSim() {
  if (simTimer) {
    clearInterval(simTimer);
    simTimer = null;
  }
}

function render({ keepHighlight = false } = {}) {
  const incident = elIncident.value;
  const crit = elCrit.value;
  const ttlMin = Number(elTTL.value);
  const flags = {
    temp: tTemp.checked,
    util: tUtil.checked,
    mem: tMem.checked,
    disk: tDisk.checked,
  };

  ttlOut.textContent = `${ttlMin}m`;

  const risk = computeRisk({ incident, crit, ttlMin, flags });
  riskOut.textContent = `Risk ${risk}/100`;
  meterFill.style.width = `${risk}%`;

  const actions = buildActions({ incident, crit, ttlMin, flags });
  actionsEl.innerHTML = actions.map((a) => `<li>${escapeHtml(a)}</li>`).join("");

  const timeline = buildTimeline({ incident, crit, ttlMin });
  const prevActive = keepHighlight ? timelineEl.querySelector("li.active")?.dataset?.i : null;
  timelineEl.innerHTML = timeline
    .map((t, i) => `<li data-i="${i}">${escapeHtml(t)}</li>`)
    .join("");

  if (keepHighlight && prevActive != null) {
    const li = timelineEl.querySelector(`li[data-i="${prevActive}"]`);
    if (li) li.classList.add("active");
  }
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

[elIncident, elCrit, elTTL, tTemp, tUtil, tMem, tDisk].forEach((el) => {
  el.addEventListener("input", () => {
    stopSim();
    render();
  });
  el.addEventListener("change", () => {
    stopSim();
    render();
  });
});

simulateBtn.addEventListener("click", () => {
  stopSim();
  render();
  const steps = Array.from(timelineEl.querySelectorAll("li"));
  let i = 0;
  steps.forEach((s) => s.classList.remove("active"));

  simTimer = setInterval(() => {
    steps.forEach((s) => s.classList.remove("active"));
    if (i >= steps.length) {
      stopSim();
      return;
    }
    steps[i].classList.add("active");
    i += 1;
  }, 650);
});

render();
