const data = {
  nvda: {
    diff: [
      {
        type: "change",
        material: true,
        label: "Today change",
        text: "Hyperscaler order pacing shifted from strong to mixed across regions."
      },
      {
        type: "add",
        material: true,
        label: "New evidence",
        text: "Added a regulation sensitivity clause for China-linked accelerator demand."
      },
      {
        type: "remove",
        material: false,
        label: "Noise removed",
        text: "Dropped social-media rumor from thesis notes."
      }
    ],
    alerts: [
      {
        severity: "watch",
        title: "Demand concentration drift",
        body: "Validate top-customer concentration before adding exposure. Stop rule: if concentration remains within prior quarter range, downgrade to noise."
      },
      {
        severity: "risk",
        title: "Regulation delta",
        body: "Track export language changes in next filing; escalate if legal constraints expand to new product tiers."
      }
    ]
  },
  asml: {
    diff: [
      {
        type: "change",
        material: true,
        label: "Today change",
        text: "Lead-time expectations moved from stable to extending for high-NA tools."
      },
      {
        type: "add",
        material: false,
        label: "Context add",
        text: "Added commentary on supplier staffing constraints."
      },
      {
        type: "remove",
        material: true,
        label: "Dropped assumption",
        text: "Removed assumption that memory demand recovery is immediate."
      }
    ],
    alerts: [
      {
        severity: "watch",
        title: "Capacity bottleneck watch",
        body: "Check supplier comments in next event transcript. If lead-time slips again, move to thesis-risk."
      },
      {
        severity: "info",
        title: "Memory recovery uncertainty",
        body: "Keep position unchanged until order backlog confirms renewed demand."
      }
    ]
  }
};

const tickerSelect = document.getElementById("ticker");
const materialOnly = document.getElementById("material-only");
const diffRows = document.getElementById("diff-rows");
const alertCards = document.getElementById("alert-cards");

function render() {
  const current = data[tickerSelect.value];
  const showMaterialOnly = materialOnly.checked;

  const filteredDiff = current.diff.filter((entry) => !showMaterialOnly || entry.material);

  diffRows.innerHTML = filteredDiff
    .map((entry) => {
      const marker =
        entry.type === "add"
          ? '<span class="added">+ Added</span>'
          : entry.type === "remove"
            ? '<span class="removed">- Removed</span>'
            : '<span class="changed">~ Changed</span>';

      return `
        <article class="row ${entry.type}">
          <p class="meta">${entry.label}</p>
          <p class="delta">${marker}: ${entry.text}</p>
        </article>
      `;
    })
    .join("");

  alertCards.innerHTML = current.alerts
    .map(
      (alert) => `
      <article class="alert-card">
        <span class="badge ${alert.severity}">${alert.severity.toUpperCase()}</span>
        <h3>${alert.title}</h3>
        <p>${alert.body}</p>
      </article>
    `
    )
    .join("");
}

tickerSelect.addEventListener("change", render);
materialOnly.addEventListener("change", render);

render();
