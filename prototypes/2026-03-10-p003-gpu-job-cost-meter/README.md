# GPU Job Cost Meter

Estimate GPU-run job cost (electricity + time) and produce a runbook-style breakdown.

## Status
- prototype

## What’s inside
- `spec/prd.md` — one-page PRD
- `spec/assumptions.md` — KNOWN / ASSUMPTION / UNKNOWN map
- `spec/falsification.md` — 7 disproof questions
- `spec/qa-checklist.md` — manual checks
- `demo/` — vanilla HTML/CSS/JS dashboard (offline)

## Routes (gallery)
- Detail route: `/p/2026-03-10-p003`
- Demo route: `/d/2026-03-10-p003`

## How to run demo (static)
- Open `demo/index.html` directly, or:
- `cd prototypes/2026-03-10-p003-gpu-job-cost-meter/demo`
- `python3 -m http.server 4173`
- Visit `http://localhost:4173`

## Notes
This estimates *operational* cost. It’s not a perfect accounting model.
