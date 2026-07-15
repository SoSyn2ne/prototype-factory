# QA checklist

## Happy path
- First screen communicates: Restaurant owners test fee wording, menu-price moves, and comp risk before customers revolt at checkout.
- User can complete the core UX: Compare line-item fees against baked-in price moves, preview guest receipt reactions, model margin recovery, and generate staff scripts plus menu disclosure copy.
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
