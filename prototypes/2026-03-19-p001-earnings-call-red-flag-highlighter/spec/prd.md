# PRD — Earnings Call Red-Flag Highlighter

## Problem
- Earnings-call transcripts are long, messy, and full of boilerplate. The *real risk signal* often lives in a handful of phrases:
  - “we are **withdrawing guidance**”
  - “**inventory correction** / channel digestion”
  - “**pricing pressure** / competitive intensity”
  - “**export license uncertainty** / China headwinds”
  - “**yield excursions** / ramp delays”
- Analysts and investors need a fast way to surface these *candidate* red flags **with quotes** so they can verify in context.

## Target user
- Primary: public-market investors (semi/AI focus), equity research analysts, and PMs doing rapid call review.
- Secondary: competitive-intel / strategy teams scanning transcripts for operational risk.

## Constraints
- Time: 1-day prototype.
- Budget: $0 runtime.
- Platform: must run offline by opening `demo/index.html` (no build, no server required).
- Privacy: transcript stays in the browser; no network calls.
- Deterministic: rule-based heuristics only.

## Non-goals
- Producing a “correct” investment recommendation.
- Full NLP accuracy (speaker diarization, section parsing, sentiment).
- Automatically fetching transcripts from providers.

## Success metrics
- **Speed:** user can paste text and get ranked flags in < 2 seconds for a typical transcript chunk.
- **Utility:** for a sample set of transcripts, user reports that the top 5 flags contain at least 2 “worth re-reading” quotes.
- **Safety/clarity:** UI clearly frames output as “candidates” and shows the exact quote + rule explanation.

## Notes
- This is a “triage lens”, not a summary.
- If this direction proves valuable, next steps are: better normalization for PDF artifacts, a configurable ruleset per sector, and export to notes.
