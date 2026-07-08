# QA checklist

## Happy path
- First viewport shows title, target workflow, and primary action.
- UI includes: Lobby and 15-second rule card; Shelf image playfield with sticker palette; Tint/scale/rotate controls; Seeker timer and reveal animation; Vote results: stealth, funniest, most cursed.
- Design profile is visibly playful-experimental.
- Source signal references appear in spec/meta, not as inflated claims in the UI.

## Edge cases
- Long titles and labels do not overflow compact controls.
- Empty or missing evidence states are visible and actionable.
- Mobile/narrow width keeps the primary workflow understandable.

## Acceptance verification
- Stitch prompt is copied exactly from PRD.
- Expected drop folder is /home/sy/Downloads/stitch_drop/2026-07-09/p007/.
- Phase A contains no custom demo implementation.
