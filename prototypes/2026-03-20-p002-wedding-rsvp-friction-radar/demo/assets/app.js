const $ = (id) => document.getElementById(id);

const segmentEl = $("segment");
const toneEl = $("tone");
const funnelEl = $("funnel");
const rowsEl = $("rows");

const detailCard = $("detailCard");
const dName = $("dName");
const dSeg = $("dSeg");
const dStage = $("dStage");
const dReason = $("dReason");
const genBtn = $("genBtn");
const draftEl = $("draft");

// Synthetic guest pipeline state.
const GUESTS = [
  { id: 1, name: "Aunt Mira", segment: "family", stage: "viewed", days: 9, reason: "busy" },
  { id: 2, name: "Uncle Joon", segment: "family", stage: "maybe", days: 12, reason: "needs +1" },
  { id: 3, name: "Cousin Hana", segment: "family", stage: "submitted", days: 7, reason: "confirmed" },
  { id: 4, name: "Team Lead Min", segment: "coworkers", stage: "started", days: 5, reason: "meal question" },
  { id: 5, name: "Soo (Design)", segment: "coworkers", stage: "viewed", days: 6, reason: "busy" },
  { id: 6, name: "Jae (QA)", segment: "coworkers", stage: "maybe", days: 10, reason: "waiting friends" },
  { id: 7, name: "Yuna", segment: "friends", stage: "viewed", days: 8, reason: "busy" },
  { id: 8, name: "Daeho", segment: "friends", stage: "started", days: 4, reason: "kids" },
  { id: 9, name: "Sera", segment: "friends", stage: "submitted", days: 3, reason: "confirmed" },
  { id: 10, name: "Kiki", segment: "friends", stage: "maybe", days: 11, reason: "travel" },
];

const STAGE_LABEL = {
  viewed: "Viewed (no action)",
  started: "Started (incomplete)",
  maybe: "Maybe", 
  submitted: "Submitted",
};

let selectedId = null;

function stageBadge(stage) {
  const map = {
    submitted: "✅", 
    maybe: "🟠",
    started: "🟣",
    viewed: "⚪",
  };
  return `${map[stage] || ""} ${STAGE_LABEL[stage] || stage}`;
}

function filteredGuests() {
  const seg = segmentEl.value;
  return seg === "all" ? GUESTS : GUESTS.filter((g) => g.segment === seg);
}

function counts(guests) {
  const c = { viewed: 0, started: 0, maybe: 0, submitted: 0 };
  for (const g of guests) c[g.stage] = (c[g.stage] || 0) + 1;
  return c;
}

function renderFunnel(c) {
  const items = [
    { k: "Viewed", v: c.viewed },
    { k: "Started", v: c.started },
    { k: "Maybe", v: c.maybe },
    { k: "Submitted", v: c.submitted },
  ];
  funnelEl.innerHTML = items
    .map((it) => `<div class=\"fbox\"><div class=\"fk\">${it.k}</div><div class=\"fv\">${it.v}</div></div>`)
    .join("");
}

function renderTable(guests) {
  rowsEl.innerHTML = guests
    .slice()
    .sort((a, b) => (a.stage === "submitted") - (b.stage === "submitted") || b.days - a.days)
    .map((g) => {
      const isSel = g.id === selectedId;
      return `
        <tr data-id="${g.id}" style="${isSel ? "background: rgba(147,51,234,0.08);" : ""}">
          <td style="font-weight:900;">${g.name}</td>
          <td><span class="badge">${stageBadge(g.stage)}</span></td>
          <td>${g.days}</td>
          <td style="color: rgba(15,23,42,0.68);">${g.reason}</td>
        </tr>
      `;
    })
    .join("");
}

function pickGuest(id) {
  selectedId = id;
  const g = GUESTS.find((x) => x.id === id);
  if (!g) return;

  detailCard.hidden = false;
  dName.textContent = g.name;
  dSeg.textContent = g.segment;
  dStage.textContent = STAGE_LABEL[g.stage] || g.stage;
  dReason.textContent = g.reason;

  draftEl.value = "";
  render();
}

function generateNudge(g, tone) {
  const who = g.segment === "family" ? "family" : g.segment === "coworkers" ? "work" : "friends";
  const name = g.name;

  const openers = {
    warm: {
      family: `Hi ${name} ❤️`,
      work: `Hi ${name}!`,
      friends: `Hey ${name} :)`,
    },
    neutral: {
      family: `Hi ${name},`,
      work: `Hi ${name},`,
      friends: `Hi ${name},`,
    },
    short: {
      family: `${name}!`,
      work: `${name} —`,
      friends: `${name} —`,
    },
  };

  const closer = {
    warm: "No rush—just want to make planning easier. Thank you!",
    neutral: "Thanks so much!",
    short: "Thanks!",
  };

  let ask = "";
  if (g.stage === "submitted") {
    ask = "Thanks for your RSVP — can you double-check meal / +1 details if needed?";
  } else if (g.stage === "started") {
    ask = "I saw the RSVP might be incomplete. If you have a minute, could you finish it?";
  } else if (g.stage === "maybe") {
    ask = "Totally okay if you’re not sure yet — could you reply with yes/no/maybe so we can plan seats?";
  } else {
    ask = "Quick check-in: when you have a moment, could you RSVP? It helps us finalize headcount.";
  }

  // Add context based on reason tag.
  const reasonLine =
    g.reason === "meal question"
      ? "If you have a meal preference, just reply with it and we’ll set it for you."
      : g.reason === "needs +1"
        ? "If you’re bringing a +1, just tell us their name." 
        : g.reason === "kids"
          ? "If you’re bringing kids, tell us how many so we can prepare." 
          : g.reason === "travel"
            ? "If travel is the issue, even a ‘maybe’ helps us plan." 
            : g.reason === "waiting friends"
              ? "If you’re coordinating with friends, a quick ‘maybe’ is totally fine." 
              : "";

  const lines = [openers[tone][who], ask, reasonLine, "RSVP link: [paste link]", closer[tone]].filter(Boolean);
  return lines.join("\n\n");
}

function render() {
  const guests = filteredGuests();
  const c = counts(guests);
  renderFunnel(c);
  renderTable(guests);

  const g = GUESTS.find((x) => x.id === selectedId);
  if (g) {
    genBtn.disabled = false;
  } else {
    detailCard.hidden = true;
  }
}

rowsEl.addEventListener("click", (e) => {
  const tr = e.target.closest("tr");
  if (!tr) return;
  pickGuest(Number(tr.dataset.id));
});

segmentEl.addEventListener("change", () => {
  selectedId = null;
  render();
});

genBtn.addEventListener("click", () => {
  const g = GUESTS.find((x) => x.id === selectedId);
  if (!g) return;
  draftEl.value = generateNudge(g, toneEl.value);
});

toneEl.addEventListener("change", () => {
  const g = GUESTS.find((x) => x.id === selectedId);
  if (!g) return;
  if (draftEl.value.trim()) draftEl.value = generateNudge(g, toneEl.value);
});

render();
