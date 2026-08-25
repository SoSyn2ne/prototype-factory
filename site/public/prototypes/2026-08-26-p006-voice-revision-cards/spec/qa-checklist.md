# QA checklist — Voice Revision Cards

## Happy path
- [ ] First screen matches: Large recorder followed by the realistic “grapes—no, apples; six—actually eight” revision chain.
- [ ] Core loop works end to end: Record freely, group contradictions into revision chains, keep abandoned clauses visible, and confirm only the final intent.
- [ ] Final state is useful without explanatory narration.

## Required sections
- [ ] Record view
- [ ] Live transcript
- [ ] Revision chain
- [ ] Contradiction compare
- [ ] Final-intent cards
- [ ] Ambiguity flag
- [ ] Confirmation gesture
- [ ] Share preview

## Edge cases
- [ ] Empty, loading, offline/error, stale/uncertain, and success states are specified where relevant.
- [ ] Long Korean/English text and narrow mobile width do not break hierarchy.
- [ ] Destructive or privacy-sensitive actions require explicit confirmation.

## Acceptance verification
- [ ] Exactly one design profile is present: premium-editorial.
- [ ] Theme is 생산성 and source references are C2, C1.
- [ ] Abandoned text remains auditable; ambiguous changes cannot auto-confirm; share preview contains only chosen final intent unless audio context is enabled.
- [ ] No custom demo exists in Phase A.
