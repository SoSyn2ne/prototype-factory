# Prototype Factory Phase A - 2026-06-09

## Search signals / External signals

### S1 - Reddit r/smallbusiness, workers-comp audit bill dispute, Mar 1 2026
- Bucket: community / insurance workflow
- Raw signal: A small-business owner says the insurer audit created an extra bill after allegedly reclassifying employees, and asks whether anyone has successfully disputed a workers-comp audit bill.
- Source: https://www.reddit.com/r/smallbusiness/comments/1rhmfi0/has_anyone_successfully_disputed_a_workers_comp/

### S2 - Reddit r/smallbusiness, workers-comp lapse compliance panic, Apr 8 2026
- Bucket: community / compliance anxiety
- Raw signal: A business owner who had a short workers-comp lapse received a compliance audit investigator email and asked how much trouble they were in, showing fear around documentation and state follow-up.
- Source: https://www.reddit.com/r/smallbusiness/comments/1sg0jzj/2_month_lapse_in_workers_compensation_how_much/

### S3 - Reddit r/GeneralContractor, subcontractor COI audit prep, May 15 2026
- Bucket: community / contractor operations
- Raw signal: A contractor-focused post notes many small construction businesses are unprepared for workers-comp audit time and describes calling each subcontractor insurer to collect current certificates.
- Source: https://www.reddit.com/r/GeneralContractor/comments/1te263q/workers_comp_audits/

### S4 - Reddit r/HOA, Illinois condo EV charger approval delay, Jan 29 2026
- Bucket: community / property operations
- Raw signal: A condo owner says the HOA delayed a personal EV charger for six months and demanded a building-wide electrical capacity study even though an electrician said the individual install would not affect building power.
- Source: https://www.reddit.com/r/HOA/comments/1qqp0rp/il_condo_hoa_refusing_ev_charger_despite_state/

### S5 - Reddit r/Connecticut, HOA EV charging before purchase, Jun 5 2026
- Bucket: community / housing purchase behavior
- Raw signal: A buyer considering an HOA property asks how residents handle EV charger installation when reserved parking is not near the unit, and commenters warn trenching, pedestals, metering, and restoration can become very expensive.
- Source: https://www.reddit.com/r/Connecticut/comments/1ty15fm/hoa_and_ev_charger_installation/

### S6 - Condo EV charging 2026 buyer guide, Apr 2026
- Bucket: niche operator workflow / property infrastructure
- Raw signal: A condo-garage EV guide frames the buying question as electrical capacity, billing method, charger rules, upgrade status, and waitlist details rather than simply whether chargers exist.
- Source: https://www.millionluxury.com/news/ev-charging-in-condo-garages-a-2026-buyers-guide-to-load-limits-billing-and-waitlists

### S7 - Reddit r/workingmoms, summer camp signup stress, Feb-Mar 2026
- Bucket: community / childcare logistics
- Raw signal: Working parents describe summer camp signup as a broken multi-deadline project: eight camps, registration windows, age cutoffs, hour ranges, price structures, missed reminders, and backup camps that cost almost double.
- Source: https://www.reddit.com/r/workingmoms/comments/1rbqfg3/signing_up_for_summer_camps_stress/

### S8 - Chicago Sun-Times, park district summer camp registration stress, Apr 2026
- Bucket: news / childcare scarcity
- Raw signal: Chicago parents anxiously awaited Park District summer camp registration, showing public-sector camp signup as a timed scarcity event with real household scheduling consequences.
- Source: https://chicago.suntimes.com/news/2026/04/22/chicago-park-district-summer-camp-registration-stress-mounts-parents

### S9 - Boys & Girls Clubs Bellevue, 2026 summer camp refund cliffs, May 2026
- Bucket: policy / refund deadlines
- Raw signal: A 2026 summer-camp refund policy lists weekly payment due dates, processing-fee deadlines, 50% refund windows, and no-refund dates, turning childcare coverage into a deadline-risk problem.
- Source: https://www.bgcbellevue.org/ckfinder/userfiles/files/Summer%20Camp/Summer%20Camp%202026%20-%20Withdrawal%20%26%20Refund%20Policy.pdf

### S10 - Reddit r/weddingplanning, room-block attrition stress, Jun 2 2026
- Bucket: community / wedding budget anxiety
- Raw signal: A couple says they overestimated hotel room-block usage and are now stressed by attrition clauses; commenters suggest anonymous group posts and rescue marketplaces to fill rooms before liability hits.
- Source: https://www.reddit.com/r/weddingplanning/comments/1tv70gp/wedding_room_block_stress/

### S11 - Reddit r/weddingplanning, destination wedding room-block attrition, Mar 24 2026
- Bucket: community / travel event planning
- Raw signal: A couple planning an October 2026 destination wedding debates whether to accept 80-90% attrition when hotels are busy and guests might otherwise be stuck without rooms.
- Source: https://www.reddit.com/r/weddingplanning/comments/1s2j3ni/destination_wedding_room_block_with_attrition/

## Novelty / Duplicate Check

Checked the last 7 PF daily batches from 2026-05-29 through 2026-06-08.

- Rejected generic AI-search traffic recovery because 2026-06-05 already flagged an AI-search/citation revenue leak variant as too close unless the interaction changes substantially.
- Rejected another restaurant/service-fee disclosure console because recent batches already covered card-fee backlash, Airbnb cleaning fee strategy, and fee resentment.
- Rejected another wedding outfit/social-anxiety toy because 2026-06-04 already shipped a wedding guest outfit diplomacy concept.
- Rejected another late-invoice/cash-flow collector because 2026-06-01 already covered chasing late payments.
- Accepted p001 because the user is a contractor/bookkeeper facing workers-comp audits; the data source is payroll class codes plus subcontractor COIs and exemption certificates, not invoice chasing or generic compliance.
- Accepted p002 because the user is a condo owner/HOA/electrician making a physical EV charger approval packet; the trigger is garage routing, metering, board approval, and capacity politics, not real-estate rent or deposit negotiation.
- Accepted p003 because the user is a working parent coordinating scarce childcare weeks; the interaction is a deadline/refund/coverage grid, not tuition negotiation or family budgeting alone.
- Accepted p004 because it treats wedding room-block attrition as a liability simulator and rescue game, not attire selection or guest-style diplomacy.

## Final candidates

### p001 - Practical / Commercial

### Title
Workers Comp Audit Shock Binder

### One-liner
A payroll and subcontractor proof room that helps small contractors survive workers-comp premium audits before surprise bills hit.

### Target user
Small contractors, cleaning companies, trades businesses, bookkeepers, and insurance agents preparing for workers-comp premium audits.

### Key UX
A binder-style audit command room where owners upload payroll periods, subcontractor COIs, exemption certificates, class-code notes, lapse explanations, and disputed-audit evidence, then receive a shock estimate and evidence checklist.

### Required UI sections
- Audit shock forecast by payroll class code, subcontractor exposure, lapse period, and missing certificate
- Subcontractor COI and exemption certificate vault with expiry and insurer contact status
- Payroll classification ledger comparing policy class, payroll system labels, job type, and auditor change
- Dispute packet builder with timeline, proof gaps, owner notes, agent emails, and escalation status
- Compliance investigator inbox for state notices, due dates, and response drafts
- Cash-flow impact strip showing premium due now, disputed amount, payment-plan request, and worst-case reserve
- Bookkeeper handoff checklist for next renewal and monthly certificate collection

### Assigned design profile
operator-dense

### Theme
자산 방어 - surprise premium bills, subcontractor proof gaps, payroll classification fear, and small-contractor cash protection.

### Source signal references
S1, S2, S3

### Stitch prompt
Build a production-grade B2B web app prototype called "Workers Comp Audit Shock Binder" for small contractors and bookkeepers preparing for workers-comp premium audits. The first screen must be a working audit room with an audit shock forecast, subcontractor COI vault, payroll classification ledger, dispute packet builder, compliance investigator inbox, cash-flow impact strip, and bookkeeper renewal checklist. Use realistic sample data for a cleaning company and a small general contractor: class-code changes, 1099 subs, expired COIs, exemption certificates, a two-month lapse notice, insurer contacts, and a surprise premium bill. Design direction: use the operator-dense profile with compact charcoal/fog tables, margin-aware KPIs, crisp queues, and one sharp warning accent for unresolved audit exposure. Do not make a marketing landing page; the first screen must be the working app.

### p002 - Practical / Commercial

### Title
Condo Charger Approval Packet

### One-liner
A right-to-charge packet builder for condo owners, HOA boards, and electricians stuck between EV demand, capacity studies, and parking politics.

### Target user
Condo owners, HOA board members, property managers, electricians, and EV charger installers handling shared-garage charger requests.

### Key UX
A site-plan packet workspace where a resident or manager maps parking space, meter route, panel distance, trenching/restoration, insurance, billing, load-share assumptions, waitlist status, and board decision language into one approval package.

### Required UI sections
- Garage route canvas with unit, assigned stall, electrical room, trench path, conduit length, and restoration risk
- Capacity and billing checklist for individual meter, shared panel, load management, and future charger backbone
- HOA request packet with owner responsibility, electrician license, insurance, removal obligation, and right-to-charge citations
- Board decision queue comparing approve, conditional approve, capacity study, waitlist, and denial risk
- Cost split estimator for owner-paid charger, community backbone, pedestal, permit, study, and make-ready work
- Neighbor fairness panel showing current EV owners, future waitlist, guest spaces, and resale amenity tradeoff
- Printable board memo plus electrician scope-of-work handoff

### Assigned design profile
field-ops

### Theme
자산 방어 / 건강 - EV ownership, parking politics, condo resale value, energy access, and infrastructure fairness.

### Source signal references
S4, S5, S6

### Stitch prompt
Build a field-operations web app prototype called "Condo Charger Approval Packet" for condo owners, HOA boards, property managers, and electricians handling EV charger requests in shared garages. The main screen should be an approval packet workspace with a garage route canvas, capacity and billing checklist, HOA request packet, board decision queue, cost split estimator, neighbor fairness panel, and printable board memo. Use realistic examples: assigned parking not near the unit, electrical room distance, pedestal trenching, metered billing, capacity-study request, right-to-charge law note, insurance certificate, and future charger waitlist. Design direction: use the field-ops profile with slate/steel operational surfaces, a restrained orange action accent, map-like routing panels, and reliable decision controls that feel usable in a board meeting. Do not make a marketing landing page; the first screen must be the working app.

### p003 - Practical / Commercial

### Title
Camp Coverage Panic Grid

### One-liner
A working-parent summer childcare command board that catches registration windows, refund cliffs, coverage gaps, and backup plans before one missed Tuesday ruins July.

### Target user
Working parents, single parents, parent groups, and family assistants coordinating summer camp coverage across school-break weeks.

### Key UX
A family coverage grid that turns dozens of camp windows, age limits, hours, refund cliffs, waitlist positions, deposits, PTO conflicts, and grandparent/vacation constraints into a calm weekly action plan.

### Required UI sections
- Summer coverage grid by week, child, workday hours, commute, and pickup buffer
- Registration launch radar with exact open time, reminder channel, login/payment prep, and waitlist fallback
- Camp comparison cards for age cutoff, hours, price, lunch, extended care, sibling fit, and distance
- Refund cliff timeline with deposit, payment due, partial refund, no-refund, and transfer dates
- Backup stack for nanny week, family trip, parks camp, specialty camp, and emergency PTO
- Budget burn meter comparing cheap parks camp, specialty camp, nanny, and missed-work cost
- Parent message pack for waitlist follow-up, cancellation request, subsidy/payment questions, and grandparent coordination

### Assigned design profile
calm-consumer

### Theme
외로움 / 자산 방어 / 사교육 - single-parent overload, childcare scarcity, missed deadlines, refund cliffs, and paid backup anxiety.

### Source signal references
S7, S8, S9

### Stitch prompt
Build a calm consumer web app prototype called "Camp Coverage Panic Grid" for working parents planning summer childcare across multiple camps and school-break weeks. The first screen should be a usable family coverage grid with week-by-week coverage, registration launch radar, camp comparison cards, refund cliff timeline, backup stack, budget burn meter, and parent message pack. Use realistic sample data: two kids with different ages, camp registration opening at a random Tuesday 9am, parks camp hours, specialty camp 9-3 gap, sibling mismatch, deposit deadlines, 50% refund window, waitlist position, PTO conflict, and expensive backup camp. Design direction: use the calm-consumer profile with warm neutral surfaces, low-stress grouping, gentle but obvious deadline accents, and a reassuring step-flow that makes a chaotic parent project feel manageable. Do not make a marketing landing page; the first screen must be the working app.

### p004 - Fun / Experimental

### Title
Room Block Liability Casino

### One-liner
A playful wedding room-block simulator that turns attrition clauses, guest excuses, and hotel deadlines into an escape plan before the couple eats the bill.

### Target user
Engaged couples, wedding planners, destination-wedding hosts, and hotel sales coordinators negotiating courtesy vs attrition room blocks.

### Key UX
A casino-like liability simulator where couples load a room-block contract, guest travel likelihood, RSVP drift, peak-season scarcity, shuttle incentives, and rescue tactics, then watch the liability meter change as guests book or bail.

### Required UI sections
- Attrition table with room nights, required pickup, cutoff date, penalty rate, and current booked count
- Guest roulette board showing likely bookers, maybes, family blockers, budget excuses, and already-booked-offsite guests
- Rescue marketplace panel for anonymous local group posts, block-sharing, shuttle incentive, and reminder campaigns
- Courtesy vs contract block comparison with perks, risk, room rate, and sellout anxiety
- Deadline countdown with cutoff, release date, RSVP date, and hotel renegotiation window
- Liability spin simulator showing best case, expected case, panic case, and who pays
- Shareable guest nudge cards and hotel email scripts

### Assigned design profile
playful-experimental

### Theme
외모 / 자산 방어 / 외로움 - destination-wedding status pressure, family optics, guest uncertainty, and fear of eating unused hotel rooms.

### Source signal references
S10, S11

### Stitch prompt
Build a playful experimental web app prototype called "Room Block Liability Casino" for engaged couples and planners stressed about hotel room-block attrition. The first screen should be an interactive casino-style liability simulator with an attrition table, guest roulette board, rescue marketplace panel, courtesy-vs-contract comparison, deadline countdown, liability spin simulator, and shareable guest nudge cards. Use realistic wedding sample data: 80-90% attrition clause, October destination wedding, 80 traveling guests, 10-room Marriott block, peak-season scarcity, guests booking elsewhere, shuttle incentive, cutoff date, and anonymous local-group rescue tactic. Design direction: use the playful-experimental profile with a memorable casino/night-before-deadline composition, bold contrast, witty risk chips, and a polished shareable first impression while preserving one clear escape workflow. Do not make a marketing landing page; the first screen must be the working app.

## Scaffolded slots

- p001: prototypes/2026-06-09-p001-workers-comp-audit-shock-binder
- p002: prototypes/2026-06-09-p002-condo-charger-approval-packet
- p003: prototypes/2026-06-09-p003-camp-coverage-panic-grid
- p004: prototypes/2026-06-09-p004-room-block-liability-casino

## Expected Stitch drop folder

```text
/home/sy/Downloads/stitch_drop/2026-06-09/
  p001/code.html + p001/screen.png
  p002/code.html + p002/screen.png
  p003/code.html + p003/screen.png
  p004/code.html + p004/screen.png
```
