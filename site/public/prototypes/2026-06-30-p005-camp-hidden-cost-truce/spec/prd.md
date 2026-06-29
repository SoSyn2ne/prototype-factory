# PRD - Camp Hidden Cost Truce

## Problem
A parent calculator that compares summer camp sticker prices against the messy real total: food, gear, fees, deposits, and waitlist risk.

## Target User
Parents comparing summer camps while trying not to blow the family budget or disappoint their kid.

## Key UX
Compare camps side by side, add hidden extras, weight waitlist risk and social value, then produce a family decision sheet.

## Required UI Sections
- Camp comparison table
- Hidden extras checklist
- Waitlist and deposit risk meter
- Kid value vs budget tradeoff
- Family truce summary

## Assigned Design Profile
calm-consumer

## Theme
사교육

## Source Signal References
- S11: New York Post, 2026-06-24 - Some parents spend $20K+ on elite summer camps, framing them as networking and confidence investments. Source: https://nypost.com/2026/06/24/lifestyle/posh-moms-spend-thousands-on-fancy-sleepawy-camps-and-gear/
- S12: CampSearch, 2026 - Summer day camps can range from $50-$500/week and overnight camps commonly reach $1,000-$2,000/week before extras. Source: https://www.campsearch.com/summer-camp-cost-2026
- S13: KidPlanr citing parent-reported Reddit pain, 2026 - A parent reports budgeting $3,600 for camp, then finding registration and materials fees that push the total higher. Source: https://kidplanr.com/blog/bay-area-summer-camp-hidden-costs-2026

## Success Metrics
- User can complete the core decision/proof workflow in under 3 minutes.
- Output is specific enough to share with a family member, customer, advocate, staff member, or peer.
- Stitch render preserves the required UI sections and design profile.

## Non-goals
- Do not implement production integrations, payments, login, or external API calls in Phase A.
- Do not claim legal, medical, insurance, labor, or financial advice.

## Stitch Prompt

```text
Create a responsive web prototype for "Camp Hidden Cost Truce", a parent calculator that compares summer camp sticker prices against the messy real total: food, gear, fees, deposits, and waitlist risk. Target user: parents comparing summer camps while trying not to blow the family budget or disappoint their kid. Build the key UX around comparing camps side by side, adding hidden extras, weighting waitlist risk and social value, then producing a family decision sheet. Required UI sections: camp comparison table, hidden extras checklist, waitlist and deposit risk meter, kid value vs budget tradeoff, and family truce summary. Design direction: use the calm-consumer profile with warm neutrals, low-stress grouping, one gentle accent, and helper text that reduces parent guilt. Use source signals S11, S12, and S13 as problem evidence only.
```
