# QA checklist

## Happy path
- meta.json includes type, theme, designProfile, externalSignals, stitchPrompt, and expectedDropFolder.
- spec/prd.md contains target user, key UX, required UI sections, and signal references.
- daily/2026-04-29/ideas.md includes the full Stitch prompt.

## Edge cases
- No p001-p004 slot is missing.
- Prompt does not ask Stitch to call external APIs or implement backend behavior.
- Search signals are framed as evidence, not validation.

## Acceptance verification
- node scripts/build-index.mjs passes.
- git status is clean after commit.
