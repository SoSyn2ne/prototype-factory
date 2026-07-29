# PRD — Posting 7칸 캘린더 + 5분 캡션 생성기

## Problem
- 1인 크리에이터는 매주 posting 7칸을 채우면서 캡션/해시태그/썸네일을 매번 다 만들어야 해서 posting fatigue와 burnout이 누적됨.

## Target user
- 1인 크리에이터/소상공인 (Instagram Reels, TikTok, YouTube Shorts) — 주 3~7회 업로드.

## Arrival path
- r/youtubers, r/socialmedia, r/NewTubers, 인스타/TikTok 코치.

## Business / validation route
- $7/mo (1 channel) + $19/mo (5 channel) + 1:1 코칭 referral.

## Core loop
- 이번 주 주제 1개 → 7칸 자동 분배 → 캡션 3종 + 해시태그 + 썸네일 카피 → 1-click 복사.

## First screen
- 빈 7칸 + 주제 입력.

## Key screens
- week grid, theme input, caption 3-pack, hashtag pack, thumbnail copy.

## Interaction rules
- 5분 안에 7칸 채움. 모바일에서도 캡션 1-click 복사.

## Output artifact
- 캘린더 PNG + 캡션 복붙.

## Share / return loop
- "이번 주 7칸" 캡처 공유.

## Constraints
- Time: 2 weeks MVP
- Budget: solo dev
- Platform: web (desktop + mobile)

## Non-goals
- 자동 포스팅, 예약 발행, 결제.

## Success metrics
- 500 creator paid, weekly active 60%, 1:1 코칭 referral 50/월.

## QA / screenshot criteria
- 캡션 품질, 해시태그 niche mix, 5분 시간 측정, 모바일/데스크톱 Puppeteer 스크린샷.

## Design profile
- premium-editorial

## Theme
- 자산 방어

## Source signals
- S7 (r/youtubers, r/socialmedia posting fatigue), S14.

## Reference pattern
- Later / Buffer + Captions AI

## Twist
- 7칸 + 5분 약속 + 1-click 복사

## Small group fit
- 주 3회 이상 업로드 1인 크리에이터/소상공인

## Spread trigger
- "이번 주 7칸 다 채웠어요" 캡처 공유

## First validation test
- 5명 크리에이터 인터뷰에서 "5분 안에 7칸 다 채웠나" yes/no.

## Development start prompt

```text
You are Codex working in the prototype-factory repo. Build Posting 7칸 캘린더 + 5분 캡션 생성기 as a polished local HTML/React prototype from this PRD.

Goal:
- 빈 7칸 + 주제 입력 → 5분 안에 7칸 자동 분배 + 캡션 3종 (훅/스토리/CTA) + 해시태그 10 + 썸네일 카피 3 + 1-click 복사.

Implementation constraints:
- Use warm charcoal + cream + brass + cocoa + 1 quiet CTA color; elegant but fast-scanning typography; cards feel curated, not cluttered; restrained contrast.
- Make the first screen understandable in 3 seconds.
- Use realistic sample data (4 sample weeks: fitness, food, parenting, indie dev).
- Include the key interaction (theme input → 5-second auto-fill of 7 cells; cell click = open detail; 1-click copy anywhere).
- Avoid external paid APIs; mock data locally.
- Verify with build/typecheck and Puppeteer screenshot QA for desktop + mobile.
```

## Notes
- 캡션 AI 자체는 generic → 후속 Phase B 차별화.
