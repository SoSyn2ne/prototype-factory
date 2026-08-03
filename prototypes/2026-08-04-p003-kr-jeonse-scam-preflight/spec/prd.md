# PRD — 전세 사기 Pre-Flight Checklist + 신고 1-pager

## Problem
- 20~30대 KR 전세/월세 입주 희망자는 (a) 임대인 신원 확인 (b) 등기부등본 위변조 체크 (c) 확정일자/잔금일 (d) HUG 전세보증금반환보증보험 4단계를 매번 새로 함. 07-31 허위매물 quick-triage와는 다른 axis.

## Target user
- 20~30대 KR 전세/월세 입주 희망자, 신혼/무주택 1세대 — 모바일 우선.

## Arrival path
- 네이버/카페/블라인드 + r/Scams → 본 도구.

## Business / validation route
- 무료 + HUG/보증보험 referral + 법률구조공단 partnership.

## Core loop
- input → 점수 → 5-check pre-flight → 4종 신고 → follow-up.

## First screen
- input + 점수 + 5-check.

## Key screens
- input, gauge, pre-flight, alternatives, report packet, follow-up.

## Interaction rules
- 모바일 1-hand. 1분 안에 5-check 완료.

## Output artifact
- 1-pager PNG/PDF + reply templates / report packet

## Share / return loop
- "내 매물 점수 82" 카톡 공유 + HUG 가입 후기.

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
- 사기 패턴 정확도, HUG 가입 가능성 freshness, 신고 패킷 법무 검토.

## Design profile
- field-ops

## Theme
- 자산 방어 (전세 보증금 1억~10억)

## Source signals
- S7

## Development start prompt

```text
You are Codex working in the prototype-factory repo. Build "KR 전세 사기 Pre-Flight Checklist + 신고 1-pager" as a polished local HTML/React prototype from this PRD.

Goal:
- A Korean renter about to visit a property pastes landlord/contract info and gets a scam pattern score (1-100), 5-category radar, a "5 checks before today's visit" card, and a 4-channel report packet (112 / LH 1600-1004 / 법률구조공단 132 / HUG 가입).

Implementation constraints:
- Use a field-ops profile: slate blue + cyan/orange action accent, 44px touch targets, dense but legible checklists, no decorative dispatch hero.
- The 5-check pre-flight must be readable in a single mobile screen.
- The 4-channel report packet must include a one-sentence script per channel (no fake legal claims).
- Mark the HUG 가입 channel clearly and link the user to the official HUG site only; do not collect user data.
- Do not invent KR regulations; use public knowledge only and add a clear disclaimer.
- No external paid APIs; mock comps and safer-property lists with static data.
- Verify with build/typecheck, then run a Puppeteer mobile-first screenshot QA pass.
```

## Notes
- 5명 사용자가 "이미 네이버 등기부등본 조회로 충분하다"고 답하면 kill.
