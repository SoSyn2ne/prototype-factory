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
- 사기 패턴 정확도, HUG 가입 가능성 freshness, 신고 패킷 법무 검토.
- Design profile (field-ops) rules respected: one accent, one radius system, no decorative hero.
- Source signals (S7) referenced in spec/prd.md and meta.json.
