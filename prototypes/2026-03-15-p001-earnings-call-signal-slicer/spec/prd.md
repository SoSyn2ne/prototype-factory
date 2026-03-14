# PRD — Earnings Call Signal Slicer

## Problem
- Earnings-call transcripts are long, messy, and time-sensitive. Investors often need to answer, quickly:
  - **What changed in guidance?**
  - **What’s the demand signal?**
  - **Is supply/capacity a constraint or tailwind?**
  - **Is “AI” real (product/revenue/capex) or just marketing?**
- Generic summaries bury these signals. Analysts want a fast, explicit “signal slicer” that highlights the exact sentences worth reading.

## Target user
- Equity research analysts, portfolio managers, and informed retail investors doing rapid call review.
- Secondary: product/ops leaders monitoring competitors’ demand/supply commentary.

## Constraints
- Time: 1-day prototype; keep logic understandable and editable.
- Budget: $0 runtime cost; no paid APIs.
- Platform: Must run offline in a browser by opening `demo/index.html` directly (no build, no server).
- Privacy: Transcript stays in the browser; no network calls.
- Determinism: Use simple keyword heuristics (no LLM dependency).

## Non-goals
- Perfect classification or exhaustive coverage across all industries.
- Speaker attribution, topic modeling, sentiment analysis, or full summarization.
- Transcript ingestion (fetching from providers), file upload parsing (PDF/Doc), or note-taking features.
- Trading recommendations, price targets, or “buy/sell” outputs.

## Success metrics
- A user can paste a typical transcript (5k–25k words) and get results in <1s on a modern laptop.
- Output is immediately scannable:
  - Each bucket shows **confidence + matched sentence count**
  - Highlights are readable and filterable by bucket
- On 10 varied transcripts, an analyst judges that each bucket’s top highlights contain at least one “obvious” sentence when that theme is present (qualitative MVP bar).

## Notes
### User flow (happy path)
1. User pastes transcript text.
2. Clicks **Slice**.
3. Sees 4 bucket cards with confidence and counts.
4. Scrolls through highlighted transcript; clicks a bucket to focus.
5. Optionally copies highlighted sentences for notes.

### UX principles
- “Do one thing well”: paste → slice → scan.
- No hidden state: active bucket filter is always visible.
- Bias toward readability over dashboard gimmicks.

### Heuristic overview (prototype)
- Sentence segmentation: punctuation + newline heuristics (good enough for transcripts with speaker labels).
- Scoring: keyword/phrase hits with small weights (e.g., “raise guidance” > “guidance”).
- Classification: assign each sentence to the best bucket if score crosses a threshold; otherwise leave unhighlighted.
