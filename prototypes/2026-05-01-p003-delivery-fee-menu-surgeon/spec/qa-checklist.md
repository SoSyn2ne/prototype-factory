# QA checklist

## Happy path
- User lands on Delivery Fee Menu Surgeon and understands the problem in one glance.
- User can identify the primary input, analysis area, and recommended next action.
- Required UI sections are represented: delivery channel margin table, item surgery board: keep/reprice/bundle/delist, commission and promo sensitivity sliders, direct-order nudge copy lab, vendor negotiation evidence brief, weekly margin recovery target.

## Edge cases
- Empty/sample data states do not break the narrative.
- Risk/alert copy avoids overclaiming from weak evidence.
- Mobile/tablet readability is acceptable where relevant.

## Acceptance verification
- `meta.json` includes designProfile, theme, externalSignals, stitchPrompt, and expectedDropFolder.
- `spec/prd.md` contains the assigned profile, theme, signal references, and full Stitch prompt.
- Today's daily ideas file lists all four p001-p004 candidates.
