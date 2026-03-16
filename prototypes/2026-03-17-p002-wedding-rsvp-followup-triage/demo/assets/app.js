// Wedding RSVP Follow-up Triage — offline, deterministic.
// Heuristic urgency score:
// - Base by RSVP: no response (70), maybe (45), accepted (8), declined (0)
// - Relationship weight: family (+20), friend (+12), coworker (+6)
// - Friction (0..3) reduces urgency slightly (harder cases might need gentler pacing): -4 per friction.
// Clamp 0..100.

const $ = (id) => document.getElementById(id);
const tbody = $("tbody");
const addBtn = $("addBtn");
const msgMeta = $("msgMeta");
const msgText = $("msgText");
const copyBtn = $("copyBtn");
const copyState = $("copyState");

let nextId = 1;
let selectedId = null;

const sample = [
  { name: "이모", rel: "family", rsvp: "no", friction: 1 },
  { name: "민수", rel: "friend", rsvp: "maybe", friction: 0 },
  { name: "지은", rel: "coworker", rsvp: "no", friction: 2 },
  { name: "삼촌", rel: "family", rsvp: "no", friction: 3 },
  { name: "선배", rel: "coworker", rsvp: "accepted", friction: 1 },
  { name: "혜진", rel: "friend", rsvp: "declined", friction: 0 },
];

let guests = sample.map((g) => ({ id: String(nextId++), ...g }));

function clamp(n, lo, hi) {
  return Math.max(lo, Math.min(hi, n));
}

function score(g) {
  const baseByRsvp = { no: 70, maybe: 45, accepted: 8, declined: 0 };
  const relBoost = { family: 20, friend: 12, coworker: 6 };
  const friction = clamp(Number(g.friction || 0), 0, 3);

  const raw = (baseByRsvp[g.rsvp] ?? 0) + (relBoost[g.rel] ?? 0) - friction * 4;
  return clamp(Math.round(raw), 0, 100);
}

function relLabel(v) {
  return v === "family" ? "Family" : v === "friend" ? "Friend" : "Coworker";
}

function rsvpLabel(v) {
  return v === "no" ? "No response" : v === "maybe" ? "Maybe" : v === "accepted" ? "Accepted" : "Declined";
}

function draftMessage(g) {
  const name = (g.name || "").trim() || "OO";
  const rel = g.rel;
  const rsvp = g.rsvp;
  const friction = clamp(Number(g.friction || 0), 0, 3);

  const opener = rel === "family" ? `${name} ${""}` : `${name}님`;
  const polite = "안녕하세요";
  const softener = friction >= 2 ? "혹시 바쁘실까봐 조심스레 연락드려요." : "잠깐 확인 부탁드려요.";

  if (rsvp === "accepted") {
    return `${polite}, ${opener}!\n참석한다고 말씀해주셔서 정말 감사합니다.\n혹시 동반 여부나 식사 관련 요청사항이 있으시면 편하게 알려주세요 🙂\n(필요 없으시면 이 메시지 무시하셔도 됩니다!)`;
  }
  if (rsvp === "declined") {
    return `${polite}, ${opener}.\n답장 주셔서 감사해요. 참석이 어렵다고 하셔서 일정 반영해둘게요.\n다음에 꼭 뵈어요!`;
  }
  if (rsvp === "maybe") {
    return `${polite}, ${opener}.\n결혼식 참석 여부를 아직 고민 중이신 것 같아 일정 확인 겸 연락드렸어요.\n가능하시면 ${softener}\n(간단히 “참석/불참/미정” 중 하나로만 답 주셔도 됩니다!)`;
  }
  // no response
  return `${polite}, ${opener}.\n결혼식 RSVP 확인차 연락드렸어요.\n가능하시면 ${softener}\n“참석/불참/미정” 중 편한 걸로 답 주시면 감사하겠습니다!`;
}

function render() {
  const withScores = guests.map((g) => ({ ...g, urgency: score(g) }));
  withScores.sort((a, b) => b.urgency - a.urgency || a.name.localeCompare(b.name));

  tbody.innerHTML = "";

  withScores.forEach((g) => {
    const tr = document.createElement("tr");
    tr.dataset.id = g.id;
    if (g.id === selectedId) tr.classList.add("sel");

    tr.innerHTML = `
      <td><input type="radio" name="sel" ${g.id === selectedId ? "checked" : ""} aria-label="select" /></td>
      <td><input type="text" value="${escapeHtml(g.name)}" aria-label="name" /></td>
      <td>
        <select aria-label="relationship">
          <option value="family" ${g.rel === "family" ? "selected" : ""}>Family</option>
          <option value="friend" ${g.rel === "friend" ? "selected" : ""}>Friend</option>
          <option value="coworker" ${g.rel === "coworker" ? "selected" : ""}>Coworker</option>
        </select>
      </td>
      <td>
        <select aria-label="rsvp">
          <option value="no" ${g.rsvp === "no" ? "selected" : ""}>No response</option>
          <option value="maybe" ${g.rsvp === "maybe" ? "selected" : ""}>Maybe</option>
          <option value="declined" ${g.rsvp === "declined" ? "selected" : ""}>Declined</option>
          <option value="accepted" ${g.rsvp === "accepted" ? "selected" : ""}>Accepted</option>
        </select>
      </td>
      <td class="num"><input type="number" min="0" max="3" value="${g.friction}" aria-label="friction" /></td>
      <td class="num"><strong>${g.urgency}</strong></td>
    `;

    // events
    tr.addEventListener("click", (e) => {
      selectedId = g.id;
      render();
    });

    const inputs = tr.querySelectorAll("input, select");
    const [selRadio, nameInput, relSel, rsvpSel, frictionInput] = inputs;

    selRadio.addEventListener("change", () => {
      selectedId = g.id;
      render();
    });

    nameInput.addEventListener("input", () => updateGuest(g.id, { name: nameInput.value }));
    relSel.addEventListener("change", () => updateGuest(g.id, { rel: relSel.value }));
    rsvpSel.addEventListener("change", () => updateGuest(g.id, { rsvp: rsvpSel.value }));
    frictionInput.addEventListener("input", () => updateGuest(g.id, { friction: clamp(Number(frictionInput.value || 0), 0, 3) }));

    tbody.appendChild(tr);
  });

  if (!selectedId && withScores.length) {
    selectedId = withScores[0].id;
  }

  const sel = withScores.find((g) => g.id === selectedId);
  if (sel) {
    msgMeta.textContent = `${sel.name || "(no name)"} • ${relLabel(sel.rel)} • ${rsvpLabel(sel.rsvp)} • friction ${clamp(Number(sel.friction||0),0,3)} • urgency ${sel.urgency}`;
    msgText.value = draftMessage(sel);
  } else {
    msgMeta.textContent = "—";
    msgText.value = "";
  }
}

function updateGuest(id, patch) {
  guests = guests.map((g) => (g.id === id ? { ...g, ...patch } : g));
  render();
}

function addGuest() {
  const id = String(nextId++);
  guests = [{ id, name: "", rel: "friend", rsvp: "no", friction: 0 }, ...guests];
  selectedId = id;
  render();
}

function escapeHtml(s) {
  return String(s || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

addBtn.addEventListener("click", addGuest);
copyBtn.addEventListener("click", async () => {
  copyState.textContent = "";
  try {
    await navigator.clipboard.writeText(msgText.value || "");
    copyState.textContent = "Copied.";
  } catch {
    copyState.textContent = "Copy failed (browser permission).";
  }
  setTimeout(() => (copyState.textContent = ""), 1200);
});

// default selection
selectedId = guests[0]?.id ?? null;
render();
