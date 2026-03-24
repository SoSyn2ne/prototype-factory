# PRD — Commercial Cleaning Route Gap Finder

## Problem
- An operations board that exposes underfilled cleaning routes and turns spare capacity into bookable revenue blocks.
- Users currently stitch this workflow together across inboxes, spreadsheets, notes, and ad-hoc follow-up.
- The prototype should compress the first high-confidence decision into a single screen.

## Target user
- Regional cleaning service managers coordinating crews across recurring commercial sites.

## Key UX
- Spot idle crew windows, route friction, and fill opportunities instantly so dispatch can recover revenue before the day starts.

## Required UI sections
- Coverage summary hero
- crew route timeline
- gap opportunity list
- travel-friction map card
- site priority queue
- recovered-hours footer

## Constraints
- Time: Phase A only; do not build a custom production demo yet.
- Budget: static prototype / stitched export friendly.
- Platform: responsive web UI.

## Non-goals
- No live integrations or external APIs.
- No backend auth, billing, or notification plumbing.
- No fully custom demo logic beyond scaffold + stub.

## Success metrics
- A user understands the core workflow in under 30 seconds.
- The screen makes the next action obvious without onboarding.
- The exported Stitch screen can drop into the demo slot with minimal cleanup.

## Stitch prompt
- Design a polished desktop operations dashboard called "Commercial Cleaning Route Gap Finder" for regional cleaning-service managers optimizing daily crew schedules. Use a bright service-ops aesthetic with cool teal, off-white, and signal orange accents; keep hierarchy bold, route blocks highly scannable, and the product feel practical, energetic, and dispatch-ready. Include: (1) a coverage summary hero with booked hours, open gaps, and fill-value CTA, (2) a crew route timeline for the current day showing location blocks and slack windows, (3) a gap opportunity list ranked by recoverable revenue and travel fit, (4) a travel-friction map card summarizing drive-time penalties, (5) a site priority queue for contracts at churn or SLA risk, and (6) a recovered-hours footer with before/after utilization totals. Use realistic mocked service-ops data, desktop layout, crisp card structure, and no code snippets.
