# QA checklist — p005 Etsy Listing Shadowban Diagnostic + Refresh Plan

## Happy path
- shop URL 입력 → 0.5초 안에 10 listing 점수.
- 6-category diagnostic radar 표시.
- 이번 주 refresh 우선순위 3개 (점수 + 영향 매출) 자동.
- 1-click title 15단어 시안 3종 + tag 10개 표시.
- vacation mode toggle 안전성 advisory 표시.

## Edge cases
- listing < 10 (5개) → 5개만 점수 표시.
- title > 15단어 → 15단어 위반 카테고리 +30.
- Etsy Ads 효율 < 1% → CTR 카테고리 +20.
- 카테고리 mismatch → 카테고리 카테고리 +15.
- 모바일 1-hand 인터랙션.

## Acceptance verification
- 10 sample listings 모두 점수 + 6-category + refresh 시안 채워짐.
- 점수 재현율 ≥ 0.80.
- 1-click title 15단어 이내 정확 100%.
- vacation advisory 정확도 ≥ 80%.
- desktop + mobile 1-hand 가능.
- EN-only copy.
