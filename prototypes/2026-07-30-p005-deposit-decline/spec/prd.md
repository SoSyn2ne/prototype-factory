# PRD — 보증금 인상 거절 스크립트 + 전입신고 체크리스트

## Problem
- 20-40대 한국 임차인은 보증금 인상 요구 시 거절 스크립트와 전입신고/확정일자/내용증명 체크리스트가 흩어져 있어 1분 안에 행동으로 옮기기 어려움.

## Target user
- 20-40대 한국 임차인, 특히 갭투자 규제/시세 변동으로 협상 압박 받는 임차인.

## Arrival path
- 네이버 지식i + 맘카페 + 임대차 분쟁 상담.

## Business / validation route
- 광고 + 정부 협업 + 보호자/변호사 referral.

## Core loop
- 상황 입력 → 거절 스크립트 3종 + 7-step 체크리스트 → 진행률.

## First screen
- 상황 입력 + 첫 거절 스크립트.

## Key screens
- situation input, script picker, 7-step checklist, progress bar, escalation CTA.

## Interaction rules
- 모바일 1-hand. 1분 안에 행동 1개 완료.

## Output artifact
- 스크립트 복붙 + 체크리스트 PDF.

## Share / return loop
- "거절했더니 1% 깎았어요" 후기.

## Constraints
- Time: 2 weeks MVP
- Budget: solo dev
- Platform: mobile-first web

## Non-goals
- 법률 자문, 계약 체결, 결제.

## Success metrics
- 5k MAU, 체크리스트 진행률 80% 도달 2k/월, 변호사 referral 100/월.

## QA / screenshot criteria
- 스크립트 자연스러움, 체크리스트 정확도, 진행률 동기화, 모바일 1-hand 검증, Puppeteer 모바일 스크린샷.

## Design profile
- calm-consumer

## Theme
- 자산 방어

## Source signals
- S1 (갭투자 규제 변화), S13 (r/korea 갱신 협상).

## Reference pattern
- 민원24 + 내용증명 작성기

## Twist
- 상황별 거절 스크립트 + 단계별 체크리스트 + 진행률

## Small group fit
- 30대 임차인 + 부모 세대 자식 자문

## Spread trigger
- "거절했더니 1% 깎았어요" 후기

## First validation test
- 10명 임차인 인터뷰에서 "실제 집주인에게 거절했나" yes/no.

## Development start prompt

```text
You are Codex working in the prototype-factory repo. Build 보증금 인상 거절 스크립트 + 전입신고 체크리스트 as a polished local HTML/React prototype from this PRD.

Goal:
- 상황 입력 → 거절 스크립트 3종 (부드럽게/단호하게/법적 근거) + 7-step 체크리스트 (전입신고/확정일자/내용증명/주민센터 등) + 진행률 + 보호자/변호사 escalation.

Implementation constraints:
- Use warm neutrals + 1 gentle accent; reassuring tone; clear step-by-step progress; helper text for mistake recovery.
- Make the first screen understandable in 3 seconds.
- Use realistic sample data (4 sample situations: 전세 단기/장기, 월세 단기/장기).
- Include the key interaction (tab switch = script change, checkbox = progress, "복사" = copy script).
- Avoid external paid APIs; mock data locally.
- Verify with build/typecheck and Puppeteer mobile-first screenshot QA.
```

## Notes
- 변호사 광고 정책 회피 필요.
