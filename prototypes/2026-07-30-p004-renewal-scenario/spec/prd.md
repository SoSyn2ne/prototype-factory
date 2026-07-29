# PRD — 갱신 협상 3시나리오 워크플로우

## Problem
- 20-40대 한국 임차인은 갱신 시점에 집주인이 요구할 수 있는 시나리오(보증금 인상 / 퇴거 요구 / 현 조건 유지)를 미리 보고 내 권리/행동/스크립트를 한 화면에서 얻지 못함.

## Target user
- 20-40대 한국 임차인 (특히 30대 1인 가구/신혼/갭투자 진입자) — 모바일 우선.

## Arrival path
- 네이버 지식i → 맘카페/블라인드 → 본 도구.

## Business / validation route
- 광고 + 정부/지자체 협업 + 임대인/임대차 계약 매칭 partner referral.

## Core loop
- 입력 → 3 시나리오 → 시나리오 선택 → 권리 + 다음 행동 + 스크립트 → 협상 일기.

## First screen
- D-day 카드 + 3 시나리오 카드.

## Key screens
- D-day status, scenario picker, right & action checklist, script kit, negotiation log.

## Interaction rules
- 모바일 1-hand. D-day 자동 계산.

## Output artifact
- 협상 로그 PDF + 스크립트 복붙 메시지.

## Share / return loop
- "내 협상 시나리오" 카톡 공유.

## Constraints
- Time: 2 weeks MVP
- Budget: solo dev
- Platform: mobile-first web

## Non-goals
- 법률 자문, 계약 체결, 결제.

## Success metrics
- 10k MAU, 협상 일기 작성 1k/월, 정부/지자체 협업 1건.

## QA / screenshot criteria
- D-day 정확도, 권리 정보 법무 검토, 스크립트 자연스러움, 모바일 1-hand 검증, Puppeteer 모바일 스크린샷.

## Design profile
- calm-consumer

## Theme
- 자산 방어

## Source signals
- S1 (갭투자 규제 변화로 30대 임차 불안), S13 (r/korea 갱신 협상).

## Reference pattern
- 계약 갱신 가이드 PDF + 템플릿

## Twist
- D-day 시점 + 3시나리오 + 협상 로그 누적

## Small group fit
- 30대 한국 임차인 (갭투자 규제 + 시세 변동 압박)

## Spread trigger
- 카톡 "내 갱신 협상 시나리오" 캡처

## First validation test
- 10명 임차인 인터뷰에서 "실제 협상에 스크립트를 썼나" yes/no.

## Development start prompt

```text
You are Codex working in the prototype-factory repo. Build 갱신 협상 3시나리오 워크플로우 as a polished local HTML/React prototype from this PRD.

Goal:
- D-day card (90/60/30) + 3-scenario picker (보증금 +5% / 동결 퇴거 / 현 유지) + 선택 시 권리 + 다음 행동 + 스크립트 + 협상 일기.

Implementation constraints:
- Use warm neutrals + 1 gentle accent (sage or warm blue); generous section spacing; clear next-step buttons; helper text for mistake recovery; no alarm red except for true risk.
- Make the first screen understandable in 3 seconds.
- Use realistic sample data (D-90 / D-60 / D-30 sample states with full Korean sample content).
- Include the key interaction (tap scenario = expand panel, "복사" on script, 일지 add).
- Avoid external paid APIs; mock data locally.
- Verify with build/typecheck and Puppeteer mobile-first screenshot QA.
```

## Notes
- 법무 자문이 아닌 "정보" 명시 필요.
