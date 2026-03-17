# PRD — GPU Job SLO Incident Simulator

## Problem
- Single-GPU / small GPU operators lose hours during incidents (OOM, thermal throttling, hung processes, disk full).
- Under deadline pressure, triage becomes ad-hoc: people miss obvious checks, repeat mistakes, and don’t learn.
- There’s no quick way to simulate “what likely happened” and get a checklist based on a few signals.

## Target user
- ML engineer / operator running jobs on a workstation or small server (1–4 GPUs) with informal SLOs.

## Constraints
- Time: generate a recovery checklist in ≤ 30 seconds.
- Budget: $0.
- Platform: offline static HTML/CSS/JS (no telemetry integration in this prototype).

## Non-goals
- Not a monitoring system.
- Not automatic remediation.
- Not root-cause proof; it’s a guided triage aid.

## Success metrics
- User can pick incident + telemetry toggles and get:
  - risk score,
  - ordered action checklist,
  - a simple timeline to follow.
- “Simulate” animation helps a stressed operator proceed step-by-step.

## User flow (happy path)
1. Select incident type and criticality.
2. Set time-to-deadline and toggle observed signals.
3. Read risk meter and recommended actions.
4. Press Simulate to walk the timeline.
5. Copy/paste actions into an ops note.

## Notes
- The value is *consistency under stress* (the same incident inputs yield the same output).
- Future: add templates for `nvidia-smi`, `dmesg`, process kill patterns, and disk cleanup steps.
