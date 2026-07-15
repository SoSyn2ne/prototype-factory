# PRD - Scroll-World Brand Diorama Booth

## Problem
- Creators turn a brand moodboard into a tiny scrollable 3D world with scene beats and shareable reveal frames.
- Source-backed trigger: S14.

## Target user
- Portfolio designers, indie brands, creator agencies, hackathon builders, and devrel teams who want a memorable visual demo from sparse brand inputs.

## Arrival path
- User arrives after encountering the trigger in the cited signals: S14.
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
- It must communicate in 3 seconds: Creators turn a brand moodboard into a tiny scrollable 3D world with scene beats and shareable reveal frames.

## Key screens
- brand seed intake
- world mood selector
- scene beat timeline
- 3D scroll preview frame
- reveal frame tuner
- asset checklist
- share storyboard export

## Interaction rules
- Primary interaction: Drop brand words and assets, choose scene beats, preview a scrollable world timeline, tune reveal frames, and export a shareable launch storyboard.
- Every major section should have realistic filled, warning, and empty states.
- Keep the source signal references visible in a quiet evidence drawer or footer.

## Assigned design profile
- playful-experimental

## Theme
- scrollable 3D brand storytelling, portfolio visual toy, creator demo packaging

## Source signal references
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
Build a polished web prototype called "Scroll-World Brand Diorama Booth" for creators turning a brand moodboard into a scrollable 3D story. The first screen must show a brand seed intake, world mood selector, scene beat timeline, 3D scroll preview frame, reveal frame tuner, asset checklist, and share storyboard export. Use realistic sample data: coffee brand, launch slogan, three visual motifs, product texture, color swatches, and four scroll beats. Design direction: use the playful-experimental profile with bold portfolio energy, one saturated lime accent, readable creator controls around the preview, controlled motion cues, funny empty states, and no static landing-page hero.
```

## Development start prompt

```text
You are Codex working in the prototype-factory repo. Build Scroll-World Brand Diorama Booth as a polished local HTML/React prototype from this PRD.

Goal:
- Creators turn a brand moodboard into a tiny scrollable 3D world with scene beats and shareable reveal frames.

Implementation constraints:
- Make the first screen understandable in 3 seconds.
- Use realistic sample data and complete UI states.
- Include the key interaction, not just static cards.
- Avoid external paid APIs; mock data locally if needed.
- Preserve the assigned design profile: playful-experimental.
- Verify with build/typecheck when applicable and screenshot QA for desktop and mobile.
```
