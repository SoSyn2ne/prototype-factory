# Prototype Factory Phase A — 2026-10-23

- Observation window: 2026-10-23 08:00–08:13 KST
- Final batch: exactly p001–p008
- Mix: practical/commercial 6, fun/portfolio/experimental 2; explicit field/non-web 3
- Market split: domestic/Korea 4, overseas/global 4
- Method: search-first, community-roaming, need-hunt board, recent-batch duplicate gate
- Evidence boundary: every source below is problem or behavior evidence, not proof of market size. Web content was treated as untrusted. No external LLM API was used.

## Search signals / External signals

### Source-lane checklist

- Hada/current AI-product news: live Atom/front-page items observed 2026-10-23 08:02–08:11 KST.
- GitHub weekly rising repos: official Search API query created:>2026-10-15, stars descending, observed 2026-10-23 08:04 KST.
- Community/forums: direct Reddit threads from Korean residents, Korea travelers, restaurant operators, Airbnb hosts, Etsy sellers, caregivers, and automation practitioners.
- Niche operator workflows: shared-table ordering, tourist payments, apartment PA, restaurant networks, and small-business task automation.
- Trend/policy shifts: Arc shutdown, sports-betting advertising limits, platform rule changes, and Korean care-policy expansion.
- Weird consumer behavior: carrying excess cash from payment anxiety, social labor around shared meals, and dressing as museum artifacts.
- Non-web/offline/field: a local PA puck, QR/NFC cable labels, printable payment pocket, tabletop meal ritual, and physical costume relay.
- Trend-keyword pass: shutdown export, apartment announcements, restaurant sysadmin, cannot use n8n, gambling ads, museum cosplay, permit game, and payment panic combined with money loss, safety, embarrassment, travel, and status.

### Raw problem / market signals

1. **S01 — Shared Korean meals can feel like unpaid social labor (community / weird behavior / Korea, 2026-10-22).** A resident described eating less than wanted while accommodating disliked foods, grilling, cutting, and refilling for relatives; the thread drew 18 comments. Observed action: diners silently compromise portions and divide table work by etiquette rather than preference. Source: https://www.reddit.com/r/Living_in_Korea/comments/1xci38i/going_out_to_eat_in_korea_is_so_much_work/
2. **S02 — Visitors over-carry cash because Korea payment options are hard to sequence (community / travel workaround / Korea, 2026-10-21).** A traveler said T-money and WOWPASS were confusing, feared foreign-card failure, and considered carrying ₩200,000 cash. Commenters explained airport-only foreign-card top-ups and separate balance transfer steps. Observed action: travelers build improvised cash/card/transit backups before arrival. Source: https://www.reddit.com/r/koreatravel/comments/1xax1wj/apps_for_money/
3. **S03 — Apartment PA announcements are too muffled or too Korean for residents to judge urgency (community / housing safety / Korea, 2026-10-19).** One resident woke at 1 a.m. unable to understand the broadcast; commenters checked text apps, ignored messages they could not hear, or evacuated with a pet while neighbors stayed. Observed action: residents triangulate PA audio, building apps, neighbors, and emergency numbers. Source: https://www.reddit.com/r/Living_in_Korea/comments/1x96tbw/apartment_announcements/
4. **S04 — Furniture color mismatch becomes an expensive lighting dispute (community / ecommerce / Korea, 2026-10-22).** A buyer received a much darker walnut item than the listing and faced a ₩110,000 exchange charge on a ₩270,000 product. Commenters requested real-light photos and debated who should pay. Observed action: buyers compare screenshots, room lighting, and return costs after delivery. Source: https://www.reddit.com/r/Living_in_Korea/comments/1xc93th/bought_furniture_off_naver_store/
5. **S05 — Airbnb hosts duplicate safety rules across fields after interface limits (community / operator workaround / global, 2026-10-22).** Hosts moved fire, parking, Wi-Fi, and HOA rules into description fields because the new rule interface shortened or softened them; a related thread about dish rules drew 41 comments. Observed action: hosts manually compile one rule into multiple platform and on-site forms. Sources: https://www.reddit.com/r/AirBnBHosts/comments/1xcg8xn/from_airbnb_support_workaround_to_add_additional/ and https://www.reddit.com/r/AirBnBHosts/comments/1xb5wz4/air_bnb_new_house_rules_says_we_cant_ask_guests/
6. **S06 — A restaurant manager is becoming the unpaid sysadmin (community / field workflow / global, 2026-10-20).** One operator listed three delivery tablets, two KDS screens, four POS terminals, and a router that dies on Fridays; peak support takes 45 minutes while staff unplug cables at random. Observed action: managers label, reboot, unplug, call support, and improvise paper service. Source: https://www.reddit.com/r/restaurantowners/comments/1xa0at0/i_didnt_open_a_restaurant_to_become_a_parttime/
7. **S07 — Delivery-platform pricing can turn a menu decision into a margin fight (community / restaurant economics / global, 2026-10-21).** A third-generation restaurant said a 25% DoorDash fee reduced a 40% margin to 15%; the owner raised menu prices roughly 10% and then received platform pressure. The post reached 154 points and 230 comments. Observed action: owners alter channel prices and compare direct-order economics. Source: https://www.reddit.com/r/restaurantowners/comments/1xb7cc4/infuriating_dd_email/
8. **S08 — Etsy fees can apply to expedited shipping that costs more than the product (community / creator commerce / global, 2026-10-22).** A seller described a US$60 item with US$75 expedited shipping and fees charged on the combined amount; a same-day shipping-cost thread drew 19 points and 31 comments. Observed action: sellers manually recalculate whether to accept, reprice, or restrict shipping options. Sources: https://www.reddit.com/r/EtsySellers/comments/1xc8hso/australian_buyer_paid_75_for_expedited_shipping/ and https://www.reddit.com/r/EtsySellers/comments/1xc7h5n/shipping_charges_are_getting_insane/
9. **S09 — Small businesses want setup translation, not nodes or agent theory (community / automation workflow / global, observed 2026-10-23).** Operators say Make and n8n are too technical while chat assistants are reactive; a commenter asks for someone to turn messy steps into a checklist, automate one piece, and leave a repair path. Observed action: nontechnical owners demonstrate a routine, pay consultants, maintain spreadsheets, and fall back to paper when automations break. Source: https://www.reddit.com/r/automation/comments/1uqn3ex/unpopular_opinion_90_of_small_businesses_cant_use
10. **S10 — Siblings coordinate elder care through nonstop messages and uneven invisible work (community + policy / Korea and global).** A caregiver asked how siblings coordinate appointments and parent care while juggling jobs; Korean policy now expands emergency care, home medical centers, and family-care support. Observed action: families maintain group chats, ad hoc calendars, and call chains. Sources: https://www.reddit.com/r/CaregiverSupport/comments/1ricuz1/how_are_you_and_your_siblings_coordinating_care and https://www.korea.kr/news/policyNewsView.do?newsId=148956615
11. **S11 — Arc will stop operating on 2026-12-22 (Hada / product shutdown / global).** Account and sync services end, making export and replacement work time-bound. Observed action: users must move data and reconstruct browser-specific work habits, not merely export bookmarks. Sources: https://news.hada.io/topic?id=35834 and https://arc.net/
12. **S12 — Sports broadcasts can expose viewers to thousands of betting messages (Hada / policy / consumer safety / global).** A Canadian proposal follows analysis of about 3,000 promotional messages across seven NHL playoff games; community posts describe muting ads or avoiding sports. Observed action: households manually mute, delay viewing, complain, or stop watching. Sources: https://news.hada.io/topic?id=35831 and https://www.reddit.com/r/ontario/comments/1qajfpb/wtf_are_we_andor_the_ontario_government_doing_in
13. **S13 — Permit Pending turns public hearings, objections, lawsuits, and reelection into the core city-building friction (Hada / game interaction / global).** Players negotiate concessions and votes instead of placing freely; comments say the paperwork pressure is intentionally overwhelming. Observed action: players try the browser sandbox, argue about tradeoffs, and share rage-inducing outcomes. Source: https://news.hada.io/topic?id=35727
14. **S14 — Museum-artifact cosplay moved from an online call to a nationwide live event (culture / weird behavior / Korea-to-global, 2026-09).** Hundreds applied and thousands watched as participants rebuilt artifacts as costumes; a nursing student's Joseon fish-shaped water-dropper costume won. Observed action: people research objects, improvise with clothing and props, perform, photograph, and vote. Sources: https://www.koreajoongangdaily.com/lifestyle/dress-like-a-museum-exhibit-is-anything-but-a-flop-as-an-earnest-fish-captures-hearts-top-prize/12883318 and https://www3.nhk.or.jp/nhkworld/news/video/20261008114328902

## Hada Signals

Observed via https://news.hada.io/rss and front-page/topic pages on 2026-10-23 08:02–08:11 KST. Points and times are snapshots. Each behavior signal is an inference, not market-size evidence.

1. **Arc 브라우저와의 작별, 12월 22일 서비스 종료** — 1 point, published 06:43 — https://news.hada.io/topic?id=35834 — **행동 신호 / behavior signal:** users need to replay real workflows in a replacement before the shutdown, not only download bookmarks.
2. **OpenShell - AI 에이전트의 파일과 네트워크 접근을 제어하는 NVIDIA 런타임** — 1 point, 06:40 — https://news.hada.io/topic?id=35833 — **행동 신호 / behavior signal:** agent users want visible, enforceable permission boundaries and human approval at scope expansion.
3. **캐나다 하원의원들, 도박 광고 제한 추진** — 1 point, 05:34 — https://news.hada.io/topic?id=35831 — **행동 신호 / behavior signal:** families and regulators count exposure because muting each ad by hand is the current control.
4. **pwn.watch - 최신 보안 사고와 패치 현황을 모아 보는 대시보드** — 1 point, 03:39 — https://news.hada.io/topic?id=35828 — **행동 신호 / behavior signal:** operators want the one stack-specific repair they must do today rather than another universal threat feed.
5. **LLM이 매긴 자기 답변의 신뢰도 점수를 믿기 어려운 이유** — 1 point, 02:46 — https://news.hada.io/topic?id=35827 — **행동 신호 / behavior signal:** users need outcome calibration and source comparison instead of a model-authored confidence number.
6. **개설한 적 없는 Cash App 계정 때문에 징역 6년 위기에 놓인 여성** — 1 point, 00:51 — https://news.hada.io/topic?id=35820 — **행동 신호 / behavior signal:** identity-fraud victims compare address, carrier, OS, and account history to challenge a false match.
7. **DNS 리졸버 Quad9, 프랑스에서 철수 예정** — 1 point, 01:40 — https://news.hada.io/topic?id=35821 — **행동 신호 / behavior signal:** service users need region-aware shutdown notice and tested alternatives before a fixed cutoff.
8. **Show GN: ZZO - 바로 사용하는 URL 단축 API와 MCP** — 1 point, 01:58 — https://news.hada.io/topic?id=35824 — **행동 신호 / behavior signal:** a maker explicitly removed signup and connected URL, QR, API, and MCP because people want one-step handoff.
9. **SimCity, 다만 인허가가 필요한 도시 건설 게임** — 1 point, observed on the live index — https://news.hada.io/topic?id=35727 — **행동 신호 / behavior signal:** bureaucratic interruption becomes playable when every concession visibly moves votes and side effects.
10. **바이브 코더들이 몰려들자, Steam 이용자들 ‘AI 게임 제외’ 필터 요청** — observed on the current index — https://news.hada.io/topic?id=35732 — **행동 신호 / behavior signal:** players invent filters and reputation heuristics when discovery is flooded by low-trust content.

H1 informed p006. H9 informed p007. H2–H8 and H10 were retained as trend radar or rejected concepts to avoid an AI-governance-heavy batch.

## GitHub Rising Repo Scan

Official Search API query: created:>2026-10-15, sorted by stars descending; observed 2026-10-23 08:04 KST. Stars and creation age are attention/follow-along evidence, not revenue proof.

1. `Gathin23/cleanyourtv` — 23,855 stars, created 2026-10-17 — reversible Android/Google TV cleanup. Why rising: immediate visible relief plus restore. UX seed: preview, apply, undo. Avoid copying: TV cleanup itself already shipped in PF on 2026-10-20.
2. `deepseek-ai/DeepInfer` — 19,832 stars, created 2026-10-16 — large-scale inference performance. Why rising: concrete throughput gains. UX seed: identify one bottleneck and explain the next capacity decision. Avoid copying: benchmark dashboards.
3. `ly05010419/MacNativeGames` — 4,457 stars, created 2026-10-17 — builds owned game files for Apple Silicon. Why rising: compatibility pain plus one-command execution. UX seed: preflight assets and show a binary ready/not-ready result. Avoid copying: copyrighted game distribution.
4. `simbasjungles/free-my-tv` — 3,405 stars, created 2026-10-19 — ad-free TV home with one-button undo. Why rising: reversibility lowers fear. UX seed: make recovery as prominent as change. Avoid copying: another family TV cleaner.
5. `pengchujin/aerial-tv` — 3,042 stars, created 2026-10-20 — clean launcher for China-market TVs. Why rising: region- and manufacturer-specific frustration. UX seed: device-specific recipe. Avoid copying: generic launcher.
6. `xiaoyang111222/cn-math-taxonomy` — 2,190 stars, created 2026-10-18 — 1,644 concepts and 2,403 prerequisite edges. Why rising: turns an opaque wrong answer into a missing-root explanation. UX seed: trace backward to the first broken dependency. Avoid copying: another school dashboard immediately after 2026-10-21 teacher tooling.
7. `OpenMOSS/MOSS-Image` — 1,452 stars, created 2026-10-16 — text and layout-focused image model. Why rising: creators care about exact words and composition. UX seed: verify text before aesthetic polish. Avoid copying: model wrapper.
8. `alchaincyf/huashu-motion` — 1,435 stars, created 2026-10-18 — click a frame element to revise only that part of a launch video. Why rising: pointing beats prompt rewriting. UX seed: bind feedback to the exact demonstrated step. Avoid copying: video-generation studio.
9. `reason-machines/reason-network` — 1,063 stars, created 2026-10-16 — peer messaging between coding agents. Why rising: parallel work needs visible ownership. UX seed: show who owns a blocked action. Avoid copying: agent orchestration console.
10. `Noniv/web-ocean` — 883 stars, created 2026-10-16 — 61KB single-file WebGPU ocean. Why rising: high-sensation interaction with no install. UX seed: tactile motion on first load. Avoid copying: decorative shader demo.

GitHub-derived interaction seeds that survived: p004 uses the “point at the exact step” lesson from `alchaincyf/huashu-motion`; p006 uses the “preview and restore before change” lesson from `Gathin23/cleanyourtv`. Neither copies the repository's product category.

## Viral Interaction / Game Scan

- **BOMBANANA!** — Steam global top-seller search around rank 30 at 08:06 KST; released 2026-09-02; 4,353 positive of 4,522 global reviews (96.3%). Three players are respectively blind, deaf, or mute while defusing a bomb. Source: https://store.steampowered.com/app/4656000/
- **Japanese Ramen Simulator** — search around rank 59; six-player kitchen cooperation; 529 positive of 574 reviews. Source: https://store.steampowered.com/app/4968640/
- **Troll the King** — itch.io New & Popular around rank 13; change letters in a messenger pigeon's note to sabotage the king. Source: https://sheepolution.itch.io/troll-the-king
- Reusable lesson: a one-sentence rule, one removed capability, tactile manipulation, a visible timer, comic failure, and a rematch under ten seconds.
- Rejected today: a role-limited bomb/restaurant relay would collide with 2026-10-19 Grease Screen Relay and 2026-10-21 Wiper Blind Rally. p007 instead uses simultaneous secret interests and concession bargaining; p008 uses physical costume improvisation.

## Need Evidence

| Need | Signals | Concrete actions already happening | Cost / urgency | Pull |
| --- | --- | --- | --- | --- |
| Socially safe shared meal | S01 | eat less, grill/cut/refill, negotiate silently | every group meal; embarrassment | 4/5 |
| Korea payment backup | S02 | carry extra cash, compare T-money/WOWPASS, ask forums | travel-day failure | 4/5 |
| Understand apartment PA | S03 | check apps, ask neighbors, evacuate or ignore | safety, sleep, language | 5/5 |
| Demonstrate one automation | S09 | explain routines to consultants, keep spreadsheets, fix broken flows manually | repeated admin hours | 4/5 |
| Trace restaurant outage | S06 | unplug cables, reboot devices, wait 45 minutes, use paper | Friday revenue and staff stress | 5/5 |
| Migrate browser work | S11 | export data, compare replacements, rebuild workspaces | fixed 12/22 shutdown | 4/5 |
| Play concession politics | S13 | play browser sim, negotiate, argue, share failure | entertainment / learning | 3/5 |
| Rebuild an artifact physically | S14 | research, costume, perform, photograph, vote | event participation / status | 4/5 |

## Workaround Proof

1. **W01 shared meal:** verbal menu debate, one person ordering for all, table labor assigned by habit. Paid substitute: private rooms or staff grilling. Pain: preferences stay hidden until food arrives.
2. **W02 payment:** screenshots, cash envelope, multiple cards, airport kiosk advice, forum posts. Paid substitute: travel concierge. Pain: the failure order is learned only at the counter.
3. **W03 apartment PA:** building app, neighbor chat, door peek, calling management. Pain: none is guaranteed at 1 a.m.; urgency remains ambiguous.
4. **W04 automation:** spreadsheet, SOP document, consultant-built n8n, chat prompt. Pain: the owner cannot repair the flow or identify the smallest safe step.
5. **W05 restaurant IT:** reboot everything, swap cables randomly, wait for vendor support, paper tickets. Pain: troubleshooting destroys peak service.
6. **W06 browser migration:** bookmark export, screenshots of spaces, memory, parallel browser use. Pain: permissions, extension behavior, and task sequence are missing.
7. **W07 permit play:** dense city simulators and debate games. Pain: tradeoffs are hidden in menus rather than embodied in one vote.
8. **W08 artifact cosplay:** one annual contest, manual research, DIY props, social uploads. Pain: participation outside the event lacks a quick rule and reveal loop.

## Search / Community Language

- “Going out to eat in Korea is so much work” → “오늘은 누가 덜 먹고 누가 계속 굽나요?”
- “apps for money … I am panicking” → “이 가게에서 해외카드가 안 되면 다음 수단은?”
- “apartment announcements?” → “지금 내려가야 하나요, 생활 안내인가요?”
- “I didn't open a restaurant to become a part-time sysadmin” → “금요일 저녁에 어느 선부터 확인해야 하죠?”
- “small businesses do not want n8n nodes” → “제가 한 번 보여드릴 테니 한 단계만 줄여주세요.”
- “Arc shuts down December 22” → “북마크 말고 내 일하는 방식이 옮겨졌나요?”
- Words avoided: revolutionary AI dashboard, all-in-one platform, smart insights, seamless automation, guaranteed emergency classification.

## Format Roulette

| Need | Format A | Format B | Format C | First validation format |
| --- | --- | --- | --- | --- |
| Shared meal | menu planner | anonymous table ritual | restaurant concierge | anonymous tabletop companion |
| Payment backup | article | route map | three-pocket rehearsal + printable | three-pocket rehearsal |
| Apartment PA | cloud transcription | building integration | local puck + companion | local puck simulation |
| Small-business automation | node builder | consultant service | demonstrate-one-step clinic | demonstrate-one-step clinic |
| Restaurant outage | network dashboard | support chatbot | QR/NFC cable trail | cable-trail field kit |
| Browser shutdown | export checklist | extension scanner | real-task obstacle course | task obstacle course |
| Permit play | city dashboard | debate cards | timed concession party game | party game |
| Artifact cosplay | gallery | generator | physical closet relay | physical relay + camera reveal |

## Candidate Drafts and Kill List

Fifteen signal-to-format drafts were considered. The eight “keep” rows are the only final prototype candidates.

| Draft | Signal | Pull/Pain/Urgency/Workaround/Reach/Visual/WTP | Decision |
| --- | --- | --- | --- |
| C01 한상 눈치해제 | S01 | 4/3/3/4/4/5/3 | keep p001 |
| C02 결제 3칸 포켓 | S02 | 4/4/4/4/5/5/3 | keep p002 |
| C03 심야 방송 등대 | S03 | 5/5/5/4/4/5/4 | keep p003 |
| C04 사장님 시범 한 번 | S09 | 4/4/4/5/4/5/4 | keep p004 |
| C05 Dinner Rush Cable Trail | S06 | 5/5/5/5/4/5/5 | keep p005 |
| C06 Browser Exit Drill | S11 | 4/4/5/4/5/5/4 | keep p006 |
| C07 Permit Hot Potato | S13 | 3/2/3/3/4/5/2 | keep p007 |
| C08 Artifact Closet Relay | S14 | 4/2/3/4/5/5/3 | keep p008 |
| C09 방빛 색상 증인 | S04 | 4/4/3/4/4/5/3 | kill: guided-camera/proof-packet collision with recent repair and resale concepts |
| C10 House Rule Compiler | S05 | 4/4/4/5/4/4/4 | kill: approval/handoff saturation and yesterday's Turnover Gate |
| C11 돌봄 공백 72시간 캐스케이드 | S10 | 4/5/5/5/4/3/3 | kill: service availability and policy accuracy dominate; current form is another handoff board |
| C12 Betting-Ad Mute Puck | S12 | 4/4/4/5/5/5/3 | kill: too close to 2026-10-20 HDMI ad watchdog and TV remote |
| C13 Etsy Shipping Fee Firewall | S08 | 5/5/5/5/5/4/5 | kill: fee/margin calculator pattern is saturated |
| C14 Slowest Pace Club | live slow-jogging scan | 4/3/3/4/5/5/3 | kill: too close to 2026-10-19 running field test |
| C15 Sensory Bomb Relay | BOMBANANA! | 5/2/4/3/5/5/3 | kill: asymmetric co-op and fail replay appeared in the two latest batches |

## Novelty / Duplicate Check

- Checked recent available batches: 2026-10-21, 2026-10-20, 2026-10-19, 2026-10-14, 2026-09-08, 2026-09-03, 2026-09-02, plus 2026-09-01 for the tracked-history edge case.
- Explicitly rejected generic proof packets, compliance queues, fee/margin breakdowns, guided camera evidence, approval handoffs, maps, planners, audio capture, TV cleanup, rollback consoles, running tests, and asymmetric two-screen relays.
- p001 is a private appetite-and-role reveal at the live table, not 2026-09-03's food-exchange shelf or a menu planner.
- p002 uses a three-pocket failure rehearsal and offline artifact, not a payment comparison dashboard.
- p003 is a local ambient device with verbatim audio and uncertainty; it does not promise emergency diagnosis or repeat the apartment action strip.
- p004 begins with the owner's demonstration and permits exactly one automation candidate, unlike an n8n canvas or agent approval console.
- p005 turns a real room into the interface through tagged endpoints and a physical trace walk; it is not the recent HDMI menu watchdog.
- p006 tests one real job across browsers before a fixed shutdown, not another rollback or generic migration checklist.
- p007 uses secret stakeholder motives and public concessions, not hidden sensory roles or message relays.
- p008 is a physical silhouette-remake ritual with audience guessing, not a generative image toy.
- Dashboard/board/scanner/planner primary-mechanic count: 0. Verdict: pass.

## Final 8

### p001 — Practical / Commercial / Korea — 한상 눈치해제

- **Title:** 한상 눈치해제
- **One-liner:** 각자 못 먹는 것·먹고 싶은 양·예산을 익명으로 눌러 공유 메뉴와 개인 메뉴, 굽기·보충 역할까지 20초에 합의하는 외식 테이블.
- **Need Evidence:** S01. Actual user actions: (1) diners eat less to avoid conflict, (2) one person grills/cuts/refills, (3) groups silently negotiate shared dishes and cost.
- **Existing workaround:** one loud diner orders, dislikes are disclosed late, or the group over-orders and splits equally.
- **Arrival path:** restaurant reservation link, table QR, family/chat share before ordering, search phrase “가족 외식 메뉴 정하기”.
- **Pull evidence score:** 4/5.
- **loved_by_small_group:** 4/5 — multigenerational families, mixed-diet friend groups, and visitors to Korean barbecue feel the friction immediately.
- **spread_trigger:** a graceful “everyone ate enough / roles rotated” table card can be shared with the group or restaurant.
- **Market fit:** domestic/Korea.
- **Theme:** 외로움 — belonging without silently sacrificing appetite or doing all the table labor.
- **Format:** anonymous tabletop companion.
- **Mechanic:** sealed appetite chips reveal together, then a center plate composes shared and personal dishes plus rotating table roles.
- **Trigger Moment:** everyone has sat down but no one wants to be the difficult diner.
- **Target User:** Korean family groups, mixed-preference friends, foreign residents, and barbecue restaurants.
- **Buyer / Share Audience:** restaurants, reservation services, group organizers, and diners.
- **User-Action Sentence:** “못 먹는 것과 먹을 양은 남 눈치 안 보고 먼저 누르고 싶어요.”
- **3-Second Sting:** four sealed diner chips around an empty table say “또 한 명이 다 굽고, 한 명은 덜 먹나요?”
- **Key UX:** each diner privately taps avoid, crave, appetite, budget, and willingness to grill/refill; all reveal at once into a table map with individual exceptions and short role rotations.
- **Output Artifact:** table agreement card with order split, portion assumptions, personal dishes, and role rotation.
- **First Validation Test:** run 20 mock four-person orders and compare discussion time, unchosen food, and role imbalance against ordinary verbal ordering.
- **Required UI Sections:** table join, sealed diner chips, private preference sheet, simultaneous reveal, shared/personal plate composer, budget split, grill/refill rotation, conflict state, final table card.
- **Scores:** Pull 4 / Pain 3 / Urgency 3 / Workaround 4 / Reach 4 / Visual 5 / WTP 3.
- **Inspired By Signals:** S01.
- **source_repo:** N/A — community-derived.
- **why_starred:** N/A.
- **reference_pattern:** anonymous party ballot + Korean shared-table ordering + round-robin chore token.
- **twist:** it resolves invisible appetite and labor before menu optimization; nobody's private answer is attributed after reveal.
- **first_screen:** an empty round table with four sealed chips, one 20-second countdown, and no menu catalogue yet.
- **share_or_play_loop:** invite diners → private chips → reveal → adjust one conflict → dine → share balanced-table card.
- **small_group_fit:** groups with allergies, small appetites, strict budgets, or recurring grill-duty resentment can decide in one meal whether it helps.
- **Design Profile:** premium-editorial
- **plan_brief:** User problem: shared dining etiquette hides hunger, dislikes, and labor. Inflow: table QR or reservation share. Business/validation: restaurant pilot priced per table or reservation integration. Core loop: join → private chips → reveal → compose → rotate roles → confirm. First screen: sealed diners, not a menu. Core screens: private input, reveal table, order composition, final card. Interaction rules: no answer attribution; one conflict at a time; diners can opt out. QA: two-person table, one abstention, allergy conflict, unequal budget, no shared dish, 390px mobile, Korean/English. Risk: the ritual must take less time than conversation.
- **development_start_prompt:** Build a tabletop companion with four mocked diners, private preference states, synchronized reveal, shared-versus-personal dish composition, budget split, rotating grill/refill roles, one conflict resolution, and a shareable table agreement. Do not build a restaurant discovery or menu analytics dashboard.
- **Stitch Prompt:** Create a responsive Korean tabletop companion called “한상 눈치해제” for families, mixed-preference friends, foreign residents, and Korean barbecue restaurants. The observed pull is social: diners report eating less than they want while one person orders, grills, cuts, and refills for everyone. Open on an elegant empty round table with four sealed diner chips and one sentence: “또 한 명이 다 굽고, 한 명은 덜 먹나요?” Each diner privately chooses foods to avoid, one craving, appetite size, budget comfort, and whether they can grill or refill. Flip all chips together after 20 seconds, then compose shared dishes, personal exceptions, a fair budget split, and short rotating table roles. Show allergy conflict, abstention, unequal budget, no-shared-dish, and late-join states. Required sections: join, private chips, synchronized reveal, shared/personal plate map, budget, role rotation, conflict resolution, and final table card. Emotional pressure: belonging without hunger, shame, or invisible labor. Design direction: use the premium-editorial profile with warm paper, deep charcoal type, one muted persimmon accent, refined plate-like cards, 44px controls, gentle reveal motion, and no restaurant-discovery grid or analytics dashboard.

### p002 — Practical / Commercial / Korea — 결제 3칸 포켓

- **Title:** 결제 3칸 포켓
- **One-liner:** 여행 전 세 곳을 골라 카드·교통카드·현금의 주·백업·비상 순서를 실제 실패 장면으로 익히고 오프라인 포켓카드로 가져가는 결제 리허설.
- **Need Evidence:** S02. Actual user actions: (1) carry excess cash, (2) compare T-money and WOWPASS in forums, (3) collect airport top-up and foreign-card exceptions.
- **Existing workaround:** screenshots, blog lists, several cards, cash envelopes, and asking again at each counter.
- **Arrival path:** pre-trip checklist, airline/hotel welcome email, Korea travel communities, search phrase “한국 여행 결제 뭐 준비”.
- **Pull evidence score:** 4/5.
- **loved_by_small_group:** 4/5 — first-time visitors with foreign cards and tightly budgeted itineraries fear being stranded at transit gates.
- **spread_trigger:** a bilingual three-pocket card can be saved offline and forwarded to travel companions.
- **Market fit:** domestic/Korea.
- **Theme:** 자산 방어 — prevent payment panic and unnecessary cash exposure.
- **Format:** interactive rehearsal plus printable/offline wallet card.
- **Mechanic:** drag payment tools into Primary, Backup, and Emergency pockets, then survive three realistic failure cards.
- **Trigger Moment:** the traveler is packing and cannot tell which payment method works where.
- **Target User:** first-time Korea visitors, exchange students, older travelers, and hotels onboarding guests.
- **Buyer / Share Audience:** travelers, hotels, airlines, tour operators, and travel insurers.
- **User-Action Sentence:** “카드가 안 되면 뭘 먼저 꺼내야 하는지 출국 전에 알고 싶어요.”
- **3-Second Sting:** a subway gate rejects the foreign card while three empty pockets ask “다음 수단은?”
- **Key UX:** choose three upcoming stops, arrange payment tools, flip failure scenarios, correct the sequence, then download a minimal offline card with exact fallback order and Korean help phrases.
- **Output Artifact:** bilingual offline three-pocket payment card tied to three planned stops.
- **First Validation Test:** test 15 visitors on subway, convenience-store, and small-market scenarios; measure correct fallback selection and cash over-carry intention.
- **Required UI Sections:** trip stops, payment-tool tray, three pockets, failure cards, airport-only caveat, transit-balance note, Korean phrase strip, offline preview, companion share.
- **Scores:** Pull 4 / Pain 4 / Urgency 4 / Workaround 4 / Reach 5 / Visual 5 / WTP 3.
- **Inspired By Signals:** S02.
- **source_repo:** N/A — community-derived.
- **why_starred:** N/A.
- **reference_pattern:** emergency go-bag + card-game rehearsal + travel phrase card.
- **twist:** it teaches action order through failure instead of comparing payment products in a static article.
- **first_screen:** one rejected subway gate, three empty pockets, and the traveler's actual next three stops.
- **share_or_play_loop:** rehearse → save card → share with companion → mark which fallback actually worked → update the card.
- **small_group_fit:** visitors who have never used Korean transit can validate value before landing.
- **Design Profile:** calm-consumer
- **plan_brief:** User problem: payment knowledge is fragmented by place and top-up method. Inflow: trip confirmation or community search. Business: hotel/tour onboarding kit. Core loop: choose stops → place tools → face failures → correct → save offline. First screen: a failed gate, not a comparison table. Interaction rules: no claim that a card is universally accepted; always show observation date and cash safety. QA: no NFC phone, no airport kiosk, empty transit balance, lost card, offline state, two languages, large text. Risk: acceptance rules change.
- **development_start_prompt:** Build a mobile travel rehearsal with three mocked destinations, draggable payment methods, Primary/Backup/Emergency pockets, failure flips, corrective feedback, Korean help phrases, and an offline card preview. Keep acceptance claims caveated and dated.
- **Stitch Prompt:** Create a mobile-first Korea travel companion called “결제 3칸 포켓” for first-time visitors who are panicking over T-money, WOWPASS, foreign cards, cash, and airport-only top-up rules. Start at a subway gate that rejects a foreign card; beside it are three empty pockets labeled 주수단, 백업, 비상. Let the traveler choose their next three stops—a subway gate, convenience store, and small market—then drag their real payment tools into the pockets. Flip realistic failure cards one at a time, explain only the next safe action, and let the traveler correct the order. Finish with a bilingual offline wallet card containing the three-stop sequence, top-up caveats, a conservative cash note, and Korean help phrases. Include no-NFC-phone, empty transit balance, lost card, closed kiosk, and companion-share states. Required sections: stops, tool tray, three pockets, failure cards, correction, caveats, phrase strip, offline card, and share. Emotional pressure: being stranded or exposing too much cash. Design direction: use the calm-consumer profile with warm white and pale sage surfaces, one clear teal accent, large friendly pockets, 48px drag targets, explicit offline state, and no fintech charts, product ranking, or glossy travel hero.

### p003 — Practical / Commercial / Field / Non-web / Korea — 심야 방송 등대

- **Title:** 심야 방송 등대
- **One-liner:** 저음질 아파트 방송을 로컬에서 받아 원문·번역·불확실성을 즉시 띄우고 공식 확인 행동까지 연결하는 탁상형 안전 등대.
- **Need Evidence:** S03. Actual user actions: (1) wake and listen repeatedly, (2) check building apps or neighbors, (3) evacuate with pets or ignore an unclear announcement.
- **Existing workaround:** building text app, neighbor chat, management-office call, door peek, or guessing from tone.
- **Arrival path:** apartment management office, foreign-resident onboarding, relocation services, search phrase “아파트 방송 못 알아들음”.
- **Pull evidence score:** 5/5.
- **loved_by_small_group:** 5/5 — foreign residents, hard-of-hearing residents, pet owners, and families with sleeping children face high stakes from one unclear message.
- **spread_trigger:** the household can share a timestamped verbatim card with neighbors while keeping audio local.
- **Market fit:** domestic/Korea.
- **Theme:** 건강 — safety without pretending a machine can certify an emergency.
- **Format:** local tabletop puck plus phone companion.
- **Mechanic:** ambient capture lights the puck, preserves verbatim audio locally, displays translation and uncertainty, and offers official confirmation actions.
- **Trigger Moment:** a muffled building broadcast begins, especially overnight.
- **Target User:** foreign residents, hard-of-hearing households, older residents, pet owners, and apartment managers.
- **Buyer / Share Audience:** apartment complexes, relocation firms, municipalities, and households.
- **User-Action Sentence:** “지금 내려가야 하는 말인지, 생활 안내인지 원문부터 보고 싶어요.”
- **3-Second Sting:** a pulsing amber puck says “방송 감지 · 긴급 여부 불명확 · 원문 확인”.
- **Key UX:** local audio capture → verbatim Korean → translated summary → uncertainty badge → official app/management/112/119 path; red is reserved for an official confirmed emergency state.
- **Output Artifact:** timestamped local transcript-and-action card with source and uncertainty.
- **First Validation Test:** play 30 noisy mock announcements to Korean learners and hard-of-hearing users; compare correct next-action choice and false reassurance.
- **Required UI Sections:** puck halo state, live waveform, verbatim transcript, translation, uncertainty, official-source check, pet/family action shortcut, audio deletion, offline/storage state, event history.
- **Scores:** Pull 5 / Pain 5 / Urgency 5 / Workaround 4 / Reach 4 / Visual 5 / WTP 4.
- **Inspired By Signals:** S03.
- **source_repo:** N/A — community/field-derived.
- **why_starred:** N/A.
- **reference_pattern:** smoke-alarm status light + baby monitor + bilingual public-address caption.
- **twist:** it never reduces an unclear message to a confident green “safe”; verbatim evidence and official confirmation stay primary.
- **first_screen:** tabletop halo, detected timestamp, exact Korean line, translation, and a large “긴급 여부 불명확” state.
- **share_or_play_loop:** detect → read/listen → confirm official source → act → optionally share minimal card → auto-delete local audio.
- **small_group_fit:** one apartment tower with multilingual households can pilot it without replacing the PA system.
- **Design Profile:** field-ops
- **plan_brief:** User problem: poor audio and language barriers make urgency unknowable. Inflow: building onboarding or resident search. Business: complex-level hardware lease or household device. Core loop: detect → preserve → transcribe/translate → show uncertainty → verify/act → delete. First screen: status and exact words. Rules: never label safe from audio alone; official alerts override; local storage by default. QA: background TV, repeated announcement, low confidence, offline, power loss, two simultaneous languages, screen reader, 1 a.m. low-light. Risk: false positives/negatives; prototype must state it is an aid, not the emergency system.
- **development_start_prompt:** Build a simulated local-device companion with PA detection, waveform, verbatim Korean, editable translation, confidence/uncertainty, official verification actions, red-only confirmed emergency state, local deletion, offline state, and a minimal neighbor-share card. Never claim emergency classification.
- **Stitch Prompt:** Create a responsive companion interface for a Korean tabletop device called “심야 방송 등대.” It serves foreign residents, hard-of-hearing households, pet owners, and families who hear a muffled apartment PA message and cannot tell what to do. Open on a dark, quiet 1 a.m. scene: the puck glows amber and the phone says “방송 감지 · 긴급 여부 불명확.” Show the exact Korean transcript first, a replay button, an editable translation, and why confidence is low. Offer direct checks for the official building app, management office, 112, and 119; reserve red only for a mocked official confirmed emergency. Let users create a minimal neighbor card, choose pet/family actions, and delete local audio immediately. Include background-TV false trigger, repeated message, offline, low storage, no official text, and confirmed-alert states. Required sections: halo, waveform, verbatim text, translation, uncertainty, official-source actions, household shortcuts, deletion, offline/storage, and history. Emotional pressure: safety without false reassurance. Design direction: use the field-ops profile with matte charcoal and warm off-white, one amber attention accent, reserved safety red, 48px night-readable controls, sturdy 8px panels, and no smart-home dashboard or decorative waveform wall.

### p004 — Practical / Commercial / Korea — 사장님 시범 한 번

- **Title:** 사장님 시범 한 번
- **One-liner:** 사장님이 반복 업무를 한 번 보여주면 단계를 풀어 쓰고 딱 한 단계만 자동화해 세 번 나란히 검증하는 노코드 대신 시범 도구.
- **Need Evidence:** S09. Actual user actions: (1) maintain spreadsheets and manual re-entry, (2) explain messy routines to consultants, (3) abandon automations they cannot repair.
- **Existing workaround:** SOP document, screen recording, n8n/Make consultant, chat prompt, or continuing manual work.
- **Arrival path:** small-business associations, accountant/IT consultant referral, search phrase “반복 업무 자동화 어려움”.
- **Pull evidence score:** 4/5.
- **loved_by_small_group:** 4/5 — shops with one owner-operator and no IT staff feel every broken automation personally.
- **spread_trigger:** the owner can hand a one-page “what changed / how to do it manually” card to staff or a consultant.
- **Market fit:** domestic/Korea.
- **Theme:** 역전 — one demonstrated routine becomes leverage without turning the owner into an automation engineer.
- **Format:** demonstrate-one-step automation clinic.
- **Mechanic:** record one 90-second routine, point to the painful step, select exactly one automation candidate, and compare three shadow runs.
- **Trigger Moment:** the owner repeats the same copy/paste task for the third time today.
- **Target User:** Korean small-shop owners, clinic administrators, academy managers, and service businesses without IT staff.
- **Buyer / Share Audience:** owners, local digital-transition consultants, franchise field staff, and accountants.
- **User-Action Sentence:** “노드는 모르겠고, 제가 하는 걸 한 번 보여드릴게요.”
- **3-Second Sting:** a split view says “90초 시범에서 8단계 발견 · 자동화는 1개만”.
- **Key UX:** capture demonstration, bind feedback to exact steps, label human judgment and system dependency, choose one safe candidate, run manual and assisted lanes side by side three times, then issue a repair/fallback card.
- **Output Artifact:** verified one-step macro card with trigger, inputs, human checkpoint, break signs, and manual fallback.
- **First Validation Test:** observe ten owners performing a real admin task; compare independent repeatability and recovery after an injected failure.
- **Required UI Sections:** demonstration recorder, step filmstrip, point-at-step feedback, human-judgment flags, one-candidate gate, three shadow runs, mismatch review, stop/undo, repair card, staff handoff.
- **Scores:** Pull 4 / Pain 4 / Urgency 4 / Workaround 5 / Reach 4 / Visual 5 / WTP 4.
- **Inspired By Signals:** S09 plus the exact-element feedback pattern in GitHub G8.
- **source_repo:** alchaincyf/huashu-motion
- **why_starred:** 1,435 stars in about 4.45 days showed pull for pointing at the exact output element instead of rewriting a long prompt; p004 applies that interaction to a demonstrated business step, not video generation.
- **reference_pattern:** screen recording + apprenticeship demonstration + shadow-mode macro.
- **twist:** the product refuses multi-workflow “transformation”; one observed step must pass three shadow runs and keep a manual fallback.
- **first_screen:** one 90-second recording with eight extracted step frames and a hard “choose one” gate.
- **share_or_play_loop:** demonstrate → point → select one → shadow-run three times → approve or discard → share repair card.
- **small_group_fit:** businesses where the owner is also the process expert can test one task without migrating systems.
- **Design Profile:** operator-dense
- **plan_brief:** User problem: tool builders understand nodes; owners understand embodied routines. Inflow: consultant referral or repeated admin pain. Business: per-workflow clinic or partner kit. Core loop: record → step frames → point → classify → one candidate → three shadow runs → repair card. First screen: real task filmstrip. Rules: one automation only; every human judgment remains explicit; stop on mismatch. QA: hidden clipboard, login prompt, changing spreadsheet column, staff variation, no network, undo, readable Korean. Risk: recordings contain sensitive data; prototype uses redacted mocks.
- **development_start_prompt:** Build a Korean workflow clinic with a 90-second mocked demonstration, editable step filmstrip, exact-step comments, human-versus-machine labels, a one-candidate gate, three side-by-side shadow runs, injected mismatch, stop/undo, and a repair/manual-fallback card. Do not expose an automation node canvas.
- **Stitch Prompt:** Create a responsive Korean small-business tool called “사장님 시범 한 번” for shop, clinic, academy, and service owners who understand their routine but cannot configure Make or n8n. The observed pull is explicit: owners want someone to turn messy work into a checklist, automate one piece, and leave a way to fix it. Open on a 90-second recorded task—copying Kakao inquiries into a booking sheet—with eight visual step frames and the hard limit “자동화는 1개만.” Let the owner point at the painful frame, edit the step wording, mark human judgment, choose one safe candidate, and compare manual versus assisted results across three shadow runs. Inject a changed spreadsheet column on run three; the flow must stop, explain the mismatch, undo safely, and produce a repair/manual-fallback card for staff. Required sections: recorder, step filmstrip, exact-step feedback, judgment flags, one-candidate gate, three shadow runs, mismatch review, stop/undo, repair card, and handoff. Emotional pressure: repetitive admin without dependence on an unrepairable black box. Design direction: use the operator-dense profile with charcoal and slate surfaces, one amber action accent, compact 36–40px rows, crisp manual/assisted state labels, square-to-8px controls, and no node canvas, chatbot layout, or AI gradient.

### p005 — Practical / Commercial / Field / Non-web / Global — Dinner Rush Cable Trail

- **Title:** Dinner Rush Cable Trail
- **One-liner:** POS·KDS·배달 태블릿·라우터에 붙인 QR/NFC 태그를 따라 60초 안에 끊긴 연결을 찾고 수동 서비스로 우회하는 식당 현장 키트.
- **Need Evidence:** S06. Actual user actions: (1) reboot several devices, (2) unplug cables at random, (3) wait 45 minutes for support while switching to paper.
- **Existing workaround:** handwritten cable labels, photos in staff chat, vendor phone trees, and “restart everything”.
- **Arrival path:** restaurant-owner communities, POS/KDS installers, managed-service partners, search phrase “POS down dinner rush”.
- **Pull evidence score:** 5/5.
- **loved_by_small_group:** 5/5 — independent restaurants with many vendor devices lose money and staff confidence during each outage.
- **spread_trigger:** a vendor-ready trail card names the failed edge and every action already tried; staff can also share the paper-service route.
- **Market fit:** overseas/global.
- **Theme:** 자산 방어 — protect the dinner rush and staff attention.
- **Format:** QR/NFC label kit plus offline field companion.
- **Mechanic:** scan the dead endpoint, walk a highlighted physical cable trail, test one edge at a time, then activate a role-specific manual service mode.
- **Trigger Moment:** a POS or kitchen screen goes blank during peak service.
- **Target User:** independent restaurants, general managers, shift leads, POS/KDS installers, and support desks.
- **Buyer / Share Audience:** restaurant owners, hospitality MSPs, POS vendors, and franchise operators.
- **User-Action Sentence:** “다 뽑지 말고, 지금 이 화면에서 어느 선부터 따라가죠?”
- **3-Second Sting:** “KDS 2 offline · 46 open tickets” sits over a floor path with one flashing tagged cable.
- **Key UX:** endpoint scan → last-good edge → physical walk → one safe test → recovered or paper mode → support trail export.
- **Output Artifact:** printable label sheet, live cable trail, manual-service role card, and support-ready action log.
- **First Validation Test:** stage five common failures in a mock restaurant and compare recovery time and accidental disconnections against unlabeled troubleshooting.
- **Required UI Sections:** dinner-rush header, device constellation, scan entry, physical route, one-edge test, do-not-unplug warning, recovered state, paper-service mode, open-ticket preservation, support export, offline state.
- **Scores:** Pull 5 / Pain 5 / Urgency 5 / Workaround 5 / Reach 4 / Visual 5 / WTP 5.
- **Inspired By Signals:** S06.
- **source_repo:** N/A — community/field-derived.
- **why_starred:** N/A.
- **reference_pattern:** cable toner + airport wayfinding + restaurant fire-drill card.
- **twist:** the room and tagged cables are the interface; the screen never asks a manager to interpret a network dashboard.
- **first_screen:** one failed KDS, remaining open tickets, a 60-second clock, and the next physical tag to scan.
- **share_or_play_loop:** scan → walk → test → recover or enter paper mode → attach trail to vendor ticket → update label after repair.
- **small_group_fit:** restaurants with 8–20 networked endpoints are too complex for memory but too small for a dedicated sysadmin.
- **Design Profile:** field-ops
- **plan_brief:** User problem: multi-vendor hardware turns managers into network technicians. Inflow: POS installer or outage search. Business: label kit plus subscription/MSP bundle. Core loop: scan endpoint → trace one edge → test → recover/fallback → export. First screen: service impact and next tag. Rules: never power-cycle an unverified device; preserve ticket counts; offline-first. QA: dead router, loose Ethernet, one tablet only, mislabeled cable, no internet, wet hands, dark kitchen, 48px controls. Risk: real wiring varies; prototype uses a mocked topology.
- **development_start_prompt:** Build an offline-first restaurant field companion with a mocked floor topology, QR/NFC scan simulation, one failed KDS, one-edge-at-a-time trace, do-not-unplug warnings, recovery, paper-service mode, preserved ticket count, and vendor-ready action export. Avoid a network-monitoring dashboard.
- **Stitch Prompt:** Create a responsive restaurant field app called “Dinner Rush Cable Trail” for independent owners and general managers who have become part-time sysadmins for delivery tablets, KDS screens, POS terminals, and a Friday-night router. Start during service: “KDS 2 offline · 46 open tickets · 60 seconds to paper mode.” Show a simple floor route, not a network diagram. The manager scans the KDS tag, follows the next glowing QR/NFC tag to one switch port and one cable, performs exactly one safe test, and either restores service or activates role-specific paper tickets without losing open-order counts. Include a wrong-tag state, do-not-unplug warning, dead-router branch, isolated-tablet branch, offline mode, wet-hand controls, and a vendor-ready trail of actions already tried. Required sections: rush header, endpoint scan, physical route, one-edge test, recovery, paper mode, ticket preservation, support export, and device-label preview. Emotional pressure: revenue and staff trust disappearing while support is on hold. Design direction: use the field-ops profile with warm off-white and graphite, one high-visibility green action accent, reserved red for stop warnings, 48px touch targets, bold route arrows, durable 8px panels, and no abstract topology graph or KPI dashboard.

### p006 — Practical / Commercial / Global — Browser Exit Drill

- **Title:** Browser Exit Drill
- **One-liner:** 종료 전 브라우저의 탭·스페이스·확장·권한보다 실제 업무 한 건을 새 브라우저에서 재현해 무엇이 끊기는지 확인하는 이사 훈련.
- **Need Evidence:** S11. Actual user actions: (1) export browser data, (2) screenshot spaces and extension lists, (3) run two browsers in parallel while testing replacements.
- **Existing workaround:** bookmark HTML export, handwritten extension checklist, and memory-based recreation.
- **Arrival path:** shutdown notice, browser communities, IT offboarding, search phrase “Arc shutdown migrate workflow”.
- **Pull evidence score:** 4/5.
- **loved_by_small_group:** 4/5 — freelancers and small teams with browser-specific research, publishing, support, or sales routines face a fixed cutoff.
- **spread_trigger:** a task-level exit card shows coworkers exactly which blocker remains and which browser is ready.
- **Market fit:** overseas/global.
- **Theme:** unclassified — continuity of a personal work habitat.
- **Format:** cross-browser real-task obstacle course.
- **Mechanic:** choose one recurring task, capture its old-browser path, preview import/restore, then complete the task in the candidate browser under the same checkpoints.
- **Trigger Moment:** a shutdown or account-sync deadline is announced.
- **Target User:** Arc users, browser-dependent freelancers, research teams, customer-support teams, and IT administrators.
- **Buyer / Share Audience:** individuals, team leads, browser vendors, and migration consultants.
- **User-Action Sentence:** “북마크 말고, 월요일 아침에 하던 일이 그대로 되는지 확인하고 싶어요.”
- **3-Second Sting:** “12/22까지 60일 · 북마크 완료 · 실제 업무 0/3 검증” exposes the false sense of completion.
- **Key UX:** select task → old-browser step chain → candidate mapping → permission/extension blockers → timed replay → compare → choose, postpone, or keep split-browser.
- **Output Artifact:** browser exit passport with verified tasks, unresolved blockers, fallback, and retest date.
- **First Validation Test:** migrate three real tasks for ten Arc users and measure hidden blockers found before switching.
- **Required UI Sections:** cutoff strip, task picker, old-browser chain, candidate mapping, extension/permission gaps, preview/restore, timed replay, result compare, fallback, exit passport.
- **Scores:** Pull 4 / Pain 4 / Urgency 5 / Workaround 4 / Reach 5 / Visual 5 / WTP 4.
- **Inspired By Signals:** S11 plus the reversible preview pattern in GitHub G1.
- **source_repo:** Gathin23/cleanyourtv
- **why_starred:** 23,855 stars in about 5.62 days showed that users trust disruptive device changes more when the after-state and restore path are visible; p006 transfers that lesson to browser migration rather than TV cleanup.
- **reference_pattern:** evacuation drill + cross-browser test harness + reversible device-change preview.
- **twist:** success is completing a real job, not reaching 100% imported items.
- **first_screen:** fixed shutdown date, three recurring tasks, and the mismatch “data exported / work unverified”.
- **share_or_play_loop:** capture task → preview change → replay in candidate → record blocker → fix/retest → share passport.
- **small_group_fit:** teams with three to ten browser-critical workflows can finish a meaningful drill before enterprise migration tooling would be justified.
- **Design Profile:** financial-analyst
- **plan_brief:** User problem: export counts hide behavior loss. Inflow: shutdown notice. Business: individual paid pack or team migration report. Core loop: task select → old path → map → replay → compare → fallback. First screen: deadline and unverified tasks. Rules: no claim of full migration; every blocker ties to a step; preserve old browser until user signs off. QA: missing extension, OAuth popup, keyboard shortcut conflict, local-only data, failed import, two-browser fallback, reduced motion. Risk: prototype mocks browser integrations.
- **development_start_prompt:** Build a cross-browser migration workbench with a fixed cutoff, three mocked recurring tasks, old/new step chains, extension and permission blockers, import preview, restore path, timed replay, side-by-side outcome, split-browser fallback, and exportable exit passport.
- **Stitch Prompt:** Create a responsive global migration workbench called “Browser Exit Drill” for Arc users and small teams facing the 2026-12-22 shutdown. Open with a fixed deadline and an uncomfortable mismatch: “Bookmarks exported · real work verified 0/3.” Let the user choose one recurring job—research and publish a client brief—then show the exact old-browser chain of spaces, pinned tabs, keyboard shortcuts, extensions, permissions, and sign-ins. Preview what the candidate browser can import, keep a visible restore/keep-Arc path, and make the user complete the same job in a timed replay. Surface a missing extension, blocked OAuth popup, shortcut collision, and local-only note; compare outcome and effort, then choose ready, split-browser fallback, or retest. Required sections: cutoff, task picker, old path, candidate mapping, gaps, preview/restore, replay, comparison, fallback, and exit passport. Emotional pressure: losing a work habitat while believing an export file is enough. Design direction: use the financial-analyst profile with cool off-white, ink, one cobalt action accent, precise side-by-side lanes, tabular dates and durations, written interpretation beside each number, disciplined 8px radii, and no generic migration progress dashboard.

### p007 — Fun / Portfolio / Experimental / Global — Permit Hot Potato

- **Title:** Permit Hot Potato
- **One-liner:** 한 명이 건설안을 내면 나머지는 비밀 이해관계자로 20초씩 양보를 요구하고, 계획을 망치지 않은 채 네 표를 모아야 하는 협상 파티게임.
- **Need Evidence:** S13. Actual user actions: (1) play a bureaucracy-heavy city sandbox, (2) negotiate concessions, (3) share rage-inducing delays and tradeoffs.
- **Existing workaround:** dense city builders, debate games, or improvised role-play with no visible consequence.
- **Arrival path:** browser-game portals, classroom civics links, streamer clips, party-game communities.
- **Pull evidence score:** 3/5.
- **loved_by_small_group:** 4/5 — urbanism nerds, civics classes, tabletop groups, and streamers enjoy arguing over tradeoffs.
- **spread_trigger:** every failed vote produces a 7-second “concession pile” clip showing who killed the project and why.
- **Market fit:** overseas/global.
- **Theme:** 역전 — a tiny stakeholder card can overturn the mayor's grand plan.
- **Format:** timed multiplayer negotiation party game.
- **Mechanic:** one proposal, four secret interests, one concession per player, simultaneous vote, visible project deformation.
- **Trigger Moment:** the mayor reveals a seemingly perfect project and the first objection clock starts.
- **Target User:** friends, classrooms, streamers, planners, and urban-policy communities.
- **Buyer / Share Audience:** party-game players, educators, event hosts, and viewers.
- **User-Action Sentence:** “네 표를 얻되, 원래 짓고 싶던 건 남겨야 해요.”
- **3-Second Sting:** a beautiful park sits under four locked vote stamps and the line “20초마다 하나를 양보하세요.”
- **Key UX:** deal proposal → secret role reveal → timed demand → drag one concession onto the plan → simultaneous stamps → side-effect burst → clip/rematch.
- **Output Artifact:** deformed before/after proposal poster, vote breakdown, and seven-second failure clip.
- **First Validation Test:** run 30 four-player rounds; measure rule comprehension under 15 seconds, negotiation completion, laughter/fail clips, and rematch rate.
- **Required UI Sections:** room code, proposal board, secret interest cards, demand timer, concession tray, vote stamps, side-effect burst, result poster, clip preview, instant rematch.
- **Scores:** Pull 3 / Pain 2 / Urgency 3 / Workaround 3 / Reach 4 / Visual 5 / WTP 2.
- **Inspired By Signals:** S13 and the viral scan's one-sentence/timer/failure lesson; the sensory-role mechanic itself was rejected as duplicate.
- **source_repo:** N/A — Hada/game-derived.
- **why_starred:** N/A.
- **reference_pattern:** city hearing + Hot Potato timer + simultaneous party-game vote.
- **twist:** concessions physically mutate the shared plan, so “winning” with an unrecognizable project is a comic failure.
- **first_screen:** one attractive proposal, four sealed stakeholder cards, four vote stamps, and a 20-second rule.
- **share_or_play_loop:** propose → object → concede → stamp → explode side effects → clip → swap mayor → rematch.
- **small_group_fit:** four people can play from a link without learning a city simulation.
- **dopamine_hook:** thumping objection timer, magnetic concession snap, last-second stamp flip, absurd side-effect pop, seven-second recap, rematch under ten seconds.
- **Design Profile:** playful-experimental
- **plan_brief:** Opportunity: policy conflict is inherently dramatic when consequences are visible. Inflow: party link, stream, or classroom. Validation: comprehension/rematch/clips. Core loop: proposal → roles → demands → concessions → vote → result. First screen teaches the whole rule. Rules: one demand and one concession each; no real political persuasion data. QA: late join, tie, all-no, over-conceded plan, color blindness, reduced motion, classroom-safe names. Risk: complexity; keep each card to one sentence.
- **development_start_prompt:** Build a four-player browser party-game simulation with proposal, secret interests, 20-second demand turns, drag-and-snap concessions, simultaneous vote stamps, visible plan deformation, side-effect burst, seven-second recap, mayor swap, and instant rematch.
- **Stitch Prompt:** Create a responsive four-player party game called “Permit Hot Potato.” The entire rule must fit in one sentence on the first screen: “Win four votes, but do not concede away the thing you wanted to build.” Open on a beautiful riverside park proposal surrounded by four locked vote stamps and four sealed stakeholder cards. The mayor reveals the plan; each player sees one secret interest, gets 20 seconds to demand one concession, and the mayor drags exactly one change onto the shared plan. After four rounds, all stamps flip together. Make concessions visibly deform the project—parking swallows the trees, height limits crush housing, noise walls block the river—so winning an absurd plan is also funny. Include tie, all-no, over-conceded, surprise-support, classroom-safe, reduced-motion, seven-second recap, mayor swap, and rematch states. Required sections: room, proposal, secret cards, timer, concession tray, vote stamps, side effects, result poster, clip, and rematch. Design direction: use the playful-experimental profile with deep plum, one hot coral accent, oversized stamps, chunky 12px cards, elastic snap motion, stable central geometry, and no city-management dashboard or copied SimCity branding.

### p008 — Fun / Portfolio / Experimental / Non-web / Global — Artifact Closet Relay

- **Title:** Artifact Closet Relay
- **One-liner:** 유물 실루엣을 뽑고 90초 안에 옷과 생활용품으로 몸을 만들어 관객이 원본 공개 전에 맞히는 박물관 코스프레 릴레이.
- **Need Evidence:** S14. Actual user actions: (1) research artifacts, (2) build costumes from improvised materials, (3) perform, photograph, watch, and vote at a nationwide event.
- **Existing workaround:** annual costume contest, generic cosplay prompt, or social post with no shared timer/reveal.
- **Arrival path:** museum QR, classroom activity, party link, maker-space event, short-form challenge.
- **Pull evidence score:** 4/5.
- **loved_by_small_group:** 4/5 — museum educators, families, cosplay groups, and design schools already enjoy object-based making.
- **spread_trigger:** the side-by-side pose and original artifact create a funny, legible vertical reveal clip.
- **Market fit:** overseas/global adaptation of a Korean event pattern.
- **Theme:** 외모 — status and self-expression come from earnest transformation, not beauty scoring.
- **Format:** physical closet relay with mobile/kiosk reveal.
- **Mechanic:** draw silhouette, collect three allowed household categories, build for 90 seconds, freeze-pose, audience guess, reveal source.
- **Trigger Moment:** a museum group wants participation that is more tactile than reading labels.
- **Target User:** museum visitors, families, classrooms, cosplay groups, and event hosts.
- **Buyer / Share Audience:** museums, schools, cultural festivals, makerspaces, and viewers.
- **User-Action Sentence:** “원본을 보기 전에 몸으로 먼저 만들어 보고 싶어요.”
- **3-Second Sting:** a strange fish-shaped silhouette says “90초 · 옷장만 사용 · 원본은 나중에 공개”.
- **Key UX:** artifact-safe silhouette draw → three material-category constraints → camera-free build timer → freeze pose → audience guesses → credited original reveal → rematch.
- **Output Artifact:** source-credited side-by-side reveal card and six-second transformation clip.
- **First Validation Test:** run 20 family/classroom rounds; measure start time, completion, guess participation, source-label recall, and rematch.
- **Required UI Sections:** artifact pack, silhouette draw, material constraints, 90-second timer, pose frame, audience guess board, original reveal, source/era label, result clip, accessibility/rematch.
- **Scores:** Pull 4 / Pain 2 / Urgency 3 / Workaround 4 / Reach 5 / Visual 5 / WTP 3.
- **Inspired By Signals:** S14.
- **source_repo:** N/A — culture/event-derived.
- **why_starred:** N/A.
- **reference_pattern:** museum object study + costume relay + Pictionary reveal.
- **twist:** the original stays hidden until after the body-made interpretation, so imperfect construction becomes the entertainment and the object label becomes memorable.
- **first_screen:** one high-contrast artifact silhouette, three material icons, one 90-second button, and no gallery browsing.
- **share_or_play_loop:** draw → build → pose → audience guess → credited reveal → clip → new artifact.
- **small_group_fit:** one family, classroom table, or museum workshop can play with items already present.
- **dopamine_hook:** silhouette snap, material roulette, 90-second drum, freeze flash, guess cascade, side-by-side pop, six-second clip, instant redraw.
- **Design Profile:** playful-experimental
- **plan_brief:** Opportunity: object learning becomes memorable when people physically reinterpret shape. Inflow: museum QR/event host. Business: museum event kit or school pack. Core loop: draw → constrain → build → pose → guess → reveal. First screen: silhouette and timer. Rules: use public-domain/licensed artifact images with source credit; no unsafe props; camera consent before capture. QA: no costume supplies, wheelchair/seated pose, child mode, no-camera mode, tie guesses, low light, vertical clip. Risk: cultural disrespect; each pack needs curator-approved context.
- **development_start_prompt:** Build a mobile-and-kiosk relay simulation with a licensed/public-domain artifact pack, silhouette draw, three material constraints, 90-second timer, seated/no-camera options, pose frame, audience guesses, credited original reveal, vertical result card, and instant redraw.
- **Stitch Prompt:** Create a mobile-and-kiosk party companion called “Artifact Closet Relay” for museums, families, classrooms, cosplay groups, and cultural festivals. Base it on the observed success of Korea's nationwide “Dress Like a Museum Exhibit” contest, where people researched artifacts, built costumes, performed, photographed, and voted. The one-line rule is: “See only the silhouette, then use clothes and household objects to become it in 90 seconds.” Open on a strange fish-shaped silhouette with three material constraints—one jacket, one paper object, one kitchen object—and a giant start button. Keep the original hidden while the team builds; then frame a freeze pose, collect audience guesses, and reveal the credited public-domain artifact, era, and one memorable fact beside the pose. Include seated-pose, no-camera, child-safe, missing-material, tie-guess, low-light, vertical clip, and instant redraw states. Required sections: artifact pack, silhouette, material roulette, timer, pose, guesses, original reveal, source label, result clip, accessibility, and rematch. Design direction: use the playful-experimental profile with midnight violet, one electric coral accent, bold silhouette blocks, chunky 12px cards, theatrical but controlled reveal motion, and no museum catalogue grid, AI-image generator, or uncredited artwork.

## Diversity Gate

- Source lane counts among final 8: community/forum 5, Hada/product shutdown 2, culture/event 1; GitHub interaction corroboration 2.
- Theme counts: 외로움 1, 자산 방어 2, 건강 1, 역전 2, unclassified 1, 외모 1.
- Money-defense / appeal / proof-packet count: 0 primary proof-packet candidates; money pressure appears in p002 and p005 only.
- Domestic / overseas split: Korea p001–p004 (4); global p005–p008 (4).
- Format/mechanic count: 8 distinct primary mechanics.
- Practical/commercial: p001–p006 (6). Fun/portfolio/experimental: p007–p008 (2).
- Explicit non-web/offline/field: p003, p005, p008 (3); p002 also outputs an offline artifact but is not counted toward the quota.
- Consumer desire/anxiety tools: p001, p002, p003, p008 (4). B2B/ops: p004–p006 (3).
- Hada-derived final candidates: p006 and p007 (2).
- GitHub-derived interaction seeds: p004 and p006 (2).
- Rebalanced or rejected due to concentration: fee firewall, rule compiler, betting-ad puck, running concept, and sensory co-op were killed.
- Gate verdict: pass.

## Expected Stitch Drop Folder

/home/sy/Downloads/stitch_drop/2026-10-23/

- p001/code.html + p001/screen.png
- p002/code.html + p002/screen.png
- p003/code.html + p003/screen.png
- p004/code.html + p004/screen.png
- p005/code.html + p005/screen.png
- p006/code.html + p006/screen.png
- p007/code.html + p007/screen.png
- p008/code.html + p008/screen.png

Phase A stops here. No custom demo was implemented. The separate 08:30 Stitch job owns design generation, export, ingest, build, commit, and push for all eight slots.
