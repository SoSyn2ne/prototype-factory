# QA checklist

## Happy path
- An aid-office coordinator imports 38 delayed students, filters enrolled-with-balance and housing-deadline risk, sends approved outreach copy, and hands a short list to bursar and enrollment staff.

## Edge cases
- Student has submitted FAFSA federally but school has no ISIR.
- Verification is incomplete but student believes aid is done.
- Bursar bill is due before packaging.
- Parent and student need different message wording.

## Acceptance verification
- meta.json includes designProfile, theme, candidateLabel, and sourceSignals.
- spec/prd.md includes target user, key UX, required sections, profile, theme, and sources.
- No placeholder bullets remain in spec files.
