const entities = [
  {
    name: "ArcMail",
    score: 67,
    drivers: [
      { name: "Review sentiment", value: 72, note: "Negative review ratio climbed for 2 weeks." },
      { name: "Community engagement", value: 58, note: "Mention volume flat, reply depth falling." },
      { name: "Pricing changes", value: 74, note: "Seat minimum added on starter tier." }
    ]
  },
  {
    name: "BoardFlow",
    score: 38,
    drivers: [
      { name: "Docs & release cadence", value: 30, note: "Release notes remain weekly and specific." },
      { name: "Hiring signal", value: 42, note: "Job openings stable; no contraction pattern." },
      { name: "Community engagement", value: 39, note: "Mentions stable with neutral tone." }
    ]
  },
  {
    name: "PilotDesk",
    score: 81,
    drivers: [
      { name: "Review velocity", value: 83, note: "Review count dropped sharply month-over-month." },
      { name: "Issue aging", value: 78, note: "Public issue resolution slowed significantly." },
      { name: "Packaging changes", value: 84, note: "Free plan limits tightened in latest update." }
    ]
  }
];

const watchlist = document.getElementById("watchlist");
const productName = document.getElementById("product-name");
const riskScore = document.getElementById("risk-score");
const riskLabel = document.getElementById("risk-label");
const driversEl = document.getElementById("drivers");

function riskBand(score) {
  if (score >= 61) return { label: "Red", className: "red" };
  if (score >= 31) return { label: "Yellow", className: "yellow" };
  return { label: "Green", className: "green" };
}

function renderDetails(entity) {
  const band = riskBand(entity.score);
  productName.textContent = entity.name;
  riskScore.textContent = String(entity.score);
  riskLabel.textContent = band.label;
  riskLabel.className = `badge ${band.className}`;

  driversEl.innerHTML = entity.drivers
    .map(
      (driver) => `
      <article class="driver">
        <strong>${driver.name}</strong>
        <p>${driver.note}</p>
        <div class="bar"><span style="width:${driver.value}%"></span></div>
      </article>
    `
    )
    .join("");
}

function renderWatchlist() {
  watchlist.innerHTML = entities
    .map(
      (entity, index) => `
      <li>
        <button class="watch-item${index === 0 ? " active" : ""}" data-index="${index}" type="button">
          <strong>${entity.name}</strong>
          <span>${entity.score}</span>
        </button>
      </li>
    `
    )
    .join("");

  watchlist.querySelectorAll(".watch-item").forEach((item) => {
    item.addEventListener("click", () => {
      const idx = Number(item.dataset.index);
      watchlist
        .querySelectorAll(".watch-item")
        .forEach((node) => node.classList.toggle("active", node === item));
      renderDetails(entities[idx]);
    });
  });
}

if (watchlist && productName && riskScore && riskLabel && driversEl) {
  renderWatchlist();
  renderDetails(entities[0]);
}
