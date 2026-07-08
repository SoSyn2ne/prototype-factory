# QA checklist

## Happy path
- First viewport shows title, target workflow, and primary action.
- UI includes: Product passport readiness score; Supplier data gap matrix; QR field checklist: materials, repair, lifecycle, identifiers; Escalation email composer; Audit trail and deadline lane.
- Design profile is visibly field-ops.
- Source signal references appear in spec/meta, not as inflated claims in the UI.

## Edge cases
- Long titles and labels do not overflow compact controls.
- Empty or missing evidence states are visible and actionable.
- Mobile/narrow width keeps the primary workflow understandable.

## Acceptance verification
- Stitch prompt is copied exactly from PRD.
- Expected drop folder is /home/sy/Downloads/stitch_drop/2026-07-09/p003/.
- Phase A contains no custom demo implementation.
