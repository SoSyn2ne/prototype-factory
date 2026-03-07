# QA checklist

## Happy path
- Load demo and select a preset transcript.
- Click “Extract signals” and see exactly 5 cards (Guidance/Demand/Supply/Margin/Capital).
- Adjust a confidence slider and confirm the numeric label updates.
- Click “Falsify” on 2 cards and confirm they appear in the queue.
- Use keyword filter to hide/show cards based on excerpt text.

## Edge cases
- Click “Extract signals” with an empty transcript (should show an inline warning, not crash).
- Click “Falsify” on the same card multiple times (should not duplicate; should focus/flash queue item).
- Remove an item from the falsification queue (should disappear and allow re-adding).
- Filter keyword that matches nothing (should show an “0 results” empty state).

## Acceptance verification
- Demo uses only local assets (no external fonts/CDNs).
- Works with keyboard: tab through controls; buttons are reachable; focus visible.
- No JS errors in console on initial load or after interactions.
