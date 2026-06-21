# QA checklist

## Happy path
- User pastes synthetic bill/EOB lines, reviews code explanations, chooses safe questions, and exports a billing call script.

## Edge cases
- Missing EOB line.
- Bill due date is tomorrow.
- User marks "I do not know what this code means."

## Acceptance verification
- p004 folder exists with no placeholder spec text.
- meta.json includes financial-analyst designProfile, theme, sourceSignals, and stitchPrompt.
- Prompt includes all required bill-decoder sections and medical-safety constraints.
