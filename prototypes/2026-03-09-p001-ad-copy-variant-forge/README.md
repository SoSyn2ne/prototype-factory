# Ad Copy Variant Forge

Generate, score, and export ad headline variants for rapid A/B tests without leaving the browser.

## Status
- prototype

## What's inside
- `spec/` — PRD, assumptions map (KNOWN/ASSUMPTION/UNKNOWN), falsification checklist, QA checklist
- `demo/` — a self-contained vanilla HTML/CSS/JS demo (no CDNs)

## How to use (demo)
Option A (quick):
- Open `demo/index.html` directly in your browser.

Option B (recommended local server):
- `cd prototypes/2026-03-09-p001-ad-copy-variant-forge/demo`
- `python3 -m http.server 4173`
- Visit `http://localhost:4173`

## Manual verification checklist
- [ ] Generate 12 headlines and 12 primary texts with realistic inputs.
- [ ] Ensure forbidden words never appear in outputs.
- [ ] Click-to-copy copies the exact line.
- [ ] Export CSV copies valid CSV (paste into Sheets/Excel).
- [ ] No external assets are referenced (works offline).
