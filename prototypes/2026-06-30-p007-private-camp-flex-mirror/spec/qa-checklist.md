# QA Checklist - Private Camp Flex Mirror

## Happy Path
- Landing/first screen states the user, trigger, and outcome clearly.
- User can move from input to decision/proof output without account creation.
- Required UI sections are all visible: Camp flex intake cards; Network value meter; Anxiety spend detector; Parent persona result; Shareable receipt poster.

## Edge Cases
- Empty or partial inputs show calm recovery states.
- Risk/confidence language avoids fake precision.
- Share/export surface does not expose private data by default.

## Acceptance Verification
- meta.json includes designProfile, theme, sourceSignals, and stitchPrompt.
- ideas.md includes this candidate and the full prompt.
- Build index includes 2026-06-30-p007.
