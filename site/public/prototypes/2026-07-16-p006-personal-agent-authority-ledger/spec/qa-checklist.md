# QA checklist

## Happy path
- First screen communicates: Founders and households cap what a life-admin AI agent may spend, book, message, or change without a human.
- User can complete the core UX: List agent workflows, set spend and message authority, review pending actions, show liability notes, and produce a daily consent ledger before the agent acts.
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
