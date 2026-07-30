# PRD — KR 알바/단톡방 사기 패턴 Sniffer (p008)

## Problem
- 20~30대 KR 사용자는 카톡/텔레그램 단톡방 "알바" 초대 (사기 50% 비중, 1.4억 규모) 시 1) 사기 여부 2) 첫 입금 안전성 3) "검증된 단톡방" 표시 신뢰도 4) 신고 경로 (경찰 112/금융감독원 1332/스팸/KISA)를 모름. 통합 패턴 sniffer + 신고 1-pager 부재.

## Target user
- 20~30대 KR 사용자, 대학생/알바 구직자, 1인 자영업자 (모바일 우선).

## Arrival path
- 카톡/텔레그램 단톡방 초대 → 본 도구.

## Business / validation route
- 무료 + 금융감독원/KISA 제휴 + 안전한 정통 알바 채널 referral.

## Core loop
- 메시지 paste (텍스트/링크/스크린샷 URL) → 사기 패턴 점수 1-100 + 6-category radar (첫 입금 후 고액 요청/검증된 단톡방 표시/긴급성 압박/링크 클릭 요구/신원 비공개/연예인 사칭) → "지금 1분 안에 할 행동 3개" → 신고 1-pager 4종 (경찰 112 script / 금융감독원 1332 / 스팸 신고 / KISA) → 안전한 정통 알바 채널 추천 (워크넷/사람인/크몽) → 공유/친구 알림 1-click.

## First screen
- 메시지 paste + 사기 패턴 점수 + 1분 행동 3개.

## Key screens
- input, pattern gauge, 6-category radar, "1분 행동 3개", 4-kind report packet, safe-channel list, share.

## Interaction rules
- 모바일 1-hand. paste 0.5초 안에 점수.

## Output artifact
- 신고 1-pager PDF + 안전한 채널 PNG.

## Share / return loop
- "내 메시지 점수 87" 카톡 공유 + 신고 후기.

## Constraints
- Time: paste → 0.5초 점수, 1분 안에 행동 1개.
- Budget: 무료 + 정부/지자체 partner.
- Platform: web (mobile-first).

## Non-goals
- 사기 피해 보상/환급 처리 아님.
- 경찰/금융감독원 신고 대체 아님.
- 대출/금융 상품 추천 아님.

## Success metrics
- 패턴 정확도 (재현율), 신고 패킷 법무 검토 통과, 안전 채널 freshness (≤ 14일).
- Spread: "내 메시지 점수" 카톡 재공유율.

## QA / screenshot criteria
- 6 sample scam messages 모두 점수 + 6-category + 1분 행동 + 4종 패킷 채워짐.
- 안전 채널 5개 이상 표시.
- 모바일 1-hand 가능.
- KR-only copy.

## Source signal refs
- S12 (KR 1.4억 알바 사기 + 50% 비중, 2026-06-12 다음), S6과 별개.

## Development start prompt

```text
You are Codex working in the prototype-factory repo. Build KR 알바/단톡방 사기 패턴 Sniffer (p008) as a polished local HTML/React prototype from this PRD.

Goal:
- Paste 메시지 → 사기 패턴 점수 1-100 + 6-category radar + 1분 행동 3개 + 4종 신고 패킷 + 안전 정통 알바 채널 + 공유 in one screen.

Implementation constraints:
- Make the first screen understandable in 3 seconds.
- Use 6 realistic sample scam messages and complete UI states.
- Include 0.5s score recompute, 1-click report copy, 1-click safe channel open.
- Avoid external paid APIs; mock data locally if needed.
- Verify with build/typecheck when applicable and screenshot QA for mobile and desktop.
```

## Notes
- 디자인 프로파일: field-ops.
- 토픽: 자산 방어.
- Theme interpretation: 1.4억 사기 피해 방지.
