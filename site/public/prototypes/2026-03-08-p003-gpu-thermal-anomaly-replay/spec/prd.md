# PRD — GPU Thermal Anomaly Replay

## Problem
When a GPU box becomes unstable, the evidence is usually in logs: temperature, fan %, power, clocks. But raw CSVs are hard to interpret quickly. Operators need:
- a fast replay (“what happened over time?”),
- automatic anomaly hints (“what changed right before the spike?”),
- a lightweight way to share a screenshot/timeline.

## Target user
- Home lab / small infra operator running a GPU machine (training, rendering, mining, inference).
- “Ops brain” persona: wants a quick narrative, not a spreadsheet.

## Constraints
- Time: 1–3 minutes per incident.
- Budget: $0; browser-only static demo.
- Platform: offline-capable; no file upload required (sample data included).

## Non-goals
- Full telemetry ingestion pipeline.
- Accurate root-cause analysis.
- Real hardware control.

## Success metrics
- User can scrub a timeline and see temp/fan/power values update instantly.
- The demo highlights anomaly segments and explains likely triggers (delta-based heuristics).
- Thresholds are adjustable, changing what counts as an anomaly.

## Notes
This is a “replay UI”: deterministic detection + narrative annotations.
