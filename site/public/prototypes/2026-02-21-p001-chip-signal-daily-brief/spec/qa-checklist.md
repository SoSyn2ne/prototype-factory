# QA checklist

## Happy path
- [ ] Brief contains 0–5 tripwires max, each with: trigger, severity, suggested next action, and a falsification condition.
- [ ] Brief includes next-14-days earnings/events for tracked names.
- [ ] Each major claim in the brief is tagged KNOWN / ASSUMPTION / UNKNOWN.
- [ ] Reader can finish in ≤5 minutes (scanability: bullets, short sections).

## Edge cases
- [ ] No-news day: brief is still useful (calendar + “no action” confirmation).
- [ ] Multiple simultaneous events (earnings + geopolitics): severity ranking remains consistent.
- [ ] Watchlist changes mid-week: format still works without breaking consistency.

## Acceptance verification
- [ ] Run a 7-day pilot: generate 7 briefs in a row with consistent structure.
- [ ] After 7 days, collect a 3-question self-report: (1) time-to-read, (2) clarity of actions, (3) trust in tripwires.
- [ ] Track: #tripwires fired per day, and % judged “useful” by the user.
