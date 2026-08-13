# QA checklist

## Happy path
- One-liner and target action are understood within three seconds.
- Core flow works: Import an account list, record spoken promises and stakeholder politics, pair every account with a successor, rehearse the first message, and export a signed transfer receipt.
- Output artifact can be saved or shared.

## Edge cases
- Empty, incomplete, conflicting, and blocked inputs have clear recovery.
- Long Korean/English text and small mobile widths do not overflow.
- Mock data is realistic and clearly non-production.

## Acceptance verification
- All required sections are present: account import; promise and risk capture; stakeholder map; successor pairing; first-message rehearsal; transfer receipt.
- Exactly one design profile is used: operator-dense.
- Theme and source references match meta.json and ideas.md.
- No custom demo exists in Phase A.
