# PRD - Delivery Runner Load Switch

## Problem
- A restaurant floor tool that shows when takeout packaging work is crushing runners and when to pause apps, rebalance tips, or staff a station.
- Source evidence: S7 - Eater, 2026-07, food runner role changing with delivery/takeout: Food runners increasingly assemble and package delivery orders without matching compensation while in-house service suffers. S8 - Reddit r/restaurant, 2026, small restaurant owners handling online ordering and delivery fees: Family-run restaurant operators describe online ordering and delivery as one-sided and profit-killing.

## Target user
- Independent restaurant managers, shift leads, and food runners dealing with delivery-app order spikes during in-house service.

## Key UX
- Log live floor covers, takeout tickets, runner tasks, packaging bottlenecks, and tip-share rules; the app recommends pause, prep, staffing, or compensation moves.

## Required UI sections
- Live floor vs delivery load
- Runner task timeline
- Packaging station queue
- Tip-share fairness meter
- Pause-app threshold
- Manager action script
- Shift after-action receipt

## Assigned design profile
- field-ops
- Design direction: service-operations styling with high-contrast status rows, large touch targets, and urgent badges only where action is needed.

## Theme
- 역전

## Practical vs fun
- Practical / Field

## Source signal references
- S7: Eater, 2026-07, food runner role changing with delivery/takeout — https://www.eater.com/dining-out/972882/how-much-do-food-runners-get-paid-delivery-takeout-orders
- S8: Reddit r/restaurant, 2026, small restaurant owners handling online ordering and delivery fees — https://www.reddit.com/r/restaurant/comments/1qblfcr/small_restaurant_owners_how_are_you_handling/

## Stitch prompt
Create a responsive web app called "Delivery Runner Load Switch" for Independent restaurant managers, shift leads, and food runners dealing with delivery-app order spikes during in-house service.. The app is based on observed user pull from S7: Food runners increasingly assemble and package delivery orders without matching compensation while in-house service suffers. S8: Family-run restaurant operators describe online ordering and delivery as one-sided and profit-killing. The app should use a Floor Load Switch around the trigger moment "Log live floor covers, takeout tickets, runner tasks, packaging bottlenecks, and tip-share rules; the app recommends pause, prep, staffing, or compensation moves." and make the first screen communicate "A restaurant floor tool that shows when takeout packaging work is crushing runners and when to pause apps, rebalance tips, or staff a station.". Build the core workflow around user-entered evidence and produce shift load and compensation receipt. Required sections: Live floor vs delivery load; Runner task timeline; Packaging station queue; Tip-share fairness meter; Pause-app threshold; Manager action script; Shift after-action receipt. Emotional pressure to make visible: 역전. Design direction: use the field-ops profile with service-operations styling with high-contrast status rows, large touch targets, and urgent badges only where action is needed. Avoid generic dashboard framing; make the main interaction feel like Floor Load Switch.

## Success metrics
- A Stitch operator can paste the prompt without rewriting it.
- The first screen shows the actual workflow, not a landing page.
- The output artifact is visible before the fold or immediately after the primary input.
