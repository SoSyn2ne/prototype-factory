# QA checklist

## Happy path
- User starts a field session, selects a task script, logs hesitation/rescue events, reviews a step heatmap, and exports a retrofit priority report.

## Edge cases
- Customer abandons before payment.
- Staff assists before the user taps a hesitation marker.
- Observer notes must be anonymized.

## Acceptance verification
- p008 folder exists with no placeholder spec text.
- meta.json includes field-ops designProfile, theme, sourceSignals, and stitchPrompt.
- Prompt includes tablet field-lab mechanic and before/after field report.
