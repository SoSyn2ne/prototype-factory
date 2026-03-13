# Assumptions (KNOWN / ASSUMPTION / UNKNOWN)

## KNOWN
- Power limiting often reduces temps/noise and can improve stability.
- Electricity cost matters for always-on operators.
- Throughput vs power is usually sublinear (diminishing returns).
- Stable settings are more valuable than “best benchmark once”.
- Operators frequently keep notes of settings/results.

## ASSUMPTION
- A simple planner + log beats spreadsheets for repeatability.
- Users can provide reasonable baseline metrics (W/°C/units/hr).
- A sensitivity slider is enough to fit rough reality.
- LocalStorage logging is acceptable for this prototype.
- Comparing units/kWh is an intuitive metric for operators.
- The optimal cap is often in the middle (e.g., 160–180W) for older GPUs.
- A small recent-runs panel increases the chance of repeated use.

## UNKNOWN
- The best default cap set per GPU class (1080 Ti vs 4090).
- Whether users think in “units/hr” or “sec/it” or “tokens/sec”.
- If operators want cost per job or profit per job as the primary metric.
- How much thermal headroom variability across seasons matters.
- Whether the tool should capture undervolt voltage offsets too.
- Whether users will regularly log results or only plan once.
