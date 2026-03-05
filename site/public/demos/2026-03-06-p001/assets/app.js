const form = document.getElementById("generatorForm");
const productInput = document.getElementById("productName");
const personaInput = document.getElementById("persona");
const metricInput = document.getElementById("valueMetric");
const cardsEl = document.getElementById("cards");
const copyBtn = document.getElementById("copyBtn");
const hintEl = document.getElementById("formHint");
const trackingSummaryEl = document.getElementById("trackingSummary");
const trackingListEl = document.getElementById("trackingList");
const cycleButtons = Array.from(document.querySelectorAll(".cycle"));

const tierBlueprint = [
  { name: "Starter", monthly: 29, position: "For first workflow wins" },
  { name: "Pro", monthly: 79, position: "For teams standardizing process" },
  { name: "Team", monthly: 149, position: "For cross-functional rollout" }
];

let state = {
  cycle: "monthly",
  tiers: [],
  selectedTierName: ""
};

function sanitizeSlug(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

function getPrice(monthlyPrice, cycle) {
  if (cycle === "annual") {
    const annualEquivalent = Math.round((monthlyPrice * 10) / 12);
    return `$${annualEquivalent}/mo`;
  }
  return `$${monthlyPrice}/mo`;
}

function getMetricLine(metric, tierName) {
  const suffix = tierName === "Starter" ? "up to 500" : tierName === "Pro" ? "up to 2,500" : "unlimited";
  return `${suffix} ${metric} per month`;
}

function buildTiers() {
  const productName = productInput.value.trim();
  const persona = personaInput.value.trim();
  const valueMetric = metricInput.value.trim();

  state.tiers = tierBlueprint.map((tier) => ({
    ...tier,
    productName,
    persona,
    valueMetric,
    metricLine: getMetricLine(valueMetric, tier.name)
  }));

  state.selectedTierName = state.tiers[0].name;
}

function renderTiers() {
  cardsEl.innerHTML = "";

  state.tiers.forEach((tier) => {
    const card = document.createElement("article");
    const isSelected = tier.name === state.selectedTierName;

    card.className = `card${isSelected ? " is-selected" : ""}`;
    card.tabIndex = 0;
    card.dataset.tier = tier.name;

    const annualNote =
      state.cycle === "annual"
        ? "<p class=\"positioning\">Billed yearly (2 months free)</p>"
        : "";

    card.innerHTML = `
      <h4>${tier.name}</h4>
      <p class="price">${getPrice(tier.monthly, state.cycle)}</p>
      <p class="metric">${tier.metricLine}</p>
      <p class="positioning">${tier.position}</p>
      ${annualNote}
      <span class="badge">${tier.productName}</span>
    `;

    card.addEventListener("click", () => {
      state.selectedTierName = tier.name;
      renderTiers();
      updateTrackingPlan();
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        state.selectedTierName = tier.name;
        renderTiers();
        updateTrackingPlan();
      }
    });

    cardsEl.appendChild(card);
  });

  copyBtn.disabled = state.tiers.length === 0;
}

function selectedTier() {
  return state.tiers.find((tier) => tier.name === state.selectedTierName);
}

function buildUtmLink() {
  const tier = selectedTier();
  if (!tier) return "";

  const variant = sanitizeSlug(`${tier.name}-${state.cycle}`);
  const product = sanitizeSlug(tier.productName);
  const persona = sanitizeSlug(tier.persona);

  return `/?variant=${variant}&utm_source=smoke-test&utm_medium=prototype&utm_campaign=${product}&utm_content=${persona}`;
}

function updateTrackingPlan() {
  const tier = selectedTier();

  if (!tier) {
    trackingSummaryEl.textContent = "Generate variants to see tracking details.";
    trackingListEl.innerHTML = "";
    return;
  }

  const link = buildUtmLink();
  const eventName = `pricing_cta_click_${sanitizeSlug(tier.name)}`;

  trackingSummaryEl.textContent = `Selected: ${tier.name} (${state.cycle}). Focus on click intent from ${tier.persona}.`;
  trackingListEl.innerHTML = `
    <li><strong>Event:</strong> ${eventName}</li>
    <li><strong>Primary property:</strong> value_metric=${tier.valueMetric}</li>
    <li><strong>Secondary property:</strong> billing_cycle=${state.cycle}</li>
    <li><strong>Link:</strong> ${link}</li>
  `;
}

async function copyWithFallback(text) {
  if (!text) return false;

  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    const helper = document.createElement("textarea");
    helper.value = text;
    helper.setAttribute("readonly", "");
    helper.style.position = "absolute";
    helper.style.left = "-9999px";
    document.body.appendChild(helper);
    helper.select();
    helper.setSelectionRange(0, helper.value.length);

    let copied = false;
    try {
      copied = document.execCommand("copy");
    } catch (err) {
      copied = false;
    }

    document.body.removeChild(helper);
    return copied;
  }
}

function updateHint(message, type) {
  hintEl.textContent = message;
  hintEl.classList.remove("toast", "error");
  if (type) hintEl.classList.add(type);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!productInput.value.trim() || !personaInput.value.trim() || !metricInput.value.trim()) {
    updateHint("Please complete all three inputs before generating.", "error");
    return;
  }

  buildTiers();
  renderTiers();
  updateTrackingPlan();
  updateHint("Three variants generated. Select a tier to shape tracking and copy link.", "toast");
});

cycleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextCycle = button.dataset.cycle;
    state.cycle = nextCycle;

    cycleButtons.forEach((btn) => {
      const active = btn.dataset.cycle === nextCycle;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    if (state.tiers.length > 0) {
      renderTiers();
      updateTrackingPlan();
    }
  });
});

copyBtn.addEventListener("click", async () => {
  const link = buildUtmLink();
  const copied = await copyWithFallback(link);

  if (copied) {
    updateHint(`Copied: ${link}`, "toast");
  } else {
    updateHint("Could not access clipboard in this browser context.", "error");
  }
});
