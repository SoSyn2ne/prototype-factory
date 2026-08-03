# PRD — Teacher Summer-Break Auto-Reply Toggle + Boundary Pact

## Problem
- 8월 미국 K-12 교사들은 summer break 중 학부모 이메일 폭격에 시달림. 1) auto-reply 모드 결정 2) boundary pact 3) 메일 log 4) 9월 reopen — 를 매번 새로 함. 07-31의 slow-cook은 학기 중, 오늘은 summer-only.

## Target user
- 미국 K-12 교사, 학원 강사, 입시 컨설턴트, 코치 — summer break 한정.

## Arrival path
- r/Teachers summer threads + Outlook auto-reply → 본 도구.

## Business / validation route
- 무료 + 교육청 단위 라이선스 ($99/학교/연) + teacher wellness partner.

## Core loop
- toggle → auto-reply 3종 → pact 3-target → log → reopen.

## First screen
- summer toggle + auto-reply 3종.

## Key screens
- toggle, auto-reply, pact, log, reopen, counter.

## Interaction rules
- 모바일 1-hand. 1분 안에 토글 + auto-reply 1개.

## Output artifact
- 1-pager PNG/PDF + reply templates / report packet

## Share / return loop
- "이번 summer 회신 0건 + auto-reply 1줄" 트위터.

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
- auto-reply 자연스러움, pact 가독성, reopen script 효과.

## Design profile
- calm-consumer

## Theme
- 건강 (교사 소진 회복)

## Source signals
- S9

## Development start prompt

```text
You are Codex working in the prototype-factory repo. Build "Teacher Summer-Break Auto-Reply Toggle + Boundary Pact" as a polished local HTML/React prototype from this PRD.

Goal:
- A US K-12 teacher flips a summer toggle and instantly picks one of three auto-reply modes (No reply / Urgent only / Forward to admin), sees a 3-target boundary pact (parent/student/principal), keeps an immutable log of last-semester hostile threads, and gets a 9/1 reopen script.

Implementation constraints:
- Use a calm-consumer profile: warm neutrals, gentle accent, generous spacing, friendly helper text, no alarm red except true risk.
- The summer toggle is the first control on the first screen; auto-reply body editor is a modal, not a sub-page.
- The boundary pact must read like a single family/team agreement, not a legal document.
- The reopen script must be a separate one-clickable artifact, not a buried sub-menu.
- Do not invent district policies; keep the disclaimer visible.
- No external paid APIs; mock the inbox log with a small static sample.
- Verify with build/typecheck, then run a Puppeteer mobile-first screenshot QA pass.
```

## Notes
- 5명 교사가 "이미 Outlook auto-reply로 충분하다"고 답하면 kill.
