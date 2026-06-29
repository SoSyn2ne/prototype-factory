# PRD - AI Bot Toll Booth

## Problem
A publisher traffic workbench that separates useful search bots from unpaid AI scraping and drafts access rules.

## Target User
Small publishers, niche media operators, and high-value content sites watching AI crawlers eat traffic.

## Key UX
Review bot traffic by behavior, label beneficial vs extractive agents, simulate search visibility risk, and export robots/access policy copy.

## Required UI Sections
- Bot identity ledger
- Behavior-based traffic classifier
- Search visibility risk simulator
- License negotiation notes
- Robots/access rule exporter

## Assigned Design Profile
operator-dense

## Theme
자산 방어

## Source Signal References
- S9: Axios, 2026-06-23 - Publishers complain that the same Google crawler is used for search visibility and AI training, making opt-out risky. Source: https://www.axios.com/2026/06/23/people-inc-google-ai-search-crawler
- S10: TechRadar Pro, 2026-06-24 - AI agent traffic can exceed human traffic, with spoofed trusted bots and agentic browsers creating security and data-leakage blind spots. Source: https://www.techradar.com/pro/the-invisible-traffic-problem-why-ai-agents-are-your-biggest-blind-spot

## Success Metrics
- User can complete the core decision/proof workflow in under 3 minutes.
- Output is specific enough to share with a family member, customer, advocate, staff member, or peer.
- Stitch render preserves the required UI sections and design profile.

## Non-goals
- Do not implement production integrations, payments, login, or external API calls in Phase A.
- Do not claim legal, medical, insurance, labor, or financial advice.

## Stitch Prompt

```text
Create a responsive web prototype for "AI Bot Toll Booth", a publisher traffic workbench that separates useful search bots from unpaid AI scraping and drafts access rules. Target user: small publishers, niche media operators, and high-value content sites watching AI crawlers eat traffic. Build the key UX around reviewing bot traffic by behavior, labeling beneficial vs extractive agents, simulating search visibility risk, and exporting robots/access policy copy. Required UI sections: bot identity ledger, behavior-based traffic classifier, search visibility risk simulator, license negotiation notes, and robots/access rule exporter. Design direction: use the operator-dense profile with crisp queues, compact status badges, one urgency accent, and a sober control-room feel. Use source signals S9 and S10 as problem evidence only.
```
