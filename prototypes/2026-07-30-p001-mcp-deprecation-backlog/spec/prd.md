# PRD — MCP Stateless Deprecation Backlog Console

## Problem
- AI agent studios must triage MCP server deprecations before the 12-month kill date but have no single board that shows d-day, impacted clients/agents, and a runbook.

## Target user
- 5-50 person AI agent studio operator (DevOps + PM + EM), KR/EN.

## Arrival path
- GitHub Trending → modelcontextprotocol/servers → MCP operator Slack/Discord → newsletter.

## Business / validation route
- SaaS $29/mo (5 user) → $99/mo (20 user) → waitlist with 50 studios from MCP community.

## Core loop
- Connect MCP server list → risk score → weekly priority lane → runbook markdown export.

## First screen
- MCP d-day calendar (left) + server risk grid (right).

## Key screens
- header global countdown, server risk grid, client/agent impact matrix, runbook drawer, weekly priority lane, blocked-reason log.

## Interaction rules
- Click row = open runbook drawer, double-click = pin to weekly priority, drag = reorder priority, "Export markdown" button in drawer.

## Output artifact
- markdown runbook + JSON backlog.

## Share / return loop
- Slack "이번주 우선순위 5개" 캡처 공유.

## Constraints
- Time: 2 weeks MVP
- Budget: solo dev
- Platform: web, desktop-first

## Non-goals
- 자동 마이그레이션 실행, MCP 서버 호스팅, 결제.

## Success metrics
- 50 studio waitlist, weekly active server row edits, runbook export count.

## QA / screenshot criteria
- d-day 정확도, 영향 client/agent 자동 매칭 정확도, runbook export markdown 가독성, 모바일/데스크톱 Puppeteer 스크린샷.

## Design profile
- operator-dense

## Theme
- 자산 방어

## Source signals
- S2 (MCP Stateless 2026-07-28 spec, 12-month deprecation), S10 (GeekNews "에이전트 실수 추적").

## Source repos
- modelcontextprotocol/servers

## Reference pattern
- Jira/Linear backlog + statuspage

## Twist
- deprecation calendar + client fan-out + auto-runbook in one screen

## Small group fit
- 5-50명 MCP 운영 스튜디오

## Spread trigger
- 슬랙 "이번주 우선순위 5개" 캡처 공유

## First validation test
- 5개 스튜디오 인터뷰에서 "MCP d-day 보드가 실제로 사고를 줄였나" yes/no.

## Development start prompt

```text
You are Codex working in the prototype-factory repo. Build MCP Stateless Deprecation Backlog Console as a polished local HTML/React prototype from this PRD.

Goal:
- Show MCP server deprecation d-day calendar + client/agent impact matrix + runbook drawer + weekly priority lane + blocked-reason log on a single operator-dense board.

Implementation constraints:
- Use deep navy + charcoal + single sharp cyan accent; tabular numbers; 32-40px rows; no decorative hero.
- Make the first screen understandable in 3 seconds.
- Use realistic sample data (12 MCP servers, 8 client/agent resources, 5 runbook entries, 4 blocked reasons).
- Include the key interaction (click row → runbook drawer, double-click → pin, drag → reorder).
- Avoid external paid APIs; mock data locally.
- Verify with build/typecheck and Puppeteer screenshot QA for desktop + mobile.
```

## Notes
- MCP 서버 목록 변동 → 크론 필요. 실제 agent 운영자가 아니면 kill 가능성.
