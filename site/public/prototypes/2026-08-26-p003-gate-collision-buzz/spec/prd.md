# PRD — Gate Collision Buzz

## Problem
- Let event crews validate tickets offline and feel duplicate-entry conflicts instantly across nearby staff devices without exposing the guest list.

## Target user
- Pop-up events, workshops, school festivals, and venues with unreliable connectivity or volunteer staff.

## Arrival path
- The user arrives at the exact trigger described by signals C7, S2 and can act without setup-heavy onboarding.

## Business / validation route
- Recruit five target users, test the core interaction with realistic local mock data, and measure whether they would save, share, or pay for the output.

## Core loop
- Scan signed QR offline, exchange spent-token hashes with nearby devices, and resolve duplicate scans with a two-person gesture.

## First screen
- Full-screen scanner with green, amber, and red haptic outcomes plus nearby peer-device status.

## Required UI sections
- Event key setup; Scanner; Haptic and color states; Peer-device strip; Collision resolver; Offline sync health; Privacy explanation; Shift handoff.

## Interaction rules
- One primary action per state; preserve reversibility; expose uncertainty; never fabricate live external data.

## Output artifact
- A saved local result or short shareable state produced by the core loop.

## Share / return loop
- Return for the next real trigger; share only the minimum useful result with explicit user intent.

## Design profile
- field-ops

## Theme
- 자산 방어

## Source signal references
- C7, S2; full URLs and evidence notes are in daily/2026-08-26/ideas.md.

## Constraints
- Phase A spec only; no external APIs; use realistic local mock data; do not implement a demo in this phase.

## Non-goals
- Generic analytics dashboard, unverified market-size claims, and passive PDF export.

## Success metrics
- Five target users understand the first screen in three seconds; four finish the core loop without explanation; three say the result is useful enough to save, share, or pay for.

## QA / screenshot criteria
- Works in airplane-mode mock; duplicate collision is unmistakable; guest names never appear; low battery, drift, and lost-device states exist.

## Development start prompt

```text
Build Gate Collision Buzz from this PRD as a polished responsive prototype. Preserve the field-ops design profile, implement scan signed qr offline, exchange spent-token hashes with nearby devices, and resolve duplicate scans with a two-person gesture., use realistic local data, include complete empty/error/success states, and verify desktop plus mobile screenshots.
```
