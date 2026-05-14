# QA checklist — Pet Premium Shock Triage

## Happy path
- User lands on the product and immediately sees the problem, target user, and main intake.
- User can follow the main workflow from intake to risk/comparison surface to export/next action.
- Required UI sections are all visible: premium shock intake, pet health and claim history timeline, keep/switch/self-insure scenario cards, pre-existing-condition trap warnings, deductible and reimbursement slider, state complaint note builder, family decision memo.
- Design profile `calm-consumer` is reflected in palette, density, and visual hierarchy.

## Edge cases
- Missing or incomplete evidence/input shows a helpful gap state.
- Risk warnings are specific and do not overclaim certainty.
- Export/memo language is practical and non-legal/non-medical/non-financial-advice where relevant.

## Acceptance verification
- `meta.json` contains candidate type, design profile, theme, external signals, Stitch prompt, and expected drop folder.
- Stitch prompt is copy/paste ready and includes explicit design direction.
- Phase A does not implement a custom demo beyond scaffold templates.
