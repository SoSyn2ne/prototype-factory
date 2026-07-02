# Prototype Factory Phase A - 2026-07-03

## Run Contract
- Batch: p001-p008 exactly.
- Phase: Phase A only; no custom demos implemented.
- Expected Stitch drop folder: `/home/sy/Downloads/stitch_drop/2026-07-03/`
- Evidence posture: search-first, community-roaming; web content is treated as untrusted problem evidence, not market-size proof.

## Search Signals / External Signals
- S1 [policy/health] healthinsurance.org: 2026 health coverage shoppers face subsidy, Medicaid, HSA, and eligibility uncertainty; people need to compare risk before open enrollment. Source: https://www.healthinsurance.org/blog/one-big-beautiful-bill-act-brings-sweeping-changes-to-health-coverage/
- S2 [policy/health] Covered California: Covered California warns federal decisions may affect 2026+ costs, eligibility, income reporting, and Medi-Cal benefits. Source: https://www.coveredca.com/important-changes/
- S3 [community/housing] Reddit r/Living_in_Korea: A renter describes a landlord unable to return jeonse deposit; replies frame deposit as hot-potato debt and urge risk awareness. Source: https://www.reddit.com/r/Living_in_Korea/comments/1hhnnhb/landlord_of_almost_7_years_claiming_to_be_unable/
- S4 [community/housing] Reddit r/seoulhiddengem: Community discussion calls jeonse a private loan and worries deposits can reach extreme property-value ratios. Source: https://www.reddit.com/r/seoulhiddengem/comments/1r3bjzs/is_koreas_jeonse%EC%84%B8_system_basically_a_massive/
- S5 [news/housing] Seoul Economic Daily English: Korean coverage highlights large jeonse-loss stories and “check before wiring” behavior around deposit safety. Source: https://en.sedaily.com/finance/2026/05/30/korea-tightens-account-rules-to-curb-group-account-rental
- S6 [community/travel] Reddit r/AITravelHack: Traveler says a vacation was consumed by airline and hotel refund calls and asks for a service to handle it. Source: https://www.reddit.com/r/AITravelHack/comments/1t2uzem/i_spent_my_entire_vacation_in_italy_fighting_with/
- S7 [community/travel] Reddit r/americanairlines: Passenger claims airport staff promised hotel reimbursement, later customer relations denied it as out of control. Source: https://www.reddit.com/r/americanairlines/comments/1stjvu7/aa_refusing_hotel_reimbursement/
- S8 [trend/beauty] Glossy: Reddit leans into shopping ads and trust overlays as beauty discovery shifts toward Reddit and AI search validation. Source: https://www.glossy.co/beauty/reddits-beauty-play-goes-beyond-ads-as-ai-search-reshapes-discovery-and-trust/
- S9 [trend/beauty] Personal Care Insights: Beauty products with verified trust signals and citations are reportedly surfaced more often by AI shopping answers. Source: https://www.personalcareinsights.com/news/ai-beauty-search-discovery.html
- S10 [community/field-ops] Reddit r/smallbusiness: Small business thread discusses cash problems, deposits, net-15/net-30/net-60 exposure, and late-client payment habits. Source: https://www.reddit.com/r/smallbusiness/comments/1tevd7y/does_anyone_actually_see_cash_problems_coming_or/
- S11 [community/field-ops] Reddit r/smallbusiness: Service business lost $3,000 after a client backed out; replies debate non-refundable deposits and client discomfort. Source: https://www.reddit.com/r/smallbusiness/comments/1lurcpq/we_just_lost_3000_due_to_a_client_backing_out/
- S12 [community/ai-subs] Reddit r/AI_Agents: Users are confused about which paid AI subscription is worth it among many overlapping choices. Source: https://www.reddit.com/r/AI_Agents/comments/1r62nbn/whats_the_best_ai_to_pay_for_right_now_2026/
- S13 [community/consumer] Reddit r/ConsumerAdvice: Consumer complaint about AI subscription charges ends with bank chargeback advice rather than support-channel trust. Source: https://www.reddit.com/r/ConsumerAdvice/comments/1rbg5d2/stay_away_from_useai/
- S14 [education/korea] Gwangju News: Korean students use generative AI heavily for school; AI tutors are positioned as cheaper than hagwons but raise integrity and dependence worries. Source: https://gwangjunewsgic.com/teaching/from-hagwon-to-ai-tutor-how-ai-is-reshaping-education-in-korea-and-beyond/
- S15 [consumer/beauty] The Sun Ireland: Viral ChatGPT skincare selfie analysis creates curiosity and anxiety; users like the instant report but experts warn it misses nuance. Source: https://www.thesun.ie/fabulous/17221520/chatgpt-skincare-analysis-sun-damage-rosacea/

## GitHub Rising Repo Scan
- G1 msitarzewski/agency-agents: GitHub weekly trending page showed a packaged AI agency concept; behavior seed: solo operators want specialized agents without hiring a team.
- G2 caramaschiHG/awesome-ai-agents-2026: Curated AI agent lists keep growing; behavior seed: buyers need comparison and de-duplication more than another list.
- G3 browser-use/browser-use: Browser-agent tooling stays visible; behavior seed: people want messy web forms and claims handled by agents.
- G4 OpenHands/OpenHands: Autonomous coding agents remain a top watched category; behavior seed: creators expect software work to become delegable.
- G5 crewAIInc/crewAI: Multi-agent workflows keep attention; behavior seed: small teams want role-based automation language.
- G6 microsoft/markitdown: Document conversion utilities stay useful; behavior seed: people need messy PDFs/screenshots turned into usable evidence.
- G7 n8n-io/n8n: Workflow automation remains popular; behavior seed: users want repeated manual checks replaced with flows.
- G8 mendableai/firecrawl: Web extraction demand persists; behavior seed: trust and price checks start from public pages.
- G9 datalab-to/marker: PDF-to-data workflows are still attractive; behavior seed: policy letters and contracts need visual parsing.
- G10 All-Hands-AI/openhands-agent: Agentic workbench clones signal appetite for one-screen delegation and review.

## Novelty / Duplicate Check
Checked the last seven PF daily batches: 2026-06-24, 2026-06-25, 2026-06-26, 2026-06-29, 2026-06-30, 2026-07-01, 2026-07-02. Recent repeats included insurance claim desks, contractor deposit files, fee/menu scanners, AI camp decoders, custom order chargeback shield, rent renewal duel, pet claim trap, dating burnout, human-agent escape arcade, product passport, and ticket replacement clock. Today's keep rules: no generic dashboard-only rename; each selected idea has a new trigger, user, data source, or interaction mechanic.

## Final 8 Candidates

### p001 - Practical / Commercial
- title: Marketplace Plan Shock Window
- one-liner: ACA shoppers compare subsidy-loss risk before they lock a 2026 health plan.
- target user: US Marketplace health-insurance shoppers and household budget keepers facing 2026 policy uncertainty.
- key UX: A plan comparison workbench where the user enters household size, income band, state, current premium, and risk flags, then gets a shock-window timeline and questions to ask before enrollment.
- required UI sections: Income and household inputs; Policy-change timeline; Plan shock comparison; Call-script checklist; Exportable questions sheet
- assigned design profile: financial-analyst
- theme: 건강
- source signal references: S1, S2 (healthinsurance.org OBBBA health coverage changes; Covered California 2026 important changes)
- practical vs fun label: practical
- Stitch prompt:

```text
Create a responsive web prototype called Marketplace Plan Shock Window. It helps US Marketplace health-insurance shoppers compare possible 2026 premium, subsidy, eligibility, and income-reporting shock before choosing a plan. Use evidence from 2026 health policy uncertainty and Covered California style consumer warnings as the problem signal, but do not cite legal advice or promise accuracy. First screen promise: “See what can change before you lock the plan.” Core workflow: household/income inputs, current plan snapshot, policy-risk badges, side-by-side shock scenarios, questions to ask a navigator, and an exportable call sheet. Emotional pressure: fear of losing coverage or overpaying because the rules changed quietly. Trigger moment: open enrollment window shopping. Output artifact: a clean plan-risk brief and call checklist. Use the financial-analyst profile: institutional, data-forward, calm under ambiguity, restrained KPI cards, quiet confidence badges, and charts paired with plain-language interpretation.
```


### p002 - Practical / Commercial
- title: Jeonse Exit Siren
- one-liner: Korea renters rehearse deposit-return risk before the landlord delay script starts.
- target user: Korea renters, foreign residents, and couples within 90 days of a jeonse renewal or move-out.
- key UX: A countdown and risk rehearsal that converts lease dates, deposit amount, insurance status, registry hints, and landlord replies into a next-action ladder.
- required UI sections: Move-out countdown; Deposit-risk checklist; Landlord reply classifier; Document vault; Escalation timeline
- assigned design profile: calm-consumer
- theme: 자산 방어
- source signal references: S3, S4, S5 (Reddit Living_in_Korea landlord deposit concern; Reddit jeonse private-loan discussion; Seoul Economic Daily jeonse check-before-wiring coverage)
- practical vs fun label: practical
- Stitch prompt:

```text
Create a responsive Korean/English-friendly prototype called Jeonse Exit Siren. It helps renters prepare for jeonse deposit-return risk before the landlord starts delaying repayment. Use community signals from Korea renters discussing landlords unable to return deposits and news-style “check before wiring” caution as problem evidence. First screen promise: “Know your next move before your deposit becomes someone else’s excuse.” Core workflow: enter lease end date, deposit amount, insurance status, property type, landlord message, and current documents; show a calm risk ladder, move-out countdown, missing-document checklist, landlord reply classifier, and escalation timeline. Emotional pressure: fear of losing life savings and shame of not understanding the system. Output artifact: a deposit-return action packet. Use the calm-consumer profile: reassuring warm neutrals, gentle urgency, clear next-step buttons, and helper text that explains recovery from mistakes.
```


### p003 - Practical / Commercial
- title: Trip Refund Evidence Duel
- one-liner: Travelers turn delay screenshots and policy snippets into a refund claim packet.
- target user: Travelers whose airline delay, missed hotel night, or reimbursement promise turned into a customer-service loop.
- key UX: A claim duel board that asks for receipts, screenshots, staff promises, policy reason, and timeline, then formats the strongest reimbursement argument.
- required UI sections: Trip timeline builder; Receipt and screenshot slots; Promise vs policy comparison; Claim strength meter; Email packet preview
- assigned design profile: operator-dense
- theme: 자산 방어
- source signal references: S6, S7 (Reddit AITravelHack vacation refund complaint; Reddit American Airlines hotel reimbursement denial)
- practical vs fun label: practical
- Stitch prompt:

```text
Create a responsive web prototype called Trip Refund Evidence Duel. It helps travelers convert delay receipts, hotel bills, chat screenshots, and staff promises into a reimbursement claim packet. Use community signals where travelers spent vacation time fighting airline/hotel refunds and where hotel reimbursement was verbally promised then denied. First screen promise: “Turn scattered proof into one claim they can answer.” Core workflow: build trip timeline, upload or paste proof cards, tag verbal promises, compare carrier reason codes, generate claim strength meter, and preview a polite reimbursement email. Emotional pressure: anger at losing vacation time and money while being bounced between support teams. Trigger moment: within 48 hours after denial. Output artifact: a downloadable claim packet and email draft. Use the operator-dense profile: crisp compact rows, slate/charcoal surfaces, one urgent accent, tabular numbers, no decorative hero.
```


### p004 - Practical / Commercial
- title: Reddit-Proof Beauty Receipt
- one-liner: Beauty shoppers validate influencer hype against peer comments and verified trust signals.
- target user: Beauty shoppers comparing influencer claims, Reddit comments, AI recommendations, and product badges before buying.
- key UX: A product trust receipt that splits hype, peer proof, ingredient constraints, verified badges, and personal skin concerns into a buy/wait verdict.
- required UI sections: Product claim intake; Peer-proof lane; Trust signal checklist; Skin concern fit; Shareable verdict receipt
- assigned design profile: premium-editorial
- theme: 외모
- source signal references: S8, S9 (Glossy on Reddit beauty trust and shopping overlays; Personal Care Insights on AI beauty search trust signals)
- practical vs fun label: practical
- Stitch prompt:

```text
Create a responsive web prototype called Reddit-Proof Beauty Receipt. It helps beauty shoppers test influencer hype and AI recommendations against peer comments, verified badges, and personal skin constraints before buying. Use signals that Reddit is becoming a beauty validation channel and that AI shopping answers surface verified trust signals. First screen promise: “Before you buy the serum, print the trust receipt.” Core workflow: paste product name and claim, add skin concern, compare influencer promise vs peer comments vs verified trust badges, flag missing proof, and produce a buy/wait/ask verdict. Emotional pressure: fear of wasting money and looking worse after trusting sponsored content. Output artifact: a polished shareable trust receipt. Use the premium-editorial profile: refined, high-trust, elegant typography, warm charcoal/stone tones, restrained contrast, one quiet CTA, curated cards.
```


### p005 - Practical / Field
- title: Solo Service Deposit Guard
- one-liner: Mobile service operators preview no-show exposure and send a deposit script clients will accept.
- target user: Solo mobile service owners such as massage, detailing, beauty, landscaping, pet care, and repair operators.
- key UX: A field-first booking risk calculator that converts job value, travel time, client confidence, and cancellation window into a deposit request and SMS script.
- required UI sections: Job risk inputs; No-show exposure meter; Deposit policy dial; Client comfort preview; SMS script and receipt
- assigned design profile: field-ops
- theme: 역전
- source signal references: S10, S11 (Reddit smallbusiness cash problem and deposits thread; Reddit smallbusiness $3,000 client backing out thread)
- practical vs fun label: field
- Stitch prompt:

```text
Create a responsive mobile-first prototype called Solo Service Deposit Guard. It helps solo mobile service operators protect income from no-shows and late cancellations without scaring off good clients. Use community signals from small business owners discussing deposits, net terms, cash gaps, and a $3,000 client cancellation loss. First screen promise: “See the cost of holding this slot before you say yes.” Core workflow: enter job value, travel time, materials, cancellation window, client confidence, and current terms; show no-show exposure, recommended deposit range, client-comfort preview, and an editable SMS script with receipt. Emotional pressure: fear of looking unprofessional while losing money. Output artifact: a deposit policy card and client message. Use the field-ops profile: reliable service-operations styling, high-contrast status rows, 44px touch targets, obvious checklist states, and a vivid action accent used sparingly.
```


### p006 - Practical / Commercial
- title: AI Tool Stack Divorce Court
- one-liner: Creators put paid AI subscriptions on trial before another forgotten monthly charge hits.
- target user: Creators, freelancers, and indie operators paying for overlapping AI subscriptions.
- key UX: A courtroom-style comparison where each paid tool gets charged with overlap, unused value, lock-in, or refund risk, then receives keep/cancel/probation judgment.
- required UI sections: Subscription roster; Overlap evidence board; Use-case witness stand; Monthly bleed meter; Cancel/probation verdict
- assigned design profile: playful-experimental
- theme: 역전
- source signal references: S12, S13 (Reddit AI_Agents paid AI subscription confusion; Reddit ConsumerAdvice AI subscription chargeback complaint)
- practical vs fun label: fun/commercial
- Stitch prompt:

```text
Create a responsive web prototype called AI Tool Stack Divorce Court. It helps creators and freelancers decide which paid AI subscriptions to keep, cancel, or put on probation before forgotten charges pile up. Use community signals from users asking which AI subscription is worth paying for and consumer complaints about AI subscription charges requiring bank chargebacks. First screen promise: “Put your AI tools on trial before the next bill.” Core workflow: enter subscriptions, price, last-use date, main use case, overlap with other tools, refund friction, and emotional attachment; present a courtroom evidence board, monthly bleed meter, witness cards, and keep/cancel/probation verdict. Emotional pressure: wanting to feel ahead with AI while fearing wasted money. Output artifact: a funny but actionable cancellation docket. Use the playful-experimental profile: memorable courtroom composition, strong but readable contrast, one main accent, recognizable controls, and novelty in interaction rather than random colors.
```


### p007 - Practical / Commercial
- title: Hagwon AI Gap Ladder
- one-liner: Korean parents compare AI tutor savings against hagwon anxiety without losing face.
- target user: Korean parents considering replacing or supplementing hagwon spend with AI tutoring routines.
- key UX: A ladder view that maps current hagwon spend, AI tutor habits, exam pressure, parent oversight time, and integrity risk into a balanced study plan.
- required UI sections: Monthly spend comparison; Subject pressure ladder; AI tutor routine builder; Integrity risk guardrails; Parent conversation script
- assigned design profile: calm-consumer
- theme: 사교육
- source signal references: S14 (Gwangju News on AI tutors reshaping Korean education and hagwon cost pressure)
- practical vs fun label: practical
- Stitch prompt:

```text
Create a responsive Korean-parent prototype called Hagwon AI Gap Ladder. It helps parents compare hagwon spend and AI tutor routines without pretending AI is a magic replacement. Use signals that Korean students heavily use generative AI for school and that AI tutoring is cheaper than hagwons but raises dependence and integrity concerns. First screen promise: “Save money without letting the study gap become invisible.” Core workflow: enter monthly hagwon cost, subjects, grade pressure, AI usage, parent oversight time, and test dates; show a gap ladder, weekly AI routine, integrity guardrails, and parent-child conversation script. Emotional pressure: fear of falling behind other families and wasting education money. Output artifact: a one-week study ladder and rule card. Use the calm-consumer profile: warm, steady guidance, low-stress surfaces, clear next-step buttons, and gentle copy.
```


### p008 - Fun / Portfolio / Experimental
- title: Skin Check Pop-Up Mirror
- one-liner: A playful kiosk turns selfie skin-AI curiosity into a human-readable next-step card.
- target user: Beauty pop-up visitors, skincare shoppers, and retail teams testing AI-assisted consultation without overclaiming diagnosis.
- key UX: A kiosk-like mirror flow that asks for concerns, lighting confidence, and product goals, then prints a “question card” for a human consultant.
- required UI sections: Mirror capture state; Concern picker; Confidence and limits panel; Consultant question card; Before-buy checklist
- assigned design profile: playful-experimental
- theme: 외모
- source signal references: S15, S9 (The Sun Ireland viral ChatGPT skincare analysis test; Personal Care Insights AI beauty search trust signals)
- practical vs fun label: fun/field
- Stitch prompt:

```text
Create a kiosk-style responsive prototype called Skin Check Pop-Up Mirror. It turns the viral AI skincare-selfie trend into a careful retail consultation helper that never claims medical diagnosis. Use signals from viral ChatGPT skincare analysis experiments and AI beauty trust-signal research. First screen promise: “Get a better question for the beauty counter, not a fake diagnosis.” Core workflow: mirror capture placeholder, lighting confidence check, skin concern picker, AI-limits reminder, trust-signal product checklist, and printed consultant question card. Emotional pressure: curiosity about skin flaws plus fear of being misled or judged. Trigger moment: standing in a beauty pop-up or store aisle. Output artifact: a shareable question card. Use the playful-experimental profile: portfolio-worthy mirror/kiosk composition, bold but legible accent, one clear workflow, and no medical-looking alarm colors.
```


## Stitch Prompt Pack
### p001 Marketplace Plan Shock Window
```text
Create a responsive web prototype called Marketplace Plan Shock Window. It helps US Marketplace health-insurance shoppers compare possible 2026 premium, subsidy, eligibility, and income-reporting shock before choosing a plan. Use evidence from 2026 health policy uncertainty and Covered California style consumer warnings as the problem signal, but do not cite legal advice or promise accuracy. First screen promise: “See what can change before you lock the plan.” Core workflow: household/income inputs, current plan snapshot, policy-risk badges, side-by-side shock scenarios, questions to ask a navigator, and an exportable call sheet. Emotional pressure: fear of losing coverage or overpaying because the rules changed quietly. Trigger moment: open enrollment window shopping. Output artifact: a clean plan-risk brief and call checklist. Use the financial-analyst profile: institutional, data-forward, calm under ambiguity, restrained KPI cards, quiet confidence badges, and charts paired with plain-language interpretation.
```

### p002 Jeonse Exit Siren
```text
Create a responsive Korean/English-friendly prototype called Jeonse Exit Siren. It helps renters prepare for jeonse deposit-return risk before the landlord starts delaying repayment. Use community signals from Korea renters discussing landlords unable to return deposits and news-style “check before wiring” caution as problem evidence. First screen promise: “Know your next move before your deposit becomes someone else’s excuse.” Core workflow: enter lease end date, deposit amount, insurance status, property type, landlord message, and current documents; show a calm risk ladder, move-out countdown, missing-document checklist, landlord reply classifier, and escalation timeline. Emotional pressure: fear of losing life savings and shame of not understanding the system. Output artifact: a deposit-return action packet. Use the calm-consumer profile: reassuring warm neutrals, gentle urgency, clear next-step buttons, and helper text that explains recovery from mistakes.
```

### p003 Trip Refund Evidence Duel
```text
Create a responsive web prototype called Trip Refund Evidence Duel. It helps travelers convert delay receipts, hotel bills, chat screenshots, and staff promises into a reimbursement claim packet. Use community signals where travelers spent vacation time fighting airline/hotel refunds and where hotel reimbursement was verbally promised then denied. First screen promise: “Turn scattered proof into one claim they can answer.” Core workflow: build trip timeline, upload or paste proof cards, tag verbal promises, compare carrier reason codes, generate claim strength meter, and preview a polite reimbursement email. Emotional pressure: anger at losing vacation time and money while being bounced between support teams. Trigger moment: within 48 hours after denial. Output artifact: a downloadable claim packet and email draft. Use the operator-dense profile: crisp compact rows, slate/charcoal surfaces, one urgent accent, tabular numbers, no decorative hero.
```

### p004 Reddit-Proof Beauty Receipt
```text
Create a responsive web prototype called Reddit-Proof Beauty Receipt. It helps beauty shoppers test influencer hype and AI recommendations against peer comments, verified badges, and personal skin constraints before buying. Use signals that Reddit is becoming a beauty validation channel and that AI shopping answers surface verified trust signals. First screen promise: “Before you buy the serum, print the trust receipt.” Core workflow: paste product name and claim, add skin concern, compare influencer promise vs peer comments vs verified trust badges, flag missing proof, and produce a buy/wait/ask verdict. Emotional pressure: fear of wasting money and looking worse after trusting sponsored content. Output artifact: a polished shareable trust receipt. Use the premium-editorial profile: refined, high-trust, elegant typography, warm charcoal/stone tones, restrained contrast, one quiet CTA, curated cards.
```

### p005 Solo Service Deposit Guard
```text
Create a responsive mobile-first prototype called Solo Service Deposit Guard. It helps solo mobile service operators protect income from no-shows and late cancellations without scaring off good clients. Use community signals from small business owners discussing deposits, net terms, cash gaps, and a $3,000 client cancellation loss. First screen promise: “See the cost of holding this slot before you say yes.” Core workflow: enter job value, travel time, materials, cancellation window, client confidence, and current terms; show no-show exposure, recommended deposit range, client-comfort preview, and an editable SMS script with receipt. Emotional pressure: fear of looking unprofessional while losing money. Output artifact: a deposit policy card and client message. Use the field-ops profile: reliable service-operations styling, high-contrast status rows, 44px touch targets, obvious checklist states, and a vivid action accent used sparingly.
```

### p006 AI Tool Stack Divorce Court
```text
Create a responsive web prototype called AI Tool Stack Divorce Court. It helps creators and freelancers decide which paid AI subscriptions to keep, cancel, or put on probation before forgotten charges pile up. Use community signals from users asking which AI subscription is worth paying for and consumer complaints about AI subscription charges requiring bank chargebacks. First screen promise: “Put your AI tools on trial before the next bill.” Core workflow: enter subscriptions, price, last-use date, main use case, overlap with other tools, refund friction, and emotional attachment; present a courtroom evidence board, monthly bleed meter, witness cards, and keep/cancel/probation verdict. Emotional pressure: wanting to feel ahead with AI while fearing wasted money. Output artifact: a funny but actionable cancellation docket. Use the playful-experimental profile: memorable courtroom composition, strong but readable contrast, one main accent, recognizable controls, and novelty in interaction rather than random colors.
```

### p007 Hagwon AI Gap Ladder
```text
Create a responsive Korean-parent prototype called Hagwon AI Gap Ladder. It helps parents compare hagwon spend and AI tutor routines without pretending AI is a magic replacement. Use signals that Korean students heavily use generative AI for school and that AI tutoring is cheaper than hagwons but raises dependence and integrity concerns. First screen promise: “Save money without letting the study gap become invisible.” Core workflow: enter monthly hagwon cost, subjects, grade pressure, AI usage, parent oversight time, and test dates; show a gap ladder, weekly AI routine, integrity guardrails, and parent-child conversation script. Emotional pressure: fear of falling behind other families and wasting education money. Output artifact: a one-week study ladder and rule card. Use the calm-consumer profile: warm, steady guidance, low-stress surfaces, clear next-step buttons, and gentle copy.
```

### p008 Skin Check Pop-Up Mirror
```text
Create a kiosk-style responsive prototype called Skin Check Pop-Up Mirror. It turns the viral AI skincare-selfie trend into a careful retail consultation helper that never claims medical diagnosis. Use signals from viral ChatGPT skincare analysis experiments and AI beauty trust-signal research. First screen promise: “Get a better question for the beauty counter, not a fake diagnosis.” Core workflow: mirror capture placeholder, lighting confidence check, skin concern picker, AI-limits reminder, trust-signal product checklist, and printed consultant question card. Emotional pressure: curiosity about skin flaws plus fear of being misled or judged. Trigger moment: standing in a beauty pop-up or store aisle. Output artifact: a shareable question card. Use the playful-experimental profile: portfolio-worthy mirror/kiosk composition, bold but legible accent, one clear workflow, and no medical-looking alarm colors.
```
