# PRD — Small-Business AI Policy Recall Drill

## Problem
- Turn forgotten AI rules into five-minute scenario drills and a manager-ready comprehension receipt.

## Target user
- Owners and office managers introducing AI tools without a compliance team.

## Source evidence
- S02, S09 from daily/2026-08-24/ideas.md.

## Core loop
- Convert policy clauses into real work scenarios, let staff choose what they would paste/share, reveal consequences, and schedule spaced rechecks.

## First screen
- one five-minute scenario asking whether a staff member may paste a customer document into an AI assistant.

## Key screens
- policy import
- scenario deck
- paste/share decision
- consequence reveal
- confidence check
- team receipt

## Design profile and theme
- Profile: calm-consumer
- Theme: warm off-white learning surface, one teal accent, roomy cards, 12px controls, firm warnings only for true risk

## Interaction rules
- The primary interaction must be usable, not decorative.
- Preserve explicit empty, blocked, error, and success states described in the Stitch prompt.
- Never imply live external data when the prototype uses local sample data.

## Output artifact
- A concrete receipt, card, replay, map, or physical template produced by the core loop.

## Share / return loop
- Let the user export the final artifact and return when the underlying job, case, season, or round changes.

## Constraints
- Time: Phase A specification only; no custom demo.
- Budget: local sample data; no paid API.
- Platform: responsive web companion unless the concept explicitly includes a non-web artifact.

## Non-goals
- Generic analytics dashboard.
- Unverified market-size claims.

## Success metrics
- First screen understood in three seconds.
- Core interaction completes end to end.
- Output artifact is visible and exportable.

## QA / screenshot criteria
- Desktop and mobile layouts preserve the primary action.
- All required sections are visible or reachable.
- Profile, theme, and state colors remain consistent.

## Copy/paste-ready Stitch prompt

```text
Build a responsive web app called "Small-Business AI Policy Recall Drill" for owners and office managers introducing AI tools without a compliance team. First screen: one five-minute scenario asking whether a staff member may paste a customer document into an AI assistant. Core interaction: import policy clauses, answer realistic paste/share choices, reveal the consequence and correct rule, rate confidence, and schedule a spaced recheck. Required sections: policy import; scenario deck; paste/share decision; consequence reveal; confidence check; team comprehension receipt. Use realistic small-agency examples and show new, unsure, incorrect, mastered, and overdue states. Design direction: use the calm-consumer profile with warm off-white surfaces, one teal accent, roomy scenario cards, gentle 12px controls, and firm warning color only for true data risk.
```
