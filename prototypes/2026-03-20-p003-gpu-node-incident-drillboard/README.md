# GPU Node Incident Drillboard

A mini incident-sim UI for a single GPU node: inject alerts (temp, disk, OOM) and practice runbook decisions + timers.

## Status
- prototype

## Why this exists
If you only run incidents “live”, you’ll be slow when it matters. This prototype is a lightweight drill UI:
- inject a common GPU-node alert,
- start a stopwatch,
- follow a short checklist,
- capture a timestamped log.

## How to run (demo)
- Open `demo/index.html` in a browser (works offline / `file://`).
- Inject an alert type and start the timer.

## Manual checklist
- Injecting alerts changes the checklist.
- Timer runs and can be reset.
- Log entries are timestamped.

## Links
- Gallery: https://prototype-factory.vercel.app/p/2026-03-20-p003
- Demo: https://prototype-factory.vercel.app/d/2026-03-20-p003
