/* Wedding RSVP Ops Console — vanilla localStorage demo */

const STORAGE_KEY = "pf.weddingOpsGuests.v1";
const SEATING_KEY = "pf.weddingOpsSeating.v1";

/** @typedef {{id:string,name:string,group:string,attendance:'yes'|'no',meal:'beef'|'fish'|'veg'|'kids',notes:string,updatedAt:number}} Guest */

function uid() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function qs(id) {
  return document.getElementById(id);
}

function safeJsonParse(raw, fallback) {
  try {
    const v = JSON.parse(raw);
    return v ?? fallback;
  } catch {
    return fallback;
  }
}

function loadGuests() {
  const raw = localStorage.getItem(STORAGE_KEY);
  const guests = safeJsonParse(raw, []);
  return Array.isArray(guests) ? guests : [];
}

function saveGuests(guests) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(guests));
  setStorageStatus("Saved");
}

function loadSeating() {
  return safeJsonParse(localStorage.getItem(SEATING_KEY), null);
}

function saveSeating(seating) {
  localStorage.setItem(SEATING_KEY, JSON.stringify(seating));
}

let state = {
  guests: loadGuests(),
  filterGroup: "",
  search: "",
  seating: loadSeating(),
};

function setStorageStatus(text) {
  const el = qs("storageStatus");
  if (!el) return;
  el.textContent = `Local data: ${text}`;
  clearTimeout(setStorageStatus._t);
  setStorageStatus._t = setTimeout(() => {
    el.textContent = "Local data: ready";
  }, 1400);
}

function normalizeMealLabel(meal) {
  return ({ beef: "Beef", fish: "Fish", veg: "Veg", kids: "Kids" })[meal] || meal;
}

function hasAllergyFlag(notes) {
  return String(notes || "").trim().length > 0;
}

function computeSummary(guests) {
  const attending = guests.filter((g) => g.attendance === "yes");
  const declined = guests.filter((g) => g.attendance === "no");
  const allergyFlags = attending.filter((g) => hasAllergyFlag(g.notes)).length;

  const groups = new Set(attending.map((g) => g.group.trim()).filter(Boolean));

  const meals = { beef: 0, fish: 0, veg: 0, kids: 0 };
  for (const g of attending) {
    if (meals[g.meal] !== undefined) meals[g.meal] += 1;
  }

  return {
    attending: attending.length,
    declined: declined.length,
    allergyFlags,
    groups: groups.size,
    meals,
  };
}

function uniqGroups(guests) {
  const s = new Set(
    guests
      .map((g) => g.group)
      .map((x) => String(x || "").trim())
      .filter(Boolean)
  );
  return Array.from(s).sort((a, b) => a.localeCompare(b));
}

function filteredGuests() {
  const group = state.filterGroup;
  const q = state.search.trim().toLowerCase();

  return state.guests
    .slice()
    .sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0))
    .filter((g) => {
      if (group && g.group !== group) return false;
      if (!q) return true;
      const hay = `${g.name} ${g.group} ${g.notes}`.toLowerCase();
      return hay.includes(q);
    });
}

function render() {
  const list = filteredGuests();
  renderFilters();
  renderSummary();
  renderGuestRows(list);
  renderSeating();
  renderPrintable();
}

function renderFilters() {
  const select = qs("filterGroup");
  if (!select) return;

  const groups = uniqGroups(state.guests.filter((g) => g.attendance === "yes"));
  const keep = select.value;

  // rebuild options
  select.innerHTML = "";
  const optAll = document.createElement("option");
  optAll.value = "";
  optAll.textContent = "All groups";
  select.appendChild(optAll);

  for (const g of groups) {
    const opt = document.createElement("option");
    opt.value = g;
    opt.textContent = g;
    select.appendChild(opt);
  }

  // restore selection if possible
  if (groups.includes(keep)) select.value = keep;
  else select.value = state.filterGroup;
}

function renderSummary() {
  const s = computeSummary(state.guests);
  qs("kpiAttending").textContent = String(s.attending);
  qs("kpiDeclined").textContent = String(s.declined);
  qs("kpiAllergies").textContent = String(s.allergyFlags);
  qs("kpiGroups").textContent = String(s.groups);

  qs("mealBeef").textContent = String(s.meals.beef);
  qs("mealFish").textContent = String(s.meals.fish);
  qs("mealVeg").textContent = String(s.meals.veg);
  qs("mealKids").textContent = String(s.meals.kids);
}

function renderGuestRows(guests) {
  const tbody = qs("guestRows");
  tbody.innerHTML = "";

  for (const g of guests) {
    const tr = document.createElement("tr");

    const statusTag = g.attendance === "yes" ? "tag tag--yes" : "tag tag--no";
    const statusText = g.attendance === "yes" ? "Attending" : "Declined";

    const noteFlag = g.attendance === "yes" && hasAllergyFlag(g.notes);

    tr.innerHTML = `
      <td>${escapeHtml(g.name)}</td>
      <td>${escapeHtml(g.group)}</td>
      <td>
        <span class="${statusTag}">${statusText}</span>
        ${noteFlag ? '<span class="tag tag--flag" title="Has notes">Flag</span>' : ""}
      </td>
      <td>${escapeHtml(normalizeMealLabel(g.meal))}</td>
      <td>${escapeHtml(g.notes || "")}</td>
      <td class="right">
        <div class="smallBtns">
          <button class="smallBtn" data-action="edit" data-id="${g.id}">Edit</button>
          <button class="smallBtn" data-action="delete" data-id="${g.id}">Delete</button>
        </div>
      </td>
    `;

    tbody.appendChild(tr);
  }
}

function escapeHtml(s) {
  return String(s || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function seatingSuggest(attendingGuests, tableSize) {
  const size = Math.max(2, Math.min(20, Number(tableSize) || 8));

  // group → guests
  const byGroup = new Map();
  for (const g of attendingGuests) {
    const key = String(g.group || "").trim() || "(no group)";
    if (!byGroup.has(key)) byGroup.set(key, []);
    byGroup.get(key).push(g);
  }

  // sort groups largest first (helps keep groups together)
  const groups = Array.from(byGroup.entries())
    .map(([group, guests]) => ({ group, guests: guests.slice() }))
    .sort((a, b) => b.guests.length - a.guests.length || a.group.localeCompare(b.group));

  /** @type {{name:string, guests:Guest[]}[]} */
  const tables = [];

  function ensureTable() {
    const idx = tables.length + 1;
    tables.push({ name: `Table ${idx}`, guests: [] });
  }

  ensureTable();

  for (const grp of groups) {
    // try to place entire group into a table if it fits
    let placed = false;
    for (const t of tables) {
      if (t.guests.length + grp.guests.length <= size) {
        t.guests.push(...grp.guests);
        placed = true;
        break;
      }
    }

    if (placed) continue;

    // otherwise, spill across tables
    let remaining = grp.guests.slice();
    while (remaining.length > 0) {
      let t = tables.find((x) => x.guests.length < size);
      if (!t) {
        ensureTable();
        t = tables[tables.length - 1];
      }
      const room = size - t.guests.length;
      t.guests.push(...remaining.splice(0, room));
    }
  }

  // tidy: stable-ish order
  for (const t of tables) {
    t.guests.sort((a, b) => a.group.localeCompare(b.group) || a.name.localeCompare(b.name));
  }

  return { tableSize: size, tables, generatedAt: Date.now() };
}

function renderSeating() {
  const root = qs("tables");
  if (!root) return;
  root.innerHTML = "";

  const seating = state.seating;
  if (!seating || !seating.tables || seating.tables.length === 0) {
    root.innerHTML = '<p class="hint">No seating suggestions yet. Click “Generate seating suggestions”.</p>';
    return;
  }

  for (const t of seating.tables) {
    const card = document.createElement("div");
    card.className = "tableCard";
    const names = t.guests.map((g) => `${g.name} <span class="hint">(${g.group})</span>`);
    card.innerHTML = `
      <h4>${escapeHtml(t.name)} <span class="hint">(${t.guests.length}/${seating.tableSize})</span></h4>
      <div>${names.map((n) => `<div>${n}</div>`).join("")}</div>
    `;
    root.appendChild(card);
  }
}

function renderPrintable() {
  const attending = state.guests
    .filter((g) => g.attendance === "yes")
    .slice()
    .sort((a, b) => a.group.localeCompare(b.group) || a.name.localeCompare(b.name));

  qs("printMetaGuests").textContent = `${attending.length} attending`;

  const last = state.guests.reduce((m, g) => Math.max(m, g.updatedAt || 0), 0);
  qs("printMetaUpdated").textContent = last ? `Updated: ${new Date(last).toLocaleString()}` : "Updated: —";

  const arrivals = qs("printArrivals");
  arrivals.innerHTML = "";
  for (const g of attending) {
    const li = document.createElement("li");
    li.textContent = `${g.name} — ${g.group}`;
    arrivals.appendChild(li);
  }

  const dietary = qs("printDietary");
  dietary.innerHTML = "";
  const flagged = attending.filter((g) => hasAllergyFlag(g.notes));
  if (flagged.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No notes flagged.";
    dietary.appendChild(li);
  } else {
    for (const g of flagged) {
      const li = document.createElement("li");
      li.textContent = `${g.name} — ${g.notes}`;
      dietary.appendChild(li);
    }
  }

  const ps = qs("printSeating");
  ps.innerHTML = "";
  if (state.seating && state.seating.tables) {
    for (const t of state.seating.tables) {
      const div = document.createElement("div");
      div.style.marginBottom = "8px";
      div.innerHTML = `<strong>${escapeHtml(t.name)}</strong>: ${t.guests.map((x) => escapeHtml(x.name)).join(", ")}`;
      ps.appendChild(div);
    }
  } else {
    ps.textContent = "(No seating suggestions generated yet.)";
  }
}

function setEditing(guest) {
  qs("guestId").value = guest ? guest.id : "";
  qs("name").value = guest ? guest.name : "";
  qs("group").value = guest ? guest.group : "";
  qs("attendance").value = guest ? guest.attendance : "yes";
  qs("meal").value = guest ? guest.meal : "beef";
  qs("notes").value = guest ? guest.notes : "";

  const cancel = qs("btnCancel");
  cancel.hidden = !guest;
  qs("btnSave").textContent = guest ? "Update guest" : "Save guest";
  if (guest) qs("name").focus();
}

function onSubmit(e) {
  e.preventDefault();

  const id = qs("guestId").value || uid();
  const guest = {
    id,
    name: qs("name").value.trim(),
    group: qs("group").value.trim(),
    attendance: qs("attendance").value,
    meal: qs("meal").value,
    notes: qs("notes").value.trim(),
    updatedAt: Date.now(),
  };

  if (!guest.name || !guest.group) return;

  const idx = state.guests.findIndex((g) => g.id === id);
  if (idx >= 0) state.guests[idx] = guest;
  else state.guests.push(guest);

  saveGuests(state.guests);
  setEditing(null);
  render();
}

function onTableClick(e) {
  const btn = e.target.closest("button[data-action]");
  if (!btn) return;
  const action = btn.getAttribute("data-action");
  const id = btn.getAttribute("data-id");
  const guest = state.guests.find((g) => g.id === id);
  if (!guest) return;

  if (action === "edit") {
    setEditing(guest);
    return;
  }

  if (action === "delete") {
    const ok = confirm(`Delete ${guest.name}?`);
    if (!ok) return;
    state.guests = state.guests.filter((g) => g.id !== id);
    saveGuests(state.guests);

    // seating may now be stale
    state.seating = null;
    localStorage.removeItem(SEATING_KEY);
    render();
  }
}

function onGenerateSeating() {
  const size = qs("tableSize").value;
  const attending = state.guests.filter((g) => g.attendance === "yes");
  const seating = seatingSuggest(attending, size);
  state.seating = seating;
  saveSeating(seating);
  render();
}

function seedSample() {
  const sample = [
    { name: "Jisoo Park", group: "Bride family", attendance: "yes", meal: "fish", notes: "" },
    { name: "Minho Park", group: "Bride family", attendance: "yes", meal: "beef", notes: "" },
    { name: "Yuna Park", group: "Bride family", attendance: "yes", meal: "kids", notes: "" },
    { name: "Seojun Lee", group: "Groom family", attendance: "yes", meal: "beef", notes: "peanut allergy" },
    { name: "Hana Lee", group: "Groom family", attendance: "yes", meal: "veg", notes: "wheelchair" },
    { name: "Daeun Choi", group: "Friends", attendance: "yes", meal: "beef", notes: "" },
    { name: "Jun Choi", group: "Friends", attendance: "yes", meal: "fish", notes: "" },
    { name: "Sora Kim", group: "Coworkers", attendance: "no", meal: "beef", notes: "" },
  ].map((g) => ({ ...g, id: uid(), updatedAt: Date.now() }));

  state.guests = sample;
  state.seating = null;
  saveGuests(sample);
  localStorage.removeItem(SEATING_KEY);
  render();
}

function resetAll() {
  const ok = confirm("Reset ALL saved guests and seating suggestions?");
  if (!ok) return;
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(SEATING_KEY);
  state.guests = [];
  state.seating = null;
  setEditing(null);
  render();
}

function attach() {
  qs("guestForm").addEventListener("submit", onSubmit);
  qs("guestRows").addEventListener("click", onTableClick);

  qs("filterGroup").addEventListener("change", (e) => {
    state.filterGroup = e.target.value;
    render();
  });

  qs("search").addEventListener("input", (e) => {
    state.search = e.target.value;
    render();
  });

  qs("btnSeat").addEventListener("click", onGenerateSeating);
  qs("btnCancel").addEventListener("click", () => setEditing(null));
  qs("btnSeed").addEventListener("click", seedSample);
  qs("btnReset").addEventListener("click", resetAll);

  qs("btnPrint").addEventListener("click", () => {
    renderPrintable();
    window.print();
  });
}

attach();
render();
