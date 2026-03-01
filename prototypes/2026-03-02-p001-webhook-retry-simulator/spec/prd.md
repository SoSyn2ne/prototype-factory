# PRD — Webhook Retry Simulator

## Problem
Webhook producers often pick retry defaults (attempt count, backoff curve, jitter) by gut feel. That creates two common failures:
- too aggressive: retry storms and noisy downstream load
- too conservative: low eventual delivery for transient failures

Teams need a fast way to see timing and success tradeoffs before shipping retry policy changes.

## Target user
- Backend engineers tuning webhook worker behavior
- PMs reviewing reliability tradeoffs and customer impact

## Constraints
- Time: 1 day to produce a demo-ready static artifact
- Budget: $0 (no paid infra/services)
- Platform: static web page, local/browser-run, no backend

## Proposed solution
A small interactive calculator with side-by-side strategy comparison:
- Inputs: strategy (`linear`/`exponential`), attempts, base delay, delay cap, jitter mode, per-attempt success probability
- Outputs: attempt timeline, cumulative time-to-last-attempt, eventual success probability, expected attempt/time
- Comparison view: Strategy A vs Strategy B deltas (faster/safer tradeoff)

Core formulas:
- Eventual success after `n` attempts with independent per-attempt success `p`:
  `P(success by n) = 1 - (1 - p)^n`
- Per-attempt delay:
  - linear: `delay_i = min(cap, base * i)`
  - exponential: `delay_i = min(cap, base * 2^(i-1))`

## Non-goals
- Simulating real network/server state transitions
- Predicting exact production incident outcomes
- Pulling historical data from APIs or observability platforms
- Multi-tenant auth, persistence, or sharing links in v0

## Success metrics
- A user can configure one strategy and get computed results in <10 seconds.
- A user can compare two strategies and identify which has higher delivery probability within a fixed time budget.
- Manual spot-checks match formula outputs for at least 3 known scenarios.

## Notes
- Assumes independent per-attempt success probability for v0.
- Jitter is modeled as delay randomization only; it does not change `p` directly.
- This prototype is decision support, not a production retry engine.
