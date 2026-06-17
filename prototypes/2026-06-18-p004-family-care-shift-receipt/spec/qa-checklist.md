# QA checklist

## Phase A completeness
- Title is present: Family Care Shift Receipt
- One-liner is present: Adult siblings turn elder-care tasks, missed work, and Medicaid paperwork into a fair weekly responsibility receipt.
- Target user is present: Adult children coordinating care for aging parents, siblings negotiating responsibility, and family caregivers applying for support programs.
- Key UX is present: Care lead logs appointment rides, medication refills, phone calls, forms, missed work, and out-of-pocket spend; the app turns invisible labor into a shareable weekly receipt and next-shift handoff.
- Assigned design profile is exactly one profile: calm-consumer
- Theme is present: 건강 / 외로움 / 자산 방어 - family duty, caregiver burnout, unpaid labor, and resentment prevention.
- Source signal references are present:
- S7: Family caregivers coordinate care with improvised calendars (https://www.reddit.com/r/Aging/comments/1n3dyzz/anyone_else_struggle_with_family_care_coordination/)
- S8: Caregiver programs create paperwork and career-disruption stress (https://aging.ca.gov/Programs_and_Services/Family_Caregiver_Services/)
- Copy/paste-ready Stitch prompt is present.

## Stitch prompt acceptance
- First screen is the working app, not a landing page.
- Required UI sections appear in the prompt.
- Sample data is realistic and tied to the source signals.
- Design direction sentence is tailored to calm-consumer.
- Prompt does not ask Stitch to call external APIs.

## Review gate before Phase B
- Slot p004 exists under prototypes/2026-06-18-p004-family-care-shift-receipt.
- No placeholder bullets remain in spec files.
- The 08:30 job should export to /home/sy/Downloads/stitch_drop/2026-06-18/p004/code.html and /home/sy/Downloads/stitch_drop/2026-06-18/p004/screen.png.

## Prompt
Build a production-grade web app prototype called "Family Care Shift Receipt" for adult siblings coordinating care for an aging parent. The first screen must be a working family-care workspace with a weekly care-load header, task timeline, sibling contribution matrix, benefits paperwork tracker, care fairness receipt, family message composer, and emergency handoff card. Use realistic sample data: one daughter handling most rides, one sibling sending money, medication refills, doctor appointment, Medicaid caregiver paperwork, missed work hours, and a Sunday family check-in. Design direction: use the calm-consumer profile with soft reassuring surfaces, warm neutrals, gentle accountability cues, and obvious next-step buttons that reduce family defensiveness. Do not make a marketing landing page; the first screen must be the working app.
