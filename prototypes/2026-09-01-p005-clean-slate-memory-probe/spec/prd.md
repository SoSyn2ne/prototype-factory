# PRD — Clean-Slate Memory Probe

## Problem and target user
Professionals reusing AI workspaces cannot confidently verify that prior client context is gone.

## Arrival, business route, and core loop
Choose a reuse scenario, plant harmless canary facts, clear memory, start a fresh workspace, run direct and semantic probes, and issue a certificate. Validate as privacy QA for teams.

## First screen and key screens
Sensitive handoff scenario plus three canary facts. Screens: setup, reset checklist, probe runner, leakage matrix, certificate.

## Interaction and output
Only canary leakage is recorded; pass, fail, and inconclusive are separate. Output is a dated certificate with limitations.

## Design profile, theme, and sources
- Profile: `operator-dense`
- Theme: 안전
- Sources: S11, S12

## Constraints and non-goals
Never ingest real secrets or promise provider compliance; probes use mock workspaces.

## Success and QA
The boundary test is understandable and reproducible; direct, paraphrased, false alarm, inconclusive, and pass states are visible.

## Development start prompt
Build p005 from its full Stitch prompt in `daily/2026-09-01/ideas.md` with canary-only evidence and explicit limitations.
