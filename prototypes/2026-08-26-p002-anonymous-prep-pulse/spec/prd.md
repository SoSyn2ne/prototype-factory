# PRD — Anonymous Prep Pulse

## Problem
- Help small food shops decide the next prep batch from sales and waste counts without building customer dossiers or running a kitchen ERP.

## Target user
- Independent bakeries, lunch counters, and market stalls with short shelf-life inventory.

## Arrival path
- The user arrives at the exact trigger described by signals C4, C5 and can act without setup-heavy onboarding.

## Business / validation route
- Recruit five target users, test the core interaction with realistic local mock data, and measure whether they would save, share, or pay for the output.

## Core loop
- Tap sold and wasted quantities, compare matching local conditions, then accept or adjust one next-batch range.

## First screen
- Six live product rows with oversized sold/waste taps and one updated next-batch action.

## Required UI sections
- Shift pulse; Item batch rows; Sold and waste tap controls; Local context strip; Next-batch recommendation; Adjustment reason; Privacy boundary; End-of-day waste recap.

## Interaction rules
- One primary action per state; preserve reversibility; expose uncertainty; never fabricate live external data.

## Output artifact
- A saved local result or short shareable state produced by the core loop.

## Share / return loop
- Return for the next real trigger; share only the minimum useful result with explicit user intent.

## Design profile
- operator-dense

## Theme
- 자산 방어

## Source signal references
- C4, C5; full URLs and evidence notes are in daily/2026-08-26/ideas.md.

## Constraints
- Phase A spec only; no external APIs; use realistic local mock data; do not implement a demo in this phase.

## Non-goals
- Generic analytics dashboard, unverified market-size claims, and passive PDF export.

## Success metrics
- Five target users understand the first screen in three seconds; four finish the core loop without explanation; three say the result is useful enough to save, share, or pay for.

## QA / screenshot criteria
- Quantities update immediately; recommendation explains inputs; no customer identity exists; offline and sell-out states are shown.

## Development start prompt

```text
Build Anonymous Prep Pulse from this PRD as a polished responsive prototype. Preserve the operator-dense design profile, implement tap sold and wasted quantities, compare matching local conditions, then accept or adjust one next-batch range., use realistic local data, include complete empty/error/success states, and verify desktop plus mobile screenshots.
```
