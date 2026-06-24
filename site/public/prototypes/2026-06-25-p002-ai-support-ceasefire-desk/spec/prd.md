# PRD — AI Support Ceasefire Desk

## Problem
A support triage console that detects when AI-written complaints and AI-written replies are looping without resolving the customer's real issue.

## Target user
SaaS support leads, founder-led support teams, and CX managers dealing with AI-generated complaint pressure.

## Key UX
Thread intake flags bot-like repetition, missing evidence, unresolved customer harm, escalation risk, and the next human decision: clarify, compensate, close, or legal-safe handoff.

## Required UI sections
- Live thread queue with AI-loop risk, customer value, and response age.
- Evidence completeness panel: invoices, screenshots, account logs, policy terms.
- Bot-vs-bot repetition meter showing duplicated claims and replies.
- Human decision rail: ask, refund, escalate, close, or pause.
- Tone and liability preview before sending a human response.
- Resolution ledger showing time saved and disputes prevented.
- Policy snippet drawer for consistent support reasoning.

## Assigned design profile
- operator-dense

## Theme
- 자산 방어 / 역전

## Source signal references
- S5 - Reddit r/SaaS, customers using ChatGPT to argue with support
- S6 - Reddit r/ChatGPT, companies ask whether AI actually works

## Stitch prompt
Create a responsive B2B support operations prototype called "AI Support Ceasefire Desk". Show the real working console as the first screen. Include a live thread queue, evidence completeness panel, bot-vs-bot repetition meter, human decision rail, tone/liability preview, resolution ledger, and policy snippet drawer. Use sample SaaS tickets where customers paste AI-written complaints and agents risk answering with AI boilerplate. Design direction: use the operator-dense profile with compact rows, tabular numbers, crisp severity badges, charcoal/slate surfaces, and one sharp action accent.

## Constraints
- Time: Phase A spec and Stitch prompt only.
- Budget: No external LLM API calls.
- Platform: Stitch-generated responsive web prototype in the later Phase B job.

## Non-goals
- Do not implement a custom demo during Phase A.
- Do not claim source signals prove market size.

## Success metrics
- Stitch can generate the requested screen from the prompt.
- The main workflow is visible in the first viewport.
- The UI reflects exactly one assigned design profile.
