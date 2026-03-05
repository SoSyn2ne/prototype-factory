const state = {
  rows: [
    { id: 1, vendor: "NexTier Semicon", part: "MCU-88A", product: "Smart Meter X2", criticality: 5, alternatives: 0 },
    { id: 2, vendor: "BlueHarbor Plastics", part: "Housing-H17", product: "Smart Meter X2", criticality: 3, alternatives: 2 },
    { id: 3, vendor: "Atlas Motion", part: "Servo-S9", product: "Warehouse Bot M3", criticality: 4, alternatives: 1 },
    { id: 4, vendor: "NexTier Semicon", part: "Sensor-LID210", product: "Warehouse Bot M3", criticality: 5, alternatives: 0 },
    { id: 5, vendor: "Helio Power Cells", part: "Battery-P48", product: "Field Drone Q7", criticality: 4, alternatives: 1 },
    { id: 6, vendor: "EuroFab Metals", part: "Frame-C22", product: "Field Drone Q7", criticality: 2, alternatives: 3 }
  ],
  vendor: "all",
  spofOnly: false
};

const refs = {
  clock: document.getElementById("clock"),
  shockScore: document.getElementById("shockScore"),
  scoreSeverity: document.getElementById("scoreSeverity"),
  scoreFill: document.getElementById("scoreFill"),
  avgCriticality: document.getElementById("avgCriticality"),
  spofCount: document.getElementById("spofCount"),
  visibleRows: document.getElementById("visibleRows"),
  vendorFilter: document.getElementById("vendorFilter"),
  spofOnly: document.getElementById("spofOnly"),
  dependencyBody: document.getElementById("dependencyBody"),
  suggestionList: document.getElementById("suggestionList")
};

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

function updateClock() {
  if (!refs.clock) return;
  refs.clock.textContent = new Date().toLocaleTimeString();
}

function populateVendorFilter() {
  if (!refs.vendorFilter) return;

  const vendors = Array.from(new Set(state.rows.map((row) => row.vendor))).sort();
  refs.vendorFilter.innerHTML = '<option value="all">All vendors</option>';

  vendors.forEach((vendor) => {
    const option = document.createElement("option");
    option.value = vendor;
    option.textContent = vendor;
    refs.vendorFilter.appendChild(option);
  });

  refs.vendorFilter.value = state.vendor;
}

function getFilteredRows() {
  return state.rows.filter((row) => {
    const vendorMatches = state.vendor === "all" || row.vendor === state.vendor;
    const spofMatches = !state.spofOnly || row.alternatives === 0;
    return vendorMatches && spofMatches;
  });
}

function calculateScore(rows) {
  if (!rows.length) {
    return { score: 0, avgCriticality: 0, spofCount: 0 };
  }

  const avgCriticality = rows.reduce((sum, row) => sum + row.criticality, 0) / rows.length;
  const spofCount = rows.filter((row) => row.alternatives === 0).length;
  const spofRatio = spofCount / rows.length;
  const score = clamp(Math.round((avgCriticality / 5) * 65 + spofRatio * 35), 0, 100);

  return { score, avgCriticality, spofCount };
}

function severityLabel(score) {
  if (score >= 75) return "Critical";
  if (score >= 55) return "Elevated";
  if (score >= 35) return "Guarded";
  return "Stable";
}

function rowStatus(row) {
  if (row.alternatives === 0) {
    return { label: "SPOF", className: "status-spof" };
  }

  if (row.criticality >= 4 || row.alternatives === 1) {
    return { label: "Elevated", className: "status-elevated" };
  }

  return { label: "Stable", className: "status-stable" };
}

function renderTable(rows) {
  if (!refs.dependencyBody) return;

  if (!rows.length) {
    refs.dependencyBody.innerHTML = '<tr><td colspan="6" class="empty">No dependencies match current filters.</td></tr>';
    return;
  }

  refs.dependencyBody.innerHTML = rows
    .map((row) => {
      const status = rowStatus(row);
      return `
        <tr>
          <td>${row.vendor}</td>
          <td>${row.part}</td>
          <td>${row.product}</td>
          <td>
            <select data-id="${row.id}" data-field="criticality" aria-label="Criticality for ${row.part}">
              ${[1, 2, 3, 4, 5]
                .map((value) => `<option value="${value}" ${value === row.criticality ? "selected" : ""}>${value}</option>`)
                .join("")}
            </select>
          </td>
          <td>
            <input
              type="number"
              min="0"
              max="20"
              step="1"
              value="${row.alternatives}"
              data-id="${row.id}"
              data-field="alternatives"
              aria-label="Alternatives for ${row.part}"
            />
          </td>
          <td><span class="status-badge ${status.className}">${status.label}</span></td>
        </tr>
      `;
    })
    .join("");
}

function buildSuggestions(rows) {
  if (!rows.length) {
    return [
      "Reset filters to review full dependency exposure before escalating decisions.",
      "Run a vendor concentration scan to identify the largest single-source clusters.",
      "Capture latest supplier lead-time signals before re-baselining safety stock."
    ];
  }

  const suggestions = [];
  const spofRows = rows.filter((row) => row.alternatives === 0);
  const highCriticalRows = rows.filter((row) => row.criticality >= 4);
  const vendorCounts = rows.reduce((acc, row) => {
    acc[row.vendor] = (acc[row.vendor] || 0) + 1;
    return acc;
  }, {});

  const topVendorEntry = Object.entries(vendorCounts).sort((a, b) => b[1] - a[1])[0];
  const topVendor = topVendorEntry ? topVendorEntry[0] : null;
  const topVendorShare = topVendorEntry ? topVendorEntry[1] / rows.length : 0;

  if (spofRows.length) {
    const spofParts = spofRows
      .slice(0, 2)
      .map((row) => row.part)
      .join(" and ");
    suggestions.push(
      `Qualify an alternate vendor for ${spofParts}${spofRows.length > 2 ? " (and remaining SPOF parts)" : ""} within this planning cycle.`
    );
  } else {
    suggestions.push("Maintain dual-source agreements and verify backup supplier readiness every month.");
  }

  if (highCriticalRows.length) {
    const criticalProducts = Array.from(new Set(highCriticalRows.map((row) => row.product))).slice(0, 2).join(" and ");
    suggestions.push(`Increase safety stock coverage for ${criticalProducts} where lead-time variance is highest.`);
  } else {
    suggestions.push("Preserve current stock policy and redirect working capital to forecast volatility monitoring.");
  }

  if (topVendor && topVendorShare >= 0.5) {
    suggestions.push(`Reduce concentration on ${topVendor}; split upcoming PO volume across at least one additional qualified supplier.`);
  } else {
    suggestions.push("Prioritize BOM redesign for parts with <=1 alternative to expand substitution options.");
  }

  while (suggestions.length < 3) {
    suggestions.push("Run a cross-functional risk review with procurement, engineering, and operations this week.");
  }

  return suggestions.slice(0, 3);
}

function renderSuggestions(rows) {
  if (!refs.suggestionList) return;

  const suggestions = buildSuggestions(rows);
  refs.suggestionList.innerHTML = suggestions.map((item) => `<li>${item}</li>`).join("");
}

function renderMetrics(rows) {
  const metrics = calculateScore(rows);

  if (refs.shockScore) refs.shockScore.textContent = String(metrics.score);
  if (refs.avgCriticality) refs.avgCriticality.textContent = metrics.avgCriticality.toFixed(1);
  if (refs.spofCount) refs.spofCount.textContent = String(metrics.spofCount);
  if (refs.visibleRows) refs.visibleRows.textContent = String(rows.length);
  if (refs.scoreSeverity) refs.scoreSeverity.textContent = severityLabel(metrics.score);
  if (refs.scoreFill) refs.scoreFill.style.width = `${metrics.score}%`;
}

function render() {
  const filteredRows = getFilteredRows();
  renderMetrics(filteredRows);
  renderTable(filteredRows);
  renderSuggestions(filteredRows);
}

function handleFilterChange() {
  if (refs.vendorFilter) {
    refs.vendorFilter.addEventListener("change", (event) => {
      state.vendor = event.target.value;
      render();
    });
  }

  if (refs.spofOnly) {
    refs.spofOnly.addEventListener("change", (event) => {
      state.spofOnly = Boolean(event.target.checked);
      render();
    });
  }
}

function handleTableEdits() {
  if (!refs.dependencyBody) return;

  const onEdit = (event) => {
    const target = event.target;
    if (!target || !target.dataset) return;

    const id = Number(target.dataset.id);
    const field = target.dataset.field;
    if (!id || !field) return;

    const row = state.rows.find((entry) => entry.id === id);
    if (!row) return;

    if (field === "criticality") {
      const parsed = Number.parseInt(target.value, 10);
      if (Number.isNaN(parsed)) return;
      row.criticality = clamp(parsed, 1, 5);
      render();
      return;
    }

    if (field === "alternatives") {
      const parsed = Number.parseInt(target.value, 10);
      if (Number.isNaN(parsed)) return;
      row.alternatives = clamp(parsed, 0, 20);
      if (String(row.alternatives) !== target.value) {
        target.value = String(row.alternatives);
      }
      render();
    }
  };

  refs.dependencyBody.addEventListener("input", onEdit);
  refs.dependencyBody.addEventListener("change", onEdit);
}

function init() {
  populateVendorFilter();
  handleFilterChange();
  handleTableEdits();
  updateClock();
  setInterval(updateClock, 1000);
  render();
}

init();
