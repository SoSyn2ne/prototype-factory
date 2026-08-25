# PRD — Confidence Chip Showdown

## Problem
- Friends bet confidence before answering, then replay the funniest high-confidence miss as a ten-second share card.

## Target user
- Friends, classrooms, livestreamers, and teams who want a fast social calibration game.

## Arrival path
- The user arrives at the exact trigger described by signals C8 and can act without setup-heavy onboarding.

## Business / validation route
- Recruit five target users, test the core interaction with realistic local mock data, and measure whether they would save, share, or pay for the output.

## Core loop
- Secretly bet 0–100 confidence, answer, reveal everyone at once, score calibration, and replay the biggest overconfident miss.

## First screen
- One claim, four hidden player lanes, and a neon confidence-chip slider above true/false.

## Required UI sections
- Room join; Claim card; Confidence chips; Simultaneous reveal; Calibration score; Animated miss replay; Audience reaction; Rematch and share.

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
- C8; full URLs and evidence notes are in daily/2026-08-26/ideas.md.

## Constraints
- Phase A spec only; no external APIs; use realistic local mock data; do not implement a demo in this phase.

## Non-goals
- Generic analytics dashboard, unverified market-size claims, and passive PDF export.

## Success metrics
- Five target users understand the first screen in three seconds; four finish the core loop without explanation; three say the result is useful enough to save, share, or pay for.

## QA / screenshot criteria
- Rule is clear in 15 seconds; reveal is simultaneous; score rewards calibration; replay is vertical and rematch is available within ten seconds.

## Development start prompt

```text
Build Confidence Chip Showdown from this PRD as a polished responsive prototype. Preserve the playful-experimental design profile, implement secretly bet 0–100 confidence, answer, reveal everyone at once, score calibration, and replay the biggest overconfident miss., use realistic local data, include complete empty/error/success states, and verify desktop plus mobile screenshots.
```
