# Assumptions (KNOWN / ASSUMPTION / UNKNOWN)

## KNOWN
- Average power draw is the primary driver of electricity cost for a fixed runtime.
- Power caps can reduce watts (and often performance), changing both runtime and cost.

## ASSUMPTION
- For quick what-if analysis, we treat power cap as a direct reduction of average watts (runtime held constant).
- Users can provide reasonable average watts from `nvidia-smi` or prior logs.
- Grid factor (kgCO₂/kWh) can be a user-provided estimate.

## UNKNOWN
- How wrong the “runtime fixed” assumption is in typical workloads.
- Whether users want to input performance units (samples/sec) to model runtime changes.
- Whether cost visibility changes behavior (fewer reruns, more caps).
