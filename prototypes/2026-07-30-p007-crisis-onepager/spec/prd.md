# PRD — 1인 사업자 위기 대응 1-pager

## Problem
- 1인 사업자/소상공인은 위기 순간에 추상적 코칭 컨텐츠가 아니라 "지금 24시간에 무엇을 해야 하는가"를 인쇄 가능한 1-pager 카드로 받지 못함.

## Target user
- 1인 사업자/소상공인 + 자영업자 부모/배우자 — 위기 순간 사용자.

## Arrival path
- r/smallbusiness, 맘카페, 자영업자 모임.

## Business / validation route
- 무료 + 후속 코칭/세무 referral.

## Core loop
- 3-슬라이더 → 1-pager 카드 → 인쇄/공유.

## First screen
- 3-슬라이더 + 빈 카드 미리보기.

## Key screens
- 3-slider input, 1-pager card, print/PDF action, share-to-reddit generator.

## Interaction rules
- 슬라이더 변경 시 카드 즉시 업데이트.

## Share / return loop
- "내 1-pager" 인스타/블로그.

## Constraints
- Time: 1 week MVP
- Budget: solo dev
- Platform: web (desktop + mobile)

## Non-goals
- 의료/법률 자문, 코칭, 결제.

## Success metrics
- 10k 1-pager 생성, 1k 인쇄/PDF export/월, 코칭/세무 referral 100/월.

## QA / screenshot criteria
- 1-pager 가독성, 행동 권고 정확도, 모바일/데스크톱 Puppeteer 스크린샷.

## Design profile
- playful-experimental

## Theme
- 건강/외로움

## Source signals
- S4 (r/smallbusiness 실패 thread), S7 (creator burnout과 별개).

## Reference pattern
- emergency first-aid card + r/smallbusiness 위로 thread

## Twist
- 3-슬라이더 → 1-pager 인쇄 카드 + Reddit 텍스트 자동 생성

## Small group fit
- 위기 순간 1인 사업자/소상공인 + 부모/배우자

## Spread trigger
- "내 1-pager 카드" 인쇄/공유

## First validation test
- 5명 인터뷰에서 "1-pager를 인쇄하거나 캡처했나" yes/no.

## Development start prompt

```text
You are Codex working in the prototype-factory repo. Build 1인 사업자 위기 대응 1-pager as a polished local HTML/React prototype from this PRD.

Goal:
- 3-슬라이더 (매출 -50% / 체납 1~3개월 / 심리 1~10) → 1-pager 카드 (24시간 행동 3 / 이번주 행동 3 / 절대 ✗ 1) → 인쇄/PDF + Reddit/post 텍스트 자동 생성.

Implementation constraints:
- Use strong narrative hook; novelty in composition; 1 main accent; recognize-able controls; 포커 카드처럼.
- Make the first screen understandable in 3 seconds.
- Use realistic sample data (4 sample crisis states: mild / mid / severe / burnout).
- Include the key interaction (slider change → card updates in 0.3s; "Reddit 텍스트" 1-click; 인쇄 1-click).
- Avoid external paid APIs; mock data locally.
- Verify with build/typecheck and Puppeteer screenshot QA for desktop + mobile.
```

## Notes
- 위로/의료 위험 → "코칭 아님" 명시.
