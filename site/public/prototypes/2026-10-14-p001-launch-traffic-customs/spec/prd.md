# PRD — Launch Traffic Customs

## Product intent
Help Korean indie launchers distinguish people, useful agents, scrapers, and attacks from evidence before blocking traffic.

## Arrival / validation
GeekNews, HN, and Product Hunt launch checklists. Validate with five launch-log replays; charge for a launch-day pass if operators export and share the passport.

## Core loop
Receive event → inspect request evidence → assign a customs lane → preview cost/false-positive impact → undo or confirm → export first-hour passport.

## First screen / key screens
A moving arrival belt with five visitors, evidence chips, bandwidth cost, and one uncertain case. Screens: belt, evidence drawer, consequence preview, decision history, passport.

## Interaction rules
Never auto-block uncertainty; every label shows evidence and confidence; all decisions remain reversible.

## QA / risks
Desktop and mobile incident views; human, useful agent, unknown bot, attack, and false-positive states. Risks: IP privacy and overconfident labels.

## Development start prompt
```text
Build a responsive launch-room prototype with mocked access-log events, evidence-based classification, reversible block simulation, and an exportable first-hour passport. Make the moving arrival belt—not KPI cards—the hero interaction.
```
