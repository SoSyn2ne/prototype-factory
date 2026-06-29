# PRD - Gig Algorithm Pay Diary

## Problem
A worker-side shift diary that turns app assignments, wait time, deactivations, and pay drops into a shareable evidence timeline.

## Target User
Delivery, rideshare, and task-app workers who need proof when algorithmic decisions cut pay or access.

## Key UX
Log shifts quickly on mobile, attach screenshots, detect pay anomalies, and create a worker-rights evidence pack.

## Required UI Sections
- One-thumb shift log
- Screenshot evidence vault
- Pay anomaly timeline
- Deactivation risk notes
- Shareable advocate report

## Assigned Design Profile
field-ops

## Theme
역전

## Source Signal References
- S14: Human Rights Watch, 2026-06-03 - Gig workers are managed by algorithmic systems that affect earnings, assignments, safety, and deactivation risk. Source: https://www.hrw.org/news/2026/06/03/ai-already-runs-the-gig-economy
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
Create a responsive web prototype for "Gig Algorithm Pay Diary", a worker-side shift diary that turns app assignments, wait time, deactivations, and pay drops into a shareable evidence timeline. Target user: delivery, rideshare, and task-app workers who need proof when algorithmic decisions cut pay or access. Build the key UX around quick mobile logging, screenshot attachment, pay anomaly detection, and a worker-rights evidence pack. Required UI sections: one-thumb shift log, screenshot evidence vault, pay anomaly timeline, deactivation risk notes, and shareable advocate report. Design direction: use the field-ops profile with high-contrast mobile rows, 44px touch targets, obvious checklist states, and urgent colors only in small badges. Use source signals S14 and S10 as problem evidence only.
```
