# QA checklist — Gate Collision Buzz

## Happy path
- [ ] First screen matches: Full-screen scanner with green, amber, and red haptic outcomes plus nearby peer-device status.
- [ ] Core loop works end to end: Scan signed QR offline, exchange spent-token hashes with nearby devices, and resolve duplicate scans with a two-person gesture.
- [ ] Final state is useful without explanatory narration.

## Required sections
- [ ] Event key setup
- [ ] Scanner
- [ ] Haptic and color states
- [ ] Peer-device strip
- [ ] Collision resolver
- [ ] Offline sync health
- [ ] Privacy explanation
- [ ] Shift handoff

## Edge cases
- [ ] Empty, loading, offline/error, stale/uncertain, and success states are specified where relevant.
- [ ] Long Korean/English text and narrow mobile width do not break hierarchy.
- [ ] Destructive or privacy-sensitive actions require explicit confirmation.

## Acceptance verification
- [ ] Exactly one design profile is present: field-ops.
- [ ] Theme is 자산 방어 and source references are C7, S2.
- [ ] Works in airplane-mode mock; duplicate collision is unmistakable; guest names never appear; low battery, drift, and lost-device states exist.
- [ ] No custom demo exists in Phase A.
