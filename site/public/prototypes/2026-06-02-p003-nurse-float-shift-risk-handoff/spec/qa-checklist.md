# QA checklist

## Happy path
- User sees current shift, patient acuity, role coverage, and top risk flags.
- User can identify floated staff and familiarity gaps.
- User can generate a concise escalation note.

## Edge cases
- Missing sitter or support role.
- Violence risk requires special visibility.
- Break coverage leaves an unsafe gap.
- Agency or float staff member is unfamiliar with the unit.

## Acceptance verification
- Title, one-liner, theme, and design profile match daily/2026-06-02/ideas.md.
- `meta.json` includes targetUser, keyUX, requiredUiSections, designProfile, theme, searchSignals, and stitchPrompt.
- `spec/prd.md` includes signal references and full Stitch prompt.
- Candidate remains practical / commercial and no custom demo is implemented in Phase A.
