# QA checklist — Product Passport Supplier Sprint

## Happy path
- User lands directly in the primary workflow.
- User enters or reviews mock evidence.
- User sees the recommended next action and output artifact.

## Edge cases
- Missing evidence or incomplete input still shows a useful checklist.
- High-risk situations are flagged without panic copy.
- Mobile layout keeps controls readable and tappable.

## Acceptance verification
- meta.json includes designProfile, theme, sourceSignalReferences, and stitchPrompt.
- PRD includes target user, key UX, required UI sections, and source references.
- Stitch prompt includes a tailored design-direction sentence for `field-ops`.
