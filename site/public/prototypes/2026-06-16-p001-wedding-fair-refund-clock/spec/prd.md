# PRD - Wedding Fair Refund Clock

## Problem
- A Korean wedding-fair contract timer that turns deposit disputes and cooling-off rules into a refund packet before the window closes.
- Evidence: S1 (Korea Consumer Agency, wedding-fair deposit disputes, May 2026); S2 (Seoul Economic Daily, Korea cracks down on wedding-service scams, Mar 2026).

## Target user
- Korean engaged couples, parents paying wedding deposits, wedding planners, and consumer-protection counselors handling fair-site contracts.

## Key UX
- A countdown-first case room where couples enter contract date, fair booth, deposit, cancellation request, vendor terms, messages, and promised benefits; the app produces a refund eligibility timeline, escalation packet, and calm family explanation.

## Required UI sections
- Refund countdown header by contract date and cooling-off status
- Contract intake for vendor, booth, deposit, guaranteed headcount, and cancellation clause
- Promise-vs-paper comparison for fair verbal claims and written terms
- Evidence timeline with payment receipt, KakaoTalk messages, calls, emails, and request dates
- Penalty fairness calculator with deposit, service delivered, resale window, and policy risk
- Consumer-agency packet builder with complaint summary, screenshots, and vendor reply tracker
- Family decision memo explaining recoverable amount, next deadline, and whether to switch venues

## Assigned design profile
- financial-analyst

## Theme
- 자산 방어 / 외모 - wedding status pressure, contract-stage loss, parental budget conflict, and refund-timer anxiety.

## Practical vs fun label
- Practical / Commercial

## Stitch prompt
Build a production-grade web app prototype called "Wedding Fair Refund Clock" for Korean engaged couples and parents trying to recover wedding-fair deposits or fight penalty clauses. The first screen must be a working refund case room with a refund countdown header, contract intake, promise-vs-paper comparison, evidence timeline, penalty fairness calculator, consumer-agency packet builder, and family decision memo. Use realistic Korean wedding sample data: fair booth contract, 3.1M won deposit, guaranteed headcount clause, verbal discount promise, KakaoTalk cancellation request, vendor internal-policy refusal, and a 14-day cooling-off window. Design direction: use the financial-analyst profile with ink/off-white analytical panels, calm risk bands, precise timeline math, and premium decision cues for a high-stakes family purchase. Do not make a marketing landing page; the first screen must be the working app.

## Constraints
- Time: Phase A only; do not implement custom demo before Stitch export.
- Budget: Use existing PF scaffolding and generated Stitch output.
- Platform: Web prototype exported from Stitch into the expected drop folder.

## Non-goals
- No custom demo implementation during Phase A.
- No external LLM API calls.
- Do not claim market size from these sources; treat them as problem evidence.

## Success metrics
- Stitch output has all required sections on the first working screen.
- The prototype preserves the assigned design profile.
- The main workflow is visible without a marketing landing page.

## Notes
- Expected Stitch drop folder: /home/sy/Downloads/stitch_drop/2026-06-16/
