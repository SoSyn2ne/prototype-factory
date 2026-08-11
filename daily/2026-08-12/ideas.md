# Prototype Factory Phase A — 2026-08-12

## Search signals / External signals

Live sweep: 2026-08-12 08:00 KST. Sources are problem evidence, not market-size proof.

- **S1** — 소비자24가 8월 10일 샌들·슬리퍼와 공연관람 상담 급증을 공개했다. 구매 후 증빙이 흩어지는 계절성 분쟁 신호. [Source](https://consumer.go.kr)
- **S2** — 소비자24가 8월 10일 알레르기 미표시 식품 회수를 공지했다. 소형 매장의 즉시 선반 확인 부담. [Source](https://consumer.go.kr)
- **S3** — 2026 하반기 소상공인 정책에 AI 도우미, 특화 신용평가, 노란우산 변경이 함께 등장했다. 사장에게는 시행일과 현금흐름 해석이 필요하다. [Source](https://blog.naver.com/hellopolicy/224338381445)
- **S4** — 자영업 기사들이 자금 부족·현금흐름 막힘과 고정비 바우처를 핵심 생존 이슈로 다룬다. [Source](https://www.viva100.com/article/20260727501294)
- **S5** — 2026 소비자정책은 플랫폼 책임, AI 기만광고, 다크패턴 과징금과 피해구제 강화를 예고했다. [Source](https://www.lawtimes.co.kr/news/articleView.html?idxno=217386)
- **S6** — Reddit 사용자는 AI 도구가 넘치는 상황에서 “실제로 돈 낼 만한 AI가 무엇인지” 일상 효용 기준으로 묻는다. [Source](https://www.reddit.com/r/AI_Agents/comments/1rw5xvh/whats_the_best_ai_to_actually_pay_for_right_now)
- **S7** — Reddit 소상공인 대화는 성장 문제가 실제로는 워크플로 문제인 경우가 많다고 반복한다. [Source](https://www.reddit.com/r/smallbusiness/comments/1r5ziuc/in_this_post_share_your_small_business_experience)
- **S8** — Reddit 박사과정 커뮤니티는 논문 도구 선택과 출퇴근 중 paper podcast 같은 우회 사용법을 공유한다. [Source](https://www.reddit.com/r/PhdProductivity/comments/1r3rabq/tools_for_literature_review_in_2026)
- **S9** — 엔터프라이즈 AI 자동화 논의는 에이전트보다 데이터 거버넌스와 실제 업무 영향이 성패를 가른다고 지적한다. [Source](https://biztechmagazine.com/media/video/knowledge-2026-how-workflow-automation-driving-efficiency-across-enterprise)
- **S10** — 창고 기술 논의는 취약 상품 포장에 여전히 사람의 판단 공백이 있고 주문형 박스와 비전 기술이 그 틈을 줄인다고 본다. [Source](https://www.youtube.com/watch?v=LPSKNnMFXA8)
- **S11** — MECCHA CHAMELEON은 몸을 칠해 숨는 단순한 위장 규칙으로 관전 가능한 실패 장면을 만든다. [Source](https://www.instagram.com/p/DZa39pdCDuO?hl=en)
- **S12** — Sweepout은 짧은 장애물 제거/방해의 Roblox 파티게임으로 소개되며 즉시 이해되는 혼란형 플레이 수요를 보여준다. [Source](https://www.youtube.com/watch?v=SygNKJct8Y4)

## Community roaming

- S6, S7, S8 are community-style evidence: users ask which AI is worth paying for, describe workflow bottlenecks, and share improvised research-tool habits.
- The sweep prioritized lived choice overload, workaround behavior, and operational gaps over polished market claims.

## Novelty / duplicate check

Compared against the latest 7 available daily batches: 2026-07-14, 07-15, 07-16, 07-30, 07-31, 08-04, 08-11. Rejected near-duplicates: generic refund letter generator, generic policy dashboard, generic AI tool comparison table, generic recall checklist, and another prop-hunt clone. Selected ideas require a new trigger/data/interaction: screenshot-to-case timeline, effective-date cashflow simulation, weekly job evidence, checkout filmstrip annotation, camera shelf sweep, box-fit overlay, photo tap heatmap, or live obstacle-swipe sabotage.

## Candidate mix

6 practical/commercial or field + 2 fun/experimental. Each candidate uses exactly one PF design profile.

### p001 — Practical / Commercial — Refund Screenshot Caseboard

- **Title:** Refund Screenshot Caseboard
- **One-liner:** Turn scattered refund screenshots and chat fragments into a timestamped merchant dispute packet.
- **Target user:** 온라인 구매 환불이 지연된 소비자와 CS 대행자
- **Key UX:** 스크린샷 드롭 → 자동 시간순 배열 → 빠진 증거 표시 → 판매자/플랫폼별 제출 패킷 미리보기
- **Required UI sections:** 증거 드롭존, 타임라인, 누락 증거 체크, 주장/근거 매핑, 제출 패킷
- **Assigned design profile:** `calm-consumer`
- **Theme:** 자산 방어
- **Source signal references:** S1 [https://consumer.go.kr](https://consumer.go.kr); S5 [https://www.lawtimes.co.kr/news/articleView.html?idxno=217386](https://www.lawtimes.co.kr/news/articleView.html?idxno=217386)
- **Stitch prompt:**

```text
Design a responsive web app named “Refund Screenshot Caseboard.” Let a consumer drag in order, chat, tracking, and refund screenshots; arrange them into a timestamped case timeline; flag missing proof; map each claim to evidence; and preview a concise merchant or platform dispute packet. Include empty, sorting, incomplete, and ready-to-export states with realistic Korean and English sample data. Design direction: follow the calm-consumer profile with warm neutrals, one gentle teal accent, generous step spacing, reassuring recovery copy, and red reserved only for expired deadlines.
```

### p002 — Practical / Commercial — Policy Change Cashflow Switchboard

- **Title:** Policy Change Cashflow Switchboard
- **One-liner:** Translate changing small-business support rules into a dated cashflow action queue.
- **Target user:** 한국 1인 매장·영세 사업자와 세무/운영 보조자
- **Key UX:** 업종·매출 입력 → 적용 정책 카드 → 시행일 기준 현금 영향 → 신청/준비 큐
- **Required UI sections:** 조건 입력, 정책 변화선, 월별 현금영향, 서류 큐, 놓치면 손실 카드
- **Assigned design profile:** `financial-analyst`
- **Theme:** 자산 방어
- **Source signal references:** S3 [https://blog.naver.com/hellopolicy/224338381445](https://blog.naver.com/hellopolicy/224338381445); S4 [https://www.viva100.com/article/20260727501294](https://www.viva100.com/article/20260727501294)
- **Stitch prompt:**

```text
Design a responsive web app named “Policy Change Cashflow Switchboard.” Start with a Korean micro-business profile form for industry, revenue band, employees, and closure risk; then show only relevant 2026 policy changes, effective dates, monthly cashflow impact ranges, required documents, and an ordered application queue. Include scenario comparison and a printable accountant handoff. Clearly label estimates and source dates. Design direction: follow the financial-analyst profile with ink and off-white surfaces, restrained green, tabular won amounts, written chart interpretation, and quiet confidence badges instead of decorative gradients.
```

### p003 — Practical / Commercial — AI Subscription Proof Ledger

- **Title:** AI Subscription Proof Ledger
- **One-liner:** Compare AI subscriptions by real weekly jobs completed instead of feature hype.
- **Target user:** 여러 AI 구독료를 내는 프리랜서·소규모 팀
- **Key UX:** 구독 추가 → 실제 작업 로그 체크 → 대체 가능성/중복 비용 계산 → 유지·다운그레이드 판정
- **Required UI sections:** 구독 스택, 주간 작업 증거, 겹침 매트릭스, 비용/완료작업 비율, 다음 결제 전 결정
- **Assigned design profile:** `operator-dense`
- **Theme:** 자산 방어
- **Source signal references:** S6 [https://www.reddit.com/r/AI_Agents/comments/1rw5xvh/whats_the_best_ai_to_actually_pay_for_right_now](https://www.reddit.com/r/AI_Agents/comments/1rw5xvh/whats_the_best_ai_to_actually_pay_for_right_now); S9 [https://biztechmagazine.com/media/video/knowledge-2026-how-workflow-automation-driving-efficiency-across-enterprise](https://biztechmagazine.com/media/video/knowledge-2026-how-workflow-automation-driving-efficiency-across-enterprise)
- **Stitch prompt:**

```text
Design a responsive web app named “AI Subscription Proof Ledger.” Show a compact subscription stack where users log real weekly jobs completed by each AI tool, attach a lightweight proof note, compare capability overlap, calculate cost per useful outcome, and receive Keep, Downgrade, Pause, or Replace decisions before renewal. Include a seven-day evidence view, uncertainty labels, and a cancellation checklist. Design direction: follow the operator-dense profile with compact 36px rows, deep navy and fog, one sharp lime accent, tabular costs, crisp queues, and no decorative hero.
```

### p004 — Practical / Commercial — Dark Pattern Checkout Replay

- **Title:** Dark Pattern Checkout Replay
- **One-liner:** Replay a checkout path and annotate manipulative steps before filing a consumer complaint.
- **Target user:** 다크패턴을 기록하려는 소비자·소비자단체·컴플라이언스 팀
- **Key UX:** 화면 캡처 순서 배치 → 강요/숨김/자동추가 태그 → 대안 흐름 비교 → 신고 요약
- **Required UI sections:** 리플레이 필름스트립, 패턴 태그, 비용 변화 그래프, 공정 흐름 비교, 신고 요약
- **Assigned design profile:** `premium-editorial`
- **Theme:** 자산 방어
- **Source signal references:** S5 [https://www.lawtimes.co.kr/news/articleView.html?idxno=217386](https://www.lawtimes.co.kr/news/articleView.html?idxno=217386); S1 [https://consumer.go.kr](https://consumer.go.kr)
- **Stitch prompt:**

```text
Design a responsive web app named “Dark Pattern Checkout Replay.” Let users arrange checkout screenshots into a replay filmstrip, annotate forced continuity, hidden fees, preselected extras, urgency pressure, and difficult cancellation, then compare the observed flow with a fair alternative and export a factual complaint summary. Show price changes at every step and distinguish user observation from legal conclusion. Design direction: follow the premium-editorial profile with warm charcoal, cream, muted brass, refined typography, restrained cards, and one quiet burgundy CTA while keeping evidence scanning fast.
```

### p005 — Practical / Field — Allergen Recall Shelf Sweep

- **Title:** Allergen Recall Shelf Sweep
- **One-liner:** Give tiny food shops a camera-first shelf sweep for recall and allergen notices.
- **Target user:** 편의점·동네마트·소형 카페 현장 직원
- **Key UX:** 리콜 공지 선택 → 선반 구역 촬영 → 제품/로트 확인 체크 → 격리·보고 완료증
- **Required UI sections:** 오늘의 리콜, 구역별 촬영 큐, 제품 대조, 격리 체크, 점주 보고서
- **Assigned design profile:** `field-ops`
- **Theme:** 건강
- **Source signal references:** S2 [https://consumer.go.kr](https://consumer.go.kr); S7 [https://www.reddit.com/r/smallbusiness/comments/1r5ziuc/in_this_post_share_your_small_business_experience](https://www.reddit.com/r/smallbusiness/comments/1r5ziuc/in_this_post_share_your_small_business_experience)
- **Stitch prompt:**

```text
Design a mobile-first field app named “Allergen Recall Shelf Sweep.” A shop worker selects today’s recall notice, walks a zone-by-zone photo checklist, compares product name and lot markers, marks Found, Clear, or Needs Manager, records quarantine placement, and sends a completion receipt to the owner. Include poor-photo recovery, offline state, and explicit manual verification. Design direction: follow the field-ops profile with graphite and steel surfaces, a sparing orange action accent, high-contrast status rows, 48px touch targets, and urgent color only in small badges.
```

### p006 — Practical / Field — Fragile Pack Fit Coach

- **Title:** Fragile Pack Fit Coach
- **One-liner:** Guide micro-warehouses through box choice and fragile-item packing with a visual fit test.
- **Target user:** 소규모 D2C 창고·공방 포장 담당자
- **Key UX:** 상품 치수/사진 → 박스 후보 오버레이 → 완충 순서 체크 → 포장 증빙 촬영
- **Required UI sections:** 상품 입력, 박스 핏 비교, 빈 공간 경고, 포장 단계, 출고 증빙
- **Assigned design profile:** `field-ops`
- **Theme:** 현장 효율
- **Source signal references:** S10 [https://www.youtube.com/watch?v=LPSKNnMFXA8](https://www.youtube.com/watch?v=LPSKNnMFXA8); S7 [https://www.reddit.com/r/smallbusiness/comments/1r5ziuc/in_this_post_share_your_small_business_experience](https://www.reddit.com/r/smallbusiness/comments/1r5ziuc/in_this_post_share_your_small_business_experience)
- **Stitch prompt:**

```text
Design a tablet-friendly app named “Fragile Pack Fit Coach.” Let a micro-warehouse worker enter item dimensions or use a camera guide, compare three available boxes with a visual fit overlay, see void-space and fragility warnings, follow a step-by-step cushioning sequence, and capture a final packing proof tied to the shipment. Include damaged-box and no-fit exception paths. Design direction: follow the field-ops profile with cool gray and slate blue, one vivid cyan action accent, large gloved-hand controls, obvious handoff states, and diagrams that remain legible under warehouse lighting.
```

### p007 — Fun / Experimental — Chameleon Shelfie Hunt

- **Title:** Chameleon Shelfie Hunt
- **One-liner:** A camera party game where players disguise one object in a room and friends race to spot it.
- **Target user:** 친구 모임·가족·짧은 영상 크리에이터
- **Key UX:** 사물 선택 → 주변색 위장 미션 → 사진 공유 → 15초 탭 탐색 → 실패 리플레이
- **Required UI sections:** 방 만들기, 위장 미션, 카메라 프레임, 탐색 타이머, 웃긴 오답 리플레이
- **Assigned design profile:** `playful-experimental`
- **Theme:** 재미
- **Source signal references:** S11 [https://www.instagram.com/p/DZa39pdCDuO?hl=en](https://www.instagram.com/p/DZa39pdCDuO?hl=en); S12 [https://www.youtube.com/watch?v=SygNKJct8Y4](https://www.youtube.com/watch?v=SygNKJct8Y4)
- **Stitch prompt:**

```text
Design a mobile party game named “Chameleon Shelfie Hunt.” One player chooses a household object, receives a color-and-placement disguise mission, photographs the scene, and friends get 15 seconds to tap where the object is hidden. Show heatmap guesses, escalating hints, a dramatic reveal, and a shareable wrong-tap replay card. Keep the one-line rule visible: Hide one thing; friends tap to find it. Design direction: follow the playful-experimental profile with a bold cobalt background, one acid-yellow accent, cutout photo framing, chunky readable controls, and novelty focused on the reveal rather than random decoration.
```

### p008 — Fun / Portfolio / Experimental — Bad Idea Pitch Sweep

- **Title:** Bad Idea Pitch Sweep
- **One-liner:** Players pitch the worst possible fix, then swipe obstacles into rivals’ pitches for a ten-second chaos round.
- **Target user:** 스트리머·워크숍 진행자·친구 파티
- **Key UX:** 문제 카드 공개 → 7초 최악의 해결책 작성 → 장애물 스와이프 투입 → 관객 투표
- **Required UI sections:** 로비, 문제 카드, 피치 입력, Sweepout 방해 레인, 라이브 투표, 클립 결과
- **Assigned design profile:** `playful-experimental`
- **Theme:** 재미
- **Source signal references:** S12 [https://www.youtube.com/watch?v=SygNKJct8Y4](https://www.youtube.com/watch?v=SygNKJct8Y4); S11 [https://www.instagram.com/p/DZa39pdCDuO?hl=en](https://www.instagram.com/p/DZa39pdCDuO?hl=en)
- **Stitch prompt:**

```text
Design a responsive party game named “Bad Idea Pitch Sweep.” Reveal a familiar problem card, give each player seven seconds to type the worst possible solution, then open a ten-second swipe lane where rivals throw budget cuts, celebrity endorsements, legal warnings, and absurd constraints into the pitch. End with audience voting and a shareable three-panel chaos recap. Make rounds understandable without onboarding. Design direction: follow the playful-experimental profile with dark plum, one electric-coral accent, kinetic card lanes, oversized timer typography, recognizable controls, and motion that never hides the vote.
```

## Stitch drop contract

Expected folder: `/home/sy/Downloads/stitch_drop/2026-08-12/`, with `p001` through `p008`, each containing `code.html` and `screen.png`.
