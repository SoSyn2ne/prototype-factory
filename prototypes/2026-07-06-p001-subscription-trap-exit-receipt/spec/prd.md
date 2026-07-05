# PRD — Subscription Trap Exit Receipt

## Problem
- A household proof room that turns confusing subscription cancellations into dated evidence, next steps, and refund leverage.
- Source evidence: S1 - FTC press release and business guidance on click-to-cancel / negative-option billing: Subscription cancellation remains a regulatory and consumer-protection fight; households still need proof trails when cancellation paths are confusing. S2 - Guardian coverage of the bipartisan Unsubscribe Act: The article frames forgotten or hard-to-cancel subscriptions as a recurring household money leak and notes stalled federal protections.

## Target user
- Busy US consumers or families with multiple trials, app subscriptions, gym memberships, and software renewals.

## Key UX
- Paste or photograph a billing email, cancellation page, or chat transcript; the app builds a timeline, flags missing proof, and produces a dispute-ready exit receipt.

## Required UI sections
- Charge timeline
- Cancellation attempt log
- Missing-proof checklist
- State / policy note panel
- Refund escalation script
- Exportable evidence receipt

## Design profile
- calm-consumer
- Design direction must be tailored inside the Stitch prompt and avoid generic dashboard styling.

## Theme
- 자산 방어 / 불안

## Source signal references
- S1: FTC press release and business guidance on click-to-cancel / negative-option billing — https://www.ftc.gov/news-events/news/press-releases/2024/10/federal-trade-commission-announces-final-click-cancel-rule-making-it-easier-consumers-end-recurring
- S2: Guardian coverage of the bipartisan Unsubscribe Act — https://www.theguardian.com/us-news/2026/jan/13/cancel-subscriptions-bill-bipartisan

## Stitch prompt
Create a responsive web prototype for "Subscription Trap Exit Receipt". Target user: busy households trying to cancel confusing subscriptions and recover recurring charges. Core UX: the user adds a charge, trial date, renewal notice, cancellation attempt, and screenshots; the product renders a clean evidence timeline, a missing-proof checklist, a policy/context note, and a copyable refund or dispute script. Required sections: top summary with money at risk and days since cancellation, charge timeline, cancellation proof uploader mock, missing proof checklist, escalation script preview, and export receipt panel. Use the calm-consumer design profile: soft reassuring surfaces, one gentle accent, clear next-step buttons, readable helper text, and no shame-heavy alarm styling.

## Success metrics
- A Stitch operator can paste the prompt without rewriting it.
- The first screen shows the actual workflow, not a landing page.
- The output artifact is visible before the fold or immediately after the primary input.
