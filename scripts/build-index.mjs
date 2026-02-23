import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(process.cwd());
const PROTOTYPES_DIR = path.join(ROOT, "prototypes");
const OUTPUT_PATH = path.join(ROOT, "site", "public", "prototypes-index.json");
const COPIED_PROTOTYPES_DIR = path.join(ROOT, "site", "public", "prototypes");

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
  const repoPath = typeof meta.repoPath === "string" && meta.repoPath
    ? meta.repoPath
    : `prototypes/${folderName}`;
  const readmeOneLiner = readOptionalReadmeOneLiner(path.join(ROOT, repoPath, "README.md"));
  const oneLiner = typeof meta.oneLiner === "string" && meta.oneLiner.trim()
    ? meta.oneLiner.trim()
    : readmeOneLiner;

  return {
    id: typeof meta.id === "string" && meta.id ? meta.id : fallbackId,
    title: typeof meta.title === "string" ? meta.title : folderName,
    oneLiner,
    tags: Array.isArray(meta.tags) ? meta.tags : [],
    status: typeof meta.status === "string" ? meta.status : "",
    stack: Array.isArray(meta.stack) ? meta.stack : [],
    repoPath,
    previewUrl: typeof meta.previewUrl === "string" ? meta.previewUrl : "",
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
