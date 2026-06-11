# PRD — Delivery Fee Truth Menu

## Problem
- A restaurant margin tool that shows which online-order fees are quietly turning busy nights into break-even nights.
- Trigger moment: delivery orders are busy but cash at close is disappointing.
- The prototype must make the output artifact visible quickly: fee receipt and menu surgery.

## Target user
- Independent restaurant owners, family-run shops, cafe managers, and ghost-kitchen operators comparing direct ordering, delivery apps, and menu markups.

## Key UX
- Import a sample menu and platform fee structure, compare direct vs app orders, reveal true item margin, and publish a customer-safe price explanation plus direct-order plan.

## Required UI sections
- Today's fee leak header
- Platform commission comparison
- Menu item margin lanes
- Small-order and promo fee simulator
- Direct-order break-even builder
- Customer price explanation card
- Staff handoff script
- Weekly fee receipt export

## Assigned design profile
- financial-analyst

## Theme
- 자산 방어

## Source signal references
- S3 - Reddit r/restaurant, small restaurant owners handling online ordering and delivery fees: https://www.reddit.com/r/restaurant/comments/1qblfcr/small_restaurant_owners_how_are_you_handling/
- S4 - Business Insider, delivery fee crackdown and regulation, Apr 2026: https://www.businessinsider.com/delivery-apps-fee-backlash-federal-regulation-2026-4

## Constraints
- Time: Phase A spec only; Stitch will generate the first visual prototype.
- Budget: no external LLM APIs or paid data APIs in Phase A.
- Platform: responsive web app unless the prompt explicitly biases mobile-first.

## Non-goals
- Do not implement a custom demo in Phase A.
- Do not provide legal, medical, tax, immigration, or financial advice as a final authority.
- Do not claim source signals prove market size.

## Success metrics
- Viewer can identify the target user, trigger, pressure, and output artifact within 10 seconds.
- The assigned design profile is visually implied by the Stitch prompt.
- The UI is not a generic dashboard; it centers the named mechanic.

## Stitch prompt
Create a responsive web app called "Delivery Fee Truth Menu" for independent restaurant owners, family-run shops, cafe managers, and ghost-kitchen operators comparing direct ordering, delivery apps, and menu markups. The app is based on observed user pull: owners already compare platform commissions, menu markups, small-order fees, direct ordering links, and white-label workarounds when delivery apps feel one-sided. The app should use a fee receipt and menu surgery mechanic around the trigger moment "delivery orders are busy but cash at close is disappointing" and make the first screen communicate "Your busiest channel may be your thinnest margin." Use the user's own language: "I need to know whether the app order is actually worth taking." Build the core workflow around menu prices, food cost, platform commission, promo fees, delivery mix, direct-order cost, and customer explanation notes, and produce a revised direct-order plan plus customer-safe price explanation. Required sections: today's fee leak header, platform commission comparison, menu item margin lanes, small-order and promo fee simulator, direct-order break-even builder, customer price explanation card, staff handoff script, and weekly fee receipt export. Emotional pressure to make visible: 자산 방어, owner burnout, customer blame, and the humiliation of working hard for platform margin. Design direction: use the `financial-analyst` profile with ledger-like margin waterfalls, off-white receipt surfaces, graphite tables, muted green save states, and amber fee warnings. Avoid generic dashboard framing; make the main interaction feel like a restaurant owner marking up a real menu while every fee becomes visible.
