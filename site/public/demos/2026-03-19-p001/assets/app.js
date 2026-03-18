/* Earnings Call Red-Flag Highlighter — deterministic heuristic demo */

const $ = (sel) => document.querySelector(sel);

const transcriptInput = $("#transcriptInput");
const presetSelect = $("#presetSelect");
const loadPresetBtn = $("#loadPresetBtn");
const analyzeBtn = $("#analyzeBtn");
const explainToggle = $("#explainToggle");
const flagsEl = $("#flags");
const renderedTranscriptEl = $("#renderedTranscript");
const summaryEl = $("#summary");

const PRESETS = {
  semi: `Operator: Good afternoon and welcome.\n\nCEO: Demand in our datacenter segment remains strong, but we saw a pause in consumer. We are reaffirming full-year revenue guidance, though the range tightens.\nCFO: Gross margin was impacted by expedited freight and a yield excursion at our new node. We expect yield to normalize over the next two quarters.\nCFO: Channel inventory remains elevated in China, and we are working through an inventory correction with distributors.\nCEO: Pricing is becoming more competitive in legacy products; we are using targeted promotions.\nCEO: For the next quarter, visibility is limited and we are not providing guidance beyond the quarter.\nQ: Any impact from export controls?\nA: We are evaluating license requirements for certain shipments and cannot predict timing.\n`,
  saas: `Operator: Welcome.\n\nCEO: We had strong top-of-funnel, but conversion slowed late in the quarter. We are lowering full-year billings guidance due to elongated sales cycles.\nCFO: We saw higher churn in SMB and increased discounting in competitive deals, which pressured net retention.\nCFO: We are increasing capex to support a new data pipeline and accelerating hiring in customer success.\nCEO: We have meaningful exposure to customers in China and are monitoring macro headwinds.\nQ: Any supply issues?\nA: Not supply, but we have limited implementation capacity and longer onboarding times.\n`,
};

/**
 * Rule format:
 * - category: label in UI
 * - severity: Low|Med|High
 * - weight: base score contribution (0-100)
 * - pattern: regex (global, case-insensitive recommended)
 * - ruleId, description: for Explain Rules
 */
const RULES = [
  {
    category: "Guidance",
    severity: "High",
    weight: 85,
    ruleId: "guidance-withdraw",
    description: "Withdrawing / not providing guidance / visibility limited",
    pattern: /(withdrawing guidance|not providing guidance|visibility is limited|cannot provide guidance)/gi,
  },
  {
    category: "Guidance",
    severity: "Med",
    weight: 65,
    ruleId: "guidance-lower",
    description: "Lowering / cutting / reducing guidance",
    pattern: /(lower(ing)?|cut(ting)?|reduc(ing|e)) (full[- ]year|fy|annual|q\d|quarter|revenue|billings|outlook|guidance)/gi,
  },
  {
    category: "Demand",
    severity: "Med",
    weight: 55,
    ruleId: "demand-soft",
    description: "Demand slowing / pause / elongated sales cycles",
    pattern: /(demand (is )?(soft|weaken|slowing)|saw a pause|conversion slowed|elongated sales cycles|visibility is limited)/gi,
  },
  {
    category: "Supply",
    severity: "Med",
    weight: 55,
    ruleId: "capacity-constraint",
    description: "Capacity constraints / implementation bottleneck / longer onboarding",
    pattern: /(capacity (is )?(tight|limited)|constraints?|bottleneck|longer onboarding|implementation capacity)/gi,
  },
  {
    category: "Pricing",
    severity: "Med",
    weight: 60,
    ruleId: "pricing-pressure",
    description: "Pricing pressure / competitive intensity / discounting",
    pattern: /(pricing (is )?(becoming )?(more )?(competitive|challenging)|pricing pressure|competitive deals|increased discounting|discounting)/gi,
  },
  {
    category: "Inventory",
    severity: "High",
    weight: 75,
    ruleId: "inventory-correction",
    description: "Inventory correction / elevated channel inventory",
    pattern: /(inventory correction|channel inventory (remains )?elevated|destocking|digestion)/gi,
  },
  {
    category: "Capex",
    severity: "Low",
    weight: 40,
    ruleId: "capex-up",
    description: "Increasing capex / accelerating spend",
    pattern: /(increasing capex|capex (is )?(up|higher)|accelerat(ing|e) (spend|investment))/gi,
  },
  {
    category: "China",
    severity: "Med",
    weight: 55,
    ruleId: "china-headwinds",
    description: "China exposure / macro headwinds",
    pattern: /(china|chinese|headwinds in china|exposure to .*china)/gi,
  },
  {
    category: "Export controls",
    severity: "High",
    weight: 80,
    ruleId: "export-control",
    description: "Export controls / license uncertainty",
    pattern: /(export controls?|license requirements?|evaluating license|cannot predict timing|shipments? .*license)/gi,
  },
  {
    category: "Yield",
    severity: "Med",
    weight: 58,
    ruleId: "yield-excursion",
    description: "Yield excursion / ramp delays / normalization",
    pattern: /(yield excursion|yield (is )?(impacted|lower)|ramp (delay|slip)|yield to normalize)/gi,
  },
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

function makeSnippet(text, start, end) {
  const pad = 56;
  const a = Math.max(0, start - pad);
  const b = Math.min(text.length, end + pad);
  const prefix = a > 0 ? "…" : "";
  const suffix = b < text.length ? "…" : "";
  return prefix + text.slice(a, b).trim() + suffix;
}

function findMatches(text) {
  const matches = [];
  for (const rule of RULES) {
    // reset lastIndex for safety
    rule.pattern.lastIndex = 0;
    const iter = text.matchAll(rule.pattern);
    for (const m of iter) {
      const raw = m[0] || "";
      const idx = m.index ?? -1;
      if (idx < 0) continue;
      const start = idx;
      const end = idx + raw.length;

      const confidence = Math.max(
        20,
        Math.min(100, Math.round(rule.weight + Math.min(20, raw.length / 2)))
      );

      matches.push({
        id: `${rule.ruleId}-${start}-${end}`,
        category: rule.category,
        severity: rule.severity,
        confidence,
        start,
        end,
        quote: makeSnippet(text, start, end),
        raw,
        rules: [
          {
            ruleId: rule.ruleId,
            description: rule.description,
            weight: rule.weight,
            pattern: String(rule.pattern),
          },
        ],
      });
    }
  }

  // Merge duplicates that land on same span (different rules) — keep one, merge rules.
  const bySpan = new Map();
  for (const m of matches) {
    const key = `${m.start}-${m.end}`;
    const prev = bySpan.get(key);
    if (!prev) {
      bySpan.set(key, m);
    } else {
      prev.rules.push(...m.rules);
      // bump confidence slightly if multiple rules fire
      prev.confidence = Math.min(100, Math.round((prev.confidence + m.confidence) / 2 + 6));
      // severity becomes max
      if (severityRank(m.severity) > severityRank(prev.severity)) prev.severity = m.severity;
    }
  }

  const unique = [...bySpan.values()];
  unique.sort((a, b) => {
    const s = severityRank(b.severity) - severityRank(a.severity);
    if (s !== 0) return s;
    return b.confidence - a.confidence;
  });

  return unique;
}

function renderTranscript(text, activeSpan) {
  // Build mark spans for all found matches to support scrolling.
  // activeSpan = {start,end} for current highlight.
  const flags = state.flags;
  const spans = flags
    .map((f) => ({ start: f.start, end: f.end, id: f.id }))
    .sort((a, b) => a.start - b.start || a.end - b.end);

  const safe = escapeHtml(text);
  // Map safe indices: because escaping changes length, we must build from raw text,
  // escaping segments as we go.
  let out = "";
  let pos = 0;
  for (const sp of spans) {
    if (sp.start < pos) continue; // overlapping; skip
    out += escapeHtml(text.slice(pos, sp.start));
    const chunk = escapeHtml(text.slice(sp.start, sp.end));
    const isActive = activeSpan && sp.start === activeSpan.start && sp.end === activeSpan.end;
    out += `<mark data-match-id="${sp.id}" data-active="${isActive ? "true" : "false"}">${chunk}</mark>`;
    pos = sp.end;
  }
  out += escapeHtml(text.slice(pos));
  renderedTranscriptEl.innerHTML = out || "<span class=\"muted\">(nothing to render)</span>";
}

function renderFlags(flags) {
  if (!flags.length) {
    flagsEl.innerHTML = `<div class="muted" style="padding:10px 2px;">No red flags detected by the current ruleset.</div>`;
    return;
  }

  const explain = explainToggle.checked;
  flagsEl.innerHTML = flags
    .map((f, i) => {
      const sevClass = f.severity === "High" ? "sev-high" : f.severity === "Med" ? "sev-med" : "sev-low";
      const rulesHtml = f.rules
        .map((r) => `<div><strong>${escapeHtml(r.ruleId)}</strong>: ${escapeHtml(r.description)} <span class="muted">(w=${r.weight})</span></div>`)
        .join("");

      return `
      <button class="flag" type="button" data-flag-id="${escapeHtml(f.id)}" aria-label="Open flag ${i + 1}">
        <div class="flag-top">
          <div class="badgeRow">
            <span class="badge">${escapeHtml(f.category)}</span>
            <span class="badge ${sevClass}">${escapeHtml(f.severity)}</span>
            <span class="badge">conf ${f.confidence}</span>
          </div>
          <span class="muted">#${i + 1}</span>
        </div>
        <p class="quote">${escapeHtml(f.quote)}</p>
        <div class="rules" data-open="${explain ? "true" : "false"}">${rulesHtml}</div>
      </button>`;
    })
    .join("");

  for (const btn of flagsEl.querySelectorAll(".flag")) {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-flag-id");
      const f = state.flags.find((x) => x.id === id);
      if (!f) return;
      state.active = { start: f.start, end: f.end, id: f.id };
      renderTranscript(state.text, { start: f.start, end: f.end });
      const mark = renderedTranscriptEl.querySelector(`mark[data-match-id="${CSS.escape(f.id)}"]`);
      if (mark) mark.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }
}

const state = {
  text: "",
  flags: [],
  active: null,
};

function analyze() {
  const text = (transcriptInput.value || "").trim();
  state.text = text;
  state.active = null;

  if (!text) {
    state.flags = [];
    summaryEl.textContent = "Paste a transcript or load a preset first.";
    renderFlags([]);
    renderedTranscriptEl.innerHTML = "<span class=\"muted\">(paste text to render transcript)</span>";
    return;
  }

  const flags = findMatches(text);
  state.flags = flags;

  const catCounts = new Map();
  for (const f of flags) catCounts.set(f.category, (catCounts.get(f.category) || 0) + 1);
  const cats = [...catCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([c, n]) => `${c}(${n})`)
    .join(", ");

  summaryEl.textContent = flags.length
    ? `Found ${flags.length} flag(s). Top categories: ${cats || "—"}.`
    : "No red flags detected by the current ruleset.";

  renderFlags(flags);
  renderTranscript(text, null);
}

loadPresetBtn.addEventListener("click", () => {
  const key = presetSelect.value;
  if (!key || !PRESETS[key]) return;
  transcriptInput.value = PRESETS[key];
  summaryEl.textContent = `Loaded ${key} preset. Click Find red flags.`;
});

analyzeBtn.addEventListener("click", analyze);
explainToggle.addEventListener("change", () => renderFlags(state.flags));

// Initial empty render
renderedTranscriptEl.innerHTML = "<span class=\"muted\">(paste text to render transcript)</span>";
