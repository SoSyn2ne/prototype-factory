# PRD - SaaS AI Handoff Red Team

## Problem
- Your AI support demo looks fine until a billing edge case asks for account-specific judgment.
- Users are already relying on manual workarounds: screenshots, emails, spreadsheets, community advice, or ad hoc scripts.

## Target user
- Small SaaS teams deploying AI support agents but worried about billing edge cases, onboarding failures, and angry users.

## One-liner
- A support-ops test bench that replays messy billing and onboarding tickets to prove when an AI agent must hand off to a human.

## Key UX
- Support leads load risky ticket scenarios, score bot answers, mark handoff failures, and produce a launch-blocker list before expanding AI support.

## Required UI sections
- Risky ticket scenario deck
- Bot answer replay lane
- Human-handoff threshold rules
- Customer rage and refund-risk meter
- Launch-blocker report

## Design profile
- operator-dense
- Design direction: dense support-console rows, transcript panels, crisp severity states, and one electric blue action accent for mandatory human handoff.

## Theme
- 역전

## Source signal references
- S7: Reddit r/SaaS, 2026-02 - https://www.reddit.com/r/SaaS/comments/1qld1or/top_ai_agents_for_saas_customer_support_2026_ai/
- S8: Economic Times / Adobe report, 2026-06 - https://m.economictimes.com/tech/artificial-intelligence/over-78-of-firms-expect-ai-agents-to-handle-customer-support-within-18-months-adobe-finds/articleshow/131999118.cms
- S9: Guardian reader responses, 2026-06-20 - https://www.theguardian.com/us-news/2026/jun/20/guardian-readers-consumer-battles

## Output artifact
- AI support handoff policy and launch-blocker report

## Constraints
- Time: Phase A only; no custom demo implementation.
- Budget: Stitch prompt and scaffold only.
- Platform: responsive web app prototype generated later by Stitch.

## Non-goals
- Do not implement a custom demo in Phase A.
- Do not call external LLM APIs.

## Success metrics
- User can understand the trigger in 3 seconds.
- User can complete the core red-team test bench flow.
- User receives AI support handoff policy and launch-blocker report.

## Stitch prompt

```text
Create a responsive web app called "SaaS AI Handoff Red Team" for Small SaaS teams deploying AI support agents but worried about billing edge cases, onboarding failures, and angry users.. The app is based on observed user pull: S7: A SaaS team says support friction now comes from context switching, billing edge cases, onboarding mess, and account-state-specific answers. S8: 78% of firms expect AI agents to handle customer support within 18 months, but only 16% have implemented across the organization. S9: Consumers describe 2026 customer service as debilitating, depressing, and enraging, especially when AI systems block complex support. The app should use a red-team test bench around the trigger moment "Your AI support demo looks fine until a billing edge case asks for account-specific judgment." and make the first screen communicate "Your AI support demo looks fine until a billing edge case asks for account-specific judgment.". Use the user's own language: "A support-ops test bench that replays messy billing and onboarding tickets to prove when an AI agent must hand off to a human.". Build the core workflow around handoff failure replay and produce AI support handoff policy and launch-blocker report. Required sections: Risky ticket scenario deck; Bot answer replay lane; Human-handoff threshold rules; Customer rage and refund-risk meter; Launch-blocker report. Emotional pressure to make visible: 역전, with concrete money, time, status, relationship, or health stakes. Design direction: use the `operator-dense` profile with dense support-console rows, transcript panels, crisp severity states, and one electric blue action accent for mandatory human handoff. Avoid generic dashboard framing; make the main interaction feel like a red-team test bench. Do not make a marketing landing page; the first screen must be the working product experience.
```
