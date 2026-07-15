# PRD - Craft Material Runout Board

## Problem
- Handmade sellers translate leather, dye, thread, and glue into product capacity before orders outrun supplies.
- Source-backed trigger: S4, S14.

## Target user
- Handmade Shopify sellers, leather goods makers, jewelry studios, craft-kit shops, and tiny workshops with material-based capacity limits.

## Arrival path
- User arrives after encountering the trigger in the cited signals: S4, S14.
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
- It must communicate in 3 seconds: Handmade sellers translate leather, dye, thread, and glue into product capacity before orders outrun supplies.

## Key screens
- material pantry
- product recipe builder
- makeable-unit counter
- order capacity forecast
- supplier restock list
- preorder risk lane
- drop readiness receipt

## Interaction rules
- Primary interaction: Enter products and material recipes, convert raw materials into makeable units, warn on preorder risk, and generate a supplier shopping list before a drop goes live.
- Every major section should have realistic filled, warning, and empty states.
- Keep the source signal references visible in a quiet evidence drawer or footer.

## Assigned design profile
- field-ops

## Theme
- craft inventory, raw material bill of materials, small workshop fulfillment

## Source signal references
- S4: Shopify craft seller asks how to track raw materials for leather goods (https://www.reddit.com/r/shopify/rising/)
- S14: GitHub fresh top repos include scroll-world, knockoff, T3MP3ST, grok-build, and local-llm (https://api.github.com/search/repositories?q=created:%3E2026-07-01&sort=stars&order=desc&per_page=10)

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
Build a production-grade web prototype called "Craft Material Runout Board" for handmade Shopify sellers tracking product capacity from raw materials. The first screen must be a working workshop board with a material pantry, recipe builder for each product, makeable-unit counter, order capacity forecast, supplier restock list, preorder risk lane, and drop readiness receipt. Use realistic sample data: leather hides, thread, glue, dye, buckles, wallets, belts, and a weekend product drop. Design direction: use the field-ops profile with sturdy workshop-style rows, large inventory controls, one safety-orange action accent for runout risk, tactile checklist cards, and no glossy SaaS hero.
```

## Development start prompt

```text
You are Codex working in the prototype-factory repo. Build Craft Material Runout Board as a polished local HTML/React prototype from this PRD.

Goal:
- Handmade sellers translate leather, dye, thread, and glue into product capacity before orders outrun supplies.

Implementation constraints:
- Make the first screen understandable in 3 seconds.
- Use realistic sample data and complete UI states.
- Include the key interaction, not just static cards.
- Avoid external paid APIs; mock data locally if needed.
- Preserve the assigned design profile: field-ops.
- Verify with build/typecheck when applicable and screenshot QA for desktop and mobile.
```
