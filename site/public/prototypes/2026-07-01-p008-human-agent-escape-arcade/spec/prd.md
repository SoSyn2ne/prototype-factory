# PRD - Human Agent Escape Arcade

## Problem
- Stop typing your life story into a bot that only needed the word “cancel.”
- Source signals: S21 (The Guardian, 2026-06-20); S22 (Reddit r/britishproblems, 2026); S23 (Tom’s Guide, 2026)

## One-liner
- A consumer mini-game that trains people to break out of AI customer-service loops with escalation phrases, timing, and evidence.

## Target user
- Consumers stuck in chatbot loops for refunds, deliveries, subscriptions, utility bills, or billing disputes.

## Key UX
- Users play through a fake chatbot maze, choose escalation words, add evidence, and learn which paths reach a human for their complaint type.

## Required UI sections
- Bot maze scenario picker
- Trigger phrase cards
- Evidence inventory
- Escalation timer
- Human-agent victory script

## Design profile
- playful-experimental
- use the `playful-experimental` profile with arcade-like progress, readable panels, one electric accent, and crisp script cards; keep it funny but genuinely useful.

## Theme
- 역전

## Output artifact
- Personalized human-agent script and escalation path card.

## First validation test
- Share scenarios for Amazon/utility/telecom-style support loops and measure completion plus script shares.

## Stitch prompt

```text
Create a responsive web app called "Human Agent Escape Arcade" for Consumers stuck in chatbot loops for refunds, deliveries, subscriptions, utility bills, or billing disputes.. The app is based on observed user pull: U.S. consumers describe customer service in 2026 as debilitating, depressing, and enraging, with AI systems blocking complex resolutions. Users complain about being stuck connecting to a human for 40 minutes and being offered AI chat repeatedly after delayed orders. A how-to test finds trigger words such as agent, representative, escalate, human, cancel, and dispute can help bypass AI customer-service bots. The app should use a mini-game/training simulator around the trigger moment "Stop typing your life story into a bot that only needed the word “cancel.”" and make the first screen communicate "Stop typing your life story into a bot that only needed the word “cancel.”". Use the user's own language: "A consumer mini-game that trains people to break out of AI customer-service loops with escalation phrases, timing, and evidence.". Build the core workflow around bot maze escape and produce Personalized human-agent script and escalation path card.. Required sections: Bot maze scenario picker; Trigger phrase cards; Evidence inventory; Escalation timer; Human-agent victory script. Emotional pressure to make visible: 역전, with loss of money, time, reputation, or health clarity. Design direction: use the `playful-experimental` profile with arcade-like progress, readable panels, one electric accent, and crisp script cards; keep it funny but genuinely useful. Avoid generic dashboard framing; make the main interaction feel like a mini-game/training simulator.
```
