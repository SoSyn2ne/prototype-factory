# Risk Budget Guardrails

Turn conviction + volatility into a max position size and a simple stop-loss plan.

## Status
- prototype

## What’s inside
- `spec/prd.md` — one-page PRD
- `spec/assumptions.md` — KNOWN / ASSUMPTION / UNKNOWN map
- `spec/falsification.md` — 7 disproof questions
- `spec/qa-checklist.md` — manual checks
- `demo/` — static demo (`index.html` + assets)

## Routes (gallery)
- Detail route: `/p/2026-03-10-p001`
- Demo route: `/d/2026-03-10-p001`

## How to run demo (static)
- Direct open: open `demo/index.html` in a browser.
- Optional local server:
  - `cd prototypes/2026-03-10-p001-risk-budget-guardrails/demo`
  - `python3 -m http.server 4173`
  - open `http://localhost:4173`

## Notes
This is **not** financial advice. It’s a guardrail calculator to reduce “oops sizing” mistakes.
