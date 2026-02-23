# RivalSignals: Competitor Feature-Shift Alerts

Track competitor release notes/newsletters and alert only when a change meaningfully threatens (or validates) your positioning — with an explicit falsification checklist.

## Status
- prototype (spec-first)

## What it is
A competitive intel system that behaves more like **threat intel + earnings-call monitoring** than a generic alert:
- It detects updates.
- It produces a *thesis-delta* explanation (“this matters because…”).
- It only notifies when the score passes a threshold.

## How to use
- Read the spec in `spec/`.
- If we choose to build, start with a concierge pilot: manually ingest 5 competitors and deliver Telegram alerts.

## Folder map
- `spec/prd.md` — problem, workflow, validation
- `spec/assumptions.md` — G1 (KNOWN/ASSUMPTION/UNKNOWN)
- `spec/falsification.md` — G2 (5–7 disproof tests)
- `spec/qa-checklist.md` — QA/acceptance checks
- `web/` — placeholder for a future lightweight UI

## Links
- Repo path: `prototypes/2026-02-24-p001-rivalsignals-competitor-feature-shift-alerts`
- Preview: (TBD)
