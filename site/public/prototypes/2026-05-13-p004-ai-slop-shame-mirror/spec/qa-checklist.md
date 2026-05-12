# QA checklist

## Happy path
- User can identify the product promise from the title and one-liner.
- User can move from intake to analysis to action/export/share.
- All required UI sections are visible in the planned demo.
- Design profile `playful-experimental` is obvious in layout, color, density, and hierarchy.

## Edge cases
- Missing or partial source evidence.
- User has multiple clients/stores/campaigns/drafts instead of one simple case.
- User needs a disclaimer because the product touches legal, financial, or reputation-risk advice.

## Acceptance verification
- `meta.json` includes title, one-liner, designProfile, theme, externalSignals, requiredUiSections, and stitchPrompt.
- `daily/2026-05-13/ideas.md` includes the full prompt and signal references.
- `scripts/build-index.mjs` runs after scaffolding p001-p004.
