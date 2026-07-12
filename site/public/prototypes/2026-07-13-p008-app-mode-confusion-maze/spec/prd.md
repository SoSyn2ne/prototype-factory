# PRD - App Mode Confusion Maze

## Problem
- A playful onboarding maze helps users decide whether to use chat, work-agent, coding-agent, browser, or scheduled-task mode.

## Target user
- Power users and teams overwhelmed by overlapping AI app modes, model gates, subscriptions, and connected-tool choices.

## Key UX
- Answer scenario cards, route through a mode maze, reveal cost/permission tradeoffs, and end with a shareable mode-choice map.

## Required UI sections
  - Scenario card deck
  - Mode maze board
  - Cost and quota hints
  - Connected-tool permission gates
  - Wrong-mode failure jokes
  - Recommended mode map
  - Shareable decision receipt

## Design profile
- playful-experimental

## Theme
- AI app onboarding / mode literacy

## Source signal references
- S1 (GeekNews / Hada topic 31281, captured 2026-07-13 08:20 KST; https://news.hada.io/topic?id=31281); S12 (Reddit r/AI_Agents discussion surfaced in search; https://www.reddit.com/r/AI_Agents/comments/1rw5xvh/whats_the_best_ai_to_actually_pay_for_right_now/)

## Output artifact
- AI mode-choice decision receipt

## Stitch prompt

```text
Create a responsive playful web app called "App Mode Confusion Maze" for users choosing between chat, work-agent, coding-agent, browser, and scheduled-task modes. Include scenario cards, a mode maze board, cost and quota hints, connected-tool permission gates, wrong-mode failure jokes, recommended mode map, and shareable decision receipt. Design direction: use the playful-experimental profile with crisp game-board navigation, lively but readable colors, tactile choice cards, and funny failure states that still teach the right workflow.
```

## Non-goals
- Do not implement a custom demo during Phase A.
- Do not claim source signals prove market size. Treat them as problem evidence only.

## Success metrics
- First screen communicates the one-liner within 5 seconds.
- Main interaction produces the output artifact with no placeholder content.
- Visual direction clearly matches the assigned playful-experimental profile.
