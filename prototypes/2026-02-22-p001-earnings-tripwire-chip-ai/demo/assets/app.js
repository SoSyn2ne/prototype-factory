const form = document.getElementById("tripwire-form");
const severityEl = document.getElementById("severity");
const headlineEl = document.getElementById("headline");
const triggerList = document.getElementById("trigger-list");
const nextActions = document.getElementById("next-actions");
const tickerInput = document.getElementById("ticker");

function renderEmpty() {
  triggerList.innerHTML = "<li>No checks selected.</li>";
  nextActions.innerHTML = "<li>Use the checklist to generate an evidence review plan.</li>";
}

function severityFor(count) {
  if (count >= 4) return { label: "THESIS-RISK", className: "risk" };
  if (count >= 2) return { label: "WATCH", className: "watch" };
  if (count >= 1) return { label: "INFO", className: "info" };
  return { label: "INFO", className: "info" };
}

function buildNextActions(selected) {
  const actions = [];

  if (selected.some((item) => item.includes("Guidance"))) {
    actions.push("Compare current guidance phrasing vs prior quarter transcript paragraph-by-paragraph.");
  }

  if (selected.some((item) => item.includes("margin") || item.includes("Inventory"))) {
    actions.push("Check gross-margin bridge and channel inventory comments before open.");
  }

  if (selected.some((item) => item.includes("Export") || item.includes("Design-loss"))) {
    actions.push("Review exposure to regulated geographies and top-customer concentration.");
  }

  if (!actions.length) {
    actions.push("No immediate escalation. Keep watchlist and monitor next scheduled catalyst.");
  }

  return actions;
}

if (form && severityEl && headlineEl && triggerList && nextActions && tickerInput) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const ticker = tickerInput.value.trim().toUpperCase() || "WATCHLIST";
    const selected = Array.from(form.querySelectorAll("input[type='checkbox']:checked")).map(
      (input) => input.value
    );

    const severity = severityFor(selected.length);
    severityEl.textContent = `Severity: ${severity.label}`;
    severityEl.className = `severity ${severity.className}`;

    if (selected.length) {
      headlineEl.textContent = `${ticker}: ${selected.length} tripwire${
        selected.length > 1 ? "s" : ""
      } triggered today.`;
      triggerList.innerHTML = selected.map((item) => `<li>${item}</li>`).join("");
    } else {
      headlineEl.textContent = `${ticker}: no tripwires triggered today.`;
      renderEmpty();
    }

    const actions = buildNextActions(selected);
    nextActions.innerHTML = actions.map((item) => `<li>${item}</li>`).join("");
  });

  renderEmpty();
}
