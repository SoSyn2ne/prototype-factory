# Wedding Seating Constraint Checker

Model a simple seating plan and instantly surface social/constraint conflicts ("don’t seat together", "must sit together") before you finalize the wedding seating chart.

This is a lightweight **offline** demo with deterministic rules — no network calls.

## Status
- prototype

## Quickstart (no build)
1. Open `demo/index.html` in your browser.
2. Click **Load preset**.
3. Adjust tables / table size if you want.
4. Click **Check seating**.
5. Click a table card to focus conflicts for that table.

Optional local server:
```bash
cd prototypes/2026-03-19-p002-wedding-seating-constraint-checker
python3 -m http.server 8080
# http://localhost:8080/demo/
```

## What the heuristic does
- Creates a naive draft assignment (fill tables in order).
- Validates constraints:
  - **Avoid pair**: two guests should not share a table.
  - **Together group**: a set of guests should be seated at the same table.
- Reports conflicts with clear, actionable text.

## Manual checklist
- Load preset and verify at least 2 conflicts appear.
- Change a guest’s table and re-run check: conflicts update.
- Reduce table size to force an overflow and confirm the UI warns.

## Spec artifacts
- PRD: `spec/prd.md`
- Assumptions: `spec/assumptions.md`
- Falsification checklist: `spec/falsification.md`
- QA checklist: `spec/qa-checklist.md`
