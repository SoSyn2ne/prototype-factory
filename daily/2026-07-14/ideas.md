# Prototype Factory Phase A - 2026-07-14

## Run Contract
- Scope: Phase A only for p001-p008.
- Do not implement custom demos in Phase A.
- Search-first evidence gathered at 2026-07-14 08:00 KST.
- Expected Stitch drop folder: `/home/sy/Downloads/stitch_drop/2026-07-14/`

## Search Signals / External Signals

### Bucket coverage
- News/business/tech: S1, S2, S3, S4, S9, S10, S11
- Communities/forums: S5, S6, S7, S8, S12
- Niche operator workflows: S6, S7, S8, S9, S10, S12
- Trend/policy shifts: S2, S3, S9, S10, S11
- Weird consumer/game behavior: S13, S14

### S1 - tech/security
- Title: HalluSquatting turns hallucinated repo/package names into an agent exploit path.
- Source: Tom's Hardware, "New hack exploits AI hallucinations to trick agents into running malicious code" (2026-07-10), https://www.tomshardware.com/tech-industry/cyber-security/hallusquatting-is-the-latest-agentic-ai-exploit-where-models-dream-up-potentially-malicious-urls-in-tool-calls-attack-exploits-a-fundamental-weakness-in-every-available-model
- Problem signal: AI agents that fetch repos/packages need a boring evidence gate before executing tool calls.

### S2 - Hada / AI operations
- Title: GeekNews latest includes "Ask GN: 실서비스에서 AI 에이전트 실수를 어떻게 추적하시나요?"
- Source: GeekNews latest, https://news.hada.io/new
- Problem signal: small teams connecting agents to real services are asking how to trace wrong agent decisions.

### S3 - GitHub rising repo
- Title: GitHub trending page highlights a queryable knowledge graph for code, SQL, docs, papers, images, and videos.
- Source: GitHub Trending, https://github.com/trending
- Problem signal: developers want repo/file understanding before agents act, but install/source trust remains a separate gap.

### S4 - Product Hunt / agent data
- Title: Product Hunt top products include AgentKey, a live data marketplace for agents, and Osaurus, local Mac agents.
- Source: Product Hunt front page, https://www.producthunt.com/
- Problem signal: agent builders are moving from chat to live data/action, increasing provenance and permission anxiety.

### S5 - community / restaurant no-show and prank bookings
- Title: Restaurateurs discuss reservation no-shows, deposits, prank names, bans, and cancellation windows.
- Source: Reddit r/restaurateur, "How do you manage no-shows for reservations?", https://www.reddit.com/r/restaurateur/comments/1oztw9r/how_do_you_manage_noshows_for_reservations/
- Problem signal: operators need customer-facing policies that feel fair while protecting prep labor and scarce seats.

### S6 - community / restaurant supplier fee shock
- Title: Restaurateurs report a linen supplier cost jump and consider buying towels/aprons plus local dry-cleaning.
- Source: Reddit r/restaurateur/new, https://www.reddit.com/r/restaurateur/new/
- Problem signal: small restaurants need a quick switch-or-renew worksheet for supplier hikes, not a generic expense dashboard.

### S7 - community / freelancer returning slow payer
- Title: Freelancers advise 75% upfront and strict late-payment terms when a former slow-pay client returns.
- Source: Reddit r/freelance, "Former client reached out - Unsure if I should take it", https://www.reddit.com/r/freelance/comments/1t0wd0s/former_client_reached_out_unsure_if_i_should_take/
- Problem signal: the painful moment is not invoice chasing; it is deciding whether to accept the client again and under what terms.

### S8 - community / freelancer invoice tooling shutdown
- Title: Fiverr Workspace / AND.CO users were warned to export invoices, contracts, proposals, and client info before shutdown.
- Source: Reddit r/freelance, "PSA: Fiverr Workspace (AND.CO) shuts down March 1, 2026 AND export your stuff now", https://www.reddit.com/r/freelance/comments/1rh8naj/psa_fiverr_workspace_andco_shuts_down_march_1/
- Problem signal: solo operators need portable client-risk records, not only one app's invoice archive.

### S9 - Korea / delivery platform pressure
- Title: Coupang Eats free-delivery expansion raised merchant dependence and fee-structure concerns.
- Source: Maeil Business News, https://www.mk.co.kr/en/economy/12056252
- Problem signal: Korean small merchants are still trapped between platform growth claims and margin-control work.

### S10 - Korea / apartment EV operations
- Title: Korean apartments running EV chargers directly to cut fees face liability worries around fires and incidents.
- Source: Seoul Economic Daily, https://en.sedaily.com/finance/2026/05/04/apartment-ev-charging-shift-sparks-liability-fears-in-korea
- Problem signal: apartment managers need resident notices, incident drills, and responsibility maps before conflict starts.

### S11 - heat / field labor policy
- Title: South Korea issued first-ever highest-level heatwave warnings on July 12, 2026.
- Source: Human Resources Online, https://www.humanresourcesonline.net/south-korea-issued-first-ever-grave-heat-wave-warnings-amidst-scorching-temperatures
- Problem signal: field teams need heat-break scheduling and proof logs as heat alerts become operational constraints.

### S12 - heat / worker protection trend
- Title: European unions are pressing for enforceable heat-stress protections and work stoppage rules.
- Source: The Guardian, https://www.theguardian.com/environment/2026/jul/08/unions-europe-worker-protections-heat-stress-climate-crisis
- Problem signal: supervisors need to convert weather thresholds into breaks, shade, route changes, and accountable records.

### S13 - AI culture / prompt leaks
- Title: Rising GitHub AI-agent repos include system prompt leak collections with strong 7-day star growth.
- Source: findarepo AI agents ranking, https://findarepo.com/categories/ai-agents/
- Problem signal: leaked prompt artifacts are treated like cultural objects; a portfolio demo can make that behavior inspectable.

### S14 - viral interaction / hide-and-seek play
- Title: Hide-and-seek / prop-hunt games remain readable 15-second party loops across Steam, Roblox, Fortnite, and browser games.
- Source: Recharge.com, "Best Hide and Seek Games Online to Play in 2026", https://www.recharge.com/blog/en-gb/best-hide-and-seek-games-online-to-play-in-2026
- Problem signal: portfolio bait should use a tactile rule, funny failure, and spectator participation rather than another static dashboard.

## GitHub Rising Repo Scan
- MadsLorentzen/ai-job-search: reported as +15k stars in 7 days by findarepo; UX seed is local job-search automation with high trust/risk stakes.
- DietrichGebert/ponytail: reported as +6.4k stars in 7 days; UX seed is code reduction / anti-overbuild taste packaged as an agent helper.
- asgeirtj/system_prompts_leaks: reported as +6.0k stars in 7 days; UX seed is prompt artifacts as public culture.
- alibaba/page-agent: browser GUI control; UX seed is in-page actions needing replay and traceability.
- decolua/9router: free coding-router promise; UX seed is routing opacity and usage trust.
- browser-use/browser-use: browser automation; UX seed is action evidence before browser-side execution.
- rowboatlabs/rowboat: AI coworker with memory; UX seed is teammate memory and correction logs.
- GitHub Trending knowledge graph repo: queryable workspace graph; UX seed is local source map before agent action.

## Novelty / Duplicate Check Against Last 7 PF Batches
- Checked: daily/2026-07-03, 2026-07-06, 2026-07-07, 2026-07-08, 2026-07-09, 2026-07-10, 2026-07-13.
- Rejected near-duplicate: generic AI agent preflight / permission panic. Kept p001 only because the trigger is package/repo name hallucination and the core object is an install evidence receipt.
- Rejected near-duplicate: delivery-fee disclosure proofreader. Replaced with p002 linen supplier break-even because the workflow is supplier renewal vs self-operation.
- Rejected near-duplicate: no-show deposit tool. Signal S5 was kept as context only, not selected.
- Rejected near-duplicate: hagwon AI gap / AI camp / tutor rescue. Korea education signals were not selected today.
- Rejected near-duplicate: generic client ghosting or late-fee sender. Kept p003 only because the trigger is former-client reentry before work starts, backed by portable history.
- Rejected near-duplicate: generic AI slop reputation game. Kept p007 as cultural exhibit creation from prompt leaks, not a cleanup/review tool.

## Candidate Mix
- Practical / commercial: p001, p002, p003, p006
- Practical / field: p004, p005
- Fun / portfolio / experimental: p007, p008

## Final Candidates

### p001 - Practical / Commercial
- title: HalluSquat Install Guard
- one-liner: AI agents get a pre-install evidence gate before they fetch hallucinated or typosquatted repos.
- target user: Devtool founders, platform engineers, and AI-agent operators who let coding agents install packages or clone repos.
- key UX: Paste an agent's proposed install/clone command, compare claimed package identity against source evidence, flag hallucination/typosquat risk, then export a compact allow/block receipt.
- required UI sections: command intake; package/repo identity panel; source evidence timeline; risk diff table; allow/block decision rail; audit receipt export.
- assigned design profile: operator-dense
- theme: agent security, provenance, install safety
- source signal references: S1, S2, S3
- Stitch prompt: Build a polished web prototype called "HalluSquat Install Guard" for AI-agent operators. The first screen should let a user paste an agent-generated install or git clone command, then show package identity evidence, source URL checks, hallucination/typosquat risk, and a final allow/block receipt. Required sections: command intake, source evidence timeline, risk diff table, decision rail, and audit receipt export. Design direction: use the operator-dense profile with compact rows, deep neutral surfaces, tabular evidence, one sharp warning accent, and no decorative hero.

### p002 - Practical / Commercial
- title: Linen Contract Break-Even Switchboard
- one-liner: Restaurant operators compare supplier fee hikes against buy-own-and-clean alternatives before renewing.
- target user: Independent restaurant owners, inn operators, and managers handling linen, towel, apron, or uniform supplier renewals.
- key UX: Enter current supplier costs, hike notice, replacement purchase costs, local laundry quotes, labor time, and risk notes; see break-even month and a negotiation script.
- required UI sections: cost hike intake; supplier vs self-clean comparison; break-even calculator; operational risk checklist; negotiation memo; decision summary.
- assigned design profile: financial-analyst
- theme: restaurant procurement, cost control, vendor negotiation
- source signal references: S6, S9
- Stitch prompt: Build a polished web prototype called "Linen Contract Break-Even Switchboard" for small restaurant operators deciding whether to renew a linen supplier after a fee hike. The first screen should compare current supplier spend, proposed increase, buy-own inventory cost, local dry-cleaning quotes, labor burden, and break-even month, then produce a negotiation memo. Required sections: cost hike intake, supplier-vs-self-clean model, break-even cards, risk checklist, and memo export. Design direction: use the financial-analyst profile with rigorous number hierarchy, muted institutional colors, restrained warning tones, and charts paired with plain-language interpretation.

### p003 - Practical / Commercial
- title: Former Client Reentry Gate
- one-liner: Freelancers turn a returning slow-pay client into a deposit, scope, and risk decision in ten minutes.
- target user: Freelancers, small studios, and consultants deciding whether to accept work from a client with payment or ghosting history.
- key UX: Import client history, select the new request, score reentry risk, choose deposit and milestone terms, and generate a polite boundary email.
- required UI sections: client history card; new request summary; risk scoring checklist; deposit/late-fee term builder; boundary email composer; accept/decline decision log.
- assigned design profile: calm-consumer
- theme: freelance cashflow, client boundaries, portable business memory
- source signal references: S7, S8
- Stitch prompt: Build a polished web prototype called "Former Client Reentry Gate" for freelancers who are deciding whether to work again with a slow-paying former client. The first screen should show client history, the new request, a reentry risk score, deposit and milestone term options, and a polite email composer for accept, renegotiate, or decline. Required sections: client history card, request summary, risk checklist, term builder, email composer, and decision log. Design direction: use the calm-consumer profile with reassuring spacing, warm neutral surfaces, clear next-step buttons, and low-shame copy that helps users set boundaries.

### p004 - Practical / Field
- title: Apartment EV Charger Liability Drill
- one-liner: Apartment managers rehearse charger operations, incident liability, and resident notices before disputes ignite.
- target user: Korean apartment management offices, resident committees, and facility managers taking over EV charger operations.
- key UX: Map charger ownership, insurance, inspection status, resident notice gaps, and fire-response handoffs; run a tabletop incident drill and export the notice pack.
- required UI sections: charger inventory map; liability ownership matrix; inspection checklist; incident drill timeline; resident notice preview; unresolved risk board.
- assigned design profile: field-ops
- theme: apartment operations, EV safety, resident conflict prevention
- source signal references: S10
- Stitch prompt: Build a polished web prototype called "Apartment EV Charger Liability Drill" for Korean apartment managers preparing to operate EV chargers directly. The first screen should map charger inventory, ownership, insurance status, fire-response handoffs, resident notices, and a tabletop incident drill timeline. Required sections: charger inventory map, liability matrix, inspection checklist, incident drill, resident notice preview, and unresolved risk board. Design direction: use the field-ops profile with disciplined service-operations styling, high-contrast status rows, 44px touch targets, and a vivid action accent only for urgent handoffs.

### p005 - Practical / Field
- title: Heat Break Dispatch Clock
- one-liner: Field supervisors convert heat alerts into crew breaks, route changes, and proof logs without slowing the day.
- target user: Construction, delivery, facilities, landscaping, and outdoor-service supervisors managing crews during heat warnings.
- key UX: Pull a heat alert, assign crew risk levels, schedule break/shade/water intervals, adjust routes, and create a proof log for compliance or client explanation.
- required UI sections: heat alert banner; crew risk roster; break scheduler; route/task adjustment board; hydration/shade checklist; proof log export.
- assigned design profile: field-ops
- theme: heatwave operations, worker safety, dispatch proof
- source signal references: S11, S12
- Stitch prompt: Build a polished web prototype called "Heat Break Dispatch Clock" for field supervisors working through severe heat alerts. The first screen should convert a heat warning into crew risk levels, break windows, route adjustments, hydration and shade checks, and a proof log for compliance. Required sections: heat alert banner, crew roster, break scheduler, task adjustment board, safety checklist, and proof export. Design direction: use the field-ops profile with reliable operational visuals, legible pressure-state rows, large touch targets, and small but unmistakable heat-risk badges.

### p006 - Practical / Commercial
- title: Missed-Call Revenue Recall Board
- one-liner: Local service businesses see which missed calls deserve an AI receptionist, callback, or human owner touch.
- target user: Small clinics, salons, repair shops, and local service owners losing revenue from missed calls and inconsistent follow-up.
- key UX: Review missed calls by potential value, urgency, repeat-caller status, and booking likelihood; assign AI receptionist, owner callback, or ignore; track recovered bookings.
- required UI sections: missed-call queue; caller value scoring; AI vs human handoff selector; callback script; recovered revenue tracker; follow-up SLA board.
- assigned design profile: operator-dense
- theme: local service revenue, voice AI, missed-call recovery
- source signal references: S4
- Stitch prompt: Build a polished web prototype called "Missed-Call Revenue Recall Board" for local service businesses deciding how to recover missed calls. The first screen should rank missed calls by estimated value, urgency, repeat-caller status, and booking likelihood, then let the owner route each call to an AI receptionist, human callback, or ignore lane. Required sections: missed-call queue, value score panel, AI/human handoff selector, callback script, recovered revenue tracker, and SLA board. Design direction: use the operator-dense profile with compact queues, crisp status chips, one clear action accent, and margin-aware revenue cues.

### p007 - Fun / Portfolio / Experimental
- title: Prompt Leak Museum Builder
- one-liner: A playful exhibit maker turns leaked system-prompt tropes into annotated, shareable artifact cards.
- target user: AI culture watchers, designers, devrel teams, and portfolio builders who want a sharp visual explainer about prompt-leak patterns.
- key UX: Choose a prompt artifact type, tag its trope, annotate what it reveals about product behavior, arrange it on a museum wall, and export a shareable exhibit card.
- required UI sections: artifact picker; trope tagger; annotation panel; museum wall layout; exhibit card preview; share/export drawer.
- assigned design profile: playful-experimental
- theme: AI culture, prompt archaeology, shareable portfolio artifact
- source signal references: S13, S2
- Stitch prompt: Build a polished web prototype called "Prompt Leak Museum Builder" that turns leaked system-prompt tropes into annotated exhibit cards. The first screen should let a user pick an artifact type, tag the trope, explain what it reveals about product behavior, place it on a museum wall, and export a shareable card. Required sections: artifact picker, trope tagger, annotation panel, museum wall, card preview, and export drawer. Design direction: use the playful-experimental profile with a memorable exhibit-like composition, strong but controlled accent color, readable labels, and one obvious creation workflow.

### p008 - Fun / Portfolio / Experimental
- title: Prop Hunt Storefront Queue
- one-liner: Friends hide as ordinary shop objects while a cashier judge spots the fake item before the line explodes.
- target user: Party-game fans, streamers, and design portfolios needing a simple tactile social loop.
- key UX: One player becomes a cashier judge, friends choose storefront props, customers enter the queue, and the judge taps the suspicious object before the patience meter runs out.
- required UI sections: role select; prop disguise shelf; storefront scene; queue patience meter; suspect tap result; replay/share clip card.
- assigned design profile: playful-experimental
- theme: prop hunt, social party game, funny failure clips
- source signal references: S14
- Stitch prompt: Build a polished web prototype called "Prop Hunt Storefront Queue" for a tiny social party game. The first screen should show role select, a prop disguise shelf, a busy storefront scene, a queue patience meter, and a cashier judge tapping which object is secretly a player before customers get angry. Required sections: role select, prop shelf, storefront play area, patience meter, result state, and replay/share clip card. Design direction: use the playful-experimental profile with bold shop-floor staging, clear game controls, one energetic accent, and funny failure states that remain readable.

## Stitch Prompt Pack

### p001 HalluSquat Install Guard
Build a polished web prototype called "HalluSquat Install Guard" for AI-agent operators. The first screen should let a user paste an agent-generated install or git clone command, then show package identity evidence, source URL checks, hallucination/typosquat risk, and a final allow/block receipt. Required sections: command intake, source evidence timeline, risk diff table, decision rail, and audit receipt export. Design direction: use the operator-dense profile with compact rows, deep neutral surfaces, tabular evidence, one sharp warning accent, and no decorative hero.

### p002 Linen Contract Break-Even Switchboard
Build a polished web prototype called "Linen Contract Break-Even Switchboard" for small restaurant operators deciding whether to renew a linen supplier after a fee hike. The first screen should compare current supplier spend, proposed increase, buy-own inventory cost, local dry-cleaning quotes, labor burden, and break-even month, then produce a negotiation memo. Required sections: cost hike intake, supplier-vs-self-clean model, break-even cards, risk checklist, and memo export. Design direction: use the financial-analyst profile with rigorous number hierarchy, muted institutional colors, restrained warning tones, and charts paired with plain-language interpretation.

### p003 Former Client Reentry Gate
Build a polished web prototype called "Former Client Reentry Gate" for freelancers who are deciding whether to work again with a slow-paying former client. The first screen should show client history, the new request, a reentry risk score, deposit and milestone term options, and a polite email composer for accept, renegotiate, or decline. Required sections: client history card, request summary, risk checklist, term builder, email composer, and decision log. Design direction: use the calm-consumer profile with reassuring spacing, warm neutral surfaces, clear next-step buttons, and low-shame copy that helps users set boundaries.

### p004 Apartment EV Charger Liability Drill
Build a polished web prototype called "Apartment EV Charger Liability Drill" for Korean apartment managers preparing to operate EV chargers directly. The first screen should map charger inventory, ownership, insurance status, fire-response handoffs, resident notices, and a tabletop incident drill timeline. Required sections: charger inventory map, liability matrix, inspection checklist, incident drill, resident notice preview, and unresolved risk board. Design direction: use the field-ops profile with disciplined service-operations styling, high-contrast status rows, 44px touch targets, and a vivid action accent only for urgent handoffs.

### p005 Heat Break Dispatch Clock
Build a polished web prototype called "Heat Break Dispatch Clock" for field supervisors working through severe heat alerts. The first screen should convert a heat warning into crew risk levels, break windows, route adjustments, hydration and shade checks, and a proof log for compliance. Required sections: heat alert banner, crew roster, break scheduler, task adjustment board, safety checklist, and proof export. Design direction: use the field-ops profile with reliable operational visuals, legible pressure-state rows, large touch targets, and small but unmistakable heat-risk badges.

### p006 Missed-Call Revenue Recall Board
Build a polished web prototype called "Missed-Call Revenue Recall Board" for local service businesses deciding how to recover missed calls. The first screen should rank missed calls by estimated value, urgency, repeat-caller status, and booking likelihood, then let the owner route each call to an AI receptionist, human callback, or ignore lane. Required sections: missed-call queue, value score panel, AI/human handoff selector, callback script, recovered revenue tracker, and SLA board. Design direction: use the operator-dense profile with compact queues, crisp status chips, one clear action accent, and margin-aware revenue cues.

### p007 Prompt Leak Museum Builder
Build a polished web prototype called "Prompt Leak Museum Builder" that turns leaked system-prompt tropes into annotated exhibit cards. The first screen should let a user pick an artifact type, tag the trope, explain what it reveals about product behavior, place it on a museum wall, and export a shareable card. Required sections: artifact picker, trope tagger, annotation panel, museum wall, card preview, and export drawer. Design direction: use the playful-experimental profile with a memorable exhibit-like composition, strong but controlled accent color, readable labels, and one obvious creation workflow.

### p008 Prop Hunt Storefront Queue
Build a polished web prototype called "Prop Hunt Storefront Queue" for a tiny social party game. The first screen should show role select, a prop disguise shelf, a busy storefront scene, a queue patience meter, and a cashier judge tapping which object is secretly a player before customers get angry. Required sections: role select, prop shelf, storefront play area, patience meter, result state, and replay/share clip card. Design direction: use the playful-experimental profile with bold shop-floor staging, clear game controls, one energetic accent, and funny failure states that remain readable.

## Scaffolded Slots
- p001: `prototypes/2026-07-14-p001-hallusquat-install-guard`
- p002: `prototypes/2026-07-14-p002-linen-contract-break-even-switchboard`
- p003: `prototypes/2026-07-14-p003-former-client-reentry-gate`
- p004: `prototypes/2026-07-14-p004-apartment-ev-charger-liability-drill`
- p005: `prototypes/2026-07-14-p005-heat-break-dispatch-clock`
- p006: `prototypes/2026-07-14-p006-missed-call-revenue-recall-board`
- p007: `prototypes/2026-07-14-p007-prompt-leak-museum-builder`
- p008: `prototypes/2026-07-14-p008-prop-hunt-storefront-queue`

## Expected Stitch Drop Folder
```text
/home/sy/Downloads/stitch_drop/2026-07-14/
  p001/code.html + p001/screen.png
  p002/code.html + p002/screen.png
  p003/code.html + p003/screen.png
  p004/code.html + p004/screen.png
  p005/code.html + p005/screen.png
  p006/code.html + p006/screen.png
  p007/code.html + p007/screen.png
  p008/code.html + p008/screen.png
```
