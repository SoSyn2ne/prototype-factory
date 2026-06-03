# PRD — Main Street Lease Shock Counter

## Problem
- Small storefront tenants face sudden commercial lease renewal shocks from rent resets, CPI escalators, CAM, insurance, taxes, and deposits without a simple way to understand leverage before signing.

## Target user
- Independent retailers, salons, studios, cafes, clinics, gyms, and service businesses facing lease renewal, relocation, or new commercial lease terms.

## Key UX
- Paste lease clauses and renewal numbers, model the true monthly occupancy cost, compare stay/move/counter scenarios, and export a broker/lawyer-ready counteroffer memo.

## Required UI sections
- Renewal shock header with rent, CPI, CAM, insurance, tax, and deposit deltas
- Clause intake and red-flag excerpt rail
- Occupancy cost waterfall
- Walk-away leverage meter
- Stay vs move scenario cards
- Counteroffer term builder
- Landlord concession checklist
- Broker/lawyer review memo preview

## Design profile
- financial-analyst

## Theme
- 자산 방어

## Source signals
- S3 - Reddit r/smallbusiness, commercial lease renewal with 26% increase, May 28 2026
- S4 - CBRE 2026 U.S. Industrial & Logistics Occupier Survey
- S5 - CapVeri, 2026 operating expenses reshaping CAM structures

## Constraints
- Time: Phase A only; do not implement a custom demo.
- Budget: Spec-first prototype candidate; no external LLM/API calls.
- Platform: Stitch prompt should create the first visual prototype.

## Non-goals
- Do not replace legal counsel, brokerage advice, or market appraisal.
- Do not scrape private lease comps.
- Do not promise negotiation outcomes.

## Success metrics
- User can see the true occupancy cost increase at a glance.
- User can compare stay, move, and counteroffer scenarios.
- User can export a concise review memo for advisors.

## Stitch prompt
Create a responsive web app prototype called "Main Street Lease Shock Counter" for independent retailers, salons, cafes, clinics, gyms, and small service businesses facing a commercial lease renewal or new term sheet. The app should help the owner paste rent/CPI/CAM/insurance/tax/security-deposit clauses, calculate the true monthly occupancy cost, compare stay, move, and counteroffer scenarios, and export a concise broker/lawyer-ready negotiation memo. Required sections: renewal shock header, clause intake and red-flag excerpt rail, occupancy cost waterfall, walk-away leverage meter, stay vs move scenario cards, counteroffer term builder, landlord concession checklist, and broker/lawyer review memo preview. Use realistic Main Street sample data with a 26 percent rent increase, CPI escalator, CAM pass-throughs, and relocation cost assumptions. Design direction: use the `financial-analyst` profile with institutional off-white, graphite, muted navy, restrained warning tones, compact comparison tables, and calm confidence cues that feel like a premium lease-risk memo.
