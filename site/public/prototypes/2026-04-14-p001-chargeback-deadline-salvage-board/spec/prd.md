# PRD — Chargeback Deadline Salvage Board

## Problem
- Clinics lose appeal revenue when underpayment and denial cases are tracked too late, spread across payer portals, or assigned without clear deadline ownership.
- Billing teams often spend the same effort on low-value cases and high-value expiring cases because the queue hides recoverable dollar impact.

## Target user
- Independent clinic revenue cycle managers, billing leads, and outsourced reimbursement teams.

## Constraints
- Time: A billing lead should identify the top five expiring recovery opportunities in under 10 minutes.
- Budget: The concept should work with CSV imports, payer rules, and manual task updates before deep EHR or clearinghouse integrations.
- Platform: Desktop-first internal tool for daily appeals review and revenue recovery standups.

## Non-goals
- Auto-submitting appeal packets to payer portals.
- Full claim lifecycle management beyond underpayment and denial recovery.
- Legal adjudication or contract negotiation tooling.

## Success metrics
- Users can rank appeal opportunities by recoverable dollars, remaining filing window, and evidence completeness in one screen.
- Teams can see the exact missing artifact or payer requirement blocking a profitable appeal.
- The product shortens time-to-assignment for expiring high-value cases.

## Notes
- Theme: 자산 방어.
- Design profile: financial-analyst.
- Core UI sections: recoverable revenue KPI strip, appeal deadline priority queue, payer-rule timeline, missing-evidence checklist, underpayment trend chart, owner handoff drawer.
