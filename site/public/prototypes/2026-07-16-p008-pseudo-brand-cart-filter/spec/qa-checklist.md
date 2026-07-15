# QA checklist

## Happy path
- First screen communicates: Amazon shoppers and deal curators separate real brands from keyword-stuffed pseudo-brands before checkout regret.
- User can complete the core UX: Paste product listings, score brand legitimacy, compare seller clues, show review and naming red flags, and export a safer shortlist before buying.
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
