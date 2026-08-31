# PRD — Code Comprehension Checkout

## Problem and target user
Agent-assisted developers meet deadlines while losing confidence that they understand the code they ship.

## Arrival, business route, and core loop
Open after an agent session. Explain one changed path, predict a test, make a safe mutation, compare result, and export a checkout card. Validate with team onboarding or mentoring licenses.

## First screen and key screens
Annotated critical path plus three checkpoints. Screens: path map, explanation prompts, prediction card, mutation sandbox, test result, checkout artifact.

## Interaction and output
Hints unlock only after a committed prediction. Output records the human explanation, mutation, and observed test result.

## Design profile, theme, and sources
- Profile: `premium-editorial`
- Theme: 역전
- Sources: S7, S8

## Constraints and non-goals
Use a local mock diff; never grade professional worth or generate replacement answers.

## Success and QA
The user can explain cause/effect and safely change one behavior; wrong prediction, flaky test, rollback, and pass states are clear.

## Development start prompt
Build p003 from its full Stitch prompt in `daily/2026-09-01/ideas.md`, centering explanation and mutation rather than detector scores.
