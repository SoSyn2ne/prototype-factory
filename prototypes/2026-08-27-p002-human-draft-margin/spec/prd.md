# PRD — Human Draft Margin

## Problem
- Writers fear false AI flags yet rewriting tools can erase their voice and learning process.

## Target user
- Non-native English students, developers, and applicants.

## Arrival path
- Live source signal, operator search, or peer share.

## Business / validation route
- Test five target users completing the core loop with realistic local data.

## Core loop
- Paste draft → receive margin questions → self-revise → inspect voice drift → export authorship receipt.

## First screen
- Original draft with feedback-only margin questions and no replacement button.

## Key screens
- Original draft; margin questions; author rewrite lane; voice check; revision timeline; authorship receipt.

## Interaction rules
- Only the author can enter final prose; suggestions are questions or issue labels.

## Output artifact
- Revision-process authorship receipt.

## Share / return loop
- Submit receipt with a draft or revisit weak writing patterns.

## Constraints
- Time: one-session prototype loop under 15 minutes.
- Budget: local mock data; no paid APIs.
- Platform: responsive web/mobile concept appropriate to the interaction.

## Non-goals
- No production integration, automated external action, or custom demo in Phase A.

## Success metrics
- 80% of five testers explain the core rule in 15 seconds and finish the main loop without help.

## QA / screenshot criteria
- No generated replacement action; show blank, heavy-edit, anxiety, and complete states on desktop/mobile.

## Design profile
- premium-editorial

## Theme
- 역전

## Source signal references
- S3 false AI-flag community thread; S11 AI reliability complaints.

## Development start prompt

```text
Build Human Draft Margin from this PRD using the premium-editorial profile, realistic local data, the listed interaction states, responsive desktop/mobile QA, and no paid external APIs.
```

## Notes
- Phase A scaffold only; Stitch export is handled by the separate 08:30 job.

