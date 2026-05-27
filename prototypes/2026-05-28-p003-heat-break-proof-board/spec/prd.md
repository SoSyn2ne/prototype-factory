# PRD — Heat Break Proof Board

## Problem
- Small field employers need proof that heat-safety steps actually happened, not just a policy binder.
- Surprise inspections, worker incidents, insurer questions, and contractor prequalification can all turn missing documentation into financial risk.

## Target user
- Small construction firms, landscapers, tree services, warehouses, restaurant operators, safety consultants, and field supervisors.

## Key UX
- Log jobsite temperature, crew assignments, water/shade setup, break cadence, incident notes, and training proof.
- Produce a heat-safety packet for internal audits, OSHA conversations, insurers, or general contractors.

## Required UI sections
- Jobsite heat-risk header with weather and shift status
- Crew roster and acclimatization tracker
- Water, shade, and cool-down setup checklist
- Break log timeline with supervisor attestations
- Training record and policy evidence locker
- Incident and symptom note capture
- Inspection response packet builder
- Repeat-violation risk and corrective-action lane

## Design profile
- field-ops

## Theme
- 건강

## Signal references
- S6 - OSHA 2026 heat hazard emphasis update
- S7 - Reddit r/smallbusiness OSHA fine documentation advice

## Stitch prompt
Create a responsive web app prototype for "Heat Break Proof Board," a field-team compliance board for documenting shade, water, rest breaks, and heat incidents before inspections or claims. Include: jobsite heat-risk header, crew roster and acclimatization tracker, water/shade/cool-down checklist, break log timeline with supervisor attestations, training record evidence locker, incident note capture, inspection response packet builder, and repeat-violation corrective-action lane. Design direction: use the field-ops profile with rugged mobile-first controls, high-contrast heat states, glove-friendly checklists, proof-oriented timestamps, and jobsite packet exports; it should feel like a supervisor's field board, not an HR policy portal.

## Constraints
- Time: Phase A spec only; Stitch export expected in `/home/sy/Downloads/stitch_drop/2026-05-28/p003/`.
- Budget: Must be clear enough for rapid Stitch generation without custom implementation.
- Platform: Responsive web prototype, mobile-first.

## Non-goals
- Legal advice, medical diagnosis, sensor integration, payroll integration, or official OSHA filing.

## Success metrics
- Supervisor can document a shift's heat controls in under three minutes.
- Exported packet makes training, breaks, water/shade, and corrective actions obvious.

## Notes
- Treat source signals as problem evidence, not proof of market size.
