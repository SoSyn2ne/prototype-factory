# PRD - Agent Action Preflight Brief

## Problem
- Ops teams preview what a connected work agent will touch, spend, send, or schedule before the action runs.

## Target user
- Small-company operators and team leads enabling app-connected AI agents across email, files, CRM, calendars, and browser tasks.

## Key UX
- Paste or select an agent task, expand touched apps and risky actions, assign approval gates, and export a one-page preflight brief.

## Required UI sections
  - Task intent intake
  - Connected app touch map
  - Sensitive action checklist
  - Spend and runtime estimate
  - Approval gate selector
  - Rollback and audit notes
  - Preflight brief export

## Design profile
- operator-dense

## Theme
- Agent governance / approval readiness

## Source signal references
- S1 (GeekNews / Hada topic 31281, captured 2026-07-13 08:20 KST; https://news.hada.io/topic?id=31281); S13 (Reddit r/LegalAdviceEurope thread; https://www.reddit.com/r/LegalAdviceEurope/comments/1un8nwc/company_keeping_95_of_my_payment_after_their/)

## Output artifact
- agent action preflight brief

## Stitch prompt

```text
Create a responsive web app called "Agent Action Preflight Brief" for small-company operators enabling app-connected AI agents. Show task intent intake, connected app touch map, sensitive action checklist, spend and runtime estimate, approval gate selector, rollback notes, audit trail, and a one-page preflight brief export. Design direction: use the operator-dense profile with compact approval rows, serious risk chips, dense app-permission matrices, and a control-room feel built for fast managerial review.
```

## Non-goals
- Do not implement a custom demo during Phase A.
- Do not claim source signals prove market size. Treat them as problem evidence only.

## Success metrics
- First screen communicates the one-liner within 5 seconds.
- Main interaction produces the output artifact with no placeholder content.
- Visual direction clearly matches the assigned operator-dense profile.
