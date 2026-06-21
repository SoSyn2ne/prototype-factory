# QA checklist

## Happy path
- User selects profession/state, reviews changed renewal steps, checks documents/fees, and prints a renewal packet.

## Edge cases
- License already expired.
- Continuing education status unknown.
- Profession not covered by the simplified rule sample.

## Acceptance verification
- p003 folder exists with no placeholder spec text.
- meta.json includes calm-consumer designProfile, theme, sourceSignals, and stitchPrompt.
- Stitch prompt includes required sections and design direction.
