# PRD — Agent Evidence Receipt to PR/CS Brief Exporter

## Problem
- AI 에이전트 빌더는 사고 발생 시 1) evidence receipt 시각화 2) PR/CS 1-pager 3) EU AI Act 6 의무 체크 (2026-08-02 발효) 4) 회신 톤 3종 5) export — 를 매번 새로 작성. toris-agent는 receipt만, 기존 도구는 분류 매트릭스만.

## Target user
- AI agent 빌더/매니저, SaaS agentic product 팀, EU AI Act 대응팀.

## Arrival path
- toris-agent npm + EU AI Act 8/2 의무 + agent 빌더 Slack → 본 도구.

## Business / validation route
- SaaS $19/mo (팀) + $99/mo (EU AI Act 컴플라이언스 팩).

## Core loop
- receipt drag → 3-stage 시각화 → 1-pager 3-target → 톤 3-pack → 6-checkbox → export.

## First screen
- receipt input + 3-stage 타임라인.

## Key screens
- input, timeline, 1-pager, tone, EU AI Act, export.

## Interaction rules
- drag 0.5초 안에 타임라인; 1-click 1-pager 토글; 1-click export.

## Output artifact
- 1-pager PNG/PDF + reply templates / report packet

## Share / return loop
- "이번 사고 receipt → PR 1-pager 3분" 트위터.

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
- receipt 정확도, 1-pager 가독성, EU AI Act 6 의무 매핑.

## Design profile
- operator-dense

## Theme
- 자산 방어 (에이전트 사고 + 컴플라이언스)

## Source signals
- S2, S3

## Development start prompt

```text
You are Codex working in the prototype-factory repo. Build "Agent Evidence Receipt to PR/CS Brief Exporter" as a polished local HTML/React prototype from this PRD.

Goal:
- An agent builder drags a single toris-agent style evidence receipt (.json or pasted) and immediately sees plan -> run -> verify timeline, a 1-pager toggle for tech/legal/PR audiences, 3 reply tones (apology/neutral/explainer), and the EU AI Act 6-obligation checklist for 2026-08-02 high-risk systems.

Implementation constraints:
- Use an operator-dense profile: 40px rows, single sharp accent, deep navy/charcoal, no marketing hero, no mixed chart palettes.
- The 3-stage timeline must read at a glance with tool call + latency + summary per stage.
- The 1-pager toggle must repurpose the same evidence into three audiences; keep the layout calm and avoid stock imagery.
- The EU AI Act 6-obligation checklist (risk management, data governance, transparency, human oversight, accuracy, robustness) must be visible on the same screen as the timeline.
- Honor the 2026-08-02 trigger date; do not invent category labels beyond the published list.
- No external paid APIs; mock receipts with a small static sample set.
- Verify with build/typecheck, then run a Puppeteer desktop + mobile screenshot QA pass.
```

## Notes
- 5명 빌더가 "이미 LangSmith 로그로 충분하다"고 답하면 kill.
