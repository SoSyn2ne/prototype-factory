#!/usr/bin/env node

import fs from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PROTOTYPES_DIR = path.join(ROOT, "prototypes");
const DATE = process.argv[2] || new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Seoul" });

const profileThemes = {
  "calm-consumer": {
    bg: "#f6f8f5",
    ink: "#17211f",
    muted: "#61706b",
    panel: "#ffffff",
    soft: "#e7efeb",
    line: "#cbd8d1",
    accent: "#147a73",
    warn: "#b25b2a",
  },
  "financial-analyst": {
    bg: "#f4f5f2",
    ink: "#15191d",
    muted: "#606974",
    panel: "#ffffff",
    soft: "#e6e9ed",
    line: "#c6cbd2",
    accent: "#245f96",
    warn: "#a33d35",
  },
  "field-ops": {
    bg: "#f7f7f1",
    ink: "#18201b",
    muted: "#5d685f",
    panel: "#ffffff",
    soft: "#e9eddd",
    line: "#cdd5c2",
    accent: "#2f6d3b",
    warn: "#b64f2a",
  },
  "operator-dense": {
    bg: "#111418",
    ink: "#edf2f0",
    muted: "#a6b0b4",
    panel: "#1b2027",
    soft: "#252d36",
    line: "#3a4651",
    accent: "#d79a2b",
    warn: "#e05f4f",
  },
  "premium-editorial": {
    bg: "#f7f3ee",
    ink: "#1f1c19",
    muted: "#6e6257",
    panel: "#fffaf4",
    soft: "#ebe1d5",
    line: "#d8cabd",
    accent: "#111111",
    warn: "#9f4635",
  },
  "playful-experimental": {
    bg: "#101017",
    ink: "#f8f7ff",
    muted: "#b9b4ca",
    panel: "#1c1b27",
    soft: "#29263a",
    line: "#47415e",
    accent: "#ff6f61",
    warn: "#ffd166",
  },
};

const demoSpecs = {
  "2026-07-01-p001": {
    mechanic: "Appeal Packet Builder",
    metric: "$25,000",
    metricLabel: "claim at stake",
    action: "Build insurer letter",
    sections: ["Claim denial intake", "Vet timeline builder", "Preexisting clause explainer", "Missing-record checklist", "Appeal letter preview"],
    rows: ["Hospital note flagged vague symptom", "Vet record requested from 2024 visit", "Clause matched: curable condition exception", "Appeal draft ready for review"],
    artifact: "PDF-style appeal packet",
  },
  "2026-07-01-p002": {
    mechanic: "Comp Duel",
    metric: "$2,184",
    metricLabel: "annual savings angle",
    action: "Draft counteroffer",
    sections: ["Renewal increase intake", "Comparable rent evidence", "Vacancy-cost counter", "Tone-controlled email", "Savings scoreboard"],
    rows: ["Same floor unit listed $180 lower", "Move-in special: 6 weeks free", "Good tenant proof attached", "Calm counteroffer ready"],
    artifact: "Negotiation email and comp cards",
  },
  "2026-07-01-p003": {
    mechanic: "Shift Baton",
    metric: "4/5",
    metricLabel: "care tasks confirmed",
    action: "Hand off shift",
    sections: ["Today care baton", "Medication and meal checkoff", "Exception photo log", "Next caregiver briefing", "Monthly cost snapshot"],
    rows: ["8 AM meds confirmed", "Lunch appetite low", "Walker path photo added", "Next shift alert pinned"],
    artifact: "Shift handoff report",
  },
  "2026-07-01-p004": {
    mechanic: "Criteria Matcher",
    metric: "12",
    metricLabel: "appeal requests queued",
    action: "Send patient reply",
    sections: ["Patient request queue", "Plan criteria matcher", "Appeal viability badge", "Template library", "Documentation checklist"],
    rows: ["BMI-only request likely denied", "Diabetes criteria matched", "Prior auth data missing", "Chart-note snippet generated"],
    artifact: "Patient message and chart snippet",
  },
  "2026-07-01-p005": {
    mechanic: "Boundary Receipt Room",
    metric: "86%",
    metricLabel: "evidence completeness",
    action: "Export dispute packet",
    sections: ["Order risk intake", "Approval milestones", "Delivery proof vault", "Buyer boundary receipt", "Dispute evidence export"],
    rows: ["Custom spec approved", "Change request timestamped", "UPS delivery proof saved", "Chargeback packet assembled"],
    artifact: "Buyer receipt and evidence packet",
  },
  "2026-07-01-p006": {
    mechanic: "Rights Ledger",
    metric: "37",
    metricLabel: "works cataloged",
    action: "Draft notice",
    sections: ["Work catalog intake", "Consent status timeline", "AI-use evidence drawer", "License ask calculator", "Takedown notice draft"],
    rows: ["Voice samples marked no-license", "Article archive scanned", "Community posts require consent", "License ask calculated"],
    artifact: "Consent ledger and notice draft",
  },
  "2026-07-01-p007": {
    mechanic: "Offline Route Planner",
    metric: "7 days",
    metricLabel: "escape map",
    action: "Make route poster",
    sections: ["Burnout intake quiz", "Offline venue map", "Conversation opener cards", "Budget slider", "Escape plan poster"],
    rows: ["Gym class matched", "Low-pressure event selected", "Opener card unlocked", "Saturday route poster ready"],
    artifact: "Shareable offline dating map",
  },
  "2026-07-01-p008": {
    mechanic: "Bot Maze Escape",
    metric: "03:40",
    metricLabel: "time to human script",
    action: "Play escape route",
    sections: ["Scenario picker", "Trigger phrase cards", "Evidence inventory", "Escalation timer", "Victory script"],
    rows: ["Refund maze selected", "Trigger phrase: cancel", "Order evidence attached", "Human-agent script unlocked"],
    artifact: "Escalation path card",
  },
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function profileFromTags(tags) {
  return tags.find((tag) => profileThemes[tag]) || "operator-dense";
}

function renderHtml(meta, spec, profile) {
  const theme = profileThemes[profile];
  const tags = meta.tags.slice(0, 5).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");
  const sectionTabs = spec.sections.map((item, index) => `<button class="${index === 0 ? "active" : ""}">${escapeHtml(item)}</button>`).join("");
  const rows = spec.rows.map((row, index) => `
    <li>
      <strong>${String(index + 1).padStart(2, "0")}</strong>
      <span>${escapeHtml(row)}</span>
      <em>${index === spec.rows.length - 1 ? "ready" : index === 1 ? "watch" : "done"}</em>
    </li>
  `).join("");
  const sectionCards = spec.sections.map((item, index) => `
    <article>
      <small>${escapeHtml(spec.mechanic)} ${index + 1}</small>
      <h3>${escapeHtml(item)}</h3>
      <p>${escapeHtml(index === spec.sections.length - 1 ? `Output: ${spec.artifact}` : meta.oneLiner)}</p>
    </article>
  `).join("");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(meta.title)} Demo</title>
    <style>
      :root {
        color-scheme: ${profile === "operator-dense" || profile === "playful-experimental" ? "dark" : "light"};
        --bg: ${theme.bg};
        --ink: ${theme.ink};
        --muted: ${theme.muted};
        --panel: ${theme.panel};
        --soft: ${theme.soft};
        --line: ${theme.line};
        --accent: ${theme.accent};
        --warn: ${theme.warn};
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }
      * { box-sizing: border-box; }
      body { margin: 0; min-height: 100vh; background: var(--bg); color: var(--ink); }
      button, input, textarea { font: inherit; }
      .topbar { position: sticky; top: 0; z-index: 2; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 14px clamp(18px, 4vw, 54px); border-bottom: 1px solid var(--line); background: color-mix(in srgb, var(--bg) 88%, var(--panel)); }
      .brand { display: flex; flex-direction: column; gap: 2px; }
      .brand strong { font-size: 17px; }
      .brand small, .muted { color: var(--muted); }
      .pillrow { display: flex; flex-wrap: wrap; gap: 8px; }
      .pillrow span, .status, .tabs button { border: 1px solid var(--line); background: var(--soft); color: var(--ink); border-radius: 999px; padding: 7px 10px; font-size: 12px; font-weight: 700; }
      .shell { width: min(1180px, calc(100% - 28px)); margin: 0 auto; padding: 28px 0 42px; display: grid; gap: 18px; }
      .hero { display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(280px, .75fr); gap: 18px; align-items: stretch; }
      .panel, .metric, .workflow article, .output { border: 1px solid var(--line); background: var(--panel); border-radius: 8px; }
      .panel { padding: clamp(18px, 3vw, 30px); }
      h1 { margin: 0; font-size: clamp(28px, 3.8vw, 44px); line-height: 1.08; letter-spacing: 0; max-width: 850px; }
      .lead { margin: 16px 0 0; color: var(--muted); font-size: 18px; line-height: 1.55; max-width: 720px; }
      .hero-actions { margin-top: 24px; display: flex; flex-wrap: wrap; gap: 10px; }
      .primary { border: 0; background: var(--accent); color: ${profile === "premium-editorial" ? "#fff" : "#101014"}; border-radius: 8px; padding: 12px 16px; font-weight: 800; cursor: pointer; }
      .secondary { border: 1px solid var(--line); background: transparent; color: var(--ink); border-radius: 8px; padding: 11px 15px; font-weight: 750; cursor: pointer; }
      .metric { padding: 20px; display: grid; align-content: space-between; min-height: 230px; }
      .metric .value { font-size: clamp(42px, 8vw, 82px); line-height: .9; font-weight: 900; color: var(--accent); }
      .metric p { margin: 8px 0 0; color: var(--muted); }
      .tabs { display: flex; gap: 8px; overflow-x: auto; padding-bottom: 2px; }
      .tabs button { white-space: nowrap; cursor: pointer; }
      .tabs button.active { background: var(--accent); color: ${profile === "premium-editorial" ? "#fff" : "#101014"}; border-color: var(--accent); }
      .main-grid { display: grid; grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr); gap: 18px; }
      .queue { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; }
      .queue li { min-height: 58px; border: 1px solid var(--line); background: var(--soft); border-radius: 8px; padding: 12px; display: grid; grid-template-columns: 42px minmax(0, 1fr) auto; gap: 12px; align-items: center; }
      .queue strong { color: var(--accent); font-variant-numeric: tabular-nums; }
      .queue span { line-height: 1.35; }
      .queue em { font-style: normal; color: var(--warn); font-size: 12px; font-weight: 800; text-transform: uppercase; }
      .workflow { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
      .workflow article { padding: 16px; min-height: 150px; }
      .workflow small { display: block; color: var(--accent); font-weight: 850; margin-bottom: 8px; }
      .workflow h3 { margin: 0 0 8px; font-size: 20px; }
      .workflow p { margin: 0; color: var(--muted); line-height: 1.45; }
      .output { padding: 18px; display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 16px; align-items: center; }
      .output h2 { margin: 0 0 6px; font-size: 24px; }
      .output p { margin: 0; color: var(--muted); }
      @media (max-width: 840px) {
        .hero, .main-grid, .output { grid-template-columns: 1fr; }
        .workflow { grid-template-columns: 1fr; }
        .topbar { align-items: flex-start; flex-direction: column; }
      }
    </style>
  </head>
  <body>
    <header class="topbar">
      <div class="brand">
        <strong>${escapeHtml(meta.title)}</strong>
        <small>${escapeHtml(meta.id)} · ${escapeHtml(profile)}</small>
      </div>
      <div class="pillrow">${tags}</div>
    </header>
    <main class="shell">
      <section class="hero">
        <div class="panel">
          <p class="status">${escapeHtml(spec.mechanic)}</p>
          <h1>${escapeHtml(meta.oneLiner)}</h1>
          <p class="lead">${escapeHtml(spec.artifact)}로 바로 이어지는 입력, 판정, 문안 생성 흐름을 한 화면에서 검증합니다.</p>
          <div class="hero-actions">
            <button class="primary">${escapeHtml(spec.action)}</button>
            <button class="secondary">Review evidence</button>
          </div>
        </div>
        <aside class="metric">
          <div>
            <div class="value">${escapeHtml(spec.metric)}</div>
            <p>${escapeHtml(spec.metricLabel)}</p>
          </div>
          <p class="muted">${escapeHtml(meta.title)} keeps the painful decision visible before the user slips back into scattered notes.</p>
        </aside>
      </section>
      <nav class="tabs">${sectionTabs}</nav>
      <section class="main-grid">
        <div class="panel">
          <h2>Live Work Queue</h2>
          <ul class="queue">${rows}</ul>
        </div>
        <div class="workflow">${sectionCards}</div>
      </section>
      <section class="output">
        <div>
          <h2>${escapeHtml(spec.artifact)}</h2>
          <p>The demo preserves the concept intent while Stitch export is unavailable; replace with original Stitch HTML when the export lands.</p>
        </div>
        <button class="primary">Copy final script</button>
      </section>
    </main>
    <script src="./assets/app.js" defer></script>
  </body>
</html>`;
}

function appJs() {
  return `document.querySelectorAll(".tabs button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tabs button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
  });
});

document.querySelectorAll(".primary, .secondary").forEach((button) => {
  button.addEventListener("click", () => {
    button.animate([{ transform: "scale(1)" }, { transform: "scale(.98)" }, { transform: "scale(1)" }], {
      duration: 160,
      easing: "ease-out",
    });
  });
});
`;
}

async function captureScreens(items) {
  const requireFromSite = createRequire(path.join(ROOT, "site", "package.json"));
  const { chromium } = requireFromSite("playwright");
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  for (const item of items) {
    const page = await context.newPage();
    await page.goto(`file://${path.join(item.demoDir, "index.html")}`, { waitUntil: "networkidle" });
    await page.screenshot({ path: path.join(item.demoDir, "screen.png"), type: "png" });
    await page.close();
    console.log(`Generated demo: ${item.folderName}`);
  }
  await context.close();
  await browser.close();
}

const folders = fs.readdirSync(PROTOTYPES_DIR, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && entry.name.startsWith(`${DATE}-p`))
  .map((entry) => entry.name)
  .sort((a, b) => a.localeCompare(b));

const generated = [];
for (const folderName of folders) {
  const protoDir = path.join(PROTOTYPES_DIR, folderName);
  const metaPath = path.join(protoDir, "meta.json");
  if (!fs.existsSync(metaPath)) continue;
  const meta = readJson(metaPath);
  const spec = demoSpecs[meta.id];
  if (!spec) continue;
  const profile = profileFromTags(meta.tags || []);
  const demoDir = path.join(protoDir, "demo");
  const assetsDir = path.join(demoDir, "assets");
  fs.rmSync(demoDir, { recursive: true, force: true });
  fs.mkdirSync(assetsDir, { recursive: true });
  fs.writeFileSync(path.join(demoDir, "index.html"), renderHtml(meta, spec, profile), "utf8");
  fs.writeFileSync(path.join(assetsDir, "app.js"), appJs(), "utf8");
  generated.push({ folderName, demoDir });
}

await captureScreens(generated);
console.log(`Summary: date=${DATE} generated=${generated.length}`);
