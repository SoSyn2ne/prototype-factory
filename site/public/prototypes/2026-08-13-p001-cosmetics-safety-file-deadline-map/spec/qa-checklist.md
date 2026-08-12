# QA checklist

## Happy path
- One-liner and target action understood within three seconds.
- Core flow works: Import product SKUs, classify first-wave timing, map missing safety evidence, assign owners, and export a dated readiness pack.
- Output artifact can be saved or shared.

## Edge cases
- Empty, incomplete, conflicting, and blocked inputs have clear recovery.
- Long Korean/English text and small mobile widths do not overflow.
- Mock data is realistic and clearly non-production.

## Acceptance verification
- All required sections present: SKU intake; threshold and phase classifier; evidence matrix; comment-window countdown; owner calendar; export pack.
- Exactly one design profile used: operator-dense.
- Theme and source references match meta.json and ideas.md.
- No custom demo exists in Phase A.

