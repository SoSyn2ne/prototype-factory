# PRD — Supply Chain Shock Watch

## Problem
Global operations teams often discover supply-chain exposure too late: a vendor outage occurs, then teams scramble to identify which parts and finished products are affected. Existing spreadsheets usually track vendor and part data, but they do not quantify shock impact in a fast, shared operational view. The result is delayed mitigation, production disruption, and avoidable expedite costs.

## Target user
- Primary: supply chain risk analyst at a mid-size manufacturer with multi-tier BOM dependencies.
- Secondary: operations manager responsible for production continuity and service-level commitments.
- Secondary: procurement lead who must prioritize alternate vendor qualification.

## Constraints
- Prototype must run locally as static files (no backend, no network dependencies).
- Data model is intentionally small and in-memory for fast operator interaction.
- Scoring must be explainable at a glance; no opaque ML model.
- Timebox: one-day prototype intended for decision support, not production deployment.

## Non-goals
- Real-time ERP integration or automated supplier feeds.
- Full multi-tier supplier graph traversal.
- Financial impact forecasting by SKU, margin, or revenue.
- Workflow approvals, ticketing, or alert escalation automation.

## Success metrics
- User can identify single points of failure in under 30 seconds.
- Shock Score updates in under 200 ms after row edits or filter changes.
- At least 3 actionable mitigation suggestions are produced for current filter context.
- In a pilot walkthrough, operator can complete risk triage (filter, edit, review mitigations) in under 3 minutes.

## Core workflow
1. Operator opens dashboard and sees current dependency rows and a top-level Shock Score.
2. Operator filters by vendor and optionally narrows to SPOF rows (alternatives = 0).
3. Operator edits criticality and alternatives inline as new intelligence arrives.
4. Shock Score recalculates immediately to reflect updated risk posture.
5. Operator reviews auto-generated mitigation suggestions and selects next actions.

## Risks / unknowns
- Small sample datasets may under-represent true risk concentration patterns.
- Scoring weights (criticality vs SPOF ratio) may need calibration per business context.
- Manual data updates can drift from source-of-truth systems without integration.
- Suggestion quality depends on row granularity; generic part names reduce usefulness.
- Users may over-index on one score without reviewing row-level details.
