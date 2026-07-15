# QA checklist

## Happy path
- First screen communicates: Handmade sellers translate leather, dye, thread, and glue into product capacity before orders outrun supplies.
- User can complete the core UX: Enter products and material recipes, convert raw materials into makeable units, warn on preorder risk, and generate a supplier shopping list before a drop goes live.
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
