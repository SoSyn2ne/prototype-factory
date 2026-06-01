# Prototype Factory Ideas - 2026-06-01 Reboard

This second-pass board uses the morning S1-S10 search signals already captured in
`daily/2026-06-01/ideas.md`, then applies the new desire-led board gates from
`docs/IDEA_BOARD.md`. The goal is to test whether the same evidence produces
sharper, less generic prototypes.

## Signal Inbox

- S1-S3: HOA/special-assessment and condo insurance shock signals.
- S4-S6: overdue invoice and late-fee collection signals.
- S7-S8: substitute-teacher and school coverage disruption signals.
- S9-S10: espresso upgrade spiral and hobby-gear regret signals.

## Desire Ledger

### D1 - Closing day hidden bill shame
- Signals: S1, S2, S3
- Human driver/theme: 자산 방어
- Loss at stake: thousands of dollars in HOA assessments, insurance deductible exposure, and buyer regret.
- Shame audience: spouse, realtor, lender, future self.
- Trigger moment: offer accepted, HOA documents arrive, insurance rider is unclear.
- Existing workaround: asking Reddit, skimming budgets, trusting realtor summaries, calling insurance too late.
- Buyer/share audience: condo buyer, owner, buyer agent, insurance broker.
- Why existing tools fail: due diligence tools are too polite and do not turn vague HOA language into a visceral bill.
- 3-second sting: "This condo may hand you a $18,400 bill after closing."

### D2 - Owner stops being the soft target
- Signals: S4, S5, S6
- Human driver/theme: 역전
- Loss at stake: overdue cash, payroll stress, owner dignity, future client boundaries.
- Shame audience: employees, spouse, bookkeeper, the client who keeps ignoring reminders.
- Trigger moment: invoice hits 30-45 days late and the owner still sounds apologetic.
- Existing workaround: rewriting emails, waiving late fees, checking contracts manually, chasing in chat.
- Buyer/share audience: freelancer, agency owner, contractor, bookkeeper.
- Why existing tools fail: AR software tracks aging but does not coach relationship-safe pressure.
- 3-second sting: "You have acted like a bank for this client for 47 days."

### D3 - My child lost instruction time
- Signals: S7, S8
- Human driver/theme: 사교육
- Loss at stake: learning time, exam readiness, parent trust, school accountability.
- Shame audience: other parents, school office, spouse, the child's future self.
- Trigger moment: substitute confusion, missing lesson plan, room mismatch, repeated coverage disruption.
- Existing workaround: parent texts, screenshots, calendar notes, vague complaints at pickup.
- Buyer/share audience: parents, school admin, parent association.
- Why existing tools fail: school ops tools serve admins; parents need a clear receipt of disruption and recovery asks.
- 3-second sting: "Your child lost 214 minutes of real instruction this month."

### D4 - Gear desire on trial
- Signals: S9, S10
- Human driver/theme: 외로움
- Loss at stake: household money, partner trust, hobby identity, community status.
- Shame audience: partner, espresso forum, future self, the unused machine on the counter.
- Trigger moment: a $10 fix becomes a $2K-$5K upgrade thread.
- Existing workaround: asking hobby forums, hiding carts, comparing resale prices, rationalizing "endgame" gear.
- Buyer/share audience: hobbyist, partner, gear community.
- Why existing tools fail: calculators compare specs but do not put desire, regret, and social validation in the same room.
- 3-second sting: "This is not a grinder upgrade. It is a $4,820 identity defense."

## Mechanic Matrix

| Mechanic | Candidate use | Why it fits | Bland-risk check |
| --- | --- | --- | --- |
| Receipt | Condo Bomb Receipt, Class Disruption Receipt | Hidden loss becomes a visceral bill | Must feel like a bill/verdict, not a table |
| Negotiation Room | Client Ghost Pressure Room | Money conflict plus relationship risk | Pressure ladder must be central |
| Tradeoff Court | Hobby Purchase Defense Court | Desire must defend itself against budget and partner objections | Must be a trial, not a comparison grid |

## Candidate Drafts

### C1 - Condo Bomb Receipt
- Theme: 자산 방어
- Mechanic: Receipt + Interrogator
- Trigger moment: HOA package arrives before closing.
- Target user: condo buyers and owners.
- Buyer/share audience: buyer, spouse, realtor, broker.
- 3-second sting: "This condo may hand you a $18,400 bill after closing."
- Key input/data: HOA budget, reserve notes, meeting minutes, master policy, HO-6 rider.
- Output artifact: closing regret receipt and broker question sheet.
- Inspired by signals: S1, S2, S3
- Scores: Pain 5 / Shame 4 / Urgency 5 / Workaround 4 / Share 4 / Visual 5 / WTP 5
- Keep/kill/rewrite: keep
- Notes: Stronger than the original scanner because the output is a bill, not a dashboard.

### C2 - Client Ghost Pressure Room
- Theme: 역전
- Mechanic: Negotiation Room + Proof Kit
- Trigger moment: unpaid invoice crosses the awkward threshold.
- Target user: small service-business owners.
- Buyer/share audience: owner, bookkeeper, lawyer/collections handoff.
- 3-second sting: "You have acted like a bank for this client for 47 days."
- Key input/data: invoice, terms, reminder history, client tier, service dependency.
- Output artifact: pressure script, service pause notice, evidence packet.
- Inspired by signals: S4, S5, S6
- Scores: Pain 5 / Shame 4 / Urgency 4 / Workaround 5 / Share 3 / Visual 4 / WTP 5
- Keep/kill/rewrite: keep
- Notes: Keep the relationship-risk dial visible so it does not become a generic AR board.

### C3 - Class Disruption Receipt
- Theme: 사교육
- Mechanic: Receipt + Proof Kit
- Trigger moment: repeated sub days or missing lesson plans hit one child's month.
- Target user: anxious parents and parent associations.
- Buyer/share audience: parent, spouse, school office, PTA.
- 3-second sting: "Your child lost 214 minutes of real instruction this month."
- Key input/data: absence notices, classroom updates, substitute notes, homework gaps, test dates.
- Output artifact: parent-ready disruption receipt and recovery request.
- Inspired by signals: S7, S8
- Scores: Pain 4 / Shame 4 / Urgency 4 / Workaround 4 / Share 5 / Visual 5 / WTP 3
- Keep/kill/rewrite: keep
- Notes: Reframes school ops from admin scheduling into parent anxiety and evidence.

### C4 - Hobby Purchase Defense Court
- Theme: 외로움
- Mechanic: Tradeoff Court + Flex/Defense Poster
- Trigger moment: a cheap repair turns into a premium upgrade cart.
- Target user: home espresso and gear-hobby buyers.
- Buyer/share audience: hobbyist, partner, gear community.
- 3-second sting: "This is not a grinder upgrade. It is a $4,820 identity defense."
- Key input/data: starting problem, current gear, planned cart, drinks/week, household constraints, resale logic.
- Output artifact: buy/repair/wait verdict and partner-safe defense poster.
- Inspired by signals: S9, S10
- Scores: Pain 3 / Shame 5 / Urgency 3 / Workaround 5 / Share 5 / Visual 5 / WTP 3
- Keep/kill/rewrite: keep as the fun/portfolio slot
- Notes: The court mechanic should make it feel playful and shareable.

### C5 - HOA Board Interrogator
- Kill tag: stitch-bland-risk
- Reason: too close to a document scanner unless the receipt mechanic leads.
- Salvage path, if any: merge into C1 as the interrogation step.

### C6 - Late Fee Ledger
- Kill tag: just-dashboard
- Reason: likely to become another AR table.
- Salvage path, if any: merge into C2 as the evidence ledger.

### C7 - Sub Coverage Fire Drill Board
- Kill tag: theme-wash
- Reason: admin workflow does not make parent education anxiety visible.
- Salvage path, if any: reframe as C3 parent receipt.

### C8 - Espresso Upgrade Ladder
- Kill tag: no-output-artifact
- Reason: fun but too much like a shopping comparison.
- Salvage path, if any: put the purchase on trial and generate a defense poster.

## Kill List

- K1: HOA Board Interrogator - `stitch-bland-risk` - too scanner-like without a visceral output.
- K2: Late Fee Ledger - `just-dashboard` - AR aging alone is not a prototype mechanic.
- K3: Sub Coverage Fire Drill Board - `theme-wash` - solves admin ops, not parent anxiety.
- K4: Espresso Upgrade Ladder - `no-output-artifact` - needs a shareable verdict/poster.

## Novelty / Duplicate Check

- Checked recent batches: 2026-05-21, 2026-05-22, 2026-05-25, 2026-05-26, 2026-05-27, 2026-05-28, 2026-05-29, and the first 2026-06-01 batch.
- Rejected near-duplicates: generic HOA scanner, generic AR board, school admin coverage board, and espresso upgrade arcade.
- Kept only because: each second-pass concept changes the interaction mechanic and output artifact.
- Shape diversity check:
  - Dashboard/board/scanner/planner count: 0 primary mechanics.
  - Non-dashboard mechanic count: 4.
  - Consumer desire/anxiety count: 3.
  - B2B/ops count: 1.
  - Shareable/actionable artifact count: 4.

## Final 4

### p005 - Practical / Commercial

### Title
Condo Bomb Receipt

### One-liner
A closing-day regret receipt that turns HOA documents into the hidden bill a buyer may inherit.

### Theme
자산 방어

### Mechanic
Receipt + Interrogator

### Trigger Moment
HOA package arrives before closing and the buyer must decide whether to proceed, renegotiate, add coverage, or walk away.

### Target User
Condo buyers, townhouse owners, buyer agents, and insurance brokers.

### Buyer / Share Audience
Buyer, spouse, realtor, insurance broker.

### 3-Second Sting
This condo may hand you a $18,400 bill after closing.

### Key UX
Paste HOA docs and coverage notes; the app interrogates the language, highlights hidden assessment/deductible exposure, prints a closing regret receipt, and creates a broker/realtor question sheet.

### Output Artifact
Closing regret receipt and broker question sheet.

### Required UI Sections
- Closing bomb amount hero.
- HOA document interrogation tray.
- Hidden bill receipt with line items.
- Loss-assessment rider gap check.
- Red-flag quote wall.
- Renegotiate / quote rider / walk away decision lane.
- Shareable spouse/realtor question sheet.

### Scores
- Pain: 5
- Shame: 4
- Urgency: 5
- Workaround: 4
- Share: 4
- Visual: 5
- WTP: 5

### Inspired By Signals
S1, S2, S3

### Why This Survived
The same HOA problem becomes a visceral bill and decision artifact rather than a calm scanner.

### Design Profile
financial-analyst

### Stitch Prompt
Create a responsive web app called "Condo Bomb Receipt" for condo buyers, townhouse owners, buyer agents, and insurance brokers. The app should use a Receipt + Interrogator mechanic around the trigger moment "HOA package arrives before closing" and make the first screen communicate "This condo may hand you a $18,400 bill after closing." Build the core workflow around pasted HOA budgets, reserve notes, meeting minutes, master-policy details, and HO-6 rider notes, then produce a closing regret receipt and broker question sheet. Required sections: closing bomb amount hero, HOA document interrogation tray, hidden bill receipt with line items, loss-assessment rider gap check, red-flag quote wall, renegotiate / quote rider / walk away decision lane, and shareable spouse/realtor question sheet. Emotional pressure to make visible: asset-defense panic, spouse-facing regret, closing deadline urgency, and fear of inheriting a hidden bill. Design direction: use the `financial-analyst` profile with institutional off-white, graphite, muted navy, severe receipt-style totals, document excerpt callouts, and restrained red warning ink. Avoid generic dashboard framing; make the main interaction feel like opening a high-stakes bill before closing.

### p006 - Practical / Commercial

### Title
Client Ghost Pressure Room

### One-liner
A negotiation room that tells small owners exactly when to nudge, pause work, or escalate unpaid invoices.

### Theme
역전

### Mechanic
Negotiation Room + Proof Kit

### Trigger Moment
An invoice crosses 30-45 days late and the owner is still writing apologetic reminders.

### Target User
Freelancers, agencies, contractors, and small service-business owners.

### Buyer / Share Audience
Owner, bookkeeper, lawyer/collections handoff.

### 3-Second Sting
You have acted like a bank for this client for 47 days.

### Key UX
Import an overdue invoice, terms, and reminder history; choose a relationship stance; then tune pressure level, service-pause risk, late-fee enforceability, and evidence completeness.

### Output Artifact
Pressure script, service pause notice, and evidence packet.

### Required UI Sections
- Ghosted cash hero.
- Client relationship risk dial.
- Pressure ladder from friendly nudge to service pause.
- Late-fee enforceability meter.
- Evidence packet builder.
- "Stop being the bank" cash impact strip.
- Copy-ready message composer and handoff packet.

### Scores
- Pain: 5
- Shame: 4
- Urgency: 4
- Workaround: 5
- Share: 3
- Visual: 4
- WTP: 5

### Inspired By Signals
S4, S5, S6

### Why This Survived
It turns receivables into a relationship-pressure decision, not another invoice aging table.

### Design Profile
operator-dense

### Stitch Prompt
Create a responsive web app called "Client Ghost Pressure Room" for freelancers, agencies, contractors, and small service-business owners. The app should use a Negotiation Room + Proof Kit mechanic around the trigger moment "an invoice crosses 30-45 days late and the owner is still writing apologetic reminders" and make the first screen communicate "You have acted like a bank for this client for 47 days." Build the core workflow around imported invoices, payment terms, reminder history, client tier, and service dependency, then produce a pressure script, service pause notice, and evidence packet. Required sections: ghosted cash hero, client relationship risk dial, pressure ladder from friendly nudge to service pause, late-fee enforceability meter, evidence packet builder, "stop being the bank" cash impact strip, and copy-ready message composer with handoff packet. Emotional pressure to make visible: owner dignity, cash survival, awkward client conflict, and the reversal from soft target to controlled negotiator. Design direction: use the `operator-dense` profile with compact but sharp controls, charcoal work surfaces, assertive amber/red pressure states, legal-paper evidence cards, and practical copy buttons. Avoid generic dashboard framing; make the main interaction feel like tuning pressure inside a negotiation room.

### p007 - Practical / Consumer Anxiety

### Title
Class Disruption Receipt

### One-liner
A parent-facing evidence receipt showing how substitute chaos turns into learning risk for one child.

### Theme
사교육

### Mechanic
Receipt + Proof Kit

### Trigger Moment
Repeated substitute days, missing lesson plans, or room confusion start clustering before tests or report cards.

### Target User
Parents, parent associations, school advocates, and school admins who want a parent-readable recovery view.

### Buyer / Share Audience
Parent, spouse, school office, PTA.

### 3-Second Sting
Your child lost 214 minutes of real instruction this month.

### Key UX
Log absence notices, classroom updates, and homework/test gaps; convert them into an instruction-loss receipt, risk timeline, recovery ask, and school-safe message.

### Output Artifact
Parent-ready disruption receipt and recovery request.

### Required UI Sections
- Instruction minutes lost hero.
- Evidence intake for notices, texts, and plan gaps.
- Disruption receipt by subject and date.
- Test/readiness risk timeline.
- Parent concern script with calm tone controls.
- Recovery ask builder.
- Shareable school-safe PDF preview.

### Scores
- Pain: 4
- Shame: 4
- Urgency: 4
- Workaround: 4
- Share: 5
- Visual: 5
- WTP: 3

### Inspired By Signals
S7, S8

### Why This Survived
It changes the school signal from admin scheduling into a parent anxiety artifact with a clear output.

### Design Profile
calm-consumer

### Stitch Prompt
Create a responsive web app called "Class Disruption Receipt" for parents, parent associations, school advocates, and school admins who need a parent-readable recovery view. The app should use a Receipt + Proof Kit mechanic around the trigger moment "repeated substitute days, missing lesson plans, or room confusion start clustering before tests or report cards" and make the first screen communicate "Your child lost 214 minutes of real instruction this month." Build the core workflow around absence notices, classroom updates, parent texts, homework gaps, and test dates, then produce a parent-ready disruption receipt and recovery request. Required sections: instruction minutes lost hero, evidence intake for notices/texts/plan gaps, disruption receipt by subject and date, test/readiness risk timeline, parent concern script with calm tone controls, recovery ask builder, and shareable school-safe PDF preview. Emotional pressure to make visible: education anxiety, parent guilt, fear of falling behind, and the need to advocate without sounding unreasonable. Design direction: use the `calm-consumer` profile with warm neutrals, legible family-facing typography, calm blue/green trust states, restrained red only for lost time, and print-ready evidence cards. Avoid generic dashboard framing; make the main interaction feel like producing a parent-safe receipt of lost instruction.

### p008 - Fun / Experimental

### Title
Hobby Purchase Defense Court

### One-liner
A playful trial where expensive gear upgrades must defend joy, resale value, and household peace.

### Theme
외로움

### Mechanic
Tradeoff Court + Flex/Defense Poster

### Trigger Moment
A cheap repair or minor annoyance becomes a premium upgrade cart after reading community advice.

### Target User
Home espresso hobbyists, gear buyers, and partners trying to keep a hobby budget honest.

### Buyer / Share Audience
Hobbyist, partner, gear community.

### 3-Second Sting
This is not a grinder upgrade. It is a $4,820 identity defense.

### Key UX
Put the purchase on trial with evidence from actual use, household constraints, community advice, resale value, and regret risk; produce a buy/repair/wait verdict and partner-safe defense poster.

### Output Artifact
Buy/repair/wait verdict and partner-safe defense poster.

### Required UI Sections
- Purchase on trial hero.
- Evidence cards for current gear, cart, drinks/week, counter space, and repair cost.
- Prosecution: regret and household objections.
- Defense: joy, resale, skill growth, community belonging.
- Jury sliders for partner peace, flex value, and actual use.
- Verdict stamp: buy, repair, wait, or downgrade.
- Shareable defense poster.

### Scores
- Pain: 3
- Shame: 5
- Urgency: 3
- Workaround: 5
- Share: 5
- Visual: 5
- WTP: 3

### Inspired By Signals
S9, S10

### Why This Survived
It keeps the funny hobby signal but gives it a stronger mechanic, conflict, and shareable artifact.

### Design Profile
playful-experimental

### Stitch Prompt
Create a responsive web app called "Hobby Purchase Defense Court" for home espresso hobbyists, gear buyers, and partners trying to keep a hobby budget honest. The app should use a Tradeoff Court + Flex/Defense Poster mechanic around the trigger moment "a cheap repair or minor annoyance becomes a premium upgrade cart after reading community advice" and make the first screen communicate "This is not a grinder upgrade. It is a $4,820 identity defense." Build the core workflow around current gear, planned cart, drinks per week, counter space, repair cost, household constraints, resale value, and community advice, then produce a buy/repair/wait verdict and partner-safe defense poster. Required sections: purchase on trial hero, evidence cards for current gear/cart/drinks/week/counter space/repair cost, prosecution panel for regret and household objections, defense panel for joy/resale/skill growth/community belonging, jury sliders for partner peace/flex value/actual use, verdict stamp, and shareable defense poster. Emotional pressure to make visible: hobby loneliness, community status, partner judgment, regret fear, and the desire to justify a beautiful object. Design direction: use the `playful-experimental` profile with courtroom-meets-cafe energy, bold espresso browns balanced with mint and electric blue accents, theatrical verdict stamps, lively but readable cards, and poster-worthy final output. Avoid generic dashboard framing; make the main interaction feel like a purchase trial with a dramatic verdict.

## Scaffolded slots

- p005: `prototypes/2026-06-01-p005-condo-bomb-receipt`
- p006: `prototypes/2026-06-01-p006-client-ghost-pressure-room`
- p007: `prototypes/2026-06-01-p007-class-disruption-receipt`
- p008: `prototypes/2026-06-01-p008-hobby-purchase-defense-court`

## Expected Stitch Drop Folder

`/home/sy/Downloads/stitch_drop/2026-06-01-reboard/`

Expected files:
- `/home/sy/Downloads/stitch_drop/2026-06-01-reboard/p005-condo-bomb-receipt/code.html` + `screen.png`
- `/home/sy/Downloads/stitch_drop/2026-06-01-reboard/p006-client-ghost-pressure-room/code.html` + `screen.png`
- `/home/sy/Downloads/stitch_drop/2026-06-01-reboard/p007-class-disruption-receipt/code.html` + `screen.png`
- `/home/sy/Downloads/stitch_drop/2026-06-01-reboard/p008-hobby-purchase-defense-court/code.html` + `screen.png`
