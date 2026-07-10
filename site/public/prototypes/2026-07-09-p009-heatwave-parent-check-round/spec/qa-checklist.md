# QA checklist

## Happy path
- First viewport shows title, target workflow, and primary action.
- UI includes: No-login join via share link; Today's check status header with 14:00 nudge banner; Sibling rotation lane; 60-second symptom checklist; Cooling and risk flags; Family-chat share card; Printable fridge card with emergency numbers in large type.
- Design profile is visibly calm-consumer.
- Source signal references appear in spec/meta, not as inflated claims in the UI.

## Edge cases
- Long titles and labels do not overflow compact controls.
- Empty or missing states are visible and actionable.
- Mobile/narrow width keeps the primary workflow understandable.

## Acceptance verification
- Stitch prompt is copied exactly from PRD.
- Expected drop folder is /home/sy/Downloads/stitch_drop/2026-07-09/p009/.
- Phase A contains no custom demo implementation.
