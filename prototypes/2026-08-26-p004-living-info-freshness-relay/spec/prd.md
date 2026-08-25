# PRD — Living Info Freshness Relay

## Problem
- Make one-person-household rules useful by expiring stale claims and asking nearby residents for a two-second recheck.

## Target user
- Korean one-person households repeatedly searching local recycling, housing, subsidy, moving, and utility rules.

## Arrival path
- The user arrives at the exact trigger described by signals S1 and can act without setup-heavy onboarding.

## Business / validation route
- Recruit five target users, test the core interaction with realistic local mock data, and measure whether they would save, share, or pay for the output.

## Core loop
- Search a local question, see evidence and expiry, request a two-second resident recheck, and freeze conflicting answers.

## First screen
- A Korean plain-language question returning one answer with district, source, verified date, and freshness half-life.

## Required UI sections
- Urgent search; Local answer card; Expiry and confidence meter; Evidence link; Two-second recheck; Conflict state; Neighborhood contributor streak; Category portal.

## Interaction rules
- One primary action per state; preserve reversibility; expose uncertainty; never fabricate live external data.

## Output artifact
- A saved local result or short shareable state produced by the core loop.

## Share / return loop
- Return for the next real trigger; share only the minimum useful result with explicit user intent.

## Design profile
- calm-consumer

## Theme
- 생활

## Source signal references
- S1; full URLs and evidence notes are in daily/2026-08-26/ideas.md.

## Constraints
- Phase A spec only; no external APIs; use realistic local mock data; do not implement a demo in this phase.

## Non-goals
- Generic analytics dashboard, unverified market-size claims, and passive PDF export.

## Success metrics
- Five target users understand the first screen in three seconds; four finish the core loop without explanation; three say the result is useful enough to save, share, or pay for.

## QA / screenshot criteria
- Stale and conflicting claims cannot appear authoritative; district context stays visible; recheck is completable in two seconds.

## Development start prompt

```text
Build Living Info Freshness Relay from this PRD as a polished responsive prototype. Preserve the calm-consumer design profile, implement search a local question, see evidence and expiry, request a two-second resident recheck, and freeze conflicting answers., use realistic local data, include complete empty/error/success states, and verify desktop plus mobile screenshots.
```
