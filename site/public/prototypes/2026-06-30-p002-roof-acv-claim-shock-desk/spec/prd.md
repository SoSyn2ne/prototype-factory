# PRD - Roof ACV Claim Shock Desk

## Problem
A homeowner claim explainer that turns roof depreciation language into cash-at-risk and appeal steps.

## Target User
U.S. homeowners facing hail, hurricane, or renewal notices with confusing ACV roof coverage.

## Key UX
Enter policy terms and roof age, see replacement-cost gap, decide whether to file, then assemble a documentation checklist.

## Required UI Sections
- Policy term decoder
- Depreciation cash-at-risk meter
- File-or-wait decision lane
- Photo documentation checklist
- Adjuster call script

## Assigned Design Profile
financial-analyst

## Theme
자산 방어

## Source Signal References
- S4: MarketWatch, 2026-06-29 - Homeowners may now face ACV roof policies that pay depreciated value instead of full replacement, exposing them to surprise repair bills. Source: https://www.marketwatch.com/story/insurers-shifted-roof-replacement-costs-onto-homeowners-thanks-to-a-new-federal-rule-just-in-time-for-hail-and-hurricane-season-e86068df
- S5: Reddit r/FortCollins, 2026 - Homeowners trade premium quotes and replacement-cost coverage details; one cites $3,300/year as the only full-replacement option for an older roof. Source: https://www.reddit.com/r/FortCollins/comments/1rq8xxb/the_homeowners_insurance_thread_of_2026/

## Success Metrics
- User can complete the core decision/proof workflow in under 3 minutes.
- Output is specific enough to share with a family member, customer, advocate, staff member, or peer.
- Stitch render preserves the required UI sections and design profile.

## Non-goals
- Do not implement production integrations, payments, login, or external API calls in Phase A.
- Do not claim legal, medical, insurance, labor, or financial advice.

## Stitch Prompt

```text
Create a responsive web prototype for "Roof ACV Claim Shock Desk", a homeowner claim explainer that turns roof depreciation language into cash-at-risk and appeal steps. Target user: U.S. homeowners facing hail, hurricane, or renewal notices with confusing ACV roof coverage. Build the key UX around entering policy terms and roof age, seeing the replacement-cost gap, deciding whether to file, and assembling documentation. Required UI sections: policy term decoder, depreciation cash-at-risk meter, file-or-wait decision lane, photo documentation checklist, and adjuster call script. Design direction: use the financial-analyst profile with institutional calm, restrained KPI cards, confidence badges, and written interpretation beside the numbers. Use source signals S4 and S5 as problem evidence only.
```
