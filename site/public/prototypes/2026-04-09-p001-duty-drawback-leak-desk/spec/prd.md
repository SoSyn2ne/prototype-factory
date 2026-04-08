# PRD — Duty Drawback Leak Desk

## Problem
- Small importers regularly miss refund and duty drawback opportunities because import records, re-export activity, and return paperwork live in separate systems.
- By the time finance notices, filing windows are tight and the highest-value recovery cases are buried under low-value noise.

## Target user
- Small importer operators, customs finance managers, and export admin teams.

## Constraints
- Time: A same-day triage workflow must identify the best recovery cases in under 10 minutes.
- Budget: Must feel usable as an ops dashboard before any deep customs-system integration exists.
- Platform: Desktop-first internal tool for weekly finance and operations review.

## Non-goals
- Full customs filing automation.
- Legal opinion generation or tariff classification decisions.
- Multi-country localization in phase one.

## Success metrics
- Users can rank the top 10 refund cases by recoverable cash and filing urgency in one session.
- Teams can spot document blockers before filing windows expire.
- The interface makes expected recovered cash and processing status obvious enough for weekly review.

## Notes
- Design profile: financial-analyst.
- Core UI sections: recoverable cash KPI hero, drawback candidate queue, per-SKU duty and return trend chart, document-gap risk panel, processing action drawer, reimbursement timeline rail.
