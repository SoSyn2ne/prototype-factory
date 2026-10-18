# QA checklist

## Happy path
- 매장을 선택하고 세 개 누락 메뉴를 확인한다.
- 점주 확인 후 문구 전후를 비교하고 화면 증거를 붙인다.
- 모든 필수 근거가 채워지면 완료 패킷을 연다.

## Edge and recovery states
- 점주 연락 실패
- 메뉴가 플랫폼에서 삭제됨
- 증거 화면이 오래됨
- 프랜차이즈 일괄 문구와 개별 매장 문구가 충돌함

## Acceptance verification
- The first screen communicates the core job in three seconds.
- Exactly one design profile is used: operator-dense.
- The theme is visible without overriding readability: 벌금 공포를 키우지 않고 빨간 메뉴 누락을 닫는 규정 패치 워크벤치.
- Source references are present in the PRD and meta.json.
- No placeholder, generic dashboard hero, external paid API, or Phase A custom demo is included.
- 데스크톱 1440px에서 테이블과 증거 드로어를 동시에 읽을 수 있다.
- 모바일 390px에서 패치 단계와 재알림이 가로 넘침 없이 작동한다.
- 정상·연락 실패·증거 누락·완료·재오픈 상태가 보인다.
