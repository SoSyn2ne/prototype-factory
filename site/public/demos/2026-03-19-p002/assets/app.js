/* Wedding Seating Constraint Checker — deterministic offline demo */

const $ = (sel) => document.querySelector(sel);

const tablesInput = $("#tablesInput");
const seatsInput = $("#seatsInput");
const guestsInput = $("#guestsInput");
const avoidInput = $("#avoidInput");
const togetherInput = $("#togetherInput");
const loadBtn = $("#loadBtn");
const checkBtn = $("#checkBtn");

const tablesEl = $("#tables");
const conflictsEl = $("#conflicts");
const confSummaryEl = $("#confSummary");
const capacityNoteEl = $("#capacityNote");

const PRESET = {
  tables: 8,
  seats: 8,
  guests: [
    "Bride", "Groom", "Bride Mom", "Bride Dad", "Groom Mom", "Groom Dad",
    "Best Man", "Maid of Honor", "College Friend A", "College Friend B", "Work Friend A", "Work Friend B",
    "Uncle Kim", "Aunt Lee", "Cousin Hana", "Cousin Joon",
    "Ex-Colleague", "Boss",
    "Kids Table: Minseo", "Kids Table: Yuna", "Kids Table: Jihun",
    "Vendor Liaison", "Photographer",
    "Neighbor A", "Neighbor B", "Neighbor C",
  ],
  avoidPairs: [
    ["Boss", "Ex-Colleague"],
    ["Uncle Kim", "Aunt Lee"],
  ],
  togetherGroups: [
    ["Bride Mom", "Bride Dad"],
    ["Groom Mom", "Groom Dad"],
    ["College Friend A", "College Friend B"],
  ],
};

function parseLines(value) {
  return String(value || "")
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function parseAvoidPairs(value) {
  const lines = parseLines(value);
  const pairs = [];
  for (const line of lines) {
    const parts = line.split("|").map((s) => s.trim()).filter(Boolean);
    if (parts.length !== 2) continue;
    pairs.push([parts[0], parts[1]]);
  }
  return pairs;
}

function parseTogetherGroups(value) {
  const lines = parseLines(value);
  const groups = [];
  for (const line of lines) {
    const parts = line.split(",").map((s) => s.trim()).filter(Boolean);
    if (parts.length < 2) continue;
    groups.push(parts);
  }
  return groups;
}

function assignNaively(guests, tableCount, seatsPerTable) {
  const tables = Array.from({ length: tableCount }, () => []);
  let idx = 0;
  for (const g of guests) {
    // find next table with seat
    let placed = false;
    for (let attempt = 0; attempt < tableCount; attempt++) {
      const t = (idx + attempt) % tableCount;
      if (tables[t].length < seatsPerTable) {
        tables[t].push(g);
        idx = t + 1;
        placed = true;
        break;
      }
    }
    if (!placed) {
      return { tables, overflow: [g, ...guests.slice(guests.indexOf(g) + 1)] };
    }
  }
  return { tables, overflow: [] };
}

function buildGuestTableMap(tables) {
  const map = new Map();
  tables.forEach((list, ti) => list.forEach((g) => map.set(g, ti)));
  return map;
}

function checkConflicts({ tables, overflow }, avoidPairs, togetherGroups) {
  const conflicts = [];
  const map = buildGuestTableMap(tables);

  for (const [a, b] of avoidPairs) {
    if (!map.has(a) || !map.has(b)) continue;
    const ta = map.get(a);
    const tb = map.get(b);
    if (ta === tb) {
      conflicts.push({
        type: "avoid",
        table: ta,
        title: `Avoid pair seated together (Table ${ta + 1})`,
        detail: `${a} and ${b} are both assigned to Table ${ta + 1}.`,
        people: [a, b],
      });
    }
  }

  for (const group of togetherGroups) {
    const present = group.filter((g) => map.has(g));
    if (present.length < 2) continue;
    const tablesSet = new Set(present.map((g) => map.get(g)));
    if (tablesSet.size > 1) {
      const where = [...tablesSet].map((t) => `Table ${t + 1}`).join(", ");
      conflicts.push({
        type: "together",
        table: null,
        title: `Together group is split (${present.length} people)`,
        detail: `${present.join(", ")} are split across: ${where}.`,
        people: present,
      });
    }
  }

  if (overflow.length) {
    conflicts.push({
      type: "capacity",
      table: null,
      title: "Not enough seats (overflow)",
      detail: `Overflow guests (${overflow.length}): ${overflow.slice(0, 8).join(", ")}${overflow.length > 8 ? "…" : ""}`,
      people: overflow,
    });
  }

  return conflicts;
}

let activeTable = null;
let lastModel = null;

function renderTables(tables) {
  tablesEl.innerHTML = tables
    .map((list, ti) => {
      const active = activeTable === ti;
      return `
      <button class="tableCard" type="button" data-table="${ti}" data-active="${active ? "true" : "false"}">
        <div class="tableTitle">
          <strong>Table ${ti + 1}</strong>
          <span class="pill">${list.length} guest(s)</span>
        </div>
        <ol class="guestList">${list.map((g) => `<li>${escapeHtml(g)}</li>`).join("")}</ol>
      </button>`;
    })
    .join("");

  for (const btn of tablesEl.querySelectorAll(".tableCard")) {
    btn.addEventListener("click", () => {
      const t = Number(btn.getAttribute("data-table"));
      activeTable = activeTable === t ? null : t;
      renderTables(lastModel.tables);
      renderConflicts(lastModel.conflicts);
    });
  }
}

function renderConflicts(conflicts) {
  const filtered = activeTable == null
    ? conflicts
    : conflicts.filter((c) => c.table === activeTable || c.table == null);

  confSummaryEl.textContent = filtered.length
    ? `${filtered.length} conflict(s)${activeTable != null ? ` (focused on Table ${activeTable + 1})` : ""}.`
    : "No conflicts detected for the current rules.";

  conflictsEl.innerHTML = filtered.length
    ? filtered
        .map((c) => `
        <div class="conf">
          <div class="title"><strong>${escapeHtml(c.title)}</strong><span class="pill">${escapeHtml(c.type)}</span></div>
          <p>${escapeHtml(c.detail)}</p>
        </div>`)
        .join("")
    : `<div class="muted">Nothing to fix (under this simplified rule set).</div>`;
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function updateCapacityNote(guestCount, tableCount, seatsPerTable, overflowCount) {
  const cap = tableCount * seatsPerTable;
  if (guestCount > cap) {
    capacityNoteEl.classList.add("bad");
    capacityNoteEl.textContent = `Capacity warning: ${guestCount} guests but only ${cap} seats. Overflow will occur.`;
  } else if (overflowCount > 0) {
    capacityNoteEl.classList.add("bad");
    capacityNoteEl.textContent = `Overflow detected (${overflowCount}). Increase tables or seats.`;
  } else {
    capacityNoteEl.classList.remove("bad");
    capacityNoteEl.textContent = `Capacity: ${guestCount}/${cap} seats used.`;
  }
}

function check() {
  const tableCount = Math.max(1, Number(tablesInput.value || 1));
  const seatsPerTable = Math.max(2, Number(seatsInput.value || 2));
  const guests = parseLines(guestsInput.value);
  const avoidPairs = parseAvoidPairs(avoidInput.value);
  const togetherGroups = parseTogetherGroups(togetherInput.value);

  const assigned = assignNaively(guests, tableCount, seatsPerTable);
  const conflicts = checkConflicts(assigned, avoidPairs, togetherGroups);

  lastModel = { tables: assigned.tables, conflicts };
  activeTable = null;
  renderTables(assigned.tables);
  renderConflicts(conflicts);
  updateCapacityNote(guests.length, tableCount, seatsPerTable, assigned.overflow.length);
}

loadBtn.addEventListener("click", () => {
  tablesInput.value = String(PRESET.tables);
  seatsInput.value = String(PRESET.seats);
  guestsInput.value = PRESET.guests.join("\n") + "\n";
  avoidInput.value = PRESET.avoidPairs.map((p) => `${p[0]} | ${p[1]}`).join("\n") + "\n";
  togetherInput.value = PRESET.togetherGroups.map((g) => g.join(", ")).join("\n") + "\n";
  capacityNoteEl.textContent = "Preset loaded. Click Check seating.";
});

checkBtn.addEventListener("click", check);

capacityNoteEl.textContent = "Load preset and check.";
