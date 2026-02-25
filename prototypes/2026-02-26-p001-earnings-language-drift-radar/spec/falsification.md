# Falsification checklist (5–7)

1. **Transcript availability fails:** For the watchlist, can we reliably obtain transcripts within 24h for at least 80% of earnings? If not, the product can’t meet the daily-brief promise.

2. **Noise > signal:** When we diff last quarter vs prior quarter, do the “top drift” outputs mostly reflect stylistic wording changes (PR language) rather than fundamental changes (demand/pricing/capex/regulation)? If yes, drift isn’t useful.

3. **Not decision-accelerating:** After reading an alert, does a user still need to read the full transcript to decide “investigate vs ignore” more than 50% of the time? If yes, the brief doesn’t save time.

4. **False positives overwhelm:** Does a typical earnings season generate so many alerts that the operator ignores them (alert fatigue)? If yes, the sensitivity/aggregation approach is wrong.

5. **Too late:** Do alerts arrive after the market narrative already shifted (e.g., the next day’s analyst notes already contain the same points)? If yes, we need faster ingestion or a different signal.

6. **No differentiated insight:** When compared to existing newsletters/recaps, do our delta quotes fail to surface anything meaningfully different in a blinded comparison? If yes, the approach isn’t unique.

7. **Regulatory / ToS blocker:** Do transcript providers’ ToS or licensing constraints prevent automated ingestion and redistribution of quotes? If yes, the model must change (user-provided docs, on-device, or summarization without quotes).
