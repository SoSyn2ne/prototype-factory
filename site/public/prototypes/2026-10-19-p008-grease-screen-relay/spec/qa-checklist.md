# QA checklist

## Happy path
- 두 플레이어가 QR로 페어링하고 역할을 확인한다.
- Caller가 기름을 닦아 주문을 읽는 동안 음성이 끊긴다.
- Cook이 한 접시를 틀리고 리플레이 뒤 역할을 바꿔 재도전한다.

## Edge and recovery states
- 채팅 연결 없음
- 동시 닦기 입력
- 가짜 벨
- 재료 색각 구분
- 한 플레이어 연결 끊김

## Acceptance verification
- The first screen communicates the core job in three seconds.
- Exactly one design profile is used: playful-experimental.
- The theme is visible without overriding readability: 스테인리스 점심 러시를 45초짜리 읽기 쉬운 슬랩스틱 기계로 만든 협동 소동.
- Source references are present in the PRD and meta.json.
- No placeholder, generic dashboard hero, external paid API, or Phase A custom demo is included.
- 두 역할 화면 정보가 의도치 않게 섞이지 않는다.
- 음소거 2초가 시각·진동 대체 신호로도 읽힌다.
- 정답·오답·가짜 벨·화면 안개·채팅 없음 상태가 있다.
