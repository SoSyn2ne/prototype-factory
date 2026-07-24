#!/usr/bin/env node
/**
 * new-graduation.mjs
 *
 * Attach a graduation pipeline to an existing prototype folder.
 * Copies scripts/templates/pipeline/* into prototypes/<folder>/pipeline/
 * with {{ID}}/{{TITLE}}/{{SLUG}}/{{DATE}} filled from the prototype meta.json.
 *
 * Usage:
 *   node scripts/new-graduation.mjs <prototype-folder-name>
 *   node scripts/new-graduation.mjs 2026-07-09-p010-wegovy-reality-ledger
 *
 * Idempotent-safe: refuses to overwrite an existing pipeline/ folder.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

function die(msg) {
  console.error(msg);
  process.exit(1);
}

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(scriptDir, "..");
const TEMPLATE_DIR = path.join(scriptDir, "templates", "pipeline");

function main() {
  const folder = process.argv[2];
  if (!folder) die("Usage: node scripts/new-graduation.mjs <prototype-folder-name>");

  const protoDir = path.join(ROOT, "prototypes", folder);
  if (!fs.existsSync(protoDir)) die(`No such prototype folder: prototypes/${folder}`);

  const metaPath = path.join(protoDir, "meta.json");
  if (!fs.existsSync(metaPath)) die(`Missing meta.json in prototypes/${folder}`);
  const meta = JSON.parse(fs.readFileSync(metaPath, "utf8"));

  const pipelineDir = path.join(protoDir, "pipeline");
  if (fs.existsSync(pipelineDir)) die(`pipeline/ already exists in prototypes/${folder}`);

  const slug = folder.replace(/^\d{4}-\d{2}-\d{2}-p\d{3}-/, "");
  const values = {
    "{{ID}}": meta.id || folder.slice(0, 15),
    "{{TITLE}}": meta.title || folder,
    "{{SLUG}}": slug,
    "{{DATE}}": new Date().toISOString().slice(0, 10),
  };

  fs.mkdirSync(pipelineDir, { recursive: true });
  for (const name of fs.readdirSync(TEMPLATE_DIR)) {
    let body = fs.readFileSync(path.join(TEMPLATE_DIR, name), "utf8");
    for (const [token, value] of Object.entries(values)) {
      body = body.split(token).join(value);
    }
    fs.writeFileSync(path.join(pipelineDir, name), body, "utf8");
  }

  console.log(`Created prototypes/${folder}/pipeline/ (${fs.readdirSync(pipelineDir).length} files)`);
  console.log("Next: fill 01-validate → 02-spec → 03-feasibility, build the interactive prototype, then 04-decision.");
}

main();
