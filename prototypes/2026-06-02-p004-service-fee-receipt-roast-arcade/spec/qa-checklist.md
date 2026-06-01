# QA checklist

## Happy path
- User sees a receipt, highlighted service fee, true total, and tip options.
- User can choose roast tone and preview a share card.
- User can read a short restaurant response note.

## Edge cases
- Service fee is mandatory but not a tip.
- Multiple fees appear on one receipt.
- User selects an aggressive tone.
- Local rule explainer must stay general and non-legal.

## Acceptance verification
- Title, one-liner, theme, and design profile match daily/2026-06-02/ideas.md.
- `meta.json` includes targetUser, keyUX, requiredUiSections, designProfile, theme, searchSignals, and stitchPrompt.
- `spec/prd.md` includes signal references and full Stitch prompt.
- Candidate remains fun / experimental and no custom demo is implemented in Phase A.
