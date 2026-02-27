const STORAGE_KEY = "thesis-pre-mortem-canvas-v1";

const CATEGORY_OPTIONS = ["Demand", "Competition", "Execution", "Valuation"];
const IMPACT_OPTIONS = ["Low", "Med", "High"];
const IMPACT_WEIGHT = { Low: 1, Med: 2, High: 3 };

const failureModeTemplates = {
  Demand: (label) => `${label} fails: demand does not materialize on expected timing.`,
  Competition: (label) => `${label} fails: competition out-executes on product, distribution, or pricing.`,
  Execution: (label) => `${label} fails: execution misses milestones or hidden bottlenecks appear.`,
  Valuation: (label) => `${label} fails: valuation rerates down even if the business remains quality.`,
};

const falsificationTemplates = {
  Demand: (label) => `Check two customer/channel datapoints this week to disprove "${label}".`,
  Competition: (label) => `Review the latest competitor roadmap/pricing and log one signal that weakens "${label}".`,
  Execution: (label) =>
    `Identify one non-obvious bottleneck (capacity, supply chain, regulation, talent) that could break "${label}".`,
  Valuation: (label) => `Run a downside valuation stress test for "${label}" and predefine add-vs-exit rules.`,
};

const genericPlanItems = [
  {
    id: "generic-bear-case",
    text: "Write the strongest informed bear case in five bullets, as if you had to defend it.",
  },
  {
    id: "generic-metric",
    text: "Define the one metric that should move first if you are right; if it does not move, write the implication.",
  },
  {
    id: "generic-evidence",
    text: "Name one specific evidence signal this week that would contradict the thesis narrative.",
  },
  {
    id: "generic-valuation-check",
    text: "If the stock drops 30% tomorrow, define now what evidence would make you add vs exit.",
  },
];

const elements = {
  tickerInput: document.getElementById("tickerInput"),
  thesisInput: document.getElementById("thesisInput"),
  addAssumptionBtn: document.getElementById("addAssumptionBtn"),
  assumptionsList: document.getElementById("assumptionsList"),
  assumptionCardTemplate: document.getElementById("assumptionCardTemplate"),
  fragilityScore: document.getElementById("fragilityScore"),
  fragilitySummary: document.getElementById("fragilitySummary"),
  failureModesList: document.getElementById("failureModesList"),
  falsificationPlanList: document.getElementById("falsificationPlanList"),
  planProgressText: document.getElementById("planProgressText"),
  planProgressBar: document.getElementById("planProgressBar"),
};

let state = loadState();
let currentPlanItems = [];

init();

function init() {
  if (!state.assumptions.length) {
    state.assumptions = [createDefaultAssumption()];
  }

  elements.tickerInput.value = state.ticker;
  elements.thesisInput.value = state.thesis;

  elements.tickerInput.addEventListener("input", (event) => {
    state.ticker = event.target.value;
    saveState();
  });

  elements.thesisInput.addEventListener("input", (event) => {
    state.thesis = event.target.value;
    saveState();
  });

  elements.addAssumptionBtn.addEventListener("click", () => {
    state.assumptions.push(createDefaultAssumption());
    saveState();
    renderAssumptions();
    renderDerivedOutputs();
  });

  elements.assumptionsList.addEventListener("click", handleAssumptionClick);
  elements.assumptionsList.addEventListener("input", handleAssumptionInput);
  elements.assumptionsList.addEventListener("change", handleAssumptionInput);
  elements.falsificationPlanList.addEventListener("change", handlePlanCheck);

  renderAssumptions();
  renderDerivedOutputs();
}

function handleAssumptionClick(event) {
  const removeBtn = event.target.closest(".remove-assumption-btn");
  if (!removeBtn) {
    return;
  }

  const card = removeBtn.closest(".assumption-card");
  const assumptionId = card?.dataset.assumptionId;
  if (!assumptionId) {
    return;
  }

  state.assumptions = state.assumptions.filter((item) => item.id !== assumptionId);
  saveState();
  renderAssumptions();
  renderDerivedOutputs();
}

function handleAssumptionInput(event) {
  const field = event.target;
  const card = field.closest(".assumption-card");
  const assumptionId = card?.dataset.assumptionId;
  if (!assumptionId) {
    return;
  }

  const assumption = state.assumptions.find((item) => item.id === assumptionId);
  if (!assumption) {
    return;
  }

  if (field.classList.contains("assumption-title-input")) {
    assumption.title = field.value;
    const heading = card.querySelector(".assumption-label");
    heading.textContent = getAssumptionLabel(assumption, getAssumptionIndex(assumption.id) + 1);
  }

  if (field.classList.contains("assumption-category-select")) {
    assumption.category = sanitizeCategory(field.value);
  }

  if (field.classList.contains("assumption-impact-select")) {
    assumption.impact = sanitizeImpact(field.value);
  }

  if (field.classList.contains("assumption-confidence-input")) {
    assumption.confidence = clampConfidence(field.value);
    const confidenceValue = card.querySelector(".confidence-value");
    confidenceValue.textContent = `${assumption.confidence}%`;
  }

  saveState();
  renderDerivedOutputs();
}

function handlePlanCheck(event) {
  const checkbox = event.target.closest('input[type="checkbox"][data-plan-id]');
  if (!checkbox) {
    return;
  }

  const planId = checkbox.dataset.planId;
  state.planChecks[planId] = checkbox.checked;
  saveState();
  renderPlanProgress(currentPlanItems);
}

function renderAssumptions() {
  elements.assumptionsList.innerHTML = "";

  if (!state.assumptions.length) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = "No assumptions yet. Add at least one to run the pre-mortem.";
    elements.assumptionsList.appendChild(empty);
    return;
  }

  state.assumptions.forEach((assumption, index) => {
    const fragment = elements.assumptionCardTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".assumption-card");
    card.dataset.assumptionId = assumption.id;

    const label = card.querySelector(".assumption-label");
    label.textContent = getAssumptionLabel(assumption, index + 1);

    const titleInput = card.querySelector(".assumption-title-input");
    titleInput.value = assumption.title;

    const categorySelect = card.querySelector(".assumption-category-select");
    categorySelect.value = assumption.category;

    const impactSelect = card.querySelector(".assumption-impact-select");
    impactSelect.value = assumption.impact;

    const confidenceInput = card.querySelector(".assumption-confidence-input");
    confidenceInput.value = String(assumption.confidence);

    const confidenceValue = card.querySelector(".confidence-value");
    confidenceValue.textContent = `${assumption.confidence}%`;

    elements.assumptionsList.appendChild(fragment);
  });
}

function renderDerivedOutputs() {
  const scoredAssumptions = state.assumptions.map(scoreAssumption).sort((a, b) => b.riskRaw - a.riskRaw);

  renderFragilityScore(scoredAssumptions);
  renderFailureModes(scoredAssumptions);

  currentPlanItems = buildFalsificationPlan(scoredAssumptions);
  renderPlanItems(currentPlanItems);
  renderPlanProgress(currentPlanItems);
}

function renderFragilityScore(scoredAssumptions) {
  if (!scoredAssumptions.length) {
    elements.fragilityScore.textContent = "0 / 100";
    elements.fragilitySummary.textContent = "Add assumptions to estimate thesis fragility.";
    return;
  }

  const numerator = scoredAssumptions.reduce((total, assumption) => total + assumption.riskRaw, 0);
  const denominator = scoredAssumptions.reduce(
    (total, assumption) => total + 100 * IMPACT_WEIGHT[assumption.impact],
    0
  );
  const score = denominator > 0 ? Math.round((numerator / denominator) * 100) : 0;

  elements.fragilityScore.textContent = `${score} / 100`;

  if (score <= 25) {
    elements.fragilitySummary.textContent = "Low fragility: the current assumptions are mostly high-confidence.";
  } else if (score <= 50) {
    elements.fragilitySummary.textContent = "Moderate fragility: pressure-test the top two assumptions today.";
  } else if (score <= 75) {
    elements.fragilitySummary.textContent = "High fragility: one key assumption failing could break the thesis.";
  } else {
    elements.fragilitySummary.textContent = "Severe fragility: this thesis is currently exposed to rapid disconfirmation.";
  }
}

function renderFailureModes(scoredAssumptions) {
  elements.failureModesList.innerHTML = "";

  if (!scoredAssumptions.length) {
    const placeholder = document.createElement("li");
    placeholder.className = "placeholder";
    placeholder.textContent = "Add assumptions to auto-generate failure modes.";
    elements.failureModesList.appendChild(placeholder);
    return;
  }

  scoredAssumptions.forEach((assumption) => {
    const item = document.createElement("li");
    item.className = "failure-item";

    const text = document.createElement("span");
    text.textContent = buildFailureModeText(assumption);

    const risk = document.createElement("span");
    risk.className = "risk-badge";
    risk.textContent = `Risk ${assumption.riskPct}`;

    item.appendChild(text);
    item.appendChild(risk);
    elements.failureModesList.appendChild(item);
  });
}

function renderPlanItems(items) {
  elements.falsificationPlanList.innerHTML = "";

  if (!items.length) {
    const empty = document.createElement("li");
    empty.className = "placeholder";
    empty.textContent = "Add assumptions to generate a same-day falsification plan.";
    elements.falsificationPlanList.appendChild(empty);
    return;
  }

  items.forEach((item) => {
    const li = document.createElement("li");
    li.className = "plan-item";

    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.dataset.planId = item.id;
    checkbox.checked = Boolean(state.planChecks[item.id]);

    const text = document.createElement("span");
    text.textContent = item.text;

    label.appendChild(checkbox);
    label.appendChild(text);
    li.appendChild(label);
    elements.falsificationPlanList.appendChild(li);
  });
}

function renderPlanProgress(items) {
  if (!items.length) {
    elements.planProgressText.textContent = "0/0 complete";
    elements.planProgressBar.value = 0;
    return;
  }

  const checkedCount = items.reduce((total, item) => total + Number(Boolean(state.planChecks[item.id])), 0);
  const progressPercent = Math.round((checkedCount / items.length) * 100);

  elements.planProgressText.textContent = `${checkedCount}/${items.length} complete (${progressPercent}%)`;
  elements.planProgressBar.value = progressPercent;
}

function buildFailureModeText(assumption) {
  const label = assumption.title.trim() || `${assumption.category} assumption`;
  return failureModeTemplates[assumption.category](label);
}

function buildFalsificationPlan(scoredAssumptions) {
  const planItems = [];
  const weakest = scoredAssumptions.filter((assumption) => assumption.riskRaw > 0).slice(0, 3);

  weakest.forEach((assumption) => {
    const label = assumption.title.trim() || `${assumption.category.toLowerCase()} assumption`;
    const template = falsificationTemplates[assumption.category];
    planItems.push({
      id: `assumption-${assumption.id}`,
      text: template(label),
    });
  });

  for (const item of genericPlanItems) {
    if (planItems.length >= 5) {
      break;
    }
    if (planItems.length >= 3 && weakest.length > 0) {
      break;
    }
    planItems.push(item);
  }

  while (planItems.length < 3) {
    const fallbackItem = genericPlanItems[planItems.length % genericPlanItems.length];
    planItems.push({
      id: `${fallbackItem.id}-${planItems.length}`,
      text: fallbackItem.text,
    });
  }

  return planItems.slice(0, 5);
}

function scoreAssumption(assumption) {
  const confidence = clampConfidence(assumption.confidence);
  const impact = sanitizeImpact(assumption.impact);
  const weight = IMPACT_WEIGHT[impact];
  const riskRaw = (100 - confidence) * weight;
  const riskPct = Math.round((riskRaw / (100 * IMPACT_WEIGHT.High)) * 100);

  return {
    ...assumption,
    confidence,
    impact,
    riskRaw,
    riskPct,
  };
}

function getAssumptionLabel(assumption, fallbackIndex) {
  const title = assumption.title.trim();
  if (title) {
    return title;
  }
  return `Assumption ${fallbackIndex}`;
}

function getAssumptionIndex(id) {
  return state.assumptions.findIndex((item) => item.id === id);
}

function createDefaultAssumption() {
  return {
    id: createId(),
    title: "",
    category: "Demand",
    confidence: 60,
    impact: "Med",
  };
}

function loadState() {
  const defaultState = {
    ticker: "",
    thesis: "",
    assumptions: [],
    planChecks: {},
  };

  try {
    const storedRaw = window.localStorage.getItem(STORAGE_KEY);
    if (!storedRaw) {
      return defaultState;
    }

    const stored = JSON.parse(storedRaw);
    const assumptions = Array.isArray(stored.assumptions) ? stored.assumptions : [];

    return {
      ticker: typeof stored.ticker === "string" ? stored.ticker : "",
      thesis: typeof stored.thesis === "string" ? stored.thesis : "",
      assumptions: assumptions.map(normalizeAssumption).filter(Boolean),
      planChecks: isRecord(stored.planChecks) ? stored.planChecks : {},
    };
  } catch (error) {
    return defaultState;
  }
}

function normalizeAssumption(raw) {
  if (!raw || typeof raw !== "object") {
    return null;
  }

  return {
    id: typeof raw.id === "string" && raw.id ? raw.id : createId(),
    title: typeof raw.title === "string" ? raw.title : "",
    category: sanitizeCategory(raw.category),
    confidence: clampConfidence(raw.confidence),
    impact: sanitizeImpact(raw.impact),
  };
}

function saveState() {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    // Ignore storage failures in private mode.
  }
}

function sanitizeCategory(value) {
  return CATEGORY_OPTIONS.includes(value) ? value : "Demand";
}

function sanitizeImpact(value) {
  return IMPACT_OPTIONS.includes(value) ? value : "Med";
}

function clampConfidence(value) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) {
    return 0;
  }
  return Math.max(0, Math.min(100, Math.round(parsed)));
}

function isRecord(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function createId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }
  return `assumption-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
