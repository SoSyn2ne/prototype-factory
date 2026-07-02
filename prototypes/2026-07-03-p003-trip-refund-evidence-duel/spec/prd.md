# PRD - Trip Refund Evidence Duel

## One-liner
Travelers turn delay screenshots and policy snippets into a refund claim packet.

## Problem
Users are already spending time, money, or social confidence on messy workarounds: Reddit AITravelHack vacation refund complaint; Reddit American Airlines hotel reimbursement denial.

## Target user
Travelers whose airline delay, missed hotel night, or reimbursement promise turned into a customer-service loop.

## Key UX
A claim duel board that asks for receipts, screenshots, staff promises, policy reason, and timeline, then formats the strongest reimbursement argument.

## Required UI sections
- Trip timeline builder
- Receipt and screenshot slots
- Promise vs policy comparison
- Claim strength meter
- Email packet preview

## Assigned design profile
operator-dense

## Theme
자산 방어

## Source signal references
- S6: Reddit r/AITravelHack - Traveler says a vacation was consumed by airline and hotel refund calls and asks for a service to handle it. (https://www.reddit.com/r/AITravelHack/comments/1t2uzem/i_spent_my_entire_vacation_in_italy_fighting_with/)
- S7: Reddit r/americanairlines - Passenger claims airport staff promised hotel reimbursement, later customer relations denied it as out of control. (https://www.reddit.com/r/americanairlines/comments/1stjvu7/aa_refusing_hotel_reimbursement/)

## Stitch prompt
```text
Create a responsive web prototype called Trip Refund Evidence Duel. It helps travelers convert delay receipts, hotel bills, chat screenshots, and staff promises into a reimbursement claim packet. Use community signals where travelers spent vacation time fighting airline/hotel refunds and where hotel reimbursement was verbally promised then denied. First screen promise: “Turn scattered proof into one claim they can answer.” Core workflow: build trip timeline, upload or paste proof cards, tag verbal promises, compare carrier reason codes, generate claim strength meter, and preview a polite reimbursement email. Emotional pressure: anger at losing vacation time and money while being bounced between support teams. Trigger moment: within 48 hours after denial. Output artifact: a downloadable claim packet and email draft. Use the operator-dense profile: crisp compact rows, slate/charcoal surfaces, one urgent accent, tabular numbers, no decorative hero.
```

## Non-goals
- Do not implement a custom demo in Phase A.
- Do not claim legal, financial, medical, or insurance certainty.
- Do not use generic dashboard language without the named mechanic.

## Success metrics
- Stitch output preserves the named first-screen promise and output artifact.
- Main workflow can be understood in under 10 seconds.
- The required sections are visible without placeholder copy.
