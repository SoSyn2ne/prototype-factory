# QA checklist

## Happy path
- Load demo and see a guest list + current counts.
- Click “Simulate update” and observe at least one drift item created.
- Click a drift item to view before/after diff.
- Click “Acknowledge” and confirm it leaves the queue.

## Edge cases
- Simulate multiple updates in a row; queue should append items and remain usable.
- Acknowledge all items; empty state appears.
- Simulate a minor change (name correction) and confirm severity is low.
- Simulate a seat-breaker (attendance flip / plus-one change / diet add) and confirm severity is high.

## Acceptance verification
- Demo is vanilla HTML/CSS/JS with local assets only (no CDNs).
- Buttons and list items are keyboard-focusable with visible focus.
- No JS errors on load or after 10 simulations.
