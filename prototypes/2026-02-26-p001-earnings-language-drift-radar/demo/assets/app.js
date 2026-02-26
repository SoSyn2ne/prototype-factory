const categories = {
  demand: ["demand", "orders", "bookings", "pipeline", "growth", "softening"],
  risk: ["risk", "uncertain", "headwind", "pressure", "cautious", "constraint"],
  supply: ["supply", "capacity", "inventory", "wafer", "allocation", "lead time"]
};

const textarea = document.getElementById("transcript");
const analyzeButton = document.getElementById("analyze");
const output = document.getElementById("output");
const countDemand = document.getElementById("count-demand");
const countRisk = document.getElementById("count-risk");
const countSupply = document.getElementById("count-supply");

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function analyze(text) {
  const counts = { demand: 0, risk: 0, supply: 0 };
  const words = text.split(/(\b)/);

  const highlighted = words
    .map((word) => {
      const lower = word.toLowerCase();

      for (const [category, terms] of Object.entries(categories)) {
        if (terms.includes(lower)) {
          counts[category] += 1;
          return `<mark class="${category}">${escapeHtml(word)}</mark>`;
        }
      }

      return escapeHtml(word);
    })
    .join("");

  return { highlighted, counts };
}

if (textarea && analyzeButton && output && countDemand && countRisk && countSupply) {
  analyzeButton.addEventListener("click", () => {
    const text = textarea.value.trim();

    if (!text) {
      output.textContent = "Paste earnings-call text to analyze drift categories.";
      countDemand.textContent = "0";
      countRisk.textContent = "0";
      countSupply.textContent = "0";
      return;
    }

    const result = analyze(text);
    output.innerHTML = result.highlighted;
    countDemand.textContent = String(result.counts.demand);
    countRisk.textContent = String(result.counts.risk);
    countSupply.textContent = String(result.counts.supply);
  });
}
