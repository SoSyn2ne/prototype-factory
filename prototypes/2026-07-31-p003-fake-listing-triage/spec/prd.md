# PRD — KR 허위매물 Quick-Triage + 신고 패킷 (p003)

## Problem
- 매수/임차 희망자는 허위매물 의심 시 1) 신고 사이트 4종 (국토부/LH_SHOP/분쟁조정/경찰 112) 2) 안전한 매물 비교 3) 진행률 추적을 흩어둠. MBC 보도: 2026년 2월 기준 허위매물 신고 6,493건 중 4,270건 허위 확인. 통합 triage 도구 부재.

## Target user
- 20~40대 한국 매수/임차 희망자, 영끌 세대, 신혼/무주택 1세대 (KR, 모바일 우선).

## Arrival path
- 네이버 부동산/직방/다방 → 매물 URL/주소/가격 → 본 도구.

## Business / validation route
- 광고 + 정부/지자체 협업 + 부동산 매칭 partner referral.

## Core loop
- URL/주소+가격+사진 URL 입력 → 허위 가능성 점수 1-100 → 5-category radar (사진 도용/시세 괴리/중복 매물/없는 호수/허위 신축) → 안전 매물 3개 자동 추천 → 신고 패킷 4종 → 1주 follow-up reminder.

## First screen
- 매물 입력 + 허위 가능성 점수 + 5-category radar.

## Key screens
- input, risk gauge, 5-category radar, safer 3-alternative, 4-kind report packet, progress + reminder.

## Interaction rules
- URL paste 0.5초 안에 점수; 모바일 1-hand; 1-click report copy.

## Output artifact
- 신고 패킷 PDF + 비교 PNG.

## Share / return loop
- "내 매물 점수 78" 캡처 + 신고 후기.

## Constraints
- Time: 1분 안에 점수 + 4종 패킷.
- Budget: 무료 + 정부/지자체 partner.
- Platform: web (mobile-first).

## Non-goals
- 부동산 매수/매매 중개 아님.
- 법률 자문 아님.
- 매물 시세 변동 예측 아님.

## Success metrics
- 허위 패턴 정확도 (재현율), 신고 패킷 법무 검토 통과, 안전 매물 데이터 freshness (≤ 7일).
- Spread: "내 매물 점수" 캡처 재공유율.

## QA / screenshot criteria
- 6 sample suspicious listings 모두 점수 + radar + 4종 패킷 채워짐.
- follow-up reminder 정확.
- 모바일 1-hand 가능.
- KR-only copy.

## Source signal refs
- S6 (MBC 허위매물 통계 6,493건/4,270건), S12 (KR 부동산 사기 패턴과 별개).

## Development start prompt

```text
You are Codex working in the prototype-factory repo. Build KR 허위매물 Quick-Triage + 신고 패킷 (p003) as a polished local HTML/React prototype from this PRD.

Goal:
- URL/주소/가격/사진 입력 → 허위 점수 1-100 + 5-category radar + 안전 매물 3개 + 4종 신고 패킷 + follow-up reminder in one screen.

Implementation constraints:
- Make the first screen understandable in 3 seconds.
- Use 6 realistic sample suspicious listings and complete UI states.
- Include 0.5s score recompute, 1-click report copy, 1-week follow-up reminder.
- Avoid external paid APIs; mock data locally if needed.
- Verify with build/typecheck when applicable and screenshot QA for mobile and desktop.
```

## Notes
- 디자인 프로파일: field-ops.
- 토픽: 자산 방어.
- Theme interpretation: 매수자/임차자 손실 방어.
