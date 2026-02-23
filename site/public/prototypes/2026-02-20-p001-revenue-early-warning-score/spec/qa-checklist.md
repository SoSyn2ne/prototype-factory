# QA checklist

## Happy path
- Given a daily metrics table (>= 14 days), compute 7-day rolling baselines per metric.
- Compute REWS score (0–100) and list top 1–3 contributors.
- If score crosses alert threshold, produce a single notification payload with:
  - score, change vs yesterday
  - top drivers
  - 3–5 checklist items

## Edge cases
- Missing values for one or more metrics (skip metric, reduce weight, or mark UNKNOWN).
- Sparse history (< 7 days) → degrade gracefully (show “insufficient history”).
- Large outliers (one-time promo day) → baseline distortion (prefer median).
- Mixed business models (ads + subs) where metrics conflict (revenue up, refunds up).
- Attribution delay (today’s revenue corrected tomorrow) → ensure score can recompute.

## Acceptance verification (document-only)
- Run the falsification checklist against at least one real dataset (even manually).
- Confirm score + drivers can be explained in plain language to a non-analyst.
- Confirm checklist items are executable in <15 minutes (no deep data science required).
