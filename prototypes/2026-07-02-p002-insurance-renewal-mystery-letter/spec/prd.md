# PRD - Insurance Renewal Mystery Letter

## Problem
- Your insurer raised the bill again and still will not say what changed.
- Users are already relying on manual workarounds: screenshots, emails, spreadsheets, community advice, or ad hoc scripts.

## Target user
- Small business owners facing opaque property, liability, or BOP insurance renewal increases.

## One-liner
- A small-business insurance workbench that turns vague renewal hikes into coverage-change questions, quote comparisons, and broker-ready pushback.

## Key UX
- Upload or enter renewal letter details, compare premium and deductible changes, flag missing explanations, and produce broker questions plus a quote-comparison brief.

## Required UI sections
- Renewal letter intake
- Premium and deductible delta table
- Coverage-change suspicion list
- Broker question builder
- Quote comparison memo

## Design profile
- financial-analyst
- Design direction: ink-and-paper financial analysis, tight delta tables, restrained amber warnings, and plain-English interpretation beside every premium change.

## Theme
- 자산 방어

## Source signal references
- S5: Reddit r/growmybusiness, 2026-01 - https://www.reddit.com/r/growmybusiness/comments/1psudk6/what_is_the_best_business_insurance_are_you/
- S6: Reddit r/Insurance, 2026-04 - https://www.reddit.com/r/Insurance/comments/1rr0myq/frustrated_with_hartford_business_property/

## Output artifact
- Broker-ready renewal challenge memo and quote shopping checklist

## Constraints
- Time: Phase A only; no custom demo implementation.
- Budget: Stitch prompt and scaffold only.
- Platform: responsive web app prototype generated later by Stitch.

## Non-goals
- Do not implement a custom demo in Phase A.
- Do not call external LLM APIs.

## Success metrics
- User can understand the trigger in 3 seconds.
- User can complete the core renewal interrogation memo flow.
- User receives Broker-ready renewal challenge memo and quote shopping checklist.

## Stitch prompt

```text
Create a responsive web app called "Insurance Renewal Mystery Letter" for Small business owners facing opaque property, liability, or BOP insurance renewal increases.. The app is based on observed user pull: S5: Owners ask which business insurance people actually use in 2026 because rates and providers keep changing. S6: A business property customer says renewal rates rise nearly 10% yearly with little explanation and no claims paid. The app should use a renewal interrogation memo around the trigger moment "Your insurer raised the bill again and still will not say what changed." and make the first screen communicate "Your insurer raised the bill again and still will not say what changed.". Use the user's own language: "A small-business insurance workbench that turns vague renewal hikes into coverage-change questions, quote comparisons, and broker-ready pushback.". Build the core workflow around coverage-delta cross-exam and produce Broker-ready renewal challenge memo and quote shopping checklist. Required sections: Renewal letter intake; Premium and deductible delta table; Coverage-change suspicion list; Broker question builder; Quote comparison memo. Emotional pressure to make visible: 자산 방어, with concrete money, time, status, relationship, or health stakes. Design direction: use the `financial-analyst` profile with ink-and-paper financial analysis, tight delta tables, restrained amber warnings, and plain-English interpretation beside every premium change. Avoid generic dashboard framing; make the main interaction feel like a renewal interrogation memo. Do not make a marketing landing page; the first screen must be the working product experience.
```
