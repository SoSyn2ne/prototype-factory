# QA checklist

## Happy path
- One-liner and target action are understood within three seconds.
- Core flow works: Paste an order, classify the dispute, calculate the evidence window, capture tracking/messages/photos, and export a buyer or seller action receipt before expiry.
- Output artifact can be saved or shared.

## Edge cases
- Empty, incomplete, conflicting, and blocked inputs have clear recovery.
- Long Korean/English text and small mobile widths do not overflow.
- Mock data is realistic and clearly non-production.

## Acceptance verification
- All required sections are present: order intake; policy-window clock; dispute path chooser; evidence locker; action checklist; case receipt.
- Exactly one design profile is used: financial-analyst.
- Theme and source references match meta.json and ideas.md.
- No custom demo exists in Phase A.
