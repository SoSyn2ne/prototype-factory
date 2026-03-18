# QA checklist

## Happy path
- Open `demo/index.html`.
- Click **Load preset**.
- Click **Check seating**.
- Verify:
  - Tables render with assigned guests.
  - Conflicts list renders with clear “who/where/why”.
  - Clicking a table focuses conflicts to that table.

## Edge cases
- Too many guests for capacity → show overflow warning.
- Duplicate guest names → tool warns or handles predictably.
- Empty constraints → should show “no conflicts” state.
- Circular together groups / overlapping groups → should not crash; conflicts explain the issue.

## Acceptance verification
- Demo is offline (no external CDN/font).
- Seat assignment is deterministic for a given input.
