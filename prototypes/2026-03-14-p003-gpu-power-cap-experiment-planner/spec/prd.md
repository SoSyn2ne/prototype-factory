# PRD — GPU Power-Cap Experiment Planner

## Problem
Solo GPU operators (one box, one card) frequently tweak power limit / undervolt to reduce thermals and electricity cost, but experimentation is ad-hoc. Without a planner, it’s hard to answer:
- “If I cap at 160W instead of 200W, what’s the cost per job?”
- “What power cap gives best units/kWh?”
- “Which settings are stable, repeatable, and worth keeping?”

This prototype creates an experiment plan and logs results locally.

## Target user
- Operator running ML training/inference, rendering, or batch jobs on a single GPU host.
- Cares about throughput, thermals, and cost (electricity + opportunity cost).

## Constraints
- Time: plan in ≤ 2 minutes.
- Budget: $0.
- Platform: offline browser demo; localStorage allowed.
- Data: user-entered baseline metrics; no telemetry integration in this prototype.

## Non-goals
- Auto-detect GPU model/settings.
- Driver-level tuning UI.
- Accurate physics model (we use simple estimation).

## Success metrics
- Generates a power-cap table (e.g., 120/140/160/180/200W) with:
  - estimated throughput (units/hr)
  - estimated temp (°C)
  - efficiency (units/kWh)
  - electricity cost/hr and cost per job
- Lets user log actual outcomes and compare to estimates.

## Example baseline
- Baseline: 200W, 72°C, 100 units/hr
- Electricity: 200 KRW/kWh
- Job size: 50 units

## Data model
Inputs:
- gpuModel (string)
- baselinePowerW, baselineTempC, baselineThroughputPerHr
- electricityPricePerKwh
- jobUnits (units per job)
- sensitivity (0.5–1.5): how sharply throughput changes with power

Outputs per cap:
- capW
- estThroughput
- estTemp
- unitsPerKwh
- costPerHr
- estHoursPerJob, estCostPerJob

## Notes
- Estimation: throughput scales sublinearly with power; temp drops with cap.
- The point is decision support + repeatable logging.
