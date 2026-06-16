# Prototype Factory Phase A - 2026-06-17

## Search signals / External signals

### S1 - GLP-1 overdose calls and telehealth-compounded dosing risk
- Bucket: news/health
- Source: New York Post, 2026-06-16
- URL: https://nypost.com/2026/06/16/health/life-threatening-glp-1s-overdoses-are-on-the-rise-whats-behind-it/
- Problem signal: Reports poison-center calls rising sharply as GLP-1 use expands; compounded formulations and unclear self-injection instructions create dose mistakes.

### S2 - Compounded GLP-1 dosing errors
- Bucket: medical safety/reference
- Source: JAMA Health Forum, 2025
- URL: https://jamanetwork.com/journals/jama-health-forum/fullarticle/2829222
- Problem signal: FDA-linked safety discussion cites patients drawing more than prescribed dose from multi-dose vials.

### S3 - SBA 8(a) proposed rule changes disadvantage presumption
- Bucket: policy/procurement
- Source: Federal Register, 2026-06-11
- URL: https://www.federalregister.gov/documents/2026/06/11/2026-11765/reforms-to-remove-sbas-8a-programs-rebuttable-presumption-of-social-disadvantage-for-individually
- Problem signal: Proposed change would remove a rebuttable presumption in 8(a), creating eligibility narrative and documentation anxiety for small contractors.

### S4 - 2026 laws can create legal risk for small businesses
- Bucket: business/compliance
- Source: Rocket Lawyer, 2026
- URL: https://www.rocketlawyer.com/the-briefing-room/how-new-2026-laws-can-create-legal-risk
- Problem signal: Small firms risk discovering too late that contracts, classification, pay, or service terms no longer match rules.

### S5 - Small retailers still fight spreadsheets, inaccurate counts, and seasonal swings
- Bucket: operator workflow
- Source: SimplyDepo, 2026
- URL: https://simplydepo.com/industry/best-inventory-system-for-small-business/
- Problem signal: Common inventory pain includes manual spreadsheets, inaccurate counts, seasonal demand swings, and limited storage.

### S6 - Small inventory tools are often enterprise-priced for shops with 50-5,000 items
- Bucket: operator workflow
- Source: InventoryQuick, 2026
- URL: https://inventoryquick.com/blog/best-inventory-software-small-business
- Problem signal: Small operators need practical reorder decisions without paying for enterprise warehouse systems.

### S7 - Teachers are not free tutors
- Bucket: community/forum
- Source: Reddit r/Teachers, 2026 search result
- URL: https://www.reddit.com/r/Teachers/comments/1rltux9/teachers_are_not_free_tutors/
- Problem signal: Teacher rant frames parent expectations for extra tutoring, grading, contact, and reports as unpaid spillover labor.

### S8 - Parents request trip schoolwork with no notice
- Bucket: community/forum
- Source: Reddit r/Teachers, 2026 search result
- URL: https://www.reddit.com/r/Teachers/comments/1r3o3if/no_i_am_not_giving_your_child_their_work_ahead_of/
- Problem signal: Teachers describe last-minute requests for packets as students leave for family trips, creating boundary and response pressure.

### S9 - Dating app users ask for current photos despite existing profile pictures
- Bucket: community/forum
- Source: Reddit r/DatingApps, 2026-06
- URL: https://www.reddit.com/r/DatingApps/comments/1u2gok5/why_do_guys_ask_for_pictures_if_i_already_have_a/
- Problem signal: Commenters cite outdated pictures and trust concerns; photo freshness becomes a social proof problem.

### S10 - 2026 consumers reward human authorship and co-creation over AI slop
- Bucket: consumer behavior/trend
- Source: Vogue, 2026-01-06
- URL: https://www.vogue.com/article/from-unseriousness-to-superfandom-consumer-trend-predictions-for-2026
- Problem signal: Trend framing highlights rejection of AI slop, authorship signals, co-creation, and quieter intimate spaces.

### S11 - Authenticating real creative work as AI slop spreads
- Bucket: creator/tech
- Source: Creative Bloq, 2026
- URL: https://www.creativebloq.com/art/digital-art/instagrams-boss-admits-ai-slop-has-won-but-where-does-that-leave-creatives
- Problem signal: Platform leaders point toward authenticating real content; creators are advised to show process and embrace raw proof.

### S12 - Tier 1 / Tier 2 wedding guest RSVP timing anxiety
- Bucket: community/forum
- Source: Reddit r/weddingplanning, 2026-06
- URL: https://www.reddit.com/r/weddingplanning/comments/1u3ciai/planning_rsvp_timeline_with_tier_1_tier_2_guest/
- Problem signal: Community advice recommends rolling invites after declines while preserving enough RSVP time and avoiding obvious overlap.

### S13 - Family caregiving grows and reform pressure rises
- Bucket: caregiving/workflow
- Source: Medicare Rights Center, 2025
- URL: https://www.medicarerights.org/medicare-watch/2025/08/14/as-family-caregiving-grows-so-does-the-need-for-reform
- Problem signal: Caregiving burden is increasing, with families coordinating care work, benefits, and time-sensitive support.

### S14 - Korean family caregivers experience career disruption
- Bucket: caregiving/research
- Source: MDPI, 2024
- URL: https://www.mdpi.com/2039-4403/14/3/119
- Problem signal: Study reports career disruptions among family caregivers of home-based care recipients, especially in gendered family roles.

## Novelty / duplicate check
- Checked against daily/2026-06-08 through daily/2026-06-16 ideas.md.
- Rejected direct repeats of recent wedding deposit/refund, elder-care cost splitter, delivery-fee defense, hagwon spend cutline, AI cheating proof, EV charger disputes, grocery price memory, and generic AI search/reputation dashboards.
- Kept today's overlapping domains only where the trigger or interaction is materially different: wedding rolling-invite timing instead of refund/room-block; caregiving shift collision instead of debt/cost splitting; teacher parent-boundary replies instead of AI cheating/phone bans.
- Final mix: 6 practical/commercial ideas and 2 fun/portfolio ideas. Community sweep includes S7, S8, S9, and S12.

## Final candidates

### p001 - Practical / Commercial

### Title
GLP-1 Dose Panic Card

### One-liner
A calm injection-dose checker that turns vial concentration, syringe units, and side effects into a same-day safety card.

### Target user
Telehealth GLP-1 users, clinic nurses, family members helping with injections, and compound-pharmacy patients who are unsure about units versus milligrams.

### Key UX
User enters medication source, vial concentration, prescribed dose, syringe markings, injection date, and symptoms; the app highlights mismatch risk, creates a clinician-call card, and shows when to stop and seek help.

### Required UI sections
- Dose panic header with risk state and next safest action
- Prescription vs vial concentration intake
- Syringe unit visualizer with mg/unit conversion and mismatch warnings
- Side-effect timeline for nausea, vomiting, dehydration, itching, vision changes, and severe symptoms
- Call-now card for clinician/pharmacy/poison center notes
- Medication source confidence checklist for brand, compounded, telehealth, and damaged package
- Family handoff summary for the person helping with the next injection

### Assigned design profile
calm-consumer

### Theme
건강 / 외모 - weight-loss pressure, body-image shame, medication safety, and fear of doing the injection wrong.

### Source signal references
S1, S2

### Practical vs fun label
Practical / Commercial

### Stitch prompt
Build a production-grade web app prototype called "GLP-1 Dose Panic Card" for GLP-1 users who are anxious about compounded vial concentration, syringe units, and side effects. The first screen must be a working safety card with a dose panic header, prescription-vs-vial intake, syringe unit visualizer, symptom timeline, call-now clinician card, source confidence checklist, and family handoff summary. Use realistic sample data: semaglutide compounded vial, 2.5 mg/mL concentration, 0.25 mg starter dose, insulin syringe markings, nausea after injection, dehydration concern, telehealth pharmacy label, and a confused caregiver. Design direction: use the calm-consumer profile with soft reassuring surfaces, warm neutral cards, gentle medical accent colors, and obvious next actions that reduce panic without hiding risk. Do not make a marketing landing page; the first screen must be the working app.

### p002 - Practical / Commercial

### Title
8a Eligibility Change Radar

### One-liner
A procurement eligibility workbench for small firms worried a 2026 SBA rule shift will break their certification story.

### Target user
Small federal contractors, 8(a) applicants, certification consultants, and founders who rely on disadvantaged-business status for pipeline access.

### Key UX
Founder maps current certification claims, owner narrative, contract pipeline, missing proof, and comment deadlines into a risk-ranked eligibility action board.

### Required UI sections
- Rule-change alert bar with comment deadline and impact tier
- Current certification profile and owner-control proof checklist
- Pipeline exposure table by contract, agency, NAICS, and bid date
- Narrative evidence mapper for disadvantage claims and supporting documents
- Gap queue for affidavits, financials, ownership, and mentor-protege issues
- Advisor handoff packet with questions for counsel or PTAC/SBDC
- Scenario toggle for proposed rule passes, changes, or stalls

### Assigned design profile
financial-analyst

### Theme
자산 방어 / 역전 - procurement access, certification risk, status preservation, and fear of losing a narrow contracting edge.

### Source signal references
S3, S4

### Practical vs fun label
Practical / Commercial

### Stitch prompt
Build a production-grade web app prototype called "8a Eligibility Change Radar" for small federal contractors tracking 2026 SBA 8(a) eligibility uncertainty. The first screen must be a working procurement risk workbench with a rule-change alert bar, current certification profile, pipeline exposure table, narrative evidence mapper, gap queue, advisor handoff packet, and scenario toggles. Use realistic sample data: disadvantaged-business certification, three open agency opportunities, owner narrative documents, missing tax records, mentor-protege note, Federal Register comment deadline, and counsel review status. Design direction: use the financial-analyst profile with institutional ink/off-white panels, confidence bands, precise regulatory timelines, and calm high-signal comparison tables. Do not make a marketing landing page; the first screen must be the working app.

### p003 - Practical / Commercial

### Title
Microshop Reorder Bet Slip

### One-liner
A reorder decision slip for tiny retailers stuck between spreadsheet counts, seasonal swings, and cash tied up in stock.

### Target user
Boutique owners, small wholesalers, pop-up sellers, and Korean/US micro-retail operators managing 50-5,000 SKUs without enterprise software.

### Key UX
Operator imports or types today’s counts, supplier lead time, cash limit, shelf space, and seasonal event; the app creates a buy/hold/clear slip with confidence and cash risk.

### Required UI sections
- Today’s reorder queue with buy, hold, and clear labels
- SKU count intake with spreadsheet error flags
- Seasonality and event calendar strip
- Cash tied-up meter and storage pressure indicator
- Supplier lead-time and minimum-order comparison
- Stockout shame list for items customers ask for repeatedly
- One-page purchase order slip with rationale

### Assigned design profile
operator-dense

### Theme
자산 방어 / 역전 - small-shop cash defense, avoiding stockout embarrassment, and making sharper buys than bigger competitors.

### Source signal references
S5, S6

### Practical vs fun label
Practical / Commercial

### Stitch prompt
Build a production-grade web app prototype called "Microshop Reorder Bet Slip" for tiny retailers making inventory decisions from messy spreadsheets. The first screen must be a working reorder console with a buy/hold/clear queue, SKU count intake, spreadsheet error flags, seasonal event strip, cash tied-up meter, supplier lead-time comparison, stockout shame list, and one-page purchase order slip. Use realistic sample data: 184 SKUs, summer festival demand, inaccurate spreadsheet count, limited storage shelf, supplier MOQ, 12-day lead time, and 1.8M won cash ceiling. Design direction: use the operator-dense profile with compact tables, disciplined navy/charcoal surfaces, one sharp action accent, and margin-aware hierarchy for fast daily decisions. Do not make a marketing landing page; the first screen must be the working app.

### p004 - Practical / Commercial

### Title
Teacher Boundary Reply Desk

### One-liner
A parent-message triage desk that helps teachers refuse unpaid tutoring and last-minute trip packets without sounding cold.

### Target user
K-12 teachers, department heads, and school office staff facing parent demands for extra tutoring, make-up packets, and grade justification.

### Key UX
Teacher pastes a parent request, chooses policy and tone, then receives a boundary-safe reply, documentation log, and escalation path.

### Required UI sections
- Incoming parent request inbox with urgency and emotional heat tags
- Policy picker for homework, travel, tutoring, grading, and absence rules
- Boundary reply composer with firm, warm, and admin-copy variants
- Documentation timeline for prior contacts and posted materials
- Workload impact meter showing unpaid prep time avoided
- Escalation handoff to counselor, department chair, or admin
- Reusable family FAQ snippets by recurring request type

### Assigned design profile
operator-dense

### Theme
외로움 / 역전 - teacher burnout, parent pressure, professional dignity, and reclaiming unpaid time.

### Source signal references
S7, S8

### Practical vs fun label
Practical / Commercial

### Stitch prompt
Build a production-grade web app prototype called "Teacher Boundary Reply Desk" for teachers handling parent requests for free tutoring and last-minute vacation schoolwork packets. The first screen must be a working parent-message triage desk with an incoming request inbox, policy picker, boundary reply composer, documentation timeline, workload impact meter, escalation handoff, and reusable family FAQ snippets. Use realistic sample data: parent asks for a week of work with two minutes notice, another demands personal tutoring after a low geometry grade, teacher has posted online materials, and admin wants all replies documented. Design direction: use the operator-dense profile with crisp compact queues, calm authority, high scanability, and one firm accent for escalation or send actions. Do not make a marketing landing page; the first screen must be the working app.

### p005 - Fun / Portfolio

### Title
Dating Photo Freshness Meter

### One-liner
A profile-photo audit that scores whether your dating app pictures look current, trustworthy, and not accidentally cringe.

### Target user
Dating app users who keep being asked for more pictures, profile coaches, and friends doing brutally honest photo reviews.

### Key UX
User drops six profile photos into slots; the app flags stale, filtered, flexing, unclear, duplicate, and trust-building shots, then builds a better order.

### Required UI sections
- Six-photo profile strip with freshness and trust badges
- Current-look proof checklist for today-photo, full-body, smile, hobby, social, and no-filter evidence
- Cringe risk meter for car flex, old travel bait, sunglasses overload, gym mirror, and group confusion
- Conversation impact preview showing what a match may ask next
- Before/after photo order builder
- Friend verdict card designed to screenshot and share
- Tiny prompt bank for asking for a fresh photo without sounding creepy

### Assigned design profile
playful-experimental

### Theme
성욕 / 외모 - dating trust, status signaling, embarrassment avoidance, and fear that old photos are costing matches.

### Source signal references
S9, S10

### Practical vs fun label
Fun / Portfolio

### Stitch prompt
Build a production-grade web app prototype called "Dating Photo Freshness Meter" for dating app users auditing whether their profile pictures look current and trustworthy. The first screen must be a working photo review tool with a six-photo profile strip, freshness and trust badges, current-look proof checklist, cringe risk meter, conversation impact preview, before/after order builder, friend verdict share card, and prompt bank for asking for a fresh photo politely. Use realistic sample data: old vacation photo, car photo, gym mirror shot, hobby candid, full-body outdoor photo, and a match asking "do you have a pic from today?" Design direction: use the playful-experimental profile with bold but readable contrast, witty status labels, energetic photo-card composition, and a shareable first impression. Do not make a marketing landing page; the first screen must be the working app.

### p006 - Practical / Commercial

### Title
Creator Human-Proof Ledger

### One-liner
A creator authenticity board that packages process proof, raw assets, and AI-use disclosure into a trustable sponsor link.

### Target user
Creators, photographers, illustrators, newsletter writers, and brand partnership managers who need to prove work is human-led without rejecting useful AI tools.

### Key UX
Creator attaches rough cuts, timestamps, source files, AI-use notes, and behind-the-scenes clips; the app produces a sponsor-facing authenticity ledger.

### Required UI sections
- Authenticity score header with human-led, AI-assisted, and unclear markers
- Process timeline for sketch, shoot, edit, caption, publish, and revision events
- Raw asset vault with EXIF, draft, screen recording, and source-file cards
- AI-use disclosure builder with plain-language sponsor copy
- Brand risk checklist for synthetic likeness, fake testimonial, and unlicensed style mimicry
- Public proof link preview for sponsors and fans
- Co-creation request panel where fans vote on next real-world artifact

### Assigned design profile
premium-editorial

### Theme
역전 / 외모 - creators defending trust, authorship, sponsor income, and visible human taste in an AI-saturated feed.

### Source signal references
S10, S11

### Practical vs fun label
Practical / Commercial

### Stitch prompt
Build a production-grade web app prototype called "Creator Human-Proof Ledger" for creators who need to prove human-led work as AI-generated content floods social feeds. The first screen must be a working authenticity board with an authenticity score header, process timeline, raw asset vault, AI-use disclosure builder, brand risk checklist, public proof link preview, and fan co-creation request panel. Use realistic sample data: behind-the-scenes phone clip, Lightroom raw file, sketch scan, AI caption assistant disclosure, sponsor review note, C2PA-style provenance hint, and fan poll result. Design direction: use the premium-editorial profile with refined charcoal/stone/brass styling, elegant typography, curated proof cards, and a quiet high-trust sponsor feel. Do not make a marketing landing page; the first screen must be the working app.

### p007 - Fun / Portfolio

### Title
B-List Invite Timing Simulator

### One-liner
A wedding RSVP timing toy that shows when a second-tier guest invite still feels graceful instead of obvious.

### Target user
Engaged couples, planners, and anxious families managing venue capacity, guest politics, and rolling invitations.

### Key UX
Couple enters tiered guest lists, RSVP deadline, decline rate, social overlap, and travel needs; the simulator shows whether each late invite still feels respectful.

### Required UI sections
- Guest-cap and RSVP countdown header
- Tier 1 and Tier 2 list board with relationship sensitivity tags
- Decline-rate slider and rolling invite calendar
- Gracefulness score for notice length, travel burden, and overlap risk
- Awkwardness heatmap showing who might compare invite timing
- Message preview for late but warm invitations
- Final send queue with hold, send, or do-not-risk labels

### Assigned design profile
calm-consumer

### Theme
외로움 / 자산 방어 - wedding status anxiety, relationship politics, budget caps, and fear of making guests feel second-class.

### Source signal references
S12

### Practical vs fun label
Fun / Portfolio

### Stitch prompt
Build a production-grade web app prototype called "B-List Invite Timing Simulator" for couples deciding when a second-tier wedding invitation still feels graceful. The first screen must be a working RSVP simulator with a guest-cap countdown, Tier 1 and Tier 2 list board, decline-rate slider, rolling invite calendar, gracefulness score, awkwardness heatmap, message preview, and final send queue. Use realistic sample data: 125-person venue cap, 94 confirmed, 18 pending, 22 Tier 2 guests, cousins who talk to each other, out-of-town travel burden, and a six-week RSVP deadline. Design direction: use the calm-consumer profile with soft reassuring surfaces, gentle relationship-risk colors, friendly step flows, and emotionally steady copy. Do not make a marketing landing page; the first screen must be the working app.

### p008 - Practical / Commercial

### Title
Caregiver Shift Collision Board

### One-liner
A family care operations board that exposes medication, appointment, and job-schedule collisions before someone burns out.

### Target user
Adult children caring for parents, Korean family caregivers, home-care coordinators, and siblings splitting appointments and medication tasks.

### Key UX
Family maps care tasks against work shifts, meds, transport, and fatigue; the app surfaces collisions, unfair burden, and a weekly handoff plan.

### Required UI sections
- Week-at-risk board with collision count and next missed-care threat
- Medication, meal, appointment, and transport timeline
- Family shift grid with job hours, commute, and availability windows
- Burden imbalance meter by sibling, spouse, and paid aide
- Career-risk flags for missed work, unpaid leave, and last-minute swaps
- Care handoff checklist for pharmacy, clinic, documents, and emergency contacts
- Printable fridge plan and Kakao-style family update summary

### Assigned design profile
field-ops

### Theme
건강 / 외로움 / 자산 방어 - elder care burden, family resentment, career disruption, and preventing one caregiver from collapsing.

### Source signal references
S13, S14

### Practical vs fun label
Practical / Commercial

### Stitch prompt
Build a production-grade web app prototype called "Caregiver Shift Collision Board" for families coordinating elder care around jobs and appointments. The first screen must be a working care operations board with a week-at-risk header, medication and appointment timeline, family shift grid, burden imbalance meter, career-risk flags, care handoff checklist, printable fridge plan, and Kakao-style family update summary. Use realistic sample data: mother with morning meds, father clinic visit, daughter-in-law work shift, son commute, pharmacy refill, paid aide gap, and sibling resentment over weekend coverage. Design direction: use the field-ops profile with trustworthy slate/steel surfaces, clear operational timelines, legible pressure states, and a sparing action accent for urgent collisions. Do not make a marketing landing page; the first screen must be the working app.

## Scaffolded slots
- p001: GLP-1 Dose Panic Card -> prototypes/2026-06-17-p001-glp1-dose-panic-card
- p002: 8a Eligibility Change Radar -> prototypes/2026-06-17-p002-8a-eligibility-change-radar
- p003: Microshop Reorder Bet Slip -> prototypes/2026-06-17-p003-microshop-reorder-bet-slip
- p004: Teacher Boundary Reply Desk -> prototypes/2026-06-17-p004-teacher-boundary-reply-desk
- p005: Dating Photo Freshness Meter -> prototypes/2026-06-17-p005-dating-photo-freshness-meter
- p006: Creator Human-Proof Ledger -> prototypes/2026-06-17-p006-creator-human-proof-ledger
- p007: B-List Invite Timing Simulator -> prototypes/2026-06-17-p007-b-list-invite-timing-simulator
- p008: Caregiver Shift Collision Board -> prototypes/2026-06-17-p008-caregiver-shift-collision-board

## Expected Stitch drop folder
/home/sy/Downloads/stitch_drop/2026-06-17/

Required export layout:

```
/home/sy/Downloads/stitch_drop/2026-06-17/p001/code.html + /home/sy/Downloads/stitch_drop/2026-06-17/p001/screen.png
/home/sy/Downloads/stitch_drop/2026-06-17/p002/code.html + /home/sy/Downloads/stitch_drop/2026-06-17/p002/screen.png
/home/sy/Downloads/stitch_drop/2026-06-17/p003/code.html + /home/sy/Downloads/stitch_drop/2026-06-17/p003/screen.png
/home/sy/Downloads/stitch_drop/2026-06-17/p004/code.html + /home/sy/Downloads/stitch_drop/2026-06-17/p004/screen.png
/home/sy/Downloads/stitch_drop/2026-06-17/p005/code.html + /home/sy/Downloads/stitch_drop/2026-06-17/p005/screen.png
/home/sy/Downloads/stitch_drop/2026-06-17/p006/code.html + /home/sy/Downloads/stitch_drop/2026-06-17/p006/screen.png
/home/sy/Downloads/stitch_drop/2026-06-17/p007/code.html + /home/sy/Downloads/stitch_drop/2026-06-17/p007/screen.png
/home/sy/Downloads/stitch_drop/2026-06-17/p008/code.html + /home/sy/Downloads/stitch_drop/2026-06-17/p008/screen.png
```
