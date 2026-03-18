# Assumptions (KNOWN / ASSUMPTION / UNKNOWN)

## KNOWN
- Many GPU job failures contain recognizable strings ("CUDA out of memory", "NCCL", "segfault", "No space left on device").
- Operators benefit from grouping repeated errors into a single incident and jumping to context.

## ASSUMPTION
- A regex-based “incident signature” library is enough for a useful first version.
- Grouping nearby matches (by time/line distance) approximates real incidents well.
- Users prefer a lightweight offline tool when logs are sensitive.

## UNKNOWN
- Which log formats dominate in the target environment (k8s, slurm, docker, systemd).
- How often timestamps are missing/garbled and whether timeline UX still works.
- The best default grouping window (too small → spam; too large → merges unrelated events).
