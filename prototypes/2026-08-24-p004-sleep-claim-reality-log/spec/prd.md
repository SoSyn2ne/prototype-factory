# PRD — Sleep Tracker Claim Reality Log

## Problem
- Compare wearable sleep claims with lived outcomes and clinician-ready uncertainty notes.

## Target user
- Wearable owners who are anxious when device scores conflict with how they feel.

## Source evidence
- S04, S10 from daily/2026-08-24/ideas.md.

## Core loop
- Pin a product claim, log score plus lived outcome, tag confounders, view disagreement patterns, and prepare questions without diagnosing.

## First screen
- last night’s device claim beside a plain-language morning check-in and an explicit “not a diagnosis” note.

## Key screens
- claim pinboard
- morning check-in
- confounder tags
- agreement timeline
- uncertainty explainer
- clinician question card

## Design profile and theme
- Profile: calm-consumer
- Theme: quiet midnight-blue and cream, one lavender accent, spacious diary rhythm, 12px cards, no medical alarm styling

## Interaction rules
- The primary interaction must be usable, not decorative.
- Preserve explicit empty, blocked, error, and success states described in the Stitch prompt.
- Never imply live external data when the prototype uses local sample data.

## Output artifact
- A concrete receipt, card, replay, map, or physical template produced by the core loop.

## Share / return loop
- Let the user export the final artifact and return when the underlying job, case, season, or round changes.

## Constraints
- Time: Phase A specification only; no custom demo.
- Budget: local sample data; no paid API.
- Platform: responsive web companion unless the concept explicitly includes a non-web artifact.

## Non-goals
- Generic analytics dashboard.
- Unverified market-size claims.

## Success metrics
- First screen understood in three seconds.
- Core interaction completes end to end.
- Output artifact is visible and exportable.

## QA / screenshot criteria
- Desktop and mobile layouts preserve the primary action.
- All required sections are visible or reachable.
- Profile, theme, and state colors remain consistent.

## Copy/paste-ready Stitch prompt

```text
Build a responsive consumer app called "Sleep Tracker Claim Reality Log" for wearable owners whose sleep scores conflict with how they feel. First screen: last night’s device claim beside a plain-language morning check-in and an explicit “not a diagnosis” note. Core interaction: pin the wearable claim, log score and lived outcome, tag confounders, inspect agreement and disagreement over time, and export clinician questions. Required sections: claim pinboard; morning check-in; confounder tags; agreement timeline; uncertainty explainer; clinician question card. Use realistic sample data and show agreement, disagreement, missing-data, uncertain, and ready-to-discuss states. Design direction: use the calm-consumer profile with quiet midnight-blue and cream, one lavender accent, spacious diary rhythm, soft 12px cards, and no medical alarm styling.
```
