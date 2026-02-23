# PRD — Revenue Early-Warning Score (REWS)

## Problem
Many solo builders / small teams watch monetization dashboards, but:
- metrics are **noisy** (daily variance, attribution delays)
- alerts are **too many** (threshold spam) or **too late** (weekly reviews)
- when something dips, people waste time guessing what to do first

They need a **single daily tripwire** plus **immediate next actions**.

## Target user
- Indie app/SaaS builder running 1–5 products
- Side-project operator doing paid ads or ASO
- “I check revenue daily, but I don’t have time for full analytics ops”

## Constraints
- Time: 1 day to validate value (document + manual test), 1 week to build MVP
- Budget: $0–$50/mo tooling initially
- Platform: Start as Google Sheet + script / small web app; integrate later

## Proposed solution
A daily computed score (0–100) and a short explanation:
- **Score** answers: “Should I worry today?”
- **Contributors** answer: “What likely changed?”
- **Checklist** answers: “What should I check first (in 15 minutes)?”

### MVP workflow
1. User connects (or manually uploads) a daily metrics table.
2. System computes baseline (7-day rolling median) per metric.
3. System computes normalized deltas + weights → REWS.
4. If score < threshold (e.g., 70), send one notification with:
   - score + delta vs yesterday
   - top drivers
   - 3–5 action items (predefined playbooks)

## User stories
- As an operator, I want one daily alert when health drops so I can react quickly.
- As an operator, I want the alert to tell me the top driver metrics so I don’t dig blindly.
- As an operator, I want a short checklist so I can execute in <15 minutes.

## Non-goals
- Full attribution modeling / MMM
- Perfect forecasting
- Real-time streaming analytics (daily batch is fine)
- Auto-fixing campaigns (human-in-the-loop only at first)

## Success metrics
Validation (document-only / manual):
- In a 14-day backtest on a real product’s daily metrics, REWS surfaces at least **2 “worth investigating” days** that the operator agrees mattered.
- Operator reports time-to-triage reduced (e.g., from 30–60 min → <15 min) on those days.

Build MVP:
- Alert precision: <1 false alarm per week per product (subjective but trackable)
- Setup: <15 minutes to start receiving a daily score

## Notes (doctrine: Anti-RAG)
- Anchor: classic metric threshold alerts (Datadog/Grafana pattern)
- Contrast A: medical early warning scores (weak signals → one triage score)
- Contrast B: aviation checklists (detected condition → small set of actions)

Output level (G3): **Document-only** until falsification passes.
