# QA checklist

## Happy path
- 방문자가 별명을 고르고 한 셀을 선택한다.
- 5초 뒤 안전 연쇄가 열리고 이름표가 남는다.
- 마감 리플레이를 보고 다음 날 판을 확인한다.

## Edge and recovery states
- 이미 참여함
- 네트워크 끊김
- 동시 입력
- 색각 접근성
- 마감 직전 폭발

## Acceptance verification
- The first screen communicates the core job in three seconds.
- Exactly one design profile is used: playful-experimental.
- The theme is visible without overriding readability: 조용한 벽이 하루에 한 번씩 모두를 멈춰 세우는 공공 퍼즐 의식.
- Source references are present in the PRD and meta.json.
- No placeholder, generic dashboard hero, external paid API, or Phase A custom demo is included.
- 키오스크 1920×1080과 모바일 390px에서 동일한 셀 상태가 보인다.
- 한 번 참여·중복 참여·오프라인·폭발·완료 상태를 확인한다.
- 애니메이션을 줄이는 접근성 모드가 있다.
