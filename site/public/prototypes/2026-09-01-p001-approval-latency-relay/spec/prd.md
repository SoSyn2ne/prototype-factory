# PRD — Approval Latency Relay

## Problem and target user
Cross-functional leads gain execution speed from AI but lose days between product, engineering, legal, and operations decisions.

## Arrival, business route, and core loop
Arrive from a delayed launch link. Create a relay, assign the baton, choose approve/question/reroute, and replay active versus waiting time. Validate through a weekly team trial and paid workflow workspace.

## First screen and key screens
One delayed launch, four owners, a glowing current baton, and “42m active / 3.4d waiting.” Screens: intake, relay track, decision card, question budget, replay, receipt.

## Interaction and output
Every owner gets one bounded question; overdue states escalate visibly. Output is a timestamped latency receipt shared in retrospectives.

## Design profile, theme, and sources
- Profile: `operator-dense`
- Theme: 시간 방어
- Sources: S1, S2 in `daily/2026-09-01/ideas.md`

## Constraints and non-goals
Use mock team data; no real integrations or automated employee scoring. Do not implement a generic dashboard.

## Success and QA
A viewer understands the baton and main delay in 3 seconds; approve, question, reroute, overdue, and completed states are visible on desktop and mobile.

## Development start prompt
Build the full interactive relay described in the p001 Stitch prompt in `daily/2026-09-01/ideas.md`, preserving its operator-dense direction and realistic timestamps.
