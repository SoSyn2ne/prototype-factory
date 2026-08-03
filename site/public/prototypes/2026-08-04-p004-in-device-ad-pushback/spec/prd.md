# PRD — In-Device Ad Pushback Packet

## Problem
- 차량/디바이스 소유자는 in-device 광고 발생 시 1) 소유권 침해 평가 2) vendor customer care 매칭 3) opt-out 절차 4) 사례 공유 5) 보상 청구 — 를 매번 새로 함. 기존 opt-out 가이드는 vendor 1개만.

## Target user
- 차량/디바이스 소유자, BMW/Tesla/Apple CarPlay/Android Auto/Kakao T/T맵 사용자 — 모바일 우선.

## Arrival path
- consumerrights.wiki + Reddit r/BMW/r/teslamotors + X → 본 도구.

## Business / validation route
- 무료 + 차량 보험/legal referral.

## Core loop
- paste → 점수 → vendor 매칭 → opt-out → 사례 공유 → 보상.

## First screen
- paste + 점수 + vendor 매칭.

## Key screens
- input, gauge, vendor matcher, opt-out, channels, compensation.

## Interaction rules
- 모바일 1-hand. 1분 안에 vendor 1개 매칭.

## Output artifact
- 1-pager PNG/PDF + reply templates / report packet

## Share / return loop
- "내 차량 화면 점수 88" X 공유.

## Constraints
- Time: prototype-only Phase A
- Budget: no paid APIs
- Platform: web responsive + mobile-first where applicable

## Non-goals
- Live scraping / live LLM calls
- Fulfilling any real legal / insurance / contractual effect

## Success metrics
- Recovery / score feels useful on real pasted input
- Recipients can copy 1-pager and templates without edits

## QA / screenshot criteria
- vendor contact freshness, opt-out 절차 정확도, 보상 청구 가능성.

## Design profile
- field-ops

## Theme
- 자산 방어 (디바이스 소유권)

## Source signals
- S4, S5

## Development start prompt

```text
You are Codex working in the prototype-factory repo. Build "In-Device Ad Pushback Packet" as a polished local HTML/React prototype from this PRD.

Goal:
- A device owner pastes a screenshot description of an unwanted in-car / in-device ad and gets an ownership-invasion score (1-100), a 5-category radar, a vendor care contact (BMW NA/EU/KR, Tesla, Apple, Google, Kakao, T맵), an opt-out 3-step, community channels, and a compensation packet.

Implementation constraints:
- Use a field-ops profile with a calm civic feel: steel + cyan accent, 44px controls, dense status rows.
- The vendor matcher must work on free text input; ship a static contact directory, not a web search.
- The opt-out 3-step must be vendor-aware and reversible; never invent a phone number.
- The community channels card must show real subreddits/forums (r/BMW, r/teslamotors) and the consumerrights.wiki pattern, not generic placeholders.
- The compensation packet must honestly mark "consult a lawyer" rather than fabricate payout numbers.
- No external paid APIs; mock the directory with a static JSON.
- Verify with build/typecheck, then run a Puppeteer mobile-first screenshot QA pass.
```

## Notes
- 5명 사용자가 "이미 vendor customer care에 직접 연락한다"고 답하면 kill.
