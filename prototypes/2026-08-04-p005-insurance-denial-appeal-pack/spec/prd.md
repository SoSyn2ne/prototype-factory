# PRD — Insurance Not Medically Necessary Denial 5-Stage Appeal Pack

## Problem
- 미국 환자는 "Not Medically Necessary" denial을 받았을 때 5단계 항소 + payer별 회신 기한 + letter 3-pack + 의료진 협조 — 를 매번 새로 작성. 기존 Medwave/etactics 가이드는 정적 letter만.

## Target user
- 미국 거주 환자/보호자, 만성 질환자, expensive procedure denial 직면.

## Arrival path
- r/HealthInsurance + r/LifeProTips + 병원 billing → 본 도구.

## Business / validation route
- 무료 + 의료진 컨시어지 referral + 환자 advocacy partner.

## Core loop
- paste → payer 매칭 → 5단계 → letter 3-pack → 의료진 협조 → log.

## First screen
- paste + 5단계.

## Key screens
- input, payer match, diagnostic, letter, doctor ask, log, state DOI.

## Interaction rules
- paste 0.5초 안에 payer 매칭; 1-click letter.

## Output artifact
- 1-pager PNG/PDF + reply templates / report packet

## Share / return loop
- "내 denial 단계 3 → 회신 30일" 캡처 + 항소 후기.

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
- payer별 회신 기한 정확도, letter 가독성, 의료진 협조 자연스러움.

## Design profile
- financial-analyst

## Theme
- 자산 방어 + 건강 (보험 자기부담금 + 의료 접근)

## Source signals
- S8

## Development start prompt

```text
You are Codex working in the prototype-factory repo. Build "Insurance 'Not Medically Necessary' Denial 5-Stage Appeal Pack" as a polished local HTML/React prototype from this PRD.

Goal:
- A US patient pastes a denial letter and immediately gets payer-specific 5-stage appeal match (internal 1st -> internal 2nd senior -> external independent review -> state DOI complaint -> legal escalation), deadlines per stage, 3 sample appeal letters, and a doctor ask letter.

Implementation constraints:
- Use a financial-analyst profile: ink/graphite, restrained cards, 2:1 number/unit hierarchy, quiet confidence badges.
- Payer matching must be a static lookup (Aetna, BCBS, Cigna, Humana, Kaiser, UHC, Medicare) plus an "other" fallback; do not invent private payer policies.
- The 5-stage strip must show the response window per stage; the doctor ask letter must be a separate one-pager, not a sub-bullet.
- Stay neutral on outcomes: do not promise wins, only show the path.
- No external paid APIs; mock denial letters and timing with a small static sample set.
- Verify with build/typecheck, then run a Puppeteer desktop + mobile screenshot QA pass.
```

## Notes
- 5명 환자가 "이미 병원 billing department에서 다 해준다"고 답하면 kill.
