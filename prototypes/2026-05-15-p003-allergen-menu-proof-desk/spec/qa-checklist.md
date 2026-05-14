# QA checklist — Allergen Menu Proof Desk

## Happy path
- User lands on the product and immediately sees the problem, target user, and main intake.
- User can follow the main workflow from intake to risk/comparison surface to export/next action.
- Required UI sections are all visible: menu and recipe import, top-nine allergen matrix, supplier spec-sheet evidence vault, substitution and cross-contact risk lane, missing-proof task queue, staff briefing card generator, inspection-ready disclosure export.
- Design profile `field-ops` is reflected in palette, density, and visual hierarchy.

## Edge cases
- Missing or incomplete evidence/input shows a helpful gap state.
- Risk warnings are specific and do not overclaim certainty.
- Export/memo language is practical and non-legal/non-medical/non-financial-advice where relevant.

## Acceptance verification
- `meta.json` contains candidate type, design profile, theme, external signals, Stitch prompt, and expected drop folder.
- Stitch prompt is copy/paste ready and includes explicit design direction.
- Phase A does not implement a custom demo beyond scaffold templates.
