# PRD - Marketplace Plan Shock Window

## One-liner
ACA shoppers compare subsidy-loss risk before they lock a 2026 health plan.

## Problem
Users are already spending time, money, or social confidence on messy workarounds: healthinsurance.org OBBBA health coverage changes; Covered California 2026 important changes.

## Target user
US Marketplace health-insurance shoppers and household budget keepers facing 2026 policy uncertainty.

## Key UX
A plan comparison workbench where the user enters household size, income band, state, current premium, and risk flags, then gets a shock-window timeline and questions to ask before enrollment.

## Required UI sections
- Income and household inputs
- Policy-change timeline
- Plan shock comparison
- Call-script checklist
- Exportable questions sheet

## Assigned design profile
financial-analyst

## Theme
건강

## Source signal references
- S1: healthinsurance.org - 2026 health coverage shoppers face subsidy, Medicaid, HSA, and eligibility uncertainty; people need to compare risk before open enrollment. (https://www.healthinsurance.org/blog/one-big-beautiful-bill-act-brings-sweeping-changes-to-health-coverage/)
- S2: Covered California - Covered California warns federal decisions may affect 2026+ costs, eligibility, income reporting, and Medi-Cal benefits. (https://www.coveredca.com/important-changes/)

## Stitch prompt
```text
Create a responsive web prototype called Marketplace Plan Shock Window. It helps US Marketplace health-insurance shoppers compare possible 2026 premium, subsidy, eligibility, and income-reporting shock before choosing a plan. Use evidence from 2026 health policy uncertainty and Covered California style consumer warnings as the problem signal, but do not cite legal advice or promise accuracy. First screen promise: “See what can change before you lock the plan.” Core workflow: household/income inputs, current plan snapshot, policy-risk badges, side-by-side shock scenarios, questions to ask a navigator, and an exportable call sheet. Emotional pressure: fear of losing coverage or overpaying because the rules changed quietly. Trigger moment: open enrollment window shopping. Output artifact: a clean plan-risk brief and call checklist. Use the financial-analyst profile: institutional, data-forward, calm under ambiguity, restrained KPI cards, quiet confidence badges, and charts paired with plain-language interpretation.
```

## Non-goals
- Do not implement a custom demo in Phase A.
- Do not claim legal, financial, medical, or insurance certainty.
- Do not use generic dashboard language without the named mechanic.

## Success metrics
- Stitch output preserves the named first-screen promise and output artifact.
- Main workflow can be understood in under 10 seconds.
- The required sections are visible without placeholder copy.
