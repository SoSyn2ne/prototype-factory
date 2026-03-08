function $(id) {
  return document.getElementById(id);
}

const els = {
  product: $("product"),
  audience: $("audience"),
  valueProp: $("valueProp"),
  tone: $("tone"),
  forbidden: $("forbidden"),
  maxLen: $("maxLen"),
  tabHeadline: $("tabHeadline"),
  tabPrimary: $("tabPrimary"),
  panelHeadline: $("panelHeadline"),
  panelPrimary: $("panelPrimary"),
  btnGenerate: $("btnGenerate"),
  btnExport: $("btnExport"),
  toast: $("toast"),
};

let activeTab = "headline"; // headline | primary
let lastGenerated = { headline: [], primary: [] };

function showToast(text) {
  els.toast.textContent = text;
  els.toast.hidden = false;
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => {
    els.toast.hidden = true;
  }, 1200);
}

function normList(raw) {
  return String(raw || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => s.toLowerCase());
}

function tokenize(raw) {
  return String(raw || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .map((t) => t.trim())
    .filter(Boolean);
}

function enforceForbidden(text, forbidden) {
  let out = text;
  for (const w of forbidden) {
    const re = new RegExp(`\\b${escapeRegExp(w)}\\b`, "gi");
    out = out.replace(re, "");
  }
  return out.replace(/\s{2,}/g, " ").trim();
}

function clipToMax(text, maxLen) {
  const t = text.trim();
  if (t.length <= maxLen) return t;
  // Prefer clipping at word boundary.
  const clipped = t.slice(0, Math.max(0, maxLen - 1));
  const lastSpace = clipped.lastIndexOf(" ");
  const cut = lastSpace > 12 ? clipped.slice(0, lastSpace) : clipped;
  return cut.trimEnd() + "…";
}

function escapeRegExp(s) {
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function scoreVariant(text, ctx) {
  const maxLen = ctx.maxLen;
  const len = text.length;

  // lengthFit: closer to maxLen is better, with penalty if too short.
  const ratio = Math.min(1, len / Math.max(1, maxLen));
  const lengthFit = Math.round(100 * (0.55 + 0.45 * ratio));

  const toks = tokenize(text);
  const prod = tokenize(ctx.product);
  const vp = tokenize(ctx.valueProp).slice(0, 6);

  let clarity = 40;
  if (ctx.product && prod.some((t) => toks.includes(t))) clarity += 25;
  if (ctx.valueProp && vp.some((t) => toks.includes(t))) clarity += 25;
  if (ctx.audience && tokenize(ctx.audience).some((t) => toks.includes(t))) clarity += 10;
  clarity = Math.max(0, Math.min(100, clarity));

  const hooks = ["why", "stop", "before", "after", "new", "faster", "without", "in", "days", "minutes", "?", "3", "5", "7", "10"]; 
  let curiosity = 35;
  for (const h of hooks) {
    if (h === "?" ? text.includes("?") : toks.includes(h)) curiosity += 8;
  }
  curiosity = Math.max(0, Math.min(100, curiosity));

  const overall = Math.round(lengthFit * 0.35 + clarity * 0.4 + curiosity * 0.25);
  return { lengthFit, clarity, curiosity, overall };
}

function templatesFor(tab, ctx) {
  const p = ctx.product || "Your product";
  const a = ctx.audience || "your team";
  const vp = ctx.valueProp || "get results faster";

  const tone = ctx.tone;
  const t = {
    clear: {
      lead: ["Get", "Build", "Ship", "Turn", "Fix", "Stop"],
      vibe: ["fast", "clean", "simple", "reliable"],
    },
    playful: {
      lead: ["Meet", "Say hi to", "Finally,"],
      vibe: ["delightful", "no-drama", "lightweight"],
    },
    premium: {
      lead: ["Upgrade to", "A better way to", "Designed for"],
      vibe: ["premium", "polished", "confident"],
    },
    urgent: {
      lead: ["Stop", "Don’t", "Before you"],
      vibe: ["today", "now", "this week"],
    },
    curious: {
      lead: ["Why", "What if", "The secret to"],
      vibe: ["surprising", "simple", "unfair"],
    },
  }[tone] || {
    lead: ["Get", "Build"],
    vibe: ["fast"],
  };

  if (tab === "headline") {
    return [
      `${t.lead[0]} ${vp}`,
      `${p}: ${vp}`,
      `${vp} for ${a}`,
      `Stop wasting time — ${vp}`,
      `${vp} (without the chaos)`,
      `The ${t.vibe[0]} way to ${vp}`,
      `From “busy” to “done”: ${p}`,
      `${vp} in minutes`,
      `Before you ${vp.split(" ")[0]}… try ${p}`,
      `${p} for ${a} who need ${vp}`,
      `3 steps to ${vp}`,
      `Ready to ${vp}?
`,
    ];
  }

  // primary text
  return [
    `${a} don’t need more tabs. They need ${vp}. ${p} helps you do it with a simple workflow you can repeat every day.`,
    `If you’re ${a}, you’ve felt this: you plan, you context-switch, you lose momentum. ${p} keeps you focused so you can ${vp}.`,
    `A ${t.vibe[0]} setup: tell ${p} what you’re trying to achieve, and it turns scattered work into a clear next step. ${vp}.`,
    `Stop overthinking. Start shipping. ${p} is built for ${a} who want to ${vp} without babysitting tools.`,
    `What would change if you could ${vp} consistently? ${p} makes it easier to repeat the wins (and avoid the chaos).`,
    `No templates that box you in. No "enterprise" bloat. Just ${p} + a tight loop: plan → do → review → repeat.`,
    `For ${a}: ${p} turns your value into action. ${vp}. Keep the signal, drop the noise.`,
    `Make progress visible. ${p} helps you pick the next best action so you can ${vp} with less stress.`,
    `The fastest path is a tighter loop. ${p} helps ${a} shorten the distance between idea and outcome: ${vp}.`,
    `Use ${p} for a week. If you’re not moving faster toward ${vp}, you’ll know exactly what’s missing.`,
    `Here’s the goal: ${vp}. Here’s the system: ${p}. Built for ${a} who are done with busywork.`,
    `Small budgets love clear bets. ${p} keeps you aligned so your time goes into the work that actually makes ${vp} happen.`,
  ];
}

function buildVariants(tab) {
  const ctx = {
    product: els.product.value.trim(),
    audience: els.audience.value.trim(),
    valueProp: els.valueProp.value.trim(),
    tone: els.tone.value,
    forbidden: normList(els.forbidden.value),
    maxLen: Math.max(10, Math.min(200, Number(els.maxLen.value || 40))),
  };

  const base = templatesFor(tab, ctx);

  const variants = base
    .map((s) => s.replace(/\s+/g, " ").trim())
    .map((s) => enforceForbidden(s, ctx.forbidden))
    .map((s) => clipToMax(s, ctx.maxLen))
    .filter(Boolean)
    .slice(0, 12)
    .map((text) => ({ text, scores: scoreVariant(text, ctx) }));

  // If forbidden words removed too much, ensure we still have 12 by duplicating with slight edits.
  while (variants.length < 12) {
    const seed = variants[variants.length % Math.max(1, variants.length)]?.text || `${ctx.product}: ${ctx.valueProp}`;
    const plus = clipToMax(enforceForbidden(seed + " — now", ctx.forbidden), ctx.maxLen);
    variants.push({ text: plus, scores: scoreVariant(plus, ctx) });
  }

  return variants;
}

function scoreClass(v) {
  if (v >= 80) return "good";
  if (v >= 60) return "warn";
  return "bad";
}

function render(tab, variants) {
  const container = tab === "headline" ? els.panelHeadline : els.panelPrimary;
  container.innerHTML = "";

  const wrap = document.createElement("div");
  wrap.className = "variants";

  variants.forEach((item, idx) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "variant";
    card.setAttribute("aria-label", `Copy variant ${idx + 1}`);

    const text = document.createElement("div");
    text.className = "variant__text";
    text.textContent = item.text;

    const scores = document.createElement("div");
    scores.className = "scores";

    const fields = [
      ["Overall", item.scores.overall],
      ["Length fit", item.scores.lengthFit],
      ["Clarity", item.scores.clarity],
      ["Curiosity", item.scores.curiosity],
    ];

    for (const [label, val] of fields) {
      const box = document.createElement("div");
      box.className = "score";

      const l = document.createElement("div");
      l.className = "label";
      l.textContent = label;

      const v = document.createElement("div");
      v.className = `value ${scoreClass(val)}`;
      v.textContent = String(val);

      box.appendChild(l);
      box.appendChild(v);
      scores.appendChild(box);
    }

    card.appendChild(text);
    card.appendChild(scores);

    card.addEventListener("click", async () => {
      await navigator.clipboard.writeText(item.text);
      showToast("Copied");
    });

    wrap.appendChild(card);
  });

  container.appendChild(wrap);
}

function setTab(tab) {
  activeTab = tab;
  const isHeadline = tab === "headline";

  els.tabHeadline.setAttribute("aria-selected", isHeadline ? "true" : "false");
  els.tabPrimary.setAttribute("aria-selected", isHeadline ? "false" : "true");

  els.panelHeadline.hidden = !isHeadline;
  els.panelPrimary.hidden = isHeadline;
}

function generateAll() {
  const headline = buildVariants("headline");
  const primary = buildVariants("primary");
  lastGenerated = { headline, primary };
  render("headline", headline);
  render("primary", primary);
  showToast("Generated");
}

function toCsv(tab, items) {
  const header = ["type", "variant", "overall", "lengthFit", "clarity", "curiosity"];
  const rows = items.map((it, i) => [
    tab,
    it.text,
    it.scores.overall,
    it.scores.lengthFit,
    it.scores.clarity,
    it.scores.curiosity,
  ]);

  const all = [header, ...rows]
    .map((r) => r.map((c) => csvCell(c)).join(","))
    .join("\n");

  return all;
}

function csvCell(value) {
  const s = String(value ?? "");
  const needs = /[\n",]/.test(s);
  if (!needs) return s;
  return '"' + s.replace(/"/g, '""') + '"';
}

els.tabHeadline.addEventListener("click", () => setTab("headline"));
els.tabPrimary.addEventListener("click", () => setTab("primary"));
els.btnGenerate.addEventListener("click", generateAll);

els.btnExport.addEventListener("click", async () => {
  const items = [...lastGenerated.headline.map((x) => ({ ...x, _t: "headline" })), ...lastGenerated.primary.map((x) => ({ ...x, _t: "primary" }))];
  if (!items.length) {
    showToast("Nothing to export");
    return;
  }
  const csv = [
    "type,variant,overall,lengthFit,clarity,curiosity",
    ...items.map((it) => [it._t, csvCell(it.text), it.scores.overall, it.scores.lengthFit, it.scores.clarity, it.scores.curiosity].join(",")),
  ].join("\n");

  await navigator.clipboard.writeText(csv);
  showToast("CSV copied");
});

// Seed defaults for a nicer first impression.
els.product.value = "OrbitNotes";
els.audience.value = "busy founders";
els.valueProp.value = "turn scattered notes into weekly action plans";
els.forbidden.value = "free, cheap, guaranteed";

setTab("headline");
generateAll();
