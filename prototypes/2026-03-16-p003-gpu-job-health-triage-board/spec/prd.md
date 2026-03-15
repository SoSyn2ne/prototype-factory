# PRD — GPU Job Health Triage Board

## Problem
When GPU jobs fail, the first 5 minutes are often wasted:
- staring at logs,
- guessing whether it’s OOM vs driver vs thermal vs data bug,
- repeating the same diagnostic steps.

We want a lightweight triage board that classifies common failure modes and suggests the next best action so a human can recover faster.

## Target user
- Solo developer/operator running a small “GPU box” (like the 1080 Ti server) with multiple experiments.
- Anyone who wants a consistent incident note + next step.

## Constraints
- Time: 1–3 minutes per incident
- Budget: $0
- Platform: static offline HTML demo (no system access in the prototype)

## Non-goals
- Not an automatic log collector.
- Not a full monitoring stack.
- Not an LLM-based root-cause analyzer.

## Success metrics
- Given a short pasted log excerpt + symptom toggles, the demo returns:
  - a likely category (OOM / Thermal / Driver / Data / Unknown)
  - 3 concrete next steps
  - a copyable incident note template
- User can “tag” incidents and see a simple weekly mix chart (in-memory).

## Notes
- The classifier is rule-based; the value is speed + consistency.
- Later: integrate with real logs, job runner, and alerting.
