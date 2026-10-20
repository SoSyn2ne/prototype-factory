# PRD — Wiper Blind Rally

## Product intent / problem
짧은 협동 게임은 규칙보다 친구의 설명 실패와 역할 충돌이 더 재미있다. 두 휴대폰의 다른 정보와 물리 조작을 한 문장으로 이해하고 즉시 클립으로 남기는 경험을 만든다.

## Target user
커플, 친구, 스트리머와 짧은 협동 실패를 함께 보고 싶은 파티게임 시청자.

## Arrival path
QR 페어, 스트리머 링크, 친구 초대 코드에서 진입한다.

## Business / validation route
20쌍의 첫 플레이에서 규칙 이해시간, 충돌까지 시간, 역할 교체율, 8초 클립 공유 의향을 측정한다. 무료 웹게임과 스트리머/브랜드 이벤트로 검증한다.

## Core loop / key UX
두 폰 페어 → 운전자/내비게이터 역할 → 조향/콜아웃/와이퍼 충돌 → 완주 또는 충돌 → 직전 8초 리플레이 → 역할 교체 재경기.

## First screen
두 폰 사이에 “Driver steers. Navigator sees. Wiping hides the map.” 한 문장과 페어 코드가 보인다.

## Required UI sections
- 페어 코드와 역할 선택
- 안개 낀 운전자 도로
- 내비게이터 경로 지도
- 기울임/홀드 와이퍼 제어
- 안개·비·방해 이벤트
- 경로 콜아웃과 충돌 결과
- 자막 8초 리플레이와 즉시 역할 교체

## Assigned profile and theme
- Design profile: playful-experimental
- Theme: 설명 실패와 역할 충돌 자체가 웃기는 협동 도파민

## Source signal references
- V1: 비대칭 운전/내비게이션과 와이퍼 방해가 웃긴 실패를 만드는 게임 — https://store.steampowered.com/app/5362020/Left_Left_LEFT/
- Traction report: https://www.roadandtrack.com/news/a74134971/left-left-left-rally-driving-video-game/
- Source repo interaction seed: https://github.com/ahwootech/BRUTAL

## Interaction rules
- 운전자는 경로 전체를 볼 수 없고 내비게이터는 조향할 수 없다.
- 내비게이터가 와이퍼를 작동하는 동안 지도를 가린다.
- 모션 민감 사용자를 위해 버튼식 와이퍼를 제공한다.
- 리플레이 생성 전 두 플레이어의 클립 동의를 확인한다.

## Output artifact
콜아웃 자막이 붙은 충돌 전 8초 리플레이와 역할 점수 카드.

## Share / return loop
충돌 직전의 가장 늦은 방향 지시와 와이퍼 실수를 클립으로 공유하고 역할을 즉시 바꾼다.

## Constraints
- 두 기기 연결과 물리는 모의한다.
- 기존 게임의 이름, 아트, 레벨을 복제하지 않는다.
- 오디오 없이도 방향 콜아웃을 읽을 수 있게 한다.

## Non-goals
- 사실적인 레이싱 시뮬레이터, 대규모 멀티플레이 로비, 차량 브랜드 콘텐츠를 만들지 않는다.

## Success metrics
- 신규 플레이어가 15초 안에 자기 역할을 설명한다.
- 충돌/완주 뒤 10초 안에 역할 교체 재경기를 시작한다.
- 첫 세션의 60% 이상에서 두 번째 판이 시작되는지 본다.

## QA / screenshot criteria
- 연결 대기/성공/끊김, 모션 권한 거부, 버튼 대체, 비/안개, 충돌/완주, 클립 동의 상태가 있다.
- 운전자와 내비게이터 화면이 시각적으로 명확히 다르다.
- 세로/가로 화면과 390px에서 주 제어가 잘리지 않는다.

## Development start prompt

```text
Build a two-device browser-game simulation with pair code, asymmetric driver/navigator screens, tilt-or-hold wiper control that obscures the map, fog, interruptions, crash replay, role swap, and motion-accessibility fallback.
```

## Copy/paste-ready Stitch prompt

Create a responsive two-phone party-game prototype called “Wiper Blind Rally.” The pairing screen must teach the whole rule in one sentence: “Driver steers. Navigator sees. Wiping hides the map.” Show distinct driver and navigator frames side by side for the prototype. The driver gets a foggy road and tactile steering; the navigator gets the route but must tilt and hold a large wiper lever, temporarily covering the map while clearing the driver’s view. Add sudden rain, wrong callouts, near misses, a comic crash freeze, and an automatically captioned replay of the previous eight seconds. Let players swap roles and rematch in under ten seconds; include a button fallback for motion sensitivity. Design direction: use the playful-experimental profile with midnight blue, one acid-yellow accent, bold route typography, physical control motion, and no cluttered lobby or copied rally branding.
