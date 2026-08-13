# QA checklist

## Happy path
- One-liner and target action are understood within three seconds.
- Core flow works: Host picks a silly delivery goal, viewers vote parts through comments, the machine snaps together live, sabotage events interrupt it, and the final crash/recovery becomes a share clip.
- Output artifact can be saved or shared.

## Edge cases
- Empty, incomplete, conflicting, and blocked inputs have clear recovery.
- Long Korean/English text and small mobile widths do not overflow.
- Mock data is realistic and clearly non-production.

## Acceptance verification
- All required sections are present: goal picker; comment command legend; live contraption canvas; team energy meters; sabotage/recovery cards; replay clip.
- Exactly one design profile is used: playful-experimental.
- Theme and source references match meta.json and ideas.md.
- No custom demo exists in Phase A.
