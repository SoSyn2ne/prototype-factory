# PRD — Parcel Dimension Fee Radar

## One-liner
A shipping-ops desk that flags cartons most likely to trigger dimensional-weight or parcel compliance fees before labels are purchased.

## Problem
- Ecommerce teams often discover surcharge damage only after carrier invoices land.
- Dimensional-weight, oversize, and declared-vs-measured mismatches quietly erase margin on mixed-SKU orders.
- Operators need a pre-label decision screen, not another after-the-fact reporting table.

## Target user
- Primary: ecommerce fulfillment leads and 3PL operators shipping mixed-size parcels.
- Secondary: finance or operations managers reviewing shipping margin leakage.

## Why now
- Carriers keep tightening parcel dimension compliance and fee enforcement.
- Margin pressure makes preventable shipping leakage more painful than before.
- Warehouse teams already capture order, carton, and carrier data but lack a clear intervention view.

## Key UX
- Triage today's outbound shipments by surcharge risk before label purchase.
- Inspect why a parcel is risky in one panel.
- Choose the fastest mitigation: smaller box, split shipment, carrier swap, or manual review.

## Required UI sections
- Margin-at-risk hero
- Outbound parcel watchlist
- Dimension variance inspector
- Carrier rule comparison panel
- Packaging swap recommender
- Surcharge exposure summary rail

## Constraints
- Time: Phase A only; no custom demo implementation.
- Budget: should be usable by lean operations teams without enterprise overhead.
- Platform: desktop web dashboard.

## Non-goals
- Live carrier API integration.
- Full cartonization engine.
- Invoice reconciliation workflow.

## Success metrics
- Reduce predicted surcharge exposure on today's queue.
- Cut time-to-decision for risky parcels.
- Increase percentage of shipments reviewed before label creation.

## Stitch-ready design direction
Use a disciplined shipping-ops visual direction with deep navy, cool gray, and signal orange accents; make hierarchy obvious, tables highly scannable, and the overall product feel practical, cost-sensitive, and warehouse-ready.
