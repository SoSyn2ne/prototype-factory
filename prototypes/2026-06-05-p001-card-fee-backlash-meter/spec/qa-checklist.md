# QA checklist

## Happy path
- A cafe owner enters current processor costs, tests a 3.5% surcharge, previews signage and staff language, compares cash discount and processor-reserve risks, then logs a two-week rollback trigger.

## Edge cases
- Merchant has blended rates and cannot separate card types.
- State rules restrict surcharge language.
- Owner has no review history.
- Processor contract includes reserves or payout delays.

## Acceptance verification
- meta.json includes designProfile, theme, candidateLabel, and sourceSignals.
- spec/prd.md includes target user, key UX, required sections, profile, theme, and sources.
- No placeholder bullets remain in spec files.
