# PRD — Wedding RSVP Follow-up Triage

## Problem
- Couples/planners need a reliable final headcount, but many guests don’t respond on time.
- Follow-up decisions are currently manual and inconsistent (who to ping first, what to say, how to avoid offending).

## Target user
- Korean couple (신랑/신부) or a wedding planner managing 50–300 guests.

## Constraints
- Time: update a follow-up plan in ≤ 5 minutes
- Budget: $0
- Platform: offline static HTML/CSS/JS
- Privacy: guest names/notes should stay local (no backend in this prototype)

## Non-goals
- Sending messages automatically.
- Contact syncing.
- Perfect etiquette generation (we aim for “good enough + editable”).

## Success metrics
- User can identify the top 10 follow-ups and copy a suggested message in ≤ 2 minutes.
- Reduced “late surprises”: fewer last-minute unknowns one week before the wedding (proxy).

## User flow
1. Enter/update guest list with relationship + RSVP status + friction.
2. Tool computes an urgency score and sorts.
3. User selects a guest → sees a drafted message.
4. User copies/edits message in their chat app (out of scope: direct send).

## Notes
- Score is a heuristic: prioritize no-response + high-importance relationships, but de-prioritize when the guest already accepted/declined.
