# Prototype Factory Phase A — 2026-09-02

## Search signals / External signals

Web evidence is treated as problem evidence, not market-size proof. Search observed 2026-09-02 KST.

- **S1 — community / warranty anxiety:** Small-business posters ask whether wiring a 50% deposit to an overseas OEM is safe after hearing about non-delivery litigation; purchase proof and promises are scattered. https://www.reddit.com/r/smallbusiness
- **S2 — operator workflow / repair leakage:** Appliance-repair technicians often forget to log small van-stock parts, causing inventory drift and under-billed jobs. https://myquoteiq.com/best-inventory-management-software-appliance-repair-2026
- **S3 — community / creator scam anxiety:** Small creators repeatedly ask whether unsolicited collaboration and copyright-claim emails are scams before sharing details. https://www.reddit.com/r/NewTubers/comments/1knbddr/some_company_called_head_is_sending_me_emails and https://www.reddit.com/r/PartneredYoutube/comments/1n3wtpx/is_this_a_scam_email_for_copyright_claim
- **S4 — policy / cancellation UX:** Korea's dark-pattern rules put subscription pricing and cancellation flows under stronger scrutiny. https://koreabusinesshub.kr/blog/korea-dark-pattern-rules-2026-ecommerce-compliance
- **S5 — policy / platform power:** Korea's proposed platform fairness rules focus on settlement, self-preferencing, tying, and excessive platform fees affecting small sellers. https://www.csis.org/analysis/south-koreas-new-digital-competition-bill-step-backward-innovation-and-investment
- **S6 — community / neighborhood recession:** A Korea community post describes independent neighborhood shops closing in succession and asks what is happening. https://www.reddit.com/r/Living_in_Korea/comments/1k7dedl/what_is_happening_to_korea
- **S7 — community / host pricing regret:** A solopreneur thread describes hosts selling a festival weekend for $200 when local demand could support $500 because checking events manually is exhausting. https://www.reddit.com/r/Solopreneur/comments/1rs48n8/what_are_you_building_right_now_drop_your_project
- **S8 — operator workflow / fragmented stack:** SMB teams report duct-taping five or more SaaS tools and losing time at manual handoffs. https://www.reddit.com/r/startups/comments/1qa653y/share_your_startup_quarterly_post
- **S9 — market / inventory timing:** Spreadsheet and disconnected-app inventory creates stockouts, overstock, delayed shipments, and rushed purchases. https://www.mrpeasy.com/blog/best-inventory-management-systems
- **S10 — consumer behavior / pretend shopping:** A community post describes Korean fake shopping and food-delivery experiences where users fill carts and track a delivery but nothing ships. https://www.reddit.com/r/shoppingaddiction/comments/1u0fv4h/new_trend_south_korea_invented_fake_shopping
- **S11 — tech / multimodal learning:** Learn Your Way reframes static material into audio, quizzes, maps, and alternate representations selected by the learner. https://news.hada.io/topic?id=23178
- **S12 — market / polarized spending:** Korean consumers are reportedly frugal on essentials while spending boldly on selected experiences, making intent and emotional trigger more useful than a generic budget total. https://koreatechtoday.com/south-koreas-fragmented-consumers-are-changing-how-brands-use-ai

## Community roaming notes

Community sources contributed S1, S3, S6, S7, S8, and S10. Repeated lived pains: fear of paying the wrong counterparty, embarrassment about falling for creator scams, invisible small-part revenue leakage, regret after underpricing a high-demand date, and using pretend carts as a workaround for shopping urges.

## Hada Signals

Observed 2026-09-02 08:00 KST via the latest searchable `news.hada.io` surface.

- **Learn Your Way: 생성형 AI로 교과서를 재구성하기** — https://news.hada.io/topic?id=23178 — behavior signal: people increasingly expect the same source material to become audio, quiz, map, and interactive representations they can manipulate.
- **업무별 AI 도구 선택 가이드** — https://news.hada.io/topic?id=31966 — behavior signal: users compare tools by concrete job capability and modality, not by one universal model ranking.
- **Apple, Mac mini와 Mac Studio의 예상 밖 AI 수요** — https://news.hada.io/topic?id=33085 — behavior signal: local/private AI workloads are changing hardware purchase decisions beyond traditional creative-professional demand.

Only S11 from Hada feeds a final candidate so this lane does not dominate the batch.

## GitHub Rising Repo Scan

Scan criterion: GitHub weekly/monthly trending pages observed 2026-09-02 08:00 KST; stars are snapshot evidence from search snippets, not audited lifetime growth.

1. `apache/maka` — 3,257 stars this month; append-only agent logs suggest evidence-led work replay.
2. `modular/modular` — 2,825 stars this month; high-performance local compute suggests smaller-device interaction opportunities.
3. `cactus-compute/needle` — 6,450 stars this month; a 14MB tiny-device model suggests offline field intelligence.
4. `volcengine/OpenViking` — 11,902 stars this month; unified context and memory suggests provenance-aware workspaces.
5. `earendil-works/pi` — 18,925 stars this month; unified agent tooling suggests operator-facing action lanes.
6. `omacom/omarchy` — 6,475 stars this week; opinionated setup suggests guided defaults can beat configuration breadth.
7. `tinyhumansai/openhuman` — 2,434 stars this week; local-first personal memory suggests consumer-owned records.
8. `K-Dense-AI/scientific-agent-skills` — 3,642 stars this week in the observed result; validated skill packs suggest bounded expert workflows.
9. `livekit/agents` — 13,216 total stars and 14 stars today in the observed result; realtime audio suggests direct sound interaction.
10. `Yuan-ManX/audio-ai-agent` — curated speech/music/sound projects; multimodal audio suggests playful sound transformation.

Translation, not copying: p001 borrows append-only provenance, p002 action lanes, p003 tiny-device/offline constraints, and p008 realtime audio manipulation. The remaining ideas come from community, policy, and field signals.

## Novelty / duplicate check

Checked the seven most recent available PF batches: 2026-08-21, 08-24, 08-25, 08-26, 08-27, and 2026-09-01, plus 2026-08-14 as the seventh available batch. Rejected a generic warranty tracker, generic scam detector, inventory dashboard, cancellation checklist, vacancy map, dynamic-pricing dashboard, budgeting app, and audio quiz. Accepted concepts change the trigger and core interaction: failure-time proof packet; sender-claim verification lanes; one-thumb consumed-part capture; signup/cancel replay diff; street-walk vacancy sequence; event-window evidence strip; non-purchasing emotional cart ritual; and collaborative sound-to-creature construction.

Mix: six practical/commercial/field concepts (`p001`–`p006`) and two fun/portfolio/experimental concepts (`p007`–`p008`). Exactly one PF design profile per candidate.

## Candidate schema / Phase B handoff

- **p001:** source_repo: `apache/maka`; why_starred: append-only logs make proof replay legible; reference_pattern: warranty wallet; twist: quoted promises become failure-time evidence pins; first_screen: Save purchase proof camera; share_or_play_loop: exportable claim packet; plan_brief: test whether capture-at-purchase reduces claim abandonment; development_start_prompt: use the full p001 Stitch prompt below.
- **p002:** source_repo: `earendil-works/pi`; why_starred: multiple tools/actions need visible boundaries; reference_pattern: investigation board; twist: independently verify six sponsorship claims before risky actions unlock; first_screen: suspicious offer split into claim lanes; share_or_play_loop: manager-ready verification receipt; plan_brief: reduce creator scam exposure without false safe verdicts; development_start_prompt: use the full p002 Stitch prompt below.
- **p003:** source_repo: `cactus-compute/needle`; why_starred: tiny-device local execution fits unreliable field conditions; reference_pattern: job closeout sheet; twist: one-thumb part capture changes both stock and invoice; first_screen: active repair plus five likely parts; share_or_play_loop: replenishment handoff; plan_brief: recover under-billed small parts; development_start_prompt: use the full p003 Stitch prompt below.
- **p004:** source_repo: not GitHub-derived; why_starred: not applicable; reference_pattern: side-by-side replay; twist: align equivalent signup and cancellation decisions as evidence; first_screen: synchronized flow timelines; share_or_play_loop: public truth sheet; plan_brief: make cancellation friction inspectable without automated legal claims; development_start_prompt: use the full p004 Stitch prompt below.
- **p005:** source_repo: not GitHub-derived; why_starred: not applicable; reference_pattern: street survey; twist: storefront state becomes a privacy-cropped walk sequence instead of a generic vacancy map; first_screen: one-block walk recorder; share_or_play_loop: block brief; plan_brief: test local opportunity discovery from visible change; development_start_prompt: use the full p005 Stitch prompt below.
- **p006:** source_repo: not GitHub-derived; why_starred: not applicable; reference_pattern: revenue-management calendar; twist: bounded event windows require source evidence and a human reason; first_screen: 12-week event strip; share_or_play_loop: host decision review; plan_brief: reduce underpricing regret without opaque surge automation; development_start_prompt: use the full p006 Stitch prompt below.
- **p007:** source_repo: not GitHub-derived; why_starred: not applicable; reference_pattern: pretend shop; twist: checkout never charges and resolves into emotional intent; first_screen: fantasy storefront with zero-charge cart; share_or_play_loop: saved-money postcard; plan_brief: test whether play creates a shame-free impulse pause; development_start_prompt: use the full p007 Stitch prompt below.
- **p008:** source_repo: `livekit/agents`; why_starred: realtime audio interaction is increasingly accessible; reference_pattern: blind-box mixing toy; twist: three sound knobs hatch a reactive creature friends identify; first_screen: three sealed capsules and Cook lever; share_or_play_loop: guessing clip and rematch; plan_brief: validate a ten-second audio party loop; development_start_prompt: use the full p008 Stitch prompt below.

## p001 — Practical / Commercial — Warranty Pocket Proof

- **Title:** Warranty Pocket Proof
- **One-liner:** Capture the exact product, seller, serial, promise, and receipt at purchase so a failure becomes a ready claim instead of a document hunt.
- **Target user:** Households and microbusinesses buying appliances, tools, or imported equipment with fragmented warranty terms.
- **Key UX:** Photograph the label and receipt, pin seller promises as quoted evidence, then switch to failure mode for a step-by-step claim packet.
- **Required UI sections:** proof capture; serial/receipt extractor; promise pins; warranty clock; failure triage; claim packet; outcome log.
- **Assigned design profile:** `calm-consumer`
- **Theme:** 자산 방어
- **Source signal references:** S1, S2
- **Copy/paste-ready Stitch prompt:**

```text
Design a Korean mobile-first product called “Warranty Pocket Proof” for households and microbusinesses buying appliances, tools, and imported equipment. The first screen is a large “Save purchase proof” camera action beside one example appliance with seller, serial number, paid amount, warranty end date, and a quoted promise pinned to its source message. After a failure, switch into a guided claim mode: choose symptom, show the exact applicable promise, assemble receipt/serial/photos/contact timeline, and export a dated claim packet without inventing legal conclusions. Required sections: proof capture, serial and receipt extractor, promise pins, warranty clock, failure triage, claim packet, outcome log. Include unreadable receipt, missing serial, seller mismatch, expired warranty, partial refund, repaired, and rejected states. Design direction for the calm-consumer profile: warm ivory canvas, soft sage structure, one clear cobalt action, 12px rounded cards, large Korean type, reassuring evidence labels, and no generic finance dashboard.
```

## p002 — Practical / Commercial — Creator Offer Triage

- **Title:** Creator Offer Triage
- **One-liner:** Verify each claim in a sponsorship email before a creator opens files, shares identity data, or accepts payment terms.
- **Target user:** Small YouTubers, streamers, newsletter writers, and managers receiving unfamiliar brand offers.
- **Key UX:** Split an offer into sender, brand, link/file, deliverable, rights, and payment claims; verify each independently and gate risky next actions.
- **Required UI sections:** offer inbox; claim lanes; sender/domain evidence; file/link quarantine; rights and payment terms; next-action gate; verification receipt.
- **Assigned design profile:** `operator-dense`
- **Theme:** 안전
- **Source signal references:** S3, S8
- **Copy/paste-ready Stitch prompt:**

```text
Create a responsive creator-security workspace named “Creator Offer Triage.” Open with one suspicious collaboration email decomposed into six claim lanes: sender identity, brand relationship, destination link, attached file, requested deliverable/usage rights, and payment method. Each lane must show evidence, unknowns, and a manual verification action such as checking the brand’s official contact page or requesting a clean brief; never label an offer safe from one score. Gate opening attachments, sharing identity documents, and sending bank details until the relevant claims are verified. Required sections: offer inbox, claim lanes, sender/domain evidence, file and link quarantine, rights/payment terms, next-action gate, verification receipt. Include spoofed domain, newly registered sender, legitimate agency, password archive, vague perpetual rights, crypto payment, and inconclusive states. Design direction for the operator-dense profile: compact graphite workbench, one electric-blue action accent, 8px bordered rows, monospace domains and dates, crisp evidence chips, and no hacker neon or generic risk gauge.
```

## p003 — Practical / Commercial / Field — Van Stock Whisper

- **Title:** Van Stock Whisper
- **One-liner:** Record every tiny consumed repair part in one thumb tap before it disappears from stock and the invoice.
- **Target user:** Appliance, HVAC, plumbing, and electrical technicians working from vehicle inventory.
- **Key UX:** At job close, the technician taps recent/likely parts, confirms quantity by haptic stepper, and sees invoice and van-stock impact before signing.
- **Required UI sections:** active job; likely-parts strip; one-thumb quantity capture; van stock delta; invoice delta; exception drawer; replenishment handoff.
- **Assigned design profile:** `field-ops`
- **Theme:** 수익 방어
- **Source signal references:** S2, S9
- **Copy/paste-ready Stitch prompt:**

```text
Design a sunlight-readable mobile field app called “Van Stock Whisper” for appliance and HVAC technicians. The first screen is the active job closeout with five large likely-part tiles—capacitor, gasket, belt, fuse, connector—ranked from the repair code and van stock. A technician records a part with one thumb tap, adjusts quantity using a haptic stepper, and immediately sees both van-stock and invoice deltas before customer sign-off. Required sections: active job, likely-parts strip, one-thumb quantity capture, van stock delta, invoice delta, exception drawer, replenishment handoff. Include gloves, no signal, unknown part, substitute part, zero stock, accidental double tap, warranty-covered part, and sync-conflict states. Design direction for the field-ops profile: bright white work surface, deep navy text, one safety-orange action, 52px glove-friendly controls, high-contrast quantities, persistent offline badge, and no tiny ERP tables.
```

## p004 — Practical / Commercial / Korea — Cancellation Truth Sheet

- **Title:** Cancellation Truth Sheet
- **One-liner:** Replay signup and cancellation side by side to expose extra steps, hidden wording, and delayed consequences as evidence.
- **Target user:** Korean subscription operators, UX/compliance teams, consumer advocates, and journalists.
- **Key UX:** Record both paths as timed taps, align equivalent decisions, annotate friction, and export a sourced before/after truth sheet.
- **Required UI sections:** flow recorder; signup timeline; cancellation timeline; aligned step diff; wording evidence; consequence clock; export sheet.
- **Assigned design profile:** `premium-editorial`
- **Theme:** 소비자 보호
- **Source signal references:** S4, S5
- **Copy/paste-ready Stitch prompt:**

```text
Design a desktop-first Korean evidence product named “Cancellation Truth Sheet.” The first screen displays a subscription signup replay and cancellation replay in two synchronized vertical timelines: taps, elapsed seconds, required fields, confirmation wording, retention offers, effective cancellation date, and refund consequence. Let an operator align equivalent decisions, attach screenshots and URLs, mark observations versus legal questions, and export a dated truth sheet; do not issue automated legal verdicts. Required sections: flow recorder, signup timeline, cancellation timeline, aligned step diff, wording evidence, consequence clock, export sheet. Include login loop, hidden menu, pause offer, delayed cancellation, partial refund, confirmation missing, changed flow, and clean parity states. Design direction for the premium-editorial profile: warm paper canvas, ink-black typography, oxblood annotations, one restrained cobalt action, generous reading margins, hairline evidence rules, and no glossy compliance dashboard.
```

## p005 — Practical / Commercial / Korea — Neighborhood Vacancy Pulse

- **Title:** Neighborhood Vacancy Pulse
- **One-liner:** Turn a walk past closing and opening storefronts into a dated street sequence that reveals usable local gaps.
- **Target user:** Korean would-be shop owners, commercial landlords, local business groups, and neighborhood reporters.
- **Key UX:** Walk a block, capture storefront status and frontage clues, then replay openings, closures, and temporary uses along the actual street.
- **Required UI sections:** walk recorder; storefront capture; consent/privacy crop; street sequence; change timeline; gap hypotheses; shareable block brief.
- **Assigned design profile:** `calm-consumer`
- **Theme:** 지역 상권
- **Source signal references:** S6, S12
- **Copy/paste-ready Stitch prompt:**

```text
Create a Korean mobile-first field discovery product called “Neighborhood Vacancy Pulse.” Start with a one-block walk recorder that lets a user photograph only storefront frontage, crop people and plates, and tag open, closing, vacant, remodeling, pop-up, or unknown. Reassemble observations into a walkable street sequence with dated change history, rent/contact evidence when publicly posted, nearby category mix, and small “gap hypothesis” cards that remain explicitly speculative. Required sections: walk recorder, storefront capture, privacy crop, street sequence, change timeline, gap hypotheses, shareable block brief. Include stale observation, duplicate storefront, temporary closure, hidden sign, privacy blur failure, reopened shop, and conflicting reports. Design direction for the calm-consumer profile: soft stone and sage map surfaces, one coral capture action, 12px friendly cards, large Korean labels, photo-led progressive disclosure, and no speculative property-price heatmap.
```

## p006 — Practical / Commercial — Local Event Price Window

- **Title:** Local Event Price Window
- **One-liner:** Show independent hosts the specific weekends where local events change demand and make a human price decision worth reviewing.
- **Target user:** Small accommodation hosts managing one to ten rooms without a revenue manager.
- **Key UX:** Merge local event calendars and nearby availability into weekend strips, show evidence and uncertainty, then let the host accept or reject a price window with a reason.
- **Required UI sections:** property baseline; event calendar strip; nearby availability evidence; price-window card; reasoned decision; guest fairness guardrail; result review.
- **Assigned design profile:** `financial-analyst`
- **Theme:** 매출 최적화
- **Source signal references:** S7, S12
- **Copy/paste-ready Stitch prompt:**

```text
Design a responsive hospitality decision tool called “Local Event Price Window” for independent hosts with one to ten rooms. The first screen is a 12-week strip where concerts, sports, graduations, festivals, and nearby sell-out signals create clearly bounded demand windows. Selecting a weekend shows source links, distance, expected attendance range, nearby room availability snapshots, the property’s normal rate, and a suggested review band—not an automatic price. Let the host accept, reject, or cap the change with a reason and show guest-fairness guardrails. Required sections: property baseline, event calendar strip, nearby availability evidence, price-window card, reasoned decision, fairness guardrail, result review. Include canceled event, duplicate event, weak signal, already booked, minimum-stay conflict, capped increase, and missed-window states. Design direction for the financial-analyst profile: off-white ledger, navy structure, one emerald action accent, tabular nightly-rate deltas, explicit confidence ranges, 8px cards, and no casino-like surge pricing visuals.
```

## p007 — Fun / Portfolio / Experimental — Fake Cart Detox

- **Title:** Fake Cart Detox
- **One-liner:** Browse and fill a beautiful cart that never charges, then reveal which feeling each item was hired to create.
- **Target user:** Impulse shoppers, students, and friends who want a playful pause without a shame-heavy budget app.
- **Key UX:** Add fantasy items, watch a pretend delivery journey, then sort each item into comfort, status, boredom, utility, or gift before the cart dissolves.
- **Required UI sections:** fantasy storefront; zero-charge cart; emotion tags; pretend delivery; reveal ritual; shareable saved-money postcard; replay.
- **Assigned design profile:** `playful-experimental`
- **Theme:** 충동 소비 실험
- **Source signal references:** S10, S12
- **Copy/paste-ready Stitch prompt:**

```text
Create a mobile-first playful experience called “Fake Cart Detox.” The one-line rule is: shop as extravagantly as you want, but checkout costs zero and every item must reveal the feeling it was meant to buy. Begin with a lush fictional storefront, let users add absurd-but-believable products, then press a clearly labeled “Pretend checkout—no payment” button. Animate a 20-second fake delivery journey before asking the user to drag each item into comfort, status, boredom, utility, or gift; the cart then dissolves into a shareable postcard showing what they did not spend without moralizing. Required sections: fantasy storefront, zero-charge cart, emotion tags, pretend delivery, reveal ritual, saved-money postcard, replay. Include empty cart, status-heavy cart, mixed motive, real-need bookmark, accessibility reduced motion, and instant restart states. Design direction for the playful-experimental profile: glossy midnight storefront, hot-pink and citrus accents, 14px chunky product cards, tactile drag physics, celebratory fake-delivery motion, and no bank-account connection or shame score.
```

## p008 — Fun / Portfolio / Experimental — Blind Box Sound Kitchen

- **Title:** Blind Box Sound Kitchen
- **One-liner:** Mix three mystery sounds into a ten-second creature and challenge friends to guess what made it.
- **Target user:** Friend groups, classrooms, streamers, and short-form creators wanting an instantly understandable audio toy.
- **Key UX:** Pick three sealed sound capsules, adjust pitch/rhythm/texture with physical knobs, hatch a creature whose motion follows the mix, then share a guessing clip.
- **Required UI sections:** sound capsules; three-knob mixer; creature hatch; ten-second performance; friend guess panel; ingredient reveal; rematch.
- **Assigned design profile:** `playful-experimental`
- **Theme:** 소리 놀이
- **Source signal references:** S11, S10
- **Copy/paste-ready Stitch prompt:**

```text
Design a responsive audio party toy called “Blind Box Sound Kitchen.” The one-line rule is: open three mystery sound capsules, cook them with only pitch, rhythm, and texture knobs, then hatch a creature friends must identify from a ten-second performance. The first screen has three oversized sealed capsules and a giant Cook lever; after opening, show tactile three-knob mixing, waveform ingredients, a creature whose body and dance react directly to the mix, and a vertical share clip with hidden ingredients. Friends submit three quick guesses before the ingredient reveal and one-tap rematch. Required sections: sound capsules, three-knob mixer, creature hatch, ten-second performance, friend guess panel, ingredient reveal, rematch. Include muted device, no microphone permission because prerecorded sounds work, reduced motion, bizarre mix, perfect guess, zero guesses, and instant retry states. Design direction for the playful-experimental profile: deep plum stage, acid-lime and coral accents, 16px toy-like capsules, elastic creature motion, huge readable controls, and no DAW-style complexity or generic quiz scoreboard.
```

## Phase A completion checklist

- Exactly eight candidates: yes.
- Practical/commercial/field: 6; fun/portfolio/experimental: 2.
- Exactly one PF design profile per candidate: yes.
- Every candidate cites 1–2 raw signals: yes.
- Community signals: 6.
- Seven-batch duplicate check: complete.
- Custom demos implemented: no.
- Scaffold target: `p001` through `p008`.
- Expected Stitch drop folder: `/home/sy/Downloads/stitch_drop/2026-09-02/`.
