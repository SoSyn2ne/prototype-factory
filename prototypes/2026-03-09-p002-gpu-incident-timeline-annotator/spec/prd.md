# PRD — GPU Incident Timeline Annotator

## Problem
When a GPU host misbehaves (thermal spikes, throttling, OOM, driver resets), the “incident narrative” gets assembled manually:
- paste logs into chat
- highlight suspicious lines
- try to reconstruct *when* it started and *what* changed

This is slow and error-prone, especially when logs come from multiple sources (nvidia-smi snapshots, syslog, app logs).

## Target user
- Solo operators running a single GPU server (home lab / side projects)
- Small teams operating a few GPU boxes without full observability stacks

## Constraints
- Time: should turn raw pasted logs into a timeline in < 2 minutes
- Budget: $0 (client-side)
- Platform: web UI that can run offline (no uploads, no external dependencies)

## Non-goals
- Replacing real monitoring (Prometheus/Grafana)
- Perfect parsing of every log format
- Automatic root-cause analysis

## Success metrics
- User pastes mixed logs and immediately sees:
  - detected “anomaly windows” (e.g., temp >= threshold, throttle, Xid error)
  - a sortable list of events with severity
- User can add a short annotation to events and export a shareable Markdown report

## Notes
- Treat this as a *triage* tool: highlight likely segments to investigate.
- Deterministic rules + adjustable thresholds are preferable to black-box scoring.
