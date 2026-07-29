# PRD — Agent Forensic Timeline Viewer

## Problem
- AI agent operators facing an incident need both a fine-grained action timeline AND a 1-page PR/CS-ready summary; current trace viewers are dev-only.

## Target user
- AI agent operator (SRE, PM, PR/CS) at 5-200 person SaaS, KR/EN.

## Arrival path
- 에이전트 사고 사례 (HF OpenAI Agent breach) → SRE/PM 트위터 → SaaS 운영자 뉴스레터.

## Business / validation route
- SaaS $49/mo (incident 50건) + enterprise self-host.

## Core loop
- Upload trace → parse → classify → timeline + risk markers → 1-page summary → export.

## First screen
- Dropzone + sample trace 1-click button.

## Key screens
- dropzone, summary KPIs, action timeline, risk detail drawer, 1-page summary panel.

## Interaction rules
- Hover = action detail, click = risk detail, "1-page" = auto generate, sample 1-click load.

## Output artifact
- 1-page PNG/PDF incident report.

## Share / return loop
- 사고 대응 PR에 PNG/PDF 첨부.

## Constraints
- Time: 3 weeks MVP
- Budget: solo dev
- Platform: web, desktop-first

## Non-goals
- 자동 차단, 결제 정지, 고객 알림 발송.

## Success metrics
- 30 SaaS trial, 5 paying customer, 100 incident export/월.

## QA / screenshot criteria
- trace 파싱 정확도, 액션 분류 정확도, 1-page 자동 요약 가독성, 모바일/데스크톱 Puppeteer 스크린샷.

## Design profile
- operator-dense

## Theme
- 자산 방어

## Source signals
- S3 (HF OpenAI Agent breach), S11 (17,600 actions decoded), S10 (에이전트 실수 추적).

## Source repos
- huggingface/agents-course

## Reference pattern
- Honeycomb / OpenTelemetry trace view + Datadog incident summary

## Twist
- 에이전트 액션 분류 + PR/CS-ready 1-page 자동 요약

## Small group fit
- 5-200명 에이전트 운영팀

## Spread trigger
- 사고 대응 PR에 PNG/PDF 첨부

## First validation test
- 3개 에이전트 팀 인터뷰에서 "1-page summary가 실제 PR에 쓰였나" yes/no.

## Development start prompt

```text
You are Codex working in the prototype-factory repo. Build Agent Forensic Timeline Viewer as a polished local HTML/React prototype from this PRD.

Goal:
- Upload agent trace (JSON/OTel/HF) → auto-parse → classify 6 action types → render 1px-per-action timeline with risk markers → 1-page incident summary → PNG/PDF export.

Implementation constraints:
- Use deep navy + charcoal + cyan accent + warning amber; high contrast status rows; tabular numbers.
- Make the first screen understandable in 3 seconds.
- Use realistic sample data (1 sample trace with 1,500 actions, 6 action types, 12 risk markers).
- Include the key interaction (hover = action detail, click = risk detail, "1-page" = auto generate, sample 1-click load).
- Avoid external paid APIs; mock data locally.
- Verify with build/typecheck and Puppeteer screenshot QA for desktop + mobile.
```

## Notes
- trace schema 다양성 → 어댑터 필요.
