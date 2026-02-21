# QA checklist

## Happy path
- [ ] Configure watchlist with 10 tickers.
- [ ] Run daily job at 06:00 KST.
- [ ] Receive exactly one Telegram brief message.
- [ ] Message includes:
  - [ ] top flagged tickers (or “no flags today”)
  - [ ] which tripwires fired
  - [ ] at least 1 quote + link per flagged ticker
  - [ ] “next thing to check” suggestion

## Edge cases
- [ ] **No new items** for a ticker → ticker is omitted or reported as “no new sources”.
- [ ] **Paywalled transcript** → fallback to IR press release/8-K summary or mark as UNKNOWN (no silent failure).
- [ ] **Duplicate stories** from multiple feeds → dedupe by URL/title hash.
- [ ] **Conflicting reports** (rumor vs official) → prioritize primary sources; label uncertainty.
- [ ] **Non-US ticker formats** / ADR naming differences → matching logic doesn’t misattribute text.
- [ ] **Rate limits / timeouts** → job degrades gracefully and still sends a status message.

## Acceptance verification
- [ ] Run the pipeline against 2 stored sample documents (one “clean”, one “bad news”) and verify the correct tripwires fire.
- [ ] Manually inspect that quotes in the alert match the source text exactly.
- [ ] Confirm the system can produce a “no flags today” message.
