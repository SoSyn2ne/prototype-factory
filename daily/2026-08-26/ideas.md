# Prototype Factory Phase A — 2026-08-26

## Run contract
- Exactly 8 candidates; Phase A only; no custom demos.
- Live sweep captured 2026-08-26 08:00 KST. Tavily search was quota-blocked, so official RSS, GitHub API/Trending, HN Algolia/public threads, Steam, and linked public pages were read directly.
- Mix: 6 practical/commercial + 2 fun/portfolio/non-web.
- Expected Stitch drop: `/home/sy/Downloads/stitch_drop/2026-08-26/` with `p001~p008/code.html` and `screen.png`.

## Search signals / External signals

### Raw signal index (13)
- **S1 — Hada / one-person household operations:** “혼서가” makes stale information fail the build, showing that grants, recycling, contracts, and local living rules become harmful when nobody revalidates them. Observed 2026-08-25 17:35 KST. https://news.hada.io/topic?id=32875
- **S2 — community / offline business:** Ask HN asks what business people would build if they could not use the internet, exposing demand for local-first coordination rather than another SaaS funnel. 2026-08-25. https://news.ycombinator.com/item?id=49438401
- **S3 — Hada / field infrastructure:** “공중화장실은 모두 어디로 사라졌을까?” highlights that urgent public-facility use depends on live opening, locks, queues, and accessibility—not a static map pin. Observed 2026-08-26 04:43 KST. https://news.hada.io/topic?id=32885
- **S4 — Hada / platform dependency:** Nitter halted official service and development after an X Corp. cease-and-desist, showing how a reader/archive workflow can vanish after one legal or API event. Observed 2026-08-26 05:31 KST. https://news.hada.io/topic?id=32886
- **S5 — community / physical calendar:** Ask HN seeks a low-power touchscreen e-paper display larger than 20 inches for a calendar, indicating appetite for persistent shared surfaces rather than phone notifications. 2026-08-25. https://news.ycombinator.com/item?id=49428842
- **S6 — Hada / home-server workflow:** Show GN “homebutler” bundles scattered home-server state and recovery actions into one binary, evidence that individuals keep assembling operator tooling for domestic infrastructure. Observed 2026-08-25 23:30 KST. https://news.hada.io/topic?id=32878
- **C1 — community / habit workaround:** Life Biomes says opening a habit app becomes another habit; its reply-first email loop and collectible creatures reduce that activation cost. 2026-08-25. https://news.ycombinator.com/item?id=49432358
- **C2 — community / voice correction:** Voicecard addresses rambling notes where “grapes—no, apples” leaves both the abandoned and final decision in ordinary transcripts. 2026-08-25. https://news.ycombinator.com/item?id=49431775
- **C3 — community / medical arrival pain:** A pharmacy pulled back an AI phone assistant after complaints; an HN operator reports that anxiety, language, and building-entry confusion—not mere forgetting—drive no-shows, and targeted pre-arrival texts can help. Direct operator comment: https://news.ycombinator.com/item?id=49246842
- **C4 — community / privacy and food operations:** A McDonald’s data request produced a 515-page profile; a former chain developer says most of the work was inventory tracking and reducing unsold food, which does not require customer identity dossiers. Direct operator comment: https://news.ycombinator.com/item?id=49289889
- **C5 — community / kitchen workaround:** Household food-waste discussion says planning helps but maintaining a “kitchen ERP” costs more attention than people will give it. Direct lived-workaround comment: https://news.ycombinator.com/item?id=44695297
- **C7 — community / offline event workflow:** GateProof demonstrates offline-first ticket validation motivated by network failure and guest-list leakage; multi-device duplicate entry is the hard field state. 2026-08-25. https://news.ycombinator.com/item?id=49439006
- **C8 — viral interaction / calibration game:** A confidence game asks players to bet a probability before answering, making overconfidence—not trivia correctness—the 15-second reveal. 2026-08-25. https://news.ycombinator.com/item?id=49441660

Bucket coverage: Hada/news/tech S1, S3, S4, S6; communities/forums S2, S5, C1–C5, C7–C8; niche operator workflows C3–C5, C7; policy/platform shift S4; weird physical behavior S3, S5; viral/game C8 and S13 below. Community requirement met with 9 community-style signals.

## Hada Signals
Front/latest observed via `https://news.hada.io/rss/news` at 2026-08-26 08:00 KST. Hada is used as behavior evidence, not market-size proof.

1. **혼서가 — 정보가 낡으면 빌드가 실패하는 1인가구 생활정보 위키** — https://news.hada.io/topic?id=32875 — behavior signal: local rules need explicit expiry and resident revalidation; used by p004.
2. **공중화장실은 모두 어디로 사라졌을까?** — https://news.hada.io/topic?id=32885 — behavior signal: live physical availability beats static POI data; retained as a raw field signal but not selected after the batch already took two field products.
3. **homebutler** — https://news.hada.io/topic?id=32878 — behavior signal: domestic infrastructure creates operator-grade recovery needs; rejected as too close to recent agent/incident consoles.
4. **Nitter 서비스·개발 중단** — https://news.hada.io/topic?id=32886 — behavior signal: platform-dependent access can disappear abruptly; rejected because recent batches already cover provenance, handoff, and stop-loss.

## GitHub Rising Repo Scan
GitHub Search/Trending observed 2026-08-26 08:00 KST; stars are snapshots, not durable rankings.

1. `MengTo/threeui` — 3,900 stars, live Three.js components; rejected because 08-25 p007 already used it. https://github.com/MengTo/threeui
2. `b-nnett/grok-bot-0.18-reconstructed` — 2,523 stars; rejected as reconstructed product code without a new user pain. https://github.com/b-nnett/grok-bot-0.18-reconstructed
3. `tobi/walgit` — 1,524 stars; insufficient public product context, not used. https://github.com/tobi/walgit
4. `duty1g/x64dbg-mcp-server` — 1,376 stars; rejected because developer-agent tooling is saturated in the last seven batches. https://github.com/duty1g/x64dbg-mcp-server
5. `cclank/lanshu-create-ai-presenter-video` — 910 stars; creator automation interest noted, but rejected without matching lived pain. https://github.com/cclank/lanshu-create-ai-presenter-video
6. `nateherkai/scroll-craft` — 897 stars; production technique rather than a customer problem, not used. https://github.com/nateherkai/scroll-craft
7. `kgoedecke/doop` — 362 stars, multiplayer human/AI design canvas; supports direct co-manipulation rather than passive sharing, secondary interaction reference for p008. https://github.com/kgoedecke/doop
8. `inkboard/system-atlas` — 303 stars, explorable isometric system atlas; rejected because atlas/dashboard output is overused. https://github.com/inkboard/system-atlas
9. `bam-bam-2/solo-skills` — 297 stars, Korean solo-operator automation kit; signal supports one-person operator demand but not used to avoid another automation console. https://github.com/bam-bam-2/solo-skills
10. `bryllim/workout-guide` — 513 stars, open exercise illustrations; rejected because 08-25 p008 already used a workout interaction. https://github.com/bryllim/workout-guide

## Viral Interaction / Game Scan
- **S13 — How to Fish:** Steam’s current most-played chart included the 2026-08-20 release “How to Fish,” a 1–4-player physics fishing simulator. Signal: one-line physical rule, tangled failure, instant retry, and co-op chaos are legible in a short clip. https://store.steampowered.com/app/4001890/How_to_Fish/
- **C8 — confidence calibration game:** bet confidence before answering; the reveal turns a hidden cognitive bias into a social punchline. https://est.alejo.ch/

## Novelty / duplicate check — last 7 PF batches
Reviewed: 2026-08-25, 08-24, 08-21, 08-14, 08-13, 08-12, 08-11.

Rejected near-duplicates:
- Home-server incident console from S6 → rejected because recent agent stop-loss, human escalation, purchase gate, and field consoles already saturate incident/receipt workflows.
- Platform escape packet from S4 → rejected because provenance, handoff, migration, and evidence packets recur heavily.
- Subscription fatigue idea → rejected because 08-12 AI Subscription Proof Ledger and recent price/validation products already cover it.
- Public-toilet map from S3 → rejected after p004 took the freshness mechanic; a second stale-data map would be a renamed atlas.
- Generic habit tracker from C1 → rejected because dashboardless reply logging alone is a small mechanic, not enough product separation.
- Another workout duel from rising repos → rejected because 08-25 p008 already owns wearable fitness play.

Distinctness gate: p001 is an SMS arrival-friction branch, p002 is anonymous batch sizing, p003 is offline multi-device collision haptics, p004 is expiring community knowledge, p005 is wall-based schedule negotiation, p006 is spoken revision confirmation, p007 is probabilistic social calibration, and p008 is motion-sensor physics co-op. None is a renamed dashboard/rescue/planner.

## Candidate provenance and build handoff schema

- **p001** — source_repo: not GitHub-derived; why_starred: not applicable; reference_pattern: pre-arrival SMS triage; twist: asks for the blocker instead of sending a generic reminder; first_screen: tomorrow’s cohort plus one blocker-ping action; share_or_play_loop: patient receives one tiny arrival-help card; plan_brief: test whether five clinic teams resolve real arrival friction without a phone bot; development_start_prompt: use the full p001 Stitch prompt below as the Phase B visual source.
- **p002** — source_repo: not GitHub-derived; why_starred: not applicable; reference_pattern: restaurant prep sheet; twist: anonymous tap counts produce only the next batch range, not a customer profile or kitchen ERP; first_screen: live product rows with sold/waste taps; share_or_play_loop: end-of-shift waste result returns the team tomorrow; plan_brief: test batch decisions with five short-shelf-life food operators; development_start_prompt: use the full p002 Stitch prompt below in Phase B.
- **p003** — source_repo: not GitHub-derived; why_starred: not applicable; reference_pattern: offline ticket scanner; twist: nearby devices exchange spent hashes and resolve collisions through haptics; first_screen: full-screen scanner plus peer-device strip; share_or_play_loop: shift handoff transfers trusted offline state; plan_brief: simulate two gates, duplicate scans, and a network outage; development_start_prompt: use the full p003 Stitch prompt below in Phase B.
- **p004** — source_repo: not GitHub-derived; why_starred: not applicable; reference_pattern: community wiki; twist: every claim expires and conflicting resident rechecks freeze it; first_screen: local question with visible freshness half-life; share_or_play_loop: nearby residents perform two-second rechecks; plan_brief: validate five high-churn local rules with one-person households; development_start_prompt: use the full p004 Stitch prompt below in Phase B.
- **p005** — source_repo: not GitHub-derived; why_starred: not applicable; reference_pattern: shared wall calendar; twist: members trade conflicts with bilateral physical confirmation instead of overwriting events; first_screen: grayscale week plus one expanded conflict ribbon; share_or_play_loop: compatible trade pulls another household member into confirmation; plan_brief: test three real household conflicts on an e-paper-sized surface; development_start_prompt: use the full p005 Stitch prompt below in Phase B.
- **p006** — source_repo: `kenzotp/voicecard`; why_starred: community attention centers on correcting contradictions in spoken notes; reference_pattern: voice transcription; twist: abandoned intent remains visible while only a confirmed final card is shared; first_screen: recorder followed by a revision chain; share_or_play_loop: recipient gets a clean confirmed instruction with optional context; plan_brief: test quantity, object, and deadline revisions with five mobile dictators; development_start_prompt: use the full p006 Stitch prompt below in Phase B.
- **p007** — source_repo: not GitHub-derived; why_starred: not applicable; reference_pattern: trivia confidence calibration; twist: simultaneous probability bets make overconfidence the social reveal; first_screen: claim card plus hidden confidence chips; share_or_play_loop: ten-second vertical miss replay and instant rematch; plan_brief: test 15-second rule comprehension and three-round replayability; development_start_prompt: use the full p007 Stitch prompt below in Phase B.
- **p008** — source_repo: `kgoedecke/doop`; why_starred: rising interest in real-time shared manipulation supports a two-device co-control surface; reference_pattern: physics fishing co-op; twist: phones become rods and line tangles are the desired failure clip; first_screen: pairing QR then dual-line pond; share_or_play_loop: six-second tangle replay and one-tap rematch; plan_brief: validate pairing, safe motion, and funny failure with three pairs; development_start_prompt: use the full p008 Stitch prompt below in Phase B.

## Final candidates

### p001 — Practical / Commercial — Appointment Friction Ping
- **Title:** Appointment Friction Ping
- **One-liner:** Replace a frustrating medical phone bot with one SMS question that routes today’s real arrival blocker to a usable next step.
- **Target user:** Clinics, pharmacies, and high-cost appointment teams serving anxious, multilingual, or first-time visitors.
- **Key UX:** Send “What might stop you today?” → patient taps one blocker → reveal a tiny tailored card for entrance, language, transport, anxiety, or rescheduling → staff sees only unresolved exceptions.
- **Required UI sections:** campaign setup, patient SMS preview, blocker choice sheet, tailored arrival cards, unresolved exception queue, language/accessibility options, privacy and consent state, outcome summary.
- **Assigned design profile:** `calm-consumer`
- **Theme:** 건강
- **Source signal references:** C3.
- **Stitch prompt:** Design a responsive healthcare coordination product called “Appointment Friction Ping.” The first screen shows tomorrow’s appointment cohort and a dominant action to send one respectful SMS: “What might stop you from arriving today?” Create the patient flow with five large choices—finding the entrance, transport, language, anxiety/questions, or need to reschedule—then show a tiny tailored card with map landmark photo, interpreter option, calming arrival script, or two safe reschedule slots. The staff view must show only unresolved exceptions, never a patient surveillance score. Include consent, translation, delivery failure, and privacy states with realistic sample data. Design direction for the `calm-consumer` profile: warm cream canvas, soft teal and sage, reassuring typography, generous spacing, and plain non-judgmental copy.

### p002 — Practical / Commercial — Anonymous Prep Pulse
- **Title:** Anonymous Prep Pulse
- **One-liner:** Help small food shops decide the next prep batch from sales and waste counts without building customer dossiers or running a kitchen ERP.
- **Target user:** Independent bakeries, lunch counters, and market stalls with short shelf-life inventory.
- **Key UX:** Tap sold/wasted quantities at each batch → compare today with matching weather/day patterns → receive one next-batch range → staff accepts or adjusts and sees the consequence.
- **Required UI sections:** shift pulse, item batch rows, sold/wasted tap controls, local context strip, next-batch recommendation, adjustment reason, privacy boundary, end-of-day waste recap.
- **Assigned design profile:** `operator-dense`
- **Theme:** 자산 방어
- **Source signal references:** C4, C5.
- **Stitch prompt:** Create “Anonymous Prep Pulse,” a tablet-first local operations tool for a neighborhood bakery. The first screen is the active shift: six product rows with last batch time, prepared, sold, and wasted counts plus oversized +1 sold and +1 waste controls. After each tap, update a single recommended next-batch range using only anonymous sales, time, weather, and day type; never show customer identities or loyalty profiles. Let the baker accept 12–15 croissants, adjust the range, and choose a reason such as school event, rain, or staff shortage. Add offline state, late data, product sell-out, privacy boundary, and end-of-day waste recap. Design direction for the `operator-dense` profile: compact 40px rows, charcoal and warm-gray surfaces, amber waste signals, mint confirmation, monospaced quantities, and one clear batch action.

### p003 — Practical / Field — Gate Collision Buzz
- **Title:** Gate Collision Buzz
- **One-liner:** Let event crews validate tickets offline and feel duplicate-entry conflicts instantly across nearby staff devices without exposing the guest list.
- **Target user:** Pop-up events, workshops, school festivals, and venues with unreliable connectivity or volunteer staff.
- **Key UX:** Scan signed QR offline → device gives green/amber/red haptic → nearby staff devices exchange compact spent-token hashes → conflicts open a two-person resolution gesture.
- **Required UI sections:** event key setup, scanner, haptic/color states, peer-device strip, collision resolver, offline sync health, privacy explanation, shift handoff.
- **Assigned design profile:** `field-ops`
- **Theme:** 자산 방어
- **Source signal references:** C7, S2.
- **Stitch prompt:** Design a mobile field app named “Gate Collision Buzz” for volunteer event staff working without reliable internet. The scanner must dominate the first screen and return three unmistakable states: short green vibration for valid, double amber for already seen nearby, long red for invalid. Show peer devices as simple nearby dots exchanging only spent-ticket hashes, not a guest list. When two gates scan the same ticket, open a side-by-side resolution gesture requiring staff initials and reason. Include first-device key setup, airplane mode, low battery, clock drift, device lost, post-event sync, and privacy explanation. Design direction for the `field-ops` profile: sunlight-readable white surface, huge scan target, thick outlines, safety orange/red states, glove-friendly controls, and minimal text at the gate.

### p004 — Practical / Commercial / Local — Living Info Freshness Relay
- **Title:** Living Info Freshness Relay
- **One-liner:** Make one-person-household rules useful by expiring stale claims and asking nearby residents for a two-second recheck.
- **Target user:** Korean one-person households repeatedly searching local recycling, housing, subsidy, moving, and utility rules.
- **Key UX:** Search a life question → see answer with expiry and evidence → if confidence decays, nearby residents get a yes/no recheck → conflicting checks pause the answer until an editor resolves it.
- **Required UI sections:** urgent search, local answer card, expiry/confidence meter, evidence link, two-second recheck, conflict state, neighborhood contributor streak, category portal.
- **Assigned design profile:** `calm-consumer`
- **Theme:** 생활
- **Source signal references:** S1.
- **Stitch prompt:** Build a Korean responsive service called “Living Info Freshness Relay” for one-person households. The first screen has an urgent plain-language search—“마포구 이불은 종량제 봉투인가요?”—and returns one concise answer with district, last verified date, source link, and a visible freshness half-life. When confidence drops, show nearby residents a two-second “still true / changed / not sure” recheck; conflicting votes must freeze the answer and display “확인 중” rather than guessing. Include category portals for moving, recycling, utilities, grants, and rental contracts, plus source history and contributor safeguards. Design direction for the `calm-consumer` profile: airy off-white canvas, calm blue and sage, large Korean type, friendly certainty labels, and no bureaucratic dashboard clutter.

### p005 — Practical / Non-web / Commercial — E-Paper Schedule Trade Tile
- **Title:** E-Paper Schedule Trade Tile
- **One-liner:** Turn a shared household calendar into a low-power wall tile where family members trade conflicts instead of silently overwriting events.
- **Target user:** Families, co-parents, roommates, and multi-generational homes coordinating chores, pickups, and private time.
- **Key UX:** Persistent wall display surfaces one conflict → each person taps keep/move/trade on their color puck → compatible swaps appear → both sides confirm with a physical press.
- **Required UI sections:** weekly e-paper board, conflict ribbon, household member pucks, trade proposals, quiet-hours state, confirmation receipt, offline sync, accessibility settings.
- **Assigned design profile:** `premium-editorial`
- **Theme:** 관계
- **Source signal references:** S5, S2.
- **Stitch prompt:** Design the interface for a 24-inch grayscale touchscreen e-paper product called “E-Paper Schedule Trade Tile.” Show a quiet weekly household calendar that persists on the wall for weeks. One conflict ribbon—two pickups at 18:00—should expand into physical-feeling choices: keep, move, or offer a trade. Each household member has a tactile color-pattern puck; the system proposes compatible swaps and requires both people to press confirm, never silently overwriting an event. Include privacy mode, quiet hours, offline household sync, low-battery state, color-blind patterns, and a phone companion preview. Design direction for the `premium-editorial` profile: paper-white and graphite, elegant serif headlines with crisp sans labels, generous margins, hairline rules, subtle embossed controls, and one muted cobalt action.

### p006 — Practical / Commercial / Portfolio — Voice Revision Cards
- **Title:** Voice Revision Cards
- **One-liner:** Turn a rambling voice note into visible mind-changes and let the speaker confirm only the final intent before sharing.
- **Target user:** Founders, caregivers, field managers, and creators who dictate instructions while moving.
- **Key UX:** Record freely → transcript groups statements into revision chains → abandoned clauses remain struck through, not deleted → speaker taps the final card → share only confirmed intent with optional context.
- **Required UI sections:** record view, live transcript, revision chain, contradiction compare, final-intent cards, ambiguity flag, confirmation gesture, share preview.
- **Assigned design profile:** `premium-editorial`
- **Theme:** 생산성
- **Source signal references:** C2, C1.
- **Stitch prompt:** Create a mobile-first voice product named “Voice Revision Cards.” Start with a generous record button and a realistic note: “Order grapes—no, apples—and make it six… actually eight.” After recording, reveal a beautiful transcript where revisions are linked in a vertical chain: abandoned phrases remain lightly struck through, changed quantities compare side by side, and unresolved ambiguity is amber. The user must tap a final-intent card before sharing; preview exactly what the recipient will see, with optional original audio context. Include background noise, two speakers, accidental stop, no contradiction, and private local-processing states. Design direction for the `premium-editorial` profile: warm paper background, ink typography, oxblood revision marks, refined cards, restrained motion, and a single deep-blue confirmation action.

### p007 — Fun / Portfolio / Experimental — Confidence Chip Showdown
- **Title:** Confidence Chip Showdown
- **One-liner:** Friends bet confidence before answering, then replay the funniest high-confidence miss as a ten-second share card.
- **Target user:** Friends, classrooms, livestreamers, and teams who want a fast social calibration game.
- **Key UX:** Read a claim → secretly slide 0–100 confidence chips before answering → reveal all bets and truth at once → biggest calibrated win or overconfident miss gets an animated recap → rematch in ten seconds.
- **Required UI sections:** room join, claim card, confidence slider/chips, simultaneous reveal, calibration score, animated miss replay, audience reaction, rematch/share.
- **Assigned design profile:** `playful-experimental`
- **Theme:** 재미
- **Source signal references:** C8.
- **Stitch prompt:** Design a bold party game called “Confidence Chip Showdown.” A room of four players sees one claim and must secretly drag neon confidence chips from 0% to 100% before choosing true or false. The reveal should explode simultaneously: answers, wagers, truth, and a calibration curve. Make the funniest moment the person who bet 98% and missed; auto-compose a ten-second vertical replay card with their chosen nickname, confidence meter, reveal snap, and crowd reaction. Include classroom-safe mode, spectator emojis, streaks based on calibration rather than raw trivia, and a rematch button available within ten seconds. Design direction for the `playful-experimental` profile: midnight canvas, electric yellow and violet chips, oversized kinetic numbers, elastic motion, comic sound cues, and clip-ready vertical composition.

### p008 — Fun / Non-web / Experimental — Pocket Cast Crash
- **Title:** Pocket Cast Crash
- **One-liner:** Use two phones as motion-sensing fishing rods in a 60-second couch co-op where tangled casts make the best replay.
- **Target user:** Couples, families, parties, and streamers wanting instant physical play with no controllers.
- **Key UX:** Pair two phones → calibrate a safe wrist flick → cast toward a shared TV/browser water surface → lines collide, knot, or hook strange objects → failure becomes a short replay → instant retry.
- **Required UI sections:** phone pairing, safety calibration, shared water stage, dual tension meters, cast/hook feedback, tangle physics, odd catch reveal, replay/rematch.
- **Assigned design profile:** `playful-experimental`
- **Theme:** 재미
- **Source signal references:** S13; GitHub rising `kgoedecke/doop` as co-manipulation reference.
- **Stitch prompt:** Create a responsive shared-screen game named “Pocket Cast Crash.” Two players pair phones by scanning a room QR, hold them like fishing rods, and complete a safe wrist-flick calibration. The TV/browser shows a stylized pond, two elastic lines, live tension, and a 60-second timer. Players cast, reel, and accidentally tangle; catches include a giant fish, boot, traffic cone, or each other’s line. Make knots and failed pulls funny, readable, and automatically framed into a six-second replay with a one-tap rematch. Include solo practice, left-handed mode, motion sensitivity, safety boundary, disconnect recovery, and spectator reactions. Design direction for the `playful-experimental` profile: saturated aqua and coral, chunky physics shapes, rubbery motion, bold arcade typography, and playful split-screen phone states.

## Candidate mix check
- Practical/commercial: p001–p006 (6)
- Fun/portfolio/non-web/field: p007–p008 (2); p003 and p005 also broaden the batch with field/non-web interactions.
- Exactly one design profile each; all prompts include tailored profile direction; all 8 cite 1–2 raw signals.
