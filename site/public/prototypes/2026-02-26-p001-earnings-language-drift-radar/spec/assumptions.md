# Assumptions (KNOWN / ASSUMPTION / UNKNOWN)

## KNOWN
- Earnings calls contain recurring sections (prepared remarks + Q&A) and repeated themes quarter-to-quarter.
- For semis/AI, narrative shifts around demand, inventory, pricing, capex, and regulation often precede broader consensus shifts.
- Simple “headline summaries” miss nuance; operators benefit from *change detection*.

## ASSUMPTION
- A drift score + a handful of delta quotes is faster and more decision-useful than a full summary.
- We can build an explainable drift method (topic buckets + keyword/embedding deltas) that is “good enough” without heavy ML.
- A human operator will tolerate some false positives if alerts are short and clearly labeled.
- Most target tickers have transcripts accessible within 24 hours via at least one source (even if imperfect).

## UNKNOWN
- Best data source + licensing constraints for transcript ingestion (free vs paid, rate limits, ToS).
- Whether drift correlates with *forward returns* or at least with “future analyst narrative changes”.
- Optimal sensitivity calibration per ticker (some companies have naturally volatile language).
- Whether Q&A introduces too much noise versus prepared remarks.
- How much value is lost if only the most recent quarter is available (no full history).
