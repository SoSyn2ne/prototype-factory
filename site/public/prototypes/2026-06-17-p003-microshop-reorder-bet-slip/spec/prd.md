# PRD - Microshop Reorder Bet Slip

## Problem
- A reorder decision slip for tiny retailers stuck between spreadsheet counts, seasonal swings, and cash tied up in stock.
- Evidence: S5 (Small retailers still fight spreadsheets, inaccurate counts, and seasonal swings; SimplyDepo, 2026); S6 (Small inventory tools are often enterprise-priced for shops with 50-5,000 items; InventoryQuick, 2026).

## Target user
- Boutique owners, small wholesalers, pop-up sellers, and Korean/US micro-retail operators managing 50-5,000 SKUs without enterprise software.

## Key UX
- Operator imports or types today’s counts, supplier lead time, cash limit, shelf space, and seasonal event; the app creates a buy/hold/clear slip with confidence and cash risk.

## Required UI sections
- Today’s reorder queue with buy, hold, and clear labels
- SKU count intake with spreadsheet error flags
- Seasonality and event calendar strip
- Cash tied-up meter and storage pressure indicator
- Supplier lead-time and minimum-order comparison
- Stockout shame list for items customers ask for repeatedly
- One-page purchase order slip with rationale

## Assigned design profile
- operator-dense

## Theme
- 자산 방어 / 역전 - small-shop cash defense, avoiding stockout embarrassment, and making sharper buys than bigger competitors.

## Practical vs fun label
- Practical / Commercial

## Stitch prompt
Build a production-grade web app prototype called "Microshop Reorder Bet Slip" for tiny retailers making inventory decisions from messy spreadsheets. The first screen must be a working reorder console with a buy/hold/clear queue, SKU count intake, spreadsheet error flags, seasonal event strip, cash tied-up meter, supplier lead-time comparison, stockout shame list, and one-page purchase order slip. Use realistic sample data: 184 SKUs, summer festival demand, inaccurate spreadsheet count, limited storage shelf, supplier MOQ, 12-day lead time, and 1.8M won cash ceiling. Design direction: use the operator-dense profile with compact tables, disciplined navy/charcoal surfaces, one sharp action accent, and margin-aware hierarchy for fast daily decisions. Do not make a marketing landing page; the first screen must be the working app.

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
- Expected Stitch drop folder: /home/sy/Downloads/stitch_drop/2026-06-17/p003/
