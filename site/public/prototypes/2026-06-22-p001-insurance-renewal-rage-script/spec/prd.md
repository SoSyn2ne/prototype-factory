# PRD — Insurance Renewal Rage Script

## Problem
- Small-business health insurance renewal quotes are creating anger before brokers have a clear explanation packet. Operators compare PEOs, PPO/HSA tradeoffs, and plan downgrades while brokers manually shop carriers and handle weekend client calls.

## Target user
- Commercial health-insurance brokers, benefits advisors, and very small employers preparing for painful 2026 renewals.

## Constraints
- Time: Must help before the renewal call or coverage decision deadline.
- Budget: Should assume users want a lightweight prototype, not a full HRIS or broker-management system.
- Platform: Responsive Stitch web prototype; no external APIs or protected health data.

## Non-goals
- Do not quote real insurance plans or provide legal/benefits advice.
- Do not become a full enrollment platform.

## Success metrics
- A broker can paste three plan options and produce a client-facing renewal packet in under 5 minutes.
- First screen makes premium shock, deadline, and next action obvious.
- Export memo includes objection script, tradeoffs, and missing evidence.

## Notes
- Design profile: operator-dense.
- Theme: 자산 방어.
- Sources: Reddit r/smallbusiness health insurance quote shock; Reddit broker/account manager stress; Tradeoffs small-business health insurance cost pressure.
- Stitch prompt is stored in meta.json and daily/2026-06-22/ideas.md.
