# QA checklist

## Happy path
- First screen communicates: Shopify AI-commerce builders see where catalog discovery loses shoppers before native checkout exists.
- User can complete the core UX: Paste an AI-commerce flow, map discovery -> product detail -> merchant handoff -> checkout, then expose attribution gaps, no-checkout dead ends, product data quality, and next integration tasks.
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
