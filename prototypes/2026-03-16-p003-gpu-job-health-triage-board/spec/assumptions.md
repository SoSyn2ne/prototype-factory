# Assumptions (KNOWN / ASSUMPTION / UNKNOWN)

## KNOWN
- The top recurring failure modes in small GPU ops are OOM, driver/CUDA mismatch, thermal/power throttling, and data pipeline bugs.
- A checklist reduces mean-time-to-recover by preventing random guessing.

## ASSUMPTION
- A simple keyword+symptom ruleset is enough for a “first diagnosis”.
- Operators will actually paste small log snippets if the output is immediately useful.
- A copyable incident note improves follow-through and reduces repeated incidents.

## UNKNOWN
- Whether users prefer incident categories by *layer* (infra vs code) rather than symptom type.
- Which next-step sequences are universally safe across different setups.
- How much customization is needed (different GPUs, drivers, containers).
