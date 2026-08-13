# QA checklist

## Happy path
- One-liner and target action are understood within three seconds.
- Core flow works: Assign color-coded count zones, scan or voice-enter shelf items, merge duplicate names, resolve conflicting quantities at the shelf, then freeze an order-ready count.
- Output artifact can be saved or shared.

## Edge cases
- Empty, incomplete, conflicting, and blocked inputs have clear recovery.
- Long Korean/English text and small mobile widths do not overflow.
- Mock data is realistic and clearly non-production.

## Acceptance verification
- All required sections are present: zone assignment; scan/voice count; duplicate merge tray; conflict-at-shelf mode; variance and waste flags; frozen order sheet.
- Exactly one design profile is used: field-ops.
- Theme and source references match meta.json and ideas.md.
- No custom demo exists in Phase A.
