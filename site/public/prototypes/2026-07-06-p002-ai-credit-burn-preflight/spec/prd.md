# PRD — AI Credit Burn Preflight

## Problem
- A team cost simulator that shows what an agent task may burn before developers click run.
- Source evidence: S3 - Times of India report on Microsoft 365 commercial price increases from July 2026: AI-powered productivity features are becoming bundled cost events for businesses, creating budget anxiety around seats and renewals. S5 - GitHub Community discussion on Copilot AI credits: Developers complain that agent-mode credits are unpredictable and expensive, especially for review, debugging, and repository tasks.

## Target user
- Engineering leads and solo developers using metered AI coding tools, agent mode, review agents, or paid AI seats.

## Key UX
- Describe a task, select repo size and tool mode, then compare credit-risk bands, cheaper run shapes, and a preflight approval card.

## Required UI sections
- Task intent box
- Repo/task complexity sliders
- Credit risk estimate
- Run-shape comparison
- Approval guardrail
- Post-run receipt

## Design profile
- financial-analyst
- Design direction must be tailored inside the Stitch prompt and avoid generic dashboard styling.

## Theme
- 자산 방어 / AI 비용

## Source signal references
- S3: Times of India report on Microsoft 365 commercial price increases from July 2026 — https://timesofindia.indiatimes.com/technology/tech-news/microsoft-to-hike-office-365-business-prices-from-july-2026-what-users-should-know/articleshow/125781890.cms
- S5: GitHub Community discussion on Copilot AI credits — https://github.com/orgs/community/discussions/198015

## Stitch prompt
Create a responsive web prototype for "AI Credit Burn Preflight". Target user: engineering teams and solo devs worried that AI agent tasks will burn unpredictable credits. Core UX: the user enters a task, chooses repository size, mode such as review/debug/build, model intensity, and retry policy; the product shows low/base/high credit estimates, a cheaper alternative run plan, approval guardrails, and a post-run receipt placeholder. Required sections: task preflight form, credit-risk meter, run-shape comparison table, budget guardrail card, recent run receipts, and decision footer. Use the financial-analyst design profile: ink/off-white analytical workbench, restrained KPI cards, clear confidence badges, tabular numbers, and charts paired with written interpretation.

## Success metrics
- A Stitch operator can paste the prompt without rewriting it.
- The first screen shows the actual workflow, not a landing page.
- The output artifact is visible before the fold or immediately after the primary input.
