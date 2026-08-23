# PRD — Utility Mobile Shadow-Workflow Mapper

## Problem
- Capture field crews’ offline workarounds and translate them into a fixable mobile workflow map.

## Target user
- Utility supervisors and field technicians stuck between official mobile apps and actual site conditions.

## Source evidence
- S03 from daily/2026-08-24/ideas.md.

## Core loop
- Record each paper/photo/call workaround at the moment it happens, connect it to signal/device/weather context, then replay the broken flow for product owners.

## First screen
- today’s job timeline with the official step beside the workaround actually used.

## Key screens
- job start
- official-step timeline
- workaround capture
- context tags
- handoff loss map
- fix brief export

## Design profile and theme
- Profile: field-ops
- Theme: sunlight-readable slate, one safety-cyan accent, 48px glove controls, dense event rail, offline-first states

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
Build a tablet-first field app called "Utility Mobile Shadow-Workflow Mapper" for utility supervisors and technicians whose official mobile workflow breaks on site. First screen: today’s job timeline with the official step beside the workaround actually used. Core interaction: tap when a step fails, capture paper/photo/call workaround plus signal, device, weather, and safety context, then replay the handoff loss and export a fix brief. Required sections: job start; official-step timeline; workaround capture; context tags; handoff loss map; fix brief export. Use realistic meter-inspection data and show online, offline, sync-conflict, recovered, and unresolved states. Design direction: use the field-ops profile with sunlight-readable slate surfaces, one safety-cyan accent, 48px glove controls, a dense event rail, and no desktop sidebar maze.
```
