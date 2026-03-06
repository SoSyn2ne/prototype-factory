# PRD — Wedding RSVP Ops Console

## Problem
Small weddings often run “on vibes” in spreadsheets and chat threads. On the day-of, the coordinator needs **one operational view**:
- who is coming (and who isn’t)
- meal counts
- allergy/accessibility risks
- a printable checklist they can hand to venue/catering
- a seating starting point that’s *good enough* when time is short

## Target user
- The wedding coordinator / family member running day-of operations for a wedding of ~30–150 guests.

## Constraints
- Time: should work in minutes, not hours.
- Budget: $0 for the demo (local-only).
- Platform: any modern browser, offline-friendly.

## Non-goals
- Not a full RSVP product (no email invites, no authentication, no payment, no guest portal).
- Not an optimized seating solver (no strict constraints, no complex relationships).

## Success metrics
- A coordinator can enter 30 guests in < 10 minutes.
- Meal counts and allergy flags are visible at a glance.
- A printable checklist is generated reliably.
- Seating suggestions reduce “blank page” time, even if the result needs manual edits.

## User flow (happy path)
1. Open console.
2. Add guests + notes.
3. Filter by group to sanity-check.
4. Click “Generate seating suggestions”.
5. Print the day-of checklist.

## Notes
This repo’s demo is intentionally local-only and uses `localStorage` to keep the operational loop tight.
