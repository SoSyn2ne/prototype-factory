# PRD — Agent 2AM Incident Desk

## Problem
- An operator cockpit for AI-agent teams to see failed automations, missing guardrails, tool access, and escalation owners before a bot breaks production overnight.

## Target user
- AI automation agencies, solo operators, and internal ops teams running autonomous agents across support, invoicing, scraping, and messaging.

## Key UX
- Operator reviews recent agent runs, tool permissions, stuck loops, human handoff rules, and creates an incident drill receipt for each risky workflow.

## Required UI sections
- 2AM incident risk strip
- Agent run timeline
- Tool access and blast-radius map
- Guardrail gap checklist
- Human handoff owner matrix
- Replayable failure transcript
- Incident drill receipt export

## Design profile
- field-ops

## Theme
- 자산 방어

## Source signal references
- S3: A report says 78% of firms expect AI agents to handle support in 18 months, but only 16% have deployed them across the organization. Source: https://m.economictimes.com/tech/artificial-intelligence/over-78-of-firms-expect-ai-agents-to-handle-customer-support-within-18-months-adobe-finds/articleshow/131999118.cms
- S6: AI-agent builders complain the hard part is wiring, monitoring, guardrails, and debugging when automations go off the rails at 2am. Source: https://www.reddit.com/r/AI_Agents/comments/1ojyu8p/i_build_ai_agents_for_a_living_its_a_mess_out/

## loved_by_small_group
- 4

## spread_trigger
- A team lead can use the incident receipt in a client call or internal postmortem after an automation scares everyone.

## Copy/paste-ready Stitch prompt
Build a production-grade web app prototype called "Agent 2AM Incident Desk" for operators running AI agents in real business workflows. The first screen must be a working incident cockpit with 2AM risk strip, agent run timeline, tool access blast-radius map, guardrail gap checklist, human handoff owner matrix, replayable failure transcript, and incident drill receipt export. Use realistic sample data: support refund bot, invoice email agent, scraper rate-limit error, Slack escalation missed, tool permission to Gmail/Sheets, and a 2:13 AM stuck loop. Design direction: use the field-ops profile with disciplined operational panels, high-contrast status rows, 44px touch-friendly handoff controls, steel/slate colors, and sparing cyan/orange action accents. Do not make a marketing landing page; the first screen must be the working app.

## Non-goals
- Do not implement a custom demo during Phase A.
- Do not make a marketing-only landing page.

## Success metrics
- Stitch output preserves the working-app first screen and assigned design profile.
- p006 export lands at /home/sy/Downloads/stitch_drop/2026-06-26/p006/code.html and screen.png.
