# PRD - Condo Charger Approval Packet

## Problem
- A right-to-charge packet builder for condo owners, HOA boards, and electricians stuck between EV demand, capacity studies, and parking politics.

## Target user
- Condo owners, HOA board members, property managers, electricians, and EV charger installers handling shared-garage charger requests.

## Key UX
- A site-plan packet workspace where a resident or manager maps parking space, meter route, panel distance, trenching/restoration, insurance, billing, load-share assumptions, waitlist status, and board decision language into one approval package.

## Required UI sections
- Garage route canvas with unit, assigned stall, electrical room, trench path, conduit length, and restoration risk.
- Capacity and billing checklist for individual meter, shared panel, load management, and future charger backbone.
- HOA request packet with owner responsibility, electrician license, insurance, removal obligation, and right-to-charge citations.
- Board decision queue comparing approve, conditional approve, capacity study, waitlist, and denial risk.
- Cost split estimator for owner-paid charger, community backbone, pedestal, permit, study, and make-ready work.
- Neighbor fairness panel showing current EV owners, future waitlist, guest spaces, and resale amenity tradeoff.
- Printable board memo plus electrician scope-of-work handoff.

## Design profile
- field-ops

## Theme
- 자산 방어 / 건강 - EV ownership, parking politics, condo resale value, energy access, and infrastructure fairness.

## Source signal references
- S4: Reddit r/HOA, Illinois condo EV charger approval delay, Jan 29 2026.
- S5: Reddit r/Connecticut, HOA EV charging before purchase, Jun 5 2026.
- S6: Condo EV charging 2026 buyer guide, Apr 2026.

## Stitch prompt
Build a field-operations web app prototype called "Condo Charger Approval Packet" for condo owners, HOA boards, property managers, and electricians handling EV charger requests in shared garages. The main screen should be an approval packet workspace with a garage route canvas, capacity and billing checklist, HOA request packet, board decision queue, cost split estimator, neighbor fairness panel, and printable board memo. Use realistic examples: assigned parking not near the unit, electrical room distance, pedestal trenching, metered billing, capacity-study request, right-to-charge law note, insurance certificate, and future charger waitlist. Design direction: use the field-ops profile with slate/steel operational surfaces, a restrained orange action accent, map-like routing panels, and reliable decision controls that feel usable in a board meeting. Do not make a marketing landing page; the first screen must be the working app.

## Non-goals
- Do not implement a custom demo during Phase A.
- Do not turn the concept into a generic dashboard without the core workflow.
- Do not claim market size from the source signals.

## Success metrics
- User can understand the primary risk or deadline within 30 seconds.
- User can identify the next action without opening documentation.
- The prototype visibly reflects the assigned design profile and cited source signals.
