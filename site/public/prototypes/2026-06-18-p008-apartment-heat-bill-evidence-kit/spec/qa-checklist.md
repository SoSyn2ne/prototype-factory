# QA checklist

## Phase A completeness
- Title is present: Apartment Heat Bill Evidence Kit
- One-liner is present: Renters capture heat-pump bills, landlord messages, and habit logs into a repair-or-rent-credit evidence packet.
- Target user is present: Apartment renters, tenant advocates, property managers, and roommates dealing with sudden electric bills, heat-pump misuse, or neglected heating equipment.
- Key UX is present: Renter logs utility bills, thermostat mode, room temps, photos, landlord messages, and technician visits; the app builds a factual packet for repair request, reimbursement negotiation, or tenant hotline.
- Assigned design profile is exactly one profile: field-ops
- Theme is present: 자산 방어 / 건강 - housing cost shock, winter comfort, landlord accountability, and renter proof burden.
- Source signal references are present:
- S14: Renters need evidence when heat bills spike or equipment is misconfigured (https://www.reddit.com/r/heatpumps/comments/1rq7owi/renting_and_our_power_bill_seems_ridiculously/)
- Copy/paste-ready Stitch prompt is present.

## Stitch prompt acceptance
- First screen is the working app, not a landing page.
- Required UI sections appear in the prompt.
- Sample data is realistic and tied to the source signals.
- Design direction sentence is tailored to field-ops.
- Prompt does not ask Stitch to call external APIs.

## Review gate before Phase B
- Slot p008 exists under prototypes/2026-06-18-p008-apartment-heat-bill-evidence-kit.
- No placeholder bullets remain in spec files.
- The 08:30 job should export to /home/sy/Downloads/stitch_drop/2026-06-18/p008/code.html and /home/sy/Downloads/stitch_drop/2026-06-18/p008/screen.png.

## Prompt
Build a production-grade web app prototype called "Apartment Heat Bill Evidence Kit" for renters facing sudden heating-related electric bills and landlord repair disputes. The first screen must be a working field evidence kit with a bill spike header, thermostat/equipment log, evidence capture checklist, responsibility map, repair request letter, rent-credit calculator, and field inspection card. Use realistic sample data: 700 sq ft apartment, $760 electric bill, aux heat stuck on, half-warm radiator, landlord text thread, maintenance visit, lease clause, and room temperature photos. Design direction: use the field-ops profile with sturdy service-workflow styling, slate/graphite surfaces, legible pressure-state panels, large touch targets, and a sparing orange action accent for missing evidence. Do not make a marketing landing page; the first screen must be the working app.
