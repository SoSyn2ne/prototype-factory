# QA checklist — p003 KR 허위매물 Quick-Triage + 신고 패킷

## Happy path
- URL 입력 (네이버 부동산 매물) → 0.5초 안에 허위 가능성 점수 + 5-category radar.
- 점수 78 + 사진 도용 카테고리 1위 + 안전 매물 3개 추천.
- 4종 신고 패킷 (국토부/LH_SHOP/분쟁조정/경찰 112) 1-click copy 정상.
- 1주 follow-up reminder 설정.

## Edge cases
- URL 형식 오류 → "직접 입력" 폼 fallback.
- 가격 시세 괴리 > 30% → 시세 괴리 카테고리 +20.
- 사진 URL 도용 감지 → 사진 도용 카테고리 +30.
- 5-category 모두 0 → 점수 < 30 (안전).
- 모바일 1-hand 인터랙션.

## Acceptance verification
- 6 sample suspicious listings 모두 점수 + radar + 4종 패킷 채워짐.
- 허위 패턴 재현율 ≥ 0.80.
- 4종 패킷 법무 검토 통과.
- 안전 매물 데이터 freshness ≤ 7일.
- 모바일 1-hand 가능.
- KR-only copy.
