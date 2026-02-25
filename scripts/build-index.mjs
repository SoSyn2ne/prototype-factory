import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

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

const ROOT = resolveRoot();
const PROTOTYPES_DIR = path.join(ROOT, "prototypes");
const OUTPUT_PATH = path.join(ROOT, "site", "public", "prototypes-index.json");
const COPIED_PROTOTYPES_DIR = path.join(ROOT, "site", "public", "prototypes");
const PREVIEWS_DIR = path.join(ROOT, "site", "public", "previews");

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function readOptionalReadmeOneLiner(readmePath) {
  if (!fs.existsSync(readmePath)) return "";
  const raw = fs.readFileSync(readmePath, "utf8");
  const lines = raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  for (const line of lines) {
    if (line.startsWith("#")) continue;
    if (line.startsWith("##")) continue;
    return line;
  }
  return "";
}

function compareDesc(a, b) {
  const dateCompare = String(b.createdAt || "").localeCompare(String(a.createdAt || ""));
  if (dateCompare !== 0) return dateCompare;
  return String(b.id || "").localeCompare(String(a.id || ""));
}

function normalizeMeta(folderName, meta) {
  const fallbackId = folderName.slice(0, "YYYY-MM-DD-p000".length);
  const fallbackDate = folderName.slice(0, "YYYY-MM-DD".length);
  const id = typeof meta.id === "string" && meta.id ? meta.id : fallbackId;
  const repoPath = typeof meta.repoPath === "string" && meta.repoPath
    ? meta.repoPath
    : `prototypes/${folderName}`;
  const readmeOneLiner = readOptionalReadmeOneLiner(path.join(ROOT, repoPath, "README.md"));
  const oneLiner = typeof meta.oneLiner === "string" && meta.oneLiner.trim()
    ? meta.oneLiner.trim()
    : readmeOneLiner;

  const previewImagePath = path.join(PREVIEWS_DIR, `${id}.png`);
  const previewImage = fs.existsSync(previewImagePath) ? `/previews/${id}.png` : "";

  return {
    id,
    title: typeof meta.title === "string" ? meta.title : folderName,
    oneLiner,
    tags: Array.isArray(meta.tags) ? meta.tags : [],
    status: typeof meta.status === "string" ? meta.status : "",
    stack: Array.isArray(meta.stack) ? meta.stack : [],
    repoPath,
    previewUrl: typeof meta.previewUrl === "string" ? meta.previewUrl : "",
    demoUrl: typeof meta.demoUrl === "string" ? meta.demoUrl : "",
    previewImage,
    createdAt: typeof meta.createdAt === "string" && meta.createdAt ? meta.createdAt : fallbackDate,
    pages: Array.isArray(meta.pages) ? meta.pages : undefined,
  };
}

function copySpecFiles(folderName) {
  // Copy spec/*.md into site/public/prototypes/<folderName>/spec/*.md for Vercel-safe reads.
  const srcSpecDir = path.join(PROTOTYPES_DIR, folderName, "spec");
  if (!fs.existsSync(srcSpecDir)) return;

  const dstSpecDir = path.join(COPIED_PROTOTYPES_DIR, folderName, "spec");
  fs.mkdirSync(dstSpecDir, { recursive: true });

  const files = fs.readdirSync(srcSpecDir, { withFileTypes: true })
    .filter((e) => e.isFile() && e.name.endsWith(".md"))
    .map((e) => e.name);

  for (const f of files) {
    fs.copyFileSync(path.join(srcSpecDir, f), path.join(dstSpecDir, f));
  }
}

function buildItems() {
  if (!fs.existsSync(PROTOTYPES_DIR)) {
    throw new Error(`Missing directory: ${PROTOTYPES_DIR}`);
  }

  const folders = fs
    .readdirSync(PROTOTYPES_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  const items = [];
  for (const folderName of folders) {
    const metaPath = path.join(PROTOTYPES_DIR, folderName, "meta.json");
    if (!fs.existsSync(metaPath)) {
      console.warn(`Skipping ${folderName}: meta.json not found`);
      continue;
    }

    try {
      const meta = readJson(metaPath);
      items.push(normalizeMeta(folderName, meta));
      copySpecFiles(folderName);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.warn(`Skipping ${folderName}: failed to read meta.json (${message})`);
    }
  }

  items.sort(compareDesc);
  return items;
}

function main() {
  try {
    const items = buildItems();
    const payload = {
      updatedAt: new Date().toISOString(),
      items,
    };

    fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
    fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
    console.log(`Wrote ${OUTPUT_PATH} (${items.length} items)`);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Failed to build index: ${message}`);
    process.exit(1);
  }
}

main();
