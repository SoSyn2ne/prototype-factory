# PRD — GPU Log Triage Pad

## Problem
When GPU jobs fail (training/inference/rendering), the first 10 minutes are usually wasted:
- scanning mixed logs (app + driver + kernel),
- misclassifying the failure (OOM vs driver reset vs thermal throttle),
- repeating the same checklist ("is it memory? is it temps? is it a bad CUDA build?").

A lightweight, local triage tool can turn paste-in logs into:
- a plausible diagnosis bucket,
- an evidence list (matching lines),
- a next-action checklist.

## Target user
- Primary: a solo developer/operator running GPU workloads on a single Linux box.
- Secondary: a small team doing on-call for ML jobs.

## Constraints
- Must run offline (no sending logs externally).
- Must be fast (paste → result in < 1s for typical logs).
- Should be explainable (show which lines triggered the diagnosis).

## Non-goals
- Perfect classification (heuristics only in this prototype).
- Parsing binary crash dumps.
- Automating fixes.

## Key interactions (demo)
- Paste logs into a text area.
- See detected signals grouped by category (OOM, thermal, driver reset, NCCL/network, disk).
- Click a category to view evidence lines.
- Generate a "next actions" checklist and save the triage note locally.

## Success metrics
- For common failures, tool suggests the correct first 1–2 checks.
- User can paste logs, get a classification, and save a short incident note.

## Risks / failure modes
- False positives from common words ("out of memory" in unrelated context).
- Users may rely on the tool and skip deeper investigation.
- Some GPU failures are multi-causal (thermal + OOM), requiring multi-label output.

## Notes
This is designed as a *local-first* ops pad. It should never require network access.
