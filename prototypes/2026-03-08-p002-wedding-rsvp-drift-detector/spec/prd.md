# PRD — Wedding RSVP Drift Detector

## Problem
Wedding RSVPs drift over time: attendance flips, plus-ones appear/disappear, dietary restrictions get added late, and names are corrected. The pain is not the initial RSVP — it’s the “silent changes” that break:
- seating chart assumptions,
- catering counts,
- special meals,
- family table politics.

Most couples track this in spreadsheets + chat screenshots, which makes it easy to miss impactful deltas.

## Target user
- The wedding “ops person” (couple or helper) managing RSVPs and seating.
- Event planner assistant who needs a daily review queue.

## Constraints
- Time: 2–5 minutes per day for review.
- Budget: $0; static demo.
- Platform: browser-only; no backend.

## Non-goals
- Full RSVP collection system.
- Vendor integrations (catering, SMS).
- Perfect identity matching / dedupe.

## Success metrics
- The demo can simulate RSVP changes and produce a ranked “drift” queue.
- User can acknowledge/resolve drift items so the queue stays small.
- The UI makes it obvious which changes are *seating-breaking* vs. minor.

## Notes
This is an ops console: it optimizes for surfacing deltas, not storing everything.
