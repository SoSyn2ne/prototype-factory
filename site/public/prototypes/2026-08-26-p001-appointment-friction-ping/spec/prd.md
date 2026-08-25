# PRD — Appointment Friction Ping

## Problem
- Replace a frustrating medical phone bot with one SMS question that routes today’s real arrival blocker to a usable next step.

## Target user
- Clinics, pharmacies, and high-cost appointment teams serving anxious, multilingual, or first-time visitors.

## Arrival path
- The user arrives at the exact trigger described by signals C3 and can act without setup-heavy onboarding.

## Business / validation route
- Recruit five target users, test the core interaction with realistic local mock data, and measure whether they would save, share, or pay for the output.

## Core loop
- Send one respectful blocker question, branch to a tiny arrival-help card, and escalate only unresolved exceptions.

## First screen
- Tomorrow’s cohort beside one primary “send blocker ping” action and the patient’s five-choice SMS preview.

## Required UI sections
- Campaign setup; Patient SMS preview; Blocker choice sheet; Tailored arrival cards; Unresolved exception queue; Language and accessibility options; Privacy and consent state; Outcome summary.

## Interaction rules
- One primary action per state; preserve reversibility; expose uncertainty; never fabricate live external data.

## Output artifact
- A saved local result or short shareable state produced by the core loop.

## Share / return loop
- Return for the next real trigger; share only the minimum useful result with explicit user intent.

## Design profile
- calm-consumer

## Theme
- 건강

## Source signal references
- C3; full URLs and evidence notes are in daily/2026-08-26/ideas.md.

## Constraints
- Phase A spec only; no external APIs; use realistic local mock data; do not implement a demo in this phase.

## Non-goals
- Generic analytics dashboard, unverified market-size claims, and passive PDF export.

## Success metrics
- Five target users understand the first screen in three seconds; four finish the core loop without explanation; three say the result is useful enough to save, share, or pay for.

## QA / screenshot criteria
- Patient and staff views are visibly distinct; no surveillance score; consent, delivery failure, translation, and resolved states are present.

## Development start prompt

```text
Build Appointment Friction Ping from this PRD as a polished responsive prototype. Preserve the calm-consumer design profile, implement send one respectful blocker question, branch to a tiny arrival-help card, and escalate only unresolved exceptions., use realistic local data, include complete empty/error/success states, and verify desktop plus mobile screenshots.
```
