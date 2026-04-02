# QA checklist

## Happy path
- User lands on the board and sees violation cases ranked by fine exposure and response urgency.
- User opens one property and reviews timeline, resident communication context, and the recommended resolution action in one screen.
- User understands how today’s actions reduce avoidable fines across the portfolio.

## Edge cases
- Cases with low fine exposure but very high escalation risk.
- Properties with repeated violations and fragmented resident communication history.
- Violations that are deadline-sensitive but not yet severe enough to escalate.

## Acceptance verification
- Spec is clearly about HOA and property violation triage rather than generic property CRM.
- All required UI sections are explicitly documented.
- Design direction is present and consistent with the Stitch prompt.
