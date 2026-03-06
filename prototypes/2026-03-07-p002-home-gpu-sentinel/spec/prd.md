# PRD — Home GPU Sentinel

## Problem
Home AI servers fail in boring ways (disk fills, thermals drift, a cron job starts failing) but the operator usually notices late.
When an incident starts, you need:
- an at-a-glance breach view
- a repeatable investigation checklist
- a fast “state snapshot” report you can paste into chat / notes

## Target user
- A solo operator running a single GPU workstation/server at home for automation/prototyping.

## Constraints
- Time: must load instantly.
- Budget: local-only MVP.
- Platform: browser, no backend.

## Non-goals
- Not a real metrics collector (this prototype simulates metrics).
- Not an alerting/notification system.

## Success metrics
- Operator can identify “what’s weird” in < 30 seconds.
- Incident checklist completion reduces repeated mistakes.
- Copy/paste report takes < 10 seconds.

## Notes
If this concept is validated, the next step is wiring to real data sources (e.g., node exporter, nvidia-smi parsing, OpenClaw run history).
