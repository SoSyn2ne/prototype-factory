# Home GPU Sentinel

A single-page incident panel for a home AI box: temps, disk, jobs, and a one-click “what changed” checklist.

## What it is
A local-only UI concept for “server #2” style ops: a page you open when something feels off.
It emphasizes:
- threshold-based breaches (temps/disk/VRAM/jobs)
- a persistent, guided investigation checklist
- quick incident report generation (copy/paste)

## How to use (demo)
Static demo:

```bash
cd prototypes/2026-03-07-p002-home-gpu-sentinel/demo
python3 -m http.server 8000
# open http://localhost:8000
```

State persists via `localStorage`.

## Manual checklist
- Toggle Incident mode: metrics should freeze; breaches should remain highlighted.
- Edit thresholds and save: breach highlighting should update.
- Tick checklist items and refresh: selections should persist.
- Generate incident report: report should include breaches + last events + checklist completion.

## Status
- prototype
