# PRD — Wedding RSVP Nudge Composer

## Problem
Following up on wedding RSVPs is awkward. Couples (or the ops helper) need to:
- nudge people who haven’t responded,
- handle "maybe" without sounding desperate,
- keep tone appropriate for the relationship,
- keep it short for SMS / chat apps,
- avoid escalating pressure too early.

Most people end up rewriting the same message repeatedly and still worry they sound pushy.

## Target user
- Wedding ops person (couple, best man/maid of honor, planner assistant) managing RSVP follow-ups.
- Needs fast, copy-pastable text for SMS/iMessage/KakaoTalk/Email.

## Constraints
- Time: generate usable copy in < 60 seconds.
- Budget: $0; demo only.
- Platform: local browser, no backend.
- Privacy: guest info stays local (no network calls).

## Non-goals
- Full RSVP database, seating chart, or guest CRM.
- Perfect translation; output just needs to be plausible.
- Automated sending / integrations.

## Success metrics
- User can generate 3 variants with one click.
- User understands why one variant is recommended.
- Pushiness risk meter feels directionally correct.

## Notes
The demo intentionally uses simple heuristics (tone + deadline phrasing + punctuation) to produce a risk score. The goal is not ML-quality copywriting; it’s consistent, relationship-aware templates.
