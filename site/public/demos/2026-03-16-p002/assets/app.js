const PROMPTS = {
  hook: [
    "I knew {A} and {B} were inevitable the moment…",
    "If you’ve ever seen {A} talk about {B}, you’ve seen real joy.",
    "Tonight isn’t just a wedding—it's a celebration of a partnership that makes everyone around them better.",
  ],
  story: [
    "One of my favorite moments was when {A}… and {B}…",
    "I’ll never forget the day {A} called me and said… and then {B}…",
    "The thing I admire most is how they handle the small stuff—like when…",
  ],
  wish: [
    "My wish is that you keep choosing each other on the ordinary days.",
    "May your home be loud with laughter and calm when you need it.",
    "May you stay teammates—curious, kind, and a little ridiculous together.",
  ],
};

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function wordsCount(text) {
  return text
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

function estimateSecondsFromWords(words) {
  // Very rough: ~140 wpm speaking pace.
  return Math.round((words / 140) * 60);
}

function applyTone(tone, base) {
  const guardrail =
    tone === "funny"
      ? "Keep jokes safe: no roasts, exes, money, or anything the couple wouldn’t want recorded."
      : tone === "formal"
      ? "Keep it formal: short sentences, minimal slang, emphasize gratitude and wishes."
      : tone === "light"
      ? "Keep it upbeat: smile while speaking; use one playful detail, then land the sincere wish."
      : "Keep it warm: specific memory, gratitude, and a clear blessing/wish.";

  const opener =
    tone === "formal"
      ? "Good evening everyone. Thank you for being here to celebrate {A} and {B}."
      : tone === "funny"
      ? "Hi everyone—I'll be brief, heartfelt, and only *slightly* embarrassing."
      : tone === "light"
      ? "Hi everyone—what a night. You can feel how loved these two are."
      : "Hi everyone. I’m grateful to share a few words about {A} and {B}.";

  return { guardrail, opener: opener.replaceAll("{A}", base.A).replaceAll("{B}", base.B) };
}

function renderOutline({ A, B, relationship, tone, storyText, includeThanks, targetSeconds, picks }) {
  const relLine =
    relationship === "bestman"
      ? `For those I haven’t met, I’m the best man, and I’ve had a front-row seat to {A} at their best.`
      : relationship === "maidofhonor"
      ? `For those I haven’t met, I’m the maid of honor, and I’ve known {A} long enough to recognize true love when I see it.`
      : relationship === "sibling"
      ? `I’m {A}’s sibling, which means it’s my job to love them and to keep them humble.`
      : relationship === "parent"
      ? `I’m one of the parents, and tonight is one of those moments you remember forever.`
      : relationship === "coworker"
      ? `I’m a coworker-friend, and even at work you can tell what kind of person {A} is—and why {B} is lucky.`
      : `I’m a friend, and I’m honored to celebrate {A} and {B}.`;

  const { guardrail, opener } = applyTone(tone, { A, B });

  const storyBlock = storyText.trim()
    ? storyText.trim()
    : pick(PROMPTS.story).replaceAll("{A}", A).replaceAll("{B}", B);

  const hook = picks.hook.replaceAll("{A}", A).replaceAll("{B}", B);
  const wish = picks.wish.replaceAll("{A}", A).replaceAll("{B}", B);

  const thanks = includeThanks
    ? "A quick thank-you to the families and everyone who made tonight possible—this room is full of love."
    : "";

  const close = `Please raise a glass to {A} and {B}: may your life together be kind, brave, and full of laughter.`
    .replaceAll("{A}", A)
    .replaceAll("{B}", B);

  const paragraphs = [
    opener,
    relLine.replaceAll("{A}", A).replaceAll("{B}", B),
    hook,
    `One story: ${storyBlock}`,
    thanks,
    wish,
    close,
  ].filter(Boolean);

  const fullText = paragraphs.join("\n\n");
  const wc = wordsCount(fullText);
  const est = estimateSecondsFromWords(wc);

  const pacingNote =
    est > targetSeconds + 10
      ? `You’re long by ~${est - targetSeconds}s. Cut the story in half.`
      : est < targetSeconds - 10
      ? `You’re short by ~${targetSeconds - est}s. Add one vivid detail to the story.`
      : "You’re on pace.";

  return {
    guardrail,
    fullText,
    html: `
      <h3>Structure</h3>
      <ol>
        <li><strong>Opener</strong> (1 sentence)</li>
        <li><strong>Who you are</strong> (1–2 sentences)</li>
        <li><strong>Hook</strong> (1 sentence)</li>
        <li><strong>One specific story</strong> (15–25 seconds)</li>
        <li><strong>Gratitude</strong> (optional, 1 sentence)</li>
        <li><strong>Wish</strong> (1–2 sentences)</li>
        <li><strong>Close</strong> (raise a glass)</li>
      </ol>
      <h3>Draft (speakable)</h3>
      ${paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join("")}
      <p><strong>Pacing note:</strong> ${escapeHtml(pacingNote)}</p>
    `,
    wc,
    est,
  };
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatClock(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function main() {
  const form = document.getElementById("toastForm");
  const estimate = document.getElementById("estimate");
  const guardrail = document.getElementById("guardrail");
  const outline = document.getElementById("outline");
  const toast = document.getElementById("toast");
  const copyBtn = document.getElementById("copyBtn");
  const teleBtn = document.getElementById("teleBtn");
  const shuffleBtn = document.getElementById("shuffleBtn");
  const generateBtn = document.getElementById("generateBtn");

  const tele = document.getElementById("tele");
  const teleBody = document.getElementById("teleBody");
  const teleClose = document.getElementById("teleClose");
  const teleBigger = document.getElementById("teleBigger");
  const teleSmaller = document.getElementById("teleSmaller");

  const clock = document.getElementById("clock");
  const startBtn = document.getElementById("startBtn");
  const pauseBtn = document.getElementById("pauseBtn");
  const resetBtn = document.getElementById("resetBtn");

  let picks = {
    hook: pick(PROMPTS.hook),
    wish: pick(PROMPTS.wish),
  };

  let last = { fullText: "" };

  let t = 0;
  let timer = null;

  function getData() {
    const fd = new FormData(form);
    const A = (fd.get("coupleA") || "Partner A").toString().trim() || "Partner A";
    const B = (fd.get("coupleB") || "Partner B").toString().trim() || "Partner B";
    return {
      A,
      B,
      relationship: (fd.get("relationship") || "friend").toString(),
      tone: (fd.get("tone") || "warm").toString(),
      storyText: (fd.get("story") || "").toString(),
      includeThanks: Boolean(fd.get("includeThanks")),
      targetSeconds: Number(fd.get("seconds") || 75),
    };
  }

  function showToast(msg) {
    toast.hidden = false;
    toast.textContent = msg;
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => {
      toast.hidden = true;
    }, 2800);
  }

  function render() {
    const data = getData();
    const out = renderOutline({ ...data, picks });

    outline.innerHTML = out.html;
    estimate.textContent = `Estimated: ${out.est}s (~${out.wc} words)`;
    guardrail.textContent = `Guardrail: ${out.guardrail}`;

    last = out;
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(last.fullText);
      showToast("Copied toast draft to clipboard.");
    } catch {
      showToast("Clipboard blocked. Select and copy from the draft.");
    }
  }

  function openTele() {
    tele.hidden = false;
    teleBody.innerHTML = last.fullText
      .split(/\n\n+/)
      .map((p) => `<p>${escapeHtml(p)}</p>`)
      .join("");
    teleClose.focus();
  }

  function closeTele() {
    tele.hidden = true;
    teleBtn.focus();
  }

  function shuffle() {
    picks = { hook: pick(PROMPTS.hook), wish: pick(PROMPTS.wish) };
    render();
    showToast("Shuffled prompts.");
  }

  function setClock() {
    clock.textContent = formatClock(t);
    const target = Number(new FormData(form).get("seconds") || 75);
    // Visual cue by color: under, near, over.
    clock.style.color = t > target ? "#fb7185" : t >= target - 10 ? "#fbbf24" : "#111827";
  }

  function start() {
    if (timer) return;
    timer = window.setInterval(() => {
      t += 1;
      setClock();
    }, 1000);
  }

  function pause() {
    if (!timer) return;
    window.clearInterval(timer);
    timer = null;
  }

  function reset() {
    pause();
    t = 0;
    setClock();
  }

  copyBtn.addEventListener("click", copy);
  teleBtn.addEventListener("click", openTele);
  teleClose.addEventListener("click", closeTele);
  tele.addEventListener("click", (e) => {
    if (e.target === tele) closeTele();
  });

  teleBigger.addEventListener("click", () => {
    const cur = Number.parseFloat(getComputedStyle(teleBody).fontSize);
    teleBody.style.fontSize = `${clamp(cur + 4, 22, 54)}px`;
  });

  teleSmaller.addEventListener("click", () => {
    const cur = Number.parseFloat(getComputedStyle(teleBody).fontSize);
    teleBody.style.fontSize = `${clamp(cur - 4, 22, 54)}px`;
  });

  shuffleBtn.addEventListener("click", shuffle);
  generateBtn.addEventListener("click", () => {
    render();
    showToast("Generated outline.");
  });

  form.addEventListener("input", () => {
    render();
    setClock();
  });

  startBtn.addEventListener("click", start);
  pauseBtn.addEventListener("click", pause);
  resetBtn.addEventListener("click", reset);

  render();
  setClock();
}

main();
