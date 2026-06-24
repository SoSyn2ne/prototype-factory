# PRD — Table Rescue Relay

## Problem
A last-minute reservation transfer board that helps diners avoid no-show fees and helps restaurants rescue empty seats without chaos.

## Target user
Urban diners with prepaid or fee-backed reservations, restaurant hosts, and local food communities.

## Key UX
A diner posts a reservation card with time, party size, fee exposure, transfer rules, and urgency; buyers claim, confirm, and complete a handoff receipt before the cancellation deadline.

## Required UI sections
- Urgent reservation cards with countdown, fee exposure, restaurant, party size, and transfer status.
- Claim flow with buyer fit, payment/face-value note, and confirmation deadline.
- Host-safe transfer receipt with names, rules, and handoff status.
- Community trust badges for completed transfers and late failures.
- Map/list toggle for nearby opportunities.
- Restaurant view showing rescued covers and blocked risky handoffs.
- Fee outcome board: saved, lost, transferred, waived.

## Assigned design profile
- playful-experimental

## Theme
- 자산 방어 / 외로움 / 역전

## Source signal references
- S12 - Reddit r/FoodNYC, reservation transfer and no-show fee behavior

## Stitch prompt
Create a responsive web app prototype called "Table Rescue Relay" for last-minute restaurant reservation transfers. Make the first screen an active transfer board with countdown cards. Include urgent reservation cards, claim flow, host-safe transfer receipt, trust badges, map/list toggle, restaurant rescue view, and fee outcome board. Use realistic sample reservations with no-show fees, face-value transfer notes, and deadline states. Design direction: use the playful-experimental profile with a memorable relay/race composition, strong but controlled accent color, countdown energy, and clear trustworthy controls.

## Constraints
- Time: Phase A spec and Stitch prompt only.
- Budget: No external LLM API calls.
- Platform: Stitch-generated responsive web prototype in the later Phase B job.

## Non-goals
- Do not implement a custom demo during Phase A.
- Do not claim source signals prove market size.

## Success metrics
- Stitch can generate the requested screen from the prompt.
- The main workflow is visible in the first viewport.
- The UI reflects exactly one assigned design profile.
