# PRD — Airbnb Fee Switch Reprice Board

## Problem
- Airbnb hosts affected by the 2026 host-only fee shift need to preserve payouts without blindly overpricing guest-visible totals.
- Dynamic pricing and cleaning-fee math can fail silently on peak dates, leaving hosts with lower revenue than expected.

## Target user
- Airbnb hosts, Superhosts, STR operators, co-hosts, and small property managers using dynamic pricing or PMS/channel-manager tools.

## Key UX
- Import listing dates, floor rates, cleaning fees, event weekends, and current payouts.
- Show where the 15.5% host-only fee is underpriced and recommend controlled rate changes.
- Flag dynamic pricing dates that did not compensate for the fee switch.

## Required UI sections
- Fee switch status header with affected listings and payout delta
- Listing calendar heatmap for ordinary, weekend, and event-demand dates
- Cleaning-fee break-even calculator
- Dynamic pricing mismatch detector
- Scenario cards for full offset, partial offset, and occupancy-protection pricing
- Guest-visible total comparison
- PMS update checklist and owner decision log

## Design profile
- financial-analyst

## Theme
- 자산 방어

## Signal references
- S1 - Airbnb Resource Centre host-only service fee switch
- S2 - Reddit r/airbnb_hosts seller fee and dynamic pricing concern
- S3 - Reddit r/ShortTermRentals cleaning fee percentage pain

## Stitch prompt
Create a responsive web app prototype for "Airbnb Fee Switch Reprice Board," a host pricing board that recalculates nightly, cleaning, and event rates after Airbnb's host-only fee shift. Include: fee switch status header, listing calendar heatmap, cleaning-fee break-even calculator, dynamic pricing mismatch detector, scenario cards for full offset/partial offset/occupancy protection, guest-visible total comparison, PMS update checklist, and owner decision log. Design direction: use the financial-analyst profile with calendar-linked margin math, compact payout deltas, restrained warning colors, spreadsheet confidence, and Airbnb-host-specific pricing cues; it should feel like a revenue-protection board for a working host, not a generic travel dashboard.

## Constraints
- Time: Phase A spec only; Stitch export expected in `/home/sy/Downloads/stitch_drop/2026-05-28/p001/`.
- Budget: Must be clear enough for rapid Stitch generation without custom implementation.
- Platform: Responsive web prototype.

## Non-goals
- Booking management, channel-manager API integration, tax filing, and live Airbnb account changes.

## Success metrics
- Host can identify payout-loss dates and pick a repricing scenario in under five minutes.
- UI makes the cleaning-fee and event-weekend math obvious without a finance explanation.

## Notes
- Treat source signals as problem evidence, not proof of market size.
