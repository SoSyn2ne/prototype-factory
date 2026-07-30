# QA checklist — p007 Ambient Memory Review & Redaction Console

## Happy path
- 오늘의 요약 카드 5개 bullet 표시.
- 원본 snippet (오디오/텍스트) ▶ play 정상.
- 액션 (delete/keep/edit) 1-click 정상.
- 1-click 캘린더/이메일/노션 export 정상.
- 검색 (날짜/키워드/감정) 결과 < 0.3s.

## Edge cases
- snippet 오디오 없음 (텍스트만) → 텍스트 snippet fallback.
- delete 액션 후 복구 시도 → 차단 (immutable).
- 검색 결과 0 → "결과 없음" + 추천 검색어.
- export .ics 잘못된 날짜 → "이벤트 제목 + 날짜" 필수 표시.
- 모바일/태블릿 1-hand 인터랙션.

## Acceptance verification
- 7 sample days (회의/개인/프로젝트/휴일 등) 모두 요약 + snippet + export 후보 채워짐.
- 검색 응답성 < 0.3s.
- .md/.ics export 정확도 ≥ 95%.
- privacy banner 표시.
- desktop + mobile + tablet 가능.
- KR/EN 토글 정상.
