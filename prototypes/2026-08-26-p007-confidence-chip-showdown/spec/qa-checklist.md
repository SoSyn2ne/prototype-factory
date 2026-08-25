# QA checklist — Confidence Chip Showdown

## Happy path
- [ ] First screen matches: One claim, four hidden player lanes, and a neon confidence-chip slider above true/false.
- [ ] Core loop works end to end: Secretly bet 0–100 confidence, answer, reveal everyone at once, score calibration, and replay the biggest overconfident miss.
- [ ] Final state is useful without explanatory narration.

## Required sections
- [ ] Room join
- [ ] Claim card
- [ ] Confidence chips
- [ ] Simultaneous reveal
- [ ] Calibration score
- [ ] Animated miss replay
- [ ] Audience reaction
- [ ] Rematch and share

## Edge cases
- [ ] Empty, loading, offline/error, stale/uncertain, and success states are specified where relevant.
- [ ] Long Korean/English text and narrow mobile width do not break hierarchy.
- [ ] Destructive or privacy-sensitive actions require explicit confirmation.

## Acceptance verification
- [ ] Exactly one design profile is present: playful-experimental.
- [ ] Theme is 재미 and source references are C8.
- [ ] Rule is clear in 15 seconds; reveal is simultaneous; score rewards calibration; replay is vertical and rematch is available within ten seconds.
- [ ] No custom demo exists in Phase A.
