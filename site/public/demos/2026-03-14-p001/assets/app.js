/* 10-K Red Flag Radar — offline, vanilla JS */

const CATEGORIES = [
  "Liquidity",
  "Concentration",
  "Accounting",
  "Legal/Regulatory",
  "Guidance/Outlook",
];

/** @type {{id:string, phrase:string, category:string, weight:number}[]} */
let library = [
  { id: crypto.randomUUID(), phrase: "going concern", category: "Liquidity", weight: 9 },
  { id: crypto.randomUUID(), phrase: "material weakness", category: "Accounting", weight: 9 },
  { id: crypto.randomUUID(), phrase: "covenant", category: "Liquidity", weight: 7 },
  { id: crypto.randomUUID(), phrase: "customer concentration", category: "Concentration", weight: 7 },
  { id: crypto.randomUUID(), phrase: "substantial doubt", category: "Liquidity", weight: 8 },
  { id: crypto.randomUUID(), phrase: "SEC investigation", category: "Legal/Regulatory", weight: 8 },
  { id: crypto.randomUUID(), phrase: "class action", category: "Legal/Regulatory", weight: 6 },
  { id: crypto.randomUUID(), phrase: "restatement", category: "Accounting", weight: 8 },
  { id: crypto.randomUUID(), phrase: "impairment", category: "Accounting", weight: 6 },
  { id: crypto.randomUUID(), phrase: "reduced guidance", category: "Guidance/Outlook", weight: 6 },
  { id: crypto.randomUUID(), phrase: "uncertain macro", category: "Guidance/Outlook", weight: 3 },
];

const el = {
  inputText: document.getElementById("inputText"),
  btnScan: document.getElementById("btnScan"),
  btnSample: document.getElementById("btnSample"),
  toggleHighlight: document.getElementById("toggleHighlight"),
  evidence: document.getElementById("evidence"),
  results: document.getElementById("results"),
  phrasesTbody: document.getElementById("phrasesTbody"),
  phraseForm: document.getElementById("phraseForm"),
  phraseText: document.getElementById("phraseText"),
  phraseCategory: document.getElementById("phraseCategory"),
  phraseWeight: document.getElementById("phraseWeight"),
  btnCopy: document.getElementById("btnCopy"),
};

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function norm(s) {
  return String(s || "").trim();
}

function buildRegex(phrase) {
  // Not perfect NLP; just safe-ish word boundary matching.
  const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(escaped, "gi");
}

function renderLibrary() {
  el.phrasesTbody.innerHTML = "";

  const sorted = [...library].sort((a, b) => {
    if (a.category !== b.category) return a.category.localeCompare(b.category);
    return b.weight - a.weight;
  });

  for (const item of sorted) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${escapeHtml(item.phrase)}</td>
      <td>${escapeHtml(item.category)}</td>
      <td class="num">${item.weight}</td>
      <td class="num"><button class="btn secondary" data-remove="${item.id}" type="button">Remove</button></td>
    `;
    el.phrasesTbody.appendChild(tr);
  }

  el.phrasesTbody.querySelectorAll("[data-remove]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-remove");
      library = library.filter((x) => x.id !== id);
      renderLibrary();
    });
  });
}

function scanText(rawText) {
  const text = String(rawText || "");

  /** @type {Record<string, {score:number, hits:{phrase:string, weight:number, count:number}[]}>} */
  const perCat = {};
  for (const c of CATEGORIES) perCat[c] = { score: 0, hits: [] };

  // Count matches per phrase.
  const matches = [];
  for (const item of library) {
    const phrase = norm(item.phrase);
    if (!phrase) continue;

    const re = buildRegex(phrase);
    const found = text.match(re);
    const count = found ? found.length : 0;
    if (count <= 0) continue;

    matches.push({ ...item, count });

    perCat[item.category].hits.push({ phrase, weight: item.weight, count });
    perCat[item.category].score += Math.min(30, count * item.weight);
  }

  // Cap category scores to 100.
  for (const c of CATEGORIES) {
    perCat[c].score = Math.min(100, perCat[c].score);
    perCat[c].hits.sort((a, b) => b.weight * b.count - a.weight * a.count);
  }

  return { matches, perCat };
}

function renderResults(perCat) {
  el.results.innerHTML = "";

  const checklistLines = [];

  for (const cat of CATEGORIES) {
    const { score, hits } = perCat[cat];
    const card = document.createElement("div");
    card.className = "card";

    const severity = score >= 70 ? "bad" : score >= 35 ? "warn" : "good";
    const badgeColor = severity === "bad" ? "var(--bad)" : severity === "warn" ? "var(--warn)" : "var(--good)";

    const top = hits.slice(0, 4);
    checklistLines.push(`## ${cat} (score ${score})`);
    if (hits.length === 0) {
      checklistLines.push("- No signals matched. (Still verify basics.)");
    } else {
      for (const h of top) {
        checklistLines.push(`- Verify: evidence for “${h.phrase}” (x${h.count})`);
      }
      if (hits.length > top.length) checklistLines.push(`- (+${hits.length - top.length} more matched signals)`);
    }
    checklistLines.push("");

    card.innerHTML = `
      <h4>
        <span>${escapeHtml(cat)}</span>
        <span class="pill"><span class="score" style="color:${badgeColor}">${score}</span><span>/100</span></span>
      </h4>
      <ul>
        ${hits.length === 0 ? "<li>No matched phrases.</li>" : hits
          .slice(0, 8)
          .map((h) => `<li><strong>${escapeHtml(h.phrase)}</strong> — ${h.count} hit(s), weight ${h.weight}</li>`)
          .join("")}
      </ul>
    `;

    el.results.appendChild(card);
  }

  el.results.dataset.checklist = checklistLines.join("\n").trim();
}

function renderEvidence(rawText, matches, highlightOn) {
  if (!rawText.trim()) {
    el.evidence.innerHTML = '<div class="empty">Paste text and run a scan.</div>';
    return;
  }

  if (!highlightOn || matches.length === 0) {
    el.evidence.innerHTML = `<pre style="margin:0; white-space:pre-wrap; line-height:1.45;">${escapeHtml(rawText)}</pre>`;
    return;
  }

  // Highlight by applying regex replacements on escaped HTML (do not break tags)
  // Strategy: create a plain string with sentinel markers, then escape, then replace markers.
  // Simpler: escape first, then run regex on raw but rebuild via splitting.
  // We'll do a best-effort highlighter using raw indices.

  const lower = rawText;
  /** @type {{start:number,end:number, phrase:string}[]} */
  const ranges = [];
  for (const m of matches) {
    const re = buildRegex(m.phrase);
    let exec;
    while ((exec = re.exec(lower)) !== null) {
      ranges.push({ start: exec.index, end: exec.index + exec[0].length, phrase: m.phrase });
      if (exec.index === re.lastIndex) re.lastIndex++; // safety
    }
  }
  ranges.sort((a, b) => a.start - b.start || b.end - a.end);

  // Merge overlaps.
  const merged = [];
  for (const r of ranges) {
    const last = merged[merged.length - 1];
    if (!last || r.start >= last.end) {
      merged.push({ ...r });
    } else {
      last.end = Math.max(last.end, r.end);
    }
  }

  let out = "";
  let cursor = 0;
  for (const r of merged) {
    out += escapeHtml(rawText.slice(cursor, r.start));
    out += `<mark>${escapeHtml(rawText.slice(r.start, r.end))}</mark>`;
    cursor = r.end;
  }
  out += escapeHtml(rawText.slice(cursor));

  el.evidence.innerHTML = `<div style="white-space:pre-wrap; line-height:1.45;">${out}</div>`;
}

function loadSample() {
  el.inputText.value = `Risk Factors\n\nWe have incurred significant operating losses and may not be able to achieve or sustain profitability. There is substantial doubt about our ability to continue as a going concern.\n\nWe are subject to debt covenants and may be required to repay outstanding amounts if we fail to comply.\n\nOur revenue is dependent on a limited number of customers, and customer concentration may adversely affect results.\n\nWe identified a material weakness in internal control over financial reporting and may not remediate it in a timely manner.\n\nWe may be subject to class action litigation and regulatory investigations that could be costly.\n\nOutlook\n\nGiven uncertain macroeconomic conditions, we have reduced guidance for the remainder of the year.`;
}

async function copyChecklist() {
  const text = el.results.dataset.checklist || "";
  if (!text) {
    alert("Run a scan first.");
    return;
  }
  try {
    await navigator.clipboard.writeText(text);
    el.btnCopy.textContent = "Copied";
    setTimeout(() => (el.btnCopy.textContent = "Copy checklist"), 900);
  } catch {
    // Fallback: prompt
    window.prompt("Copy checklist:", text);
  }
}

function onScan() {
  const raw = String(el.inputText.value || "");
  const { matches, perCat } = scanText(raw);
  renderResults(perCat);
  renderEvidence(raw, matches, !!el.toggleHighlight.checked);
}

el.btnScan.addEventListener("click", onScan);
el.btnSample.addEventListener("click", () => {
  loadSample();
  onScan();
});

el.toggleHighlight.addEventListener("change", onScan);

el.phraseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const phrase = norm(el.phraseText.value);
  const category = el.phraseCategory.value;
  const weight = Number(el.phraseWeight.value || 4);

  if (!phrase) return;
  if (!CATEGORIES.includes(category)) return;

  // Dedupe by phrase+category
  const dup = library.some((x) => x.phrase.toLowerCase() === phrase.toLowerCase() && x.category === category);
  if (dup) {
    alert("That phrase already exists in this category.");
    return;
  }

  library.push({ id: crypto.randomUUID(), phrase, category, weight: Math.max(1, Math.min(10, weight)) });
  el.phraseText.value = "";
  renderLibrary();
  onScan();
});

el.btnCopy.addEventListener("click", copyChecklist);

renderLibrary();
