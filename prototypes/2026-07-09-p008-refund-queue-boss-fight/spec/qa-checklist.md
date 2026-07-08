# QA checklist

## Happy path
- First viewport shows title, target workflow, and primary action.
- UI includes: Cancelled trip case card; Evidence cards: notice, receipt, chat, policy, insurance; Boss meter for generic replies and delay tactics; Escalation move selector; Victory receipt with next real-world steps.
- Design profile is visibly playful-experimental.
- Source signal references appear in spec/meta, not as inflated claims in the UI.

## Edge cases
- Long titles and labels do not overflow compact controls.
- Empty or missing evidence states are visible and actionable.
- Mobile/narrow width keeps the primary workflow understandable.

## Acceptance verification
- Stitch prompt is copied exactly from PRD.
- Expected drop folder is /home/sy/Downloads/stitch_drop/2026-07-09/p008/.
- Phase A contains no custom demo implementation.
