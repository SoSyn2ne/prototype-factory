# Assumptions (KNOWN / ASSUMPTION / UNKNOWN)

## KNOWN
- Daily monetization metrics (revenue, conversion, refunds, sessions) are commonly available from App Store / Play Console / Stripe / ad networks.
- Simple threshold alerts are common but often produce alert fatigue.
- Rolling baselines (e.g., 7-day) are a standard way to reduce weekday seasonality effects.

## ASSUMPTION
- A single daily score + top drivers will feel *more actionable* than many per-metric alerts.
- Operators are willing to maintain a minimal daily metrics table (or connect sources) if payoff is faster triage.
- A rolling median baseline is “good enough” for a first version without heavy stats.
- A small library of checklists (e.g., “conversion drop”, “refund spike”) covers most early-stage incidents.
- Reducing false alarms is more important than catching every anomaly (precision > recall).

## UNKNOWN
- What weights per metric work best across different businesses (ads vs subscriptions vs one-time purchase)?
- Whether explanations without deeper attribution are trusted (“why did it drop” skepticism).
- Whether notifications should be email/Telegram/Slack, and what cadence is tolerated.
- Whether weekend/holiday seasonality breaks the 7-day baseline approach for many users.
- How much backfill history is needed to make the score useful (7 days vs 30 days).
