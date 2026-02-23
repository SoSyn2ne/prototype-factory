# Assumptions (KNOWN / ASSUMPTION / UNKNOWN)

## KNOWN
- The user can consume alerts via Telegram and prefers concise operator-style reporting.
- Public/company-published sources (press releases, investor relations pages, SEC filings summaries) exist for many US-listed companies.
- A small, stable checklist can outperform ad-hoc reading for “did anything important change?” detection.

## ASSUMPTION
- Most chip/AI-investing “thesis breaks” are preceded by **language signals** (guidance tone, inventory commentary, export-control mentions) that can be detected from text.
- A heuristic-first approach (keywords + pattern rules + small classifier) is sufficient to produce a useful v0 tripwire.
- Providing **quotes + links** will keep trust high even when the system is wrong.
- Users will tolerate occasional false positives if the message is short and clearly explains *why* it fired.

## UNKNOWN
- Reliable, legally usable sources for earnings call transcripts at low/no cost (coverage varies; some are paywalled).
- Which tripwire set has the best precision/recall for this sector (varies by company maturity and cycle).
- Whether the alerts meaningfully improve investment outcomes (vs. just reducing anxiety).
- Operational bottlenecks: rate limits, scraping fragility, and text normalization quality.
