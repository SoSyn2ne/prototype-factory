# PRD — Agent Stop-Loss Receipt

## Problem
- Stop unwanted agent work before sunk-cost output becomes a merge problem.

## Target user
- Developers and small product teams running long autonomous coding jobs.

## Source evidence
- S01, S09 from daily/2026-08-24/ideas.md.

## Core loop
- Set a value hypothesis and stop conditions, watch cost/files/tests drift, then stop, salvage, or continue with a signed decision receipt.

## First screen
- a live job card that states the value hypothesis, budget ceiling, stop conditions, and current drift.

## Key screens
- goal + stop-condition intake
- live work drift strip
- cost/file/test ledger
- salvage preview
- stop-or-continue gate
- decision receipt

## Design profile and theme
- Profile: operator-dense
- Theme: graphite workbench, one amber action accent, compact 40px evidence rows, 8px corners, no celebratory KPI hero

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
Build a responsive web app called "Agent Stop-Loss Receipt" for developers and small product teams running long autonomous coding jobs. First screen: a live job card that states the value hypothesis, budget ceiling, stop conditions, and current drift. Core interaction: inspect cost/files/tests against the original brief, preview salvageable artifacts, then stop, narrow, or continue and export a signed decision receipt. Required sections: goal and stop-condition intake; live work drift strip; cost/file/test ledger; salvage preview; stop-or-continue gate; decision receipt. Use realistic sample data and show idle, drifting, stopped, salvaged, and approved states. Design direction: use the operator-dense profile with a graphite workbench, one amber action accent, compact 40px evidence rows, square 8px controls, and no celebratory KPI hero.
```
