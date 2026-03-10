/* GPU Log Triage Pad — local heuristic analyzer */

const STORAGE_KEY = "pf_gpu_log_triage_v1";
const MAX_CHARS = 250_000;

const $ = (id) => document.getElementById(id);

const logInput = $("logInput");
const analyzeBtn = $("analyzeBtn");
const clearBtn = $("clearBtn");
const resetBtn = $("resetBtn");

const signalsEl = $("signals");
const actionsEl = $("actions");
const evidence = $("evidence");
const evidenceTitle = $("evidenceTitle");
const statusPill = $("statusPill");

const saveBtn = $("saveBtn");
const saveMsg = $("saveMsg");

const notesSelect = $("notesSelect");
const noteView = $("noteView");
const deleteOneBtn = $("deleteOneBtn");

function safeParse(str, fb) {
  try { return JSON.parse(str); } catch { return fb; }
}

function uid() {
  return Math.random().toString(16).slice(2) + Date.now().toString(16);
}

function nowStamp() {
  return new Date().toISOString().replace("T", " ").slice(0, 19);
}

const RULES = [
  {
    key: "oom",
    name: "CUDA / VRAM OOM",
    patterns: [
      /cuda\s+out\s+of\s+memory/i,
      /out of memory/i,
      /cublas.*alloc/i,
      /failed to allocate.*device/i,
      /OOM/i,
    ],
    actions: [
      "Check batch size / sequence length / resolution; retry smaller.",
      "Confirm other processes aren’t consuming VRAM (nvidia-smi).",
      "Enable gradient checkpointing / activation offload if training.",
      "Watch for memory fragmentation (long-running process).",
    ],
  },
  {
    key: "xid",
    name: "Driver reset (NVRM Xid)",
    patterns: [/NVRM:\s*Xid/i, /gpu has fallen off the bus/i, /Xid\s*\(/i],
    actions: [
      "Check dmesg/journalctl around the timestamp for Xid code context.",
      "Verify power/PCIe seating and cables; check PSU headroom.",
      "Consider driver version regression; try previous known-good driver.",
      "If frequent: run a stress test and inspect GPU health.",
    ],
  },
  {
    key: "thermal",
    name: "Thermal throttle / overheating",
    patterns: [/throttle/i, /thermal/i, /temperature/i, /clock.*reduced/i],
    actions: [
      "Check GPU temps and fan curve (nvidia-smi -q / sensors).",
      "Inspect airflow/dust; confirm fans spin under load.",
      "Reduce power limit temporarily; retest stability.",
      "If in a rack/closet: measure ambient temp under load.",
    ],
  },
  {
    key: "cudaerr",
    name: "CUDA kernel/runtime error",
    patterns: [/cuda error/i, /device-side assert/i, /illegal memory access/i, /misaligned address/i],
    actions: [
      "Re-run with CUDA_LAUNCH_BLOCKING=1 to localize the failing op.",
      "Check for dtype/shape issues (common cause of device-side asserts).",
      "Confirm CUDA/cuDNN versions match the build.",
      "If reproducible: reduce to a minimal failing batch.",
    ],
  },
  {
    key: "nccl",
    name: "NCCL / multi-GPU communication",
    patterns: [/NCCL/i, /socket timeout/i, /unhandled system error/i, /collective/i],
    actions: [
      "Confirm IB/Ethernet stability; check interface errors.",
      "Try NCCL_DEBUG=INFO and pin to a specific interface.",
      "Verify topology / rank mapping; single-node vs multi-node config.",
    ],
  },
  {
    key: "disk",
    name: "Disk / IO bottleneck",
    patterns: [/no space left on device/i, /I\/O error/i, /disk quota exceeded/i],
    actions: [
      "Check disk free space and inode usage.",
      "Confirm dataset/cache paths and permissions.",
      "If network storage: check mount health and latency.",
    ],
  },
];

function scoreText(text, patterns) {
  const lines = text.split(/\r?\n/);
  const matches = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    for (const re of patterns) {
      if (re.test(line)) {
        matches.push({ lineNo: i + 1, line });
        break;
      }
    }
  }

  // score: number of matching lines, capped.
  const score = Math.min(100, matches.length * 12);
  return { score, matches };
}

function analyze(text) {
  const trimmed = text.trim();
  if (!trimmed) return { results: [], summary: "Paste logs to analyze." };

  const results = RULES.map((r) => {
    const { score, matches } = scoreText(trimmed, r.patterns);
    return { ...r, score, matches };
  })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score);

  const summary = results.length
    ? `Detected ${results.length} signal(s). Top: ${results[0].name}.`
    : "No strong signals detected. Try dmesg / driver logs.";

  return { results, summary };
}

let state = {
  last: { text: "", results: [], selectedKey: null },
  notes: [],
  selectedNoteId: null,
};

function load() {
  const raw = localStorage.getItem(STORAGE_KEY);
  const parsed = safeParse(raw, null);
  if (parsed) state = { ...state, ...parsed };
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function setSelectedSignal(key) {
  state.last.selectedKey = key;
  save();
  render();
}

function selectedSignal() {
  return state.last.results.find((r) => r.key === state.last.selectedKey) || null;
}

function renderSignals() {
  signalsEl.innerHTML = "";
  const results = state.last.results;
  if (!results.length) {
    const p = document.createElement("p");
    p.className = "hint";
    p.textContent = "No signals yet. Click Analyze.";
    signalsEl.appendChild(p);
    return;
  }

  for (const r of results) {
    const div = document.createElement("div");
    div.className = "signal";
    div.role = "button";
    div.tabIndex = 0;
    div.ariaPressed = String(r.key === state.last.selectedKey);

    div.innerHTML = `<div><div class="name">${r.name}</div><div class="score">Score ${r.score} • ${r.matches.length} line(s)</div></div><div class="pill">Open</div>`;

    const open = () => setSelectedSignal(r.key);
    div.addEventListener("click", open);
    div.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    });

    signalsEl.appendChild(div);
  }
}

function renderActions() {
  actionsEl.innerHTML = "";
  const results = state.last.results;
  if (!results.length) {
    const li = document.createElement("li");
    li.textContent = "Analyze logs to generate a checklist.";
    actionsEl.appendChild(li);
    saveBtn.disabled = true;
    return;
  }

  // Combine top 2 categories' actions (dedupe).
  const top = results.slice(0, 2);
  const set = new Set();
  const list = [];
  for (const r of top) {
    for (const a of r.actions) {
      if (set.has(a)) continue;
      set.add(a);
      list.push({ text: a, from: r.name });
    }
  }

  for (const item of list) {
    const li = document.createElement("li");
    li.textContent = item.text;
    actionsEl.appendChild(li);
  }

  saveBtn.disabled = false;
}

function renderEvidence() {
  const sig = selectedSignal();
  if (!sig) {
    evidenceTitle.textContent = "—";
    evidence.textContent = "Select a signal to view matching lines.";
    return;
  }
  evidenceTitle.textContent = sig.name;
  const lines = sig.matches.slice(0, 80).map((m) => `${String(m.lineNo).padStart(4, " ")}: ${m.line}`);
  evidence.textContent = lines.length ? lines.join("\n") : "No lines captured.";
}

function renderNotes() {
  notesSelect.innerHTML = "";
  if (!state.notes.length) {
    const opt = document.createElement("option");
    opt.value = "";
    opt.textContent = "(no saved notes)";
    notesSelect.appendChild(opt);
    noteView.textContent = "";
    deleteOneBtn.disabled = true;
    return;
  }

  for (const n of state.notes) {
    const opt = document.createElement("option");
    opt.value = n.id;
    opt.textContent = `${n.title} — ${n.createdAt}`;
    notesSelect.appendChild(opt);
  }

  if (!state.selectedNoteId) state.selectedNoteId = state.notes[0].id;
  notesSelect.value = state.selectedNoteId;

  const note = state.notes.find((n) => n.id === state.selectedNoteId);
  noteView.textContent = note ? note.body : "";
  deleteOneBtn.disabled = !note;
}

function render() {
  statusPill.textContent = "Offline";
  renderSignals();
  renderActions();
  renderEvidence();
  renderNotes();
}

function setLastAnalysis(text, results) {
  state.last.text = text;
  state.last.results = results;
  state.last.selectedKey = results[0]?.key || null;
  save();
  render();
}

analyzeBtn.addEventListener("click", () => {
  saveMsg.textContent = "";

  let text = String(logInput.value || "");
  if (text.length > MAX_CHARS) {
    text = text.slice(0, MAX_CHARS);
    logInput.value = text;
    alert(`Log too large. Truncated to ${MAX_CHARS.toLocaleString()} characters for browser safety.`);
  }

  const { results, summary } = analyze(text);
  setLastAnalysis(text, results);
  evidence.textContent = summary;
});

clearBtn.addEventListener("click", () => {
  logInput.value = "";
  saveMsg.textContent = "";
});

resetBtn.addEventListener("click", () => {
  const ok = confirm("Reset history? This deletes saved notes and last analysis.");
  if (!ok) return;
  localStorage.removeItem(STORAGE_KEY);
  state = { last: { text: "", results: [], selectedKey: null }, notes: [], selectedNoteId: null };
  render();
});

saveBtn.addEventListener("click", () => {
  if (!state.last.results.length) return;

  const top = state.last.results.slice(0, 3);
  const title = prompt("Title for this triage note?", top[0]?.name || "GPU incident");
  if (!title) return;

  const body = [
    `GPU TRIAGE NOTE — ${nowStamp()}`,
    `Title: ${title}`,
    `Top signals: ${top.map((t) => `${t.name} (score ${t.score})`).join(", ")}`,
    "",
    "Evidence (top signal):",
    ...(top[0]?.matches.slice(0, 20).map((m) => `${m.lineNo}: ${m.line}`) || []),
    "",
    "Next actions:",
    ...(top.slice(0, 2).flatMap((t) => t.actions.map((a) => `- ${a}`))),
  ].join("\n");

  const note = { id: uid(), title, createdAt: nowStamp(), body };
  state.notes.unshift(note);
  state.selectedNoteId = note.id;
  save();
  render();

  saveMsg.textContent = "Saved.";
  setTimeout(() => (saveMsg.textContent = ""), 1200);
});

notesSelect.addEventListener("change", () => {
  state.selectedNoteId = notesSelect.value;
  save();
  render();
});

deleteOneBtn.addEventListener("click", () => {
  const id = state.selectedNoteId;
  if (!id) return;
  const note = state.notes.find((n) => n.id === id);
  const ok = confirm(`Delete note "${note?.title || ""}"?`);
  if (!ok) return;
  state.notes = state.notes.filter((n) => n.id !== id);
  state.selectedNoteId = state.notes[0]?.id || null;
  save();
  render();
});

(function init(){
  load();
  render();
})();
