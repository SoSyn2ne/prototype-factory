# PRD — Returns Margin Rescue Console

## Problem
- A returns-ops console that shows which refund requests should be saved, approved, or rerouted before margin disappears.
- Users currently split this workflow across multiple inboxes, spreadsheets, and ad-hoc judgment calls.
- The prototype should compress the highest-confidence next action into one desktop screen.

## Target user
- Ecommerce operations managers and DTC founders handling daily return volume.

## Key UX
- Triage high-cost return requests fast, see save opportunities, and apply the next best action without jumping between policy docs and support tools.

## Required UI sections
- Margin-at-risk hero
- Return triage queue
- Save-offer recommendation panel
- Reason-code heatmap
- Policy exception drawer
- Action outcome summary rail

## Constraints
- Time: Phase A only; do not build a custom production demo yet.
- Budget: static prototype / Stitch-export friendly.
- Platform: responsive web UI with a desktop-first composition.

## Non-goals
- No live integrations or external APIs.
- No backend auth, billing, or notification plumbing.
- No fully custom demo logic beyond scaffold + stub.

## Success metrics
- A user understands the core workflow in under 30 seconds.
- The main decision path is visually obvious without onboarding.
- A Stitch export can drop into the stub demo slot with minimal cleanup.

## Stitch prompt
- Design a sharp desktop web app screen called "Returns Margin Rescue Console" for ecommerce operators managing inbound return requests. Use a modern retail-ops visual direction with graphite, soft white, and controlled coral accents; keep hierarchy decisive, tables highly scannable, and the overall product feel operational, margin-aware, and trustworthy. Include: (1) a margin-at-risk hero with today's refund exposure, save-rate, and urgent CTA, (2) a return triage queue with order value, item type, reason, and SLA countdown, (3) a save-offer recommendation panel suggesting exchange, store credit, partial refund, or approve, (4) a reason-code heatmap showing the biggest return drivers, (5) a policy exception drawer for VIP, damaged, or final-sale edge cases, and (6) an action outcome summary rail with projected margin saved and customer-risk notes. Use realistic mocked ecommerce data, desktop-first layout, concise labels, and no code blocks.
