function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function fmtSigned(n) {
  if (n > 0) return `+${n}`;
  return `${n}`;
}

function compute({ inventory, pricing, utilization, macro, aiDemand }) {
  // Inputs are in [-2..2]. Macro is "high → low" (so higher is better).
  const weights = {
    inventory: 1.1,
    pricing: 1.3,
    utilization: 1.0,
    macro: 1.4,
    aiDemand: 0.6,
  };

  const base =
    inventory * weights.inventory +
    pricing * weights.pricing +
    utilization * weights.utilization +
    macro * weights.macro +
    (aiDemand ? 1 : 0) * weights.aiDemand;

  // Penalty: if macro is very bad, don't allow an easy "Go".
  const macroPenalty = macro <= -2 ? -1.6 : macro <= -1 ? -0.6 : 0;

  // Penalty: inventory glut + pricing down = classic downcycle combo.
  const downcyclePenalty = inventory <= -1 && pricing <= -1 ? -1.0 : 0;

  const scoreRaw = base + macroPenalty + downcyclePenalty;
  const score = clamp(scoreRaw, -6, 6);

  let stance = "Hold";
  if (score >= 2.2) stance = "Go";
  if (score <= -2.2) stance = "Avoid";

  // Confidence based on distance from neutral and internal consistency.
  const magnitude = Math.abs(score) / 6; // 0..1
  const consistency = (() => {
    const bullish = [inventory, pricing, utilization, macro].filter((v) => v >= 1).length;
    const bearish = [inventory, pricing, utilization, macro].filter((v) => v <= -1).length;
    if (bullish >= 3 || bearish >= 3) return 1;
    if (bullish === 0 && bearish === 0) return 0.3;
    return 0.7;
  })();

  const confidence = clamp(Math.round((0.35 + 0.5 * magnitude + 0.15 * consistency) * 100), 35, 92);

  const drivers = [];
  drivers.push({
    key: "macro",
    impact: macro * weights.macro + macroPenalty,
    text:
      macro >= 1
        ? `Macro backdrop looks calmer (${fmtSigned(macro)}), supporting risk-on exposure.`
        : macro <= -1
        ? `Macro risk is elevated (${fmtSigned(macro)}), which caps multiple expansion.`
        : `Macro is mixed (${fmtSigned(macro)}), so industry signals matter more.`,
  });

  drivers.push({
    key: "pricing",
    impact: pricing * weights.pricing,
    text:
      pricing >= 1
        ? `Pricing is improving (${fmtSigned(pricing)}), a key sign the cycle is turning.`
        : pricing <= -1
        ? `Pricing is deteriorating (${fmtSigned(pricing)}), often the quickest red flag in semis.`
        : `Pricing is flat (${fmtSigned(pricing)}), so look for confirmation elsewhere.`,
  });

  drivers.push({
    key: "inventory",
    impact: inventory * weights.inventory + downcyclePenalty,
    text:
      inventory >= 1
        ? `Inventory is tightening (${fmtSigned(inventory)}), reducing discounting pressure.`
        : inventory <= -1
        ? `Inventory looks heavy (${fmtSigned(inventory)}), increasing correction risk.`
        : `Inventory looks balanced (${fmtSigned(inventory)}).`,
  });

  drivers.push({
    key: "utilization",
    impact: utilization * weights.utilization,
    text:
      utilization >= 1
        ? `Foundry utilization is strong (${fmtSigned(utilization)}), suggesting demand absorption.`
        : utilization <= -1
        ? `Utilization is soft (${fmtSigned(utilization)}), implying cautious orders.`
        : `Utilization is normal (${fmtSigned(utilization)}).`,
  });

  drivers.push({
    key: "aiDemand",
    impact: (aiDemand ? 1 : 0) * weights.aiDemand,
    text: aiDemand
      ? "AI demand is flagged strong, adding a structural tailwind for GPU/accelerator names."
      : "AI demand toggle is off (no extra tailwind baked in).",
  });

  const receipts = drivers
    .slice()
    .sort((a, b) => Math.abs(b.impact) - Math.abs(a.impact))
    .slice(0, 4)
    .map((d) => d.text);

  return { stance, confidence, score, receipts };
}

function stanceColor(stance) {
  if (stance === "Go") return "var(--good)";
  if (stance === "Avoid") return "var(--bad)";
  return "var(--warn)";
}

function summarize(state, result) {
  const signals = `Inventory ${fmtSigned(state.inventory)}, Pricing ${fmtSigned(state.pricing)}, Util ${fmtSigned(state.utilization)}, Macro ${fmtSigned(state.macro)}${state.aiDemand ? ", AI strong" : ""}`;
  const receipts = result.receipts.join(" ");
  return `Chip Cycle KPI Snapshot — ${result.stance} (${result.confidence}% confidence, score ${result.score.toFixed(1)}). Signals: ${signals}. Receipts: ${receipts}`;
}

function main() {
  const ids = ["inventory", "pricing", "utilization", "macro"];

  const inputs = Object.fromEntries(ids.map((id) => [id, document.getElementById(id)]));
  const outs = Object.fromEntries(ids.map((id) => [id, document.getElementById(`${id}Out`)]));
  const aiDemand = document.getElementById("aiDemand");

  const stanceText = document.getElementById("stanceText");
  const confidenceText = document.getElementById("confidenceText");
  const scoreText = document.getElementById("scoreText");
  const receiptsList = document.getElementById("receiptsList");
  const exportBtn = document.getElementById("exportBtn");
  const toast = document.getElementById("toast");

  function getState() {
    return {
      inventory: Number(inputs.inventory.value),
      pricing: Number(inputs.pricing.value),
      utilization: Number(inputs.utilization.value),
      macro: Number(inputs.macro.value),
      aiDemand: Boolean(aiDemand.checked),
    };
  }

  function setState(next) {
    inputs.inventory.value = String(next.inventory);
    inputs.pricing.value = String(next.pricing);
    inputs.utilization.value = String(next.utilization);
    inputs.macro.value = String(next.macro);
    aiDemand.checked = Boolean(next.aiDemand);
    render();
  }

  function render() {
    const state = getState();
    ids.forEach((id) => {
      outs[id].textContent = String(state[id]);
    });

    const result = compute(state);

    stanceText.textContent = result.stance;
    stanceText.style.color = stanceColor(result.stance);
    confidenceText.textContent = `${result.confidence}%`;
    scoreText.textContent = result.score.toFixed(1);

    receiptsList.innerHTML = "";
    result.receipts.forEach((text) => {
      const li = document.createElement("li");
      li.textContent = text;
      receiptsList.appendChild(li);
    });

    exportBtn.dataset.summary = summarize(state, result);
  }

  async function copySummary() {
    const text = exportBtn.dataset.summary || "";
    try {
      await navigator.clipboard.writeText(text);
      toast.hidden = false;
      toast.textContent = "Copied summary to clipboard.";
    } catch {
      toast.hidden = false;
      toast.textContent = "Could not access clipboard. Select and copy manually:";
      // Basic fallback: show the text in the toast so user can select it.
      toast.textContent = `${toast.textContent} ${text}`;
    }
    window.clearTimeout(copySummary._t);
    copySummary._t = window.setTimeout(() => {
      toast.hidden = true;
    }, 3200);
  }

  document.querySelectorAll("[data-preset]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const p = btn.getAttribute("data-preset");
      if (p === "bull")
        return setState({ inventory: 2, pricing: 2, utilization: 2, macro: 1, aiDemand: true });
      if (p === "base")
        return setState({ inventory: 0, pricing: 1, utilization: 0, macro: 0, aiDemand: true });
      return setState({ inventory: -2, pricing: -2, utilization: -1, macro: -2, aiDemand: false });
    });
  });

  Object.values(inputs).forEach((el) => el.addEventListener("input", render));
  aiDemand.addEventListener("change", render);
  exportBtn.addEventListener("click", copySummary);

  render();
}

main();
