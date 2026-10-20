# PRD — 검색 실종 휘슬

## Product intent / problem
마켓플레이스 상품은 직링크로 정상이어도 가격·재고 수정 뒤 일반 검색에서 사라질 수 있다. 셀러는 검색 수요 감소로 오해하고 장애를 늦게 발견한다.

## Target user
네이버 스마트스토어, 숙박, 글로벌 마켓플레이스에서 가격·재고를 자주 수정하는 1인 셀러와 운영대행사.

## Arrival path
판매자 변경 webhook, 상품 수정 직후 수동 체크, 매출 급감 알림에서 진입한다.

## Business / validation route
모의 상품 20개에 지역·계정별 노출 오류를 넣고 그림자 검색의 탐지시간, 오탐률, 지원팀 재현 성공률을 비교한다. 상품 수/검사 빈도 기반 구독을 검증한다.

## Core loop / key UX
변경 감지 → 로그아웃·신규·지역별 그림자 검색 → 직링크/검색 상태 비교 → 모순 경보 → 재현 카드 → 복구 확인.

## First screen
“URL 정상 / 검색 실종”이라는 모순과 마지막 수정 시각, 영향 검색어, 첫 재현 버튼이 한 화면에 보인다.

## Required UI sections
- 최근 변경 이벤트
- 검색어·지역·계정 조건
- 그림자 구매자 4개 레인
- 직링크 상태와 검색 노출 상태
- 전후 결과 캡처와 재현 버튼
- 지원용 실종 카드와 복구 확인

## Assigned profile and theme
- Design profile: operator-dense
- Theme: 보이지 않는 유통 오류와 매출 누수를 빠르게 증명하기

## Source signal references
- S07: 가격 변경 뒤 직링크는 열리지만 검색에서 숙소가 사라진 호스트 — https://www.reddit.com/r/airbnb_hosts/comments/1x695j8/no_bookings_since_price_change/

## Interaction rules
- 검색 조건과 관찰 시각을 모든 결과에 고정해 표시한다.
- 결과가 없다고 즉시 플랫폼 장애나 고의 노출 제한으로 단정하지 않는다.
- 속도 제한과 CAPTCHA는 “검사 불가”로 분리한다.
- 재검사 횟수를 제한하고 사용자가 조건을 바꿨으면 새 사건으로 기록한다.

## Output artifact
지역·계정·검색어·시각과 캡처가 고정된 노출 실종 재현 카드.

## Share / return loop
셀러는 카드를 플랫폼 지원팀이나 대행사에 보내고 복구 뒤 같은 조건으로 확인한다.

## Constraints
- 실제 마켓플레이스 자동 검색 대신 모의 결과를 사용한다.
- 스크래핑 우회나 CAPTCHA 회피를 구현하지 않는다.
- 데스크톱 운영 화면과 모바일 사건 공유 카드를 지원한다.

## Non-goals
- SEO 순위 최적화, 경쟁사 추적, 범용 스크래퍼 상태 모니터를 만들지 않는다.

## Success metrics
- 변경 후 2분 안에 의도적 실종의 90%를 탐지한다.
- 지원용 카드만 본 테스트 사용자의 80%가 같은 조건을 재현한다.
- 정상·실종·검사 불가가 색상 외 텍스트로 구분된다.

## QA / screenshot criteria
- 첫 화면의 모순 상태와 영향 조건이 3초 안에 읽힌다.
- 네 구매자 레인, 정상, 실종, CAPTCHA, 복구 상태가 있다.
- 390px에서 재현 카드가 한 열로 유지된다.

## Development start prompt

```text
Build a marketplace discovery monitor that reacts to a seller edit, runs four mocked shadow-shopper searches, distinguishes direct-link health from search visibility, and produces a support-ready reproduction card. Keep the main experience incident-first, not dashboard-first.
```

## Copy/paste-ready Stitch prompt

Create a responsive Korean B2B app called “검색 실종 휘슬” for small marketplace sellers whose listing can remain reachable by URL while disappearing from buyer search after a price or inventory edit. Open on a single incident, not an analytics home: “URL 정상 / 검색 실종,” last edit time, affected query, and estimated lost discovery window. Show four shadow-buyer lanes—logged out, new account, Seoul, and Busan—replaying the same query with compact result snapshots. Let the operator change query/region, rerun once, compare before/after, and export a support-ready card containing conditions, timestamps, and captures. Required sections: change event, search conditions, four buyer lanes, direct-link health, discovery status, reproduction, support card, and recovery check. Design direction: use the operator-dense profile with deep navy and fog, one sharp amber accent, compact rows, 40px controls, and no decorative commerce hero.
