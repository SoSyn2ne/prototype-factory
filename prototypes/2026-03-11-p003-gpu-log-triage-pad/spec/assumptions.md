# Assumptions (KNOWN / ASSUMPTION / UNKNOWN)

## KNOWN
- Many GPU incidents fall into recurring buckets: OOM, driver/Xid resets, thermal throttling, CUDA kernel errors.
- Showing the matching log evidence increases trust and speeds debugging.

## ASSUMPTION
- A rule-based matcher (regex + scoring) is sufficient for a useful first pass.
- LocalStorage is adequate for saving quick incident notes.

## UNKNOWN
- Which heuristics are most accurate for this particular server/workload mix.
- Whether users prefer a single "best" diagnosis or a ranked multi-label list.
- How to safely handle extremely large logs (MBs) in the browser.
