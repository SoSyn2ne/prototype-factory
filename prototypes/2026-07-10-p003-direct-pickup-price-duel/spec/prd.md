# PRD — Direct Pickup Price Duel

## Problem
- Restaurants show the real gap between delivery-app totals and direct pickup, then turn it into a customer-safe nudge.

## Target user
- Independent restaurants and cafes that want more direct pickup orders without sounding anti-customer or anti-driver.

## Key UX
- Enter menu items, platform markup, delivery fees, service fees, and pickup price; generate a visual price duel and polite direct-order message.

## Required UI sections
  - Same-order price comparison
  - Delivery-app fee stack
  - Restaurant margin impact
  - Customer savings badge
  - Direct pickup CTA copy
  - Social story export
  - Weekly direct-order lift tracker

## Design profile
- financial-analyst

## Theme
- Restaurant margin / consumer price clarity

## Source signal references
- S11 (Reddit r/restaurantowners, 2026-ish discussion surfaced in search); S12 (Reddit r/AusFinance, 2026-07 week discussion)

## Output artifact
- direct pickup price-duel receipt

## Stitch prompt

```text
Create a responsive web app called “Direct Pickup Price Duel” for independent restaurants comparing delivery-app totals against direct pickup. Show the same-order item list, app markup, delivery and service fees, restaurant margin impact, customer savings badge, direct pickup CTA copy, social story export, and a weekly lift tracker. Design direction: use the financial-analyst profile with clean fee math, restrained green and red deltas, high-trust receipt styling, and owner-ready interpretation beside every number.
```

## Non-goals
- Do not implement a custom demo during Phase A.
- Do not claim source signals prove market size. Treat them as problem evidence only.

## Success metrics
- First screen communicates the one-liner within 5 seconds.
- Main interaction produces the output artifact with no placeholder content.
- Visual direction clearly matches the assigned financial-analyst profile.
