# PRD — Wedding RSVP Friction Radar

## Problem
For weddings, RSVP collection isn’t “one list → one deadline”. People drop off at different points:
- they saw the invite but postponed,
- they answered “maybe” and never followed up,
- they got confused about +1/kids/meals,
- they are waiting for friends/family coordination.

Hosts typically discover this too late, and follow-ups become stressful, manual, and awkward.

## Target user
- Primary: bride/groom or organizer managing RSVPs for 80–300 guests.
- Secondary: a helper (best man/maid of honor) who sends follow-ups.

## Constraints
- Time: 1-day prototype.
- Budget: $0 runtime.
- Platform: offline demo (`demo/index.html`), no server.
- Tone: respectful nudges (no guilt, no pressure).

## Non-goals
- Full invitation system, SMS sending, or contact syncing.
- Complex analytics; this is a “where to focus next” radar.

## Success metrics
- In <2 minutes, user can:
  1) pick a segment (family / coworkers / friends),
  2) see where drop-off is highest,
  3) generate a nudge draft that fits that segment and situation.

## Notes
This prototype uses a small synthetic dataset and a deterministic copy generator to demonstrate the workflow.
