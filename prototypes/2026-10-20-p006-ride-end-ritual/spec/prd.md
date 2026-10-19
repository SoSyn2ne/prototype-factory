# PRD — Ride End Ritual

## Product intent / problem
공유자전거 앱이 반납 완료처럼 보여도 잠금·GPS·과금이 실제로 닫히지 않을 수 있다. 이용자는 자전거 통제권, 돈, 귀가 수단을 동시에 잃고 사후에 캡처와 이메일을 모은다.

## Target user
dockless bike-share commuters, tourists, and operators handling failed-end disputes.

## Arrival path
라이드 종료 버튼, 주차구역 도착 알림, 반복 실패 이용자용 설정.

## Business / validation route
20회 모의 반납에서 일반 종료 버튼과 8초 ritual의 누락 발견률·완료 시간·불안 점수를 비교한다. 운영사 SDK/분쟁 감소 계약을 검증한다.

## Core loop / key UX
주차구역 확인 → 8초 hold → 잠금음·정지 GPS·사진·과금 종료 4신호 수집 → 성공 영수증 또는 즉시 복구/대체 라이드.

## First screen
진행 중 비용과 커다란 8초 링, 주변에 아직 비어 있는 네 개 확인 슬롯이 보인다.

## Required UI sections
- live ride cost
- parking zone check
- 8-second hold ring
- lock sound meter
- GPS freeze
- photo capture
- billing stop state
- failure recovery
- alternate ride credit
- compact receipt

## Assigned profile and theme
- Design profile: field-ops
- Theme: 이동 종료 순간의 돈·통제 불안을 확실한 몸동작으로 닫기

## Source signal references
- S02: 반납 실패 뒤 다른 사람이 자전거를 타고 과금이 이어져 대체 교통비까지 지불한 반복 이용자 — https://www.reddit.com/r/londoncycling/comments/1usoxgw/forest_bike_issues/

## Interaction rules
- 네 신호 중 하나라도 실패하면 녹색 완료를 보여주지 않는다.
- 사진은 주차 위치 확인용이라는 목적을 명시한다.
- 과금 stop과 물리 lock을 별도 상태로 유지한다.
- 실패 시 같은 화면에서 지원 티켓과 대체 이동을 제공한다.

## Output artifact
timestamped end receipt or instant unresolved-state recovery ticket.

## Share / return loop
실패 영수증은 지원팀에 바로 공유되고 성공 ritual은 매일 통근 습관으로 돌아온다.

## Constraints
- 실제 마이크·GPS·카메라는 모의 입력으로 표현한다.
- 실제 결제·대체 라이드 발급은 하지 않는다.
- 야외 한 손 사용과 낮은 네트워크를 가정한다.

## Non-goals
- 공유자전거 전체 앱이나 지도 탐색을 만들지 않는다.
- 분쟁 승소를 보장하지 않는다.

## Success metrics
- 사용자가 반납 상태가 완전히 닫혔는지 10초 안에 말할 수 있다.
- 실패 신호를 놓치지 않고 복구 경로에 진입한다.
- 성공 영수증과 미해결 티켓을 혼동하지 않는다.

## QA / screenshot criteria
- 390px에서 hold ring과 네 신호가 한 화면에 보인다.
- 정상·GPS 이동·잠금음 없음·사진 실패·과금 지속·오프라인 상태가 있다.
- 야외 고대비와 48px 터치 목표를 지킨다.

## Development start prompt

~~~text
Build a mobile-first mocked bike-share ending ritual with a hold ring, sound/GPS/photo/billing confirmations, failure branches, alternate-ride credit, and a compact end receipt.
~~~

## Copy/paste-ready Stitch prompt

Create a mobile-first English app called “Ride End Ritual” for dockless bike-share commuters and tourists who have seen a ride say “ended” while billing or control continues. Community reports describe bikes failing to close, another person riding the still-open bike, repeated support disputes, and paying a competitor to get home. The first screen must be the final eight seconds of a live ride, not a fleet map. Make the rider press and hold one large ring while four confirmations lock in around it: audible lock, stationary GPS, timestamped parking photo, and billing stopped. If any signal fails, keep the state visibly unresolved and offer a mock alternate-ride credit plus one-tap support ticket; never show a false green completion. Required sections: current cost, allowed parking zone, hold ring, sound meter, GPS freeze, camera proof, billing state, failure recovery, alternate ride, and compact receipt. Design direction: use the field-ops profile with high-contrast slate, one vivid cyan action accent, 48px controls, haptic-looking confirmation ticks, outdoor legibility, and no decorative mobility dashboard.
