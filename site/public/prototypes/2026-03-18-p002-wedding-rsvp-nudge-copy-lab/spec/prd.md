# PRD — Wedding RSVP Nudge Copy Lab

## Problem
- Couples need a fast way to nudge guests who still have not replied.
- The message has to fit relationship, urgency, and channel without sounding stiff or rude.

## Target user
- Couple or planner following up with a short list of pending RSVPs.
- Primary job: compare a few options quickly and copy one.

## Constraints
- Time: first useful output should appear immediately and refresh on every input change.
- Budget: offline static demo only; no API, auth, storage, or analytics.
- Platform: vanilla HTML/CSS/JS; readable on desktop and mobile.

## Non-goals
- Sending messages automatically.
- Tracking guest records or reminder history.
- Treating the score as validated performance data.

## Success metrics
- The UI shows three distinct variants at all times.
- Group, closeness, urgency, event date, channel, and notes all influence the copy.
- Copy works with the Clipboard API and a fallback path.

## User flow (happy path)
1. Choose recipient group and channel.
2. Set closeness, urgency, and event date.
3. Add optional planning notes.
4. Review Polite, Playful, and Direct variants plus heuristic scores.
5. Randomize the phrase seed or copy the best option.

## Notes
- Keep Kakao/SMS outputs tighter than email.
- Score is heuristic only.
- Prefer short, sendable copy over decorative phrasing.
