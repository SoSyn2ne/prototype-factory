# QA checklist

## Happy path
- User enters a scary quote, checks urgency, compares local second-opinion/aid options, chooses a path, and exports a clinic call sheet.

## Edge cases
- Emergency symptoms should warn against delaying for price comparison.
- No nearby aid options should still produce questions to ask the current clinic.
- Budget lower than all options should route to aid/payment scripts without shaming language.

## Acceptance verification
- `meta.json` includes `designProfile`, `theme`, `sourceSignals`, and full `stitchPrompt`.
- `daily/2026-06-11/ideas.md` cites p002 signals and final prompt.
- The slot remains `2026-06-11-p002` and no custom demo was implemented in Phase A.
