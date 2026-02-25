# Assumptions (KNOWN / ASSUMPTION / UNKNOWN)

## KNOWN
- Public signals exist for many products (reviews, forums, releases, jobs), but they’re fragmented and noisy.
- Leading indicators can outperform lagging indicators in other domains (credit risk, outbreak detection) when designed with calibration + explainability.
- Users value *explanations*, not just a score (alerts must show drivers).

## ASSUMPTION
- A small signal set (3–5) is enough to be useful before building a large “data lake.”
- Change-point detection on proxy metrics will surface “something shifted” earlier than quarterly financials.
- Investors/founders will accept imperfect accuracy if alerts are transparent and cheap.
- We can source enough data legally via public pages/APIs without heavy compliance work.

## UNKNOWN
- Which specific signals are most predictive across categories (B2B SaaS vs consumer apps).
- How often signals produce false positives due to launches, PR spikes, seasonal effects.
- Whether review/community signals lead churn or merely co-move with it.
- Data availability reliability: rate limits, scraping stability, missing identifiers.
- The minimum viable scoring model that users trust (simple weights vs learned model).
