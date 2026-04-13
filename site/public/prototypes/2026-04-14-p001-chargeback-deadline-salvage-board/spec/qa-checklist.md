# QA checklist

## Happy path
- User lands on the dashboard and instantly sees total recoverable dollars at risk this week.
- User opens one appeal lane and identifies the exact missing evidence and filing deadline.
- User assigns the next action to an owner without leaving the workflow.

## Edge cases
- Multiple payer deadlines conflict for the same patient account.
- Recoverable value is high but evidence confidence is low.
- Appeal is technically open but the supporting document is outdated.

## Acceptance verification
- The priority queue clearly communicates both money and deadline pressure.
- Missing-evidence state is visible without drilling through multiple layers.
- Assignment and handoff UI feels operational rather than report-like.
