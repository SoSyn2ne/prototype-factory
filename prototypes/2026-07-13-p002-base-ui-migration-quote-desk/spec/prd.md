# PRD - Base UI Migration Quote Desk

## Problem
- Frontend teams turn a shadcn/Radix-to-Base UI migration into a client-ready scope, risk, and quote packet.

## Target user
- Freelance frontend developers, agencies, and internal design-system owners maintaining shadcn/ui projects.

## Key UX
- Scan component inventory, mark risky primitives, estimate effort by screen, and generate a migration quote with before/after proof.

## Required UI sections
  - Component inventory
  - Radix vs Base dependency lanes
  - Risk and effort scoring
  - Screen-by-screen quote table
  - Regression checklist
  - Client explanation copy
  - Migration packet export

## Design profile
- financial-analyst

## Theme
- Frontend migration / agency quoting

## Source signal references
- S2 (GeekNews / Hada topic 31163, captured 2026-07-13; https://news.hada.io/topic?id=31163); S3 (GitHub Trending, captured 2026-07-13; https://github.com/trending)

## Output artifact
- Base UI migration quote packet

## Stitch prompt

```text
Create a responsive web app called "Base UI Migration Quote Desk" for frontend teams moving shadcn/Radix projects toward Base UI. Include component inventory, Radix vs Base dependency lanes, risk and effort scoring, screen-by-screen quote table, regression checklist, client explanation copy, and migration packet export. Design direction: use the financial-analyst profile with clean tables, sober effort math, precise risk deltas, and quote-ready summaries that feel credible to a client.
```

## Non-goals
- Do not implement a custom demo during Phase A.
- Do not claim source signals prove market size. Treat them as problem evidence only.

## Success metrics
- First screen communicates the one-liner within 5 seconds.
- Main interaction produces the output artifact with no placeholder content.
- Visual direction clearly matches the assigned financial-analyst profile.
