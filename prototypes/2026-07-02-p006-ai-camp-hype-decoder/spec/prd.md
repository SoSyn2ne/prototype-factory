# PRD - AI Camp Hype Decoder

## Problem
- The brochure says AI genius; your calendar says $2,400 and no refund after Friday.
- Users are already relying on manual workarounds: screenshots, emails, spreadsheets, community advice, or ad hoc scripts.

## Target user
- Parents choosing expensive AI, coding, or summer enrichment camps under cost, childcare, and status pressure.

## One-liner
- A parent decision tool that separates real AI camp engagement from glossy marketing, hidden costs, and status pressure.

## Key UX
- Parents compare camp claims, instructor proof, daily schedule, refund terms, commute, and child fit; the app produces a yes/no/maybe decision receipt.

## Required UI sections
- Camp claim intake
- Engagement proof checklist
- Hidden cost and refund calculator
- Child fit and fatigue check
- Parent decision receipt

## Design profile
- calm-consumer
- Design direction: soft family-planning surfaces, warm but not beige-heavy cards, calm blue-green accents, and shame-free copy that still exposes weak camp proof.

## Theme
- 사교육

## Source signal references
- S17: EdChoice, 2026-06 - https://www.edchoice.org/2026-state-of-the-american-summer-camp/
- S18: Business Insider, 2026-03 - https://www.businessinsider.com/dad-scrambling-summer-camp-plans-lost-money-2026-3
- S19: SkoolOfCode, 2026-06 - https://skoolofcode.us/blog/best-ai-summer-camps-for-kids-2026-an-honest-parents-guide/

## Output artifact
- Camp decision receipt with refund deadline and questions to ask

## Constraints
- Time: Phase A only; no custom demo implementation.
- Budget: Stitch prompt and scaffold only.
- Platform: responsive web app prototype generated later by Stitch.

## Non-goals
- Do not implement a custom demo in Phase A.
- Do not call external LLM APIs.

## Success metrics
- User can understand the trigger in 3 seconds.
- User can complete the core decision receipt flow.
- User receives Camp decision receipt with refund deadline and questions to ask.

## Stitch prompt

```text
Create a responsive web app called "AI Camp Hype Decoder" for Parents choosing expensive AI, coding, or summer enrichment camps under cost, childcare, and status pressure.. The app is based on observed user pull: S17: Camp costs remain hard for families; parents must be strategic about paying for summer camp. S18: A parent describes scrambling for camp, losing money, and facing weekly costs that add up to thousands. S19: AI camp buyers need help cutting through marketing hype and spotting age-fit and engagement red flags. The app should use a decision receipt around the trigger moment "The brochure says AI genius; your calendar says $2,400 and no refund after Friday." and make the first screen communicate "The brochure says AI genius; your calendar says $2,400 and no refund after Friday.". Use the user's own language: "A parent decision tool that separates real AI camp engagement from glossy marketing, hidden costs, and status pressure.". Build the core workflow around hype-vs-proof sorter and produce Camp decision receipt with refund deadline and questions to ask. Required sections: Camp claim intake; Engagement proof checklist; Hidden cost and refund calculator; Child fit and fatigue check; Parent decision receipt. Emotional pressure to make visible: 사교육, with concrete money, time, status, relationship, or health stakes. Design direction: use the `calm-consumer` profile with soft family-planning surfaces, warm but not beige-heavy cards, calm blue-green accents, and shame-free copy that still exposes weak camp proof. Avoid generic dashboard framing; make the main interaction feel like a decision receipt. Do not make a marketing landing page; the first screen must be the working product experience.
```
