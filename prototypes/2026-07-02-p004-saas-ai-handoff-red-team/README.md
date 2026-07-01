# SaaS AI Handoff Red Team

A support-ops test bench that replays messy billing and onboarding tickets to prove when an AI agent must hand off to a human.

## Phase A
- Slot: p004
- Practical vs fun: Practical / Commercial
- Design profile: operator-dense
- Theme: 역전
- Expected Stitch drop: `/home/sy/Downloads/stitch_drop/2026-07-02/p004/`

## Source Signals
- S7: Reddit r/SaaS, 2026-02 - https://www.reddit.com/r/SaaS/comments/1qld1or/top_ai_agents_for_saas_customer_support_2026_ai/
- S8: Economic Times / Adobe report, 2026-06 - https://m.economictimes.com/tech/artificial-intelligence/over-78-of-firms-expect-ai-agents-to-handle-customer-support-within-18-months-adobe-finds/articleshow/131999118.cms
- S9: Guardian reader responses, 2026-06-20 - https://www.theguardian.com/us-news/2026/jun/20/guardian-readers-consumer-battles

## Stitch Prompt

```text
Create a responsive web app called "SaaS AI Handoff Red Team" for Small SaaS teams deploying AI support agents but worried about billing edge cases, onboarding failures, and angry users.. The app is based on observed user pull: S7: A SaaS team says support friction now comes from context switching, billing edge cases, onboarding mess, and account-state-specific answers. S8: 78% of firms expect AI agents to handle customer support within 18 months, but only 16% have implemented across the organization. S9: Consumers describe 2026 customer service as debilitating, depressing, and enraging, especially when AI systems block complex support. The app should use a red-team test bench around the trigger moment "Your AI support demo looks fine until a billing edge case asks for account-specific judgment." and make the first screen communicate "Your AI support demo looks fine until a billing edge case asks for account-specific judgment.". Use the user's own language: "A support-ops test bench that replays messy billing and onboarding tickets to prove when an AI agent must hand off to a human.". Build the core workflow around handoff failure replay and produce AI support handoff policy and launch-blocker report. Required sections: Risky ticket scenario deck; Bot answer replay lane; Human-handoff threshold rules; Customer rage and refund-risk meter; Launch-blocker report. Emotional pressure to make visible: 역전, with concrete money, time, status, relationship, or health stakes. Design direction: use the `operator-dense` profile with dense support-console rows, transcript panels, crisp severity states, and one electric blue action accent for mandatory human handoff. Avoid generic dashboard framing; make the main interaction feel like a red-team test bench. Do not make a marketing landing page; the first screen must be the working product experience.
```
