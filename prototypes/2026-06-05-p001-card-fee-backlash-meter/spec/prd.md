# PRD — Card Fee Backlash Meter

## Problem
- A merchant decision desk that shows when card surcharges save margin but damage trust, reviews, and repeat visits.

## Target user
- Restaurants, salons, local retailers, gyms, clinics, cafes, merchant-services advisors, and franchisors deciding whether to add card surcharges, cash discounts, or processor changes.

## Key UX
- The owner enters ticket size, card mix, processor fees, surcharge copy, customer segments, and review sensitivity; the app compares margin recovery against expected checkout friction, staff script risk, compliance copy gaps, and processor reserve/settlement tradeoffs.

## Required UI sections
- Fee pressure header with monthly card-cost leak and customer-facing surcharge state
- Ticket-size and card-mix input table
- Surcharge backlash simulator with review-risk and repeat-visit impact
- Cash-discount sign and receipt-copy preview
- Staff script builder for awkward checkout moments
- Processor tradeoff lane for fees, reserves, settlement delay, and approval rate
- Pricing-transparency checklist for junk-fee and disclosure concerns
- Owner decision log with test dates and rollback trigger

## Design profile
- operator-dense

## Theme
- 자산 방어

## Source signal references
- S1 - Reddit r/MerchantServices surcharge backlash
- S2 - Reddit r/smallbusiness card-fee cash preference
- S3 - Reddit r/AllAboutPayments reserves/settlement pressure
- S4 - Skadden state AG pricing transparency focus

## Constraints
- Time: Phase A spec/scaffold only; no custom demo implementation.
- Budget: Prototype Factory daily batch candidate.
- Platform: Responsive web app prototype for Stitch export.

## Non-goals
- No production integrations.
- No legal, medical, financial-aid, or compliance advice beyond workflow framing.
- No external LLM API calls.

## Success metrics
- User can understand the painful trigger in under 10 seconds.
- User can complete the main sample workflow without placeholder content.
- Stitch prompt can be copied directly into the 08:30 generation flow.

## Notes
- Candidate label: Practical / Commercial.
