# QA checklist

## Happy path
- First viewport shows title, target workflow, and primary action.
- UI includes: Cost-per-kg meter against monthly spend; Weekly weight and dose check-in; Side-effect day calendar; Clinic price quote notes; Monthly reality report with taper plan.
- Design profile is visibly premium-editorial.
- Source signal references appear in spec/meta, not as inflated claims in the UI.

## Edge cases
- Long titles and labels do not overflow compact controls.
- Empty or missing states are visible and actionable.
- Mobile/narrow width keeps the primary workflow understandable.

## Acceptance verification
- Stitch prompt is copied exactly from PRD.
- Expected drop folder is /home/sy/Downloads/stitch_drop/2026-07-09/p010/.
- Phase A contains no custom demo implementation.
