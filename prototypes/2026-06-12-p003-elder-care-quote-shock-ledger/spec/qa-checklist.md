# QA checklist

## Happy path
- The prototype title matches: Elder Care Quote Shock Ledger.
- One-liner, target user, key UX, theme, and design profile match daily/2026-06-12/ideas.md.
- The first viewport communicates the trigger: a parent needs care now and the first quote is terrifying.
- All required UI sections are represented:
- [ ] Care-cost shock header
- [ ] Care setting comparison lanes
- [ ] Hourly home-care calendar
- [ ] Parent income and asset snapshot
- [ ] Sibling contribution matrix
- [ ] Medicaid and insurance question queue
- [ ] Hospital discharge deadline tracker
- [ ] Family meeting packet preview

## Edge cases
- Missing or weak proof should be visibly different from complete proof.
- Mobile layout must not hide the primary artifact or main call to action.
- Sensitive categories should use organizing language, not final professional advice.

## Acceptance verification
- meta.json includes targetUser, keyUX, requiredUiSections, designProfile, theme, sourceSignals, expectedDropFolder, and stitchPrompt.
- spec/prd.md includes the complete Stitch prompt.
- No placeholder bullets remain in spec files.
- The idea cites 1-2 raw external signals and exactly one design profile.
