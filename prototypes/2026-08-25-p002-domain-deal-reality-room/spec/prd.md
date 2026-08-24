# PRD — Domain Deal Reality Room

## Problem
- Help a first-time domain seller compare buyer signals, valuation ranges, escrow fees, and three counteroffers without mistaking an AI estimate for cash.

## Target user
- Indie hackers and first-time domain sellers negotiating a $1k–$50k inbound offer.

## Core loop
- Paste the offer, separate evidence from estimates, compare walk-away/target/stretch scenarios, and rehearse counteroffers.

## First screen
- Make the trigger and primary action understandable in three seconds.

## Required UI sections
- Offer intake; evidence ledger; comparable sales; scenario waterfall; counteroffer composer; escrow/tax preview; timeline.

## Design profile
- financial-analyst

## Theme
- 역전

## Source signal references
- S3, S4; full URLs and evidence notes are in daily/2026-08-25/ideas.md.

## Constraints
- Phase A spec only; no external APIs; use realistic local mock data.

## Success metrics
- Five target users can complete the core loop without explanation; three say the output is useful enough to save or share.

## QA / screenshot criteria
- Valuation uncertainty is explicit; all scenarios show net proceeds and mobile cards preserve numerical hierarchy.

## Development start prompt

```text
Build Domain Deal Reality Room from this PRD as a polished responsive prototype. Preserve the financial-analyst design profile, implement the core interaction with realistic local data, include complete empty/error/success states, and verify desktop plus mobile screenshots.
```

