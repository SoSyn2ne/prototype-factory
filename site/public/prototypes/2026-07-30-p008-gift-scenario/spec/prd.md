# PRD — 한국형 축의금/조의금 시나리오 시뮬레이터

## Problem
- 20-40대 한국 직장인/대학생은 결혼/장례/돌잔치 시즌에 사회적 시선 + 부모 부담 분담 압박으로 축의금/조의금 결정에 스트레스를 받지만, 분위기 카드 + 부모 분담 시나리오를 한 장으로 받는 도구가 없음.

## Target user
- 20-40대 한국 직장인/대학생 — 경조사 시즌에 폭발적 pull.

## Arrival path
- 결혼/장례 시즌 → 맘카페/카톡 → 인스타 → 본 도구.

## Business / validation route
- 광고 + 시뮬레이션 결과에 따른 금융/보험 partner.

## Core loop
- 4-step 입력 → 분위기 카드 → 부모 분담 시나리오 → 봉투 문구 + 캡처.

## First screen
- 4-step + 첫 분위기 카드 미리보기.

## Key screens
- 4-step input, atmosphere card, parent toggle, scenario 3-pack, share button.

## Interaction rules
- 모바일 1-hand. 결과 카톡/인스타 1-click 공유.

## Output artifact
- PNG + 봉투 문구 복붙.

## Share / return loop
- "내 축의금 분위기" 카톡 공유.

## Constraints
- Time: 1 week MVP
- Budget: solo dev
- Platform: mobile-first web

## Non-goals
- 금융/보험 자문, 결제, 추천.

## Success metrics
- 20k 시뮬레이션/월, 카톡 공유 5k/월, 금융/보험 partner 1건.

## QA / screenshot criteria
- 분위기 카드 정확도, 봉투 문구 자연스러움, 모바일 1-hand 검증, Puppeteer 모바일 스크린샷.

## Design profile
- playful-experimental

## Theme
- 외로움/역전

## Source signals
- S6 (r/wedding cash gift + r/etiquette), S13 (r/korea 부모 부담 분담).

## Reference pattern
- r/wedding cash gift guide + Korea 카탈로그

## Twist
- 부모 동행 분담 시나리오 + 분위기 카드 1장

## Small group fit
- 20-40대 결혼/장례 시즌 임박 한국 직장인/대학생

## Spread trigger
- "내 축의금 분위기 카드" 카톡/인스타 공유

## First validation test
- 10명 인터뷰에서 "실제 봉투 문구를 그대로 썼나" yes/no.

## Development start prompt

```text
You are Codex working in the prototype-factory repo. Build 한국형 축의금/조의금 시나리오 시뮬레이터 as a polished local HTML/React prototype from this PRD.

Goal:
- 4-step 입력 (이벤트/관계/도시/규모/부모 동행) → 분위기 카드 (사회적 평균/부끄럽지 않은 범위/내 부담 분담) → 봉투 문구 + 카톡/인스타 1-click 공유.

Implementation constraints:
- Use 매거진 카드처럼; novelty in composition; 1 main accent; 인쇄 가능한 분위기.
- Make the first screen understandable in 3 seconds.
- Use realistic sample data (12 sample scenarios: 결혼/장례/돌잔치 × 친구/직장/친척 × 서울/지방 × 소/중/호화 × 부모 동행 on/off).
- Include the key interaction (4-step progress → atmosphere card updates; 부모 toggle → 분담 시나리오 3개; 봉투 문구 1-click copy; share 1-click).
- Avoid external paid APIs; mock data locally.
- Verify with build/typecheck and Puppeteer mobile-first screenshot QA.
```

## Notes
- 사회적 평균은 변동 → 분기별 업데이트.
