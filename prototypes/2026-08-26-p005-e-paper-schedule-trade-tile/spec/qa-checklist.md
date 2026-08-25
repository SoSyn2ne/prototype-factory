# QA checklist — E-Paper Schedule Trade Tile

## Happy path
- [ ] First screen matches: Persistent grayscale week view with one expanded pickup conflict and physical-feeling keep, move, or trade choices.
- [ ] Core loop works end to end: Surface one conflict, let members keep, move, or trade it, propose compatible swaps, and require both people to confirm.
- [ ] Final state is useful without explanatory narration.

## Required sections
- [ ] Weekly e-paper board
- [ ] Conflict ribbon
- [ ] Household member pucks
- [ ] Trade proposals
- [ ] Quiet-hours state
- [ ] Confirmation receipt
- [ ] Offline sync
- [ ] Accessibility settings

## Edge cases
- [ ] Empty, loading, offline/error, stale/uncertain, and success states are specified where relevant.
- [ ] Long Korean/English text and narrow mobile width do not break hierarchy.
- [ ] Destructive or privacy-sensitive actions require explicit confirmation.

## Acceptance verification
- [ ] Exactly one design profile is present: premium-editorial.
- [ ] Theme is 관계 and source references are S5, S2.
- [ ] No event is overwritten silently; both parties confirm a trade; grayscale/color-blind patterns, offline, privacy, and low-battery states are present.
- [ ] No custom demo exists in Phase A.
