# PRD — Grease Screen Relay

## Product intent / problem
많은 파티게임이 긴 설정과 튜토리얼을 요구해 스트림이나 짧은 모임에서 첫 웃음까지 오래 걸린다.

## Target user
두 명의 친구, 스트리머와 채팅, 45초 안에 규칙을 이해하고 웃을 작은 파티.

## Arrival path
QR 페어링 또는 스트림 조인 링크에서 바로 역할을 배정받는다.

## Business / validation route
세 쌍에게 룰 이해, 첫 웃음, 10초 내 재도전, 역할 교대 의사를 측정한다. 유료 경로는 파티 팩·스트리머 모드·테마 스킨이다.

## Core loop / key UX
페어링 → 역할 공개 → 45초 주문 러시 → 기름 닦기와 2초 음소거 → 요리 제출 → 실패 클립 → 역할 교대·재도전.

## First screen
‘당신은 주방을 봅니다’와 ‘당신은 주문을 봅니다’ 두 역할 카드, 거대한 45초 서비스 벨.

## Required UI sections
- 페어·조인
- 역할 공개
- 주방 스테이션
- 기름 낀 주문 태블릿
- 음성·음소거 미터
- 채팅 개입
- 오답 임팩트
- 콤보 시계
- 6초 리플레이
- 즉시 재도전

## Assigned profile and theme
- Design profile: `playful-experimental`
- Theme: 스테인리스 점심 러시를 45초짜리 읽기 쉬운 슬랩스틱 기계로 만든 협동 소동

## Source signal references
- S09: 정보 비대칭과 서로 방해되는 행동이 실패 클립을 만드는 협동 게임 — https://store.steampowered.com/app/5362020/Left_Left_LEFT/
- S10: 한 채팅 메시지가 실시간 게임 개입이 되는 시청자 참여 — https://store.steampowered.com/app/4377330/Streamer_vs_Chat

## Interaction rules
- Cook은 주문표를 볼 수 없고 Caller는 주방을 볼 수 없다.
- Caller가 화면을 닦는 동안 두 사람의 음성이 정확히 2초 끊긴다.
- 시청자는 라운드당 한 번, 한 주문 요소만 바꾼다.

## Output artifact
45초 결과와 가장 웃긴 오답·음소거 순간을 담은 6초 세로 리플레이.

## Share / return loop
클립을 본 뒤 한 탭으로 역할을 바꾸고 10초 안에 재시작한다.

## Constraints
- 첫 플레이 전 설정 대시보드를 보여주지 않는다.
- 실제 음성 연결 없이도 로컬 시뮬레이션이 가능해야 한다.
- 색상 외 모양·텍스트로 재료를 구분한다.

## Non-goals
- 복잡한 레스토랑 시뮬레이션을 만들지 않는다.
- 장시간 랭크 경쟁을 만들지 않는다.

## Success metrics
- 15초 안에 두 역할과 닦기-음소거 규칙을 설명한다.
- 첫 라운드에서 한 번 이상 웃긴 실패가 나온다.
- 결과 후 10초 안에 역할 교대 재도전을 누른다.

## QA / screenshot criteria
- 두 역할 화면 정보가 의도치 않게 섞이지 않는다.
- 음소거 2초가 시각·진동 대체 신호로도 읽힌다.
- 정답·오답·가짜 벨·화면 안개·채팅 없음 상태가 있다.

## Development start prompt

```text
Implement the playful-experimental Stitch design as a local two-panel browser game simulation with role views, timed grease wipe/mute, deterministic chat interventions, replay, and instant rematch.
```
