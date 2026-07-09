# PRD — Agent Loop Stoplight Gym

## Problem
- A playful trainer where teams set stop conditions for coding agents and watch loops succeed, stall, or burn budget.

## Target user
- Developers, product teams, and operators learning to run autonomous coding agents without vague “keep going forever” instructions.

## Key UX
- Pick a mission, set evidence gates and stop conditions, run fake loop cards, and see whether the agent should continue, ask, stop, or escalate.

## Required UI sections
  - Mission card picker
  - Stop condition builder
  - Evidence gate checklist
  - Loop event deck
  - Budget and time meter
  - Continue / ask / stop buttons
  - Team runbook poster

## Design profile
- playful-experimental

## Theme
- Agent operations training

## Source signal references
- S2 (GeekNews / Hada front page item “루프 시작하기”, captured 2026-07-10); S7 (GeekNews / Hada front page, captured 2026-07-10); S9 (Consumer Finance Monitor, 2026-07-02)

## Output artifact
- agent loop stoplight runbook poster

## Stitch prompt

```text
Create a playful training web app called “Agent Loop Stoplight Gym” for teams learning autonomous coding-agent operations. Include mission card picker, stop condition builder, evidence gate checklist, loop event deck, budget/time meter, continue/ask/stop controls, and a team runbook poster. Toy rule: choose stop conditions before the loop starts; score points only when you stop at the right evidence gate. Design direction: use the playful-experimental profile with bold stoplight states, training-game composition, readable scoring, tactile controls, and no generic dashboard framing.
```

## Non-goals
- Do not implement a custom demo during Phase A.
- Do not claim source signals prove market size. Treat them as problem evidence only.

## Success metrics
- First screen communicates the one-liner within 5 seconds.
- Main interaction produces the output artifact with no placeholder content.
- Visual direction clearly matches the assigned playful-experimental profile.
