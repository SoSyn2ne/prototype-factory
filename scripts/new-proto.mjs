#!/usr/bin/env node
/**
 * new-proto.mjs
 *
 * Create a new daily prototype folder with spec templates.
 *
 * Usage:
 *   node scripts/new-proto.mjs --title "..." --oneLiner "..." --slug "..." --tags ai,productivity
 *   node scripts/new-proto.mjs --title "..." --template auth
 *   node scripts/new-proto.mjs --title "..." --demo-template landing
 *   node scripts/new-proto.mjs --title "..." --no-demo
 *
 * Notes:
 * - Does not call any external APIs.
 * - Deterministic scaffolding for factory automation.
 */

import fs from "node:fs";
import path from "node:path";

function die(msg) {
  console.error(msg);
  process.exit(1);
}

function argValue(args, name, fallback = "") {
  const idx = args.indexOf(name);
  if (idx === -1) return fallback;
  const v = args[idx + 1];
  if (!v || v.startsWith("--")) return fallback;
  return v;
}

function argFlag(args, name) {
  return args.includes(name);
}

function escapeHtml(input) {
  return String(input || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function toSlug(input) {
  return String(input || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function pad(n, width) {
  return String(n).padStart(width, "0");
}

function todayKST() {
  // server timezone is Asia/Seoul; use local time
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = pad(d.getMonth() + 1, 2);
  const dd = pad(d.getDate(), 2);
  return `${yyyy}-${mm}-${dd}`;
}

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function writeFile(p, content) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, content, "utf8");
}

function copyDirectory(srcDir, dstDir) {
  fs.mkdirSync(dstDir, { recursive: true });
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const dstPath = path.join(dstDir, entry.name);
    if (entry.isDirectory()) {
      copyDirectory(srcPath, dstPath);
      continue;
    }
    if (entry.isFile()) {
      fs.copyFileSync(srcPath, dstPath);
    }
  }
}

function replaceDemoPlaceholders(html, values) {
  return html
    .replaceAll("{{TITLE}}", values.title)
    .replaceAll("{{ONELINER}}", values.oneLiner)
    .replaceAll("{{ID}}", values.id);
}

function ensureUniqueId(dateStr) {
  // Find next available pNNN for the date.
  const baseDir = path.join(process.cwd(), "prototypes");
  if (!fs.existsSync(baseDir)) fs.mkdirSync(baseDir, { recursive: true });
  const entries = fs.readdirSync(baseDir, { withFileTypes: true });
  const used = new Set();
  for (const e of entries) {
    if (!e.isDirectory()) continue;
    const m = e.name.match(new RegExp(`^${dateStr}-p(\\d{3})-`));
    if (m) used.add(Number.parseInt(m[1], 10));
  }
  for (let i = 1; i <= 999; i++) {
    if (!used.has(i)) return pad(i, 3);
  }
  die(`No available pNNN slot for ${dateStr}`);
}

function main() {
  const args = process.argv.slice(2);

  const dateStr = argValue(args, "--date", todayKST());
  const title = argValue(args, "--title");
  const oneLiner = argValue(args, "--oneLiner");
  const slugIn = argValue(args, "--slug");
  const tagsIn = argValue(args, "--tags", "ai,productivity");
  const stackIn = argValue(args, "--stack", "design,docs");
  const status = argValue(args, "--status", "prototype");
  const noDemo = argFlag(args, "--no-demo");
  const demoTemplate = argValue(args, "--demo-template", "dashboard");
  const template = argValue(args, "--template", "proto");
  const templateMap = {
    auth: "auth-ui",
    map: "map-ui",
    commerce: "commerce-ui",
    proto: "proto-app",
  };
  const templateChoices = ["none", ...Object.keys(templateMap)];
  const demoTemplateChoices = ["landing", "dashboard", "form", "minimal"];

  if (!title) die("Missing --title");
  if (!templateChoices.includes(template)) {
    die(`Invalid --template "${template}". Use proto|auth|map|commerce|none`);
  }
  if (!demoTemplateChoices.includes(demoTemplate)) {
    die(`Invalid --demo-template "${demoTemplate}". Use landing|dashboard|form|minimal`);
  }
  const slug = toSlug(slugIn || title);
  if (!slug) die("Could not derive slug");

  const pNNN = ensureUniqueId(dateStr);
  const id = `${dateStr}-p${pNNN}`;
  const folderName = `${id}-${slug}`;
  const repoPath = `prototypes/${folderName}`;
  const outDir = path.join(process.cwd(), repoPath);

  if (fs.existsSync(outDir)) die(`Already exists: ${repoPath}`);

  const tags = tagsIn
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  const stack = stackIn
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  const meta = {
    id,
    title,
    oneLiner: oneLiner || "",
    tags,
    status,
    stack,
    repoPath,
    previewUrl: "",
    createdAt: dateStr,
  };

  if (template !== "none") {
    meta.pages = ["/", "/demo", "/spec"];
  }

  writeFile(path.join(outDir, "meta.json"), JSON.stringify(meta, null, 2) + "\n");

  writeFile(
    path.join(outDir, "README.md"),
    `# ${title}\n\n${oneLiner || ""}\n\n## Status\n- ${status}\n\n## How to use\n- This folder is a spec-first artifact. See \`spec/\`.\n\n## Links\n- Preview: ${meta.previewUrl || "(TBD)"}\n\n`
  );

  writeFile(
    path.join(outDir, "spec", "prd.md"),
    `# PRD — ${title}\n\n## Problem\n- \n\n## Target user\n- \n\n## Constraints\n- Time:\n- Budget:\n- Platform:\n\n## Non-goals\n- \n\n## Success metrics\n- \n\n## Notes\n- \n`
  );

  writeFile(
    path.join(outDir, "spec", "assumptions.md"),
    `# Assumptions (KNOWN / ASSUMPTION / UNKNOWN)\n\n## KNOWN\n- \n\n## ASSUMPTION\n- \n\n## UNKNOWN\n- \n`
  );

  writeFile(
    path.join(outDir, "spec", "falsification.md"),
    `# Falsification checklist (5–7)\n\n1. \n2. \n3. \n4. \n5. \n6. \n7. \n`
  );

  writeFile(
    path.join(outDir, "spec", "qa-checklist.md"),
    `# QA checklist\n\n## Happy path\n- \n\n## Edge cases\n- \n\n## Acceptance verification\n- \n`
  );

  if (template !== "none") {
    const templateDirName = templateMap[template];
    const templateSrc = path.join(process.cwd(), "templates", "nextjs", templateDirName);
    if (!fs.existsSync(templateSrc)) {
      die(`Template not found: templates/nextjs/${templateDirName}`);
    }
    copyDirectory(templateSrc, path.join(outDir, "app"));
  }

  // Optional: create web/ placeholder when requested
  if (argFlag(args, "--with-web")) {
    writeFile(path.join(outDir, "web", "README.md"), "Placeholder for web prototype.\n");
  }

  if (!noDemo) {
    const demoTemplateSrc = path.join(process.cwd(), "templates", "demo", demoTemplate, "demo");
    if (!fs.existsSync(demoTemplateSrc)) {
      die(`Demo template not found: templates/demo/${demoTemplate}/demo`);
    }

    const demoOutDir = path.join(outDir, "demo");
    copyDirectory(demoTemplateSrc, demoOutDir);

    const demoIndexPath = path.join(demoOutDir, "index.html");
    if (fs.existsSync(demoIndexPath)) {
      const safeTitle = escapeHtml(title);
      const safeOneLiner = escapeHtml(oneLiner || "Design and build a custom demo for this prototype.");
      const safeId = escapeHtml(id);
      const html = fs.readFileSync(demoIndexPath, "utf8");
      const injectedHtml = replaceDemoPlaceholders(html, {
        title: safeTitle,
        oneLiner: safeOneLiner,
        id: safeId,
      });
      fs.writeFileSync(demoIndexPath, injectedHtml, "utf8");
    }
  }

  console.log(`Created: ${repoPath}`);
  console.log(`id: ${id}`);
  console.log(`template: ${template}`);
  console.log(`demo-template: ${noDemo ? "none (--no-demo)" : demoTemplate}`);
}

main();
