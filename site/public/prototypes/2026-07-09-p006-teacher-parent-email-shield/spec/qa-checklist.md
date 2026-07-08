# QA checklist

## Happy path
- First viewport shows title, target workflow, and primary action.
- UI includes: Complaint inbox with tone/severity tags; Policy anchor selector; Evidence and prior-contact log; Reply draft with warmth/firmness slider; Admin escalation summary.
- Design profile is visibly calm-consumer.
- Source signal references appear in spec/meta, not as inflated claims in the UI.

## Edge cases
- Long titles and labels do not overflow compact controls.
- Empty or missing evidence states are visible and actionable.
- Mobile/narrow width keeps the primary workflow understandable.

## Acceptance verification
- Stitch prompt is copied exactly from PRD.
- Expected drop folder is /home/sy/Downloads/stitch_drop/2026-07-09/p006/.
- Phase A contains no custom demo implementation.
