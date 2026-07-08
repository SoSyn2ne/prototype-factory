# QA checklist

## Happy path
- First viewport shows title, target workflow, and primary action.
- UI includes: Property and booking header; Photo evidence board by room; Cleaner/task invoice lane; Platform claim status and excluded-cost warnings; Next booking recovery checklist.
- Design profile is visibly premium-editorial.
- Source signal references appear in spec/meta, not as inflated claims in the UI.

## Edge cases
- Long titles and labels do not overflow compact controls.
- Empty or missing evidence states are visible and actionable.
- Mobile/narrow width keeps the primary workflow understandable.

## Acceptance verification
- Stitch prompt is copied exactly from PRD.
- Expected drop folder is /home/sy/Downloads/stitch_drop/2026-07-09/p005/.
- Phase A contains no custom demo implementation.
