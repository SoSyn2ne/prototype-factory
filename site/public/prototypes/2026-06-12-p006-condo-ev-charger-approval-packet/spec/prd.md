# PRD — Condo EV Charger Approval Packet

## Problem
- A condo owner packet builder that converts EV charger anxiety into board-ready plans, load notes, insurance proof, and billing rules.
- Trigger moment: an owner asks the HOA for charger approval and the board hesitates.
- The prototype must make the output artifact visible quickly: board packet assembly.

## Target user
- Condo owners, HOA board members, property managers, and multifamily residents trying to install EV charging in shared garages or common areas.

## Key UX
- Collect charger location, contractor quote, electrical load note, permit status, insurance language, and billing plan; generate a board-ready approval packet and neighbor FAQ.

## Required UI sections
- Charger request summary
- Parking and common-area map
- Load and panel capacity notes
- Contractor license and permit checklist
- Insurance and indemnity proof
- Billing and reimbursement rule builder
- Neighbor objection FAQ
- Board packet export

## Assigned design profile
- operator-dense

## Theme
- 자산 방어

## Source signal references
- S11 - NuWatt, solar and EV charging for condos/HOAs in 2026: https://nuwattenergy.com/en/solar-ev-charging-condos-hoa-2026
- S12 - Reddit r/HOA, condo EV charger approval friction: https://www.reddit.com/r/HOA/comments/1hnrcga/il_condo_action_against_not_letting_me_install_an/

## Constraints
- Time: Phase A spec only; Stitch will generate the first visual prototype.
- Budget: no external LLM APIs or paid data APIs in Phase A.
- Platform: responsive web app unless the prompt explicitly biases mobile-first.

## Non-goals
- Do not implement a custom demo in Phase A.
- Do not provide legal, medical, tax, immigration, or financial advice as a final authority.
- Do not claim source signals prove market size.

## Success metrics
- Viewer can identify the target user, trigger, pressure, and output artifact within 10 seconds.
- The assigned design profile is visually implied by the Stitch prompt.
- The UI is not a generic dashboard; it centers the named mechanic.

## Stitch prompt
Create a responsive web app called "Condo EV Charger Approval Packet" for condo owners, HOA board members, property managers, and multifamily residents trying to install EV charging in shared garages or common areas. The app is based on observed user pull: owners already ask forums, gather contractor plans, check permits, solve power billing, and prepare written approval requests because boards are unsure what qualifies as reasonable. The app should use a board packet assembly mechanic around the trigger moment "an owner asks the HOA for charger approval and the board hesitates" and make the first screen communicate "A complete charger request is easier to approve." Use the user's own language: "I need the board to see this as a complete request, not a vague demand." Build the core workflow around parking location, common-area constraints, charger type, electrical load notes, contractor license, permits, insurance, billing/reimbursement rules, and neighbor objections, and produce a board-ready approval packet plus neighbor FAQ. Required sections: charger request summary, parking and common-area map, load and panel capacity notes, contractor license and permit checklist, insurance and indemnity proof, billing and reimbursement rule builder, neighbor objection FAQ, and board packet export. Emotional pressure to make visible: 자산 방어, neighbor conflict, future home value, and the frustration of owning an EV without a reliable place to charge. Design direction: use the `operator-dense` profile with municipal packet styling, compact permit checklists, parking-map callouts, slate surfaces, and crisp approval-state badges. Avoid generic dashboard framing; make the main interaction feel like assembling a board agenda packet that removes excuses.
