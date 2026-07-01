# PRD - Tip Bait Shift Ledger

## Problem
- A $14 offer became $5 after the drive, and you need to know if it is a pattern or a bad night.
- Users are already relying on manual workarounds: screenshots, emails, spreadsheets, community advice, or ad hoc scripts.

## Target user
- Food delivery drivers who suspect tip baiting, opaque tip adjustments, or platform underpayment across shifts.

## One-liner
- A gig-driver field log that captures offer screenshots, route time, tip changes, and platform claims into a pattern report.

## Key UX
- Drivers log offer screenshots, mileage, wait time, final payout, tip changes, and location context; the app turns repeated incidents into a shift pattern report.

## Required UI sections
- Offer screenshot capture
- Route and wait-time log
- Tip delta tracker
- Customer/platform pattern wall
- Reimbursement claim note

## Design profile
- field-ops
- Design direction: rugged mobile-first controls, large thumb-friendly incident buttons, high-contrast payout deltas, and a safety-orange accent for lost-tip events.

## Theme
- 자산 방어

## Source signal references
- S15: Reddit r/UberEATS, 2026-05 - https://www.reddit.com/r/UberEATS/comments/1stnco7/no_more_tip_baiting/
- S16: The Sun, 2026-02 - https://www.the-sun.com/money/15855421/uber-eats-customers-food-delivery-tip-baiting/

## Output artifact
- Weekly tip-bait evidence report and platform support note

## Constraints
- Time: Phase A only; no custom demo implementation.
- Budget: Stitch prompt and scaffold only.
- Platform: responsive web app prototype generated later by Stitch.

## Non-goals
- Do not implement a custom demo in Phase A.
- Do not call external LLM APIs.

## Success metrics
- User can understand the trigger in 3 seconds.
- User can complete the core mobile field ledger flow.
- User receives Weekly tip-bait evidence report and platform support note.

## Stitch prompt

```text
Create a responsive web app called "Tip Bait Shift Ledger" for Food delivery drivers who suspect tip baiting, opaque tip adjustments, or platform underpayment across shifts.. The app is based on observed user pull: S15: Drivers debate whether tip baiting is customer behavior, platform opacity, or misunderstood tip adjustment. S16: Tip baiting remains a visible gig-work grievance despite some platform protections and guarantee programs. The app should use a mobile field ledger around the trigger moment "A $14 offer became $5 after the drive, and you need to know if it is a pattern or a bad night." and make the first screen communicate "A $14 offer became $5 after the drive, and you need to know if it is a pattern or a bad night.". Use the user's own language: "A gig-driver field log that captures offer screenshots, route time, tip changes, and platform claims into a pattern report.". Build the core workflow around tip-delta incident log and produce Weekly tip-bait evidence report and platform support note. Required sections: Offer screenshot capture; Route and wait-time log; Tip delta tracker; Customer/platform pattern wall; Reimbursement claim note. Emotional pressure to make visible: 자산 방어, with concrete money, time, status, relationship, or health stakes. Design direction: use the `field-ops` profile with rugged mobile-first controls, large thumb-friendly incident buttons, high-contrast payout deltas, and a safety-orange accent for lost-tip events. Avoid generic dashboard framing; make the main interaction feel like a mobile field ledger. Do not make a marketing landing page; the first screen must be the working product experience.
```
