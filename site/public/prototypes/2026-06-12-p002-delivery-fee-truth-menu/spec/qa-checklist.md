# QA checklist

## Happy path
- The prototype title matches: Delivery Fee Truth Menu.
- One-liner, target user, key UX, theme, and design profile match daily/2026-06-12/ideas.md.
- The first viewport communicates the trigger: delivery orders are busy but cash at close is disappointing.
- All required UI sections are represented:
- [ ] Today's fee leak header
- [ ] Platform commission comparison
- [ ] Menu item margin lanes
- [ ] Small-order and promo fee simulator
- [ ] Direct-order break-even builder
- [ ] Customer price explanation card
- [ ] Staff handoff script
- [ ] Weekly fee receipt export

## Edge cases
- Missing or weak proof should be visibly different from complete proof.
- Mobile layout must not hide the primary artifact or main call to action.
- Sensitive categories should use organizing language, not final professional advice.

## Acceptance verification
- meta.json includes targetUser, keyUX, requiredUiSections, designProfile, theme, sourceSignals, expectedDropFolder, and stitchPrompt.
- spec/prd.md includes the complete Stitch prompt.
- No placeholder bullets remain in spec files.
- The idea cites 1-2 raw external signals and exactly one design profile.
