# QA checklist

## Happy path
- User can add household members and choose who participates.
- User can create a safe word and call-back checklist.
- User can mark practice status and preview a fridge card.

## Edge cases
- A relative refuses to participate.
- A user wants to test without consent.
- A scam already happened and the family needs recovery steps.
- The caller claims secrecy or urgency.

## Acceptance verification
- Title, one-liner, theme, and design profile match daily/2026-06-02/ideas.md.
- `meta.json` includes targetUser, keyUX, requiredUiSections, designProfile, theme, searchSignals, and stitchPrompt.
- `spec/prd.md` includes signal references and full Stitch prompt.
- Candidate remains practical / commercial and no custom demo is implemented in Phase A.
