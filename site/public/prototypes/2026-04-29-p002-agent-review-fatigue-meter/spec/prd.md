# PRD — Agent Review Fatigue Meter

## Type
- Practical / Commercial

## Theme
- 자산 방어

## Design profile
- financial-analyst

## Problem
- A code-review command desk that tells teams when AI-agent output is getting too large, too trusted, or too repetitive for humans to review safely.

## Target user
- Solo builders, tech leads, and AI-heavy product teams supervising multiple coding agents and trying not to ship invisible regressions.

## Key UX
- Drop in PRs or agent task logs, score review fatigue risk, cluster suspicious churn, assign fresh-context reviewers, and create a stop/merge/rework decision note.

## Required UI sections
- agent output intake
- review fatigue gauge
- risky diff cluster map
- human attention budget planner
- fresh-context reviewer queue
- merge/rework decision memo

## External signal references
- HN AI coding-agent review-fatigue thread: https://news.ycombinator.com/item?id=47545748
- Reddit process-before-tools complaint: https://www.reddit.com/r/EntrepreneurRideAlong/comments/1kmarfk/tools_wont_save_your_business_fix_your_process/

## Stitch prompt
Design a desktop code-review command desk called Agent Review Fatigue Meter for solo builders, tech leads, and AI-heavy product teams supervising multiple coding agents. It should reveal when agent output is too large, too trusted, or too repetitive for humans to review safely by scoring fatigue risk, clustering suspicious churn, assigning fresh-context reviewers, and producing a stop/merge/rework decision note. Include an agent output intake, review fatigue gauge, risky diff cluster map, human attention budget planner, fresh-context reviewer queue, and merge/rework decision memo. Design direction: use a financial-analyst aesthetic with precise risk scoring, sober navy and graphite surfaces, variance-style badges, disciplined comparison tables, and restrained warning red so the product feels like a due-diligence terminal for AI-assisted shipping.

## Constraints
- Phase A only: scaffold/spec, no custom implementation yet.
- Wait for Stitch export in /home/sy/Downloads/stitch_drop/2026-04-29/p002/

## Non-goals
- Do not claim market-size validation from search snippets.
- Do not implement production integrations in Phase A.

## Success metrics
- Stitch export can be generated from the prompt.
- p002 has complete meta/spec content and is visible in the daily index.
