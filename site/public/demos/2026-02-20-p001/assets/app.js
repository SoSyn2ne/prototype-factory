const weights = {
  mrr: 0.3,
  conversion: 0.25,
  refund: 0.2,
  cac: 0.15,
  activation: 0.1
};

const ranges = Array.from(document.querySelectorAll("input[data-metric]"));
const scoreValue = document.getElementById("score-value");
const scoreBand = document.getElementById("score-band");
const meterFill = document.getElementById("meter-fill");
const actionsList = document.getElementById("actions-list");
const dipButton = document.getElementById("simulate-dip");

function normalize(metric, value) {
  if (metric === "refund" || metric === "cac") {
    return -value;
  }
  return value;
}

function formatSigned(value) {
  return `${value > 0 ? "+" : ""}${value}%`;
}

function getActions(metrics, score) {
  const ordered = Object.entries(metrics)
    .sort((a, b) => a[1] - b[1])
    .slice(0, 2)
    .map(([metric]) => metric);

  const playbook = {
    mrr: "Check cancellation logs and failed renewals from the last 48h.",
    conversion: "Replay the onboarding funnel for mobile traffic and compare step drop-offs.",
    refund: "Read the top 10 refund reasons and isolate one fixable trigger.",
    cac: "Pause low-quality ad sets and verify tracking health before reallocation.",
    activation: "Compare activated users by source and run one quick onboarding copy tweak."
  };

  const lines = ordered.map((metric) => playbook[metric]);

  if (score < 55) {
    lines.push("Escalate to red-day protocol: freeze experiments and focus only on leakage fixes.");
  } else if (score < 75) {
    lines.push("Set one same-day follow-up check to confirm if the dip is transient or real.");
  } else {
    lines.push("No major tripwire: keep monitoring and ship planned experiment cadence.");
  }

  return lines;
}

function recalc() {
  const raw = {};
  let weighted = 0;

  ranges.forEach((range) => {
    const metric = range.dataset.metric;
    const value = Number(range.value);
    raw[metric] = value;
    document.getElementById(`${metric}-val`).textContent = formatSigned(value);
    weighted += normalize(metric, value) * weights[metric];
  });

  const score = Math.max(0, Math.min(100, Math.round(70 + weighted * 1.6)));
  scoreValue.textContent = String(score);
  meterFill.style.width = `${score}%`;

  if (score >= 75) {
    scoreBand.textContent = "Green band: stable";
    scoreBand.className = "band green";
  } else if (score >= 55) {
    scoreBand.textContent = "Yellow band: investigate";
    scoreBand.className = "band yellow";
  } else {
    scoreBand.textContent = "Red band: immediate triage";
    scoreBand.className = "band red";
  }

  actionsList.innerHTML = getActions(raw, score).map((item) => `<li>${item}</li>`).join("");
}

ranges.forEach((range) => range.addEventListener("input", recalc));

if (dipButton) {
  dipButton.addEventListener("click", () => {
    const dipValues = {
      mrr: -14,
      conversion: -9,
      refund: 12,
      cac: 18,
      activation: -11
    };

    ranges.forEach((range) => {
      range.value = String(dipValues[range.dataset.metric]);
    });

    recalc();
  });
}

recalc();
