# QA checklist

## Happy path
- One-liner and target action are understood within three seconds.
- Core flow works: Choose the affected shift, reveal only the minimum availability facts, split critical duties into claimable cards, confirm coverage, and export a privacy-safe handoff.
- Output artifact can be saved or shared.

## Edge cases
- Empty, incomplete, conflicting, and blocked inputs have clear recovery.
- Long Korean/English text and small mobile widths do not overflow.
- Mock data is realistic and clearly non-production.

## Acceptance verification
- All required sections are present: leave trigger intake; minimum-disclosure guardrail; duty cards; volunteer coverage lane; unresolved risk strip; handoff export.
- Exactly one design profile is used: field-ops.
- Theme and source references match meta.json and ideas.md.
- No custom demo exists in Phase A.
