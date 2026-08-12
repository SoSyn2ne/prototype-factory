# QA checklist

## Happy path
- One-liner and target action understood within three seconds.
- Core flow works: Scan or enter a list, assign items by household, lock budgets and deadlines, resolve duplicates, and export a child-ready packed checklist.
- Output artifact can be saved or shared.

## Edge cases
- Empty, incomplete, conflicting, and blocked inputs have clear recovery.
- Long Korean/English text and small mobile widths do not overflow.
- Mock data is realistic and clearly non-production.

## Acceptance verification
- All required sections present: list capture; household assignment lanes; duplicate detector; budget meter; deadline calendar; packed-bag checklist.
- Exactly one design profile used: calm-consumer.
- Theme and source references match meta.json and ideas.md.
- No custom demo exists in Phase A.

