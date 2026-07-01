# PRD - Contractor Ghost Deposit File

## Problem
- The friendly contractor has your deposit, your texts, and suddenly no calendar.
- Users are already relying on manual workarounds: screenshots, emails, spreadsheets, community advice, or ad hoc scripts.

## Target user
- Homeowners who paid deposits or accepted estimates from contractors who then ghost, stall, or pressure them.

## One-liner
- A homeowner escalation kit that converts deposit receipts, texts, photos, and licensing checks into a calm complaint or small-claims packet.

## Key UX
- The homeowner logs deposit proof, promised dates, license checks, and message attempts; the app recommends the next escalation and drafts a complaint packet.

## Required UI sections
- Deposit and contract timeline
- License/reference checker
- Ghosting contact log
- Complaint path selector
- Small-claims packet preview

## Design profile
- calm-consumer
- Design direction: reassuring neutral cards, clear next-step language, gentle teal status cues, and document previews that reduce panic without minimizing loss.

## Theme
- 자산 방어

## Source signal references
- S12: Reddit r/homeowners, contractor ghosting - https://www.reddit.com/r/homeowners/comments/14oouuw/contractor_ghosting_me_after_i_paid_deposit/
- S13: Mainebiz, 2026-04 - https://mainebiz.biz/article/how-to-avoid-being-ghosted-by-a-contractor/

## Output artifact
- State complaint or small-claims packet with evidence timeline

## Constraints
- Time: Phase A only; no custom demo implementation.
- Budget: Stitch prompt and scaffold only.
- Platform: responsive web app prototype generated later by Stitch.

## Non-goals
- Do not implement a custom demo in Phase A.
- Do not call external LLM APIs.

## Success metrics
- User can understand the trigger in 3 seconds.
- User can complete the core escalation file flow.
- User receives State complaint or small-claims packet with evidence timeline.

## Stitch prompt

```text
Create a responsive web app called "Contractor Ghost Deposit File" for Homeowners who paid deposits or accepted estimates from contractors who then ghost, stall, or pressure them.. The app is based on observed user pull: S12: A homeowner says a contractor ghosted after taking a deposit; commenters advise licensing complaints and small claims. S13: Home-improvement scam guidance tells homeowners to verify licenses, social presence, physical address, and past customers. The app should use a escalation file around the trigger moment "The friendly contractor has your deposit, your texts, and suddenly no calendar." and make the first screen communicate "The friendly contractor has your deposit, your texts, and suddenly no calendar.". Use the user's own language: "A homeowner escalation kit that converts deposit receipts, texts, photos, and licensing checks into a calm complaint or small-claims packet.". Build the core workflow around proof timeline builder and produce State complaint or small-claims packet with evidence timeline. Required sections: Deposit and contract timeline; License/reference checker; Ghosting contact log; Complaint path selector; Small-claims packet preview. Emotional pressure to make visible: 자산 방어, with concrete money, time, status, relationship, or health stakes. Design direction: use the `calm-consumer` profile with reassuring neutral cards, clear next-step language, gentle teal status cues, and document previews that reduce panic without minimizing loss. Avoid generic dashboard framing; make the main interaction feel like a escalation file. Do not make a marketing landing page; the first screen must be the working product experience.
```
