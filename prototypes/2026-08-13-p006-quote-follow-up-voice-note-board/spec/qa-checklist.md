# QA checklist

## Happy path
- One-liner and target action understood within three seconds.
- Core flow works: Record or paste a job note, confirm extracted scope and price, generate a quote, schedule follow-up, and move the lead across a tactile board.
- Output artifact can be saved or shared.

## Edge cases
- Empty, incomplete, conflicting, and blocked inputs have clear recovery.
- Long Korean/English text and small mobile widths do not overflow.
- Mock data is realistic and clearly non-production.

## Acceptance verification
- All required sections present: voice-note inbox; scope and price confirmation; quote preview; follow-up clock; lead board; won/lost reason capture.
- Exactly one design profile used: premium-editorial.
- Theme and source references match meta.json and ideas.md.
- No custom demo exists in Phase A.

