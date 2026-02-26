#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(process.cwd());
const PROTOTYPES_DIR = path.join(ROOT, "prototypes");
const TEMPLATES_DIR = path.join(ROOT, "templates", "demo");

const ALLOWED = new Set(["landing", "dashboard", "form", "minimal"]);

function die(msg) {
  console.error(msg);
  process.exit(1);
}

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function writeJson(p, value) {
  fs.writeFileSync(p, `${JSON.stringify(value, null, 2)}\n`, "utf8");
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

function escapeHtml(input) {
  return String(input || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function injectPlaceholders(indexHtmlPath, replacements) {
  if (!fs.existsSync(indexHtmlPath)) return;
  let html = fs.readFileSync(indexHtmlPath, "utf8");
  for (const [k, v] of Object.entries(replacements)) {
    html = html.replaceAll(`{{${k}}}`, escapeHtml(v));
  }
  fs.writeFileSync(indexHtmlPath, html, "utf8");
}

function pickTemplate(meta) {
  const explicit = typeof meta.demoTemplate === "string" ? meta.demoTemplate.trim() : "";
  if (ALLOWED.has(explicit)) return explicit;

  const title = String(meta.title || "").toLowerCase();
  const tags = Array.isArray(meta.tags) ? meta.tags.map((t) => String(t).toLowerCase()) : [];
  const stack = Array.isArray(meta.stack) ? meta.stack.map((s) => String(s).toLowerCase()) : [];

  if (title.includes("generator") || tags.includes("decision-making") || tags.includes("form")) return "form";
  if (tags.includes("market-intel") || title.includes("rival") || title.includes("competitor")) return "landing";
  if (stack.includes("static") && stack.includes("html") && stack.includes("js")) return "form";
  if (tags.includes("analytics") || tags.includes("alerts") || tags.includes("investing") || tags.includes("stocks")) return "dashboard";

  return "dashboard";
}

function main() {
  const args = process.argv.slice(2);
  const force = args.includes("--force");
  const dryRun = args.includes("--dry-run");
  const writeMeta = args.includes("--write-meta");

  if (!fs.existsSync(PROTOTYPES_DIR)) die(`Missing: ${PROTOTYPES_DIR}`);
  if (!fs.existsSync(TEMPLATES_DIR)) die(`Missing: ${TEMPLATES_DIR}`);

  const folders = fs
    .readdirSync(PROTOTYPES_DIR, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort((a, b) => a.localeCompare(b));

  let applied = 0;
  let skipped = 0;

  for (const folderName of folders) {
    const protoDir = path.join(PROTOTYPES_DIR, folderName);
    const metaPath = path.join(protoDir, "meta.json");
    if (!fs.existsSync(metaPath)) {
      skipped += 1;
      continue;
    }

    const meta = readJson(metaPath);
    const id = typeof meta.id === "string" ? meta.id : folderName.slice(0, "YYYY-MM-DD-p000".length);
    const title = typeof meta.title === "string" ? meta.title : id;
    const oneLiner = typeof meta.oneLiner === "string" ? meta.oneLiner : "";

    const demoDir = path.join(protoDir, "demo");
    const demoIndex = path.join(demoDir, "index.html");

    if (!force && fs.existsSync(demoIndex)) {
      // still allow template re-apply when force=false? default behavior: skip
      skipped += 1;
      continue;
    }

    const templateName = pickTemplate(meta);
    const templateDir = path.join(TEMPLATES_DIR, templateName, "demo");
    if (!fs.existsSync(templateDir)) die(`Template missing: ${templateDir}`);

    if (!dryRun) {
      fs.rmSync(demoDir, { recursive: true, force: true });
      copyDirectory(templateDir, demoDir);
      injectPlaceholders(path.join(demoDir, "index.html"), {
        ID: id,
        TITLE: title,
        ONELINER: oneLiner,
      });

      if (writeMeta) {
        meta.demoTemplate = templateName;
        writeJson(metaPath, meta);
      }
    }

    applied += 1;
    console.log(`${dryRun ? "[dry]" : "[ok]"} ${folderName} -> ${templateName}`);
  }

  console.log(`Summary: applied=${applied} skipped=${skipped} force=${force} dryRun=${dryRun} writeMeta=${writeMeta}`);
}

main();
