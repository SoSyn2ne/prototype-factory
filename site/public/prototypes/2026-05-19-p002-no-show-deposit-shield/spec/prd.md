# PRD — No-Show Deposit Shield

## One-liner
A restaurant reservation console that converts cancellation rules, deposits, and guest messages into fair no-show decisions and dispute evidence.

## Candidate type
Practical / Commercial

## Problem
- A restaurant reservation console that converts cancellation rules, deposits, and guest messages into fair no-show decisions and dispute evidence.
- Inspired by external problem signals Signal 3 and Signal 4 from today's search sweep.

## Target user
- Independent restaurants, tasting-menu operators, private dining managers, appointment-heavy salons, and reservation staff who lose prime inventory to no-shows but fear angry reviews, refund pressure, and inconsistent staff enforcement.

## Key UX
Enter reservation time, party size, deposit amount, cancellation window, guest message history, reason codes, replacement waitlist activity, and staff notes; the product recommends waive/charge/partial-credit decisions, drafts guest-facing language, logs evidence, and calculates recovered vs lost revenue.

## Required UI sections
- reservation and deposit intake
- policy fairness decision lane
- guest message evidence timeline
- replacement waitlist/revenue recovery meter
- waive/charge/credit recommendation cards
- staff script and manager approval drawer
- chargeback/review defense packet

## Design profile
operator-dense

## Theme
자산 방어

## External signal references
- Signal 3: Reddit r/restaurantowners — Charging for no-shows — https://www.reddit.com/r/restaurantowners/comments/1ash029/charging_for_noshows/
- Signal 4: Reddit r/restaurateur — Charging cancellations due to illness? — https://www.reddit.com/r/restaurateur/comments/k6l1mm/charging_cancellations_due_to_illness/

## Stitch prompt
Design a restaurant-operations product called No-Show Deposit Shield for independent restaurants, tasting-menu operators, private dining managers, appointment-heavy salons, and reservation staff handling cancellations and no-shows. Users enter reservation time, party size, deposit amount, cancellation window, guest message history, reason codes, replacement waitlist activity, and staff notes; the app recommends waive, charge, or partial-credit decisions, drafts guest-facing language, logs evidence, and calculates recovered versus lost revenue. Include a reservation and deposit intake, policy fairness decision lane, guest message evidence timeline, replacement waitlist/revenue recovery meter, waive/charge/credit recommendation cards, staff script and manager approval drawer, and chargeback/review defense packet. Design direction: use an operator-dense aesthetic with compact shift-board tables, reservation-status chips, dark ink and warm stainless accents, visible money-at-risk totals, and fast manager-approval controls so the product feels like a real host-stand command center.

## Constraints
- Phase A only: do not implement a custom demo before Stitch exports arrive.
- Preserve the assigned design profile and theme in the Stitch result.
- Expected drop folder: /home/sy/Downloads/stitch_drop/2026-05-19/p002/

## Non-goals
- Full production compliance/legal advice.
- External LLM API calls during Phase A.

## Success metrics
- meta.json and spec files include title, theme, design profile, target user, key UX, UI sections, signal references, and full Stitch prompt.
- The eventual Stitch export preserves the original generated HTML environment.

