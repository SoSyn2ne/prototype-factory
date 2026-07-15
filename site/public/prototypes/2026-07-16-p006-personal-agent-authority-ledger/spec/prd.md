# PRD - Personal Agent Authority Ledger

## Problem
- Founders and households cap what a life-admin AI agent may spend, book, message, or change without a human.
- Source-backed trigger: S12, S13.

## Target user
- Founders, executive assistants, family-office operators, busy parents, and power users experimenting with autonomous personal agents.

## Arrival path
- User arrives after encountering the trigger in the cited signals: S12, S13.
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
- It must communicate in 3 seconds: Founders and households cap what a life-admin AI agent may spend, book, message, or change without a human.

## Key screens
- agent workflow roster
- authority limit matrix
- spend cap meter
- message and calendar approval queue
- liability note drawer
- incident rewind
- daily consent ledger export

## Interaction rules
- Primary interaction: List agent workflows, set spend and message authority, review pending actions, show liability notes, and produce a daily consent ledger before the agent acts.
- Every major section should have realistic filled, warning, and empty states.
- Keep the source signal references visible in a quiet evidence drawer or footer.

## Assigned design profile
- operator-dense

## Theme
- personal AI agent governance, spend authority, household and founder operations

## Source signal references
- S12: A founder reportedly spent the equivalent of $4M building a personal AI agent to run life admin (https://www.vanityfair.com/story/olive-ai-agent)
- S13: MCP/action-tool ecosystem research reports thousands of tool projects and rising action tools (https://arxiv.org/abs/2607.10123)

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
Build a production-grade web prototype called "Personal Agent Authority Ledger" for founders and households using autonomous life-admin AI agents. The first screen must be a working authority console with agent workflow roster, spend and booking caps, message/calendar approval queue, liability note drawer, incident rewind, and daily consent ledger export. Use realistic sample data: travel booking, childcare schedule message, shopping order, vendor payment, calendar reschedule, and an over-budget warning. Design direction: use the operator-dense profile with compact permission tables, one sharp violet action accent, disciplined neutral surfaces, severe approve/block states, audit-friendly rows, and no friendly chatbot mascot.
```

## Development start prompt

```text
You are Codex working in the prototype-factory repo. Build Personal Agent Authority Ledger as a polished local HTML/React prototype from this PRD.

Goal:
- Founders and households cap what a life-admin AI agent may spend, book, message, or change without a human.

Implementation constraints:
- Make the first screen understandable in 3 seconds.
- Use realistic sample data and complete UI states.
- Include the key interaction, not just static cards.
- Avoid external paid APIs; mock data locally if needed.
- Preserve the assigned design profile: operator-dense.
- Verify with build/typecheck when applicable and screenshot QA for desktop and mobile.
```
