# PRD — GPU Job Cost & Carbon Meter

## Problem
- Single-GPU operators (ML training/inference, rendering, batch jobs) rarely have a quick, consistent way to estimate run cost.
- Without a rough cost+carbon view, it’s harder to:
  - decide whether to rerun experiments,
  - justify a power cap,
  - compare workloads by efficiency.

## Target user
- ML engineer / operator in Korea running jobs on a single GPU server or workstation.

## Constraints
- Time: estimate in ≤ 30 seconds
- Budget: $0
- Platform: offline static HTML/CSS/JS
- Inputs: manual (no telemetry integration in this prototype)

## Non-goals
- Perfect measurement (needs real metering/telemetry).
- Multi-GPU cluster accounting.
- Automated job ingestion.

## Success metrics
- User can estimate cost and CO₂ for a job and choose a cap option in ≤ 1 minute.
- User reports the estimate is “close enough to decide” (directional) for common jobs.

## User flow
1. Enter runtime (min), average power (W), electricity price (KRW/kWh), grid factor (kgCO₂/kWh).
2. Toggle cap scenario (none / -10% / -20%).
3. Review outputs + formulas.

## Notes
- Energy (kWh) = (W × hours) / 1000
- Cost (KRW) = kWh × price
- CO₂ (kg) = kWh × grid factor
