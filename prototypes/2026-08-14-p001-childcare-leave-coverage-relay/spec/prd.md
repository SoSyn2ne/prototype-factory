# PRD — Short-Term Childcare Leave Coverage Relay

## Problem
- Teams turn an August 20 childcare-leave callout into a humane shift handoff without exposing family details.

## Target user
- Korean shift leads, HR generalists, and small-team managers handling same-day childcare leave after the 2026-08-20 rule change.

## Arrival path
- Search, community referral, or operator handoff at the trigger: work-family balance / humane operations.

## Business / validation route
- Test core-flow completion and artifact sharing; validate a paid lightweight subscription, template pack, or qualified partner lead where appropriate.

## Core loop
- Choose the affected shift, reveal only the minimum availability facts, split critical duties into claimable cards, confirm coverage, and export a privacy-safe handoff.

## First screen
- Communicate the one-liner in three seconds and expose the first action beside a realistic result preview.

## Key screens
- leave trigger intake; minimum-disclosure guardrail; duty cards; volunteer coverage lane; unresolved risk strip; handoff export.

## Interaction rules
- One decisive primary action per state; preserve entered data; show loading, empty, success, blocked, and error states.

## Output artifact
- A manager can send one confirmed duty handoff without forwarding private chat screenshots.

## Share / return loop
- A manager can send one confirmed duty handoff without forwarding private chat screenshots.

## Constraints
- Time: one-session prototype.
- Budget: realistic local mock data; no paid external API.
- Platform: responsive web, desktop and mobile.

## Non-goals
- Production integrations, legal guarantees, payments, or a custom Phase A demo.

## Success metrics
- First action understood in 3 seconds; core flow completed without instruction; output shared or saved.

## QA / screenshot criteria
- Profile field-ops is unmistakable; primary interaction and result fit above fold; mobile has no overflow; all required sections are visible.

## Development start prompt

```text
Build Short-Term Childcare Leave Coverage Relay as a polished local HTML/React prototype in prototype-factory. Teams turn an August 20 childcare-leave callout into a humane shift handoff without exposing family details. Target: Korean shift leads, HR generalists, and small-team managers handling same-day childcare leave after the 2026-08-20 rule change. Implement: Choose the affected shift, reveal only the minimum availability facts, split critical duties into claimable cards, confirm coverage, and export a privacy-safe handoff. Required sections: leave trigger intake; minimum-disclosure guardrail; duty cards; volunteer coverage lane; unresolved risk strip; handoff export. Preserve design profile field-ops. Use realistic local data, complete interaction states, responsive desktop/mobile layouts, and screenshot QA. Do not use paid external APIs.
```

## Source signals
- S1, S10: see daily/2026-08-14/ideas.md.

## Design
- Profile: field-ops
- Theme: work-family balance / humane operations
- Direction: Use a field-ops surface with one safety-blue accent, 48px touch controls, high-contrast covered/uncovered states, a persistent privacy rail, and no HR marketing hero.
