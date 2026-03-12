(function () {
  /** @type {Array<{id:string,name:string,minutes:number,power:'low'|'med'|'high',priority:'P0'|'P1'|'P2',parallel:boolean,createdAt:number}>} */
  let jobs = [];

  const $ = (id) => document.getElementById(id);
  const form = $("jobForm");
  const hint = $("hint");

  const el = {
    name: $("name"),
    minutes: $("minutes"),
    power: $("power"),
    priority: $("priority"),
    parallel: $("parallel"),
    baseline: $("baseline"),

    summary: $("summary"),
    finish: $("finish"),
    risk: $("risk"),
    riskExplain: $("riskExplain"),
    timeline: $("timeline"),
    queue: $("queue"),
    breakList: $("breakList"),
  };

  function makeId() {
    return "j_" + Math.random().toString(16).slice(2) + "_" + Date.now();
  }

  function priRank(p) {
    return p === "P0" ? 0 : p === "P1" ? 1 : 2;
  }

  function fmtTime(d) {
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes * 60 * 1000);
  }

  function sortedJobs() {
    return jobs
      .slice()
      .sort((a, b) => priRank(a.priority) - priRank(b.priority) || a.createdAt - b.createdAt);
  }

  /**
   * @returns {Array<{jobId:string,name:string,start:Date,end:Date,lane:'A'|'B'|'EXCLUSIVE',power:string,minutes:number,priority:string,parallel:boolean}>}
   */
  function schedule() {
    const now = new Date();
    const laneA = { freeAt: now };
    const laneB = { freeAt: now };

    /** @type {ReturnType<typeof schedule>} */
    const items = [];

    for (const j of sortedJobs()) {
      if (!j.parallel) {
        // exclusive: wait for both lanes
        const start = laneA.freeAt > laneB.freeAt ? laneA.freeAt : laneB.freeAt;
        const end = addMinutes(start, j.minutes);
        laneA.freeAt = end;
        laneB.freeAt = end;
        items.push({
          jobId: j.id,
          name: j.name,
          start,
          end,
          lane: "EXCLUSIVE",
          power: j.power,
          minutes: j.minutes,
          priority: j.priority,
          parallel: j.parallel,
        });
      } else {
        // parallel-capable: use earliest free lane
        const useA = laneA.freeAt <= laneB.freeAt;
        const start = useA ? laneA.freeAt : laneB.freeAt;
        const end = addMinutes(start, j.minutes);
        if (useA) laneA.freeAt = end;
        else laneB.freeAt = end;
        items.push({
          jobId: j.id,
          name: j.name,
          start,
          end,
          lane: useA ? "A" : "B",
          power: j.power,
          minutes: j.minutes,
          priority: j.priority,
          parallel: j.parallel,
        });
      }
    }

    return items;
  }

  function thermalRisk(items) {
    // compute consecutive high-power minutes by merging timeline in start order.
    const sorted = items.slice().sort((a, b) => a.start.getTime() - b.start.getTime());

    let streak = 0;
    let maxStreak = 0;

    for (const it of sorted) {
      if (it.power === "high") {
        streak += it.minutes;
        maxStreak = Math.max(maxStreak, streak);
      } else {
        streak = 0;
      }
    }

    let label = "OK";
    if (maxStreak >= 90) label = "HIGH";
    else if (maxStreak >= 45) label = "WATCH";

    return { label, maxStreak };
  }

  function renderBreakList() {
    const bullets = [
      "Are runtime estimates too noisy for the finish-time forecast to stay trusted?",
      "Does the two-lane model misrepresent real contention (VRAM, PCIe, I/O) badly enough to be misleading?",
      "Does a thermal-risk flag without ambient/fan context become noise?",
    ];
    el.breakList.innerHTML = "";
    bullets.forEach((b) => {
      const li = document.createElement("li");
      li.textContent = b;
      el.breakList.appendChild(li);
    });
  }

  function render() {
    const items = schedule();

    el.queue.innerHTML = "";
    for (const j of sortedJobs()) {
      const li = document.createElement("li");
      li.className = "qitem";

      const top = document.createElement("div");
      top.className = "qtop";
      top.innerHTML = `
        <div><strong>${escapeHtml(j.name)}</strong></div>
        <div class="muted">${j.minutes}m</div>
      `;

      const meta = document.createElement("div");
      meta.className = "muted";
      meta.innerHTML = `
        <span class="tag">${j.priority}</span>
        <span class="tag">${j.power}</span>
        <span class="tag">${j.parallel ? "parallel" : "EXCLUSIVE"}</span>
      `;

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "btn btn-mini";
      btn.textContent = "Remove";
      btn.addEventListener("click", () => {
        jobs = jobs.filter((x) => x.id !== j.id);
        render();
      });

      li.appendChild(top);
      li.appendChild(meta);
      li.appendChild(btn);
      el.queue.appendChild(li);
    }

    el.timeline.innerHTML = "";
    for (const it of items) {
      const li = document.createElement("li");
      li.textContent = `${fmtTime(it.start)}–${fmtTime(it.end)} · ${it.lane} · ${it.priority} · ${it.power} · ${it.name}`;
      el.timeline.appendChild(li);
    }

    if (!items.length) {
      el.summary.textContent = "No jobs yet.";
      el.finish.textContent = "—";
      el.risk.textContent = "—";
      el.riskExplain.textContent = "";
      return;
    }

    const finishAt = items.reduce((acc, it) => (it.end > acc ? it.end : acc), items[0].end);
    const minsLeft = Math.max(0, Math.round((finishAt.getTime() - new Date().getTime()) / (1000 * 60)));

    el.finish.textContent = `${fmtTime(finishAt)} (≈ ${minsLeft} min)`;

    const { label, maxStreak } = thermalRisk(items);
    el.risk.textContent = `${label}`;
    el.risk.style.color = label === "HIGH" ? "var(--high)" : label === "WATCH" ? "var(--watch)" : "var(--ok)";
    el.riskExplain.textContent = `max consecutive HIGH-power streak: ${maxStreak} min`;

    el.summary.textContent = `${jobs.length} jobs · model: two lanes (A/B) + EXCLUSIVE blocks both`;
  }

  function escapeHtml(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    hint.textContent = "";

    const name = String(el.name.value || "").trim();
    const minutes = Number(el.minutes.value);

    if (!name) {
      hint.textContent = "Name is required.";
      el.name.focus();
      return;
    }

    if (!Number.isFinite(minutes) || minutes < 1) {
      hint.textContent = "Duration must be at least 1 minute.";
      el.minutes.focus();
      return;
    }

    const job = {
      id: makeId(),
      name,
      minutes: Math.floor(minutes),
      power: /** @type {'low'|'med'|'high'} */ (String(el.power.value)),
      priority: /** @type {'P0'|'P1'|'P2'} */ (String(el.priority.value)),
      parallel: Boolean(el.parallel.checked),
      createdAt: Date.now(),
    };

    jobs.push(job);
    el.name.value = "";
    render();
  });

  el.baseline.addEventListener("click", () => {
    jobs = [
      { id: makeId(), name: "daily-scan", minutes: 25, power: "low", priority: "P1", parallel: true, createdAt: Date.now() - 3 },
      { id: makeId(), name: "finetune-v2", minutes: 90, power: "high", priority: "P0", parallel: false, createdAt: Date.now() - 2 },
      { id: makeId(), name: "eval-batch", minutes: 40, power: "med", priority: "P2", parallel: true, createdAt: Date.now() - 1 },
    ];
    render();
  });

  renderBreakList();
  render();
})();
