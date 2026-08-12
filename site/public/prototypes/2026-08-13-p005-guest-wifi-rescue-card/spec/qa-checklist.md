# QA checklist

## Happy path
- One-liner and target action understood within three seconds.
- Core flow works: Select device and symptom, run a short branching diagnosis, reveal a safe fallback, and print or QR-share a recovery card.
- Output artifact can be saved or shared.

## Edge cases
- Empty, incomplete, conflicting, and blocked inputs have clear recovery.
- Long Korean/English text and small mobile widths do not overflow.
- Mock data is realistic and clearly non-production.

## Acceptance verification
- All required sections present: device selector; symptom buttons; diagnostic path; network status; fallback steps; printable/QR rescue card.
- Exactly one design profile used: field-ops.
- Theme and source references match meta.json and ideas.md.
- No custom demo exists in Phase A.

