# Prototype Factory Phase A - 2026-06-10

## Search signals / External signals

### S1 - Reddit r/smallbusiness, AI Overview sends users to the wrong local company, crawled Jun 10 2026
- Bucket: community / AI search behavior
- Problem signal: small operators are seeing Google AI answers misroute, misname, or omit their business; the pain is not abstract SEO, it is lost local demand and no obvious repair workflow.
- Source: https://www.reddit.com/r/smallbusiness/comments/1qhb739/most_small_business_websites_arent_showing_up_in/

### S2 - Business Insider, Semrush AI-search study on fragmented brand representation, Jun 4 2026
- Bucket: news/business/tech
- Problem signal: marketers report competitors being mentioned more often, inaccurate brand descriptions, and unclear positioning in AI search, especially when content is siloed across channels.
- Source: https://www.businessinsider.com/ai-search-strategies-hampered-by-corporate-silos-semrush-study-2026-5

### S3 - Guardian, UK CMA orders Google to give publishers AI-search controls, Jun 3 2026
- Bucket: policy / platform shift
- Problem signal: AI summaries are now important enough for regulators to require control, attribution, and reporting, reinforcing that traffic leakage and citation control are live market anxieties.
- Source: https://www.theguardian.com/business/2026/jun/03/what-does-uk-watchdog-new-google-ai-results-rule-means-publishers

### S4 - Daum/Kookmin Ilbo, Korean restaurant operators hit by blind delivery-app cancellations, Feb 20 2026
- Bucket: niche operator workflow / Korea
- Problem signal: a chicken-shop owner found a delivered order cancelled after a customer complaint, with the platform citing refund policy; operators lack a fast evidence packet before margin disappears.
- Source: https://v.daum.net/v/20260220091011967

### S5 - Seoul Shinmun, delivery-app review/refund abuse and unreasonable service demands, May 6 2026
- Bucket: news/business / Korea
- Problem signal: delivery-app star ratings and refund systems are being used as leverage for excessive demands; owners describe the structure as hard to fight without risking reputation.
- Source: https://m.seoul.co.kr/news/society/accident/2026/05/06/20260506500245

### S6 - DoorDash Merchant Support, order error adjustments and merchant disputes, crawled Jun 10 2026
- Bucket: niche operator workflow
- Problem signal: platforms already have formal error-adjustment/dispute concepts, but small operators still need a practical front-end to gather ticket, food, rider, and customer evidence quickly.
- Source: https://help.doordash.com/en-us/merchants/article/what-are-order-error-adjustments

### S7 - Reddit r/Teachers, teachers at their wits' end with AI cheating, May 2026
- Bucket: community / education workflow
- Problem signal: teachers are trading improvised tactics because AI detectors and school policy feel unreliable; lived pain centers on proof, parent pushback, and classroom-safe follow-up.
- Source: https://www.reddit.com/r/Teachers/comments/1sjlhbx/at_my_wits_end_with_ai_cheating_how_are_you_all/

### S8 - Reddit r/Teachers, teacher says they have given up policing AI cheating, Apr 2026
- Bucket: community / education workflow
- Problem signal: repeated cheating plus admin and parent pressure pushes teachers toward documentation fatigue rather than detection alone.
- Source: https://www.reddit.com/r/Teachers/comments/1s4ezj1/has_anyone_else_just_given_up_trying_to_police_ai/

### S9 - MarketWatch, Americans use BNPL for gas and groceries, Jun 2026
- Bucket: weird consumer behavior / finance
- Problem signal: BNPL usage is shifting into essentials like fuel and food, creating overlapping repayment schedules and anxiety hidden behind small weekly amounts.
- Source: https://www.marketwatch.com/story/americans-are-using-buy-now-pay-later-for-gas-and-groceries-showing-just-how-expensive-daily-necessities-are-now-25a041b3

### S10 - Reddit r/povertyfinance, users ask whether BNPL bill services are predatory, 2024 thread still surfacing in 2026 searches
- Bucket: community / consumer anxiety
- Problem signal: users ask "should I use this at all?" because bill-splitting tools can feel like relief now and a bigger hole later.
- Source: https://www.reddit.com/r/povertyfinance/comments/1flct3d/advice_on_sites_like_deferit_buy_now_pay_later/

## Novelty / Duplicate Check

- Checked against at least the last 7 PF daily batches: 2026-06-01, 2026-06-02, 2026-06-03, 2026-06-04, 2026-06-05, 2026-06-08, 2026-06-09.
- Rejected overlap areas: HOA/special assessments, TikTok returns, elder deepfake scams, package theft, freelancer AI pricing, tutor acquisition, tenant document fraud, commercial lease renewal, Medicaid verification, wedding dress codes, merchant surcharges, FAFSA delays, GLP-1 prior auth, publisher traffic dashboards, classroom phone bans, Airbnb cleaning fee disputes, customs/FOCI compliance, workers-comp audits, condo EV chargers, summer camp signup stress, and wedding room-block attrition.
- Today's accepted ideas use new user/trigger/data/interactions: AI-search citation repair for local operators; delivery-app refund evidence packets for restaurants; teacher-to-parent AI-cheating conference packets; and playful BNPL receipt stress mapping for everyday essentials.

## Final candidates

### p001 - Practical / Commercial

### Title
AI Search Citation Repair Bay

### One-liner
Local owners see where AI answers misname, omit, or under-cite them, then ship a prioritized citation repair packet.

### Target user
Independent local businesses, clinics, salons, accountants, and niche service firms that rely on search but do not have a dedicated SEO team.

### Key UX
A "query bay" compares sample AI-search answers against the owner's desired facts, flags missing citations or wrong competitors, then turns each gap into a repair card with source, page, review, FAQ, and directory actions.

### Required UI sections
- Brand fact card with canonical name, service area, categories, proof links, and banned claims.
- AI answer comparison lanes for Google AI Overview, ChatGPT, Perplexity, and local search snippets.
- Citation gap table with severity, wrong entity, missing source, and confidence.
- Repair queue grouped by website, GBP/Naver profile, directories, reviews, and third-party mentions.
- Copy-ready "citation patch" snippets for FAQ, service pages, and owner replies.
- Competitor mention map showing who is being named instead.
- Weekly watchlist and before/after evidence timeline.
- Exportable repair packet for an agency, assistant, or owner.

### Assigned design profile
operator-dense

### Theme
자산 방어

### Source signal references
S1, S2, S3

### Stitch prompt
Create a responsive web app prototype called "AI Search Citation Repair Bay" for independent local business owners who need to fix how AI search engines describe and cite them. Build the main screen as an operator console with a brand fact card, AI answer comparison lanes for Google AI Overview, ChatGPT, Perplexity, and local search, a citation gap table, a prioritized repair queue, competitor mention map, copy-ready citation patch snippets, weekly watchlist, and an exportable repair packet. Use realistic sample data for a local dental clinic that is being confused with a competitor in another neighborhood. Design direction: follow the operator-dense profile with disciplined B2B console styling, compact tables, crisp severity badges, charcoal/fog surfaces, and one sharp action accent for urgent citation fixes. Make the core interaction feel like triage: select a bad AI answer, inspect the missing/wrong source, assign a repair action, and see the packet update.

### p002 - Practical / Commercial

### Title
Delivery Refund Evidence Desk

### One-liner
Restaurant operators turn messy delivery-app refunds, photos, tickets, and review threats into a clean dispute packet before margin leaks.

### Target user
Small restaurant owners, shift managers, and franchise operators handling delivery-app refund claims, missing-item disputes, and review retaliation.

### Key UX
A shift manager opens a disputed order, drags in receipt/photo/POS/rider notes, sees a claim pattern score, and exports the exact platform-specific dispute packet with evidence and a calm customer-response script.

### Required UI sections
- Live disputed order queue with refund amount, platform, time since delivery, and claim type.
- Order evidence timeline combining POS ticket, prep photo, bag seal, rider handoff, and customer message.
- Review-threat and repeat-claim risk panel.
- Platform policy checklist for DoorDash, Uber Eats, Baemin, Coupang Eats, and manual channels.
- Evidence completeness meter with missing proof prompts.
- Dispute packet preview with attach list and concise operator statement.
- Reputation response script generator for owner-safe replies.
- Margin impact ledger showing weekly leakage by claim type.

### Assigned design profile
field-ops

### Theme
자산 방어

### Source signal references
S4, S5, S6

### Stitch prompt
Create a responsive web app prototype called "Delivery Refund Evidence Desk" for small restaurant operators fighting delivery-app refund abuse and review-pressure claims. Build a field-ops workflow with a disputed order queue, order evidence timeline, POS ticket and prep-photo cards, rider handoff notes, review-threat risk panel, platform policy checklist for DoorDash, Uber Eats, Baemin, and Coupang Eats, evidence completeness meter, dispute packet preview, owner-safe response script, and weekly margin leakage ledger. Use realistic Korean and US delivery examples, including a completed chicken order reversed after a complaint and a missing-item claim with incomplete bag-seal proof. Design direction: follow the field-ops profile with firm service-operations styling, slate/graphite surfaces, legible pressure-state panels, and a sparing orange action accent for urgent packet gaps. The main interaction should let the user select a disputed order, attach evidence, watch completeness rise, and export a platform-ready dispute packet.

### p003 - Practical / Commercial

### Title
AI Cheating Parent Conference Kit

### One-liner
Teachers build calm, defensible AI-cheating conference packets with evidence, student recall checks, and parent-safe scripts.

### Target user
Middle-school, high-school, and early college teachers who face AI-cheating suspicion but need to avoid false accusations and parent escalation.

### Key UX
The teacher creates a case file, marks observable evidence, chooses a student recall check, and receives a neutral conference packet that separates facts, assumptions, questions, and next steps.

### Required UI sections
- Case intake with assignment, rubric, suspicious passages, writing-history notes, and version-history screenshots.
- Evidence type sorter that labels each item as fact, pattern, assumption, or missing.
- Student recall check builder with oral summary, vocabulary explanation, process reflection, and in-class rewrite options.
- Parent conference script with calm wording and admin-copy mode.
- Consequence matrix by school policy severity and confidence level.
- False-positive caution panel and "do not overclaim" guardrails.
- Student restoration plan with redo, writing conference, and skill rebuilding actions.
- Exportable packet for parent meeting, admin note, and gradebook comment.

### Assigned design profile
calm-consumer

### Theme
사교육

### Source signal references
S7, S8

### Stitch prompt
Create a responsive web app prototype called "AI Cheating Parent Conference Kit" for teachers who need calm, defensible documentation when they suspect AI-assisted cheating. Build a guided case workspace with assignment intake, suspicious passage highlights, writing-history notes, evidence type sorter, student recall check builder, parent conference script, admin-copy mode, consequence matrix, false-positive caution panel, student restoration plan, and exportable meeting packet. Use realistic sample content from a high-school writing assignment where the teacher is unsure whether the evidence is strong enough. Design direction: follow the calm-consumer profile with reassuring guidance-friendly styling, soft neutral surfaces, low-stress step flow, and one gentle accent for the next best action. The main interaction should help the teacher separate facts from assumptions, choose a fair recall check, and generate a parent-safe packet without sounding accusatory.

### p004 - Fun / Experimental

### Title
Grocery BNPL Stress Thermometer

### One-liner
A playful receipt lab that turns stacked grocery and gas BNPL payments into a payday stress map before the tiny debts pile up.

### Target user
Young workers and budget-stretched households who use BNPL for essentials and need an emotionally clear view of future payment pressure.

### Key UX
Users drop in grocery, fuel, and takeout BNPL receipts; the app animates tiny payment blocks across upcoming paydays, shows a stress temperature, and suggests one swap, delay, or cash-buffer move.

### Required UI sections
- Receipt inbox for grocery, gas, pharmacy, and takeout BNPL purchases.
- Payday calendar with stacked repayment blocks and late-fee danger zones.
- Stress thermometer that changes as payments cluster.
- "Tiny debt pile" visual that groups small purchases into real weekly pressure.
- Essential vs nonessential toggle with shame-free labels.
- One-action relief cards: move a purchase, cancel a split, create a food buffer, or warn future self.
- Scenario slider for next paycheck amount and unexpected bill.
- Shareable "future me receipt" summary.

### Assigned design profile
playful-experimental

### Theme
자산 방어

### Source signal references
S9, S10

### Stitch prompt
Create a responsive web app prototype called "Grocery BNPL Stress Thermometer" for young consumers who split groceries, gas, and other essentials into buy-now-pay-later payments. Build a playful receipt lab with receipt inbox, payday calendar, stacked repayment blocks, late-fee danger zones, animated stress thermometer, tiny debt pile visual, essential/nonessential toggle, one-action relief cards, next-paycheck scenario slider, unexpected bill slider, and shareable "future me receipt" summary. Use realistic sample receipts for groceries, fuel, pharmacy, and delivery meals with overlapping repayment dates. Design direction: follow the playful-experimental profile with a memorable concept-forward visual, bold but readable accents, surprising motion cues, and a strong narrative hook around tiny debts becoming a heat map. The main interaction should make the user drag a new receipt onto the calendar, watch the stress temperature change, and pick one relief move.

## Scaffolded slots

- p001: prototypes/2026-06-10-p001-ai-search-citation-repair-bay
- p002: prototypes/2026-06-10-p002-delivery-refund-evidence-desk
- p003: prototypes/2026-06-10-p003-ai-cheating-parent-conference-kit
- p004: prototypes/2026-06-10-p004-grocery-bnpl-stress-thermometer

## Expected Stitch drop folder

```text
/home/sy/Downloads/stitch_drop/2026-06-10/
  p001/code.html + p001/screen.png
  p002/code.html + p002/screen.png
  p003/code.html + p003/screen.png
  p004/code.html + p004/screen.png
```
