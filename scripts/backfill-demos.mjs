#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(process.cwd());
const PROTOTYPES_DIR = path.join(ROOT, "prototypes");
const TEMPLATES_DIR = path.join(ROOT, "templates", "demo");

function die(msg) {
  console.error(msg);
  process.exit(1);
}

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
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

function replacePlaceholders(filePath, replacements) {
  if (!fs.existsSync(filePath)) return;
  let html = fs.readFileSync(filePath, "utf8");
  for (const [key, value] of Object.entries(replacements)) {
    html = html.replaceAll(`{{${key}}}`, String(value));
  }
  fs.writeFileSync(filePath, html, "utf8");
}

function main() {
  const args = process.argv.slice(2);
  const template = args.includes("--template") ? args[args.indexOf("--template") + 1] : "dashboard";
  const force = args.includes("--force");

  const templateDir = path.join(TEMPLATES_DIR, template, "demo");
  if (!fs.existsSync(templateDir)) {
    die(`Template not found: templates/demo/${template}/demo`);
  }
  if (!fs.existsSync(PROTOTYPES_DIR)) {
    die(`Missing prototypes dir: ${PROTOTYPES_DIR}`);
  }

  const folders = fs.readdirSync(PROTOTYPES_DIR, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort((a, b) => a.localeCompare(b));

  let created = 0;
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
    const entryPath = path.join(demoDir, "index.html");
    if (!force && fs.existsSync(entryPath)) {
      skipped += 1;
      continue;
    }

    fs.rmSync(demoDir, { recursive: true, force: true });
    copyDirectory(templateDir, demoDir);

    replacePlaceholders(path.join(demoDir, "index.html"), {
      ID: id,
      TITLE: title,
      ONELINER: oneLiner,
    });

    created += 1;
    console.log(`Demo scaffolded: ${folderName} (${id})`);
  }

  console.log(`Summary: templates/demo/${template} created=${created} skipped=${skipped} force=${force}`);
}

main();
