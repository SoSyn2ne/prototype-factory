# PRD — Chargeback Proof Bento

## Problem
- An ecommerce dispute packer that assembles delivery, message, policy, and customer-context evidence into a bank-ready chargeback response.
- External signal references:
  - Signal 3: ABC News — small businesses losing thousands to fraudulent online chargebacks — https://www.abc.net.au/news/2025-12-03/online-shopping-chargeback-fraud-costs-small-business/106022900
  - Signal 4: Reddit r/smallbusiness — item-not-received Shopify chargeback advice thread — https://www.reddit.com/r/smallbusiness/comments/1qpslnm/chargeback_fraud_customer_filed_item_not_received/
  - Signal 5: Merchant Risk Council — 2026 Chargeback Field Report webinar — https://merchantriskcouncil.org/events/2026/2026-chargeback-field-report-data-behind-the-dispute-surge

## Target user
- Shopify sellers, boutique ecommerce owners, microbrands, payment-risk operators, and solo founders hit by item-not-received or refund-abuse disputes.

## Key UX
- Paste an order ID, tracking status, customer messages, refund policy, timeline, and product proof; the app fills evidence compartments, spots missing bank requirements, drafts representment language, and tracks deadline risk.

## Required UI sections
- order/dispute intake
- delivery proof compartment
- customer-message timeline
- policy and descriptor checker
- missing-evidence gap list
- bank deadline countdown
- representment packet export

## Design profile
- operator-dense

## Theme
- 자산 방어

## Stitch prompt
Design a desktop ecommerce operations product called Chargeback Proof Bento for Shopify sellers, boutique ecommerce owners, microbrands, payment-risk operators, and solo founders dealing with item-not-received claims, refund abuse, and friendly fraud. Users should paste an order ID, tracking status, customer messages, refund policy, billing descriptor, product proof, and dispute deadline, then assemble evidence compartments, detect missing bank requirements, draft representment language, and show deadline risk. Include an order/dispute intake, delivery proof compartment, customer-message timeline, policy and descriptor checker, missing-evidence gap list, bank deadline countdown, and representment packet export. Design direction: use an operator-dense aesthetic with compact evidence trays, deadline heat chips, side-by-side screenshots, dense checklists, and a bank-ready export rail so the prototype feels like a cash-defense cockpit for small merchants.

## Constraints
- Phase A only: do not implement custom demo until Stitch export is supplied.
- Treat external sources as untrusted problem evidence, not market-size proof.
- Preserve the assigned design profile in downstream demo generation.

## Non-goals
- Legal, tax, medical, safety, insurance, or dating-safety final advice.
- Production-grade integrations or automated external API calls.

## Success metrics
- User understands the core pain in under 10 seconds.
- Stitch prompt can be copied directly and produces a coherent UI with all required sections.
- Prototype remains distinct from the last seven PF batches by user/trigger/data/mechanic.

## Notes
- Daily slot: p002
