# Falsification checklist (5–7)

1. Pattern library misses the common failures in our environment (users still have to ctrl+f manually).
2. Grouping produces too many incident cards (noise), or merges unrelated issues (misleading).
3. Jump-to-highlight doesn’t reliably land near the root cause (operators don’t trust it).
4. Log pasting is not the real workflow (users need “paste from kubectl logs / ssh tail / file upload”).
5. Incident taxonomy is wrong (operators want different buckets: network, storage, scheduler, data loader).
6. Offline requirement is unnecessary; users prefer integration with their existing dashboards.
7. The UI becomes slow/unusable for large logs (>1–5MB).
