# PRD - Apartment Heat Bill Evidence Kit

## Problem
Renters capture heat-pump bills, landlord messages, and habit logs into a repair-or-rent-credit evidence packet.

## Target user
Apartment renters, tenant advocates, property managers, and roommates dealing with sudden electric bills, heat-pump misuse, or neglected heating equipment.

## Key UX
Renter logs utility bills, thermostat mode, room temps, photos, landlord messages, and technician visits; the app builds a factual packet for repair request, reimbursement negotiation, or tenant hotline.

## Required UI sections
- Bill spike header with month-over-month change and square-foot normalization
- Thermostat/equipment log for aux heat, heat pump mode, room temps, and leaks
- Evidence capture checklist for bills, photos, videos, landlord texts, and technician notes
- Responsibility map separating tenant habit, equipment fault, and lease obligation
- Repair request letter with calm evidence and deadline
- Rent-credit negotiation calculator for excess utility cost
- Field inspection card for roommate or maintenance visit

## Design profile
field-ops

## Theme
자산 방어 / 건강 - housing cost shock, winter comfort, landlord accountability, and renter proof burden.

## Source signal references
- S14: Renters need evidence when heat bills spike or equipment is misconfigured (https://www.reddit.com/r/heatpumps/comments/1rq7owi/renting_and_our_power_bill_seems_ridiculously/)

## Stitch prompt
Build a production-grade web app prototype called "Apartment Heat Bill Evidence Kit" for renters facing sudden heating-related electric bills and landlord repair disputes. The first screen must be a working field evidence kit with a bill spike header, thermostat/equipment log, evidence capture checklist, responsibility map, repair request letter, rent-credit calculator, and field inspection card. Use realistic sample data: 700 sq ft apartment, $760 electric bill, aux heat stuck on, half-warm radiator, landlord text thread, maintenance visit, lease clause, and room temperature photos. Design direction: use the field-ops profile with sturdy service-workflow styling, slate/graphite surfaces, legible pressure-state panels, large touch targets, and a sparing orange action accent for missing evidence. Do not make a marketing landing page; the first screen must be the working app.

## Non-goals
- Do not build a marketing landing page for Phase A.
- Do not implement a custom demo during Phase A.
- Do not claim external sources prove market size; they are problem evidence only.

## Success metrics
- User can understand the problem, target user, key workflow, and visual direction from the spec.
- Stitch can paste the prompt directly and generate a working first-screen app prototype.
- The prototype slot has no placeholder requirement fields.
