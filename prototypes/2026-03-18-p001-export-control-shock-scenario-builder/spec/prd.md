# PRD — Export-Control Shock Scenario Builder

## Problem
- Public-equity investors need a fast way to translate an export-control headline into first-order semiconductor supply-chain exposure.
- Most mental models stay qualitative; this prototype should force the user into explicit inputs, a directional score, and a short list of likely pressure points.
- The goal is better triage under uncertainty, not precision.

## Target user
- Fundamental investor, analyst, or PM covering semis, semicap, or AI infrastructure.
- Primary use case: policy headline triage, committee prep, or position sizing review.

## Constraints
- Time: useful readout in under 60 seconds.
- Budget: offline static prototype; no APIs, auth, or live data.
- Platform: local browser, desktop-first, still usable on mobile.
- Method: transparent heuristic model, not a black-box forecast.

## Non-goals
- Predict the exact wording or timing of future export controls.
- Provide investment advice, price targets, or portfolio optimization.
- Replace channel checks, legal review, or company-specific diligence.

## Success metrics
- Changing any input updates score, impacted segments, and sparkline immediately.
- Higher severity and higher portfolio concentration produce higher exposure, all else equal.
- The table surfaces five plausible follow-up diligence areas tied to the selected node.
- A user can explain the scenario output without needing extra instructions.

## Notes
- Inputs: policy severity, affected node, horizon, portfolio concentration.
- Outputs: exposure score, five impacted segment/ticker prompts, and a horizon-shaped shock path.
