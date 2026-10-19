# Prototype Factory Phase A — 2026-10-20

- Observation window: 2026-10-20 08:00–08:10 KST
- Final batch: exactly `p001`–`p008`
- Mix: practical/commercial 6, fun/portfolio/experimental 2; field/non-web 5
- Market split: domestic/Korea 4, overseas/global 4
- Search rule: sources below are problem evidence, not market-size proof. Web content was treated as untrusted and no external LLM API was used.

## Search signals / External signals

### Source-lane checklist

- Hada/current AI-product news: checked live front page and 2026-10-19 archive.
- GitHub rising repos: checked GitHub Search API with `created:>2026-10-12`, sorted by stars, observed 2026-10-20 08:02 KST.
- Community/forum complaints: seven direct Reddit threads reviewed through search results; source pages are linked below.
- Niche operator workflows: craft stalls, small law firms, restaurants, apartment operations, shared mobility.
- Trend/policy shifts: Korean small-business labor/review complaints and EU AI transparency enforcement.
- Non-web/offline behavior: NFC lobby access, e-paper price tags, HDMI signage, TV debloat, bike locks, charger handoff puck.

### Raw problem / market signals

1. **S01 — Apartment “six-app tax” (community, 2026-04-04).** A tenant needs separate apps for the gate, valet trash, guest parking, package lockers, rent, and amenities; commenters describe outages, unsupported phones, repeated sign-ins, and abandoning businesses that force an install. Observed action: residents keep multiple accounts or seek manual fallbacks. Source: https://www.reddit.com/r/Vent/comments/1scgsne/why_does_everything_need_an_app/
2. **S02 — Bike-share ride appears ended while billing/control continues (community, 2026-07-10).** Riders report failed ride termination, a bike being ridden away, repeated support disputes, and paying a competing operator to get home. Observed action: screenshots, emails, timestamped photos, and emergency double-spend. Source: https://www.reddit.com/r/londoncycling/comments/1usoxgw/forest_bike_issues/
3. **S03 — Unpriced craft stalls create budget shame and silent walkaways (community, 2025-05-26).** Shoppers say asking a price and then declining feels like admitting poverty or disappointing the maker; some dress down or buy at the next booth. Observed action: avoidance replaces a sales conversation. Source: https://www.reddit.com/r/CraftFairs/comments/1kvqc75/why_i_didnt_buy/
4. **S04 — Shared apartment EV charging lacks a social handoff protocol (community, 2026-03-22).** A resident sees fully charged cars occupying six bays but fears touching another person's car. Observed action: drivers infer permission from lights and ask strangers online about etiquette. Source: https://www.reddit.com/r/TeslaLounge/comments/1s09a3r/charger_etiquette_is_it_okay_to_unplug_someones/
5. **S05 — Digital menu boards hide the menu for a 30-second ad (operator community, 2026-04-08).** Operators report customers stop ordering until prices return, reducing throughput; the workaround is putting paper menus back on the counter. Source: https://www.reddit.com/r/digitalsignage/comments/1sfwb6l/when_digital_menus_randomly_change_to_a_30s_advert/
6. **S06 — Livestream buyers knowingly overpay under host hype (community, 2026-06-01).** Viewers describe $15–20 bids for $2.22 items and repeated $190 spins for a roughly $75 prize. Observed action: swiping continues under countdowns, host pressure, parasocial support, and status competition. Source: https://www.reddit.com/r/whatnotapp/comments/1tttl0k/buyers_stop_doing_this/
7. **S07 — Flat-fee lawyers learn too late that a matter paid minimum wage (operator community, 2026-02-16).** Time entry is skipped because the case is already paid; Excel plus Trello is called a manual nightmare and bloated practice software is rejected. Observed action: firms guess profitability from month-end cash instead of matter activity. Source: https://www.reddit.com/r/LawFirm/comments/1r6kgm1/flatfee_trap_how_are_you_guys_tracking_actual/
8. **S08 — Websites block user-delegated AI agents (Hada/tech, observed 2026-10-20).** Booking, shopping, and financial tasks stop at site or bot defenses; users are forced back in for CAPTCHA, login, or payment. Source: https://news.hada.io/topic?id=35590
9. **S09 — A local dental clinic automates sensitive operations on premises (Hada/operator, observed 2026-10-20).** The case describes 904 insurance files and 3,389 pages reconciled locally while humans review uncertain items; discussion questions cost, compliance, and truthfulness. Treat this as evidence of local-processing demand and responsibility anxiety, not a verified ROI claim. Source: https://news.hada.io/topic?id=35381
10. **S10 — Smart-TV owners actively remove ad-heavy home screens (GitHub behavior, repo created 2026-10-17).** `Gathin23/cleanyourtv` reached 5,050 stars and 611 forks by observation; contributors added dozens of brands/models and favored reversible disable/restore over deletion. Source: https://github.com/Gathin23/cleanyourtv
11. **S11 — Korean small businesses report malicious reviews tied to compensation demands (policy/operator, 2026-09-14).** Restaurants and lodging operators described low-star threats, reviews by non-customers, and platform-specific appeals. Source: https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1071159&cbIdx=86&parentSeq=1071159
12. **S12 — Shift-heavy Korean shops struggle with weekly holiday pay and severance rules (policy/operator, 2026-06-02).** Government agencies responded with casebooks, 24-hour consultation, and specialist escalation, signaling recurring explanation and pre-payroll checking work. Source: https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1068751&cbIdx=86
13. **S13 — EU AI Act transparency duties entered enforcement (policy, 2026-08-02).** Chatbots and synthetic/altered content require user-facing disclosure, machine-readable marking, and operational evidence. Source: https://digital-strategy.ec.europa.eu/en/news/commission-starts-enforcing-ai-act-rules-and-new-transparency-requirements-2-august

## Hada Signals

Observed at https://news.hada.io on 2026-10-20 08:06 KST. Points and age are snapshots, not market size.

1. **웹사이트들이 AI 에이전트에 문을 닫고 있음** — 14 points, 1 day ago, 1 comment — https://news.hada.io/topic?id=35590 — 행동 신호: users hand tasks to agents but must reclaim blocked CAPTCHA/login/payment checkpoints.
2. **T3 Code - 여러 AI 코딩 에이전트를 PC와 휴대폰에서 관리하는 앱** — 10 points, 22 hours ago, 2 comments — https://news.hada.io/topic?id=35612 — 행동 신호: long-running local work creates demand for mobile-only decision and review moments.
3. **동네 치과의 AX 전환기** — 54 points, 5 days ago, 38 comments — https://news.hada.io/topic?id=35381 — 행동 신호: sensitive records are kept local while staff approve uncertain outputs; cost and responsibility dominate discussion.
4. **AI 에이전트에게 고치라고 시켰더니 “수정했습니다” 답만 오고 md5는 그대로였다** — 1 point, 22 hours ago, 7 comments — https://news.hada.io/topic?id=35608 — 행동 신호: operators independently verify claimed changes instead of trusting completion text.
5. **Show GN: AI로 만든 3D 트럭, 실제 서비스에 붙이기까지 한 달** — 4 points, 19 hours ago, 1 comment — https://news.hada.io/topic?id=35622 — 행동 신호: customers need a spatial rehearsal before committing to a physical truck/load decision.
6. **Show GN: Poptools - 파일 업로드 없이 사용하는 PDF·HWP·이미지 도구** — 1 point, 16 hours ago — https://news.hada.io/topic?id=35629 — 행동 신호: no-install, no-login, local-feeling utilities reduce one-use friction.

Only S08/H1 directly influenced a rejected draft; S09 informed the local-processing risk lens. The final batch uses Hada as a radar, not as the whole pool.

## GitHub Rising Repo Scan

API query: `created:>2026-10-12`, sort `stars`, order `desc`; observed 2026-10-20 08:02 KST. Stars are an attention/follow-along signal, not proof of revenue.

1. `Gathin23/cleanyourtv` — 5,050 stars, created 2026-10-17 — reversible consumer debloat across TV models; UX seed: model scan, before/after, one-tap restore.
2. `Arekejoker/qwen21-nsfw-pose-skill` — 3,361 stars, created 2026-10-13 — strong demand for precise pose control, but excluded from final batch for safety/reputation fit.
3. `feder-cr/git-ai` — 2,448 stars, created 2026-10-15 — agent-native change lineage; UX seed: make machine actions inspectable without another governance dashboard.
4. `HeyPuter/everything` — 2,331 stars, created 2026-10-13 — rebuilding familiar utilities as open software; UX seed: portable, account-light replacements.
5. `ahwootech/BRUTAL` — 1,987 stars, created 2026-10-14 — direct low-level game-engine access; UX seed: expose the tactile core, not framework chrome.
6. `chenglou/handwired` — 1,804 stars, created 2026-10-15 — turns ordinary JavaScript into trainable behavior; UX seed: visible transformation/rehearsal rather than black-box generation.
7. `ly05010419/MacNativeGames` — 1,659 stars, created 2026-10-17 — users want native, friction-light game access; UX seed: compatibility as an immediate yes/no experience.
8. `Supermedo/uncharted_pc` — 1,574 stars, created 2026-10-15 — fan demand for native reconstruction; excluded because IP/reconstruction risk dominates the product insight.
9. `Leonxlnx/earshot` — 1,504 stars, created 2026-10-15 — coding agents gain CPU-only hearing/review; UX seed: make non-visual failure audible and testable.
10. `Caho1/open-claude-ui` — 1,246 stars, created 2026-10-14 — users study interaction physics, not only screenshots; UX seed: preserve state transitions and control feel.

## Viral Interaction / Game Scan

- **Scary Shawarma Kiosk** appeared in current TikTok/Roblox search results with clips centered on deciding whether each customer is normal or an anomaly: https://www.tiktok.com/@lllonilll/video/7585282473588837687
- Reusable pattern: a one-line rule understood in seconds, repeated physical judgment, and funny failure clips. We did not clone the horror theme. The final batch applies the same “visible pressure + one decisive gesture + shareable receipt” structure to Hype Tax Seatbelt and Charge Courtesy Puck.

## Candidate pool and kill list

Fourteen signal-to-format drafts were considered; only eight below are today's prototype candidates.

- Kept: one-card apartment pass, silent price tag, menu continuity box, reversible TV cleanup, passive matter margin pulse, eight-second ride-end ritual, live-auction bid seatbelt, charger courtesy puck.
- Rejected — **AI checkpoint console** from S08/T3 Code: `saas-clone` + near-duplicate of Approval Latency Relay, Purchase Authority Gate, and TUI Access Path Recorder.
- Rejected — **malicious-review appeal packet** from S11: `proof-packet` + near-duplicate of Payment Proof Escalation Ladder, Warranty Pocket Proof, and Cancellation Truth Sheet.
- Rejected — **AI transparency receipt** from S13: near-duplicate of the 2026-09-08 AI notice receipt.
- Rejected — **shift-pay timeline** from S12: too close to 사장님 의무 타임라인 without a stronger non-dashboard mechanic.
- Rejected — **clinic insurance denial queue** from S09: promising local-processing lane, but currently an operator queue with unverified economics.
- Rejected — **natural-language local file finder** from rising repos: overlaps Clean-Slate Memory Probe and lacks a sharper trigger than “find my file.”

## Novelty / duplicate check

- Checked latest seven available PF batches: `2026-10-19`, `2026-10-14`, `2026-09-08`, `2026-09-03`, `2026-09-02`, `2026-09-01`, `2026-08-27`.
- Explicitly avoided saturated families: generic proof/appeal packets, AI governance/approval consoles, stale-data maps, small-operator margin dashboards, field checklist renames, telephone/relay party mechanics, camouflage, blind boxes, and stacking/Tetris toys.
- p005 survived despite a margin theme because its user, trigger, passive activity data, and bead/ruler interaction differ from Order Fee Microscope and Human Draft Margin.
- p006 survived despite producing a receipt because the core is an eight-second physical lock ritual at ride end, not an appeal or evidence dashboard.
- Dashboard/board/scanner/planner count: 0 as the primary mechanic.
- Distinct mechanics: NFC action strip, tap-to-price e-paper tag, HDMI continuity bridge, reversible TV wipe, activity-bead scope ruler, physical ride-end ritual, hold-to-bid brake, magnetic permission puck.
- Verdict: pass.

## Final 8

### p001 — Practical / Commercial / Field / Korea — 한 장 아파트 패스

- **Title:** 한 장 아파트 패스
- **One-liner:** 앱 여섯 개 대신 NFC 한 번으로 공동현관·방문주차·택배·시설 예약과 오프라인 대안을 여는 입주민 생활 스트립.
- **Target user:** 여러 아파트 앱을 설치하기 어려운 입주민, 고령 가족, 임시 거주자, 관리사무소.
- **Key UX:** 로비 NFC/QR을 탭하면 설치 없이 개인화된 6개 행동 타일이 열리고, 각 타일은 일회용 토큰·완료 확인·앱 장애 시 전화/종이 대안을 함께 보여준다.
- **Required UI sections:** 주소/세대 확인, 오늘 필요한 행동 타일, 방문주차 3단계, 택배함 열기, 시설 예약, 최근 완료 영수증, 앱 장애·오프라인 대안, 관리사무소 도움.
- **Design profile:** `calm-consumer`
- **Theme:** 생활 마찰과 디지털 소외를 줄이는 조용한 안심.
- **Source signal references:** S01, Hada H6.
- **reference_pattern:** resident super-app + NFC one-time pass.
- **twist:** 앱을 하나 더 만드는 대신 한 번 쓰고 닫는 브라우저 행동 스트립과 수동 대안을 같은 화면에 둔다.
- **small_group_fit:** 고령 부모와 임시 거주자가 있는 단지가 설치·비밀번호 지원 문의를 즉시 줄일 수 있다.
- **spread_trigger:** 가족이 “부모님용 한 장” 링크나 NFC 카드를 공유하고 관리사무소는 지원 문의 감소를 체감한다.
- **Output artifact:** 행동별 완료 영수증과 오프라인 대안 카드.
- **First validation:** 10명의 입주민에게 여섯 업무 중 하나를 시켜 설치 앱 방식 대비 완료 시간과 도움 요청 횟수를 비교한다.
- **Development start prompt:** `Build a responsive no-install resident action strip with mocked NFC entry, one-use tokens, completion receipts, and offline recovery paths. Keep it a working flow, not a property dashboard.`
- **Stitch Prompt:** Create a responsive Korean web app called “한 장 아파트 패스” for apartment residents, older family members, temporary tenants, and management offices overwhelmed by separate gate, parking, parcel, rent, and amenity apps. The app is based on observed pull: residents maintain many accounts, repeat setup after reinstalling, lose access during outages, and ask for manual fallbacks. Open directly on a resident-specific strip of six large action tiles after an NFC or QR tap—no marketing hero and no app-install prompt. Build the core interaction around one-use access tokens: choose 방문주차, enter a plate, confirm the valid window, then show a clear completion receipt; demonstrate equivalent flows for parcel locker and facility booking. Required sections: household check, today's action tiles, three-step guest parking, parcel access, facility booking, recent receipts, and a visible offline/phone fallback. Emotional pressure: digital exclusion and the fear of being locked out of one's own building. Design direction: use the `calm-consumer` profile with warm off-white surfaces, one gentle teal accent, generous spacing, 44px controls, friendly recovery text, and no dense property-management dashboard.

### p002 — Practical / Commercial / Field / Korea — 묻지 않는 가격패

- **Title:** 묻지 않는 가격패
- **One-liner:** 가격 질문이 민망한 플리마켓 손님에게 탭 한 번으로 가격·옵션·묶음 할인을 보여주는 재사용 전자가격표.
- **Target user:** 공예 마켓 셀러, 작은 팝업 운영자, 가격을 물었다가 거절하기 부담스러운 손님.
- **Key UX:** 손님이 전자가격표를 탭해 익명으로 가격·재고·옵션을 보고, 셀러는 한 개의 큰 다이얼/슬라이더로 부스 전체 가격과 묶음 제안을 갱신한다.
- **Required UI sections:** 부스 미리보기, 가격 없는 상품 경고, 익명 손님 탭 화면, 옵션/묶음 카드, 셀러 일괄 가격 다이얼, 재고 상태, 탭→구매 전환 기록, 오프라인 표시.
- **Design profile:** `premium-editorial`
- **Theme:** 예산 불안과 망신 회피를 매출 기회로 바꾸는 정중한 가격 공개.
- **Source signal references:** S03.
- **reference_pattern:** e-paper shelf label + quiet luxury product card.
- **twist:** 가격을 묻는 대화를 강요하지 않고 익명 탭으로 공개하되 셀러의 손맛과 프리미엄 감성은 보존한다.
- **small_group_fit:** 1인 공예 셀러는 가격표를 다시 인쇄하지 않고도 행사 중 묶음가를 바꿀 수 있다.
- **spread_trigger:** 손님은 예쁜 가격/구매 카드를 저장하고 셀러는 “질문 없이 팔린 상품” 결과를 동료에게 보여준다.
- **Output artifact:** 부스 가격 세트와 탭·구매 전환 카드.
- **First validation:** 실제/모의 부스 20개 상품에서 무표시 가격 대비 질문 수, 이탈, 구매 전환을 비교한다.
- **Development start prompt:** `Build a tactile e-paper price-tag companion: shopper tap view, vendor bulk-price dial, bundles, stock states, and a small conversion receipt. Avoid generic POS analytics.`
- **Stitch Prompt:** Create a responsive Korean companion app called “묻지 않는 가격패” for craft-fair sellers and shoppers who silently walk away when prices are not visible. The app is based on community reports that asking and then declining feels poor, judged, or disrespectful to the maker, while sellers keep reprinting labels or losing sales they never see. Start with a beautiful booth mockup containing twelve products; three have missing-price halos. Let a shopper tap one product tag anonymously to reveal price, variants, remaining stock, and a tasteful bundle offer without starting a chat. Let the seller turn one prominent bulk-price dial to update linked e-paper tags and preview every change before publishing. Required sections: booth preview, missing-price check, anonymous shopper card, variant/bundle choice, vendor price dial, stock state, offline tag state, and tap-to-purchase outcome. Emotional pressure: budget shame and fear of disappointing the maker. Design direction: use the `premium-editorial` profile with cream paper, warm charcoal type, one muted brass accent, refined product photography blocks, consistent small radii, and no generic POS dashboard or loud sale gradients.

### p003 — Practical / Commercial / Field / Korea — 메뉴 끊김 방지 박스

- **Title:** 메뉴 끊김 방지 박스
- **One-liner:** 디지털 메뉴가 광고로 가려져도 핵심 가격표를 계속 남기고 주문 정체 시간을 재는 소형 HDMI 현장 브리지.
- **Target user:** 카페·분식·푸드코트 점주, 디지털 사이니지 운영사, 피크타임 매장 매니저.
- **Key UX:** HDMI 신호에서 전체화면 광고를 감지하면 우측 가격 레일을 유지하고, 카운터 버튼으로 즉시 메뉴 복귀하며 고객이 메뉴를 못 본 초를 현장 영수증으로 남긴다.
- **Required UI sections:** 라이브 화면 미러, 메뉴/광고 감지 상태, 항상 보이는 가격 레일, 즉시 복귀 버튼, 피크타임 타이머, 손실 초 카운터, 종이 메뉴 fallback, 장치 연결·오프라인 상태.
- **Design profile:** `field-ops`
- **Theme:** 주문 흐름과 현장 매출을 지키는 메뉴 연속성.
- **Source signal references:** S05.
- **reference_pattern:** HDMI watchdog + broadcast lower-third.
- **twist:** 광고를 금지하지 않고 고객이 주문에 필요한 가격만 절대 사라지지 않게 유지한다.
- **small_group_fit:** 점심 피크 30분이 중요한 1~3개 매장은 대형 CMS 교체 없이 작은 박스로 문제를 확인할 수 있다.
- **spread_trigger:** 운영자는 “오늘 광고가 메뉴를 가린 11분” 영수증을 본사·광고팀과 공유한다.
- **Output artifact:** 메뉴 가림 시간 영수증과 광고별 중단 클립.
- **First validation:** 모의 주문줄에서 전체광고/가격레일 유지 조건의 주문 시작 지연과 종이메뉴 요청 수를 비교한다.
- **Development start prompt:** `Build a field console for an HDMI menu continuity bridge with a live screen mirror, ad detection, persistent price rail, physical override simulation, outage state, and lost-customer-seconds receipt.`
- **Stitch Prompt:** Create a desktop-and-tablet Korean field app called “메뉴 끊김 방지 박스” for café, snack-bar, food-court, and signage operators whose digital menu temporarily becomes a full-screen advertisement. Base it on operator reports that customers stop ordering until prices return and staff put printed menus back on the counter. Open on a live HDMI mirror: the center is playing a 30-second promotion, but a high-contrast side rail preserves six core items and prices. Show a large physical-style “메뉴 즉시 복귀” control; pressing it should restore the menu, freeze a lost-customer-seconds counter, and create a short interruption receipt. Required sections: live signal, menu/ad detector, persistent price rail, override control, lunch-rush timer, interruption clips, paper-menu fallback, HDMI/offline diagnostics, and a shareable daily receipt. Design direction: use the `field-ops` profile with graphite and steel surfaces, one vivid orange action accent, sunlight-readable contrast, 48px touch targets, compact status rows, and no decorative dispatch map or marketing hero.

### p004 — Practical / Consumer / Non-web / Korea — 부모님 TV 정리 리모트

- **Title:** 부모님 TV 정리 리모트
- **One-liner:** 스마트TV 광고·추천 앱을 삭제 없이 잠시 숨기고 전후 화면과 복구 QR을 남기는 가족용 정리 도구.
- **Target user:** 광고가 많은 Android/Google TV를 쓰는 부모님과 원격으로 도와주는 자녀.
- **Key UX:** 휴대폰으로 TV 모델을 스캔하면 현재/정리 후 홈 화면을 비교하고, 안전한 비활성화 묶음을 승인한 뒤 TV에 QR로 적용하며 언제든 되돌린다.
- **Required UI sections:** TV 모델 스캔, 호환성 확인, 현재 홈 화면, 정리 후 미리보기, 숨길 항목 체크, 위험/필수 앱 보호, 적용 QR, 복구 코드, 가족 공유 완료 카드.
- **Design profile:** `calm-consumer`
- **Theme:** 부모님의 시청 집중과 가족의 원격 안심.
- **Source signal references:** S10.
- **source_repo:** `Gathin23/cleanyourtv`
- **why_starred:** 며칠 만에 5천 개가 넘는 stars와 수백 forks가 모였고 54개 모델·23개 브랜드 대응이 추가되어, 광고형 TV 홈을 되돌리려는 따라 하기 행동이 강하게 보였다.
- **reference_pattern:** reversible Android debloat + family remote support.
- **twist:** 명령줄 삭제 도구가 아니라 모델 스캔, 전후 미리보기, 보호 목록, QR 복구를 가족 대화 흐름으로 바꾼다.
- **first_screen:** 부모님 TV의 현재 광고 홈과 정리 후 4개 앱 홈을 나란히 보여준다.
- **share_or_play_loop:** 자녀가 완료 카드를 가족 채팅에 보내고 부모가 “원래대로” QR을 직접 보관한다.
- **small_group_fit:** 스마트TV 설정을 전화로 설명해야 하는 가족은 실패·벽돌 공포 없이 반복 지원할 수 있다.
- **spread_trigger:** 전후 화면이 즉각적이고 가족 채팅에서 자랑·추천하기 쉽다.
- **Output artifact:** 모델별 변경 목록, 전후 카드, 완전 복구 QR.
- **First validation:** 5개 TV 모델의 모의 흐름에서 사용자가 필수 앱을 건드리지 않고 정리/복구를 끝내는지 본다.
- **Development start prompt:** `Build a family-safe TV cleanup companion with model scan, before/after home previews, reversible disable list, protected apps, apply QR, and restore receipt. Simulate changes; do not run ADB.`
- **Stitch Prompt:** Create a responsive Korean family companion called “부모님 TV 정리 리모트” for adult children helping parents simplify ad-heavy Android or Google TV home screens. The observed pull comes from the rapidly starred `Gathin23/cleanyourtv` repository, where users added many TV brands and preferred reversible disable/restore lists over deletion. Open on a side-by-side “현재 TV / 정리 후 TV” preview: the current screen is crowded with sponsored tiles, while the proposed screen keeps only live TV, Netflix, YouTube, and settings. Let the user scan or choose a TV model, review a protected-app list, toggle a safe cleanup bundle, and generate an apply QR plus a separate restore QR. Required sections: model scan, compatibility, current/after preview, cleanup choices, protected essentials, change explanation, apply QR, recovery code, and family-share completion card. Emotional pressure: fear of breaking a parent's TV while trying to help. Design direction: use the `calm-consumer` profile with warm neutrals, one gentle blue accent, large preview cards, plain-language safety copy, obvious undo, and no hacker terminal aesthetic or dense device dashboard.

### p005 — Practical / Commercial / Global — Matter Margin Pulse

- **Title:** Matter Margin Pulse
- **One-liner:** 정액 사건의 이메일·통화·문서 활동을 수동 타이머 없이 비용 구슬로 묶어 범위 초과 대화 시점을 보여주는 소형 로펌 도구.
- **Target user:** flat-fee matters를 다루는 2–20인 로펌 파트너, 오피스 매니저, 담당 변호사.
- **Key UX:** 캘린더·메일·통화·문서 활동을 시간 구슬로 자동 묶고 정액 수임료 눈금자 위에 떨어뜨려, 수익 임계선 전에 범위변경 대화 카드를 만든다.
- **Required UI sections:** matter drop zone, passive activity beads, fixed-fee scope ruler, source confidence, unbillable/duplicate merge, burn threshold, scope-change conversation card, weekly portfolio comparison, privacy controls.
- **Design profile:** `financial-analyst`
- **Theme:** 월말 후회 전에 보이지 않던 노동을 가격 언어로 바꾸기.
- **Source signal references:** S07.
- **reference_pattern:** passive activity timeline + project burn analysis.
- **twist:** 변호사에게 타이머 입력을 강요하지 않고 사건 활동을 구슬로 모아 계약 범위와 직접 맞춘다.
- **small_group_fit:** 정액 사건 비중이 높지만 대형 practice suite를 싫어하는 소형 로펌이 즉시 손익 누수를 볼 수 있다.
- **spread_trigger:** 파트너가 클라이언트·팀과 같은 범위변경 카드를 공유해 감정 싸움 대신 사실을 본다.
- **Output artifact:** client-ready scope-change conversation card and internal margin note.
- **First validation:** 세 사건의 익명 활동 CSV로 파트너의 수동 추정과 임계선 탐지 시점을 비교한다.
- **Development start prompt:** `Build a mock flat-fee matter workbench where calendar/email/call/document activity becomes draggable beads on a fee scope ruler and produces a client-ready scope-change card.`
- **Stitch Prompt:** Create a responsive English web app called “Matter Margin Pulse” for small law firms that sell flat-fee matters but avoid manual time entry. Base it on a law-firm community report that a “simple” case can absorb twenty hours, Excel plus Trello becomes a manual nightmare, nobody updates it, and month-end bank balance becomes the profit signal. Open on one matter as a horizontal scope ruler labeled $4,500 fixed fee. Calendar, email, call, and document activity should fall onto the ruler as distinct draggable beads with confidence markers; duplicates can be merged and non-work excluded. As the burn ring approaches the agreed scope, generate a plain client conversation card showing what changed, what remains, and three next-step options. Required sections: matter drop zone, passive activity beads, fee ruler, source confidence, duplicate merge, margin threshold, scope-change card, privacy controls, and a compact portfolio comparison. Design direction: use the `financial-analyst` profile with ink, off-white, restrained navy and green, tabular money/time figures, written interpretation beside every chart, and no rainbow metrics or generic legal dashboard.

### p006 — Practical / Consumer / Field / Global — Ride End Ritual

- **Title:** Ride End Ritual
- **One-liner:** 공유자전거 반납 8초 동안 잠금음·GPS 정지·사진·과금 종료를 한 흐름으로 확인해 이중 결제 공포를 줄이는 현장 의식.
- **Target user:** dockless bike-share commuters, tourists, and operators handling failed-end disputes.
- **Key UX:** rider holds a single eight-second ring while the app checks lock sound, stationary GPS, timestamped photo, and billing stop; missing confirmation immediately opens an alternate-ride/recovery path.
- **Required UI sections:** live ride cost, parking zone check, 8-second hold ring, lock sound meter, GPS freeze, photo capture, billing stop state, failure recovery, alternate ride credit mock, compact receipt.
- **Design profile:** `field-ops`
- **Theme:** 이동 종료 순간의 돈·통제 불안을 확실한 몸동작으로 닫기.
- **Source signal references:** S02.
- **reference_pattern:** aviation-style shutdown checklist + camera proof.
- **twist:** 사건 뒤 증거를 모으는 대신 반납 순간 네 가지 신호를 동시에 닫는 하나의 촉각 의식으로 만든다.
- **small_group_fit:** 반복 이용자는 드물지만 비싼 실패를 여러 번 겪어 8초 확인을 습관화할 동기가 크다.
- **spread_trigger:** 실패 영수증은 지원팀에 바로 공유되고 성공 애니메이션은 “확실히 끝남” 안도감을 준다.
- **Output artifact:** timestamped end receipt or instant unresolved-state recovery ticket.
- **First validation:** 20회 모의 반납에서 확인 누락 발견률, 8초 완료율, 이중결제 불안 점수를 측정한다.
- **Development start prompt:** `Build a mobile-first mocked bike-share ending ritual with a hold ring, sound/GPS/photo/billing confirmations, failure branches, alternate-ride credit, and a compact end receipt.`
- **Stitch Prompt:** Create a mobile-first English app called “Ride End Ritual” for dockless bike-share commuters and tourists who have seen a ride say “ended” while billing or control continues. Community reports describe bikes failing to close, another person riding the still-open bike, repeated support disputes, and paying a competitor to get home. The first screen must be the final eight seconds of a live ride, not a fleet map. Make the rider press and hold one large ring while four confirmations lock in around it: audible lock, stationary GPS, timestamped parking photo, and billing stopped. If any signal fails, keep the state visibly unresolved and offer a mock alternate-ride credit plus one-tap support ticket; never show a false green completion. Required sections: current cost, allowed parking zone, hold ring, sound meter, GPS freeze, camera proof, billing state, failure recovery, alternate ride, and compact receipt. Design direction: use the `field-ops` profile with high-contrast slate, one vivid cyan action accent, 48px controls, haptic-looking confirmation ticks, outdoor legibility, and no decorative mobility dashboard.

### p007 — Fun / Portfolio / Experimental / Global — Hype Tax Seatbelt

- **Title:** Hype Tax Seatbelt
- **One-liner:** 라이브 경매에서 시세 배수와 누적 흥분세를 보며 3초 눌러 입찰하고 끝나면 웃픈 영수증을 받는 소비자 브레이크.
- **Target user:** Whatnot-style live-auction viewers, card/coin collectors, friends who want a spending challenge.
- **Key UX:** live bid button becomes a three-second hold lane; while holding, a price-anchor meter shows market multiple and session spend, then the app produces a playful “hype tax” receipt after each bid.
- **Required UI sections:** mock livestream, current bid, comparable-price anchor, market multiple meter, 3-second hold lane, session cap, host-pressure captions, pass/bid outcome, hype-tax receipt, share/replay.
- **Design profile:** `playful-experimental`
- **Theme:** 도파민·과시·후회를 웃기지만 실제로 느려지게 만드는 자기통제.
- **Source signal references:** S06, Viral Scan V1.
- **reference_pattern:** seatbelt interlock + rhythm hold game.
- **twist:** 경고 팝업이 아니라 입찰 충동 자체를 3초짜리 플레이로 바꾸고 과열 비용을 수집 카드처럼 보여준다.
- **small_group_fit:** 고가 수집품 라이브 경매를 반복 시청하는 커뮤니티는 가격 앵커와 경쟁 규칙을 즉시 이해한다.
- **spread_trigger:** 웃픈 영수증과 “오늘 가장 비싼 3초” 카드는 친구·수집 커뮤니티에 공유하기 좋다.
- **dopamine_hook:** 붉어지는 배수계, 3초 진동, 입찰 성공 팝, 과열 시 코믹한 안전벨트 잠김; 실패도 클립이 된다.
- **Output artifact:** session hype-tax receipt and share card.
- **First validation:** 모의 경매 30회에서 즉시 탭 대비 3초 유지 조건의 철회율과 후회 점수를 비교한다.
- **Development start prompt:** `Build a playful simulated live-auction overlay with a 3-second hold-to-bid lane, market anchors, session cap, host-pressure captions, and shareable hype-tax receipts. No real purchasing.`
- **Stitch Prompt:** Create a responsive experimental web experience called “Hype Tax Seatbelt” for livestream-auction viewers who overbid under countdowns, host shouting, parasocial loyalty, and chat competition. Base it on community examples of people paying $15–20 for $2.22 items and repeatedly spending $190 for a chance at a roughly $75 prize. Open inside a simulated vertical livestream with chat and a rising bid. The bid control is a physical-looking three-second hold lane, not a tap button. While the user holds, reveal recent comparable price, market multiple, session spend, and a host-pressure caption; releasing early means “pass.” After a bid, burst into a funny but precise hype-tax receipt showing item value, premium paid, and the most expensive three seconds of the session. Required sections: mock stream, current bid, comparable anchor, multiple meter, hold lane, session cap, pass/bid outcome, receipt, and share/replay. Design direction: use the `playful-experimental` profile with deep plum, one electric lime accent, oversized meter typography, tactile motion cues, a single obvious interaction, and no casino rainbow or real checkout.

### p008 — Fun / Portfolio / Non-web / Global — Charge Courtesy Puck

- **Title:** Charge Courtesy Puck
- **One-liner:** 공동 충전기 차량에 붙여 완충 후 분리 허용·금지를 빛으로 알리고 NFC로 다음 사람을 줄 세우는 자석형 예절 퍽.
- **Target user:** apartment/condo EV drivers, building managers, and neighbors sharing a small charger bank.
- **Key UX:** car owner rotates a magnetic puck to “unplug after full” or “do not touch”; its light changes when charging finishes, and the next driver taps NFC to join a privacy-safe queue and receive a handoff signal.
- **Required UI sections:** physical puck close-up, two permission modes, charge progress ring, ready light, NFC queue join, anonymous neighbor position, handoff countdown, no-response fallback, etiquette replay card.
- **Design profile:** `playful-experimental`
- **Theme:** 남의 차를 만지는 공포를 명시적 동의와 작은 놀이로 바꾸기.
- **Source signal references:** S04.
- **reference_pattern:** hotel door hanger + deli queue token + magnetic timer.
- **twist:** 전화번호나 앱 계정을 교환하지 않고 차량에 붙은 물리적 허용 상태와 NFC 대기열만 공유한다.
- **small_group_fit:** 충전기 2–8대를 함께 쓰는 아파트는 같은 이웃과 반복 마찰하므로 작은 물리 규칙의 가치가 크다.
- **spread_trigger:** 초록불 인계와 “매너 충전 연속 7회” 카드는 단지 커뮤니티에서 규칙을 퍼뜨린다.
- **dopamine_hook:** 퍽을 돌리는 딸깍, 완충 시 색 반전, 다음 사람에게 넘어가는 빛의 파동, 늦은 차주의 코믹한 타임아웃.
- **Output artifact:** anonymous queue token and handoff replay card.
- **First validation:** 6칸 모의 주차장에서 표지 없음/종이 메모/퍽 조건의 대기시간과 타인 차량 접촉 불안을 비교한다.
- **Development start prompt:** `Build a web-based hardware companion simulation for a magnetic EV courtesy puck: rotate permission mode, charging ring, ready light, NFC queue join, anonymous handoff, timeout fallback, and replay card.`
- **Stitch Prompt:** Create a responsive hardware-companion prototype called “Charge Courtesy Puck” for apartment and condo EV drivers sharing only a few chargers. Base it on a resident asking whether touching and unplugging a fully charged neighbor's car is rude because there is no visible permission or queue. The first screen should be a large, tactile close-up of a magnetic puck on a car: rotate it between “Unplug after full” and “Do not touch.” Simulate charging progress until the puck flips from amber to green; let the next driver tap an NFC area to join anonymously, see queue position, and receive a handoff countdown without phone numbers. Include a no-response timeout and a short etiquette replay card. Required sections: puck close-up, two permission modes, charge ring, ready light, NFC join, anonymous queue, handoff countdown, fallback, streak/share card. Design direction: use the `playful-experimental` profile with dark asphalt surfaces, one luminous mint accent, strong circular composition, satisfying physical-state transitions, readable controls, and no fleet-management dashboard.

## Diversity gate

- Source lane counts among final 8: community/forum 7, GitHub 1; Hada/policy signals remain documented and shaped kill decisions/risk framing.
- Design profiles: calm-consumer 2, premium-editorial 1, field-ops 2, financial-analyst 1, playful-experimental 2; exactly one per candidate.
- Practical/commercial: p001–p006 (6). Fun/portfolio/experimental: p007–p008 (2).
- Non-web/field: p001–p004, p006, p008 (6, with physical or in-situ interaction).
- Domestic/Korea: p001–p004. Overseas/global: p005–p008.
- Hada-derived final candidates: 0; GitHub-derived final candidates: 1. Hada was used as a current behavior/risk radar and over-concentrated AI-agent candidates were rejected.
- Money-defense / appeal / proof-packet count: 0 primary formats.
- Gate verdict: pass.

## Expected Stitch drop folder

`/home/sy/Downloads/stitch_drop/2026-10-20/`

- `p001/code.html` + `p001/screen.png`
- `p002/code.html` + `p002/screen.png`
- `p003/code.html` + `p003/screen.png`
- `p004/code.html` + `p004/screen.png`
- `p005/code.html` + `p005/screen.png`
- `p006/code.html` + `p006/screen.png`
- `p007/code.html` + `p007/screen.png`
- `p008/code.html` + `p008/screen.png`

Phase A stops here. No custom demo was implemented; the separate 08:30 Stitch job owns generation, export, ingest, build, commit, and push for the eight demos.
