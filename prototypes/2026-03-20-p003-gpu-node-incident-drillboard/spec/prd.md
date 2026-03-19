# PRD — GPU Node Incident Drillboard

## Problem
When a single GPU node starts misbehaving (thermal throttle, disk full, CUDA OOM loop), the first 5–15 minutes are chaotic:
- alerts arrive with little context,
- the operator forgets the runbook order,
- time is wasted on “what do we check first?”

Operators need a small, repeatable drill UI to practice decisions and keep a timestamped log.

## Target user
- Primary: a solo operator ("server guardian") managing one or a few GPU boxes.
- Secondary: small-team MLOps/infra folks who want a lightweight incident drill.

## Constraints
- Time: 1-day prototype.
- Budget: $0 runtime.
- Platform: offline demo (`demo/index.html`), no server.

## Non-goals
- Real monitoring / real telemetry ingestion.
- Pager escalation or multi-user collaboration.

## Success metrics
- In <30 seconds, user can simulate an incident, start a timer, and follow a checklist.
- The UI produces a clear incident log with timestamps and a simple “postmortem notes” field.

## Notes
This is a deterministic drillboard: you inject an alert type, and the UI suggests a minimal runbook checklist and decision points.
