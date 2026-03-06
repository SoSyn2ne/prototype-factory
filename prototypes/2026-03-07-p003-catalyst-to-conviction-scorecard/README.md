# Catalyst-to-Conviction Scorecard

Turn qualitative semiconductor/company news into a repeatable conviction score with explicit assumptions and a falsification timer.

## What it is
A local-only workflow to prevent “vibes investing”:
- capture catalysts as structured cards
- make weights explicit
- compute a repeatable conviction score per ticker
- force a re-check when the catalyst horizon expires
- generate a 7-day falsification sprint checklist for the top ticker

## How to use (demo)
```bash
cd prototypes/2026-03-07-p003-catalyst-to-conviction-scorecard/demo
python3 -m http.server 8000
# open http://localhost:8000
```

State persists via `localStorage`.

## Manual checklist
- Add catalysts and adjust weights: scores should update live.
- Confirm overdue catalysts show “Overdue” after horizon passes (edit horizon to 1 day + change createdAt via devtools if needed).
- Start sprint: checklist appears for highest-score ticker and persists on refresh.

## Status
- prototype
