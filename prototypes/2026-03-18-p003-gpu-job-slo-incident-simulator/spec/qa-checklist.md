# QA checklist

## Happy path
- Open `demo/index.html` offline.
- Change incident/criticality/deadline/toggles → risk score, actions, and timeline regenerate.
- Click Simulate → timeline highlights steps sequentially; stops at end.

## Edge cases
- No toggles on → still produces a baseline checklist.
- Deadline very low (urgent) → recommended actions prioritize quick stabilization.
- Toggle combinations do not crash rendering.

## Acceptance verification
- No external assets/CDNs.
- Demo is clearly GPU incident triage (not a generic dashboard).
- Simulate animation is deterministic and doesn’t leak intervals (no runaway timers).
