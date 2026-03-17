# Assumptions (KNOWN / ASSUMPTION / UNKNOWN)

## KNOWN
- Most GPU incidents present with a small set of recurring symptoms (mem full, temps high, disk full, driver reset, hung processes).
- Under time pressure, operators benefit from checklists and ordering.
- Criticality and deadline pressure change the “safe” recovery path.

## ASSUMPTION
- A heuristic risk score is useful as prioritization (what to check first).
- A few binary telemetry toggles can approximate the incident state enough to suggest actions.
- A step-by-step timeline animation reduces cognitive load.

## UNKNOWN
- Which incidents are most common for the user’s environment (CUDA version churn vs IO bottlenecks vs thermals).
- Whether operators prefer “commands to run” vs “actions to take” in the UI.
- How much to tailor recommendations by OS (Ubuntu vs Windows) or scheduler (slurm vs none).
