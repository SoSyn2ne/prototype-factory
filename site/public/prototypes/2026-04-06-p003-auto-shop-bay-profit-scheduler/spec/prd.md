# PRD — Auto Shop Bay Profit Scheduler

## Problem
- Repair shops miss daily profit targets when empty bay time, parts delays, and overtime creep are discovered too late to rebalance the schedule.

## Target user
- Independent auto shop owners, service advisors, and multi-bay operations managers.

## Key UX
- Compare bay profitability at a glance, open one daypart, and rebalance jobs, technician load, and parts readiness from a single planning view.

## Required UI sections
- daily margin hero
- bay utilization board
- technician load timeline
- parts-readiness panel
- schedule-adjustment drawer
- recovered-profit rail

## Constraints
- Time: Phase A only; scaffold and docs, not a full custom simulator.
- Budget: No paid APIs or external LLM calls.
- Platform: Desktop-first internal operations board for shop managers.

## Non-goals
- Not a full shop-management suite.
- Not a technician mobile app.
- Not a parts procurement system.

## Success metrics
- Managers can identify margin leaks by bay and daypart in under 2 minutes.
- The selected daypart view makes technician load and parts readiness actionable immediately.
- The prototype clearly shows how schedule moves recover profit.

## Stitch prompt
- Design a desktop repair-shop operations dashboard called **Auto Shop Bay Profit Scheduler** for independent auto service businesses. It should help operators improve bay profitability by spotting schedule gaps, overtime creep, parts delays, and low-yield jobs before the workday is lost. Include a daily margin hero, a bay utilization board, a technician load timeline, a parts-readiness panel, a schedule-adjustment drawer, and a recovered-profit rail. **Design direction: use an industrial-modern service aesthetic with graphite surfaces, steel gray neutrals, and bold red-orange accents; keep hierarchy muscular and clear, scheduling panels dense but readable, and the product feel hands-on, efficient, and margin-aware.**
