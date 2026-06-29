# PRD - Delivery Menu Margin Blacklight

## Problem
A restaurant operator tool that reveals which delivery-app menu items secretly lose money after commission and promos.

## Target User
Independent restaurant owners trying to survive third-party delivery commissions without angering customers.

## Key UX
Paste menu items, commission rates, packaging costs, discounts, and platform promos; the app flags loss-making items and drafts a delivery-only menu.

## Required UI Sections
- Menu import grid
- Commission and promo sliders
- Per-item margin heatmap
- Direct-order migration checklist
- Customer-facing price explanation

## Assigned Design Profile
operator-dense

## Theme
자산 방어

## Source Signal References
- S6: Reddit r/restaurant, 2026 - Restaurant owners say third-party delivery commissions around 30% destroy thin margins and ask whether the platforms are a necessary evil. Source: https://www.reddit.com/r/restaurant/comments/1qblfcr/small_restaurant_owners_how_are_you_handling/
- S7: Business Insider, 2026 - FTC and local governments are targeting food delivery fee disclosure as restaurants and customers face 15-30% commission pass-throughs. Source: https://www.businessinsider.com/delivery-apps-fee-backlash-federal-regulation-2026-4
- S8: Asia Economy, 2026-06-18 - Korean delivery-platform consent decree proposal was rejected, frustrating small-business groups expecting meaningful support. Source: https://www.asiae.co.kr/en/article/2026061812454162951

## Success Metrics
- User can complete the core decision/proof workflow in under 3 minutes.
- Output is specific enough to share with a family member, customer, advocate, staff member, or peer.
- Stitch render preserves the required UI sections and design profile.

## Non-goals
- Do not implement production integrations, payments, login, or external API calls in Phase A.
- Do not claim legal, medical, insurance, labor, or financial advice.

## Stitch Prompt

```text
Create a responsive web prototype for "Delivery Menu Margin Blacklight", a restaurant operator tool that reveals which delivery-app menu items secretly lose money after commission and promos. Target user: independent restaurant owners trying to survive third-party delivery commissions without angering customers. Build the key UX around pasting menu items, commission rates, packaging costs, discounts, and platform promos; flag loss-making items and draft a delivery-only menu. Required UI sections: menu import grid, commission and promo sliders, per-item margin heatmap, direct-order migration checklist, and customer-facing price explanation. Design direction: use the operator-dense profile with compact rows, tabular numbers, one sharp action accent, and no decorative hero section. Use source signals S6, S7, and S8 as problem evidence only.
```
