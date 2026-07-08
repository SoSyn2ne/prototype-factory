# QA checklist

## Happy path
- First viewport shows title, target workflow, and primary action.
- UI includes: Case intake: order, claim type, deadline; Evidence autobox with required/missing proof; Timeline builder from tracking and messages; Platform policy snippet drawer; Dispute response and review-risk script.
- Design profile is visibly operator-dense.
- Source signal references appear in spec/meta, not as inflated claims in the UI.

## Edge cases
- Long titles and labels do not overflow compact controls.
- Empty or missing evidence states are visible and actionable.
- Mobile/narrow width keeps the primary workflow understandable.

## Acceptance verification
- Stitch prompt is copied exactly from PRD.
- Expected drop folder is /home/sy/Downloads/stitch_drop/2026-07-09/p004/.
- Phase A contains no custom demo implementation.
