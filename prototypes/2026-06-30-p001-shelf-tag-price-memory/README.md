# Shelf Tag Price Memory

A shopper-side receipt camera that catches digital shelf tag price drift before checkout.

## Phase
- Phase A spec for Stitch generation.

## Design Profile
- calm-consumer

## Theme
- 자산 방어

## Source Signals
- S1: New York Post, 2026-06-29 - Major retailers are rolling out digital shelf tags, sparking fear that faster updates could become dynamic or discriminatory pricing. (https://nypost.com/2026/06/29/business/digital-price-tags-are-spreading-at-retailers-like-walmart-and-sparking-surveillance-fears/)
- S2: Reddit r/maryland, 2026 - A shopper says broken/missing electronic tags already make it harder to trust whether the displayed price matches a prior visit. (https://www.reddit.com/r/maryland/comments/1qiwb5c/dynamic_pricing_bill_inside_grocery_stores/)
- S3: Axios Detroit, 2026-06-29 - Michigan legislators are moving to ban surveillance pricing while many states consider similar algorithmic pricing rules. (https://www.axios.com/local/detroit/2026/06/29/michigan-surveillance-pricing-ban-law-proposal)

## Stitch Prompt

```text
Create a responsive web prototype for "Shelf Tag Price Memory", a shopper-side receipt camera that catches digital shelf tag price drift before checkout. Target user: price-sensitive grocery and big-box shoppers who distrust fast-changing electronic shelf labels. Build the key UX around snapping a shelf tag, saving a timestamped price memory, comparing it with cart/receipt totals, then generating a calm price-match script. Required UI sections: Today price capture rail, saved shelf-tag timeline, cart vs receipt mismatch table, surveillance pricing confidence badge, and price-match script drawer. Design direction: use the calm-consumer profile with soft neutral surfaces, one gentle trust accent, clear next-step buttons, and reassuring helper copy so the experience feels protective instead of paranoid. Use source signals S1, S2, and S3 as problem evidence only.
```
