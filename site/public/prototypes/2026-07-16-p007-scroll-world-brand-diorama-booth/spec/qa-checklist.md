# QA checklist

## Happy path
- First screen communicates: Creators turn a brand moodboard into a tiny scrollable 3D world with scene beats and shareable reveal frames.
- User can complete the core UX: Drop brand words and assets, choose scene beats, preview a scrollable world timeline, tune reveal frames, and export a shareable launch storyboard.
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
