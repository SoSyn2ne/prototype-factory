# PRD — Robot Vacuum Wedge Workshop

## Problem
- Prototype and print-fit a physical ramp for the obstacle your robot vacuum cannot cross.

## Target user
- Robot-vacuum owners, makerspaces, and repair cafés solving one awkward threshold or furniture base.

## Source evidence
- S07 from daily/2026-08-24/ideas.md.

## Core loop
- Measure the obstacle with a phone guide, choose material and clearance, manipulate a wedge cross-section, run wheel/body fit checks, and export a cut/print template.

## First screen
- a phone-guided three-measure capture with a live cross-section of the obstacle.

## Key screens
- measurement guide
- obstacle profile
- wedge editor
- wheel/body clearance test
- material/cut plan
- print-fit receipt

## Design profile and theme
- Profile: field-ops
- Theme: workbench gray, one cobalt action accent, dimension-first diagrams, 48px measure controls, squared cards, no sci-fi 3D spectacle

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
Build a mobile companion prototype called "Robot Vacuum Wedge Workshop" for robot-vacuum owners, makerspaces, and repair cafés solving one awkward threshold or furniture base. First screen: a phone-guided three-measure capture with a live cross-section of the obstacle. Core interaction: record height, run-up, and clearance, choose material, manipulate a wedge profile, test wheel/body fit, and export a cut or 3D-print template with a fit receipt. Required sections: measurement guide; obstacle profile; wedge editor; wheel/body clearance test; material and cut plan; print-fit receipt. Show too-steep, body-strike, material-limit, fit, and remeasure states. Design direction: use the field-ops profile with workbench gray, one cobalt action accent, dimension-first diagrams, 48px measure controls, squared cards, and no sci-fi 3D spectacle.
```
