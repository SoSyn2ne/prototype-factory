const checklistQuestions = [
  "In a 10-user trial, do fewer than 7 users produce a numeric kill criterion and timeframe after one pass?",
  "Do users still write non-falsifiable goals (for example, 'get traction') even after guided prompts?",
  "Compared with free-form planning on the same idea, is final decision clarity (Go/Kill/Inconclusive) unchanged or worse?",
  "Does median completion time exceed the 3-minute target for first-time users?",
  "Do users choose confirming tests over disconfirming tests despite the falsification-first sequence?",
  "Are generated plans frequently non-actionable because proposed tests exceed the stated $0-$100 validation budget?",
  "After one week, do fewer than 30% of users run any experiment from the plan they created?"
];

const checklistElement = document.getElementById("checklist");
const progressElement = document.getElementById("progress");
const evaluateButton = document.getElementById("evaluate");
const decisionBadge = document.getElementById("decision-badge");
const decisionSummary = document.getElementById("decision-summary");
const criterionPreview = document.getElementById("criterion-preview");
const criterionErrors = document.getElementById("criterion-errors");
const metricInput = document.getElementById("metric");
const operatorInput = document.getElementById("operator");
const thresholdInput = document.getElementById("threshold");
const timeframeValueInput = document.getElementById("timeframe-value");
const timeframeUnitInput = document.getElementById("timeframe-unit");
const budgetInput = document.getElementById("budget");
const ideaNameInput = document.getElementById("idea-name");
const hypothesisInput = document.getElementById("hypothesis");

function buildChecklist() {
  if (!checklistElement) {
    return;
  }

  checklistElement.innerHTML = "";
  checklistQuestions.forEach((questionText, index) => {
    const questionIndex = index + 1;
    const li = document.createElement("li");

    const fieldset = document.createElement("fieldset");
    fieldset.className = "question";

    const legend = document.createElement("legend");
    legend.textContent = questionText;
    fieldset.appendChild(legend);

    const options = document.createElement("div");
    options.className = "options";

    [
      { value: "yes", label: "Yes, observed (red flag)" },
      { value: "no", label: "No, not observed" },
      { value: "unsure", label: "Unsure" }
    ].forEach((option) => {
      const wrapper = document.createElement("label");
      wrapper.className = "option";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `q${questionIndex}`;
      input.value = option.value;
      input.required = true;
      input.addEventListener("change", updateProgress);

      const text = document.createElement("span");
      text.textContent = option.label;

      wrapper.appendChild(input);
      wrapper.appendChild(text);
      options.appendChild(wrapper);
    });

    fieldset.appendChild(options);
    li.appendChild(fieldset);
    checklistElement.appendChild(li);
  });
}

function getAnswers() {
  return checklistQuestions.map((_, index) => {
    const name = `q${index + 1}`;
    const selected = document.querySelector(`input[name='${name}']:checked`);
    return selected ? selected.value : null;
  });
}

function updateProgress() {
  const answers = getAnswers();
  const answeredCount = answers.filter(Boolean).length;

  if (progressElement) {
    progressElement.textContent = `${answeredCount} / ${checklistQuestions.length} answered`;
  }
}

function validateKillCriterion() {
  const errors = [];
  const metric = metricInput ? metricInput.value.trim() : "";
  const operator = operatorInput ? operatorInput.value : "";
  const thresholdValue = Number.parseFloat(thresholdInput ? thresholdInput.value : "");
  const timeframeValue = Number.parseInt(timeframeValueInput ? timeframeValueInput.value : "", 10);
  const timeframeUnit = timeframeUnitInput ? timeframeUnitInput.value : "";
  const budgetValue = Number.parseFloat(budgetInput ? budgetInput.value : "");

  if (!metric) {
    errors.push("Metric is required.");
  }

  if (!Number.isFinite(thresholdValue)) {
    errors.push("Numeric threshold is required.");
  }

  if (!Number.isInteger(timeframeValue) || timeframeValue < 1) {
    errors.push("Timeframe must be at least 1 unit.");
  }

  if (!Number.isFinite(budgetValue)) {
    errors.push("Validation budget is required.");
  } else if (budgetValue < 0 || budgetValue > 100) {
    errors.push("Budget must be between $0 and $100.");
  }

  if (criterionPreview) {
    if (errors.length === 0) {
      criterionPreview.textContent = `Kill if ${metric} ${operator} ${thresholdValue} within ${timeframeValue} ${timeframeUnit}. Budget: $${budgetValue.toFixed(2)}.`;
    } else {
      criterionPreview.textContent = "Kill criterion preview will appear here.";
    }
  }

  if (criterionErrors) {
    criterionErrors.textContent = errors.join(" ");
  }

  return { errors, budgetValue };
}

function classifyDecision(answers, criterionState) {
  const redFlags = answers.filter((answer) => answer === "yes").length;
  const unknowns = answers.filter((answer) => answer === "unsure").length;

  if (criterionState.errors.length > 0) {
    return {
      status: "inconclusive",
      label: "Inconclusive",
      summary: "Kill criterion is incomplete. Add numeric metric, timeframe, and valid budget before deciding."
    };
  }

  if (redFlags >= 2) {
    return {
      status: "kill",
      label: "Kill",
      summary: `${redFlags} falsification red flags were observed. The idea should be stopped or reframed before build.`
    };
  }

  if (redFlags === 0 && unknowns <= 1) {
    return {
      status: "go",
      label: "Go",
      summary: "No red flags were observed and uncertainty is low. Proceed to the next experiment iteration."
    };
  }

  return {
    status: "inconclusive",
    label: "Inconclusive",
    summary: `Signals are mixed (${redFlags} red flags, ${unknowns} unsure). Run one more disconfirming test before committing.`
  };
}

function updateDecisionUI(decision, unansweredCount) {
  if (!decisionBadge || !decisionSummary) {
    return;
  }

  if (unansweredCount > 0) {
    decisionBadge.className = "badge pending";
    decisionBadge.textContent = "Pending decision";
    decisionSummary.textContent = `Complete all 7 checklist questions first. ${unansweredCount} remaining.`;
    return;
  }

  decisionBadge.className = `badge ${decision.status}`;
  decisionBadge.textContent = decision.label;

  const idea = ideaNameInput && ideaNameInput.value.trim() ? `Idea: ${ideaNameInput.value.trim()}. ` : "";
  const hypothesis =
    hypothesisInput && hypothesisInput.value.trim()
      ? `Hypothesis: ${hypothesisInput.value.trim()} `
      : "";

  decisionSummary.textContent = `${idea}${hypothesis}${decision.summary}`;
}

function evaluate() {
  const answers = getAnswers();
  const unansweredCount = answers.filter((answer) => answer === null).length;
  const criterionState = validateKillCriterion();

  if (unansweredCount > 0) {
    updateDecisionUI({ status: "pending", label: "Pending", summary: "" }, unansweredCount);
    return;
  }

  const decision = classifyDecision(answers, criterionState);
  updateDecisionUI(decision, 0);
}

buildChecklist();
updateProgress();
validateKillCriterion();

[metricInput, operatorInput, thresholdInput, timeframeValueInput, timeframeUnitInput, budgetInput].forEach((field) => {
  if (field) {
    field.addEventListener("input", validateKillCriterion);
    field.addEventListener("change", validateKillCriterion);
  }
});

if (evaluateButton) {
  evaluateButton.addEventListener("click", evaluate);
}
