# QA checklist — DPP Fabric Passport Sprint

## Happy path
- User lands on the product and immediately sees the problem, target user, and main intake.
- User can follow the main workflow from intake to risk/comparison surface to export/next action.
- Required UI sections are all visible: supplier evidence intake, SKU passport completeness grid, materials and origin field mapper, missing-data supplier chase queue, EU channel block-risk meter, QR passport preview, audit trail and launch approval memo.
- Design profile `operator-dense` is reflected in palette, density, and visual hierarchy.

## Edge cases
- Missing or incomplete evidence/input shows a helpful gap state.
- Risk warnings are specific and do not overclaim certainty.
- Export/memo language is practical and non-legal/non-medical/non-financial-advice where relevant.

## Acceptance verification
- `meta.json` contains candidate type, design profile, theme, external signals, Stitch prompt, and expected drop folder.
- Stitch prompt is copy/paste ready and includes explicit design direction.
- Phase A does not implement a custom demo beyond scaffold templates.
