# QA checklist

## Happy path
- Open `demo/index.html`.
- Load a preset.
- Click **Triage**.
- Verify:
  - Incidents list shows type + severity + time/line anchor.
  - Clicking an incident highlights a block in the rendered log and scrolls to it.
  - Filter reduces the list predictably.

## Edge cases
- Empty input → shows a message; no crash.
- No matches → shows “no incidents found”.
- Very large paste (~50k–200k chars) → completes and remains scrollable.
- Logs without timestamps → uses line-number anchors.

## Acceptance verification
- Demo has no external CDN/font links.
- All processing is client-side and deterministic.
