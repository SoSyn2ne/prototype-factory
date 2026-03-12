# QA checklist

## Happy path
- Click "Load baseline"; 3 example jobs appear.
- Forecast summary shows finish time relative to now, lane timeline, and thermal risk.
- Add a parallel-capable job; it can occupy lane A or B without blocking.
- Add an exclusive job; it starts only when both lanes are free and blocks both.
- Remove a job; forecast recomputes immediately.

## Edge cases
- Empty name / non-positive duration: validation blocks add.
- Add several high-power jobs back-to-back; thermal risk increases to WATCH/HIGH.
- Add a P0 job after others exist; schedule prioritizes it.

## Acceptance verification
- Demo is local-only (no CDNs).
- All controls have labels; focus ring visible.
- "What would break this forecast?" shows 3 items from falsification list.
- No console errors on load/add/remove/baseline.
