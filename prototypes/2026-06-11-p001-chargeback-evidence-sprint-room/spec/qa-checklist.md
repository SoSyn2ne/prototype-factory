# QA checklist

## Happy path
- User opens a chargeback case, sees the countdown, fills required evidence slots, writes the processor story, and exports the packet.

## Edge cases
- Missing delivery proof should create a severe gap warning.
- Contradictory refund policy and customer-message evidence should be flagged.
- Expired deadline should shift the UI into post-mortem / prevention mode.

## Acceptance verification
- `meta.json` includes `designProfile`, `theme`, `sourceSignals`, and full `stitchPrompt`.
- `daily/2026-06-11/ideas.md` cites p001 signals and final prompt.
- The slot remains `2026-06-11-p001` and no custom demo was implemented in Phase A.
