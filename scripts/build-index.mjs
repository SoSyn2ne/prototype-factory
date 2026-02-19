import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(process.cwd());
const PROTO_DIR = path.join(ROOT, 'prototypes');
const OUT = path.join(ROOT, 'site', 'public', 'prototypes-index.json');

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function main() {
  if (!fs.existsSync(PROTO_DIR)) {
    console.error('No prototypes/ directory:', PROTO_DIR);
    process.exit(1);
  }

  const dirs = fs.readdirSync(PROTO_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

  const items = [];
  for (const d of dirs) {
    const metaPath = path.join(PROTO_DIR, d, 'meta.json');
    if (!fs.existsSync(metaPath)) continue;
    try {
      const meta = readJson(metaPath);
      items.push(meta);
    } catch (e) {
      console.warn('Failed to parse', metaPath, e?.message || e);
    }
  }

  items.sort((a,b) => String(b.createdAt).localeCompare(String(a.createdAt)));

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify({ updatedAt: new Date().toISOString(), items }, null, 2));
  console.log('Wrote', OUT, 'items=', items.length);
}

main();
