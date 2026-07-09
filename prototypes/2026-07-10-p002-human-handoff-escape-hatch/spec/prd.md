# PRD — Human Handoff Escape Hatch

## Problem
- E-commerce and SaaS teams catch AI-support dead ends and route customers to a human before trust leaks away.

## Target user
- Small e-commerce stores, SaaS founders, and support leads using AI chat widgets or AI email responders without mature escalation ops.

## Key UX
- Review failed bot answers, collect the visitor’s intent and contact path, assign a human owner, and measure rescued revenue or churn risk.

## Required UI sections
  - Bot dead-end queue
  - Customer intent capture
  - Human owner assignment
  - SLA and urgency tags
  - Saved reply handoff context
  - Recovered revenue / churn-risk receipt
  - Bot knowledge-gap backlog

## Design profile
- calm-consumer

## Theme
- Support trust / AI handoff

## Source signal references
- S3 (GeekNews / Hada front page, captured 2026-07-10); S10 (Reddit r/customerexperience, 2026 discussion); S8 (Arizona business regulation coverage, 2026)

## Output artifact
- human handoff rescue receipt

## Stitch prompt

```text
Create a responsive web app called “Human Handoff Escape Hatch” for small e-commerce and SaaS teams whose AI support bot sometimes dead-ends. Include a bot failure queue, customer intent capture, human owner assignment, urgency/SLA tags, saved reply context, recovered revenue estimate, and a bot knowledge-gap backlog. Design direction: use the calm-consumer profile with reassuring service surfaces, soft but clear alert states, readable conversation cards, and one obvious route-to-human action.
```

## Non-goals
- Do not implement a custom demo during Phase A.
- Do not claim source signals prove market size. Treat them as problem evidence only.

## Success metrics
- First screen communicates the one-liner within 5 seconds.
- Main interaction produces the output artifact with no placeholder content.
- Visual direction clearly matches the assigned calm-consumer profile.
