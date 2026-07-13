# PRD — HalluSquat Install Guard

## Problem
- AI agents get a pre-install evidence gate before they fetch hallucinated or typosquatted repos.

## Target user
- Devtool founders, platform engineers, and AI-agent operators who let coding agents install packages or clone repos.

## Key UX
- Paste an agent's proposed install/clone command, compare claimed package identity against source evidence, flag hallucination/typosquat risk, then export a compact allow/block receipt.

## Required UI sections
- command intake
- package/repo identity panel
- source evidence timeline
- risk diff table
- allow/block decision rail
- audit receipt export

## Design profile
- operator-dense

## Theme
- agent security, provenance, install safety

## Source signal references
- S1 HalluSquatting agent exploit path
- S2 Hada AI-agent mistake tracing
- S3 GitHub trending queryable knowledge graph

## Stitch prompt
Build a polished web prototype called "HalluSquat Install Guard" for AI-agent operators. The first screen should let a user paste an agent-generated install or git clone command, then show package identity evidence, source URL checks, hallucination/typosquat risk, and a final allow/block receipt. Required sections: command intake, source evidence timeline, risk diff table, decision rail, and audit receipt export. Design direction: use the operator-dense profile with compact rows, deep neutral surfaces, tabular evidence, one sharp warning accent, and no decorative hero.

## Constraints
- Phase A only: do not implement a custom demo here.
- The 08:30 Stitch automation should export code.html and screen.png into the expected drop folder.

## Success metrics
- A reviewer can understand the first screen, target user, source evidence, and design profile without additional context.
- Stitch prompt is copy/paste-ready and contains the tailored profile direction.
