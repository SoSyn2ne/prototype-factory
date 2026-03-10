# PRD — RSVP Funnel Simulator

## Problem
Wedding planning gets derailed by RSVP uncertainty:
- invite list is large and heterogeneous (family, coworkers, +1s),
- reminders feel awkward (too early vs too pushy),
- responses arrive in bursts, so it’s hard to predict catering/seating deadlines.

Most couples end up guessing counts or manually chasing guests.

## Target user
- Primary: the couple (or planner) managing a 50–300 person guest list.
- Secondary: anyone running an event with a hard headcount deadline.

## Constraints
- Time: should produce a useful "what if" in < 5 minutes.
- Budget: $0 demo.
- Platform: web (static demo), no accounts.
- Data: synthetic inputs (this prototype doesn’t manage real guest PII).

## Non-goals
- Full guest CRM (names, phone numbers, messaging integrations).
- Sending messages (SMS/Kakao/email).
- Perfect statistical forecasting.

## Core hypothesis
A simple conversion-funnel model (Invited → Opened → Started RSVP → Responded) plus a reminder schedule slider can:
- reduce anxiety ("we’re on track"),
- reveal the best reminder timing (e.g., T-14, T-7, T-2),
- align decisions with deadlines (caterer cutoff, seating chart).

## Key interactions (demo)
- Input total invited and baseline conversion rates.
- Add 1–3 reminders with dates/strength.
- Simulate expected responses by date and show confidence band.

## Success metrics
- User can answer: “How many RSVPs will we have by the caterer deadline?” within 2 minutes.
- User can compare at least 2 reminder schedules and pick one.

## Risks / failure modes
- Model may give false confidence if parameters are guessed.
- Reminders have social cost; user may ignore recommended cadence.
- Different cohorts behave differently (family vs coworkers), requiring segmentation.

## Notes
The point is not prediction accuracy; it’s making planning assumptions explicit.
