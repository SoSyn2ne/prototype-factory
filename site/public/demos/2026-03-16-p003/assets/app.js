function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function hasAny(text, needles) {
  const t = text.toLowerCase();
  return needles.some((n) => t.includes(n));
}

function diagnose({ log, sym }) {
  const receipts = [];
  const score = {
    oom: 0,
    thermal: 0,
    driver: 0,
    data: 0,
    disk: 0,
  };

  const logText = (log || "").trim();

  // Keyword signals
  if (hasAny(logText, ["out of memory", "cuda out of memory", "cublas", "alloc", "vram"])) {
    score.oom += 3;
    receipts.push("Log mentions out-of-memory / allocation failures.");
  }
  if (hasAny(logText, ["nvml", "xid", "gpu has fallen off the bus", "cuda initialization", "driver"])) {
    score.driver += 3;
    receipts.push("Log includes driver/NVML/CUDA init style errors.");
  }
  if (hasAny(logText, ["throttle", "over temp", "thermal", "power limit", "pwr", "temperature"])) {
    score.thermal += 2;
    receipts.push("Log mentions thermal/power throttling cues.");
  }
  if (hasAny(logText, ["dataloader", "decode", "corrupt", "jpeg", "png", "tokenizer", "unicode"])) {
    score.data += 2;
    receipts.push("Log contains data decoding / dataloader keywords.");
  }
  if (hasAny(logText, ["no space left on device", "disk quota", "write failed", "enospc"])) {
    score.disk += 3;
    receipts.push("Log indicates disk full / write failure.");
  }

  // Symptom toggles
  if (sym.oom) {
    score.oom += 2;
    receipts.push("You observed VRAM/OOM symptoms.");
  }
  if (sym.thermal) {
    score.thermal += 2;
    receipts.push("You observed thermal throttling symptoms.");
  }
  if (sym.driver) {
    score.driver += 2;
    receipts.push("You observed driver reset / CUDA init symptoms.");
  }
  if (sym.data) {
    score.data += 2;
    receipts.push("You observed data pipeline failures.");
  }
  if (sym.disk) {
    score.disk += 2;
    receipts.push("You observed disk-space/write failures.");
  }

  // Contradiction: many toggles at once.
  const toggles = Object.values(sym).filter(Boolean).length;
  const contradictionPenalty = toggles >= 4 ? 1 : toggles === 3 ? 0.5 : 0;

  const ranked = Object.entries(score)
    .map(([k, v]) => ({ k, v }))
    .sort((a, b) => b.v - a.v);

  const top = ranked[0];
  const second = ranked[1];

  let category = "Unknown";
  let confidence = 0;

  if (top.v <= 1 && logText.length < 8) {
    category = "Unknown";
    confidence = 30;
    receipts.push("Not enough signal (short/empty log). Using safe defaults.");
  } else {
    category = top.k.toUpperCase();
    const gap = top.v - second.v;
    confidence = clamp(Math.round((50 + 12 * top.v + 12 * gap - 10 * contradictionPenalty)), 35, 92);
  }

  const steps = stepsFor(category, { logText, sym });

  return { category, confidence, receipts: receipts.slice(0, 6), steps };
}

function stepsFor(category, { logText, sym }) {
  const common = [
    "Capture the first error line + 20 lines around it (don’t paste the entire log).",
    "Record GPU model/driver/CUDA + job commit hash + dataset version.",
  ];

  if (category === "OOM") {
    return [
      "Reduce batch size or sequence length (fastest).",
      "Enable gradient checkpointing / activation recompute.",
      "Check for memory leaks: does VRAM climb each step? (watch nvidia-smi).",
      "Try mixed precision (fp16/bf16) if supported.",
      ...common,
    ];
  }

  if (category === "THERMAL") {
    return [
      "Check clocks/temps: run `nvidia-smi -l 1` during the job.",
      "Lower power limit / cap clocks; ensure adequate airflow.",
      "If throttling persists, reduce workload intensity (smaller batch) or schedule cooler hours.",
      "Confirm PSU and cables are stable (sudden resets under load).",
      ...common,
    ];
  }

  if (category === "DRIVER") {
    return [
      "Confirm driver ↔ CUDA ↔ framework compatibility (versions).",
      "Restart the job in a clean process; if GPU is wedged, reboot host.",
      "Check dmesg / kernel logs for XID codes.",
      "If using containers, ensure NVIDIA runtime and matching driver libs.",
      ...common,
    ];
  }

  if (category === "DATA") {
    return [
      "Reproduce on CPU/single-worker dataloader to isolate dataset errors.",
      "Add try/catch + sample id logging for the failing record.",
      "Validate dataset integrity (hash/size) and re-download if needed.",
      "Reduce dataloader workers; disable aggressive prefetch temporarily.",
      ...common,
    ];
  }

  if (category === "DISK") {
    return [
      "Check free space (`df -h`) and clean caches/checkpoints.",
      "Move logs/checkpoints to a larger volume.",
      "Add safeguards: stop saving every step; compress or rotate logs.",
      ...common,
    ];
  }

  // Unknown
  const hints = [];
  if (sym.oom) hints.push("You toggled OOM—start with batch size and leak check.");
  if (sym.driver) hints.push("You toggled driver—check versions and dmesg XIDs.");
  if (sym.thermal) hints.push("You toggled thermal—check temps + power limit.");

  return [
    ...(hints.length ? hints : ["Start by identifying the *first* error line and classifying it (OOM/driver/thermal/data)."]),
    "Try the smallest reproducible run (single batch, single worker, short steps).",
    "If still unclear, capture environment versions + a minimal log snippet and escalate.",
    ...common,
  ];
}

function noteTemplate({ job, when, category, confidence, receipts }) {
  const j = job.trim() || "(job)";
  const w = when.trim() || "(time)";
  const r = receipts.map((x) => `- ${x}`).join("\n");
  return `Incident note\n\nJob: ${j}\nWhen: ${w}\nCategory: ${category} (${confidence}% confidence)\n\nReceipts\n${r}\n\nNext action\n- (what you will try next, in 1 line)\n`;
}

function main() {
  const el = {
    log: document.getElementById("log"),
    job: document.getElementById("job"),
    when: document.getElementById("when"),
    copyBtn: document.getElementById("copyBtn"),
    tagBtn: document.getElementById("tagBtn"),
    toast: document.getElementById("toast"),
    category: document.getElementById("category"),
    confidence: document.getElementById("confidence"),
    steps: document.getElementById("steps"),
    receipts: document.getElementById("receipts"),
    chart: document.getElementById("chart"),
    symOOM: document.getElementById("symOOM"),
    symThermal: document.getElementById("symThermal"),
    symDriver: document.getElementById("symDriver"),
    symData: document.getElementById("symData"),
    symDisk: document.getElementById("symDisk"),
  };

  const counts = {
    OOM: 0,
    THERMAL: 0,
    DRIVER: 0,
    DATA: 0,
    DISK: 0,
    Unknown: 0,
  };

  function showToast(msg) {
    el.toast.hidden = false;
    el.toast.textContent = msg;
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => {
      el.toast.hidden = true;
    }, 2800);
  }

  function symState() {
    return {
      oom: el.symOOM.checked,
      thermal: el.symThermal.checked,
      driver: el.symDriver.checked,
      data: el.symData.checked,
      disk: el.symDisk.checked,
    };
  }

  function render() {
    const result = diagnose({ log: el.log.value, sym: symState() });
    el.category.textContent = result.category;
    el.category.style.color =
      result.category === "OOM"
        ? "var(--warn)"
        : result.category === "THERMAL"
        ? "var(--warn)"
        : result.category === "DRIVER"
        ? "var(--bad)"
        : result.category === "DATA"
        ? "var(--accent)"
        : result.category === "DISK"
        ? "var(--bad)"
        : "var(--text)";

    el.confidence.textContent = `${result.confidence}%`;

    el.steps.innerHTML = "";
    result.steps.forEach((s) => {
      const li = document.createElement("li");
      li.textContent = s;
      el.steps.appendChild(li);
    });

    el.receipts.innerHTML = "";
    result.receipts.forEach((r) => {
      const li = document.createElement("li");
      li.textContent = r;
      el.receipts.appendChild(li);
    });

    el.copyBtn.dataset.note = noteTemplate({
      job: el.job.value,
      when: el.when.value,
      category: result.category,
      confidence: result.confidence,
      receipts: result.receipts,
    });

    el.tagBtn.dataset.cat = result.category;
  }

  function renderChart() {
    const entries = Object.entries(counts);
    const total = entries.reduce((acc, [, v]) => acc + v, 0) || 1;

    el.chart.innerHTML = "";
    entries
      .filter(([k]) => k !== "Unknown")
      .sort((a, b) => b[1] - a[1])
      .forEach(([name, value]) => {
        const row = document.createElement("div");
        row.className = "bar";

        const left = document.createElement("div");
        left.className = "bar-name";
        left.textContent = name;

        const track = document.createElement("div");
        track.className = "bar-track";

        const fill = document.createElement("div");
        fill.className = "bar-fill";
        fill.style.width = `${Math.round((value / total) * 100)}%`;

        track.appendChild(fill);

        const count = document.createElement("div");
        count.className = "bar-count";
        count.textContent = String(value);

        row.appendChild(left);
        row.appendChild(track);
        row.appendChild(count);

        el.chart.appendChild(row);
      });
  }

  async function copyNote() {
    const text = el.copyBtn.dataset.note || "";
    try {
      await navigator.clipboard.writeText(text);
      showToast("Copied incident note to clipboard.");
    } catch {
      showToast("Clipboard blocked. Select and copy from the field manually.");
    }
  }

  function tag() {
    const cat = el.tagBtn.dataset.cat || "Unknown";
    if (!counts[cat]) counts[cat] = 0;
    counts[cat] += 1;
    renderChart();
    showToast(`Tagged incident as ${cat}.`);
  }

  const examples = {
    oom: {
      log: "RuntimeError: CUDA out of memory. Tried to allocate 256.00 MiB (GPU 0; 11.00 GiB total capacity; 10.35 GiB already allocated; 120.00 MiB free; 10.50 GiB reserved in total by PyTorch)",
      sym: { oom: true },
    },
    thermal: {
      log: "Warning: GPU temperature is above threshold. Throttle reason: HW Thermal Slowdown. Power limit reached.",
      sym: { thermal: true },
    },
    driver: {
      log: "NVRM: Xid (PCI:0000:01:00): 79, GPU has fallen off the bus. CUDA initialization error: driver shutting down",
      sym: { driver: true },
    },
  };

  document.querySelectorAll("[data-example]").forEach((b) => {
    b.addEventListener("click", () => {
      const k = b.getAttribute("data-example");
      const ex = examples[k];
      if (!ex) return;

      el.log.value = ex.log;
      el.symOOM.checked = Boolean(ex.sym.oom);
      el.symThermal.checked = Boolean(ex.sym.thermal);
      el.symDriver.checked = Boolean(ex.sym.driver);
      el.symData.checked = Boolean(ex.sym.data);
      el.symDisk.checked = Boolean(ex.sym.disk);
      render();
      showToast(`Loaded example: ${k.toUpperCase()}`);
    });
  });

  el.log.addEventListener("input", render);
  [el.symOOM, el.symThermal, el.symDriver, el.symData, el.symDisk].forEach((c) => c.addEventListener("change", render));
  el.job.addEventListener("input", render);
  el.when.addEventListener("input", render);
  el.copyBtn.addEventListener("click", copyNote);
  el.tagBtn.addEventListener("click", tag);

  render();
  renderChart();
}

main();
