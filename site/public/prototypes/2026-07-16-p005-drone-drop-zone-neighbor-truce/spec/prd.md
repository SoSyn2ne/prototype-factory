# PRD - Drone Drop Zone Neighbor Truce

## Problem
- Neighborhoods rehearse safe drone delivery drop zones, noise windows, and complaint evidence before Prime Air arrives.
- Source-backed trigger: S10, S11.

## Target user
- HOA boards, apartment managers, suburban households, municipal staff, and local retailers preparing for autonomous drone delivery.

## Arrival path
- User arrives after encountering the trigger in the cited signals: S10, S11.
- Likely entry: saved link from an operator forum, agency audit, community thread, or founder note.

## Business / validation route
- Validate with a clickable Stitch demo and 5-10 target users from the cited audience.
- Conversion test: ask whether they would upload/paste real evidence, export the receipt, or pay for a lightweight workflow.

## Core loop
- Input the messy real-world evidence.
- See a scored work surface with risk, missing fields, and suggested next action.
- Adjust scenario controls.
- Export a decision card, packet, or storyboard.

## First screen
- The first screen is the working product surface, not a landing page.
- It must communicate in 3 seconds: Neighborhoods rehearse safe drone delivery drop zones, noise windows, and complaint evidence before Prime Air arrives.

## Key screens
- property drop-zone map
- noise window selector
- privacy and pet concern checklist
- neighbor objection board
- delivery rule card
- incident photo log
- city/HOA packet export

## Interaction rules
- Primary interaction: Draw property drop zones, simulate noise windows and no-fly concerns, capture neighbor objections, and export a posted rule card plus complaint log.
- Every major section should have realistic filled, warning, and empty states.
- Keep the source signal references visible in a quiet evidence drawer or footer.

## Assigned design profile
- field-ops

## Theme
- drone delivery neighborhood operations, noise and privacy conflict prevention

## Source signal references
- S10: Amazon Prime Air expands drone delivery to Cleveland suburbs (https://www.axios.com/local/cleveland/2026/07/13/amazon-prime-air-drone-ohio)
- S11: Drone delivery expansion brings noise, privacy, payload, weather, and safety concerns (https://apnews.com/article/e1dbd3638c60e464d6533e74eb046ce6)

## Output artifact
- Exportable decision artifact matching the workflow: receipt, packet, rule card, storyboard, or verdict.

## Share / return loop
- The exported artifact should be useful enough to share with a team, household, customer, committee, or social audience.

## Constraints
- Time: Stitch Phase B should be prompt-driven and fast.
- Budget: no external paid APIs.
- Platform: responsive web prototype.

## Non-goals
- Do not implement a custom demo during Phase A.
- Do not claim the external signals prove market size.
- Do not use a generic dashboard if the workflow has a clearer mechanic.

## Success metrics
- Target user understands the trigger in under 3 seconds.
- User can identify the next action without instructions.
- Export artifact is specific enough to screenshot or share.

## QA / screenshot criteria
- Desktop first screen shows the main workflow, not a marketing hero.
- Mobile first screen keeps controls readable and avoids overlap.
- Required sections are visible through navigation or scroll.
- Design profile is expressed as concrete density, accent, controls, states, and layout.

## Stitch prompt

```text
Build a production-grade web prototype called "Drone Drop Zone Neighbor Truce" for neighborhoods preparing for drone delivery. The first screen must be a working field planning surface with a property drop-zone map, noise window selector, privacy and pet concern checklist, neighbor objection board, delivery rule card, incident photo log, and city/HOA packet export. Use realistic sample data: suburban yards, $4.99 drone option, package drop point, dog reaction, school pickup window, and one noise complaint. Design direction: use the field-ops profile with map/list hybrid layout, sturdy public-works styling, high-contrast conflict chips, one sky-cyan action accent, and no futuristic sci-fi decoration.
```

## Development start prompt

```text
You are Codex working in the prototype-factory repo. Build Drone Drop Zone Neighbor Truce as a polished local HTML/React prototype from this PRD.

Goal:
- Neighborhoods rehearse safe drone delivery drop zones, noise windows, and complaint evidence before Prime Air arrives.

Implementation constraints:
- Make the first screen understandable in 3 seconds.
- Use realistic sample data and complete UI states.
- Include the key interaction, not just static cards.
- Avoid external paid APIs; mock data locally if needed.
- Preserve the assigned design profile: field-ops.
- Verify with build/typecheck when applicable and screenshot QA for desktop and mobile.
```
