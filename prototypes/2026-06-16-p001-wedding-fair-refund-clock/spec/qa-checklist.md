# QA checklist

## Happy path
- Open the Stitch-generated app and confirm the first screen is the working app, not a landing page.
- Confirm these sections exist: Refund countdown header by contract date and cooling-off status; Contract intake for vendor, booth, deposit, guaranteed headcount, and cancellation clause; Promise-vs-paper comparison for fair verbal claims and written terms; Evidence timeline with payment receipt, KakaoTalk messages, calls, emails, and request dates; Penalty fairness calculator with deposit, service delivered, resale window, and policy risk; Consumer-agency packet builder with complaint summary, screenshots, and vendor reply tracker; Family decision memo explaining recoverable amount, next deadline, and whether to switch venues.
- Confirm realistic sample data reflects: S1, S2.
- Confirm design direction follows financial-analyst.

## Edge cases
- Missing source evidence still leaves a clear next action.
- High-risk or urgent rows/chips do not visually overlap other UI.
- Mobile/tablet view keeps controls readable.
- The output artifact can be exported, copied, or shared in the prototype.

## Acceptance verification
- pNNN slot exists with no placeholders in meta.json and spec files.
- Stitch prompt is copy/paste-ready.
- Drop folder target is /home/sy/Downloads/stitch_drop/2026-06-16/p001/.
