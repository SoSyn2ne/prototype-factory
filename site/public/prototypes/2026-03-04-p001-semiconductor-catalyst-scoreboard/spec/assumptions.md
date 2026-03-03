# Assumptions (KNOWN / ASSUMPTION / UNKNOWN)

## KNOWN
- Semiconductor names are catalyst-heavy and news cadence is high (earnings, product cycles, policy/export controls, supply chain).
- Operators with small watchlists can maintain a daily process if total workload stays under ~10 minutes.
- Evidence-free notes are hard to audit and often unusable after a few days.
- Catalyst impact decays over time; stale entries should count less than fresh ones.
- The same headline can affect different tickers differently (supplier vs fabless designer vs equipment vendor).
- A transparent score is easier to trust than opaque model output.

## ASSUMPTION
- Requiring source link + confidence + horizon will reduce low-quality entries.
- A simple weighted catalyst score is enough for daily prioritization before adding advanced modeling.
- Users will accept manual entry in v1 rather than automated ingestion.
- Confidence buckets (`low/medium/high`) are easier to apply consistently than numeric 1-10 scoring.
- A 30-60 day rolling window is a reasonable default for "active" catalysts.
- Explicit "NOT price prediction" copy reduces misuse and expectation mismatch.

## UNKNOWN
- Which catalyst categories carry the highest practical signal by ticker type.
- What default weight set best balances responsiveness vs noise.
- How often users will revisit or downgrade confidence on older entries.
- Whether users prefer one combined portfolio score vs per-ticker independent scoring.
- How to handle contradictory high-confidence catalysts without masking risk.
- What minimum evidence count is needed before a score is considered decision-grade.
