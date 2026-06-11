# PRD — World Cup Visa Panic Relay

## Problem
- A playful group-trip readiness pass for fans who need every passport, visa, route, and emergency contact proven before match week.
- Trigger moment: match week is close and one missing document could ruin the trip.
- The prototype must make the output artifact visible quickly: relay pass with go/no-go racers.

## Target user
- World Cup 2026 fans, families, supporter groups, and friend groups crossing borders for matches or fan zones.

## Key UX
- Each traveler completes passport, visa/ESTA/ETA, ticket, hotel, route, emergency contact, and advisory checks; the group gets a relay-style go/no-go pass.

## Required UI sections
- Match week relay header
- Traveler readiness lineup
- Passport and visa proof cards
- Route and border rule tiles
- Ticket and hotel proof locker
- 72-hour panic countdown
- Emergency contact bench
- Shareable fan pass

## Assigned design profile
- playful-experimental

## Theme
- 외로움

## Source signal references
- S13 - Guardian live World Cup 2026 travel/visa controversy, Jun 2026: https://www.theguardian.com/football/live/2026/jun/11/world-cup-2026-countdown-opener-mexico-south-africa-south-korea-czechialive
- S14 - Reddit r/gencon, event system duplicate-ticket and schedule confusion, 2026: https://www.reddit.com/r/gencon/comments/1tiqn13/gencons_event_system_literally_couldnt_be_worse/

## Constraints
- Time: Phase A spec only; Stitch will generate the first visual prototype.
- Budget: no external LLM APIs or paid data APIs in Phase A.
- Platform: responsive web app unless the prompt explicitly biases mobile-first.

## Non-goals
- Do not implement a custom demo in Phase A.
- Do not provide legal, medical, tax, immigration, or financial advice as a final authority.
- Do not claim source signals prove market size.

## Success metrics
- Viewer can identify the target user, trigger, pressure, and output artifact within 10 seconds.
- The assigned design profile is visually implied by the Stitch prompt.
- The UI is not a generic dashboard; it centers the named mechanic.

## Stitch prompt
Create a responsive web app called "World Cup Visa Panic Relay" for World Cup 2026 fans, families, supporter groups, and friend groups crossing borders for matches or fan zones. The app is based on observed user pull: fans already coordinate tickets, passport checks, visa or ESTA timing, hotel proof, travel advisories, emergency contacts, and fallback fan-zone plans in group chats. The app should use a relay pass with go/no-go racers mechanic around the trigger moment "match week is close and one missing document could ruin the trip" and make the first screen communicate "Do not be the teammate who gets stopped at the border." Use the user's own language: "Tickets are booked, but everyone has to prove they can actually enter." Build the core workflow around traveler names, nationality, passport dates, visa/authorization proof, match ticket, hotel proof, route, advisory notes, and emergency contacts, and produce a shareable group readiness pass. Required sections: match week relay header, traveler readiness lineup, passport and visa proof cards, route and border rule tiles, ticket and hotel proof locker, 72-hour panic countdown, emergency contact bench, and shareable fan pass. Emotional pressure to make visible: 외로움, group embarrassment, sunk ticket cost, and fear of watching friends go without you. Design direction: use the `playful-experimental` profile with stadium-energy visuals, bright route colors, passport-stamp interactions, playful countdowns, and polished share-card composition. Avoid generic dashboard framing; make the main interaction feel like a fan relay where every completed document moves the group closer to kickoff.
