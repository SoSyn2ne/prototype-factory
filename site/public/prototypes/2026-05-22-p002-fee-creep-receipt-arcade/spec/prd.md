# PRD - Fee Creep Receipt Arcade

## One-liner
A playful receipt scanner that turns delivery, subscription, and dynamic-pricing fee creep into a shareable fairness score.

## Category
Fun / Experimental

## Target user
Consumers who screenshot confusing fees, creators who make "look at this bill" posts, and deal-hunters who want a fast fairness read.

## Problem
- Delivery, subscription, and online-ordering receipts often make the final price feel detached from the advertised price.
- Consumers share screenshots and frustration, but the pain is usually not converted into a clear, visual explanation.

## Key UX
User uploads or pastes a receipt, the app highlights stacked fees and markups, compares advertised vs final price, assigns a fairness score, and creates a shareable scorecard.

## Required UI sections
- Receipt upload/paste zone
- Fee stack visualizer
- Advertised-vs-final price delta
- Fairness score and "what changed?" explanation
- Share card generator
- Consumer action tips

## Design profile
playful-experimental

## Theme
역전

## Signal references
- Axios: independent restaurants hit price-hike ceiling - https://www.axios.com/2026/02/23/restaurants-menu-prices-james-beard-foundation-report
- Federal Register: proposed food-delivery fee rulemaking - https://www.govinfo.gov/content/pkg/FR-2026-04-16/pdf/2026-07473.pdf

## Stitch prompt
Create a playful responsive web app called "Fee Creep Receipt Arcade" for consumers who screenshot confusing delivery, subscription, and dynamic-pricing fees. The app should feel like a receipt scanner plus fairness game: upload/paste a receipt, highlight stacked fees and markups, compare advertised vs final price, show a fairness score, explain what changed, and generate a shareable scorecard. Required screens/sections: bold scanner header, receipt panel, fee stack meter, advertised-vs-final delta, fairness scoreboard, action tips, and social share card. Design direction: use the playful-experimental profile with bold but legible arcade-inspired accents, tactile controls, high-contrast receipt details, and one obvious scan-to-score workflow.

## Constraints
- Time: Phase A spec only; Stitch export expected later.
- Budget: fast visual prototype.
- Platform: responsive web.

## Non-goals
- Do not claim legal wrongdoing from a receipt.
- Do not process payments or refunds.

## Success metrics
- User can see advertised-vs-final price delta immediately.
- Generated scorecard is visually clear enough to share.

## Notes
- Fun/portfolio slot for today's batch.
