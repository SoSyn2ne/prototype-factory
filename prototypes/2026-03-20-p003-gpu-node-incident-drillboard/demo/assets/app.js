const $ = (id) => document.getElementById(id);

const modePill = $("modePill");
const timerEl = $("timer");
const checklistEl = $("checklist");
const logEl = $("log");
const startBtn = $("startBtn");
const resetBtn = $("resetBtn");
const clearBtn = $("clearBtn");

let currentAlert = null;
let startAt = null;
let tick = null;

const RUNBOOKS = {
  thermal: {
    label: "Thermal throttle",
    steps: [
      "Confirm GPU temps and fan RPM (nvidia-smi / sensors).",
      "Check airflow: dust, intake blockage, room temp.",
      "Check recent workload: sustained 100% utilization? power cap?",
      "Mitigation: reduce power limit / pause heavy job / increase fans.",
      "If repeated: schedule maintenance; validate thermal paste / pads.",
    ],
    guidance: "Avoid immediate reboot. Throttle is a symptom; find root cause."
  },
  disk: {
    label: "Disk pressure",
    steps: [
      "Check disk usage (df -h) and inode usage (df -i).",
      "Find largest dirs (du -sh /* | sort -h).",
      "Rotate / compress logs; clear temp caches safely.",
      "Verify training outputs aren’t writing to OS disk.",
      "Add guardrail: alert at 80% and 90%; set cleanup job.",
    ],
    guidance: "Be careful deleting. Prefer moving to a quarantine folder first."
  },
  oom: {
    label: "CUDA OOM loop",
    steps: [
      "Confirm which process owns VRAM (nvidia-smi pmon / ps).",
      "Capture the command / config that triggered OOM.",
      "Mitigation: lower batch size / grad accumulation / checkpointing.",
      "Check memory leak: repeated allocations across steps.",
      "If stuck: kill the offending PID; leave node healthy for next run.",
    ],
    guidance: "Don’t blame the GPU first. Most OOMs are config regressions."
  },
  net: {
    label: "Network flakiness",
    steps: [
      "Confirm reachability (ping, DNS) and packet loss.",
      "Check NIC errors (ethtool -S) and dmesg for resets.",
      "If pulling data: validate storage endpoints and retries.",
      "Mitigation: switch to local cache; pause distributed job.",
      "If persistent: schedule cable/switch port swap test.",
    ],
    guidance: "Stabilize the job first; root-cause can happen after impact stops."
  },
};

function ts() {
  const d = new Date();
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}

function fmt(ms) {
  const s = Math.max(0, Math.floor(ms / 1000));
  const mm = String(Math.floor(s / 60)).padStart(2, "0");
  const ss = String(s % 60).padStart(2, "0");
  return `${mm}:${ss}`;
}

function log(msg, meta = "") {
  const el = document.createElement("div");
  el.className = "entry";
  el.innerHTML = `
    <div class="entryTop">
      <div class="msg">${msg}</div>
      <div class="ts">${ts()}</div>
    </div>
    ${meta ? `<div class="meta">${meta}</div>` : ""}
  `;
  logEl.prepend(el);
}

function setIncident(kind) {
  currentAlert = kind;
  const rb = RUNBOOKS[kind];
  modePill.textContent = rb.label;
  modePill.style.borderColor = "rgba(14,165,233,0.35)";

  checklistEl.innerHTML = rb.steps
    .map((s, i) => {
      const id = `c_${kind}_${i}`;
      return `
        <li>
          <label class="item">
            <input type="checkbox" id="${id}" />
            <span>${s}</span>
          </label>
        </li>
      `;
    })
    .join("");

  log(`Injected alert: ${rb.label}`, rb.guidance);
}

function ensureTimer() {
  if (tick) return;
  tick = setInterval(() => {
    if (!startAt) return;
    timerEl.textContent = fmt(Date.now() - startAt);
  }, 250);
}

function startTimer() {
  if (startAt) return;
  startAt = Date.now();
  ensureTimer();
  log("Timer started", currentAlert ? `Incident: ${RUNBOOKS[currentAlert].label}` : "No incident selected yet");
}

function resetTimer() {
  startAt = null;
  timerEl.textContent = "00:00";
  log("Timer reset");
}

function clearIncident() {
  currentAlert = null;
  modePill.textContent = "No incident";
  modePill.style.borderColor = "rgba(15,23,42,0.12)";
  checklistEl.innerHTML = "<li style=\"color: rgba(15,23,42,0.68);\">Inject an alert to load a checklist.</li>";
  log("Incident cleared");
  resetTimer();
}

// Wire buttons
for (const btn of document.querySelectorAll("button[data-alert]")) {
  btn.addEventListener("click", () => setIncident(btn.dataset.alert));
}

startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);
clearBtn.addEventListener("click", clearIncident);

// Initial state
clearIncident();
log("Ready", "Pick an alert type to start a drill.");
