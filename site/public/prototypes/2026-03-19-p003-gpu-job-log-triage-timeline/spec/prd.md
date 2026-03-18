# PRD — GPU Job Log Triage Timeline

## Problem
- Training/inference jobs fail with noisy logs (PyTorch, CUDA, NCCL, Kubernetes, container runtime).
- The operator question is usually: **what failed first, what type of failure is it, and where should I look?**
- Current workflow is manual: scroll, search, and guess the “first bad line”.

## Target user
- ML engineers / ops running GPU jobs on a shared server or cluster.
- Secondary: researchers debugging their own runs.

## Constraints
- Time: 1-day prototype.
- Budget: $0 runtime.
- Platform: offline browser demo (`demo/index.html`).
- No log upload/network calls.

## Non-goals
- Full observability/metrics integration.
- Perfect root-cause diagnosis (this is triage).
- Parsing every log format (start with common patterns).

## Success metrics
- For a typical failure log paste, user gets:
  - an incident list with clear types in < 2 seconds
  - one-click jump to the relevant log region
- Users report it reduces “time to first hypothesis”.

## Notes
- If validated, next step is a pluggable pattern library + exportable incident report template.
