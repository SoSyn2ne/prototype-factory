# PRD - Tariff Margin War Room

## Problem
A pricing and purchase-order cockpit for small import-heavy shops deciding what to reorder, delay, or reprice under tariff uncertainty.

## Target user
Boutique retailers, Shopify sellers, specialty food/wine shops, and small apparel brands exposed to import cost swings.

## Key UX
Import pending POs or SKU rows, model landed-cost scenarios, then mark each item as reorder, hold, substitute, pre-sell, or reprice with a customer-facing explanation.

## Required UI sections
- Today’s margin exposure strip with tariff, freight, FX, and refund assumptions
- SKU decision table with landed cost, current price, target margin, and risk flag
- PO scenario cards for order-now, delay, split shipment, or domestic substitute
- Customer price-change copy builder with plain-language reason codes
- Supplier negotiation checklist and refund-tracking lane
- Owner decision log for accountant/bookkeeper review

## Design profile
- financial-analyst

## Theme
- 자산 방어

## Inspired by external signals
- S4
- S5

## Stitch prompt
Create a responsive web app prototype for “Tariff Margin War Room,” a financial decision cockpit for small businesses managing import-cost and tariff uncertainty. Include: margin exposure strip, SKU decision table, PO scenario cards, customer price-change copy builder, supplier negotiation checklist, refund-tracking lane, and owner decision log. Design direction: use the financial-analyst profile with dense but readable tables, muted alert colors, strong numeric hierarchy, scenario chips, and spreadsheet familiarity; it should feel like a calm CFO surface for a worried shop owner.

## Constraints
- Phase A only: no custom demo implementation.
- Stitch export expected at /home/sy/Downloads/stitch_drop/2026-05-26/p002/.
- Treat source signals as problem evidence, not market-size proof.

## Non-goals
- Do not make legal, medical, or policy determinations.
- Do not automate real platform submissions or external messages.

## Success metrics
- A user can understand the pain, key workflow, and needed screens from the first viewport.
- Stitch output preserves the assigned design profile.
- The concept is visibly distinct from the last seven PF batches.
