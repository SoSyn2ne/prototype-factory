const form = document.getElementById("claim-form");
const claimInput = document.getElementById("claim");
const contextInput = document.getElementById("context");
const aggressiveInput = document.getElementById("aggressive");
const hypothesesEl = document.getElementById("hypotheses");
const questionsEl = document.getElementById("questions");
const tagsEl = document.getElementById("tags");

const seed = {
  hypotheses: [
    "The expected gain is mostly seasonal, not caused by this decision.",
    "Execution overhead cancels the projected efficiency within the first quarter.",
    "User behavior adapts in a way that reduces the assumed benefit."
  ],
  questions: [
    "What concrete metric should improve within 14 days if the claim is true?",
    "What result would prove this is correlation, not causation?",
    "Which customer segment is most likely to see zero benefit?"
  ],
  tags: [
    { label: "Data coverage gap", level: "high" },
    { label: "Execution dependency", level: "medium" },
    { label: "Timing uncertainty", level: "low" }
  ]
};

function asList(items, container) {
  container.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function renderTags(tags) {
  tagsEl.innerHTML = tags
    .map((tag) => `<span class="tag ${tag.level}">${tag.label}</span>`)
    .join("");
}

function buildOutput(claim, context, aggressive) {
  const claimShort = claim.length > 90 ? `${claim.slice(0, 90)}...` : claim;
  const tone = aggressive
    ? "Assume worst-case downside if evidence is thin"
    : "Assume neutral baseline until hard evidence appears";

  return {
    hypotheses: [
      `The claim \"${claimShort}\" depends on a hidden assumption that may not hold for the current cohort.`,
      `A cheaper alternative could produce similar outcome with lower operational risk.${
        context ? ` Context stress point: ${context}.` : ""
      }`,
      `${tone}.`
    ],
    questions: [
      "Which single metric would most quickly falsify this claim within one week?",
      "What would a failed rollout look like by week two, in numbers not opinions?",
      "If budget or attention drops by 30%, does the core thesis still survive?"
    ],
    tags: aggressive
      ? [
          { label: "Execution fragility", level: "high" },
          { label: "Base-rate mismatch", level: "high" },
          { label: "Evidence debt", level: "medium" }
        ]
      : seed.tags
  };
}

function renderInitial() {
  asList(seed.hypotheses, hypothesesEl);
  asList(seed.questions, questionsEl);
  renderTags(seed.tags);
}

if (form && claimInput && contextInput && aggressiveInput) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const claim = claimInput.value.trim();
    const context = contextInput.value.trim();

    if (!claim) {
      claimInput.focus();
      return;
    }

    const result = buildOutput(claim, context, aggressiveInput.checked);
    asList(result.hypotheses, hypothesesEl);
    asList(result.questions, questionsEl);
    renderTags(result.tags);
  });

  renderInitial();
}
