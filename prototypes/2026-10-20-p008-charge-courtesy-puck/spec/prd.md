# PRD — Charge Courtesy Puck

## Product intent / problem
공동주택의 적은 EV 충전기는 완충 차량이 오래 점유해도 다음 사람이 차주의 허락을 알 수 없다. 타인의 비싼 차량을 만지는 공포와 전화번호 공개 부담 때문에 줄이 보이지 않는다.

## Target user
apartment and condo EV drivers, building managers, and neighbors sharing a small charger bank.

## Arrival path
차량에 붙은 magnetic puck, 충전기 안내판 NFC, 단지 커뮤니티의 예절 규칙.

## Business / validation route
6칸 모의 주차장에서 표지 없음·종이 메모·puck 조건의 대기시간, 접촉 불안, 번호 노출 의향을 비교한다. puck 판매와 단지용 anonymous queue 구독을 검증한다.

## Core loop / key UX
차주 permission mode 회전 → 충전 progress → ready light → 다음 운전자 NFC tap → 익명 queue → handoff countdown → 완료 또는 timeout fallback.

## First screen
차량에 붙은 큰 원형 puck이 “Unplug after full” 상태로 amber 빛을 내고 78% progress를 보여준다.

## Required UI sections
- physical puck close-up
- two permission modes
- charge progress ring
- ready light
- NFC queue join
- anonymous queue position
- handoff countdown
- no-response fallback
- etiquette replay card

## Assigned profile and theme
- Design profile: playful-experimental
- Theme: 남의 차를 만지는 공포를 명시적 동의와 작은 놀이로 바꾸기

## Source signal references
- S04: 완충 차량이 여섯 공동 충전칸을 차지해도 분리 허락을 알 수 없어 커뮤니티에 묻는 입주민 — https://www.reddit.com/r/TeslaLounge/comments/1s09a3r/charger_etiquette_is_it_okay_to_unplug_someones/

## Interaction rules
- 차주가 설정한 permission mode를 queue가 덮어쓰지 못한다.
- 전화번호·세대·차량번호를 다음 사용자에게 노출하지 않는다.
- ready light는 실제 분리 허용과 연결되어야 하며 단순 완충 표시와 구분한다.
- timeout은 강제 분리 권한이 아니라 관리 규칙/대체 충전 안내를 보여준다.

## Output artifact
anonymous queue token and handoff replay card.

## Share / return loop
매너 충전 streak와 handoff replay가 단지 커뮤니티에서 규칙을 퍼뜨리고 같은 충전기 사용자들을 다시 연결한다.

## Constraints
- 실제 차량·충전기 연결은 모의한다.
- 물리 puck은 화면에서 작동 원리를 보여주는 수준으로 제한한다.
- 사용자 위치·전화번호를 수집하지 않는다.

## Non-goals
- 충전 요금 결제나 단지 전체 에너지 관리를 하지 않는다.
- 타인 차량의 강제 분리를 승인하지 않는다.

## Success metrics
- 처음 보는 사용자가 두 permission mode를 5초 안에 구분한다.
- NFC queue join 후 개인정보 노출 없이 자기 순서를 이해한다.
- ready, no-permission, timeout 상태를 색만으로 구분하지 않는다.

## QA / screenshot criteria
- 390px에서 puck, queue, countdown이 한 흐름으로 보인다.
- charging·ready allowed·ready forbidden·queued·handoff·timeout 상태가 있다.
- 원형 composition이 실제 정보와 컨트롤을 가리지 않는다.

## Development start prompt

~~~text
Build a web-based hardware companion simulation for a magnetic EV courtesy puck: rotate permission mode, charging ring, ready light, NFC queue join, anonymous handoff, timeout fallback, and replay card.
~~~

## Copy/paste-ready Stitch prompt

Create a responsive hardware-companion prototype called “Charge Courtesy Puck” for apartment and condo EV drivers sharing only a few chargers. Base it on a resident asking whether touching and unplugging a fully charged neighbor's car is rude because there is no visible permission or queue. The first screen should be a large, tactile close-up of a magnetic puck on a car: rotate it between “Unplug after full” and “Do not touch.” Simulate charging progress until the puck flips from amber to green; let the next driver tap an NFC area to join anonymously, see queue position, and receive a handoff countdown without phone numbers. Include a no-response timeout and a short etiquette replay card. Required sections: puck close-up, two permission modes, charge ring, ready light, NFC join, anonymous queue, handoff countdown, fallback, streak/share card. Design direction: use the playful-experimental profile with dark asphalt surfaces, one luminous mint accent, strong circular composition, satisfying physical-state transitions, readable controls, and no fleet-management dashboard.
