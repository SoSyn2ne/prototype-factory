# QA checklist — Tariff Landed-Cost Cutline

## Phase A scaffold checks
- meta.json includes `theme`, `designProfile`, `externalSignals`, and `stitchPrompt`.
- spec/prd.md contains the one-liner, target user, key UX, UI sections, signal references, and full Stitch prompt.
- Slot folder exists under `prototypes/2026-04-28-p003-tariff-landed-cost-cutline`.

## Stitch intake checks for 06:30 job
- Expected drop folder: `/home/sy/Downloads/stitch_drop/2026-04-28/p003/`
- Required files from user: `code.html` and `screen.png`.
- Ingest should preserve the original Stitch environment as the main demo experience.

## Acceptance verification
- Today has all slots p001 through p004.
- `node scripts/build-index.mjs` passes after scaffolding.
- No placeholder-only spec files remain for this idea.
