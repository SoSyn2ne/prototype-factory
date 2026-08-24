# PRD — Rep Failure Haptic Duel

## Problem
- Two lifters race to maintain clean form while watch haptics and a shared phone screen turn muscle-failure estimates into a short, replayable duel.

## Target user
- Gym partners using Apple Watch who want a playful set without filming themselves.

## Core loop
- Pair watches, calibrate, run a 45-second dual set, show clean reps and fatigue estimates, then share a safe recap.

## First screen
- Make the trigger and primary action understandable in three seconds.

## Required UI sections
- Pairing; calibration; exercise selector; dual lanes; form/fatigue; haptic timeline; safety stop; recap/rematch.

## Design profile
- field-ops

## Theme
- 건강

## Source signal references
- S8, S7; full URLs and evidence notes are in daily/2026-08-25/ideas.md.

## Constraints
- Phase A spec only; no external APIs; use realistic local mock data.

## Success metrics
- Five target users can complete the core loop without explanation; three say the output is useful enough to save or share.

## QA / screenshot criteria
- Safety stop is always visible; estimates are not medical claims; live text is minimal and numbers remain legible at arm’s length.

## Development start prompt

```text
Build Rep Failure Haptic Duel from this PRD as a polished responsive prototype. Preserve the field-ops design profile, implement the core interaction with realistic local data, include complete empty/error/success states, and verify desktop plus mobile screenshots.
```

