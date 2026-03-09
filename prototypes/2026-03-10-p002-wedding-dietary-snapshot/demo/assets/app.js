const TAGS = [
  { key: "vegetarian", label: "Vegetarian" },
  { key: "vegan", label: "Vegan" },
  { key: "gluten_free", label: "Gluten-free" },
  { key: "nut_allergy", label: "Nut allergy" },
  { key: "shellfish_allergy", label: "Shellfish allergy" },
  { key: "halal", label: "Halal" },
  { key: "no_pork", label: "No pork" },
];

function el(id) {
  return document.getElementById(id);
}

function readRow(rowEl) {
  const name = rowEl.querySelector(".name").value.trim();
  const notes = rowEl.querySelector(".notes").value.trim();
  const tags = Array.from(rowEl.querySelectorAll(".tags input[type=checkbox]:checked")).map((c) => c.value);
  return { name, notes, tags };
}

function compute() {
  const rows = Array.from(el("rows").children);
  const guests = rows.map(readRow).filter((g) => g.name || g.tags.length || g.notes);

  // Duplicate detection (by normalized name)
  const norm = (s) => s.toLowerCase().replace(/\s+/g, " ").trim();
  const seen = new Map();
  const dups = new Set();
  for (const g of guests) {
    if (!g.name) continue;
    const n = norm(g.name);
    if (seen.has(n)) dups.add(n);
    else seen.set(n, true);
  }

  // Summary counts
  const counts = Object.fromEntries(TAGS.map((t) => [t.key, 0]));
  const namesByTag = Object.fromEntries(TAGS.map((t) => [t.key, []]));

  for (const g of guests) {
    for (const t of g.tags) {
      if (counts[t] == null) counts[t] = 0;
      counts[t] += 1;
      if (g.name) namesByTag[t]?.push(g.name);
    }
  }

  renderSummary({ counts, namesByTag });

  const payload = {
    id: "2026-03-10-p002",
    generatedAt: new Date().toISOString(),
    guests,
    summary: {
      counts,
      allergyNames: {
        nut_allergy: namesByTag.nut_allergy || [],
        shellfish_allergy: namesByTag.shellfish_allergy || [],
      },
    },
  };

  el("exportBox").value = JSON.stringify(payload, null, 2);

  // UI dupe warning
  if (dups.size > 0) {
    el("dupeWarn").textContent = `Duplicate names detected: ${Array.from(dups).join(", ")}. Consider merging.`;
  } else {
    el("dupeWarn").textContent = "";
  }
}

function renderSummary({ counts, namesByTag }) {
  const root = el("summary");
  root.innerHTML = "";

  for (const t of TAGS) {
    const div = document.createElement("div");
    div.className = "sumCard";

    const label = document.createElement("span");
    label.textContent = t.label;

    const strong = document.createElement("strong");
    strong.textContent = String(counts[t.key] || 0);

    const detail = document.createElement("span");
    if (t.key.endsWith("_allergy")) {
      const names = (namesByTag[t.key] || []).filter(Boolean);
      detail.textContent = names.length ? `Names: ${names.slice(0, 6).join(", ")}${names.length > 6 ? "…" : ""}` : "No names yet";
    } else {
      detail.textContent = "Count only";
    }

    div.appendChild(label);
    div.appendChild(strong);
    div.appendChild(detail);
    root.appendChild(div);
  }
}

function addRow(seed = {}) {
  const tpl = el("rowTpl");
  const node = tpl.content.firstElementChild.cloneNode(true);

  const nameEl = node.querySelector(".name");
  const notesEl = node.querySelector(".notes");

  nameEl.value = seed.name || "";
  notesEl.value = seed.notes || "";

  const checked = new Set(seed.tags || []);
  node.querySelectorAll(".tags input[type=checkbox]").forEach((c) => {
    c.checked = checked.has(c.value);
    c.addEventListener("change", compute);
  });

  nameEl.addEventListener("input", compute);
  notesEl.addEventListener("input", compute);

  node.querySelector(".remove").addEventListener("click", () => {
    node.remove();
    compute();
  });

  el("rows").appendChild(node);
  compute();
}

async function copyExport() {
  const status = el("copyStatus");
  try {
    await navigator.clipboard.writeText(el("exportBox").value);
    status.textContent = "Copied.";
  } catch {
    status.textContent = "Copy failed (browser blocked clipboard).";
  }
  setTimeout(() => (status.textContent = ""), 1500);
}

function clearAll() {
  el("rows").innerHTML = "";
  compute();
}

window.addEventListener("DOMContentLoaded", () => {
  el("addBtn").addEventListener("click", () => addRow());
  el("copyBtn").addEventListener("click", copyExport);
  el("clearBtn").addEventListener("click", clearAll);

  // seed a few example rows
  addRow({ name: "Kim Minji", tags: ["vegetarian"] });
  addRow({ name: "Park Joon", tags: ["nut_allergy"], notes: "EpiPen" });
  addRow({ name: "Lee Hana", tags: ["gluten_free"], notes: "No soy sauce" });
});
