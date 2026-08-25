# QA checklist — Anonymous Prep Pulse

## Happy path
- [ ] First screen matches: Six live product rows with oversized sold/waste taps and one updated next-batch action.
- [ ] Core loop works end to end: Tap sold and wasted quantities, compare matching local conditions, then accept or adjust one next-batch range.
- [ ] Final state is useful without explanatory narration.

## Required sections
- [ ] Shift pulse
- [ ] Item batch rows
- [ ] Sold and waste tap controls
- [ ] Local context strip
- [ ] Next-batch recommendation
- [ ] Adjustment reason
- [ ] Privacy boundary
- [ ] End-of-day waste recap

## Edge cases
- [ ] Empty, loading, offline/error, stale/uncertain, and success states are specified where relevant.
- [ ] Long Korean/English text and narrow mobile width do not break hierarchy.
- [ ] Destructive or privacy-sensitive actions require explicit confirmation.

## Acceptance verification
- [ ] Exactly one design profile is present: operator-dense.
- [ ] Theme is 자산 방어 and source references are C4, C5.
- [ ] Quantities update immediately; recommendation explains inputs; no customer identity exists; offline and sell-out states are shown.
- [ ] No custom demo exists in Phase A.
