# PRD - No-Show Deposit Notice Kit

## Problem
- Small restaurants convert phone reservations into legal deposit notices, reminder proof, and privacy-safe no-show recovery.

## Target user
- Korean small restaurants, omakase counters, cafes with large orders, bakeries, and salon-like reservation businesses that still rely on phone or DM bookings.

## Key UX
- Owner creates a reservation, sends deposit and cancellation notice wording, tracks reminders, and generates a privacy-safe recovery record if the customer disappears.

## Required UI sections
- Reservation risk header with party size, prep cost, deposit status, and cancellation clock
- Phone/DM booking intake form with consent checkboxes
- Deposit notice and cancellation-policy composer
- Reminder timeline for SMS, Kakao, phone, and DM
- Prep-cost receipt builder for ingredients and staff time
- Privacy-safe no-show response script that avoids doxxing or defamation
- Monthly loss report for policy, association, or accountant review

## Assigned design profile
- operator-dense

## Theme
- 자산 방어 / 체면 - no-show loss prevention without public shaming or legal overreaction.

## Source signal references
- S4
- S5

## Stitch prompt
Build a production-grade web app prototype called "No-Show Deposit Notice Kit" for Korean small restaurants converting phone reservations into legal deposit notices, reminder proof, and privacy-safe no-show recovery. The first screen must be a working operator console with a reservation risk header, phone/DM intake form, deposit notice composer, reminder timeline, prep-cost receipt builder, privacy-safe response script, and monthly no-show loss report. Use realistic sample data: party of 8, KRW 120,000 deposit requested, 48-hour cancellation rule, bakery order for 100 items, SMS reminder pending, customer name masked, and KRW 443,000 estimated loss. Design direction: use the operator-dense profile with compact reservation rows, tabular loss numbers, crisp legal-proof states, and one sharp red-orange accent only for deposit deadlines. Do not make a marketing landing page; the first screen must be the working app.

## Constraints
- Phase A only: do not implement a custom demo.
- First screen in Stitch must be the working app, not a marketing landing page.
- Use external sources as problem evidence only, not market-size proof.

## Non-goals
- No external API integration in the prototype.
- No legal, medical, financial, or regulatory advice claims beyond workflow support.

## Success metrics
- User can understand the pain in under 10 seconds.
- User can identify the next action from the first screen.
- The prototype includes every required UI section from this PRD.
