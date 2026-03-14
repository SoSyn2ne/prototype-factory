# Wedding Seating Friction Mapper

Capture guest relationships + constraints and surface seating “friction” hotspots before you lock the table plan.

## Status
- prototype

## What this is
Wedding seating charts fail for social reasons, not spreadsheet reasons. This prototype helps you:
- List guests with a simple “side” tag (bride / groom) and notes.
- Add *pairwise* constraints (must-separate / must-sit-near) with a 1–3 importance weight.
- Click **Map friction** to surface:
  - which guests are “hotspots” (many or heavy constraints),
  - which constraints carry the most risk if mishandled,
  - a small relationship matrix to spot clusters and landmines.

## What this is NOT
- A full seating-chart optimizer (tables, capacities, assignments).
- A replacement for wedding-planner judgement.
- A truth machine. It’s a conversation aid for “we should decide this *now*”.

## How to run the offline demo
- Open `demo/index.html` in your browser (no server needed).
- Add a handful of guests (try ~10 first), add 8–15 constraints, then click **Map friction**.
- Click a guest to highlight their related constraints.

## Specs
- Product docs live in `spec/`:
  - `spec/prd.md`
  - `spec/assumptions.md`
  - `spec/falsification.md`
  - `spec/qa-checklist.md`
