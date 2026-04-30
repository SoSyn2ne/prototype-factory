# QA checklist

## Happy path
- User lands on Elder Meds Hand-Off Fridge and understands the problem in one glance.
- User can identify the primary input, analysis area, and recommended next action.
- Required UI sections are represented: today dose proof board, missed-dose alert rail, medication schedule builder, sibling/caregiver responsibility row, printable fridge sheet preview, doctor visit summary card, calm family hand-off notes.

## Edge cases
- Empty/sample data states do not break the narrative.
- Risk/alert copy avoids overclaiming from weak evidence.
- Mobile/tablet readability is acceptable where relevant.

## Acceptance verification
- `meta.json` includes designProfile, theme, externalSignals, stitchPrompt, and expectedDropFolder.
- `spec/prd.md` contains the assigned profile, theme, signal references, and full Stitch prompt.
- Today's daily ideas file lists all four p001-p004 candidates.
