# PRD - Rent Renewal Comp Duel

## Problem
- A 7% renewal hike is not final until you show the cheaper empty unit next door.
- Source signals: S4 (Reddit r/SanJose, 2026); S5 (Reddit r/chicagoapartments, 2026); S6 (Reddit r/sandiego, 2026)

## One-liner
- A renter negotiation room that converts nearby listings, vacancy risk, and good-tenant proof into a calm renewal counteroffer.

## Target user
- Renters facing renewal increases who suspect comparable units or move-in specials are cheaper.

## Key UX
- Enter the renewal increase, add comparable units or same-building specials, calculate landlord vacancy cost, then draft a firm but polite counteroffer.

## Required UI sections
- Renewal increase intake
- Comparable rent evidence board
- Landlord vacancy-cost counter
- Tone-controlled email draft
- Savings scoreboard

## Design profile
- financial-analyst
- use the `financial-analyst` profile with quiet KPI cards, document-like evidence panels, one blue action accent, and no decorative real-estate hero; make the savings math instantly visible.

## Theme
- 자산 방어

## Output artifact
- Negotiation email plus evidence cards and annual savings estimate.

## First validation test
- Share a template in apartment subreddits and track users who report negotiated discounts or concessions.

## Stitch prompt

```text
Create a responsive web app called "Rent Renewal Comp Duel" for Renters facing renewal increases who suspect comparable units or move-in specials are cheaper.. The app is based on observed user pull: Renters ask whether a 7.7% rent renewal increase can be negotiated and are told to use comparable units and move-in specials. Renters discuss renewal negotiation scripts, noting lower vacant units and landlord commission/vacancy costs. Renters report renewal increases being negotiable when they cite cheaper similar units and willingness to move. The app should use a negotiation simulator around the trigger moment "A 7% renewal hike is not final until you show the cheaper empty unit next door." and make the first screen communicate "A 7% renewal hike is not final until you show the cheaper empty unit next door.". Use the user's own language: "A renter negotiation room that converts nearby listings, vacancy risk, and good-tenant proof into a calm renewal counteroffer.". Build the core workflow around comp-card duel and produce Negotiation email plus evidence cards and annual savings estimate.. Required sections: Renewal increase intake; Comparable rent evidence board; Landlord vacancy-cost counter; Tone-controlled email draft; Savings scoreboard. Emotional pressure to make visible: 자산 방어, with loss of money, time, reputation, or health clarity. Design direction: use the `financial-analyst` profile with quiet KPI cards, document-like evidence panels, one blue action accent, and no decorative real-estate hero; make the savings math instantly visible. Avoid generic dashboard framing; make the main interaction feel like a negotiation simulator.
```
