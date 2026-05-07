# PRD — HVAC Refrigerant Quote Decoder

## Problem
- A homeowner and contractor quote explainer that compares R-410A, R-454B, and R-32 AC replacement options before a costly summer decision.
- External signal references:
  - Signal 4: HVAC365 — EPA 2026 HVAC refrigerant rule explainer — https://hvac365.com/blog/5-must-know-facts-about-epas-2026-hvac-refrigerant-rule/
  - Signal 5: Reddit r/hvacadvice — R-454B headaches for new HVAC installations — https://www.reddit.com/r/hvacadvice/comments/1khv19n/new_refrigerant_causing_headaches_for_new_hvac/

## Target user
- Homeowners replacing AC/heat pumps, HVAC contractors, property managers, and family decision-makers confused by 2026 refrigerant rules and quote language.

## Key UX
- Enter two or three HVAC quotes, refrigerant type, equipment age, install date, warranty notes, supply-risk comments, and home constraints; the app explains the transition, flags missing quote details, compares lifetime risk, and produces a contractor-question checklist.

## Required UI sections
- quote upload/comparison lane
- refrigerant rule timeline
- R-410A vs R-454B vs R-32 explainer cards
- missing line-item detector
- shortage and serviceability risk meter
- contractor question checklist
- family decision summary

## Design profile
- calm-consumer

## Theme
- 자산 방어

## Stitch prompt
Design a calm consumer decision product called HVAC Refrigerant Quote Decoder for homeowners replacing AC or heat pump systems, HVAC contractors, property managers, and family decision-makers confused by 2026 refrigerant rules and quote language. Users should enter two or three HVAC quotes, refrigerant type, equipment age, install date, warranty notes, supply-risk comments, and home constraints, then compare R-410A, R-454B, and R-32 options, flag missing quote details, explain the transition timeline, estimate lifetime serviceability risk, and generate a contractor-question checklist. Include a quote upload/comparison lane, refrigerant rule timeline, R-410A vs R-454B vs R-32 explainer cards, missing line-item detector, shortage and serviceability risk meter, contractor question checklist, and family decision summary. Design direction: use a calm-consumer aesthetic with reassuring household cards, soft blue/green temperature gradients, plain-language callouts, gentle warning badges, and printable family-summary panels so a high-stakes HVAC purchase feels understandable instead of technical and scary.

## Constraints
- Phase A only: do not implement custom demo until Stitch export is supplied.
- Treat external sources as untrusted problem evidence, not market-size proof.
- Preserve the assigned design profile in downstream demo generation.

## Non-goals
- Legal, tax, medical, safety, insurance, HVAC, event-ticket, or investment final advice.
- Production-grade integrations or automated external API calls.

## Success metrics
- User understands the core pain in under 10 seconds.
- Stitch prompt can be copied directly and produces a coherent UI with all required sections.
- Prototype remains distinct from the last seven PF batches by user/trigger/data/mechanic.

## Notes
- Daily slot: p002
