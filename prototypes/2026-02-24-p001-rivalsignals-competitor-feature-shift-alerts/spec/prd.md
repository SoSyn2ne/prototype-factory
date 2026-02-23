# PRD — RivalSignals: Competitor Feature-Shift Alerts

## One-liner
Track competitor release notes/newsletters and alert only when a change meaningfully threatens (or validates) your positioning.

## Problem
Competitive intel is noisy:
- Release notes are frequent and marketing-heavy.
- Most changes are irrelevant to *your* ICP, pricing, or differentiation.
- Founders/PMs notice meaningful shifts late (after customers ask “why don’t you have X?”).

RivalSignals is a **triage + decision-support** layer: “What changed, why it matters, and what to do next.”

## Target user
- Primary: indie founders, PMs, growth leads at small B2B SaaS (1–50 people)
- Secondary: agencies managing multiple SaaS clients

## Anti‑RAG ideation (anchor + 2 contrasts)
- **Anchor (similar):** Google Alerts / Visualping / “track changelog updates” tools → good at *detecting changes*, weak at *impact triage*.
- **Contrast #1 (dissimilar):** Cybersecurity threat intel → signal scoring, TTP mapping, and “so what” summarization to reduce alert fatigue.
- **Contrast #2 (dissimilar):** Financial earnings-call monitoring → thesis-delta alerts (“what changed vs last quarter and does it break the thesis?”).

**Synthesis:** Apply threat-intel style scoring + earnings “thesis delta” framing to competitor updates.

## Core workflow (MVP)
1) User adds competitors + sources
   - Sources: RSS/changelog page URL, blog tag URL, newsletter forward address, optional X/Twitter list (later)
2) Ingestion normalizes events
   - Extract headline + diff (what changed since last crawl)
3) LLM triage produces a *RivalSignal*
   - Category: product / pricing / packaging / positioning / distribution / integrations
   - Impact score (0–100) + confidence
   - “Why it matters” in 3 bullets *tied to user’s ICP + product thesis*
   - Suggested response: ignore / watch / copy / counter-position / ship now
4) Notifications
   - Only if score ≥ threshold *or* matches “must-watch” categories (e.g., pricing)

## Constraints
- Time: spec-only (today)
- Budget: $0 for prototype spec; assume low-cost infra later (cron + headless fetch + LLM)
- Platform: web dashboard + email/Telegram alerts

## Non-goals (MVP)
- Perfect web scraping for every site (start with RSS/structured sources)
- Real-time monitoring (daily is fine)
- Fully automated strategy generation (keep to “triage + options”)

## Success metrics
- Primary: user reports **<5 alerts/week** with **>60% perceived relevance**
- Secondary: median time-to-awareness of meaningful competitor move < 24h
- Quality: “false-positive rate” (alerts that user marks as irrelevant) < 40% after 2 weeks

## Fastest validation (≤ 1 day)
- Concierge test with 5 competitors for 1 founder:
  - Manually collect last 7 days of updates
  - Run the triage prompt
  - Deliver alerts via Telegram
  - Measure: how many were “actionable” and whether any critical miss occurred

## Risks / failure modes
- Alert fatigue if scoring is weak.
- Scraping/ingestion breaks frequently.
- Competitor updates are too vague to infer impact reliably.
- Users don’t have a clear ICP/thesis, so “impact” can’t be personalized.
