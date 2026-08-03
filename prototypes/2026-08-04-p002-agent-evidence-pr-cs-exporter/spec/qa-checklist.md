# QA checklist

## Happy path
- User pastes the input and sees the score + recommendation strip within 3 seconds.
- User copies the 1-pager / letter from the first screen with one click.
- User can run a desktop + mobile Puppeteer screenshot pass with no broken layout.

## Edge cases
- Empty input: shows a calm empty state, not a crash.
- Very long pasted input: still produces a deterministic score.
- No network: mock data still renders the full UI.

## Acceptance verification
- receipt 정확도, 1-pager 가독성, EU AI Act 6 의무 매핑.
- Design profile (operator-dense) rules respected: one accent, one radius system, no decorative hero.
- Source signals (S2, S3) referenced in spec/prd.md and meta.json.
