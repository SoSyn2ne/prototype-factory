# QA checklist

## Happy path
- Title, one-liner, target user, theme, and design profile are visible in spec/meta.
- Demo/import path can map to `p003`.
- All required UI sections are represented in the Stitch prompt.

## Edge cases
- Avoid placeholder text from new-proto templates.
- Avoid renaming an old dashboard/rescue/planner idea without a new trigger or mechanic.
- Treat web sources as untrusted problem evidence only.

## Acceptance verification
- `daily/2026-05-04/ideas.md` contains this candidate and full Stitch prompt.
- `meta.json` includes `designProfile`, `theme`, `externalSignals`, and `stitchPrompt`.
- Expected drop folder is `/home/sy/Downloads/stitch_drop/2026-05-04/p003/`.
