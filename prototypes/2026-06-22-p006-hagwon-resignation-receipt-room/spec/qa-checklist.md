# QA checklist

## Happy path
- User enters contract dates, adds employer message proof, marks unpaid wage and housing risks, checks MOEL proof items, and exports an evidence receipt.

## Edge cases
- Contract extension conflicts with original end date.
- User lacks wage records.
- Employer deadline is today.

## Acceptance verification
- p006 folder exists with no placeholder spec text.
- meta.json includes operator-dense designProfile, theme, sourceSignals, and stitchPrompt.
- Prompt includes pre-signature evidence room and sign/wait/escalate matrix.
