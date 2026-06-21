# QA checklist

## Happy path
- User opens a renewal case, enters current plan and renewal quote, adds two carrier alternatives, selects a client objection, adjusts contribution split, and exports the memo.

## Edge cases
- Missing quote values show clear empty states.
- Renewal deadline already passed shows a severe warning.
- No carrier alternatives available still produces a current-plan explanation script.

## Acceptance verification
- p001 folder exists with no placeholder spec text.
- meta.json includes designProfile, theme, sourceSignals, and stitchPrompt.
- Stitch prompt includes operator-dense design direction and all required UI sections.
