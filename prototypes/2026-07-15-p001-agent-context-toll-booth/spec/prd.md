# PRD — Agent Context Toll Booth

## Problem
- Coding teams see hidden context, latency, and dollar burn before they let an AI agent run.

## Target user
- Engineering leads, AI-agent operators, and devtool founders comparing coding-agent runs across repositories and toolchains.

## Key UX
- Paste an agent task, show expected context payload, system prompt overhead, repo files touched, latency risk, and a run/no-run cost receipt.

## Required UI sections
- task intake
- context payload meter
- tool comparison strip
- latency and cost forecast
- repo touch preview
- run receipt export

## Design profile
- operator-dense

## Theme
- AI agent cost governance, coding workflow, inference visibility

## Source signal references
- S1 Hada AI inference cost/context footprint
- S2 GitHub Trending runnable LLM apps
- S3 Reddit AI repo fatigue

## Stitch prompt
Build a polished web prototype called "Agent Context Toll Booth" for engineering teams comparing AI coding-agent runs. The first screen should let a user paste an agent task, then show expected context payload, hidden system prompt overhead, files likely touched, latency risk, dollar burn, and a final run/no-run receipt. Required sections: task intake, context payload meter, tool comparison strip, latency and cost forecast, repo touch preview, and receipt export. Design direction: use the operator-dense profile with compact evidence rows, dark neutral control-room surfaces, sharp cost badges, and no decorative hero.

## Constraints
- Phase A only: do not implement a custom demo here.
- The 08:30 Stitch automation should export code.html and screen.png into the expected drop folder.

## Success metrics
- A reviewer can understand the first screen, target user, source evidence, and design profile without additional context.
- Stitch prompt is copy/paste-ready and contains the tailored profile direction.
