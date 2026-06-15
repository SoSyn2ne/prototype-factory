# QA checklist

## Happy path
- Open the Stitch-generated app and confirm the first screen is the working app, not a landing page.
- Confirm these sections exist: Field-test session header with store, kiosk model, tester profile, and completion score; Task script cards for ordering coffee, changing options, applying coupon, paying, and canceling; Pain-point logger for height, touch targets, button discovery, voice guidance, glare, and queue pressure; Staff-assist lane comparing immediate help, bell button, printed menu, and alternate payment flow; Retrofit decision board for voice guide, tactile labels, screen angle, font size, queue layout, and staff training; Complaint-risk and mandate checklist with evidence photos and vendor follow-up; Before/after field report for owner, vendor, and local inspection file.
- Confirm realistic sample data reflects: S14.
- Confirm design direction follows field-ops.

## Edge cases
- Missing source evidence still leaves a clear next action.
- High-risk or urgent rows/chips do not visually overlap other UI.
- Mobile/tablet view keeps controls readable.
- The output artifact can be exported, copied, or shared in the prototype.

## Acceptance verification
- pNNN slot exists with no placeholders in meta.json and spec files.
- Stitch prompt is copy/paste-ready.
- Drop folder target is /home/sy/Downloads/stitch_drop/2026-06-16/p008/.
