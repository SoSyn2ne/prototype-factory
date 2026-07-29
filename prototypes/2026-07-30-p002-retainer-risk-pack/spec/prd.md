# PRD — Retainer Risk Score + Clause Pack

## Problem
- Freelancers / small studios sign retainers without a fast, structured way to score client risk and pre-stage defensive clauses + decline scripts.

## Target user
- 1-10 person freelancer / design-dev-marketing agency, KR/EN.

## Arrival path
- r/freelance, r/agency, r/consulting → "retainer contract template" search → 본 도구.

## Business / validation route
- SaaS $9/mo + PDF export $5/건 + KR/EN clause pack 번들.

## Core loop
- Client info input → risk score 1-100 → 5-category breakdown → 5-clause pack (KR/EN toggle) → 3-script pack → PDF export.

## First screen
- Client input form + empty risk gauge.

## Key screens
- input, gauge, breakdown, clause pack, script pack, PDF export drawer.

## Interaction rules
- Input change → risk recompute in 0.5s; clause 1-click copy; PDF 1-click export.

## Output artifact
- PDF (clause + script + risk justification).

## Share / return loop
- "내 client risk 78점" 슬랙/트위터 공유.

## Constraints
- Time: 2 weeks MVP
- Budget: solo dev
- Platform: web, desktop-first

## Non-goals
- 법률 자문, 계약 체결, 결제.

## Success metrics
- 200 PDF export/월, retention > 60%, 50 freelance community mention.

## QA / screenshot criteria
- risk 점수 재현성, clause 정확도(법무 1차 검수), PDF 렌더, 모바일/데스크톱 Puppeteer 스크린샷.

## Design profile
- financial-analyst

## Theme
- 자산 방어

## Source signals
- S5 (r/freelance retainer ghost), S14 (가계 누수 anxiety와 별개).

## Reference pattern
- credit score + NDA template

## Twist
- 점수 + clause + 거절 스크립트 3종이 한 화면

## Small group fit
- 1-10명 프리랜서/스튜디오, 결제 사고 1회 이상자

## Spread trigger
- "내 client risk 78점" 캡처 공유

## First validation test
- 5명 프리랜서 인터뷰에서 "실제 retain 계약에 clause pack을 썼나" yes/no.

## Development start prompt

```text
You are Codex working in the prototype-factory repo. Build Retainer Risk Score + Clause Pack as a polished local HTML/React prototype from this PRD.

Goal:
- Input client info → risk gauge 1-100 → 5-category breakdown → 5-clause pack (KR/EN toggle) → 3-script pack (email/DM/call) → PDF export.

Implementation constraints:
- Use ink + graphite + off-white + navy + restrained warning tones; 2:1 number/unit hierarchy; quiet confidence badges.
- Make the first screen understandable in 3 seconds.
- Use realistic sample data (4 clients: startup, agency, gov, big corp).
- Include the key interaction (input change → risk recompute in 0.5s; clause 1-click copy; PDF 1-click export).
- Avoid external paid APIs; mock data locally.
- Verify with build/typecheck and Puppeteer screenshot QA for desktop + mobile.
```

## Notes
- 법률 자문이 아닌 "도움말" 명시 필요.
