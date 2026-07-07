# PRD - Agent Permission Panic Switch

## Problem
- A small-team control room that rehearses what AI agents may touch, spend, delete, or leak before a real workflow goes live.
- Source evidence: S3 - Hacker News Show HN, 2026-07-08, Scan your AI agents for dangerous capabilities: Developers debate contextual access control for AI agents, arguing RBAC alone is too blunt when tool calls depend on live context. S4 - Hacker News Show HN, Git for AI Agents: Agent users want prompt-level history and undo because multiple prompts can produce one meaningful code change.

## Target user
- Founders, engineering leads, and ops owners letting AI agents touch browsers, repos, email drafts, payment tools, or customer records.

## Key UX
- List each agent workflow, map allowed tools, simulate three dangerous tool-call scenarios, and export a go/no-go permission card plus emergency stop checklist.

## Required UI sections
- Agent workflow inventory
- Tool permission matrix
- Context-sensitive risk simulator
- Spend/delete/send toggles
- Human approval lane
- Panic switch checklist
- Team sign-off receipt

## Assigned design profile
- operator-dense
- Design direction: disciplined operator-console styling, compact permission tables, sharp warning badges, and obvious stop/approve controls.

## Theme
- 자산 방어

## Practical vs fun
- Practical / Commercial

## Source signal references
- S3: Hacker News Show HN, 2026-07-08, Scan your AI agents for dangerous capabilities — https://news.ycombinator.com/item?id=48804182
- S4: Hacker News Show HN, Git for AI Agents — https://news.ycombinator.com/item?id=48063548

## Stitch prompt
Create a responsive web app called "Agent Permission Panic Switch" for Founders, engineering leads, and ops owners letting AI agents touch browsers, repos, email drafts, payment tools, or customer records.. The app is based on observed user pull from S3: Developers debate contextual access control for AI agents, arguing RBAC alone is too blunt when tool calls depend on live context. S4: Agent users want prompt-level history and undo because multiple prompts can produce one meaningful code change. The app should use a Permission Fire Drill around the trigger moment "List each agent workflow, map allowed tools, simulate three dangerous tool-call scenarios, and export a go/no-go permission card plus emergency stop checklist." and make the first screen communicate "A small-team control room that rehearses what AI agents may touch, spend, delete, or leak before a real workflow goes live.". Build the core workflow around user-entered evidence and produce agent permission go/no-go receipt. Required sections: Agent workflow inventory; Tool permission matrix; Context-sensitive risk simulator; Spend/delete/send toggles; Human approval lane; Panic switch checklist; Team sign-off receipt. Emotional pressure to make visible: 자산 방어. Design direction: use the operator-dense profile with disciplined operator-console styling, compact permission tables, sharp warning badges, and obvious stop/approve controls. Avoid generic dashboard framing; make the main interaction feel like Permission Fire Drill.

## Success metrics
- A Stitch operator can paste the prompt without rewriting it.
- The first screen shows the actual workflow, not a landing page.
- The output artifact is visible before the fold or immediately after the primary input.
