# QA checklist

## Happy path
- First screen communicates: Neighborhoods rehearse safe drone delivery drop zones, noise windows, and complaint evidence before Prime Air arrives.
- User can complete the core UX: Draw property drop zones, simulate noise windows and no-fly concerns, capture neighbor objections, and export a posted rule card plus complaint log.
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
