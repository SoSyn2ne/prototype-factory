# QA checklist

## Happy path
- One-liner and target action understood within three seconds.
- Core flow works: Open the shared daily puzzle, solve one of ten compact challenges, lock spoiler-safe hints, compare streaks, and share a result grid.
- Output artifact can be saved or shared.

## Edge cases
- Empty, incomplete, conflicting, and blocked inputs have clear recovery.
- Long Korean/English text and small mobile widths do not overflow.
- Mock data is realistic and clearly non-production.

## Acceptance verification
- All required sections present: daily puzzle lobby; ten-question run; hint lock; timer and streak; team leaderboard; spoiler-safe share card.
- Exactly one design profile used: playful-experimental.
- Theme and source references match meta.json and ideas.md.
- No custom demo exists in Phase A.

