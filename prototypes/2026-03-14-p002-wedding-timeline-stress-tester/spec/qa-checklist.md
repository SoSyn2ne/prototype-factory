# QA checklist

## Happy path
- Add/edit tasks with start time + duration.
- Select a task, apply delay, run stress test.
- Alerts list updates and timeline visualization shifts.
- Reset returns to baseline schedule.
- Export JSON downloads/copies a valid JSON plan.

## Edge cases
- Empty schedule → show a helpful empty state.
- Invalid time format → validation error (no crash).
- Very long duration pushes past midnight → still renders.
- Negative delay (early) or huge delay (e.g., +240 min) → clamped or handled.
- Duplicate task names → stable selection.
- Location changes with missing travel time → treat as 0 or warn deterministically.

## Acceptance verification
- No external CDNs/fonts.
- Works via `file://` open of `demo/index.html`.
- Stress test produces deterministic results for same inputs.
