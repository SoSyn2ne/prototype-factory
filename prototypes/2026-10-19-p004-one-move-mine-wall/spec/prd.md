# PRD — 오늘 한 칸 지뢰벽

## Product intent / problem
카페·학교·사무실의 반복 방문자는 같은 공간을 공유하지만 서로 가볍게 참여할 짧은 공동 의식이 부족하다.

## Target user
반복 방문자가 있는 카페, 코워킹, 학교, 사무실 운영자와 작은 커뮤니티.

## Arrival path
입구의 물리 버튼/e-ink 벽과 QR 조인 화면에서 시작한다.

## Business / validation route
한 장소에서 일주일 동안 모의 보드를 운영해 참여율, 관전, 마감 리플레이 공유를 측정한다. 하드웨어 키트 판매 또는 장소 구독을 탐색한다.

## Core loop / key UX
별명/QR 참여 → 하루 한 칸 선택 → 5초 확정 → 안전 연쇄 또는 폭발 → 공동 보드 갱신 → 마감 리플레이.

## First screen
9×9 대형 보드, 오늘 18명 참여, ‘당신의 한 칸이 남았습니다’ 문구, 하나의 빛나는 셀.

## Required UI sections
- 오늘 보드
- QR·별명 참여
- 한 칸 선택
- 관전자 예측
- 연쇄·폭발
- 공동 기록
- 하루 리플레이
- 벽 장치 상태·접근성

## Assigned profile and theme
- Design profile: `playful-experimental`
- Theme: 조용한 벽이 하루에 한 번씩 모두를 멈춰 세우는 공공 퍼즐 의식

## Source signal references
- S04: 한국 날짜 기준 같은 일일 지뢰찾기 판 — https://news.hada.io/topic?id=35583
- S09: 한 행동이 실패 클립과 즉시 재도전을 만드는 비대칭 게임 신호 — https://www.roadandtrack.com/news/a74134971/left-left-left-rally-driving-video-game/

## Interaction rules
- 방문자당 하루 한 번만 열린다.
- 첫 참여와 재접속을 구분하되 실명은 요구하지 않는다.
- 장치 오프라인이면 안전하게 읽기 전용으로 전환한다.

## Output artifact
그날의 공동 보드와 6초 세로형 성공/폭발 리플레이.

## Share / return loop
마감 때 리플레이를 보고 다음 날 같은 시간에 새 판이 열린다.

## Constraints
- Stitch는 키오스크/모바일 UI를 설계하고 실제 하드웨어는 선택 계약으로 남긴다.
- 도박·현금 보상·무한 재시도를 넣지 않는다.
- 색각 접근성을 위해 숫자·패턴 상태를 병행한다.

## Non-goals
- 일반 Minesweeper 전체 기능을 복제하지 않는다.
- 글로벌 랭킹이나 계정 시스템을 만들지 않는다.

## Success metrics
- 15초 안에 한 사람 한 칸 규칙을 이해한다.
- 관전자도 다음 행동을 기다릴 이유가 있다.
- 폭발 실패가 불쾌감보다 웃음과 공유를 만든다.

## QA / screenshot criteria
- 키오스크 1920×1080과 모바일 390px에서 동일한 셀 상태가 보인다.
- 한 번 참여·중복 참여·오프라인·폭발·완료 상태를 확인한다.
- 애니메이션을 줄이는 접근성 모드가 있다.

## Development start prompt

```text
Build a local kiosk simulation for 오늘 한 칸 지뢰벽 with one-move locking, daily board state, spectator guesses, safe-chain/mine animation, replay, and offline fallback. Document but do not require optional hardware.
```
