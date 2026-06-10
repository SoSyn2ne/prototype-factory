# PRD — World Cup Border Panic Pass

## Problem
- Fans and families spend heavily on event travel, then rely on scattered advisory links, screenshots, group chats, passport checks, and authorization reminders.
- One missing passport, ESTA/ETA, emergency contact, or route rule can ruin an expensive group trip.
- The prototype must be a playful readiness pass that motivates completion and sharing, not a generic travel checklist.

## Target user
- Fans, families, and friend groups traveling internationally for World Cup 2026 matches or other major events.

## Constraints
- Time: Phase A spec only; Stitch will generate the first visual prototype.
- Budget: no airline, passport, visa, or event-ticket integrations in Phase A.
- Platform: responsive web app, mobile-first because the pass is shared in group chats.

## Non-goals
- No official travel authorization or legal advice.
- No automated visa eligibility decision.
- No custom demo implementation in Phase A.

## Success metrics
- User can identify go/no-go travel blockers in under 30 seconds.
- User can share a readiness pass with missing items clearly shown.
- UI feels playful and portfolio-worthy while preserving serious warning states.

## Notes
- One-liner: A playful travel readiness pass that turns passport, ESTA/ETA, match-day crowd, and backup-plan checks into a shareable go/no-go score.
- Assigned design profile: playful-experimental.
- Theme: 외로움.
- Source signals: S7, S8 from daily/2026-06-11/ideas.md.
- Required UI sections: match-trip header, passport and authorization checks, route/country rule cards, 72-hour countdown, crowd and advisory warning strip, emergency-contact locker, backup-plan builder, shareable readiness pass.
- Output artifact: shareable border readiness pass.
- Stitch prompt: Create a responsive web app called "World Cup Border Panic Pass" for fans, families, and friend groups traveling internationally for World Cup 2026 matches or other major events. The app is based on observed user pull: travelers already check passports, ESTA or ETA timing, official travel advisories, emergency contacts, route rules, and group-chat reminders before expensive event trips. The app should use a playful readiness-pass mechanic around the trigger moment "World Cup or major event travel is booked and the group needs document confidence" and make the first screen communicate "Do not be the person who ruins match week at the border." Use the user's own language: "Tickets are booked, but I need everyone to prove they can actually enter." Build the core workflow around passport dates, nationality, route, authorization status, match date, advisory notes, emergency contacts, and backup travel plans, and produce a shareable border readiness pass. Required sections: match-trip header, passport and authorization checks, route/country rule cards, 72-hour countdown, crowd and advisory warning strip, emergency-contact locker, backup-plan builder, and shareable readiness pass. Emotional pressure to make visible: 외로움, group-trip embarrassment, sunk ticket cost, and the fear of missing the match because one document was wrong. Design direction: use the `playful-experimental` profile with bold tournament energy, vivid team-color accents, collectible pass-card styling, and crisp warning states that still feel fun to share. Avoid generic dashboard framing; make the main interaction feel like earning a match-week border pass with visible blockers and celebratory clears.
