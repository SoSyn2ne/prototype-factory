# QA checklist

## Happy path
- First screen communicates: Childcare operators organize premium jumps, carrier denials, scam calls, and parent notices before coverage breaks.
- User can complete the core UX: Log carrier quotes and denials, compare policy gaps, flag suspicious calls, build parent-facing notices, and export a survival packet for brokers or associations.
- Export artifact is visible and named.

## Edge cases
- Missing input state.
- High-risk or warning state.
- Empty data state.
- Mobile narrow viewport.

## Acceptance verification
- meta.json includes ideaLabel, designProfile, theme, sourceSignalReferences, stitchPrompt, expectedStitchDropFolder, and phase.
- spec/prd.md includes actual idea text and source signal references.
- No custom demo implementation is required in Phase A.
