# PRD - Tariff DDP Margin Splitter

## Problem
Cross-border micro-sellers decide whether to absorb, split, or expose new tariff costs before US buyers vanish.

## Target user
Canadian, Korean, EU, and Etsy/Shopify micro-sellers shipping low-value goods to US customers after de minimis changes.

## Key UX
Seller enters SKU cost, origin, US order value, tariff scenario, DDP shipping quote, and buyer price tolerance; the app shows absorb/split/pass-through outcomes and writes buyer-safe listing copy.

## Required UI sections
- Tariff exposure header by SKU, origin, and US buyer share
- Order-value simulator for percentage duty, flat-fee fear, DDP, and unpaid-duty delivery
- Margin split table for absorb, split, pass-through, and US-only pause
- USMCA/origin evidence checklist with unknown-risk flags
- Buyer message preview for listing, checkout note, and post-purchase email
- SKU triage board for keep, reprice, bundle, localize, or delist
- Weekly lost-order tracker by country and tariff assumption

## Design profile
financial-analyst

## Theme
자산 방어 / 역전 - micro-export margin defense, US buyer retention, and tariff uncertainty.

## Source signal references
- S5: End of US de minimis exemption creates tariff confusion for Etsy sellers (https://www.etsy.com/il-en/seller-handbook/article/navigating-evolving-global-tariff-policies/1355662653395)
- S6: Canadian and Etsy sellers fear tariff math will kill US orders (https://www.reddit.com/r/EtsySellers/comments/1mielqx/canadian_sellers_what_your_plans_with_the_de/)

## Stitch prompt
Build a production-grade web app prototype called "Tariff DDP Margin Splitter" for Etsy and Shopify micro-sellers shipping low-value goods into the US after de minimis changes. The first screen must be a working tariff margin workbench with a tariff exposure header, order-value simulator, margin split table, origin evidence checklist, buyer message preview, SKU triage board, and weekly lost-order tracker. Use realistic sample data: handmade jewelry from Canada, $35 and $82 orders, 80% US customer share, uncertain USMCA status, DDP carrier quote, 35% tariff scenario, and three listing-price options. Design direction: use the financial-analyst profile with calm analytical panels, restrained warning tones, precise margin math, and confidence cues that help sellers decide without panic. Do not make a marketing landing page; the first screen must be the working app.

## Non-goals
- Do not build a marketing landing page for Phase A.
- Do not implement a custom demo during Phase A.
- Do not claim external sources prove market size; they are problem evidence only.

## Success metrics
- User can understand the problem, target user, key workflow, and visual direction from the spec.
- Stitch can paste the prompt directly and generate a working first-screen app prototype.
- The prototype slot has no placeholder requirement fields.
