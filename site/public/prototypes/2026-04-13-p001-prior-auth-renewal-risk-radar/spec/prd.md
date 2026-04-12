# PRD — Prior Auth Renewal Risk Radar

## Problem
- Specialty medication patients can lose therapy continuity when prior authorization renewals slip because chart notes, payer forms, and follow-up calls are fragmented across teams.
- High-value renewals get buried among routine tasks, so teams notice the problem only when the fill is already at risk.

## Target user
- Specialty pharmacy operations leads, reimbursement coordinators, and clinic medication access teams.

## Constraints
- Time: A coordinator should identify the day's highest-risk renewals in under 10 minutes.
- Budget: The concept should work with imported payer status and manual document tracking before deep integrations.
- Platform: Desktop-first internal tool for daily queue review and escalation management.

## Non-goals
- Submitting payer prior authorization packets automatically.
- Replacing the pharmacy dispensing system or EHR.
- Clinical decision support about medication appropriateness.

## Success metrics
- Teams can rank renewal cases by therapy value, deadline pressure, and document completeness in one session.
- Users can immediately see the blocking document or payer step for each at-risk patient.
- The interface shortens time-to-escalation for high-risk renewals before therapy interruption occurs.

## Notes
- Design profile: operator-dense.
- Core UI sections: therapy-at-risk KPI strip, renewal priority queue, payer deadline timeline, missing-document checklist, patient cohort risk chart, next-action assignment drawer.
