# QA checklist

## Happy path
- User sees fee switch status, imports listing/date rows, reviews payout deltas, chooses a scenario, and exports a PMS update checklist.

## Edge cases
- Cleaning-only loss where nightly rate is acceptable.
- Peak weekend where dynamic pricing stayed flat.
- Host wants partial offset to protect occupancy.
- Multiple listings with different cleaner costs.

## Acceptance verification
- `meta.json` includes designProfile, theme, signalRefs, and full Stitch prompt.
- PRD includes target user, key UX, required UI sections, design profile, theme, and sources.
- No placeholder bullets remain in `spec/*.md`.
