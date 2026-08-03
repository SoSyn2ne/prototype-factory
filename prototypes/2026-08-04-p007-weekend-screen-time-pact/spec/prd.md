# PRD — Weekend Screen-Time Pact Card + 1-Line Calm Reply

## Problem
- 30~40대 부모는 자녀 screen-time 갈등에서 1) pact 합의 2) 'I'm ruining their life' 1줄 회신 3) 시각화 4) 9월 재협상 — 를 매번 새로 함. 기존 가이드는 추상적.

## Target user
- 30~40대 부모, 8~14세 자녀 가정, screen-time 갈등 겪는 가정.

## Arrival path
- r/daddit + r/raisingkids + Apple Screen Time → 본 도구.

## Business / validation route
- 무료 + 가족 코칭 referral + 스크린타임 앱 partnership.

## Core loop
- pact 4칸 → 1-line reply 5종 → 시각화 → 카드 → 9월 재협상.

## First screen
- pact 4칸 + 카드 미리보기.

## Key screens
- pact slider, reply pack, visualization, card, reminder, retro.

## Interaction rules
- 모바일 1-hand. 30초 안에 pact 1개.

## Output artifact
- 1-pager PNG/PDF + reply templates / report packet

## Share / return loop
- "이번 주 pact 카드" 인스타 + 가족 후기.

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
- 1-line reply 자연스러움, 시각화 매력, 9월 재협상 trigger.

## Design profile
- playful-experimental

## Theme
- 외로움/건강 (부모-자녀 정서 + 부모 죄책감)

## Source signals
- S10

## Development start prompt

```text
You are Codex working in the prototype-factory repo. Build "Weekend Screen-Time Pact Card + 1-Line Calm Reply" as a polished local HTML/React prototype from this PRD.

Goal:
- A parent (or co-parent) slides four pact slots (weekday / weekend / phone / console+app), picks one of five "I'm ruining their life" 1-line calm replies, customizes a printable card with a timer/sticker/calendar visualization, and gets a 9/1 auto-renegotiation reminder.

Implementation constraints:
- Use a playful-experimental profile: one bold but readable accent, strong card hierarchy, share-friendly first impression.
- The pact card must look like a printable family agreement, not a settings screen; keep it 1-card and 1-tap shareable.
- The 5 calm replies must feel humane and short (under 120 characters each); keep the wording honest, not theatrical.
- The 9/1 renegotiation reminder must be a passive chip on the card, not a pop-up nag.
- Do not collect child data; do not call any analytics SDK.
- No external paid APIs; mock the timer/sticker visuals with static SVG.
- Verify with build/typecheck, then run a Puppeteer mobile-first screenshot QA pass.
```

## Notes
- 5명 부모가 "이미 Apple Screen Time + 가족 회의로 충분하다"고 답하면 kill.
