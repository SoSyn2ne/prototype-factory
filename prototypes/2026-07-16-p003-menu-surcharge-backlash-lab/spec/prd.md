# PRD - Menu Surcharge Backlash Lab

## Problem
- Restaurant owners test fee wording, menu-price moves, and comp risk before customers revolt at checkout.
- Source-backed trigger: S5, S6.

## Target user
- Independent restaurant owners, GMs, bookkeepers, and menu consultants deciding whether to use wellness, card, service, or baked-in price changes.

## Arrival path
- User arrives after encountering the trigger in the cited signals: S5, S6.
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
- It must communicate in 3 seconds: Restaurant owners test fee wording, menu-price moves, and comp risk before customers revolt at checkout.

## Key screens
- fee scenario tabs
- guest receipt preview
- margin recovery calculator
- backlash risk meter
- staff answer script
- menu copy proofreader
- weekly comp-loss tracker

## Interaction rules
- Primary interaction: Compare line-item fees against baked-in price moves, preview guest receipt reactions, model margin recovery, and generate staff scripts plus menu disclosure copy.
- Every major section should have realistic filled, warning, and empty states.
- Keep the source signal references visible in a quiet evidence drawer or footer.

## Assigned design profile
- financial-analyst

## Theme
- restaurant surcharge backlash, menu pricing, customer trust and margin defense

## Source signal references
- S5: Restaurant customers object to itemized health insurance and service fees (https://www.reddit.com/r/EndTipping/comments/1r5dqca/this_is_a_new_one_for_me_small_business_health/)
- S6: Restaurant owners report price-sensitive middle-income customers, haggling, and free-food demands (https://www.reddit.com/r/restaurantowners/comments/1qg93d3/is_the_slow_down_for_middle_income_customers_more/)

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
Build a production-grade web prototype called "Menu Surcharge Backlash Lab" for independent restaurant owners testing fee and price changes. The first screen must be a working pricing lab with fee scenario tabs, guest receipt preview, margin recovery calculator, backlash risk meter, staff answer script, menu disclosure copy, and weekly comp-loss tracker. Use realistic sample data: 3 percent wellness fee, card fee, $18 burger, $15 cocktail, food-cost pressure, and customer complaint examples. Design direction: use the financial-analyst profile with precise restaurant margin math, calm graphite/off-white comparison panels, one restrained amber risk accent, tabular numbers, and plain-language interpretation beside every fee.
```

## Development start prompt

```text
You are Codex working in the prototype-factory repo. Build Menu Surcharge Backlash Lab as a polished local HTML/React prototype from this PRD.

Goal:
- Restaurant owners test fee wording, menu-price moves, and comp risk before customers revolt at checkout.

Implementation constraints:
- Make the first screen understandable in 3 seconds.
- Use realistic sample data and complete UI states.
- Include the key interaction, not just static cards.
- Avoid external paid APIs; mock data locally if needed.
- Preserve the assigned design profile: financial-analyst.
- Verify with build/typecheck when applicable and screenshot QA for desktop and mobile.
```
