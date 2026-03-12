(function () {
  /** @type {Array<{id:string,type:string,impact:number,confidence:number,days:number,note:string,createdAt:number}>} */
  let catalysts = [];
  /** @type {string|null} */
  let selectedId = null;

  const $ = (id) => document.getElementById(id);

  const form = $("catalystForm");
  const typeEl = $("type");
  const impactEl = $("impact");
  const confidenceEl = $("confidence");
  const daysEl = $("days");
  const noteEl = $("note");
  const ladderEl = $("ladder");
  const summaryEl = $("summary");
  const detailsEl = $("details");
  const questionsEl = $("questions");
  const falsifyBtn = $("falsify");
  const removeBtn = $("removeSelected");
  const loadExampleBtn = $("loadExample");
  const formHint = $("formHint");
  const falsifyHint = $("falsifyHint");

  function clamp(n, lo, hi) {
    return Math.max(lo, Math.min(hi, n));
  }

  function horizonPenalty(days) {
    return clamp(Math.floor(days / 30), 0, 5);
  }

  function score(c) {
    return c.impact * 2 + c.confidence * 2 - horizonPenalty(c.days);
  }

  function horizonBucket(days) {
    if (days <= 7) return "0-7d";
    if (days <= 30) return "8-30d";
    if (days <= 180) return "31-180d";
    return "181+d";
  }

  function makeId() {
    return "c_" + Math.random().toString(16).slice(2) + "_" + Date.now();
  }

  function typeLabel(t) {
    switch (t) {
      case "earnings":
        return "Earnings";
      case "product":
        return "Product";
      case "macro":
        return "Macro";
      default:
        return "Other";
    }
  }

  function render() {
    const sorted = catalysts
      .slice()
      .sort((a, b) => score(b) - score(a) || a.createdAt - b.createdAt);

    summaryEl.textContent = `${catalysts.length} catalyst${catalysts.length === 1 ? "" : "s"}`;

    ladderEl.innerHTML = "";
    for (const c of sorted) {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "ladder-item";
      btn.setAttribute("aria-selected", c.id === selectedId ? "true" : "false");

      const top = document.createElement("div");
      top.className = "item-top";

      const left = document.createElement("div");
      left.innerHTML = `<span class="pill">${typeLabel(c.type)} · ${horizonBucket(c.days)}</span>`;

      const sc = document.createElement("div");
      sc.className = "score";
      sc.textContent = String(score(c));

      top.appendChild(left);
      top.appendChild(sc);

      const note = document.createElement("div");
      note.className = "muted";
      note.textContent = c.note;

      btn.appendChild(top);
      btn.appendChild(note);

      btn.addEventListener("click", () => {
        select(c.id);
      });

      li.appendChild(btn);
      ladderEl.appendChild(li);
    }

    renderDetails();
  }

  function select(id) {
    selectedId = id;
    questionsEl.innerHTML = "";
    falsifyHint.textContent = "";
    render();
  }

  function renderDetails() {
    const c = catalysts.find((x) => x.id === selectedId);
    const has = Boolean(c);
    falsifyBtn.disabled = !has;
    removeBtn.disabled = !has;

    if (!c) {
      detailsEl.classList.add("muted");
      detailsEl.textContent = "Select a catalyst from the ladder.";
      return;
    }

    detailsEl.classList.remove("muted");
    const pen = horizonPenalty(c.days);
    const sc = score(c);
    detailsEl.innerHTML = `
      <div class="card">
        <div class="muted">Selected</div>
        <div style="margin-top:6px"><strong>${typeLabel(c.type)}</strong> · ${horizonBucket(c.days)} · <span class="score">Score ${sc}</span></div>
        <div style="margin-top:10px">${escapeHtml(c.note)}</div>
        <div style="margin-top:12px" class="muted">
          impact=${c.impact}, confidence=${c.confidence}, days=${c.days}, horizonPenalty=${pen}
          → (impact×2 + confidence×2) − horizonPenalty = (${c.impact}×2 + ${c.confidence}×2) − ${pen}
        </div>
      </div>
    `;
  }

  function escapeHtml(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function generateQuestions(c) {
    const bucket = horizonBucket(c.days);
    const base = [];

    if (c.type === "earnings") {
      base.push("Which single KPI would most quickly disconfirm this thesis (margin, guide, unit growth)?");
      base.push("What does management have to say that would force you to downgrade confidence?");
      base.push("Is this catalyst already priced in (consensus expectations vs your impact score)?");
    } else if (c.type === "product") {
      base.push("What observable user behavior proves adoption is NOT happening (retention, usage, reviews)?");
      base.push("What is the simplest competitor move that would neutralize the impact?");
      base.push("What milestone date would be a red flag if missed?");
    } else if (c.type === "macro") {
      base.push("Which macro print would flip the sign of this catalyst (inflation, rates, FX, credit)?");
      base.push("What second-order effect could overwhelm the direct impact you scored?");
      base.push("What is the timeframe where you’d expect the signal to appear in company metrics?");
    } else {
      base.push("What evidence would make you cut the impact score in half?");
      base.push("What would make you admit your confidence score is wrong?");
      base.push("What is the simplest, fastest test you can run within a week?");
    }

    // bucket seasoning
    if (bucket === "0-7d") {
      base[0] = base[0] + " (in the next 7 days)";
    } else if (bucket === "8-30d") {
      base[1] = base[1] + " (within 30 days)";
    } else if (bucket === "31-180d") {
      base[2] = base[2] + " (over the next 1–6 months)";
    } else {
      base.push("If this takes >6 months, what leading indicators would still keep you in the trade?");
    }

    return base.slice(0, 3);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    formHint.textContent = "";

    const impact = Number(impactEl.value);
    const confidence = Number(confidenceEl.value);
    const days = Number(daysEl.value);
    const note = String(noteEl.value || "").trim();

    if (!note) {
      formHint.textContent = "Add a short note (what exactly is the catalyst?).";
      noteEl.focus();
      return;
    }
    if (!Number.isFinite(days) || days < 1) {
      formHint.textContent = "Horizon must be at least 1 day.";
      daysEl.focus();
      return;
    }

    const c = {
      id: makeId(),
      type: String(typeEl.value),
      impact: clamp(impact, 0, 5),
      confidence: clamp(confidence, 0, 5),
      days: Math.floor(days),
      note,
      createdAt: Date.now(),
    };

    catalysts.push(c);
    selectedId = c.id;
    noteEl.value = "";
    questionsEl.innerHTML = "";
    falsifyHint.textContent = "";
    render();
  });

  falsifyBtn.addEventListener("click", () => {
    const c = catalysts.find((x) => x.id === selectedId);
    if (!c) return;

    const qs = generateQuestions(c);
    questionsEl.innerHTML = "";
    for (const q of qs) {
      const li = document.createElement("li");
      li.textContent = q;
      questionsEl.appendChild(li);
    }
    falsifyHint.textContent = "Generated questions for the selected catalyst.";
  });

  removeBtn.addEventListener("click", () => {
    const c = catalysts.find((x) => x.id === selectedId);
    if (!c) return;
    catalysts = catalysts.filter((x) => x.id !== c.id);
    selectedId = catalysts.length ? catalysts[catalysts.length - 1].id : null;
    questionsEl.innerHTML = "";
    falsifyHint.textContent = "";
    render();
  });

  loadExampleBtn.addEventListener("click", () => {
    catalysts = [
      {
        id: makeId(),
        type: "earnings",
        impact: 4,
        confidence: 3,
        days: 10,
        note: "Next earnings: watch gross margin guide + datacenter mix commentary.",
        createdAt: Date.now() - 3,
      },
      {
        id: makeId(),
        type: "product",
        impact: 5,
        confidence: 2,
        days: 60,
        note: "New SKU launch could expand TAM, but channel checks are mixed.",
        createdAt: Date.now() - 2,
      },
      {
        id: makeId(),
        type: "macro",
        impact: 3,
        confidence: 4,
        days: 7,
        note: "CPI print: rate-cut odds shift could re-rate high duration names.",
        createdAt: Date.now() - 1,
      },
    ];
    selectedId = catalysts[0].id;
    questionsEl.innerHTML = "";
    falsifyHint.textContent = "";
    render();
  });

  // initial
  render();
})();
