# QA checklist

## Happy path
- First screen presents: missed-call queue, caller value scoring, AI vs human handoff selector, callback script, recovered revenue tracker, follow-up SLA board.
- Shows target user and main job without explanatory marketing copy.
- Includes source-signal references in spec/meta.
- Uses exactly one design profile: operator-dense.

## Edge cases
- Long section labels do not overflow.
- Empty or unresolved states are visible where the workflow requires evidence or decisions.
- The output/export area is present even if mocked.

## Acceptance verification
- daily/2026-07-14/ideas.md includes this candidate and full Stitch prompt.
- meta.json includes designProfile, theme, sourceSignalReferences, and stitchPrompt.
- No custom demo implementation was added in Phase A.
