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
- payer별 회신 기한 정확도, letter 가독성, 의료진 협조 자연스러움.
- Design profile (financial-analyst) rules respected: one accent, one radius system, no decorative hero.
- Source signals (S8) referenced in spec/prd.md and meta.json.
