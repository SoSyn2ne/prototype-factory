# QA checklist

## Happy path
- Add 6+ guests with mixed sides and a couple notes; verify guest list renders immediately.
- Add 5+ constraints between different guests (both types, varying weights); verify they show in the constraint list.
- Click **Map friction**; verify:
  - each constraint shows a computed friction score,
  - guests are sorted by friction score,
  - the matrix shows the same constraints visually.
- Click a guest in the guest list; verify related constraints highlight and non-related ones de-emphasize.
- Delete a constraint; re-map; verify scores and matrix update.
- Delete a guest; verify any constraints involving that guest are removed and UI remains consistent.

## Edge cases
- Duplicate guest names (case-insensitive): “Alex Kim” then “alex kim” should be rejected with a clear message.
- Constraint with the same guest selected twice (A = B) should be blocked.
- Only 0–1 guests: constraint creation controls should be disabled or show an informative empty state.
- No constraints: mapping should show zero scores without errors.
- Many constraints attached to one guest (10+): hotspot should clearly surface at the top.
- Long notes (200+ chars) should not break layout (truncate in lists, keep full on hover or detail view if present).
- Non‑ASCII names (e.g., “박지은”, “María”, “O’Connor”) should render and sort stably.

## Acceptance verification
- Offline: `demo/index.html` works when opened from disk; no external CDNs/fonts.
- Interactions required by spec exist:
  - add guests (name + side + optional notes),
  - add constraints (between two guests, type, weight 1–3),
  - click **Map friction** to compute per-guest and per-constraint scores,
  - list is sorted by friction,
  - matrix/graph-like visualization uses HTML (no canvas libs),
  - clicking a guest highlights related constraints.
