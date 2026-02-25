#!/usr/bin/env node

import fs from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";

const VIEWPORT = { width: 1200, height: 630 };
const NAV_TIMEOUT_MS = 30_000;

function resolveRoot() {
  const scriptDir = path.dirname(fileURLToPath(import.meta.url));
  const candidates = [
    path.resolve(process.cwd()),
    path.resolve(scriptDir, ".."),
    path.resolve(process.cwd(), ".."),
  ];

  for (const candidate of candidates) {
    const prototypesDir = path.join(candidate, "prototypes");
    const siteDir = path.join(candidate, "site");
    if (fs.existsSync(prototypesDir) && fs.existsSync(siteDir)) {
      return candidate;
    }
  }

  throw new Error("Could not resolve repository root (expected prototypes/ and site/).");
}

function argFlag(args, name) {
  return args.includes(name);
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function listMetaItems(rootDir) {
  const prototypesDir = path.join(rootDir, "prototypes");
  const entries = fs
    .readdirSync(prototypesDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));

  const items = [];
  for (const folderName of entries) {
    const metaPath = path.join(prototypesDir, folderName, "meta.json");
    if (!fs.existsSync(metaPath)) continue;

    try {
      const meta = readJson(metaPath);
      const fallbackId = folderName.slice(0, "YYYY-MM-DD-p000".length);
      const id = typeof meta.id === "string" && meta.id ? meta.id : fallbackId;
      const previewUrl = typeof meta.previewUrl === "string" ? meta.previewUrl.trim() : "";
      if (!id) continue;
      items.push({ id, previewUrl });
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.warn(`Skipping ${folderName}: failed to parse meta.json (${message})`);
    }
  }

  return items;
}

async function main() {
  const args = process.argv.slice(2);
  const force = argFlag(args, "--force");
  const rootDir = resolveRoot();
  const previewsDir = path.join(rootDir, "site", "public", "previews");
  const items = listMetaItems(rootDir);
  const requireFromSite = createRequire(path.join(rootDir, "site", "package.json"));
  let chromium;

  try {
    ({ chromium } = requireFromSite("playwright"));
  } catch {
    throw new Error('Missing Playwright in site dependencies. Run "npm install" inside site/.');
  }

  fs.mkdirSync(previewsDir, { recursive: true });

  let captured = 0;
  let skipped = 0;
  let failed = 0;

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: VIEWPORT });

  for (const item of items) {
    const imagePath = path.join(previewsDir, `${item.id}.png`);
    if (!force && fs.existsSync(imagePath)) {
      skipped += 1;
      continue;
    }

    const url = item.previewUrl || `https://prototype-factory.vercel.app/p/${encodeURIComponent(item.id)}`;
    const page = await context.newPage();
    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: NAV_TIMEOUT_MS });
      await page.screenshot({ path: imagePath, type: "png" });
      captured += 1;
      console.log(`Captured ${item.id} <- ${url}`);
    } catch (error) {
      failed += 1;
      const message = error instanceof Error ? error.message : String(error);
      console.warn(`Failed ${item.id}: ${message}`);
    } finally {
      await page.close();
    }
  }

  await context.close();
  await browser.close();

  console.log(`Summary: total=${items.length} captured=${captured} skipped=${skipped} failed=${failed}`);
  if (failed > 0) process.exitCode = 1;
}

main().catch((error) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`Failed to generate previews: ${message}`);
  process.exit(1);
});
