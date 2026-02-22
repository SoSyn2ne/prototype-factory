# PRD — Thesis Delta Alerts

## Problem
People who invest long-term still spend time reacting to noisy news:
- “What matters for *my* thesis?” is unclear.
- Summaries are passive; they don’t say what to *do*.
- The same macro story repeats; the real signal is *delta* (what changed since yesterday/last week).

## Target user
- Primary: busy retail investor (1–20 positions) with explicit thesis notes (reasons to hold + red flags)
- Secondary: anyone tracking a topic thesis (AI chips, hyperscalers, EV supply chain, etc.)

## Job-to-be-done
“Each morning, tell me the 1–3 changes that could invalidate my thesis, and give me one small action to verify quickly.”

## Proposed solution
A daily brief that produces **Thesis Delta Cards** per watchlist/thesis.

Each card includes:
- **Delta statement:** what changed (vs prior baseline)
- **Thesis link:** which thesis claim it impacts
- **Severity:** info / watch / action / thesis-risk
- **G1 labeling:** KNOWN / ASSUMPTION / UNKNOWN per key claim
- **Next action:** one tiny task (≤10 minutes) to verify or reduce uncertainty
- **Stop rule:** “If X is true, downgrade this to noise.”

## User flow
1) User defines 3–10 theses (simple template)
   - “I hold NVDA because ___; I will reduce if ___.”
2) User sets sources
   - tickers, keywords, 1–3 trusted anchors, optional SEC filings / press releases
3) Daily run (06:00 KST)
4) User receives 3–7 cards total (hard cap)
5) User can tap:
   - Mark: relevant / not relevant
   - Convert to a follow-up task

## Constraints
- Time: first usable version in 1 day (document-only today)
- Budget: near-zero (use public sources + minimal infra)
- Platform: Telegram-first delivery; spec should allow later email/web
- Data: assume no broker integrations initially

## Non-goals
- Day trading signals, price prediction
- Full research reports
- Real-time streaming alerts (daily is the first step)
- “Perfect truth” (we optimize for fast falsification)

## Success metrics
- User-rated relevance: ≥70% of cards marked “relevant” after 2 weeks
- Time saved: user reports <5 minutes/day to consume
- Actionability: ≥30% of days produce at least 1 completed next-action task
- Noise control: average cards/day ≤5

## Risks / failure modes
- Summaries become generic (no thesis linkage)
- Too many alerts (attention fatigue)
- Source credibility issues; misleading deltas
- Requires thesis input; onboarding friction

## Notes
- Output level (G3): **Document-only** today. Next step would be a tiny pipeline that turns (thesis + sources + yesterday’s baseline) into cards.
