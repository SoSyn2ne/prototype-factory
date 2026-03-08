# QA checklist

## Happy path
- Drag guests from the pool into tables.
- Confirm capacity counts update.
- Add a conflict pair (cannot sit together) and see warnings when violated.
- Export JSON and paste into a text editor.
- Export printable text summary and confirm it matches the UI.

## Edge cases
- Over-capacity tables (should warn and highlight).
- Duplicate guest names (should keep stable ids).
- Removing a guest back to pool.
- Conflict pair includes a guest not currently seated.

## Acceptance verification
- No external assets/URLs.
- Keyboard-accessible controls for key actions (add conflict, export).
- Conflict flags are visible and explained (not just color).
