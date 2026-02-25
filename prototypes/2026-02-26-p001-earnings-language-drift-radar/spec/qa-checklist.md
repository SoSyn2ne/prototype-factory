# QA checklist

## Happy path
- Add a watchlist of 5–20 tickers.
- For a ticker with multiple quarters of transcripts, generate:
  - per-topic drift scores,
  - 3–7 delta quotes,
  - a short “what changed / what to verify next” card.
- Daily brief shows the top 3 drift events across the watchlist.

## Edge cases
- Missing transcript for the latest quarter (should show a clear “missing data” state, not silent failure).
- Only one quarter available (should degrade gracefully: “no baseline; show topic coverage + key quotes”).
- Extremely long transcript (ensure output stays short; enforce quote limits).
- Company with boilerplate-heavy language (should reduce false positives via stop-phrases / topic filters).
- Earnings call split across sources or partial Q&A (should label coverage and confidence).

## Acceptance verification
- Manual spot-check: verify each delta quote exists in the transcript and is attributed to the correct quarter.
- Labeling check: major claims in the alert are tagged KNOWN/ASSUMPTION/UNKNOWN.
- Alert size check: daily brief for 20 tickers fits within ~1 screen (or a single Telegram message).
- Operator check: a user can decide “investigate vs ignore” within 60 seconds for a sample of 10 alerts.
