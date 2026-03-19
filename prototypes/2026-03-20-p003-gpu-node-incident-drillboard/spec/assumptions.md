# Assumptions (KNOWN / ASSUMPTION / UNKNOWN)

## KNOWN
- “First response” speed improves with checklists and rehearsed flows.
- Many GPU incidents repeat: thermal throttling, disk pressure, memory/OOM loops, stuck jobs.

## ASSUMPTION
- A single-node incident drill UI is useful even without real metrics.
- Operators prefer timestamped logging + checklist toggles over narrative-only notes.

## UNKNOWN
- Which runbook steps matter most by environment (Docker/K8s, bare metal, Slurm).
- Whether users want export (markdown) as table stakes.
