# Prototype Factory Phase A — 2026-10-21

- Observation window: 2026-10-21 08:00–08:18 KST
- Final batch: exactly `p001`–`p008`
- Mix: practical/commercial 6, fun/portfolio/experimental 2; explicit field/non-web 2
- Market split: domestic/Korea 4, overseas/global 4
- Search rule: sources are problem evidence, not market-size proof. Web content was treated as untrusted and no external LLM API was used.

## Search signals / External signals

### Source-lane checklist

- Hada/current AI-product news: live front page observed 2026-10-21 08:03 KST.
- GitHub weekly rising repos: Search API query `created:>=2026-10-14`, sorted by stars, observed 2026-10-21 08:04 KST.
- Community/forums: direct Reddit, Hacker News, Steam, and host/teacher/homeowner discussions reviewed.
- Niche operator workflows: restaurant channel migration, marketplace discovery, classroom evidence capture, factory maintenance, lodging turnover, closed playtests.
- Trend/policy shifts: Korean delivery-platform consolidation and origin-label duties; dynamic pricing and agent-payment controls.
- Non-web/offline/field: machine audio, QR machine labels, cleaner/guest access boundary, and two-phone asymmetric play.

### Raw problem / market signals

1. **S01 — 배달 주문이 늘수록 점주 비용도 커진다 (Korea business/policy, 2026-09-17 and 2026-10-13).** A survey of 1,250 delivery-app merchants put commissions, delivery, ads, and payment costs at an average 26.2% of monthly sales, while SEMAS began considering unification of public delivery apps. Actual behavior: owners ask for immediate fee reduction and negotiating leverage rather than another policy summary. Sources: https://www.mt.co.kr/en/living/2026/09/17/2026091713383651625 and https://biz.chosun.com/en/en-industry/2026/10/13/J3L3RHZPJZAT5PLYGAX24AWOF4/
2. **S02 — 배달앱 원산지 고지 의무가 10월 22일 시행된다 (Korea policy, announced 2026-10-01).** Platforms must notify sellers about origin-label rules, creating menu, supplier-document, and channel-sync work. Source: https://www.korea.kr/news/policyNewsView.do?newsId=156783892
3. **S03 — AI·디지털 가격표가 “나만 비싸게 사는가” 불신을 키운다 (consumer/news, 2026-10-18).** AP reports consumer anxiety over location, history, or profile-driven price variation; at least 30 US states were considering related bills. Actual behavior: people compare screenshots and speculate socially because the reason for a difference is opaque. Source: https://apnews.com/article/ai-prices-dynamic-customers-technology-64c446cd117d3be664de4ab570fb9857
4. **S04 — AI 구매 권한을 품목·판매자·예산으로 증명하려는 시도 (payments/tech, 2026-10-13).** American Express announced an intent-token framework before agent purchases. Pain: a user needs to prove what was authorized when an agent buys the wrong thing or exceeds scope. Source: https://techcrunch.com/2026/10/13/amex-introduces-a-framework-to-prevent-ai-agents-from-making-unauthorized-purchases/
5. **S05 — AI 병원 근무표가 숙련도·휴무·연속근무를 놓친다는 현장 반발 (health/work, 2026-10-02).** Nurses report re-trading shifts and disputing schedules after automation, while skill-mix imbalance becomes a safety concern. Source: https://www.wired.com/story/ai-making-mess-of-nurses-schedules-they-say-its-a-safety-issue/
6. **S06 — 공장 고장 지식이 은퇴 숙련자와 두꺼운 매뉴얼에 묶인다 (field/operator, 2026-10-15).** Plant managers say AI pilots fail when they ignore installed equipment, safety rules, and actual flow; workers still hunt for a particular veteran during faults. Source: https://www.manufacturingdive.com/news/what-manufacturing-plant-managers-think-of-the-ai-and-automation-boom/832776/
7. **S07 — 설정 변경 뒤 상품이 링크로는 열리지만 검색에서는 사라진다 (community, 2026-10-15).** An Airbnb host saw zero bookings after a pricing-rule edit; support later attributed it to a backend sync error hiding the listing from generic search. Actual behavior: the host blamed demand for months because there was no shadow-buyer check. Source: https://www.reddit.com/r/airbnb_hosts/comments/1x695j8/no_bookings_since_price_change/
8. **S08 — 교사가 수업보다 감사용 서류에 시간을 쓴다 (community, 2026-10-09).** Teachers describe every free period being consumed by IPP/EAL benchmarks, annotated files, and weekly grade evidence; one workaround is taking sick leave to finish paperwork. Source: https://www.reddit.com/r/CanadianTeachers/comments/1x1yxle/im_drowning_in_paperwork/
9. **S09 — 이해하지 못한 AI 코드를 승인하는 것이 일상이 된다 (community/Hacker News, 2026-10-19).** Reviewers say thousands of generated lines make line-by-line inspection incompatible with promised speed; the workaround is smaller stories, human-owned abstractions, and explicit invariants. Source: https://news.ycombinator.com/item?id=50151036
10. **S10 — 청소 중 투숙객이 조기 입실해 침입자처럼 보였다 (community/field, 2026-09-26).** Hosts and cleaners recommend withholding the guest code until cleaning/QC finishes or activating it only at check-in. Source: https://www.reddit.com/r/airbnb_hosts/comments/1wr597l/guest_showed_up_early_and_went_to_sleep_as/
11. **S11 — 집주인은 40개 유지보수 체크리스트보다 손해를 막는 다섯 가지를 원한다 (community/field, 2026-09-30).** Homeowners ask which tasks actually prevent expensive spring repairs and how to perform unfamiliar steps. Source: https://www.reddit.com/r/homeowners/comments/1wufosn/whats_actually_on_your_fall_home_maintenance_list/
12. **S12 — 인디 개발자가 AI 복제 우려로 공개 데모를 철회한다 (creator/Steam, 2026-10-16).** A studio moved an October 19 demo to lottery-selected closed sessions because streaming restrictions were unenforceable and a copy might launch first. Actual behavior: public discovery is sacrificed for controlled exposure. Source: https://store.steampowered.com/news/app/4150720/view/746066581090468248

## Hada Signals

Observed live at https://news.hada.io on 2026-10-21 08:03 KST. Points and age are snapshots, not market-size evidence.

1. **Harness Engineering 101 - Python 약 300줄로 배우는 AI 에이전트 구현** — 49 points, 1 day ago, 1 comment — https://news.hada.io/topic?id=35651 — **행동 신호 / behavior signal:** builders want inspectable, framework-light internals rather than magic wrappers.
2. **Ask HN: AI가 작성한 코드를 이해하지 못한 채 배포하는 문제, 어떻게 대처하시나요?** — 19 points, 1 day ago, 5 comments — https://news.hada.io/topic?id=35662 — **행동 신호 / behavior signal:** teams trade review depth for throughput and invent smaller, human-owned checkpoints.
3. **Anatomy - 기술 개념을 움직이는 입체 도해로 만드는 AI 에이전트 스킬** — 21 points, 23 hours ago, 1 comment — https://news.hada.io/topic?id=35670 — **행동 신호 / behavior signal:** readers prefer a manipulable explanation over another static diagram.
4. **Timestral - Mistral이 공개한 시계열 파운데이션 모델** — 12 points, 1 day ago, 1 comment — https://news.hada.io/topic?id=35642 — **행동 신호 / behavior signal:** sensor, demand, and equipment sequences are becoming usable inputs, but operators still need grounded interpretation and safe next checks.
5. **웹사이트들이 AI 에이전트에 문을 닫고 있음** — 17 points, 2 days ago, 1 comment — https://news.hada.io/topic?id=35590 — **행동 신호 / behavior signal:** delegated tasks stop at discovery, CAPTCHA, login, and payment boundaries, forcing human recovery.
6. **T3 Code - 여러 AI 코딩 에이전트를 PC와 휴대폰에서 관리하는 앱** — 11 points, 2 days ago, 2 comments — https://news.hada.io/topic?id=35612 — **행동 신호 / behavior signal:** long-running work creates demand for tiny remote decisions, not a second full desktop.

H4 directly informed p004. H2 shaped a rejected candidate because the recent batch already contains Code Comprehension Checkout.

## GitHub Rising Repo Scan

GitHub Search API query: `created:>=2026-10-14`, sort `stars`, order `desc`; observed 2026-10-21 08:04 KST. Stars are attention/follow-along evidence, not revenue proof.

1. `deepseek-ai/DeepInfer` — 11,945 stars, created 2026-10-16 — large-scale inference performance; UX seed: show bottlenecks and capacity decisions rather than model mystique.
2. `Gathin23/cleanyourtv` — 11,496 stars, created 2026-10-17 — reversible TV debloat; UX seed: scan, preview, change, and one-tap restore.
3. `ly05010419/MacNativeGames` — 2,765 stars, created 2026-10-17 — demand for native compatibility; UX seed: an immediate yes/no readiness surface.
4. `ahwootech/BRUTAL` — 2,056 stars, created 2026-10-14 — low-level game framework; UX seed: direct tactile control and visible physics.
5. `Leonxlnx/earshot` — 1,937 stars, created 2026-10-15 — CPU-only ears for coding agents; UX seed: record, compare, hear, and review non-visual failures.
6. `chenglou/handwired` — 1,852 stars, created 2026-10-15 — ordinary JavaScript becomes trainable behavior; UX seed: let users demonstrate a behavior instead of configuring a model.
7. `simbasjungles/free-my-tv` — 1,734 stars, created 2026-10-19 — ad-free TV launcher with one-button undo; UX seed: reversible household changes.
8. `Supermedo/uncharted_pc` — 1,716 stars, created 2026-10-15 — native reconstruction interest; excluded because IP risk dominates the product insight.
9. `xiaoyang111222/cn-math-taxonomy` — 1,560 stars, created 2026-10-18 — curriculum graph and prerequisite diagnosis; UX seed: explain the missing prerequisite, not only the wrong answer.
10. `Caho1/open-claude-ui` — 1,286 stars, created 2026-10-14 — interaction reconstruction with component/physics documentation; UX seed: preserve states and control feel, not screenshot resemblance.

## Viral Interaction / Game Scan

- **V1 — Left! Left! LEFT!** reportedly gained 170,000 Steam wishlists in six days after a short teaser. One player drives nearly blind while the navigator handles a physics-driven tablet and must abandon navigation to operate the wipers. Sources: https://store.steampowered.com/app/5362020/Left_Left_LEFT/ and https://www.roadandtrack.com/news/a74134971/left-left-left-rally-driving-video-game/
- **V2 — Did You See That** uses two players seeing different anomalies in the same room; the one-line rule fits a short clip and makes disagreement visible. Source: https://www.tiktok.com/@sharedxp.official/video/7685499140335324438
- Reusable interaction: one rule understood in seconds, asymmetric information, a physical interruption, funny failure, and an automatically shareable last-eight-seconds clip. p008 uses that pattern without copying a title, art style, or level design.

## Candidate pool and kill list

Fourteen signal-to-format drafts were considered; exactly eight are final.

- Kept: next-order migration pass, listing visibility whistle, seven-second teacher pin, machine-sound lineage, turnover credential gate, controlled demo veil, same-cart face-off, wiper blind rally.
- Rejected — **origin sync checker** from S02: direct repeat of 2026-10-19 Origin Patch Queue.
- Rejected — **agent purchase intent receipt** from S04: repeats Approval Latency Relay and AI Notice Receipt.
- Rejected — **nurse roster safety planner** from S05: valuable pain, but the current form is still a generic schedule/risk board; needs a stronger bedside mechanic.
- Rejected — **AI code comprehension gate** from S09/H2: direct collision with Code Comprehension Checkout.
- Rejected — **five before freeze checklist** from S11: better than a 40-item list, but still too close to the saturated guided field-checklist family.
- Rejected — **legacy app fallback strip** from workforce/consumer workaround searches: too close to yesterday's one-card apartment pass.

## Novelty / duplicate check

- Checked eight recent available batches: `2026-10-20`, `2026-10-19`, `2026-10-14`, `2026-09-08`, `2026-09-03`, `2026-09-02`, `2026-09-01`, `2026-08-27`.
- Explicitly avoided generic proof/appeal packets, AI governance consoles, fee dashboards, stale maps, guided repair cameras, cancellation rescue, telephone relays, blind-box audio toys, camouflage, and stacking/Tetris mechanics.
- p001 survives Order Fee Microscope because the primary action is a customer-facing channel-migration offer issued at checkout, not analysis of order fees.
- p002 survives Scrape Canary Studio because its trigger is a seller edit and its evidence is geo/account-specific buyer discovery, not a general scraper-health monitor.
- p003 uses in-class voice/photo observation and local redaction for a new user and moment; it is not an appeal packet.
- p004 uses acoustic matching plus a mandatory physical safety sequence, not a repair camera or inventory checklist.
- p007 differs from yesterday's silent price tag: multiple shoppers reveal the same cart simultaneously and produce a social comparison artifact.
- p008 is simultaneous asymmetric control with physical interruptions, not a message-copying telephone/relay game.
- Dashboard/board/planner count as the primary mechanic: 0. Verdict: pass.

## Final 8

### p001 - Practical / Commercial / Korea - 다음 주문 이사권

- **Title:** 다음 주문 이사권
- **One-liner:** 배달 영수증 한 장으로 다음 주문을 공공·직접 채널로 옮길 이유와 혜택을 바로 건네는 점주용 전환 실험.
- **Target user:** 배달앱 비용에 눌리지만 단골을 잃을까 가격·채널을 바꾸지 못하는 한국 음식점 점주.
- **Key UX:** 주문 영수증을 불러오면 이번 주문의 실수령액이 한 줄로 펼쳐지고, 점주가 공공앱·직접포장·스탬프 중 하나의 다음 주문 혜택을 골라 QR 미니 영수증으로 발행한다.
- **Required UI sections:** 주문 불러오기, 비용 분해 스트립, 실수령액, 전환 혜택 3종, 고객용 QR 영수증 미리보기, 발행·회수 상태, 다음 주문 전환 결과, 오남용 방지.
- **Design profile:** `financial-analyst`
- **Theme:** 수수료 압박을 고객과의 투명한 전환 실험으로 바꾸는 자산 방어.
- **Source signal references:** S01.
- **source_repo:** N/A — market/community-derived.
- **why_starred:** N/A.
- **reference_pattern:** receipt coupon + airline status-match offer + channel migration experiment.
- **twist:** 비용을 보는 데서 끝내지 않고 현재 주문 순간에 고객에게 다음 채널의 이익을 발행한다.
- **first_screen:** 실제 주문 한 건의 판매가, 비용, 점주 실수령액과 “다음 주문을 어디로 옮길까요?” 선택지가 한 화면에 보인다.
- **share_or_play_loop:** 고객은 QR 혜택을 가족 채팅에 전달하고 점주는 채널별 회수율을 비교한다.
- **small_group_fit:** 배달 매출 비중이 높고 단골 연락처를 직접 보유하지 않은 1–3개 매장 점주가 바로 시험할 수 있다.
- **spread_trigger:** 고객용 “다음 주문 1,500원 절약” 카드와 점주용 주간 이사 성공 카드.
- **output artifact:** 만료·회수 상태가 있는 채널 이사 QR 영수증.
- **plan_brief:** 문제는 주문 증가와 이익 증가가 분리된 점이다. 유입은 POS/배달 영수증 스캔, 검증은 매장 3곳의 100건 쿠폰 회수율, 코어 루프는 주문 불러오기→혜택 선택→QR 발행→다음 주문 회수다. 첫 화면은 한 주문의 돈 흐름과 한 가지 전환 행동에 집중하고, QA는 비용 합계·만료·중복 회수·390px 영수증 가독성을 확인한다.
- **development_start_prompt:** `Build a receipt-level channel-migration experiment with mocked order import, transparent cost split, three customer offers, QR issue/redeem states, expiry, duplicate prevention, and a compact weekly outcome. Do not build a generic margin dashboard.`
- **Stitch prompt:** Create a responsive Korean merchant web app called “다음 주문 이사권” for restaurant owners squeezed by delivery commissions, ads, delivery charges, and payment fees. Start on one realistic ₩18,900 order, visually split into platform costs and owner take-home, then ask one question: “다음 주문을 어디로 옮길까요?” Let the owner choose public-delivery app, direct pickup, or stamp benefit, set one clear reward, and preview a tiny QR receipt for the customer. Show issued, expired, redeemed, and duplicate-use states plus a compact outcome strip after several orders. Required sections: order import, cost strip, take-home amount, three migration offers, customer receipt preview, issue/redeem status, and weekly migration result. Design direction: use the `financial-analyst` profile with ink and off-white surfaces, one muted green accent, tabular numbers, written interpretation beside every figure, and no rainbow charts or generic margin dashboard.

### p002 - Practical / Commercial / Korea - 검색 실종 휘슬

- **Title:** 검색 실종 휘슬
- **One-liner:** 가격·재고 수정 뒤 상품이 링크로는 열리지만 검색에서 사라지는 순간을 그림자 검색으로 잡는 셀러 경보기.
- **Target user:** 네이버 스마트스토어·숙박·마켓플레이스에서 가격과 재고를 자주 고치는 1인 셀러와 운영대행사.
- **Key UX:** 변경 이벤트가 생기면 가상의 지역·로그아웃·신규 계정 구매자들이 같은 검색어를 재현하고, 직링크 정상/검색 미노출의 모순만 큰 휘슬 카드로 띄운다.
- **Required UI sections:** 최근 변경 이벤트, 검색어·지역·계정 조건, 그림자 구매자 4개 레인, 직링크 상태, 검색 노출 상태, 전후 결과 캡처, 재현 버튼, 복구 확인.
- **Design profile:** `operator-dense`
- **Theme:** 보이지 않는 유통 오류와 매출 누수를 빠르게 증명하기.
- **Source signal references:** S07.
- **source_repo:** N/A — community-derived.
- **why_starred:** N/A.
- **reference_pattern:** synthetic monitoring + mystery shopper + smoke alarm.
- **twist:** 페이지가 살아 있는지만 보지 않고 실제 구매자가 검색으로 발견할 수 있는지를 변경 직후 재현한다.
- **first_screen:** “URL 정상 / 검색 실종”이라는 모순, 마지막 수정 시각, 영향 검색어가 가장 먼저 보인다.
- **share_or_play_loop:** 셀러는 재현 캡처를 지원팀이나 대행사에 보내고 복구 뒤 초록 휘슬 카드를 공유한다.
- **small_group_fit:** 검색 노출이 매출 대부분을 좌우하지만 자체 관측 인프라가 없는 소규모 셀러.
- **spread_trigger:** 지원 문의에 바로 붙일 수 있는 조건·시각·캡처가 포함된 실종 카드.
- **output artifact:** 지역·계정·검색어가 고정된 노출 실종 재현 카드.
- **plan_brief:** 문제는 직링크가 정상이라 셀러가 발견 장애를 늦게 알아차리는 것이다. 유입은 가격/재고 수정 webhook 또는 수동 체크, 검증은 모의 상품 20건에 의도적 노출 오류를 넣어 탐지시간과 오탐률을 본다. 코어 루프는 변경 감지→그림자 검색→모순 경보→재현 캡처→복구 확인이다. QA는 조건 표시, 오류/정상 전환, 빈 결과, 속도 제한, 모바일 대응을 확인한다.
- **development_start_prompt:** `Build a marketplace discovery monitor that reacts to a seller edit, runs four mocked shadow-shopper searches, distinguishes direct-link health from search visibility, and produces a support-ready reproduction card. Keep the main experience incident-first, not dashboard-first.`
- **Stitch prompt:** Create a responsive Korean B2B app called “검색 실종 휘슬” for small marketplace sellers whose listing can remain reachable by URL while disappearing from buyer search after a price or inventory edit. Open on a single incident, not an analytics home: “URL 정상 / 검색 실종,” last edit time, affected query, and estimated lost discovery window. Show four shadow-buyer lanes—logged out, new account, Seoul, and Busan—replaying the same query with compact result snapshots. Let the operator change query/region, rerun once, compare before/after, and export a support-ready card containing conditions, timestamps, and captures. Required sections: change event, search conditions, four buyer lanes, direct-link health, discovery status, reproduction, support card, and recovery check. Design direction: use the `operator-dense` profile with deep navy and fog, one sharp amber accent, compact rows, 40px controls, and no decorative commerce hero.

### p003 - Practical / Commercial / Korea - 수업 중 7초 기록핀

- **Title:** 수업 중 7초 기록핀
- **One-liner:** 수업 중 음성·사진 관찰을 7초 안에 남기고 교사 검토 후 학교 서식 증거로 바꾸는 로컬 우선 기록 도구.
- **Target user:** 개별화교육·언어발달·생활기록 증거를 반복 작성하는 초중등 교사와 특수교사.
- **Key UX:** 교사가 학생 별칭을 탭하고 7초 음성 또는 사진을 남기면 로컬에서 식별자를 가린 뒤 관찰·기준·다음 행동 칩으로 정리하며, 원문과 변환본을 함께 승인한다.
- **Required UI sections:** 별칭 학생 스트립, 7초 음성/사진 캡처, 수업 타이머, 로컬 비식별화 미리보기, 관찰 칩, 학교 서식 매핑, 교사 승인, 감사 이력, 내보내기.
- **Design profile:** `calm-consumer`
- **Theme:** 서류 노동을 줄이되 교사의 판단권과 학생 개인정보를 지키기.
- **Source signal references:** S08.
- **source_repo:** N/A — community-derived.
- **why_starred:** N/A.
- **reference_pattern:** field voice note + evidence highlighter + mail-merge template.
- **twist:** 수업이 끝난 뒤 기억을 재구성하지 않고 현장에서 7초만 기록하며 자동 문장을 교사가 반드시 승인한다.
- **first_screen:** 수업 타이머와 학생 별칭, 큰 음성·사진 버튼만 보여 집중을 끊지 않는다.
- **share_or_play_loop:** 승인된 관찰 카드는 동학년 교사와 보호자 회의에 필요한 최소 정보로 재사용된다.
- **small_group_fit:** 반복 관찰 서식이 많은 특수·언어지원 교사는 한 주 안에 시간 절감 여부를 판단할 수 있다.
- **spread_trigger:** “이번 주 되찾은 수업 준비 시간” 카드와 개인정보 제거 확인표.
- **output artifact:** 원문 근거와 교사 승인 이력이 연결된 서식-ready 관찰 카드.
- **plan_brief:** 문제는 감사용 근거가 수업 준비 시간을 침식하는 것이다. 유입은 수업 시작 홈화면/NFC 좌석표, 검증은 교사 5명이 모의 관찰 30건을 기존 방식과 비교한다. 코어 루프는 별칭 선택→7초 캡처→로컬 가림→기준 매핑→교사 승인→서식 내보내기다. 첫 화면은 방해 최소화, QA는 가림 전후, 승인 없는 내보내기 차단, 오프라인, 삭제, 44px 제어를 확인한다.
- **development_start_prompt:** `Build a local-first classroom observation flow with alias roster, seven-second voice/photo capture, redaction preview, evidence chips, teacher approval, audit history, and template export. Mock processing locally and never auto-invent assessments.`
- **Stitch prompt:** Create a responsive Korean teacher tool called “수업 중 7초 기록핀” for educators drowning in IPP, EAL, and audit evidence. The first screen must stay quiet during class: a lesson timer, student aliases, and two oversized controls for a seven-second voice note or photo. After capture, show a local redaction preview, keep the original evidence visible, suggest editable observation/criterion/next-step chips, and require explicit teacher approval before mapping to a school form. Include offline state, delete-now control, audit history, and a clean export preview; never imply that the system evaluates a child automatically. Required sections: alias roster, capture, redaction, evidence chips, template mapping, approval, history, and export. Design direction: use the `calm-consumer` profile with warm neutrals, one gentle indigo accent, generous spacing, 44px controls, reassuring privacy copy, and no dense school administration dashboard.

### p004 - Practical / Commercial / Field / Korea - 설비 소리 족보

- **Title:** 설비 소리 족보
- **One-liner:** 기계의 10초 소리를 숙련자 표본과 비교해 안전 확인 순서와 다음 교대조 인계까지 이어주는 현장 훈련 카드.
- **Target user:** 숙련자 은퇴와 신규 인력 증가를 동시에 겪는 한국 중소 제조공장 정비팀.
- **Key UX:** 작업자가 설비 QR을 찍고 10초 소리를 녹음하면 유사한 숙련자 표본 3개와 차이를 듣고, 잠금·온도·진동의 물리 확인 순서를 완료한 뒤 결과를 교대조에 남긴다.
- **Required UI sections:** 설비 QR/ID, 10초 녹음, 파형 비교, 숙련자 표본 3개, 신뢰도와 불확실성, 안전 잠금 단계, 물리 확인 순서, 해결/미해결 인계, 오프라인 상태.
- **Design profile:** `field-ops`
- **Theme:** 사라지는 숙련 지식을 초보자의 귀와 안전 행동으로 이어주기.
- **Source signal references:** S06, H4.
- **source_repo:** `Leonxlnx/earshot`
- **why_starred:** created 2026-10-15 and reached 1,937 stars by observation, signaling interest in giving agents a reviewable audio sense without GPU dependence.
- **reference_pattern:** Shazam matching + Andon cord + veteran call-out card.
- **twist:** 소리로 고장을 단정하지 않고 후보를 좁힌 뒤 반드시 물리 안전 확인과 인간 인계로 이어진다.
- **first_screen:** 설비 ID, 큰 10초 녹음 링, “진단 아님—안전 확인 시작” 문구가 야외·장갑 환경에서도 보인다.
- **share_or_play_loop:** 해결된 소리 카드는 다음 교대조와 신규자 교육 세트에 추가된다.
- **small_group_fit:** 설비 종류는 적지만 특정 선임자 의존도가 높은 20–100명 공장이 작은 표본으로 시작할 수 있다.
- **spread_trigger:** “이 소리를 알아낸 사람/확인 순서”가 남는 교대 인계 카드.
- **output artifact:** 비교 가능한 소리 표본과 안전 체크가 결합된 설비 족보 카드.
- **plan_brief:** 문제는 고장 순간의 경험이 사람과 함께 사라지는 것이다. 유입은 설비 QR, 검증은 녹음된 정상/이상 샘플 30개에 대해 초보자가 올바른 첫 안전행동을 고르는지 비교한다. 코어 루프는 QR→녹음→표본 비교→안전 확인→결과 인계다. QA는 저신뢰 상태, 배경소음, 오프라인, 장갑 터치, 진단 면책, 미해결 escalation을 확인한다.
- **development_start_prompt:** `Build an offline-friendly machine-audio training companion with QR machine selection, ten-second recording, three veteran-labeled comparisons, uncertainty, mandatory safety checks, and shift handoff. Do not claim automatic diagnosis.`
- **Stitch prompt:** Create a responsive Korean field app called “설비 소리 족보” for small factories losing troubleshooting knowledge as veterans retire. Begin with a machine QR/ID and a large ten-second recording ring usable with gloves. After recording, compare the waveform and sound to three veteran-labeled examples, let the worker audition each, and show uncertainty clearly. Never declare a diagnosis; instead unlock a physical safety sequence—lockout, temperature, vibration, guard check—then record solved, unresolved, or escalate-to-senior and hand the result to the next shift. Required sections: machine ID, recorder, waveform, three references, confidence, safety sequence, resolution, handoff, and offline state. Design direction: use the `field-ops` profile with graphite and steel, one vivid cyan accent, 48px controls, high-contrast status rows, and no decorative factory dashboard.

### p005 - Practical / Commercial / Global - Turnover Gate

- **Title:** Turnover Gate
- **One-liner:** 청소 완료와 객실 확인이 끝난 뒤에만 투숙객 출입 코드를 열어 조기 입실 충돌을 막는 숙박 인계 잠금.
- **Target user:** short-term-rental hosts, cleaners, small property managers, and guests requesting early entry.
- **Key UX:** the guest code remains visibly sealed until cleaner checkout and one room-ready confirmation; early access becomes a separate host-approved path, while cleaners have a one-tap safety alarm.
- **Required UI sections:** property/turnover timeline, cleaner arrival, active cleaning banner, room-ready proof, QC confirmation, sealed guest credential, early-entry request, host approval, safety alert, event log.
- **Design profile:** `premium-editorial`
- **Theme:** invisible labor and guest convenience meet at a safe, explicit handoff.
- **Source signal references:** S10.
- **source_repo:** N/A — community-derived.
- **why_starred:** N/A.
- **reference_pattern:** hotel room seal + airlock + chain-of-custody handoff.
- **twist:** check-in time alone never opens the door; a human turnover event closes one role before the next credential activates.
- **first_screen:** a large sealed door card says who is inside, what remains, and exactly when the guest code can activate.
- **share_or_play_loop:** cleaner, host, and guest receive role-specific handoff cards from the same event timeline.
- **small_group_fit:** hosts with 2–20 units and external cleaners feel boundary failures immediately but cannot justify enterprise PMS complexity.
- **spread_trigger:** a calm “room released at 14:37” card replaces accusatory chat screenshots.
- **output artifact:** role-signed turnover release event with credential activation status.
- **plan_brief:** problem is that clock-based access ignores cleaners still working. Arrival is booking/cleaner message, validation is 20 simulated turnovers including early guests and failed proof. Core loop is cleaner arrival→cleaning→room-ready→QC→credential release; early entry forks to explicit approval. QA covers missing photo, late cleaner, offline lock, guest at door, panic alert, and timezone.
- **development_start_prompt:** `Build a hospitality turnover handoff with sealed guest credential, cleaner progress, room-ready proof, QC release, early-entry approval, safety alert, and role-specific event log. Mock the lock; make boundary state unmistakable.`
- **Stitch prompt:** Create a responsive hospitality workflow called “Turnover Gate” for short-term-rental hosts, cleaners, and guests. Open on one elegant but unmistakable sealed-door state: cleaner inside, two tasks left, guest code inactive. Let the cleaner check in, finish tasks, attach one room-ready proof, and request release; let the host perform a lightweight QC confirmation that activates the guest credential. Model early arrival as a separate request with host approval and include a one-tap cleaner safety alert when an unknown person enters. Show late, missing-proof, offline-lock, approved-early-entry, and released states in one event timeline. Required sections: turnover timeline, cleaning status, proof, QC, credential seal, early request, safety alert, and event log. Design direction: use the `premium-editorial` profile with cream, warm charcoal, one muted brass CTA, refined typography, and no cluttered property dashboard.

### p006 - Practical / Commercial / Global - Demo Veil Rooms

- **Title:** Demo Veil Rooms
- **One-liner:** 참가자별 워터마크·기능 권한·회수 가능한 빌드로 인디게임 비공개 체험을 운영하는 통제형 플레이테스트 룸.
- **Target user:** indie game teams that need external feedback before launch but fear uncontrolled streaming or rapid cloning.
- **Key UX:** the studio creates a session, assigns each tester a visible moving watermark and allowed feature slice, watches access events, revokes a room instantly, and receives feedback tied to the exact build/scene.
- **Required UI sections:** test session creator, invite roster, per-tester watermark preview, feature gates, build/version, access window, revoke control, clip fingerprint, structured feedback, incident history.
- **Design profile:** `operator-dense`
- **Theme:** 창작자가 발견 가능성과 출시 선행권 사이의 공포를 통제 가능한 노출로 바꾸기.
- **Source signal references:** S12.
- **source_repo:** N/A — creator/Steam-derived.
- **why_starred:** N/A.
- **reference_pattern:** film screener room + feature flag + revocable access badge.
- **twist:** 복제를 막는다고 약속하지 않고 누가 어떤 기능을 언제 봤는지 통제·회수·추적하면서 피드백은 같은 장면에 묶는다.
- **first_screen:** today's closed room shows active testers, build slice, expiring window, and one explicit revoke action.
- **share_or_play_loop:** testers submit timestamped scene feedback; studios send a sanitized session summary to collaborators.
- **small_group_fit:** 2–10 person studios that currently choose between no demo and fully public Steam access.
- **spread_trigger:** contributor credit and a redacted “found before launch” card reward trusted testers without exposing the build.
- **output artifact:** tester-specific session manifest with watermark ID, feature scope, events, and feedback.
- **plan_brief:** problem is loss of learning when teams cancel public demos. Arrival is Steam/Discord tester recruitment, validation is a mock 12-person room with leak/revoke drills. Core loop is create room→scope build→invite→play/access events→scene feedback→expire/revoke. QA covers expired invites, screen capture watermark, reconnect, multi-device denial, revocation, and redacted export.
- **development_start_prompt:** `Build a controlled indie playtest room with session creation, participant-specific moving watermark, feature scope, expiry, revocation, clip fingerprint ID, and scene-linked feedback. Be explicit that it deters and traces exposure; it does not guarantee anti-copy protection.`
- **Stitch prompt:** Create a responsive global B2B app called “Demo Veil Rooms” for small indie studios that need feedback but are withholding public demos over streaming and AI-copy fears. Start on an active closed room with build version, allowed feature slice, tester roster, expiring window, and one unmistakable revoke control. Let the studio preview each tester’s moving watermark, toggle scene/feature access, inspect access events, simulate a leaked clip fingerprint, revoke one tester, and collect timestamped feedback attached to the exact scene. Include expired invite, reconnect, denied second device, and redacted collaborator export states. Required sections: room creator, roster, watermark, feature gates, build, access window, revoke, fingerprint, feedback, and incident history. Design direction: use the `operator-dense` profile with charcoal and slate, one sharp violet accent, compact 36–40px rows, crisp permissions, and no cyberpunk security theater.

### p007 - Fun / Portfolio / Experimental / Global - Same Cart Face-Off

- **Title:** Same Cart Face-Off
- **One-liner:** 친구들이 같은 장바구니를 서로 다른 위치·프로필로 동시에 열어 가격 차이를 라운드별로 공개하는 소비자 실험 게임.
- **Target user:** deal-hunting friends, consumer communities, journalists, and shoppers suspicious of dynamic pricing.
- **Key UX:** a host shares one cart code; players join with mock location/profile cards, lock their guesses, and flip prices simultaneously before tagging plausible non-accusatory reasons.
- **Required UI sections:** cart room code, identical items, player profile cards, price guess, synchronized reveal, difference meter, reason tags, evidence limits, round history, share card.
- **Design profile:** `playful-experimental`
- **Theme:** 가격 불신을 과장 대신 함께 확인하는 사회적 실험으로 바꾸기.
- **Source signal references:** S03.
- **source_repo:** N/A — consumer/news-derived.
- **why_starred:** N/A.
- **reference_pattern:** game-show reveal + split test + receipt comparison.
- **twist:** 개인 스크린샷을 모으는 대신 같은 시각·같은 장바구니를 잠그고 동시에 공개한다.
- **first_screen:** three sealed player cards surround one cart and a giant “lock prices” action.
- **share_or_play_loop:** each round creates a “same cart, four prices” card with time, conditions, and uncertainty disclaimer.
- **small_group_fit:** 가격 비교 커뮤니티와 친구 그룹은 초대만으로 3분 실험을 할 수 있다.
- **spread_trigger:** 놀라운 차이 또는 완전히 같은 결과 모두 공유 가능한 대결 카드가 된다.
- **dopamine_hook:** simultaneous card flip, difference pulse, near-match confetti, and a clean rematch in under ten seconds.
- **output artifact:** synchronized cart comparison card with conditions and evidence limits.
- **plan_brief:** problem is that isolated screenshots fuel suspicion without controlled comparison. Arrival is a shared room link, validation is 20 mocked rounds measuring completion and comprehension. Core loop is host cart→friends join→guess→lock→simultaneous reveal→reason tag→share/rematch. QA covers late join, currency/tax differences, identical prices, large divergence, and disclaimer visibility.
- **development_start_prompt:** `Build a no-purchase multiplayer cart experiment with room code, three to four mocked shopper profiles, guess-and-lock, synchronized price reveal, reason tags, uncertainty disclaimer, share card, and instant rematch.`
- **Stitch prompt:** Create a responsive social experiment game called “Same Cart Face-Off” for friends comparing dynamic prices. Open with one identical three-item cart in the center and three sealed shopper cards around it—different mock locations, loyalty states, or devices. A host shares a room code; every player guesses the spread, locks the visible total at the same moment, then all cards flip together. Animate the difference, but require players to tag plausible explanations such as tax, inventory, promotion, or personalization suspicion and show that one round is not proof. Include round history, identical-price celebration, large-gap reaction, share card, and ten-second rematch. No real checkout. Design direction: use the `playful-experimental` profile with dark cobalt, one electric coral accent, oversized reveal numbers, one obvious action, and no casino rainbow.

### p008 - Fun / Portfolio / Experimental / Non-web / Global - Wiper Blind Rally

- **Title:** Wiper Blind Rally
- **One-liner:** 운전자는 흐린 도로를, 내비게이터는 경로와 와이퍼를 맡아 엇갈린 조작과 충돌 장면을 즐기는 2인 폰 게임.
- **Target user:** couples, friends, streamers, and party-game viewers who enjoy short cooperative failures.
- **Key UX:** the driver steers on one phone with limited visibility; the navigator sees the route on another phone but must tilt and hold a physical wiper control, temporarily hiding the map. The last eight seconds before a crash become a replay.
- **Required UI sections:** pair code, driver view, navigator map, wiper tilt/hold control, fog meter, route callouts, interruption events, crash result, eight-second replay, instant rematch.
- **Design profile:** `playful-experimental`
- **Theme:** 설명 실패와 역할 충돌 자체가 웃기는 협동 도파민.
- **Source signal references:** V1.
- **source_repo:** `ahwootech/BRUTAL`
- **why_starred:** created 2026-10-14 and reached 2,056 stars by observation, showing attention to direct physics and low-level control feel.
- **reference_pattern:** blind rally co-op + physical wiper lever + instant replay booth.
- **twist:** 메시지를 복사하는 전화놀이가 아니라 두 사람이 동시에 다른 하드웨어 제어를 맡고, 가시성과 내비게이션이 같은 손을 다툰다.
- **first_screen:** two phones pair around a giant three-second rule: “Driver steers. Navigator sees. Wiping hides the map.”
- **share_or_play_loop:** every crash saves the prior eight seconds with callout captions; rematch swaps roles instantly.
- **small_group_fit:** 두 대의 폰만 있는 친구·커플·스트리머가 설명 없이 30초 안에 시작할 수 있다.
- **spread_trigger:** 가장 늦은 “LEFT!”와 와이퍼 실수를 자막으로 붙인 8초 충돌 클립.
- **dopamine_hook:** fog rising, physical tilt wipe, near-miss pulse, exaggerated crash freeze, and role-swap rematch under ten seconds.
- **output artifact:** captioned eight-second crash replay and role scorecard.
- **plan_brief:** problem/opportunity is that coordination failure is inherently watchable. Arrival is QR pair or stream link, validation is 20 pairs measuring rule comprehension and rematch rate. Core loop is pair→role rule→drive/call/wipe conflict→crash or finish→8-second clip→swap/rematch. First screen teaches one line; QA covers disconnect, calibration, motion accessibility, audio off, portrait/landscape, and replay consent.
- **development_start_prompt:** `Build a two-device browser-game simulation with pair code, asymmetric driver/navigator screens, tilt-or-hold wiper control that obscures the map, fog, interruptions, crash replay, role swap, and motion-accessibility fallback.`
- **Stitch prompt:** Create a responsive two-phone party-game prototype called “Wiper Blind Rally.” The pairing screen must teach the whole rule in one sentence: “Driver steers. Navigator sees. Wiping hides the map.” Show distinct driver and navigator frames side by side for the prototype. The driver gets a foggy road and tactile steering; the navigator gets the route but must tilt and hold a large wiper lever, temporarily covering the map while clearing the driver’s view. Add sudden rain, wrong callouts, near misses, a comic crash freeze, and an automatically captioned replay of the previous eight seconds. Let players swap roles and rematch in under ten seconds; include a button fallback for motion sensitivity. Design direction: use the `playful-experimental` profile with midnight blue, one acid-yellow accent, bold route typography, physical control motion, and no cluttered lobby or copied rally branding.

## Diversity gate

- Source lanes among final 8: community/forum 4, news/business/policy 2, Hada 1, GitHub 2 as corroborating/interaction sources, Steam/game 2 including viral scan.
- Design profiles: financial-analyst 1, operator-dense 2, calm-consumer 1, field-ops 1, premium-editorial 1, playful-experimental 2; exactly one assigned profile per candidate.
- Practical/commercial: p001–p006 (6). Fun/portfolio/experimental: p007–p008 (2).
- Explicit field/non-web: p004 and p008 (2); p005 still models a real-world boundary without being counted as the field quota.
- Domestic/Korea: p001–p004. Overseas/global: p005–p008.
- Hada-derived final candidates: p004 only. GitHub-derived final candidates: p004 and p008, each with `source_repo` and `why_starred`.
- Dashboard/board/planner primary mechanic count: 0. Gate verdict: pass.

## Expected Stitch drop folder

`/home/sy/Downloads/stitch_drop/2026-10-21/`

- `p001/code.html` + `p001/screen.png`
- `p002/code.html` + `p002/screen.png`
- `p003/code.html` + `p003/screen.png`
- `p004/code.html` + `p004/screen.png`
- `p005/code.html` + `p005/screen.png`
- `p006/code.html` + `p006/screen.png`
- `p007/code.html` + `p007/screen.png`
- `p008/code.html` + `p008/screen.png`

Phase A stops here. No custom demo was implemented; the separate 08:30 Stitch job owns generation, export, ingest, build, commit, and push for all eight slots.
