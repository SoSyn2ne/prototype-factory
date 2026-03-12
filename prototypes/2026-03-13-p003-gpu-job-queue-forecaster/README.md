# GPU Job Queue Forecaster

Plan a single GPU host's work queue with rough finish times, overlap rules, and a simple thermal-risk flag.

## Overview
This prototype is a local-only ops console for queue planning. You add jobs (duration, power, priority, parallel eligibility) and the UI:
- simulates a two-lane schedule,
- estimates a finish time relative to now,
- flags sustained high-power streaks.

## How To Run Demo
```bash
# from repo root
cd prototypes/2026-03-13-p003-gpu-job-queue-forecaster/demo
python3 -m http.server 8000
# open http://localhost:8000
```

## Manual Checklist
- Load baseline and confirm timeline shows lane A/B assignments.
- Add an EXCLUSIVE job; confirm it blocks both lanes.
- Add multiple HIGH power jobs; thermal risk escalates.
- Remove jobs and confirm the forecast recomputes.

## Links
- Preview: (TBD)
