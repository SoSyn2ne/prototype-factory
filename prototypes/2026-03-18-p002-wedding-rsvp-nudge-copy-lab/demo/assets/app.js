const $ = (id) => document.getElementById(id);

const elGroup = $("group");
const elChannel = $("channel");
const elClose = $("close");
const elUrg = $("urg");
const elDate = $("date");
const elNotes = $("notes");

const closeOut = $("closeOut");
const urgOut = $("urgOut");
const seedBtn = $("seedBtn");
const seedOut = $("seedOut");
const variants = $("variants");
const toast = $("toast");

let seed = 7;

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

function fmtDate(iso) {
  if (!iso) return "";
  try {
    const d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  } catch {
    return iso;
  }
}

function pick(arr, t) {
  // deterministic pseudo-random pick
  const i = Math.abs(Math.floor((t * 997 + seed * 37) % arr.length));
  return arr[i];
}

function scoreAB({ closeness, urgency, tone }) {
  const c = clamp(closeness, 0, 100) / 100;
  const u = clamp(urgency, 0, 100) / 100;
  const base = tone === "polite" ? 0.62 : tone === "playful" ? 0.58 : 0.66;
  const lift = 0.18 * u + 0.1 * c;
  const variance = ((seed % 11) - 5) * 0.004;
  return Math.round(clamp((base + lift + variance) * 100, 0, 100));
}

function buildMessage({ group, channel, closeness, urgency, dateIso, notes, tone }) {
  const dateStr = fmtDate(dateIso);

  const g = {
    family: { addr: "Hi!", end: "Thank you 🙏" },
    friends: { addr: "Hey!", end: "Thanks!!" },
    coworkers: { addr: "Hello!", end: "Thank you." },
  }[group];

  const c = clamp(closeness, 0, 100);
  const u = clamp(urgency, 0, 100);

  const formal = c < 35 || group === "coworkers";
  const veryUrgent = u > 75;

  const channelHint = channel === "email" ? "(quick reply is fine)" : channel === "sms" ? "(text back is fine)" : "";

  const openerPool = tone === "polite"
    ? ["Hope you’re doing well.", "Sorry to bother you.", "Just a quick check-in."]
    : tone === "playful"
      ? ["Quick ping 😄", "Tiny nudge!", "We’re doing the headcount dance 💃"]
      : ["Quick check:", "Need to lock the headcount.", "Checking in before we finalize." ];

  const askPool = tone === "polite"
    ? ["Could you please let us know your RSVP?", "Would you mind confirming if you can make it?", "Can you please confirm your attendance?"]
    : tone === "playful"
      ? ["Can you hit us with a yes/no RSVP?", "Are you in? 😄", "Can you drop a quick RSVP?" ]
      : ["Please RSVP yes/no.", "Reply with YES/NO.", "Please confirm: coming or not." ];

  const deadlinePool = veryUrgent
    ? ["We need to finalize today if possible.", "If you can, please reply ASAP.", "Could you reply in the next few hours?"]
    : ["By this weekend would be great.", "By Friday would help a lot.", "In the next couple days would be perfect."];

  const dateLine = dateStr ? `Wedding date: ${dateStr}.` : "";

  const softener = tone === "polite"
    ? (formal ? "No worries either way." : "No worries at all if you can’t!")
    : tone === "playful"
      ? "No pressure — we just need the numbers 🙂"
      : "No pressure — just confirming.";

  const extra = notes?.trim() ? `Note: ${notes.trim()}` : "";

  const parts = [
    g.addr,
    pick(openerPool, c + u),
    dateLine,
    `${pick(askPool, u + c)} ${channelHint}`.trim(),
    pick(deadlinePool, u * 1.7),
    softener,
    extra,
    g.end,
  ].filter(Boolean);

  // join with channel-friendly spacing
  const sep = channel === "email" ? "\n\n" : "\n";
  return parts.join(sep);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // fallback
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    try {
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch {
      document.body.removeChild(ta);
      return false;
    }
  }
}

function showToast(msg) {
  toast.textContent = msg;
  setTimeout(() => {
    if (toast.textContent === msg) toast.textContent = "";
  }, 1600);
}

function render() {
  const group = elGroup.value;
  const channel = elChannel.value;
  const closeness = Number(elClose.value);
  const urgency = Number(elUrg.value);
  const dateIso = elDate.value;
  const notes = elNotes.value;

  closeOut.textContent = `${closeness}`;
  urgOut.textContent = `${urgency}`;
  seedOut.textContent = `seed: ${seed}`;

  const tones = [
    { key: "polite", label: "Polite" },
    { key: "playful", label: "Playful" },
    { key: "direct", label: "Direct" },
  ];

  variants.innerHTML = tones
    .map((t) => {
      const text = buildMessage({ group, channel, closeness, urgency, dateIso, notes, tone: t.key });
      const s = scoreAB({ closeness, urgency, tone: t.key });
      const id = `msg-${t.key}`;
      return `
        <div class="variant">
          <div class="head">
            <div class="tone">${t.label}</div>
            <div class="score">A/B score: <b>${s}</b></div>
          </div>
          <pre id="${id}"></pre>
          <div class="actions">
            <button class="btn" type="button" data-copy="${id}">Copy</button>
          </div>
        </div>
      `;
    })
    .join("");

  tones.forEach((t) => {
    const id = `msg-${t.key}`;
    $(id).textContent = buildMessage({ group, channel, closeness, urgency, dateIso, notes, tone: t.key });
  });
}

[elGroup, elChannel, elClose, elUrg, elDate, elNotes].forEach((el) => {
  el.addEventListener("input", render);
  el.addEventListener("change", render);
});

seedBtn.addEventListener("click", () => {
  seed = (seed * 9301 + 49297) % 233280;
  seed = (seed % 97) + 3;
  render();
  showToast("Tone seed randomized");
});

variants.addEventListener("click", async (e) => {
  const btn = e.target.closest("button[data-copy]");
  if (!btn) return;
  const id = btn.getAttribute("data-copy");
  const text = $(id)?.textContent || "";
  const ok = await copyText(text);
  showToast(ok ? "Copied" : "Copy failed — select text manually");
});

// default date: 30 days from now
(() => {
  const d = new Date();
  d.setDate(d.getDate() + 30);
  const iso = d.toISOString().slice(0, 10);
  elDate.value = iso;
})();

render();
