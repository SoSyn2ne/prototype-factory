# Wedding Seating Solver Lite

A constraint-aware drag-and-drop seating planner that flags conflicts before you print table cards.

## Status
- prototype

## What's inside
- `spec/` — PRD, assumptions, falsification, QA checklist
- `demo/` — vanilla HTML/CSS/JS drag-and-drop demo (offline)

## How to run demo (static)
- Open `demo/index.html` directly, or:
- `cd prototypes/2026-03-09-p003-wedding-seating-solver-lite/demo`
- `python3 -m http.server 4173`
- Visit `http://localhost:4173`

## Manual verification checklist
- [ ] Can drag guests to tables and back.
- [ ] Capacity overflow is flagged.
- [ ] "Cannot sit together" conflicts are flagged.
- [ ] Export JSON + printable summary works.
- [ ] Works offline (no CDNs).
