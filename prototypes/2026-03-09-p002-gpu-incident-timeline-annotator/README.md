# GPU Incident Timeline Annotator

Paste raw GPU/host logs, auto-detect anomaly windows, and annotate a shareable incident timeline.

## Status
- prototype

## What's inside
- `spec/` — PRD, assumptions, falsification, QA checklist
- `demo/` — vanilla HTML/CSS/JS demo (offline; no uploads)

## How to run demo (static)
- Open `demo/index.html` directly, or:
- `cd prototypes/2026-03-09-p002-gpu-incident-timeline-annotator/demo`
- `python3 -m http.server 4173`
- Visit `http://localhost:4173`

## Manual verification checklist
- [ ] Paste logs → Analyze → events appear.
- [ ] Changing thresholds changes what is flagged.
- [ ] Can annotate an event and export Markdown.
- [ ] No external assets; works offline.
