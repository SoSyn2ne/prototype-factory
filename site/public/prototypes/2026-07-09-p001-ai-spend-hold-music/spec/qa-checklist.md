# QA checklist

## Happy path
- First viewport shows title, target workflow, and primary action.
- UI includes: AI spend queue by vendor and team; Hidden-cost alerts: overage, seat creep, token spikes; Human-touch risk notes for customer-facing automations; Daily cap and owner approval rules; Savings receipt and next billing calendar.
- Design profile is visibly operator-dense.
- Source signal references appear in spec/meta, not as inflated claims in the UI.

## Edge cases
- Long titles and labels do not overflow compact controls.
- Empty or missing evidence states are visible and actionable.
- Mobile/narrow width keeps the primary workflow understandable.

## Acceptance verification
- Stitch prompt is copied exactly from PRD.
- Expected drop folder is /home/sy/Downloads/stitch_drop/2026-07-09/p001/.
- Phase A contains no custom demo implementation.
