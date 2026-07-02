# PRD - Jeonse Exit Siren

## One-liner
Korea renters rehearse deposit-return risk before the landlord delay script starts.

## Problem
Users are already spending time, money, or social confidence on messy workarounds: Reddit Living_in_Korea landlord deposit concern; Reddit jeonse private-loan discussion; Seoul Economic Daily jeonse check-before-wiring coverage.

## Target user
Korea renters, foreign residents, and couples within 90 days of a jeonse renewal or move-out.

## Key UX
A countdown and risk rehearsal that converts lease dates, deposit amount, insurance status, registry hints, and landlord replies into a next-action ladder.

## Required UI sections
- Move-out countdown
- Deposit-risk checklist
- Landlord reply classifier
- Document vault
- Escalation timeline

## Assigned design profile
calm-consumer

## Theme
자산 방어

## Source signal references
- S3: Reddit r/Living_in_Korea - A renter describes a landlord unable to return jeonse deposit; replies frame deposit as hot-potato debt and urge risk awareness. (https://www.reddit.com/r/Living_in_Korea/comments/1hhnnhb/landlord_of_almost_7_years_claiming_to_be_unable/)
- S4: Reddit r/seoulhiddengem - Community discussion calls jeonse a private loan and worries deposits can reach extreme property-value ratios. (https://www.reddit.com/r/seoulhiddengem/comments/1r3bjzs/is_koreas_jeonse%EC%84%B8_system_basically_a_massive/)
- S5: Seoul Economic Daily English - Korean coverage highlights large jeonse-loss stories and “check before wiring” behavior around deposit safety. (https://en.sedaily.com/finance/2026/05/30/korea-tightens-account-rules-to-curb-group-account-rental)

## Stitch prompt
```text
Create a responsive Korean/English-friendly prototype called Jeonse Exit Siren. It helps renters prepare for jeonse deposit-return risk before the landlord starts delaying repayment. Use community signals from Korea renters discussing landlords unable to return deposits and news-style “check before wiring” caution as problem evidence. First screen promise: “Know your next move before your deposit becomes someone else’s excuse.” Core workflow: enter lease end date, deposit amount, insurance status, property type, landlord message, and current documents; show a calm risk ladder, move-out countdown, missing-document checklist, landlord reply classifier, and escalation timeline. Emotional pressure: fear of losing life savings and shame of not understanding the system. Output artifact: a deposit-return action packet. Use the calm-consumer profile: reassuring warm neutrals, gentle urgency, clear next-step buttons, and helper text that explains recovery from mistakes.
```

## Non-goals
- Do not implement a custom demo in Phase A.
- Do not claim legal, financial, medical, or insurance certainty.
- Do not use generic dashboard language without the named mechanic.

## Success metrics
- Stitch output preserves the named first-screen promise and output artifact.
- Main workflow can be understood in under 10 seconds.
- The required sections are visible without placeholder copy.
