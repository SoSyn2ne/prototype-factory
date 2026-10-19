# PRD — 메뉴 끊김 방지 박스

## Product intent / problem
디지털 메뉴 보드가 전체화면 광고로 전환되면 고객은 가격을 볼 수 없어 주문을 멈춘다. 직원은 종이 메뉴를 다시 꺼내고 피크타임 처리량이 줄지만 광고팀은 손실 시간을 보지 못한다.

## Target user
카페·분식·푸드코트 점주, 디지털 사이니지 운영사, 피크타임 매장 매니저.

## Arrival path
HDMI 인라인 장치 설치, 사이니지 장애 문의, 점주용 현장 진단 링크.

## Business / validation route
점심 주문줄 모의에서 전체광고와 가격 레일 유지 조건의 주문 시작 지연·종이메뉴 요청을 비교한다. 장치 판매 또는 매장당 월 모니터링료를 검증한다.

## Core loop / key UX
HDMI 신호 감지 → 광고 takeover 판정 → 가격 레일 유지 → 현장 즉시 복귀 → 손실 초·중단 클립 영수증.

## First screen
30초 광고가 재생 중인 라이브 화면과 동시에 사라지지 않는 여섯 메뉴 가격 레일, 커다란 메뉴 복귀 버튼.

## Required UI sections
- 라이브 HDMI 화면 미러
- 메뉴·광고 감지 상태
- 항상 보이는 가격 레일
- 메뉴 즉시 복귀 버튼
- 피크타임 타이머
- 손실 초 카운터
- 종이 메뉴 대안
- 장치 연결·오프라인 상태

## Assigned profile and theme
- Design profile: field-ops
- Theme: 주문 흐름과 현장 매출을 지키는 메뉴 연속성

## Source signal references
- S05: 30초 광고 동안 메뉴가 사라져 주문줄이 멈추고 종이 메뉴로 되돌아간 운영자 — https://www.reddit.com/r/digitalsignage/comments/1sfwb6l/when_digital_menus_randomly_change_to_a_30s_advert/

## Interaction rules
- 광고를 차단했다고 주장하지 않고 메뉴 가림과 복귀만 모의한다.
- 가격 레일은 광고 중에도 최소 여섯 핵심 상품을 유지한다.
- 즉시 복귀 버튼은 현장 피드백을 주고 영수증에 시각을 남긴다.
- HDMI 신호 없음과 콘텐츠 판정 실패를 별도 상태로 표시한다.

## Output artifact
메뉴 가림 시간 영수증과 광고별 중단 클립.

## Share / return loop
점주는 일일 영수증을 본사·광고대행·사이니지 운영사와 공유해 캠페인 규칙을 고친다.

## Constraints
- 실제 HDMI 캡처·광고 인식은 모의 데이터로 표현한다.
- 현장에서 한 손으로 누를 수 있는 48px 이상 컨트롤을 쓴다.
- 외부 광고·POS API를 호출하지 않는다.

## Non-goals
- 사이니지 CMS 전체를 대체하지 않는다.
- 광고 성과 최적화 플랫폼을 만들지 않는다.

## Success metrics
- 첫 화면에서 메뉴가 가려졌지만 가격은 살아 있다는 점이 3초 안에 보인다.
- 현장 직원이 한 번의 조작으로 메뉴를 복귀시킨다.
- 중단 영수증에서 광고·가림 시간·피크 영향이 혼동되지 않는다.

## QA / screenshot criteria
- 1440px에서 라이브 미러·가격 레일·복귀 버튼이 동시에 보인다.
- 태블릿에서 버튼이 48px 이상이고 장갑 낀 손에도 명확하다.
- 정상 메뉴·광고 감지·복귀 중·HDMI 없음·오프라인 상태가 있다.

## Development start prompt

~~~text
Build a field console for an HDMI menu continuity bridge with a live screen mirror, ad detection, persistent price rail, physical override simulation, outage state, and lost-customer-seconds receipt.
~~~

## Copy/paste-ready Stitch prompt

Create a desktop-and-tablet Korean field app called “메뉴 끊김 방지 박스” for café, snack-bar, food-court, and signage operators whose digital menu temporarily becomes a full-screen advertisement. Base it on operator reports that customers stop ordering until prices return and staff put printed menus back on the counter. Open on a live HDMI mirror: the center is playing a 30-second promotion, but a high-contrast side rail preserves six core items and prices. Show a large physical-style “메뉴 즉시 복귀” control; pressing it should restore the menu, freeze a lost-customer-seconds counter, and create a short interruption receipt. Required sections: live signal, menu/ad detector, persistent price rail, override control, lunch-rush timer, interruption clips, paper-menu fallback, HDMI/offline diagnostics, and a shareable daily receipt. Design direction: use the field-ops profile with graphite and steel surfaces, one vivid orange action accent, sunlight-readable contrast, 48px touch targets, compact status rows, and no decorative dispatch map or marketing hero.
