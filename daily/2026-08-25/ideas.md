# Prototype Factory Phase A — 2026-08-25

## Run contract
- Exactly 8 candidates; Phase A only; no custom demos.
- Live sweep captured 2026-08-25 08:00 KST. Tavily was quota-blocked, so evidence was gathered directly from HN Algolia, GitHub Search, and linked public pages.
- Mix: 5 practical/commercial + 3 fun/portfolio/non-web.
- Expected Stitch drop: `/home/sy/Downloads/stitch_drop/2026-08-25/` with `p001~p008/code.html` and `screen.png`.

## Search signals / External signals

### Raw signal index (12)
- **S1 — community / urgent operator pain:** Ask HN: “What AI companies provide human support?” A small-business operator says urgent issues across many AI subscriptions cannot reach a human. https://news.ycombinator.com/item?id=49423377
- **S2 — community / agent workflow:** Ask HN: “Have your coding agents finished work you no longer wanted?” Parallel agents continue after the operator changes direction. https://news.ycombinator.com/item?id=49409147
- **S3 — community / seller anxiety:** Ask HN: “Advice for selling a tech domain name.” First-time seller has an AI-estimated $10k domain and fears blowing the negotiation. https://news.ycombinator.com/item?id=49409177
- **S4 — community / business validation:** Ask HN: “Those making $500/month on side projects in 2026 – Show and tell.” The author is at $0/month and wants evidence that small side projects still work. https://news.ycombinator.com/item?id=49417766
- **S5 — community / procurement workflow:** “Procura – Finance Manager” proposes a $500/month agent that finds and buys the cheapest business supplies; the author asks whether the price is viable. https://news.ycombinator.com/item?id=49407193
- **S6 — accessibility / tech:** HN-linked OSNews article argues modern terminal UIs can be hostile to screen readers and keyboard navigation despite appearing text-native. https://www.osnews.com/story/144892/the-text-mode-lie-why-modern-tuis-are-a-nightmare-for-accessibility/
- **S7 — weird device behavior:** Ask HN asks for fun projects for a neglected Linux gaming handheld, explicitly describing a capable pocket computer sitting unused. https://news.ycombinator.com/item?id=49426114
- **S8 — health / sensor behavior:** HN post describes Apple Watch-only automatic exercise, rep, and muscle-failure scoring from motion data. https://news.ycombinator.com/item?id=49423904
- **S9 — creator / self-hosting:** Show HN “Mainly” was built to visually manage self-hosted email across multiple domains, including bulk onboarding and custom sorting. https://news.ycombinator.com/item?id=49426802
- **S10 — GitHub rising / visual tooling:** `MengTo/threeui`, created within the last week, reached 3,431 stars and offers live interactive Three.js UI components. https://github.com/MengTo/threeui
- **S11 — GitHub rising / device coordination:** `missuo/herdrm`, created within the last week, reached 620 stars for viewing coding-agent terminals across devices. https://github.com/missuo/herdrm
- **S12 — GitHub rising / 3D creation:** `amagine-ai/Amagine3D`, created within the last week, reached 391 stars for turning hardware requirements into editable 3D designs. https://github.com/amagine-ai/Amagine3D

Bucket coverage: communities/forums S1–S5, S7–S9; news/tech S6; niche workflows S1, S3, S5, S9; weird device behavior S7–S8; GitHub rising S10–S12. Community requirement met with 8 community-style signals.

## Hada Signals
Front/latest observed via `https://news.hada.io/rss/news` at 2026-08-25 08:00 KST. Each item is recorded as behavior evidence, not market-size proof.

1. **텍스트 모드라는 거짓말: 현대 TUI가 접근성을 해치는 이유** — https://news.hada.io/topic?id=32855 — behavior signal: TUI maintainers need a keyboard/focus/spoken-output replay instead of assuming “terminal = accessible”; used by p005.
2. **AI 의존이 코딩 전문성의 성장 경로를 무너뜨릴 수 있음** — https://news.hada.io/topic?id=32854 — behavior signal: builders need deliberate evidence-producing practice, but rejected today because 08-24 already used agent stop-loss and the batch has enough AI ideas.
3. **Varkos - 대화를 넘어 Skyrim 세계를 인식하고 행동하는 AI 동료** — https://news.hada.io/topic?id=32853 — behavior signal: stateful physical-world quests are more compelling than chat-only companions; cross-reference for p006’s persistent sidequest state.
4. **MS Paint와 Photos, 로컬 AI 이미지에 서버 발급 GUID를 보이지 않는 워터마크로 삽입** — https://news.hada.io/topic?id=32852 — behavior signal: users want provenance visibility, but rejected as too close to 08-21 p006 Asset Provenance Handoff Seal.

## GitHub Rising Repo Scan
Scan criteria: GitHub Search API query `created:>2026-08-18`, sorted by `stars` descending, observed 2026-08-25 08:00 KST. Stars are snapshot evidence, not durable ranking.

1. `MengTo/threeui` — 3,431 stars — live interactive Three.js component catalog; UX seed for p007. https://github.com/MengTo/threeui
2. `b-nnett/grok-bot-0.18-reconstructed` — 1,624 stars — reconstructed desktop agent; rejected as product-copying rather than a user pain. https://github.com/b-nnett/grok-bot-0.18-reconstructed
3. `duty1g/x64dbg-mcp-server` — 1,208 stars — programmatic debugger control; rejected because security/debugger niche repeats recent agent tooling.
4. `tobi/walgit` — 1,033 stars — fast-rising repo without enough public product description; not used.
5. `cclank/lanshu-create-ai-presenter-video` — 836 stars — verified presenter-video workflow; rejected because no matching lived-pain signal today.
6. `ShadowAqueduct/watermark-remover` — 768 stars — provenance removal interest; rejected as unsafe/too close to provenance handoff.
7. `missuo/herdrm` — 620 stars — multi-device coding-agent terminals; operator-console reference for p001/p005. https://github.com/missuo/herdrm
8. `nateherkai/scroll-craft` — 620 stars — screenshot-verified scroll sites; rejected as a production method, not a customer problem.
9. `Forsy-AI/biosecurity-agent` — 513 stars — persistent simulated world; rejected for risk and weak target-user evidence.
10. `amagine-ai/Amagine3D` — 391 stars — hardware requirements to editable 3D designs; interaction seed for p006/p007. https://github.com/amagine-ai/Amagine3D

## Candidate provenance and build handoff schema

- **p001** — source_repo: `missuo/herdrm`; why_starred: cross-device visibility makes urgent operator state legible; reference_pattern: outage escalation matrix; twist: service-tier-aware human route plus impact clock; first_screen: incident timer + vendor selector + Find a human route; share_or_play_loop: executive impact receipt; plan_brief: validate route trust and response-time value with five SaaS-dependent operators; development_start_prompt: use the full p001 Stitch prompt below as the visual source, then implement only in Phase B.
- **p002** — source_repo: not GitHub-derived; why_starred: not applicable; reference_pattern: negotiation scenario room; twist: separates comparable evidence from AI guesses; first_screen: inbound offer beside evidence-quality valuation range; share_or_play_loop: net-proceeds counteroffer card; plan_brief: test whether first-time sellers avoid a bad deal; development_start_prompt: use the full p002 Stitch prompt below in Phase B.
- **p003** — source_repo: not GitHub-derived; why_starred: not applicable; reference_pattern: experiment ladder; twist: progress counts paid evidence, not completed tasks; first_screen: $0 snapshot + 14-day ladder; share_or_play_loop: day-14 proof receipt; plan_brief: measure whether builders run at least three asks; development_start_prompt: use the full p003 Stitch prompt below in Phase B.
- **p004** — source_repo: not GitHub-derived; why_starred: not applicable; reference_pattern: purchase approval gate; twist: simulates carts against explicit authority before buying; first_screen: policy builder + three cart outcomes; share_or_play_loop: timestamped approval receipt; plan_brief: test trust boundaries with five small-business buyers; development_start_prompt: use the full p004 Stitch prompt below in Phase B.
- **p005** — source_repo: `missuo/herdrm`; why_starred: live terminal observability indicates demand for replayable terminal state; reference_pattern: accessibility journey recorder; twist: synchronized keys, speech, and focus graph; first_screen: terminal replay + announcement transcript; share_or_play_loop: copy-ready GitHub issue; plan_brief: reproduce three real TUI traps and verify the export is actionable; development_start_prompt: use the full p005 Stitch prompt below in Phase B.
- **p006** — source_repo: `amagine-ai/Amagine3D`; why_starred: editable hardware workflows show appetite for device-to-creation loops; reference_pattern: quest deck; twist: underused Linux handheld capabilities become real-world 20-minute quests; first_screen: capability scan dealing three cards; share_or_play_loop: remixable quest cartridge; plan_brief: run three quests on one handheld and measure completion/remix; development_start_prompt: use the full p006 Stitch prompt below in Phase B.
- **p007** — source_repo: `MengTo/threeui`; why_starred: 3,431 stars show strong interest in reusable interactive 3D primitives; reference_pattern: creative roulette; twist: component catalog becomes a timed constraint game; first_screen: four reels above a live 3D stage; share_or_play_loop: parent/child remix chain; plan_brief: test whether designers publish and remix in under five minutes; development_start_prompt: use the full p007 Stitch prompt below in Phase B.
- **p008** — source_repo: not GitHub-derived; why_starred: not applicable; reference_pattern: two-player rhythm duel; twist: clean-form and fatigue estimates drive haptic comeback windows; first_screen: paired dual rep lanes; share_or_play_loop: funny safe recap + rematch; plan_brief: test readability and safety during a live set; development_start_prompt: use the full p008 Stitch prompt below in Phase B.

## Novelty / duplicate check — last 7 PF batches
Reviewed: 2026-08-24, 08-21, 08-14, 08-13, 08-12, 08-11, 08-04.

Rejected near-duplicates:
- Agent Change-of-Mind Kill Switch from S2 → rejected because 08-24 p001 Agent Stop-Loss Receipt already owns agent cancellation/stop-loss.
- Multi-domain Mailbox Sorting Desk from S9 → rejected because 08-21 p004 Second-Brain Exit Splitter and 08-14 p002 relationship transfer already cover migration/handoff-shaped inbox work.
- AI subscription proof/refund tracker from S1 → rejected because 08-12 p003 AI Subscription Proof Ledger already covers proof and billing; today’s p001 is strictly human escalation routing during an active outage.
- Generic component gallery from S10 → rejected; p007 uses a timed remix game with a shareable scene, not a catalog/dashboard.
- Generic wearable health dashboard from S8 → rejected; p008 is a two-person live form duel with haptics and no longitudinal dashboard.

Distinctness gate: every selected idea changes at least one of user, trigger, data source, or core interaction; none is a renamed rescue/planner/dashboard.

## Final candidates

### p001 — Practical / Commercial — Human Support Escalation Atlas
- **Title:** Human Support Escalation Atlas
- **One-liner:** Turn an urgent AI/SaaS outage into a verified human-contact route, escalation clock, and executive-ready impact note in three minutes.
- **Target user:** Small businesses running revenue-critical workflows across multiple AI/SaaS vendors.
- **Key UX:** Pick vendor and incident type → reveal verified escalation channels by service tier → start response-SLA clock → generate a concise impact packet and fallback checklist.
- **Required UI sections:** incident intake, vendor/service-tier matrix, human-channel route cards, SLA clock, business-impact composer, fallback checklist, export/share.
- **Assigned design profile:** `operator-dense`
- **Theme:** 자산 방어
- **Source signal references:** S1; S11 as cross-device operator-console reference.
- **Stitch prompt:** Design a responsive web app called “Human Support Escalation Atlas” for a small-business operator whose AI vendor is blocking a revenue-critical workflow. First screen: dark operations header, red incident timer, vendor/service-tier selector, and a dominant “Find a human route” action. Show verified channel cards for phone, enterprise portal, status-page incident, account rep, and regulator/chargeback only when appropriate; each card needs confidence, last-verified date, expected response window, and copyable script. Add an editable business-impact note, fallback checklist, timeline log, and export drawer. Use realistic sample data for three vendors and clear empty/error states. Design direction for the `operator-dense` profile: compact 40px rows, charcoal canvas, restrained red/amber status colors, monospaced timestamps, and one electric-cyan action accent.

### p002 — Practical / Commercial — Domain Deal Reality Room
- **Title:** Domain Deal Reality Room
- **One-liner:** Help a first-time domain seller compare buyer signals, valuation ranges, escrow fees, and three counteroffers without mistaking an AI estimate for cash.
- **Target user:** Indie hackers and small domain holders negotiating their first $1k–$50k inbound offer.
- **Key UX:** Paste inbound offer and domain facts → separate evidence from guesses → model walk-away/target/stretch offers → rehearse buyer replies and escrow sequence.
- **Required UI sections:** offer intake, evidence-vs-estimate ledger, comparable sales strip, scenario waterfall, counteroffer composer, escrow fee/tax preview, negotiation timeline.
- **Assigned design profile:** `financial-analyst`
- **Theme:** 역전
- **Source signal references:** S3; S4 for side-project income anxiety.
- **Stitch prompt:** Create a polished responsive finance workspace named “Domain Deal Reality Room.” The first screen should center a $7,500 inbound offer card beside a valuation range with explicit evidence quality labels—verified comparable sale, marketplace estimate, AI guess, and unknown. Include walk-away/target/stretch scenario columns, net proceeds after escrow and tax assumptions, a buyer-intent checklist, three editable counteroffer tones, and a step-by-step escrow timeline. Never imply a guaranteed valuation. Include mobile stacked cards and desktop analytical tables. Design direction for the `financial-analyst` profile: warm off-white background, ink-black typography, emerald positive figures, muted red risks, precise tabular numbers, and restrained charting.

### p003 — Practical / Commercial — $500 Proof Ladder
- **Title:** $500 Proof Ladder
- **One-liner:** Convert a zero-revenue side project into seven small paid-proof experiments, ranked by speed, reach, and evidence—not motivational tasks.
- **Target user:** Technical builders with launched side projects earning $0–$100/month.
- **Key UX:** Enter product and current audience → choose a proof target → drag seven experiments onto a 14-day ladder → log asks, deposits, refusals, and revenue evidence.
- **Required UI sections:** project snapshot, proof-target selector, experiment card deck, 14-day ladder, ask script, evidence ledger, kill/continue gate, shareable progress receipt.
- **Assigned design profile:** `calm-consumer`
- **Theme:** 역전
- **Source signal references:** S4; S5 for willingness-to-pay uncertainty.
- **Stitch prompt:** Design “$500 Proof Ladder,” a responsive 14-day validation board for a developer whose side project earns $0. Start with a calm onboarding card asking what they sell, who already knows them, and the smallest paid outcome. Main view: seven draggable experiment cards—paid concierge, preorder, audit, template sale, partner intro, marketplace listing, and direct outreach—placed on a two-week ladder. Every card shows time cost, audience needed, proof strength, and one copyable ask. Add an evidence ledger recording replies, deposits, refusals, and actual revenue, plus a day-14 continue/pivot/kill gate. Design direction for the `calm-consumer` profile: airy cream canvas, soft blue and sage, generous spacing, plain language, friendly progress states, and no hustle-guru visual noise.

### p004 — Practical / Commercial — Purchase Authority Gate
- **Title:** Purchase Authority Gate
- **One-liner:** Give a procurement agent explicit price, vendor, urgency, and substitution limits before it can buy—then make every exception visible.
- **Target user:** Small-business owners considering autonomous purchasing for recurring supplies.
- **Key UX:** Build an approval policy from plain-language constraints → simulate three carts → inspect exceptions → approve, edit, or block with a durable receipt.
- **Required UI sections:** policy builder, preferred-vendor rules, substitution matrix, cart simulator, exception queue, approval receipt, monthly savings/risk summary.
- **Assigned design profile:** `operator-dense`
- **Theme:** 자산 방어
- **Source signal references:** S5; S2 for unsupervised-agent drift.
- **Stitch prompt:** Build a desktop-first responsive operations app titled “Purchase Authority Gate.” The first screen shows a plain-language policy builder—maximum order value, approved vendors, allowed substitutions, delivery deadline, and categories that always require a human. Beside it, simulate three supply carts with savings, risk, and exception badges. Clicking a cart opens a line-item diff and asks approve/edit/block; every decision creates a timestamped receipt. Include an exception queue, monthly spend ceiling, vendor reliability strip, and emergency override with a prominent reason field. Design direction for the `operator-dense` profile: dense but legible grid, deep navy/graphite surfaces, 40px rows, amber exception chips, and a single bright-green approval action.

### p005 — Practical / Field — TUI Access Path Recorder
- **Title:** TUI Access Path Recorder
- **One-liner:** Replay a terminal app entirely by keyboard and screen-reader announcements, then export the exact focus traps and unlabeled regions blocking a user.
- **Target user:** CLI/TUI maintainers, accessibility testers, and blind developers evaluating terminal software.
- **Key UX:** Record a task path → visualize focus order and spoken output → flag silent state changes/traps → compare patched replay → export an issue packet.
- **Required UI sections:** terminal replay pane, keystroke timeline, spoken-announcement transcript, focus graph, violation inspector, before/after compare, issue export.
- **Assigned design profile:** `field-ops`
- **Theme:** 건강
- **Source signal references:** S6; S11 for live terminal monitoring.
- **Stitch prompt:** Create “TUI Access Path Recorder,” a responsive accessibility testing console. Show a terminal replay on the left, a synchronized keystroke timeline below it, and a screen-reader transcript on the right. Highlight silent modal openings, focus loops, color-only status changes, missing labels, and unreachable controls. Include a task selector such as “open settings and change a profile,” before/after replay comparison, severity filters, and a one-click GitHub issue packet containing exact keys and expected announcements. Keyboard navigation must be visually obvious. Design direction for the `field-ops` profile: high-contrast light surface, durable inspection cards, thick focus rings, safety orange for violations, and large touch/keyboard targets.

### p006 — Fun / Non-web / Experimental — Pocket Linux Sidequest Deck
- **Title:** Pocket Linux Sidequest Deck
- **One-liner:** Turn an unused Linux handheld into a deck of 20-minute real-world sidequests using its buttons, Wi-Fi, camera, SSH, and local sensors.
- **Target user:** Linux handheld owners bored with emulation and looking for playful weekend projects.
- **Key UX:** Detect device capabilities → deal three physical-world quests → run one with button prompts → capture proof → remix and share the quest card.
- **Required UI sections:** capability scan, quest-card deal, 20-minute timer, control mapping, proof capture, remix rules, local scoreboard, share card.
- **Assigned design profile:** `playful-experimental`
- **Theme:** 외로움
- **Source signal references:** S7; S12 for hardware-to-editable-build inspiration.
- **Stitch prompt:** Design a playful handheld-first interface called “Pocket Linux Sidequest Deck.” Open with a pixel-art capability scan showing D-pad, buttons, Wi-Fi, camera, speaker, SSH, and optional sensors. Deal three oversized quest cards such as “Wi-Fi Signal Treasure Hunt,” “Pocket Photo Booth Relay,” and “SSH Room Bell.” Selecting one reveals a 20-minute timer, physical control map, three steps, safety note, and proof-capture slot. Finish with a score burst, remix sliders, and a shareable quest cartridge card. Design direction for the `playful-experimental` profile: chunky handheld-console UI, near-black background, acid-lime and magenta accents, tactile pixel buttons, playful motion, and readable 8-bit-inspired type.

### p007 — Fun / Portfolio / Experimental — ThreeUI Remix Roulette
- **Title:** ThreeUI Remix Roulette
- **One-liner:** Spin three live 3D UI primitives and one constraint, then build a 60-second interactive scene people can remix from a link.
- **Target user:** Frontend designers, creative coders, livestreamers, and portfolio builders.
- **Key UX:** Spin component/behavior/palette/constraint reels → edit a live scene → trigger a reveal → publish a remix chain.
- **Required UI sections:** roulette reels, live 3D stage, property knobs, 60-second timer, constraint card, replay timeline, publish/remix panel.
- **Assigned design profile:** `playful-experimental`
- **Theme:** 외모
- **Source signal references:** S10; S12.
- **Stitch prompt:** Create a visually striking responsive creative toy named “ThreeUI Remix Roulette.” Top area has four slot-machine reels for 3D component, motion behavior, palette, and odd constraint—for example glass card + magnetic cursor + cobalt/coral + “only reveals while scrolling backward.” The center is a live WebGL-style stage with orbit controls and a 60-second countdown. Add four large property knobs, undoable event timeline, applause/reaction burst, and publish panel generating a remix-chain link with parent/child lineage. Design direction for the `playful-experimental` profile: gallery-black canvas, luminous cobalt/coral gradients, glossy 3D controls, kinetic typography, and celebratory but purposeful motion.

### p008 — Fun / Field / Experimental — Rep Failure Haptic Duel
- **Title:** Rep Failure Haptic Duel
- **One-liner:** Two lifters race to maintain clean form while watch haptics and a shared phone screen turn muscle-failure estimates into a short, replayable duel.
- **Target user:** Gym partners using Apple Watch who want a playful set without filming themselves.
- **Key UX:** Pair two watches → calibrate movement → run a 45-second set → show rep quality/fatigue live → trigger haptic comeback windows → share duel recap.
- **Required UI sections:** pairing/calibration, exercise selector, dual live rep lanes, form/fatigue meters, haptic event timeline, safety stop, recap card, rematch.
- **Assigned design profile:** `field-ops`
- **Theme:** 건강
- **Source signal references:** S8; S7 for underused pocket-device play.
- **Stitch prompt:** Design a mobile-first gym companion called “Rep Failure Haptic Duel.” Pair two Apple Watches, choose squat/curl/push-up, and show a quick calibration animation. The live screen has two bold vertical rep lanes, clean-rep counters, form-quality halos, estimated fatigue—not medical certainty—and haptic comeback windows. Include an always-visible safety stop, rest timer, event timeline, and a post-set duel card with consistency, final clean rep, funny title, and rematch button. Avoid body-shaming and leaderboard obsession. Design direction for the `field-ops` profile: high-contrast gym-floor UI, oversized numbers, sweat-proof touch targets, electric blue versus hot orange lanes, and minimal text during the set.

## Candidate mix check
- Practical/commercial: p001–p005 (5)
- Fun/portfolio/non-web/field: p006–p008 (3)
- Exactly one design profile each; prompts contain tailored profile direction; all 8 cite 1–2 raw signals.
