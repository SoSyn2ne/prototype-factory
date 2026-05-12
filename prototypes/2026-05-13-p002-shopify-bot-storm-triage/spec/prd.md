# PRD — Shopify Bot Storm Triage

## Problem
- A panic-to-procedure incident board for fake carts, spam floods, suspicious orders, and chargeback risk in small stores.
- Search/community evidence suggests this is a live pain, not a generic dashboard rename.

## Target user
- Shopify merchants, DTC founders, handmade sellers, ecommerce assistants, and agencies maintaining client stores during sudden fraud or bot spikes.

## Key UX
- Connect or paste store signals such as fake carts per hour, suspicious orders, spam-email floods, payment attempts, refund exposure, Shopify alerts, and current checkout settings; the app identifies the likely incident type, prioritizes lockdown steps, builds evidence, and creates a customer-safe recovery checklist.

## Required UI sections
- incident pulse intake
- fake-cart and order anomaly board
- checkout lockdown checklist
- evidence and screenshot vault
- chargeback exposure estimate
- customer communication composer
- post-incident hardening plan

## Design profile
- `field-ops` — reflected in the Stitch prompt and visual direction.

## Theme
- 자산 방어

## External signal references
- Signal 7 — ABC News — Chargeback fraud crippling small online businesses grappling with higher inflation — https://www.abc.net.au/news/2026-05-04/fraudulent-chargebacks-hit-small-businesses-financial-pressure/106479208
- Signal 8 — Reddit r/shopify — Store wrecked overnight with fraudulent charges / bot-cart attack chatter — https://www.reddit.com/r/shopify/

## Stitch prompt
Design a desktop ecommerce incident product called Shopify Bot Storm Triage for Shopify merchants, DTC founders, handmade sellers, ecommerce assistants, and agencies maintaining client stores during sudden fraud or bot spikes. Users should connect or paste store signals such as fake carts per hour, suspicious orders, spam-email floods, payment attempts, refund exposure, Shopify alerts, and current checkout settings, then identify the likely incident type, prioritize lockdown steps, build evidence, and create a customer-safe recovery checklist. Include an incident pulse intake, fake-cart and order anomaly board, checkout lockdown checklist, evidence and screenshot vault, chargeback exposure estimate, customer communication composer, and post-incident hardening plan. Design direction: use a field-ops aesthetic with sturdy incident cards, steel-and-cyan status rails, clear triage severity, checklist-first interaction, and operational command-center spacing so the app feels like a rescue console for a live store crisis, not a marketing analytics dashboard.

## Constraints
- Time: Phase A spec/scaffold only; do not implement custom demo yet.
- Budget: Use Stitch export workflow for Phase B.
- Platform: Web prototype, desktop-first unless consumer flow benefits from responsive cards.

## Non-goals
- Do not claim legal, medical, tax, or financial certainty.
- Do not integrate live paid APIs in Phase A.

## Success metrics
- A user understands the painful trigger within 5 seconds.
- The main workflow is clear from intake to analysis to action/export/share.
- The UI can be built from the Stitch prompt without additional explanation.

## Notes
- Candidate category: Practical / Commercial.
