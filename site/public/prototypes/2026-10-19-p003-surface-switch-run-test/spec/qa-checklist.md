# QA checklist

## Happy path
- 안전 안내를 확인하고 세션 A 조건을 기록한다.
- 회복 후 같은 체감강도로 세션 B를 기록한다.
- 통증 맵과 조건 차이를 확인하고 요약 카드를 저장한다.

## Edge and recovery states
- 세션 중 통증 급증
- 날씨 변화
- 신발 변경
- 체감강도 불일치
- 회복 전 재시도

## Acceptance verification
- The first screen communicates the core job in three seconds.
- Exactly one design profile is used: field-ops.
- The theme is visible without overriding readability: 기록 없이 억지로 더 뛰지 않게 하는 밝고 견고한 현장 실험 키트.
- Source references are present in the PRD and meta.json.
- No placeholder, generic dashboard hero, external paid API, or Phase A custom demo is included.
- 390px 모바일에서 48px 이상 터치 타깃을 유지한다.
- 정상 완료·중도 중단·회복 미확인·비교 불가 상태가 보인다.
- 빨간색은 중단과 위험에만 사용한다.
