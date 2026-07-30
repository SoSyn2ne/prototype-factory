# Falsification checklist — p003 KR 허위매물 Quick-Triage + 신고 패킷

1. 5명의 매수/임차 희망자가 "네이버 부동산 자체 신고 버튼으로 충분하다"고 답하면 kill.
2. 허위 가능성 점수 1-100이 실제 허위매물과 80% 일치하지 않으면 (재현율 < 0.80) kill.
3. 5-category radar가 실제 허위매물 패턴을 80% 커버하지 않으면 kill.
4. 4종 신고 패킷 (국토부/LH_SHOP/분쟁조정/경찰 112)이 법무 검토에서 부적합 판정 받으면 kill.
5. 안전 매물 3개 추천 데이터 freshness > 7일이면 kill.
6. 모바일 1-hand 인터랙션이 paste → 점수까지 1분 이상 걸리면 kill.
7. 정부/지자체 협업 의사 없으면 + 부동산 매칭 partner referral 안 되면 kill.
