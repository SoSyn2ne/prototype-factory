# QA checklist — p002 Hostile-Parent Email Slow-Cook Reply Console

## Happy path
- paste (subject = "Disappointed in B+", body = "...", timestamp = 2026-07-31 02:15) → 24h slow-cook 큐 진입.
- 24h 후 3종 템플릿 (중립/공감/사실) 해제.
- 분노 점수 1-100 + 5-category breakdown (nighttime, B+ 관련, 특정학생 거론) 표시.
- immutable 로그 + admin forward 패킷 export 정상.

## Edge cases
- timestamp가 야간 (22:00~06:00) → 분노 점수 +20 자동.
- body에 "법적" 또는 "변호사" 단어 → legal mention 카테고리 +1.
- paste 후 24h 이내 manual unlock 시도 → 차단.
- immutable 로그 편집 시도 → 차단.
- 모바일 1-hand 인터랙션.

## Acceptance verification
- 4 sample hostile parent emails 모두 큐/로그/forward 패킷 채워짐.
- 24h 카운트다운 정확 (±1분).
- 분노 점수 1-100 + 5-category 5명 교사 평가 80% 일치.
- 모바일 1-hand 가능.
- KR/EN 토글 정상.
