# PRD - Childcare Insurance Survival Packet

## Problem
- Childcare operators organize premium jumps, carrier denials, scam calls, and parent notices before coverage breaks.
- Source-backed trigger: S7, S8, S9.

## Target user
- Home-based daycare owners, childcare center directors, association coordinators, and local operators facing liability insurance hikes or coverage exits.

## Arrival path
- User arrives after encountering the trigger in the cited signals: S7, S8, S9.
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
- It must communicate in 3 seconds: Childcare operators organize premium jumps, carrier denials, scam calls, and parent notices before coverage breaks.

## Key screens
- coverage status header
- quote and denial log
- policy gap checklist
- scam call triage
- parent notice builder
- association pool comparison
- broker packet export

## Interaction rules
- Primary interaction: Log carrier quotes and denials, compare policy gaps, flag suspicious calls, build parent-facing notices, and export a survival packet for brokers or associations.
- Every major section should have realistic filled, warning, and empty states.
- Keep the source signal references visible in a quiet evidence drawer or footer.

## Assigned design profile
- field-ops

## Theme
- childcare insurance access, scam triage, operator survival documentation

## Source signal references
- S7: Small business owner says 2026 health insurance quotes may force shutdown (https://www.reddit.com/r/smallbusiness/comments/1pbs5ri/health_insurance/)
- S8: Childcare programs face high insurance costs and coverage access problems (https://www.newsfromthestates.com/article/high-insurance-costs-are-putting-child-care-programs-out-business-bill-proposes-solution)
- S9: Scammers target childcare providers (https://www.instagram.com/reel/DZOhWE6lPKM/?hl=en)

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
Build a production-grade web prototype called "Childcare Insurance Survival Packet" for childcare operators facing premium jumps and coverage uncertainty. The first screen must be a working field packet with coverage status, quote and denial log, policy gap checklist, scam call triage, parent notice builder, association pool comparison, and broker packet export. Use realistic sample data: home daycare, liability premium jump, two carrier denials, one suspicious caller, renewal deadline, and parent tuition sensitivity. Design direction: use the field-ops profile with reliable case-file rows, high-contrast deadline states, large mobile-friendly controls, one safety teal action accent, and practical document-export affordances.
```

## Development start prompt

```text
You are Codex working in the prototype-factory repo. Build Childcare Insurance Survival Packet as a polished local HTML/React prototype from this PRD.

Goal:
- Childcare operators organize premium jumps, carrier denials, scam calls, and parent notices before coverage breaks.

Implementation constraints:
- Make the first screen understandable in 3 seconds.
- Use realistic sample data and complete UI states.
- Include the key interaction, not just static cards.
- Avoid external paid APIs; mock data locally if needed.
- Preserve the assigned design profile: field-ops.
- Verify with build/typecheck when applicable and screenshot QA for desktop and mobile.
```
