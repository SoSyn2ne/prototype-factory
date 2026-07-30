# Falsification checklist — p008 KR 알바/단톡방 사기 패턴 Sniffer

1. 5명의 20~30대 사용자가 "이미 스팸 필터로 충분하다"고 답하면 kill.
2. 사기 패턴 점수 1-100이 실제 사기와 80% 일치하지 않으면 (재현율 < 0.80) kill.
3. 6-category radar가 실제 사기 패턴을 80% 커버하지 않으면 kill.
4. 4종 신고 패킷 (경찰 112/금융감독원 1332/스팸/KISA)이 법무 검토에서 부적합 판정 받으면 kill.
5. 안전 정통 알바 채널 5개 이상 freshness > 14일이면 kill.
6. 모바일 1-hand 인터랙션이 paste → 점수까지 1분 이상 걸리면 kill.
7. 금융감독원/KISA 제휴 + 안전 정통 알바 채널 referral로 수익화 모델 안 서면 kill.
