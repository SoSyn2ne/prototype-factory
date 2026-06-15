# PRD - Apartment EV Fee War Room

## Problem
- A resident-management decision surface for Korean apartment EV charger fee hikes, direct-operation risk, subsidies, and fire-liability politics.
- Evidence: S7 (Seoul Economic Daily, EV charging disputes in Korean apartments, May 2026); S8 (Chosun, apartment EV charger replacement and fee hike, Mar 2026).

## Target user
- Korean apartment resident councils, management offices, EV owners, non-EV residents, and charger vendors.

## Key UX
- A board-meeting workbench that compares outsourcing vs direct operation, kWh fee changes, subsidy eligibility, liability exposure, fire-response obligations, and resident sentiment before a vote.

## Required UI sections
- Decision header comparing outsource, direct operate, hybrid, and delay
- Fee before/after table for kWh rates, monthly commute cost, CPO fees, and maintenance reserve
- Contract and subsidy checklist for vendor terms, government support, installation scope, and ownership
- Fire-liability risk register with insurer, management office, charger vendor, and resident responsibility
- Resident sentiment board separating EV owners, non-EV owners, disabled drivers, and management staff
- Vote packet builder with pros/cons, minority objection notes, and meeting script
- Incident drill timeline for charger fault, smoke alarm, blocked bay, and emergency notice

## Assigned design profile
- field-ops

## Theme
- 자산 방어 / 건강 - apartment infrastructure, EV ownership, resident fairness, and safety liability.

## Practical vs fun label
- Practical / Commercial

## Stitch prompt
Build a field-operations web app prototype called "Apartment EV Fee War Room" for Korean apartment resident councils deciding how to manage EV chargers after fee hikes and liability concerns. The first screen must be a board-meeting workbench with a decision header, fee before/after table, contract and subsidy checklist, fire-liability risk register, resident sentiment board, vote packet builder, and incident drill timeline. Use realistic sample data: slow-charging fee rising from 295 won to 324.4 won per kWh, vendor replacement proposal, direct-operation option, subsidy note, fire-liability dispute, EV owner objections, and non-EV resident fairness concerns. Design direction: use the field-ops profile with slate/steel operational surfaces, restrained cyan/orange action accents, dense but legible risk panels, and controls that feel usable during a tense resident meeting. Do not make a marketing landing page; the first screen must be the working app.

## Constraints
- Time: Phase A only; do not implement custom demo before Stitch export.
- Budget: Use existing PF scaffolding and generated Stitch output.
- Platform: Web prototype exported from Stitch into the expected drop folder.

## Non-goals
- No custom demo implementation during Phase A.
- No external LLM API calls.
- Do not claim market size from these sources; treat them as problem evidence.

## Success metrics
- Stitch output has all required sections on the first working screen.
- The prototype preserves the assigned design profile.
- The main workflow is visible without a marketing landing page.

## Notes
- Expected Stitch drop folder: /home/sy/Downloads/stitch_drop/2026-06-16/
