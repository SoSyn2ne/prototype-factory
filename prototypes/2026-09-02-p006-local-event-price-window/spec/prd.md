# PRD — Local Event Price Window

## Problem
Surface event-driven demand windows so small hosts can make a reasoned price decision.

## Target user
Independent accommodation hosts managing one to ten rooms.

## Core loop / key UX
Merge events and availability into weekend strips, then accept, reject, or cap a review band with a reason.

## First screen
Make the core action and its evidence immediately understandable in three seconds.

## Required UI sections
property baseline; event strip; availability evidence; price-window card; decision; fairness guardrail; review.

## Design
- Assigned profile: `financial-analyst`
- Theme: 매출 최적화

## Source signals
S7, S12 from `daily/2026-09-02/ideas.md`.

## Non-goals
- No production integrations or custom demo in Phase A.

## QA / screenshot criteria
Rates include sources and uncertainty; canceled, weak, booked, and capped states are clear.

## Development start prompt
Use the full copy/paste-ready Stitch prompt for p006 in `daily/2026-09-02/ideas.md`.
