const scanButton = document.getElementById("scan-button");
const trackerBody = document.getElementById("tracker-body");
const notification = document.getElementById("notification");

const baselineRows = [
  {
    competitor: "OrbitCRM",
    shift: "Added AI inbox summaries",
    category: "Product",
    impact: 62
  },
  {
    competitor: "FlowStack",
    shift: "Raised starter plan seat minimum",
    category: "Pricing",
    impact: 81
  },
  {
    competitor: "PulseDesk",
    shift: "New partner marketplace launch",
    category: "Distribution",
    impact: 44
  }
];

const shiftEvents = [
  {
    competitor: "OrbitCRM",
    shift: "Introduced usage-based AI pricing",
    category: "Pricing",
    impact: 86
  },
  {
    competitor: "FlowStack",
    shift: "Bundled analytics into base plan",
    category: "Packaging",
    impact: 73
  },
  {
    competitor: "PulseDesk",
    shift: "Announced Salesforce native integration",
    category: "Integrations",
    impact: 67
  }
];

let scanIndex = 0;

function impactClass(score) {
  if (score >= 75) return "high";
  if (score >= 55) return "medium";
  return "low";
}

function renderRows(activeEvent) {
  const rows = baselineRows.map((entry) => {
    const source = activeEvent && activeEvent.competitor === entry.competitor ? activeEvent : entry;
    return `
      <tr>
        <td>${source.competitor}</td>
        <td>${source.shift}</td>
        <td>${source.category}</td>
        <td><span class="impact ${impactClass(source.impact)}">${source.impact}</span></td>
      </tr>
    `;
  });

  trackerBody.innerHTML = rows.join("");
}

function showNotification(event) {
  notification.textContent = `New shift detected: ${event.competitor} / ${event.category} / impact ${event.impact}. Suggested response: counter-position in next customer call.`;
  notification.classList.remove("hidden");

  window.setTimeout(() => {
    notification.classList.add("hidden");
  }, 3200);
}

if (scanButton && trackerBody && notification) {
  scanButton.addEventListener("click", () => {
    const event = shiftEvents[scanIndex % shiftEvents.length];
    scanIndex += 1;
    renderRows(event);
    showNotification(event);
  });

  renderRows();
}
