# PRD — Freelancer Ghost-Invoice Recovery Reel

## Problem
- US 프리랜서/소규모 에이전시는 invoice ghosting(클라이언트 응답 없음 + 미지급) 발생 시 1) Stop work 결정 2) debt collection letter 작성 3) small claims court 가액 평가 4) legal escalation 비용 추정 — 을 매번 새로 작성한다. 기존 DocuSign/Notion 템플릿은 작성만 도와주고 회수 가능성 점수 + 권장 단계를 추천하지 않는다.

## Target user
- 1인~5인 US 프리랜서, 디자이너/개발자/카피라이터/컨설턴트 (EN).

## Arrival path
- r/Entrepreneur + r/freelance + r/selfemployed "client ghost" 검색 → 본 도구.

## Business / validation route
- SaaS $9/mo (50 invoice/월) + $29/mo (무제한) + 변호사 referral.

## Core loop
- invoice paste → 회수 점수 → 4단계 추천 → 톤 3-pack → log.

## First screen
- invoice 입력 + 회수 점수 + 4단계.

## Key screens
- input, score + 6-category, 4-stage, tone 3-pack, log, cost ledger.

## Interaction rules
- paste 0.5초 안에 점수; 1-click letter; 1-click log.

## Output artifact
- 1-pager PNG/PDF + reply templates / report packet

## Share / return loop
- "내 invoice 회수 점수 67" 캡처 + 회수 후기.

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
- 회수 점수 재현성, letter 자연스러움, log immutable.

## Design profile
- financial-analyst

## Theme
- 자산 방어 (프리랜서 미수금)

## Source signals
- S6

## Development start prompt

```text
You are Codex working in the prototype-factory repo. Build "Freelancer Ghost-Invoice Recovery Reel" as a polished local HTML/React prototype from this PRD.

Goal:
- US freelancer (designer/dev/copywriter) pastes a single ghost-invoice payload and immediately sees a recovery score (1-100), 4-stage recommendation (Stop work / Debt collection letter / Small claims / Legal escalation), expected recovery rate per stage, 3 tone variants (firm/polite/firm-final), and an immutable log.

Implementation constraints:
- Use a quiet, analyst-grade visual system (financial-analyst profile): restrained ink/graphite, tabular numbers, one accent, 40px row height, no decorative charts.
- Make the recovery score and 4-stage strip understandable in 3 seconds on desktop and mobile.
- Include a tone-3 reply composer with copy buttons; do not invent an LLM call, just rotate between prewritten templates keyed by stage.
- The cost ledger must add attorney + small claims filing fees honestly; flag when legal escalation ROI is negative.
- Treat content as problem evidence; do not invent specific state laws.
- No external paid APIs; mock comps and recovery rates from a small static dataset.
- Verify with build/typecheck where applicable, then run a Puppeteer desktop + mobile screenshot QA pass.
```

## Notes
- 5명 프리랜서가 "이미 Bonsai/FreshBooks로 충분하다"고 답하면 kill.
