# PRD — GPU Job Cost Meter

## Problem
When you run GPU jobs at home (fine-tunes, image batches, inference servers), costs hide in three places:
- electricity,
- time (your waiting / ops time),
- opportunity cost (GPU could be doing something else).

Without a quick meter, people underprice jobs, overrun budgets, and can’t explain “why this run was expensive.”

## Target user
- A home GPU operator (single machine) running AI jobs.
- Secondary: small team trying to price internal GPU usage.

## Constraints
- Time: must compute in seconds.
- Budget: $0.
- Platform: offline static demo (no telemetry).
- Inputs must be human-enterable without vendor docs.

## Non-goals
- Precise hardware power modeling (PSU efficiency curves, fan curves).
- Full billing/chargeback.
- Automatic reading of GPU metrics.

## Success metrics
- User can estimate cost within 1 minute and get a readable breakdown.
- Presets cover common scenarios (fine-tune / SD batch / idle).
- Runbook notes help reduce obvious waste (too low utilization, long idle time).

## User flow
1) Pick a preset.
2) Adjust power draw (W), utilization (%), price (KRW/kWh), runtime (hours).
3) Optionally set opportunity cost per hour.
4) Read totals and “runbook notes” suggestions.

## Edge cases
- Runtime 0 hours.
- Power draw 0 or unrealistic (>800W).
- Utilization very low (<20%).

## Notes
A rough estimate is still operationally useful if it’s consistent and fast.
