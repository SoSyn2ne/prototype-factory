# PRD — Pocket Cast Crash

## Problem
- Use two phones as motion-sensing fishing rods in a 60-second couch co-op where tangled casts make the best replay.

## Target user
- Couples, families, parties, and streamers wanting instant physical play with no controllers.

## Arrival path
- The user arrives at the exact trigger described by signals S13, G7 and can act without setup-heavy onboarding.

## Business / validation route
- Recruit five target users, test the core interaction with realistic local mock data, and measure whether they would save, share, or pay for the output.

## Core loop
- Pair phones, calibrate safe wrist flicks, cast into a shared pond, tangle elastic lines, and turn failure into a short replay.

## First screen
- Room QR beside two phone states, then a shared pond with dual elastic lines and a 60-second timer.

## Required UI sections
- Phone pairing; Safety calibration; Shared water stage; Dual tension meters; Cast and hook feedback; Tangle physics; Odd catch reveal; Replay and rematch.

## Interaction rules
- One primary action per state; preserve reversibility; expose uncertainty; never fabricate live external data.

## Output artifact
- A saved local result or short shareable state produced by the core loop.

## Share / return loop
- Return for the next real trigger; share only the minimum useful result with explicit user intent.

## Design profile
- playful-experimental

## Theme
- 재미

## Source signal references
- S13, G7; full URLs and evidence notes are in daily/2026-08-26/ideas.md.

## Constraints
- Phase A spec only; no external APIs; use realistic local mock data; do not implement a demo in this phase.

## Non-goals
- Generic analytics dashboard, unverified market-size claims, and passive PDF export.

## Success metrics
- Five target users understand the first screen in three seconds; four finish the core loop without explanation; three say the result is useful enough to save, share, or pay for.

## QA / screenshot criteria
- Pairing and motion calibration are obvious; disconnect recovery and left-handed mode exist; tangles read as funny; replay is six seconds and retry is immediate.

## Development start prompt

```text
Build Pocket Cast Crash from this PRD as a polished responsive prototype. Preserve the playful-experimental design profile, implement pair phones, calibrate safe wrist flicks, cast into a shared pond, tangle elastic lines, and turn failure into a short replay., use realistic local data, include complete empty/error/success states, and verify desktop plus mobile screenshots.
```
