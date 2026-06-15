# PRD - Chargeback Friction Switchboard

## Problem
- A merchant dispute console that decides when to add friction, route human review, or accept a risky order without punishing good customers.
- Evidence: S9 (Mastercard, Return Risk Intelligence launch, Apr 2026); S10 (Reddit r/ecommerce, bot/card-testing and blunt fraud friction, 2026).

## Target user
- Small ecommerce merchants, Shopify operators, payment ops teams, fraud analysts, and customer-support leads.

## Key UX
- A risk-routing console where each order, refund, and return is scored by behavior pattern, product value, history, shipping proof, support tone, and customer lifetime value, then routed to approve, step-up, hold, or human review.

## Required UI sections
- Live risk queue for orders, returns, refunds, and chargebacks
- Pattern graph for transaction history, return frequency, address/device mismatch, and reseller signals
- Friction decision cards: approve, OTP, signature, manual review, restocking proof, or deny
- Good-customer protection panel showing lifetime value, prior clean orders, and false-positive risk
- Evidence packet drawer with tracking, packing photos, customer messages, and platform dispute fields
- Support impact meter estimating angry tickets, delay cost, and chargeback exposure
- Rule tuning sandbox comparing blunt blocks vs stepped friction outcomes

## Assigned design profile
- operator-dense

## Theme
- 자산 방어 - fraud loss, false positives, platform risk, and customer trust defense.

## Practical vs fun label
- Practical / Commercial

## Stitch prompt
Build a production-grade ecommerce operations web app prototype called "Chargeback Friction Switchboard" for small merchants deciding how to handle risky orders, returns, refunds, and chargebacks without blocking legitimate buyers. The first screen must be a working risk-routing console with a live risk queue, pattern graph, friction decision cards, good-customer protection panel, evidence packet drawer, support impact meter, and rule tuning sandbox. Use realistic sample data: card-testing spike, reseller bot pattern, high-value return, repeat buyer with clean history, suspicious missing-item claim, support tickets, tracking proof, and a possible platform dispute. Design direction: use the operator-dense profile with compact charcoal/fog queues, crisp fraud and support KPIs, dense comparison tables, and one sharp warning accent for orders needing immediate human review. Do not make a marketing landing page; the first screen must be the working app.

## Constraints
- Time: Phase A only; do not implement custom demo before Stitch export.
- Budget: Use existing PF scaffolding and generated Stitch output.
- Platform: Web prototype exported from Stitch into the expected drop folder.

## Non-goals
- No custom demo implementation during Phase A.
- No external LLM API calls.
- Do not claim market size from these sources; treat them as problem evidence.

## Success metrics
- Stitch output has all required sections on the first working screen.
- The prototype preserves the assigned design profile.
- The main workflow is visible without a marketing landing page.

## Notes
- Expected Stitch drop folder: /home/sy/Downloads/stitch_drop/2026-06-16/
