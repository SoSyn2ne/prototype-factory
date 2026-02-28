# QA checklist

## Happy path
- Create an experiment card with hypothesis + test type.
- Set numeric kill criteria and success criteria.
- Adjust Impact/Confidence/Effort sliders and verify score updates.
- Add an evidence log entry.
- Mark verdict and verify card state updates.

## Edge cases
- Empty fields: prevent “save” or show inline hints.
- Very high effort (e.g., 40h) should reduce score noticeably.
- Kill criteria missing numbers/time: warn user.
- Multiple cards: sorting by score remains stable.

## Acceptance verification
- Demo loads offline (no external CDN requests).
- At least one meaningful interaction exists (score recalculation + prioritization).
- UI is keyboard accessible (tab order, visible focus).
