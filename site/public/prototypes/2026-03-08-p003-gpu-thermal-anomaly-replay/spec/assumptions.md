# Assumptions (KNOWN / ASSUMPTION / UNKNOWN)

## KNOWN
- GPU thermal issues often correlate with power/load changes and insufficient fan response.
- Operators benefit from seeing deltas (rate of change) rather than only absolute values.
- A simple timeline scrubber is faster than scanning rows.

## ASSUMPTION
- A heuristic anomaly detector (threshold + slope) is good enough to triage most incidents.
- Showing “what changed” (e.g., power jump) near an anomaly increases operator confidence.
- A compact canvas chart is readable enough for a one-screen incident review.

## UNKNOWN
- Which metric is most predictive for different GPUs (temp vs hotspot vs memory junction).
- Whether users prefer stacked mini-charts vs a combined chart.
- How often operators have clean, consistently sampled logs.
