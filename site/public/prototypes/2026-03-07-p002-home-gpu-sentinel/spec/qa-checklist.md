# QA checklist

## Happy path
- Load page: tiles render, clock ticks, events list shows placeholder.
- Seed demo events: events populate.
- Toggle incident mode ON: tiles freeze.
- Save thresholds: values persist on refresh; breach pill updates.
- Generate incident report: report text appears and clipboard copy attempts.

## Edge cases
- Clipboard blocked: UI should show a friendly fallback message.
- Extreme threshold values: input validation (numbers) should not crash rendering.
- Long events list: only recent items shown.

## Acceptance verification
- No external network requests (no CDNs/fonts).
- Keyboard focus visible; form fields labeled.
- Local persistence works via `localStorage`.
