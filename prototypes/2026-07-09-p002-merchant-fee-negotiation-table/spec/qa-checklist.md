# QA checklist

## Happy path
- First viewport shows title, target workflow, and primary action.
- UI includes: Fee burden comparison by platform; Promo/free-delivery cost pass-through tracker; Peer benchmark cards by cuisine/order size; Dispute evidence checklist; Negotiation packet preview in Korean.
- Design profile is visibly financial-analyst.
- Source signal references appear in spec/meta, not as inflated claims in the UI.

## Edge cases
- Long titles and labels do not overflow compact controls.
- Empty or missing evidence states are visible and actionable.
- Mobile/narrow width keeps the primary workflow understandable.

## Acceptance verification
- Stitch prompt is copied exactly from PRD.
- Expected drop folder is /home/sy/Downloads/stitch_drop/2026-07-09/p002/.
- Phase A contains no custom demo implementation.
