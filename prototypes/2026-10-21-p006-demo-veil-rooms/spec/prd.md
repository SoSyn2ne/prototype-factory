# PRD — Demo Veil Rooms

## Product intent / problem
인디게임 팀은 외부 피드백이 필요하지만 공개 데모가 무단 스트리밍이나 빠른 복제의 표면이 될까 두려워 아예 공개를 취소한다. 학습 기회를 잃지 않으면서 노출을 통제할 작은 도구가 필요하다.

## Target user
출시 전 외부 피드백이 필요한 2–10명 규모 인디게임 팀과 신뢰 기반 플레이테스터.

## Arrival path
Steam 공지, Discord 테스터 모집, 빌드 준비 완료 알림에서 진입한다.

## Business / validation route
12명 모의 룸에서 만료, 두 번째 기기, 클립 유출, 즉시 회수 훈련을 실행하고 통제 성공률과 피드백 완성률을 측정한다. 활성 룸/테스터 수 기반 구독을 검증한다.

## Core loop / key UX
룸 생성 → 빌드/기능 범위 설정 → 참가자별 워터마크 초대 → 플레이/접근 이벤트 → 장면별 피드백 → 만료 또는 회수.

## First screen
오늘의 비공개 룸에 활성 테스터, 노출 기능, 만료 시간, 하나의 즉시 회수 동작이 보인다.

## Required UI sections
- 테스트 룸 생성과 빌드 버전
- 초대 명단과 참가자별 워터마크
- 기능/장면 권한과 접근 시간
- 즉시 회수와 두 번째 기기 차단
- 클립 지문 시뮬레이션
- 장면별 피드백과 사고 이력

## Assigned profile and theme
- Design profile: operator-dense
- Theme: 창작자가 발견 가능성과 출시 선행권 사이의 공포를 통제 가능한 노출로 바꾸기

## Source signal references
- S12: AI 복제 우려로 공개 데모를 취소하고 추첨형 비공개 세션으로 바꾼 스튜디오 — https://store.steampowered.com/news/app/4150720/view/746066581090468248

## Interaction rules
- 워터마크는 참가자/세션마다 다르고 미리보기 가능하다.
- 회수는 즉시 새 접근을 막지만 이미 촬영된 콘텐츠 삭제를 보장하지 않는다.
- 기능 권한은 허용 목록이며 기본은 닫힘이다.
- 피드백은 빌드 버전과 장면 시각에 묶인다.

## Output artifact
워터마크 ID, 기능 범위, 접근 이벤트, 피드백이 담긴 참가자별 세션 manifest.

## Share / return loop
테스터는 장면별 피드백과 공로 카드를 받고 스튜디오는 민감 정보를 지운 세션 요약을 협업자에게 보낸다.

## Constraints
- 실제 DRM이나 안티치트가 아닌 인터랙션 모의다.
- 복제 방지 보장을 하지 않고 억제·추적·회수 범위를 명시한다.
- 화면 캡처와 다중 기기 상태를 모의 데이터로 표현한다.

## Non-goals
- 완전한 DRM, 법적 집행, 게임 빌드 배포 CDN을 만들지 않는다.

## Success metrics
- 운영자가 30초 안에 한 테스터 권한을 회수한다.
- 테스트 사용자의 90%가 워터마크가 추적 도구이지 복제 방지 보장이 아님을 설명한다.
- 모든 피드백이 빌드/장면 버전과 연결된다.

## QA / screenshot criteria
- 활성, 만료, 회수, 두 번째 기기 차단, 오프라인, 유출 클립 상태가 있다.
- 첫 화면에서 룸 범위와 회수 동작이 3초 안에 읽힌다.
- 390px에서도 권한과 위험 문구가 잘리지 않는다.

## Development start prompt

```text
Build a controlled indie playtest room with session creation, participant-specific moving watermark, feature scope, expiry, revocation, clip fingerprint ID, and scene-linked feedback. Be explicit that it deters and traces exposure; it does not guarantee anti-copy protection.
```

## Copy/paste-ready Stitch prompt

Create a responsive global B2B app called “Demo Veil Rooms” for small indie studios that need feedback but are withholding public demos over streaming and AI-copy fears. Start on an active closed room with build version, allowed feature slice, tester roster, expiring window, and one unmistakable revoke control. Let the studio preview each tester’s moving watermark, toggle scene/feature access, inspect access events, simulate a leaked clip fingerprint, revoke one tester, and collect timestamped feedback attached to the exact scene. Include expired invite, reconnect, denied second device, and redacted collaborator export states. Required sections: room creator, roster, watermark, feature gates, build, access window, revoke, fingerprint, feedback, and incident history. Design direction: use the operator-dense profile with charcoal and slate, one sharp violet accent, compact 36–40px rows, crisp permissions, and no cyberpunk security theater.
