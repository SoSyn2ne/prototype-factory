# QA checklist

## Happy path
- The prototype title matches: Hagwon Fear Spend Cutline.
- One-liner, target user, key UX, theme, and design profile match daily/2026-06-12/ideas.md.
- The first viewport communicates the trigger: a parent chat says everyone else already enrolled.
- All required UI sections are represented:
- [ ] 학원비 pressure header
- [ ] Peer rumor intake
- [ ] Child gap evidence cards
- [ ] Monthly cost and commute ledger
- [ ] Fatigue and schedule load meter
- [ ] Keep/cut/switch decision lanes
- [ ] Parent-chat response note
- [ ] Trial month review checklist

## Edge cases
- Missing or weak proof should be visibly different from complete proof.
- Mobile layout must not hide the primary artifact or main call to action.
- Sensitive categories should use organizing language, not final professional advice.

## Acceptance verification
- meta.json includes targetUser, keyUX, requiredUiSections, designProfile, theme, sourceSignals, expectedDropFolder, and stitchPrompt.
- spec/prd.md includes the complete Stitch prompt.
- No placeholder bullets remain in spec files.
- The idea cites 1-2 raw external signals and exactly one design profile.
