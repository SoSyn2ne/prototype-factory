# Falsification checklist (5–7)

1. Do users already have this solved with a spreadsheet (no pain)?
2. Are estimates too wrong to be trusted without real telemetry?
3. Is “units/kWh” not a metric people care about (they only care about wall-clock)?
4. Does logging in localStorage feel too flimsy for serious use?
5. Do operators prefer tuning tools (Afterburner, nvidia-smi) and won’t use a planner UI?
6. Is sensitivity too abstract (users don’t know how to set it)?
7. Does cost per job not change enough to justify planning?

## 1-day experiment plan
- Pick a repeatable workload (same batch, same model, same dataset slice).
- Run caps: 200W baseline, then 180W, 160W, 140W, 120W.
- Record for each:
  - avg power (W)
  - peak temp (°C)
  - throughput (units/hr)
  - error/crash (yes/no)
- Compare:
  - units/kWh
  - cost per job (jobUnits / throughput × cost/hr)
- Kill criteria:
  - no cap improves units/kWh by ≥10%
  - or logging feels too annoying to keep.
