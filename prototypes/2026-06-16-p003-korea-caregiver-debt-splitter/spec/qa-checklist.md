# QA checklist

## Happy path
- Open the Stitch-generated app and confirm the first screen is the working app, not a landing page.
- Confirm these sections exist: Monthly care burn header in won with debt-risk bands; Care schedule builder for hospital sitter, home caregiver, family shifts, and respite gaps; Sibling capacity table for income, location, available nights, guilt limits, and cash ceiling; Insurance and subsidy checklist for long-term-care grade, benefits, and uncovered costs; Fair-split simulator comparing equal, income-weighted, time-weighted, and parent-asset drawdown models; Conflict log for promises, missed shifts, emergency calls, and resentment triggers; Family meeting packet with contribution plan, next review date, and care-quality watchlist.
- Confirm realistic sample data reflects: S5, S6.
- Confirm design direction follows calm-consumer.

## Edge cases
- Missing source evidence still leaves a clear next action.
- High-risk or urgent rows/chips do not visually overlap other UI.
- Mobile/tablet view keeps controls readable.
- The output artifact can be exported, copied, or shared in the prototype.

## Acceptance verification
- pNNN slot exists with no placeholders in meta.json and spec files.
- Stitch prompt is copy/paste-ready.
- Drop folder target is /home/sy/Downloads/stitch_drop/2026-06-16/p003/.
