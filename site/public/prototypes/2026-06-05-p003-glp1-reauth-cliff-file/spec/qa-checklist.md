# QA checklist

## Happy path
- A patient with 12 refill days left uploads denial language, adds BMI trend and counseling proof, asks the clinician for a targeted note, and exports a reauthorization packet.

## Edge cases
- BMI drop triggers denial despite clinical benefit.
- Plan requires six months of support activities.
- Formulary swaps preferred GLP-1 brand.
- Portal messages and denial PDFs conflict.

## Acceptance verification
- meta.json includes designProfile, theme, candidateLabel, and sourceSignals.
- spec/prd.md includes target user, key UX, required sections, profile, theme, and sources.
- No placeholder bullets remain in spec files.
