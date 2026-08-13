# QA checklist

## Happy path
- One-liner and target action are understood within three seconds.
- Core flow works: Post a bounded care request, show each helper’s availability and limits, offer reciprocal help or expenses, accept/decline without guilt, and keep a fairness history.
- Output artifact can be saved or shared.

## Edge cases
- Empty, incomplete, conflicting, and blocked inputs have clear recovery.
- Long Korean/English text and small mobile widths do not overflow.
- Mock data is realistic and clearly non-production.

## Acceptance verification
- All required sections are present: care request card; availability and limit board; reciprocity offers; no-guilt decline; emergency contacts; fairness history.
- Exactly one design profile is used: calm-consumer.
- Theme and source references match meta.json and ideas.md.
- No custom demo exists in Phase A.
