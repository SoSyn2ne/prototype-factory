# PRD — E-Paper Schedule Trade Tile

## Problem
- Turn a shared household calendar into a low-power wall tile where family members trade conflicts instead of silently overwriting events.

## Target user
- Families, co-parents, roommates, and multi-generational homes coordinating chores, pickups, and private time.

## Arrival path
- The user arrives at the exact trigger described by signals S5, S2 and can act without setup-heavy onboarding.

## Business / validation route
- Recruit five target users, test the core interaction with realistic local mock data, and measure whether they would save, share, or pay for the output.

## Core loop
- Surface one conflict, let members keep, move, or trade it, propose compatible swaps, and require both people to confirm.

## First screen
- Persistent grayscale week view with one expanded pickup conflict and physical-feeling keep, move, or trade choices.

## Required UI sections
- Weekly e-paper board; Conflict ribbon; Household member pucks; Trade proposals; Quiet-hours state; Confirmation receipt; Offline sync; Accessibility settings.

## Interaction rules
- One primary action per state; preserve reversibility; expose uncertainty; never fabricate live external data.

## Output artifact
- A saved local result or short shareable state produced by the core loop.

## Share / return loop
- Return for the next real trigger; share only the minimum useful result with explicit user intent.

## Design profile
- premium-editorial

## Theme
- 관계

## Source signal references
- S5, S2; full URLs and evidence notes are in daily/2026-08-26/ideas.md.

## Constraints
- Phase A spec only; no external APIs; use realistic local mock data; do not implement a demo in this phase.

## Non-goals
- Generic analytics dashboard, unverified market-size claims, and passive PDF export.

## Success metrics
- Five target users understand the first screen in three seconds; four finish the core loop without explanation; three say the result is useful enough to save, share, or pay for.

## QA / screenshot criteria
- No event is overwritten silently; both parties confirm a trade; grayscale/color-blind patterns, offline, privacy, and low-battery states are present.

## Development start prompt

```text
Build E-Paper Schedule Trade Tile from this PRD as a polished responsive prototype. Preserve the premium-editorial design profile, implement surface one conflict, let members keep, move, or trade it, propose compatible swaps, and require both people to confirm., use realistic local data, include complete empty/error/success states, and verify desktop plus mobile screenshots.
```
