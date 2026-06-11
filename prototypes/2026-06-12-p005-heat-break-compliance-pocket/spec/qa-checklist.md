# QA checklist

## Happy path
- The prototype title matches: Heat Break Compliance Pocket.
- One-liner, target user, key UX, theme, and design profile match daily/2026-06-12/ideas.md.
- The first viewport communicates the trigger: a hot shift starts and the supervisor must prove prevention happened.
- All required UI sections are represented:
- [ ] Heat risk shift header
- [ ] Crew acclimatization roster
- [ ] Water shade and break timeline
- [ ] Symptom check cards
- [ ] Indoor/outdoor workload slider
- [ ] Photo and toolbox-talk proof
- [ ] Incident escalation button
- [ ] Daily compliance log export

## Edge cases
- Missing or weak proof should be visibly different from complete proof.
- Mobile layout must not hide the primary artifact or main call to action.
- Sensitive categories should use organizing language, not final professional advice.

## Acceptance verification
- meta.json includes targetUser, keyUX, requiredUiSections, designProfile, theme, sourceSignals, expectedDropFolder, and stitchPrompt.
- spec/prd.md includes the complete Stitch prompt.
- No placeholder bullets remain in spec files.
- The idea cites 1-2 raw external signals and exactly one design profile.
