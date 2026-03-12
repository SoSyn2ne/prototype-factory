# QA checklist

## Happy path
- Add a catalyst with all fields filled and submit; it appears in the ladder.
- Add 3+ catalysts; ladder sorts by Conviction Score descending.
- Select a catalyst; detail panel shows the formula inputs and computed score.
- Click "Falsify"; 3 questions appear and reflect catalyst type + horizon bucket.

## Edge cases
- Enter days = 0 or negative: input validation blocks submission.
- Add a very long horizon (e.g., 3650 days): penalty clamps at max.
- Add two catalysts with same score: stable ordering (older first).
- Keyboard-only: can add catalyst, select from ladder, and press Falsify without mouse.

## Acceptance verification
- Demo is a single local HTML file with local CSS/JS only (no external CDNs).
- All inputs have visible labels; focus ring is visible.
- No console errors on load, add, select, or falsify.
