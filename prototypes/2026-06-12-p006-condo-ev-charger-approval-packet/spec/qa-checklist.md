# QA checklist

## Happy path
- The prototype title matches: Condo EV Charger Approval Packet.
- One-liner, target user, key UX, theme, and design profile match daily/2026-06-12/ideas.md.
- The first viewport communicates the trigger: an owner asks the HOA for charger approval and the board hesitates.
- All required UI sections are represented:
- [ ] Charger request summary
- [ ] Parking and common-area map
- [ ] Load and panel capacity notes
- [ ] Contractor license and permit checklist
- [ ] Insurance and indemnity proof
- [ ] Billing and reimbursement rule builder
- [ ] Neighbor objection FAQ
- [ ] Board packet export

## Edge cases
- Missing or weak proof should be visibly different from complete proof.
- Mobile layout must not hide the primary artifact or main call to action.
- Sensitive categories should use organizing language, not final professional advice.

## Acceptance verification
- meta.json includes targetUser, keyUX, requiredUiSections, designProfile, theme, sourceSignals, expectedDropFolder, and stitchPrompt.
- spec/prd.md includes the complete Stitch prompt.
- No placeholder bullets remain in spec files.
- The idea cites 1-2 raw external signals and exactly one design profile.
