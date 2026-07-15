# PRD - Agentic Commerce Checkout Gap Lab

## Problem
- Shopify AI-commerce builders see where catalog discovery loses shoppers before native checkout exists.
- Source-backed trigger: S2, S3.

## Target user
- Shopify app builders, agency ecommerce teams, and AI stylist or discovery-app founders using Shopify Catalog, UCP, ChatGPT, Copilot, or Shop surfaces.

## Arrival path
- User arrives after encountering the trigger in the cited signals: S2, S3.
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
- It must communicate in 3 seconds: Shopify AI-commerce builders see where catalog discovery loses shoppers before native checkout exists.

## Key screens
- AI channel flow mapper
- catalog quality score
- checkout gap board
- attribution confidence strip
- merchant integration checklist
- lost-shopper replay
- handoff task export

## Interaction rules
- Primary interaction: Paste an AI-commerce flow, map discovery -> product detail -> merchant handoff -> checkout, then expose attribution gaps, no-checkout dead ends, product data quality, and next integration tasks.
- Every major section should have realistic filled, warning, and empty states.
- Keep the source signal references visible in a quiet evidence drawer or footer.

## Assigned design profile
- operator-dense

## Theme
- agentic commerce, AI referral attribution, checkout conversion gaps

## Source signal references
- S2: Shopify sellers ask whether AI referrals are real or just shifted search traffic (https://www.reddit.com/r/shopify/comments/1ttmcp1/ai_referrals_may_turn_product_pages_into_the_new/)
- S3: Shopify operators discuss Agentic Storefronts, Catalog quality, UCP checkout gaps, and AI-query visibility (https://www.reddit.com/r/shopify/rising/)

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
Build a production-grade web prototype called "Agentic Commerce Checkout Gap Lab" for Shopify app builders and ecommerce teams testing AI-commerce flows. The first screen must be a working commerce-flow workbench where a user maps discovery from ChatGPT/Copilot/Shop, product detail quality, merchant handoff, checkout availability, attribution confidence, and lost-shopper replay. Required sections: AI channel flow mapper, catalog quality score, checkout gap board, attribution confidence strip, merchant integration checklist, lost-shopper replay, and handoff task export. Design direction: use the operator-dense profile with compact conversion rows, one electric blue action accent, disciplined neutral panels, 40px controls, visible empty/error states, and no decorative marketing hero.
```

## Development start prompt

```text
You are Codex working in the prototype-factory repo. Build Agentic Commerce Checkout Gap Lab as a polished local HTML/React prototype from this PRD.

Goal:
- Shopify AI-commerce builders see where catalog discovery loses shoppers before native checkout exists.

Implementation constraints:
- Make the first screen understandable in 3 seconds.
- Use realistic sample data and complete UI states.
- Include the key interaction, not just static cards.
- Avoid external paid APIs; mock data locally if needed.
- Preserve the assigned design profile: operator-dense.
- Verify with build/typecheck when applicable and screenshot QA for desktop and mobile.
```
