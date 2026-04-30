# QA checklist

## Happy path
- User lands on Missed Call Money Map and understands the problem in one glance.
- User can identify the primary input, analysis area, and recommended next action.
- Required UI sections are represented: missed-call revenue heatmap, voicemail/intent inbox, callback priority lane, AI receptionist vs human answering cost card, caller trust-risk checklist, 7-day save-the-leads sprint, owner-ready ROI memo.

## Edge cases
- Empty/sample data states do not break the narrative.
- Risk/alert copy avoids overclaiming from weak evidence.
- Mobile/tablet readability is acceptable where relevant.

## Acceptance verification
- `meta.json` includes designProfile, theme, externalSignals, stitchPrompt, and expectedDropFolder.
- `spec/prd.md` contains the assigned profile, theme, signal references, and full Stitch prompt.
- Today's daily ideas file lists all four p001-p004 candidates.
