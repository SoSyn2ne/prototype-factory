# PRD — Voice Revision Cards

## Problem
- Turn a rambling voice note into visible mind-changes and let the speaker confirm only the final intent before sharing.

## Target user
- Founders, caregivers, field managers, and creators who dictate instructions while moving.

## Arrival path
- The user arrives at the exact trigger described by signals C2, C1 and can act without setup-heavy onboarding.

## Business / validation route
- Recruit five target users, test the core interaction with realistic local mock data, and measure whether they would save, share, or pay for the output.

## Core loop
- Record freely, group contradictions into revision chains, keep abandoned clauses visible, and confirm only the final intent.

## First screen
- Large recorder followed by the realistic “grapes—no, apples; six—actually eight” revision chain.

## Required UI sections
- Record view; Live transcript; Revision chain; Contradiction compare; Final-intent cards; Ambiguity flag; Confirmation gesture; Share preview.

## Interaction rules
- One primary action per state; preserve reversibility; expose uncertainty; never fabricate live external data.

## Output artifact
- A saved local result or short shareable state produced by the core loop.

## Share / return loop
- Return for the next real trigger; share only the minimum useful result with explicit user intent.

## Design profile
- premium-editorial

## Theme
- 생산성

## Source signal references
- C2, C1; full URLs and evidence notes are in daily/2026-08-26/ideas.md.

## Constraints
- Phase A spec only; no external APIs; use realistic local mock data; do not implement a demo in this phase.

## Non-goals
- Generic analytics dashboard, unverified market-size claims, and passive PDF export.

## Success metrics
- Five target users understand the first screen in three seconds; four finish the core loop without explanation; three say the result is useful enough to save, share, or pay for.

## QA / screenshot criteria
- Abandoned text remains auditable; ambiguous changes cannot auto-confirm; share preview contains only chosen final intent unless audio context is enabled.

## Development start prompt

```text
Build Voice Revision Cards from this PRD as a polished responsive prototype. Preserve the premium-editorial design profile, implement record freely, group contradictions into revision chains, keep abandoned clauses visible, and confirm only the final intent., use realistic local data, include complete empty/error/success states, and verify desktop plus mobile screenshots.
```
