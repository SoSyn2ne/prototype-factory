# PRD — De Minimis Duty Margin Guard

## Candidate type
- Practical / Commercial

## Theme
- 자산 방어

## Design profile
- financial-analyst

## Problem
- A SKU-level landed-cost desk that tells small import sellers which products will lose margin when low-value customs exemptions disappear.

## Target user
- Etsy sellers, small ecommerce importers, boutique resellers, craft brands, and founders sourcing low-value goods across borders without a trade-compliance team.

## Key UX
- Paste SKUs, supplier country, item value, HTS guess, carrier, current retail price, fulfillment path, and order volume; the app estimates duty exposure, flags products that need repricing or bundling, builds a broker/carrier checklist, and exports a customer-safe price-change note.

## Required UI sections
- SKU import intake
- duty exposure heatmap
- landed-cost margin table
- carrier/broker readiness checklist
- repricing and bundle simulator
- customer price-change note composer
- purchase-order hold/release queue

## External/community signal references
- Signal 1 — Reddit r/EtsySellers — De Minimis for all countries will be revoked in a month: https://www.reddit.com/r/EtsySellers/comments/1mdxq2g/de_minimis_for_all_countries_will_be_revoked_in_a/
- Signal 2 — Reddit r/Tariffs — De Minimis: what are small businesses doing to get ready?: https://www.reddit.com/r/Tariffs/comments/1mhl13l/de_minimis_what_are_small_businesses_doing_to_get/

## Stitch prompt
Design a desktop ecommerce finance product called De Minimis Duty Margin Guard for Etsy sellers, small ecommerce importers, boutique resellers, craft brands, and founders sourcing low-value goods across borders without a trade-compliance team. Users should paste SKUs, supplier country, item value, HTS guess, carrier, current retail price, fulfillment path, and order volume, then estimate duty exposure, flag products that need repricing or bundling, build a broker/carrier checklist, and export a customer-safe price-change note. Include a SKU import intake, duty exposure heatmap, landed-cost margin table, carrier/broker readiness checklist, repricing and bundle simulator, customer price-change note composer, and purchase-order hold/release queue. Design direction: use a financial-analyst aesthetic with clean ledger-like tables, navy and parchment surfaces, restrained red margin-loss flags, confidence bands, and sober trade-compliance hierarchy so the tool feels like a protective landed-cost cockpit rather than a generic ecommerce dashboard.

## Constraints
- Phase A only: spec/scaffold, no custom demo implementation.
- Preserve the assigned design profile in Stitch output.
- Use external signals as problem evidence, not market-size proof.

## Non-goals
- No external LLM API calls.
- No production backend or payer/platform/carrier integration in Phase A.
- No legal, medical, financial, or compliance advice claims.

## Success metrics
- User understands the target pain and next action within 10 seconds.
- The UI exposes all required sections with concrete sample content.
- Stitch export maps cleanly to /home/sy/Downloads/stitch_drop/2026-05-14/p001/.
