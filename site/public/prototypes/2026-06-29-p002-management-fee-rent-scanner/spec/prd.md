# PRD - Management Fee Rent Scanner

## Problem
- Korean renters spot rent-disguised management fees, missing disclosures, and monthly bill spikes before signing or renewing.

## Target user
- Korean renters comparing officetel, villa, studio, and apartment leases where management fees hide real housing cost.

## Key UX
- Renter enters listing rent, management-fee line items, prior bills, utilities, and disclosure gaps; the app flags suspicious charges and builds a negotiation checklist.

## Required UI sections
- Listing cost header with rent, deposit, management fee, and total monthly burden
- Line-item scanner for utilities, cleaning, internet, elevator, parking, and vague common fees
- Disclosure gap checklist tied to current transparency rules
- Comparable-building fee benchmark table
- Bill spike simulator for winter/summer usage
- Landlord question script and negotiation notes
- Lease decision receipt with safe, risky, and walk-away signals

## Assigned design profile
- financial-analyst

## Theme
- 자산 방어 / 외로움 - renter self-defense when housing costs are opaque and solo decisions feel risky.

## Source signal references
- S3

## Stitch prompt
Build a production-grade web app prototype called "Management Fee Rent Scanner" for Korean renters spotting rent-disguised management fees, missing disclosures, and monthly bill spikes before signing or renewing. The first screen must be a working renter analysis workbench with a listing cost header, line-item scanner, disclosure gap checklist, comparable-building fee benchmark, seasonal bill spike simulator, landlord question script, and lease decision receipt. Use realistic sample data: KRW 650,000 rent, KRW 170,000 management fee, vague "common service" line, winter heating estimate, missing prior-bill disclosure, officetel parking fee, and two nearby listings. Design direction: use the financial-analyst profile with calm housing-cost math, compact comparison cards, restrained warning tones, and clear written interpretation beside every number. Do not make a marketing landing page; the first screen must be the working app.

## Constraints
- Phase A only: do not implement a custom demo.
- First screen in Stitch must be the working app, not a marketing landing page.
- Use external sources as problem evidence only, not market-size proof.

## Non-goals
- No external API integration in the prototype.
- No legal, medical, financial, or regulatory advice claims beyond workflow support.

## Success metrics
- User can understand the pain in under 10 seconds.
- User can identify the next action from the first screen.
- The prototype includes every required UI section from this PRD.
