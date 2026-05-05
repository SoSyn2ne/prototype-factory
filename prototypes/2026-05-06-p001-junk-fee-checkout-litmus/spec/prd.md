# PRD — Junk Fee Checkout Litmus

## Problem
- A compliance workbench that catches hidden-fee and subscription-renewal disclosure mistakes before checkout screenshots become regulator bait.
- External signal references:
  - FTC unfair/deceptive fees FAQ: https://www.ftc.gov/business-guidance/resources/rule-unfair-or-deceptive-fees-frequently-asked-questions
  - Massachusetts AGO hidden-fee/auto-renewal regulations: https://www.richmaylaw.com/goodbye-junk-fees-new-ago-regulations-eliminate-hidden-fees-on-sales-and-auto-renewing-subscriptions/

## Target user
- Small lodging operators, event sellers, subscription apps, gyms, SaaS founders, ecommerce merchants, and local-service businesses that sell online without a legal team.

## Key UX
- Paste checkout copy, pricing screenshots, fee names, trial terms, renewal terms, and cancellation steps; the app flags hidden-fee risk, confusing renewal language, missing total price, and screenshot-ready fixes.

## Required UI sections
- checkout screenshot intake
- mandatory fee detector
- auto-renewal disclosure lane
- cancel-flow friction checklist
- state/federal rule contrast cards
- regulator-bait screenshot preview
- fix-copy generator and audit receipt

## Design profile
- operator-dense

## Theme
- 자산 방어

## Stitch prompt
Design a desktop compliance product called Junk Fee Checkout Litmus for small lodging operators, event sellers, subscription apps, gyms, SaaS founders, ecommerce merchants, and local-service businesses that sell online without a legal team. Users should paste pricing-page copy, checkout screenshots, fee labels, trial terms, renewal language, cancellation steps, and business location, then flag hidden-fee risk, confusing renewal language, missing total price, and screenshot-ready fixes. Include a checkout screenshot intake, mandatory fee detector, auto-renewal disclosure lane, cancel-flow friction checklist, state/federal rule contrast cards, regulator-bait screenshot preview, and fix-copy generator with audit receipt. Design direction: use an operator-dense aesthetic with compact compliance tables, annotated checkout screenshots, red/yellow risk chips, dark control surfaces, and crisp fix queues so the prototype feels like a regulatory command center rather than a generic legal checklist.

## Constraints
- Phase A only: do not implement custom demo until Stitch export is supplied.
- Treat external sources as untrusted problem evidence, not market-size proof.
- Preserve the assigned design profile in downstream demo generation.

## Non-goals
- Legal, tax, medical, or insurance final advice.
- Production-grade integrations or automated external API calls.

## Success metrics
- User understands the core pain in under 10 seconds.
- Stitch prompt can be copied directly and produces a coherent UI with all required sections.
- Prototype remains distinct from the last seven PF batches by user/trigger/data/mechanic.

## Notes
- Daily slot: p001
