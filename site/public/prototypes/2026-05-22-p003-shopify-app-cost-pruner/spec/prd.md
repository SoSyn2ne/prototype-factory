# PRD - Shopify App Cost Pruner

## One-liner
A margin-control console that shows indie merchants which app subscriptions are quietly eating profit and what to cut or consolidate first.

## Category
Practical / Commercial

## Target user
Small Shopify merchants, ecommerce consultants, and store operators who suspect their app stack is bloated but do not know what each tool really costs.

## Problem
- Shopify merchants often discover that basic ecommerce functions require multiple paid apps.
- App overlap, volume-based pricing, transaction fees, and support handoffs quietly erode margin.

## Key UX
Connect or paste an app list, then see monthly app spend, overlap, order-volume scaling traps, support friction, and a cut/keep/consolidate plan ranked by margin impact.

## Required UI sections
- App stack import or manual list
- Monthly spend and revenue percentage strip
- Duplicate function map
- Scaling/transaction-fee warnings
- Cut, keep, consolidate queue
- Consultant-ready audit report

## Design profile
operator-dense

## Theme
자산 방어

## Signal references
- Reddit r/shopify: everything is a subscription - https://www.reddit.com/r/shopify/comments/1sm2hly/starting_a_shopify_store_and_realizing_everything/
- Reddit r/shopifyDev: merchants stuck between cheap apps and enterprise pricing - https://www.reddit.com/r/shopifyDev/comments/1rarbr9/what_are_merchants_actually_struggling_with_in/
- TechRadar: Shopify 2026 review cost notes - https://www.techradar.com/reviews/shopify

## Stitch prompt
Create a responsive ecommerce operator dashboard called "Shopify App Cost Pruner" for small Shopify merchants and ecommerce consultants auditing bloated app stacks. The product imports or manually captures an app list, then shows monthly app spend, revenue percentage, duplicate functions, order-volume scaling traps, support friction, and a ranked cut/keep/consolidate plan with projected monthly savings. Required screens/sections: left navigation, spend KPI strip, app table, overlap map, fee warning drawer, pruning queue, savings forecast, and consultant-ready audit report. Design direction: use the operator-dense profile with compact tables, crisp margin badges, restrained industrial neutrals, one sharp action accent, and no landing-page filler.

## Constraints
- Time: Phase A spec only; Stitch export expected later.
- Budget: spec-first commercial prototype.
- Platform: responsive web.

## Non-goals
- Do not connect to real Shopify stores in Phase A.
- Do not recommend removing mission-critical apps without merchant review.

## Success metrics
- User can identify top 3 cost-cutting or consolidation opportunities.
- Audit report makes monthly savings visible.

## Notes
- Inspired by 2026 app-stack cost complaints from merchants and implementers.
