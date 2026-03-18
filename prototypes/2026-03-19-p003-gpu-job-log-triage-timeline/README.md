# GPU Job Log Triage Timeline

Paste noisy ML training logs and get a compact **incident timeline** (OOM, NCCL, CUDA, disk, timeout) with jump-to-highlight.

Offline + deterministic: no network calls.

## Status
- prototype

## Quickstart (no build)
1. Open `demo/index.html`.
2. Load a preset.
3. Click **Triage**.
4. Click an incident to jump to the highlighted log lines.
5. Use the incident filter to focus on one class.

Optional local server:
```bash
cd prototypes/2026-03-19-p003-gpu-job-log-triage-timeline
python3 -m http.server 8080
# http://localhost:8080/demo/
```

## What the heuristic does
- Parses timestamps when present (falls back to line numbers).
- Detects incident signatures via regex:
  - CUDA OOM, NCCL timeout, CUDA driver/runtime errors, disk full, HTTP/registry failures.
- Groups nearby matches into a single “incident” card.

## Manual checklist
- Load preset and confirm you see at least 3 incident types.
- Filter by “NCCL” and confirm list updates.
- Click an incident and confirm log highlights + scroll.

## Spec artifacts
- PRD: `spec/prd.md`
- Assumptions: `spec/assumptions.md`
- Falsification checklist: `spec/falsification.md`
- QA checklist: `spec/qa-checklist.md`
