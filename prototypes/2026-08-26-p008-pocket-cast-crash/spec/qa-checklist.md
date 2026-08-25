# QA checklist — Pocket Cast Crash

## Happy path
- [ ] First screen matches: Room QR beside two phone states, then a shared pond with dual elastic lines and a 60-second timer.
- [ ] Core loop works end to end: Pair phones, calibrate safe wrist flicks, cast into a shared pond, tangle elastic lines, and turn failure into a short replay.
- [ ] Final state is useful without explanatory narration.

## Required sections
- [ ] Phone pairing
- [ ] Safety calibration
- [ ] Shared water stage
- [ ] Dual tension meters
- [ ] Cast and hook feedback
- [ ] Tangle physics
- [ ] Odd catch reveal
- [ ] Replay and rematch

## Edge cases
- [ ] Empty, loading, offline/error, stale/uncertain, and success states are specified where relevant.
- [ ] Long Korean/English text and narrow mobile width do not break hierarchy.
- [ ] Destructive or privacy-sensitive actions require explicit confirmation.

## Acceptance verification
- [ ] Exactly one design profile is present: playful-experimental.
- [ ] Theme is 재미 and source references are S13, G7.
- [ ] Pairing and motion calibration are obvious; disconnect recovery and left-handed mode exist; tangles read as funny; replay is six seconds and retry is immediate.
- [ ] No custom demo exists in Phase A.
