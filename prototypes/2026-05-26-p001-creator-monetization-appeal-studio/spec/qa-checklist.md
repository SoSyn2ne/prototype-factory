# QA checklist - Creator Monetization Appeal Studio

## Happy path
- The first screen states the user, pain, and next action clearly.
- All required UI sections are represented.
- The design profile is visible in layout, density, color, and interaction style.
- The theme is reflected without becoming melodramatic.

## Edge cases
- Empty or uncertain source data still produces a useful next step.
- The most anxious user can understand what to do without reading instructions.
- Mobile viewport keeps primary actions readable.

## Acceptance verification
- meta.json includes designProfile, theme, inspiredBySignals, and stitchPrompt.
- spec/prd.md includes target user, key UX, required UI sections, and full Stitch prompt.
- Stitch export path is documented as /home/sy/Downloads/stitch_drop/2026-05-26/p001/.
