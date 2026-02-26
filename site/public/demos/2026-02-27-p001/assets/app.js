const PROTOTYPE_ID = "2026-02-27-p001-thesis-red-team-interviewer";
const QUESTION_COUNT = 10;
const RISK_TAGS = ["moat", "market", "execution", "valuation", "regulation"];

const state = {
  thesis: "",
  generatedAt: null,
  questions: [],
};

const thesisInput = document.getElementById("thesisInput");
const generateBtn = document.getElementById("generateBtn");
const exportBtn = document.getElementById("exportBtn");
const resetBtn = document.getElementById("resetBtn");
const questionsContainer = document.getElementById("questionsContainer");
const answeredCount = document.getElementById("answeredCount");
const unansweredCount = document.getElementById("unansweredCount");
const unansweredList = document.getElementById("unansweredList");

const questionTemplates = [
  {
    risk: "moat",
    make: (ctx, topic) => `If a better-capitalized competitor copied ${topic}, what specific switching cost still protects this thesis?`,
  },
  {
    risk: "market",
    make: (ctx, topic) => `What hard evidence says demand for ${topic} is durable rather than a temporary cycle?`,
  },
  {
    risk: "execution",
    make: (ctx, topic) => `Which operating bottleneck could prevent management from delivering on ${topic} in the next 24 months?`,
  },
  {
    risk: "valuation",
    make: (ctx, topic) => `Which embedded assumption in your valuation of ${topic} is most fragile, and what would break it first?`,
  },
  {
    risk: "regulation",
    make: (ctx, topic) => `What regulatory change would most damage ${topic}, and how early would your thesis detect that risk?`,
  },
  {
    risk: "market",
    make: (ctx, topic) => `If end-market growth slows to half your base case, where does ${topic} fail first in the model?`,
  },
  {
    risk: "execution",
    make: (ctx, topic) => `What proof do you have that leadership can execute ${topic} better than prior attempts in this sector?`,
  },
  {
    risk: "moat",
    make: (ctx, topic) => `Which customer segment could abandon ${topic} with minimal pain, and why have you ruled that out?`,
  },
  {
    risk: "valuation",
    make: (ctx, topic) => `What does the bear-case multiple imply about ${topic}, and why is that view wrong?`,
  },
  {
    risk: "regulation",
    make: (ctx, topic) => `Which pending policy or legal challenge could compress margins tied to ${topic}?`,
  },
  {
    risk: "execution",
    make: (ctx, topic) => `What single KPI would signal ${topic} is not scaling as your thesis assumes?`,
  },
  {
    risk: "market",
    make: (ctx, topic) => `What disconfirming data would force you to cut your confidence in ${topic} by 50%?`,
  },
  {
    risk: "moat",
    make: (ctx, topic) => `If distribution advantages erode, what remains defensible about ${topic}?`,
  },
  {
    risk: "valuation",
    make: (ctx, topic) => `How sensitive is your upside to terminal assumptions around ${topic}, and is that justified by history?`,
  },
  {
    risk: "regulation",
    make: (ctx, topic) => `Could compliance costs structurally rise for ${topic} faster than pricing power; what evidence says no?`,
  },
];

function hashText(input) {
  let hash = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    hash ^= input.charCodeAt(i);
    hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
  }
  return Math.abs(hash >>> 0);
}

function getTopics(text) {
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);

  const stopWords = new Set([
    "about",
    "after",
    "again",
    "against",
    "because",
    "being",
    "between",
    "could",
    "every",
    "from",
    "have",
    "into",
    "more",
    "most",
    "other",
    "should",
    "their",
    "there",
    "these",
    "they",
    "this",
    "those",
    "until",
    "while",
    "will",
    "with",
    "your",
  ]);

  const unique = [];
  for (const word of words) {
    if (word.length < 4 || stopWords.has(word) || unique.includes(word)) {
      continue;
    }
    unique.push(word);
    if (unique.length >= 18) {
      break;
    }
  }

  if (unique.length === 0) {
    return ["your core claim"];
  }

  return unique;
}

function clip(text, max = 130) {
  const singleLine = text.replace(/\s+/g, " ").trim();
  if (singleLine.length <= max) {
    return singleLine;
  }
  return `${singleLine.slice(0, max - 1).trim()}…`;
}

function generateQuestions(thesisText) {
  const normalized = thesisText.trim();
  const seed = hashText(normalized);
  const topics = getTopics(normalized);
  const firstSentence = clip(normalized.split(/[.!?\n]/)[0] || normalized);

  const questions = [];
  const usedTemplates = new Set();

  for (let i = 0; i < QUESTION_COUNT; i += 1) {
    const templateIndex = (seed + i * 7) % questionTemplates.length;
    const topic = i === 0 ? firstSentence : topics[(seed + i * 3) % topics.length];

    const resolvedTemplateIndex = usedTemplates.has(templateIndex)
      ? [...Array(questionTemplates.length).keys()].find((idx) => !usedTemplates.has(idx))
      : templateIndex;

    usedTemplates.add(resolvedTemplateIndex);
    const template = questionTemplates[resolvedTemplateIndex];

    questions.push({
      id: i + 1,
      question: template.make({ thesis: normalized }, topic),
      riskTag: template.risk,
      evidenceText: "",
      notes: "",
      answered: false,
    });
  }

  return questions;
}

function questionCardMarkup(item) {
  return `
    <article class="question ${item.answered ? "done" : ""}" data-id="${item.id}">
      <h3>Q${item.id}. ${item.question}</h3>
      <div class="question-grid">
        <div class="inline">
          <label for="risk-${item.id}">Risk tag</label>
          <select id="risk-${item.id}" data-field="riskTag" data-id="${item.id}">
            ${RISK_TAGS.map((tag) => `<option value="${tag}" ${tag === item.riskTag ? "selected" : ""}>${tag}</option>`).join("")}
          </select>
        </div>
        <div class="check">
          <input
            type="checkbox"
            id="answered-${item.id}"
            data-field="answered"
            data-id="${item.id}"
            ${item.answered ? "checked" : ""}
          />
          <label for="answered-${item.id}">Answered</label>
        </div>
        <div class="stack">
          <label for="evidence-${item.id}">Evidence links (one per line)</label>
          <textarea id="evidence-${item.id}" rows="3" data-field="evidenceText" data-id="${item.id}" placeholder="https://..."></textarea>
        </div>
        <div class="stack">
          <label for="notes-${item.id}">Notes</label>
          <textarea id="notes-${item.id}" rows="3" data-field="notes" data-id="${item.id}" placeholder="How this answer changes the thesis confidence"></textarea>
        </div>
      </div>
    </article>
  `;
}

function renderQuestions() {
  if (state.questions.length === 0) {
    questionsContainer.innerHTML = '<p class="empty">No questions yet.</p>';
    return;
  }

  questionsContainer.innerHTML = state.questions.map(questionCardMarkup).join("");

  for (const item of state.questions) {
    const evidence = questionsContainer.querySelector(`#evidence-${item.id}`);
    const notes = questionsContainer.querySelector(`#notes-${item.id}`);
    if (evidence) {
      evidence.value = item.evidenceText;
    }
    if (notes) {
      notes.value = item.notes;
    }
  }
}

function renderProgress() {
  const answered = state.questions.filter((q) => q.answered).length;
  const total = state.questions.length;
  const unresolved = state.questions.filter((q) => !q.answered);

  answeredCount.textContent = String(answered);
  unansweredCount.textContent = String(Math.max(total - answered, 0));

  if (unresolved.length === 0) {
    unansweredList.innerHTML = total === 0 ? '<li class="empty">Generate questions to begin.</li>' : '<li class="empty">All questions marked answered.</li>';
    return;
  }

  unansweredList.innerHTML = unresolved
    .map((q) => `<li>Q${q.id}: ${clip(q.question, 86)}</li>`)
    .join("");
}

function refresh() {
  renderQuestions();
  renderProgress();
}

function parseEvidenceLinks(rawText) {
  return rawText
    .split(/\n|,/) 
    .map((entry) => entry.trim())
    .filter(Boolean);
}

function exportSession() {
  if (state.questions.length === 0) {
    window.alert("No session to export yet. Generate questions first.");
    return;
  }

  const answered = state.questions.filter((q) => q.answered).length;
  const payload = {
    prototypeId: PROTOTYPE_ID,
    exportedAt: new Date().toISOString(),
    generatedAt: state.generatedAt,
    thesis: state.thesis,
    summary: {
      total: state.questions.length,
      answered,
      unanswered: state.questions.length - answered,
    },
    questions: state.questions.map((q) => ({
      id: q.id,
      question: q.question,
      riskTag: q.riskTag,
      answered: q.answered,
      evidenceLinks: parseEvidenceLinks(q.evidenceText),
      notes: q.notes,
    })),
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `thesis-red-team-session-${stamp}.json`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function resetSession() {
  const ok = window.confirm("Reset thesis and all question notes?");
  if (!ok) {
    return;
  }

  state.thesis = "";
  state.generatedAt = null;
  state.questions = [];
  thesisInput.value = "";
  refresh();
}

generateBtn?.addEventListener("click", () => {
  const thesis = thesisInput.value.trim();
  if (!thesis) {
    window.alert("Paste thesis text before generating questions.");
    thesisInput.focus();
    return;
  }

  state.thesis = thesis;
  state.generatedAt = new Date().toISOString();
  state.questions = generateQuestions(thesis);
  refresh();
});

questionsContainer?.addEventListener("input", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }

  const field = target.getAttribute("data-field");
  const idValue = target.getAttribute("data-id");
  if (!field || !idValue) {
    return;
  }

  const id = Number(idValue);
  const item = state.questions.find((q) => q.id === id);
  if (!item) {
    return;
  }

  if (field === "riskTag" && target instanceof HTMLSelectElement) {
    item.riskTag = target.value;
  }

  if (field === "evidenceText" && target instanceof HTMLTextAreaElement) {
    item.evidenceText = target.value;
  }

  if (field === "notes" && target instanceof HTMLTextAreaElement) {
    item.notes = target.value;
  }

  if (field === "answered" && target instanceof HTMLInputElement) {
    item.answered = target.checked;
    target.closest(".question")?.classList.toggle("done", item.answered);
    renderProgress();
    return;
  }

  renderProgress();
});

exportBtn?.addEventListener("click", exportSession);
resetBtn?.addEventListener("click", resetSession);

refresh();
