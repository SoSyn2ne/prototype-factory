# PRD — Catalyst Calendar Triage

## Problem
Individual investors and small operators track catalyst-heavy names with scattered notes across calendar apps, browser tabs, and chat logs. This causes three failures:
- Important upcoming events are missed (earnings dates, product launches, macro prints).
- Attention gets pulled by recent noise instead of weighted impact/confidence.
- There is no consistent daily triage artifact to decide what to research first.

Need: a lightweight daily triage view that turns upcoming catalysts into a ranked watchlist candidate set.

## Target user
- Primary: self-directed investor or analyst tracking 5-20 names and making daily/weekly research decisions.
- Secondary: operator writing market briefs who needs a repeatable catalyst prioritization workflow.

## Constraints
- Time: daily triage should take <=10 minutes once events are listed.
- Budget: prototype should rely on manual inputs and free/public context in v1.
- Platform: static web demo plus docs; no backend services required.
- Reliability: the system should communicate confidence and uncertainty, not certainty theater.

## Non-goals
- Automated trading execution or broker integration.
- Full valuation engine or price target model.
- Real-time data ingestion pipeline in this prototype phase.
- Portfolio allocation recommendations.

## Success metrics
- User can identify top 3 events to investigate in <2 minutes from one screen.
- During a 1-week pilot, user completes daily triage on >=4 days.
- >=80% of reviewed events receive an explicit impact and confidence label in the workflow.
- User reports at least one concrete "changed research priority" per week.

## Core workflow (v1 target)
1. Review upcoming catalyst list by date and category.
2. Assign impact level and confidence to each event.
3. Sort by weighted priority and produce a short "today's triage" list.
4. Capture follow-up actions (read filing, monitor call, ignore).

## Risks / unknowns
- Manual scoring may feel like overhead if the watchlist exceeds ~20 names.
- Users may over-trust ranking output as prediction instead of prioritization.
- Without historical outcomes, users may challenge whether weighting is meaningful.
