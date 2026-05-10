# PRD — ACA Premium Shock Switchboard

## Problem
- A health-insurance decision board for families and freelancers trying to survive a 2026 premium jump without accidentally losing doctors or cash.

## Target user
- Self-employed workers, early retirees, freelancers, parents, and near-Medicare adults facing 2026 ACA premium/subsidy uncertainty.

## Key UX
- Enter household income, current plan, premium notice, doctors, prescriptions, procedures, HSA needs, and risk tolerance; model subsidy cliffs, compare plan tradeoffs, flag out-of-pocket exposure, and create an enrollment action plan.

## Required UI sections
- premium shock intake
- income/subsidy scenario slider
- plan comparison matrix
- doctor and prescription continuity check
- deductible exposure meter
- deadline checklist
- family decision memo

## Theme
- 건강

## Design profile
- calm-consumer

## External signal references
- Signal 6 — Reddit r/HealthInsurance — 2026 subsidy/premium workaround anxiety: https://www.reddit.com/r/HealthInsurance/comments/1od90n0/workarounds_for_2026/
- Signal 7 — Reddit r/HealthInsurance — ACA premium jump complaint: https://www.reddit.com/r/HealthInsurance/comments/1q14dis/aca_2026_premium/

## Stitch prompt
Design a calm consumer financial-health product called ACA Premium Shock Switchboard for self-employed workers, early retirees, freelancers, parents, and near-Medicare adults who discover their 2026 health insurance premium may jump after subsidy changes or income shifts. Users should enter household income, current plan, premium notice, doctors, prescriptions, expected procedures, HSA needs, and risk tolerance, then model subsidy cliffs, compare plan tradeoffs, flag hidden out-of-pocket exposure, and create a plain-language enrollment action plan. Include a premium shock intake, income/subsidy scenario slider, plan comparison matrix, doctor and prescription continuity check, deductible exposure meter, deadline checklist, and family decision memo. Design direction: use a calm-consumer aesthetic with reassuring blue-green surfaces, large readable numbers, gentle warning chips, plain-language explainers, and printable family summaries so a scary insurance premium spike feels navigable rather than financially humiliating.

## Constraints
- Phase A only; do not implement custom demo before Stitch export ingest.
- Preserve assigned design profile in Stitch output.
- Expected drop folder: /home/sy/Downloads/stitch_drop/2026-05-11/p002/

## Non-goals
- Do not claim source evidence proves market size.
- Do not call external LLM APIs for this Phase A batch.

## Success metrics
- Prompt is copy/paste-ready for Stitch.
- meta.json and spec files include title, theme, design profile, target user, key UX, UI sections, and signal references.
- Downstream ingest can map Stitch export to p002 without ambiguity.
