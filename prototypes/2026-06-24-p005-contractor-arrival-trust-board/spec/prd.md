# PRD - Contractor Arrival Trust Board

## Problem
Field-service teams reduce homeowner rage by turning arrival windows, route changes, and reschedules into visible trust signals.

## Target user
HVAC, plumbing, cleaning, landscaping, and repair companies whose customers churn after late arrivals or no-shows.

## Key UX
Dispatcher sees crew route, promised arrival window, customer tolerance, reschedule reason, and communication status; the app recommends who to text, credit, reassign, or escalate.

## Required UI sections
- Today trust header with on-time risk, callbacks, and no-show exposure
- Crew route and arrival-window board
- Customer tolerance and history panel
- Delay reason picker with proof photo/location fields
- Two-way SMS update composer
- Reschedule/credit/escalation decision queue
- After-service trust recovery report

## Assigned design profile
field-ops

## Theme
자산 방어 - protecting reputation and repeat revenue in field service.

## Source signal references
- S10 - FieldServicely, 2026 missed-appointment playbooks emphasize scheduling, reminders, and reschedule flows for field-service teams: https://www.fieldservicely.com/blog/how-to-reduce-missed-appointments-in-field-service
- S11 - Reddit r/homeowners, homeowners complain about contractors being late, repeatedly rescheduled, or no-showing appointments: https://www.reddit.com/r/homeowners/comments/na0jdt/why_contractors_are_always_late_or_no_show/

## Stitch prompt
Build a production-grade web app prototype called "Contractor Arrival Trust Board" for field-service dispatch teams preventing late-arrival and no-show damage. The first screen must be a working dispatch trust board with a today trust header, crew route and arrival-window board, customer tolerance panel, delay reason picker, two-way SMS composer, reschedule/credit/escalation queue, and after-service recovery report. Use realistic sample data: six HVAC appointments, one technician running 38 minutes late, one customer burned by two prior reschedules, GPS route gap, urgent AC outage, $25 service credit option, and an after-hours lead. Design direction: use the field-ops profile with rugged dispatch rows, high-contrast status badges, 44px touch targets, and a sparing orange action accent for urgent customer updates. Do not make a marketing landing page; the first screen must be the working app.

## Constraints
- Phase A only: no custom demo implementation.
- Stitch output must preserve the assigned design profile.
- First screen must be the working app, not a marketing landing page.

## Success metrics
- User can understand the core decision or field workflow within 10 seconds.
- Every required UI section appears in the generated Stitch output.
- The cited source signals are visible as problem evidence in the product framing.
