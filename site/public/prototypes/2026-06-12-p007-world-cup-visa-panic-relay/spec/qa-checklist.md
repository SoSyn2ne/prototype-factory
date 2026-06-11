# QA checklist

## Happy path
- The prototype title matches: World Cup Visa Panic Relay.
- One-liner, target user, key UX, theme, and design profile match daily/2026-06-12/ideas.md.
- The first viewport communicates the trigger: match week is close and one missing document could ruin the trip.
- All required UI sections are represented:
- [ ] Match week relay header
- [ ] Traveler readiness lineup
- [ ] Passport and visa proof cards
- [ ] Route and border rule tiles
- [ ] Ticket and hotel proof locker
- [ ] 72-hour panic countdown
- [ ] Emergency contact bench
- [ ] Shareable fan pass

## Edge cases
- Missing or weak proof should be visibly different from complete proof.
- Mobile layout must not hide the primary artifact or main call to action.
- Sensitive categories should use organizing language, not final professional advice.

## Acceptance verification
- meta.json includes targetUser, keyUX, requiredUiSections, designProfile, theme, sourceSignals, expectedDropFolder, and stitchPrompt.
- spec/prd.md includes the complete Stitch prompt.
- No placeholder bullets remain in spec files.
- The idea cites 1-2 raw external signals and exactly one design profile.
