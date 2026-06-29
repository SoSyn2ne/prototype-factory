# PRD - Shelf Tag Price Memory

## Problem
A shopper-side receipt camera that catches digital shelf tag price drift before checkout.

## Target User
Price-sensitive grocery and big-box shoppers who distrust fast-changing electronic shelf labels.

## Key UX
Snap a shelf tag, save a timestamped price memory, compare it with cart/receipt totals, then generate a calm price-match script.

## Required UI Sections
- Today price capture rail
- Saved shelf-tag timeline
- Cart vs receipt mismatch table
- Surveillance pricing confidence badge
- Price-match script drawer

## Assigned Design Profile
calm-consumer

## Theme
자산 방어

## Source Signal References
- S1: New York Post, 2026-06-29 - Major retailers are rolling out digital shelf tags, sparking fear that faster updates could become dynamic or discriminatory pricing. Source: https://nypost.com/2026/06/29/business/digital-price-tags-are-spreading-at-retailers-like-walmart-and-sparking-surveillance-fears/
- S2: Reddit r/maryland, 2026 - A shopper says broken/missing electronic tags already make it harder to trust whether the displayed price matches a prior visit. Source: https://www.reddit.com/r/maryland/comments/1qiwb5c/dynamic_pricing_bill_inside_grocery_stores/
- S3: Axios Detroit, 2026-06-29 - Michigan legislators are moving to ban surveillance pricing while many states consider similar algorithmic pricing rules. Source: https://www.axios.com/local/detroit/2026/06/29/michigan-surveillance-pricing-ban-law-proposal

## Success Metrics
- User can complete the core decision/proof workflow in under 3 minutes.
- Output is specific enough to share with a family member, customer, advocate, staff member, or peer.
- Stitch render preserves the required UI sections and design profile.

## Non-goals
- Do not implement production integrations, payments, login, or external API calls in Phase A.
- Do not claim legal, medical, insurance, labor, or financial advice.

## Stitch Prompt

```text
Create a responsive web prototype for "Shelf Tag Price Memory", a shopper-side receipt camera that catches digital shelf tag price drift before checkout. Target user: price-sensitive grocery and big-box shoppers who distrust fast-changing electronic shelf labels. Build the key UX around snapping a shelf tag, saving a timestamped price memory, comparing it with cart/receipt totals, then generating a calm price-match script. Required UI sections: Today price capture rail, saved shelf-tag timeline, cart vs receipt mismatch table, surveillance pricing confidence badge, and price-match script drawer. Design direction: use the calm-consumer profile with soft neutral surfaces, one gentle trust accent, clear next-step buttons, and reassuring helper copy so the experience feels protective instead of paranoid. Use source signals S1, S2, and S3 as problem evidence only.
```
