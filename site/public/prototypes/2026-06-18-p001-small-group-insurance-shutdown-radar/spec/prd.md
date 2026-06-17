# PRD - Small Group Insurance Shutdown Radar

## Problem
Small employers compare renewal shocks, PEO quotes, and shutdown risk before benefits costs break payroll.

## Target user
US small-business owners with 2-20 employees, office managers, founders weighing PEOs, and brokers trying to explain renewal shocks.

## Key UX
Owner enters current plan, renewal quote, payroll, headcount, employee contribution limits, PEO alternatives, and shutdown thresholds; the app produces a keep/switch/cut decision radar and employee-safe memo.

## Required UI sections
- Renewal shock header with premium delta, deductible delta, and payroll burden
- Plan comparison grid for current carrier, ACA small group, PEO, ICHRA, spouse coverage, and no-offer scenario
- Employee impact lanes by family status and contribution cap
- Shutdown-risk meter tying benefits cost to monthly payroll runway
- Broker question packet with missing assumptions and quote evidence
- Owner decision memo for employees, spouse, or accountant
- Calendar for renewal deadline, notice date, and open-enrollment tasks

## Design profile
financial-analyst

## Theme
자산 방어 / 건강 - benefits cost, employee retention, founder family coverage, and shutdown anxiety.

## Source signal references
- S1: Small-business health insurance quotes feel business-ending (https://www.reddit.com/r/smallbusiness/comments/1pbs5ri/health_insurance/)
- S2: Small-group premiums rising in 2026 (https://www.kff.org/health-costs/how-much-and-why-premiums-are-going-up-for-small-businesses-in-2026/)

## Stitch prompt
Build a production-grade web app prototype called "Small Group Insurance Shutdown Radar" for US small-business owners comparing 2026 health-insurance renewal shocks. The first screen must be a working financial decision workbench with a renewal shock header, plan comparison grid, employee impact lanes, shutdown-risk meter, broker question packet, owner decision memo, and renewal calendar. Use realistic sample data: 3 employees, owner plus spouse, current $9,800 monthly premium, renewal quote at $13,900, $10k deductible plan, PEO quote, ICHRA option, payroll runway, and a renewal deadline in 19 days. Design direction: use the financial-analyst profile with institutional ink/off-white panels, restrained risk bands, precise comparison tables, and calm decision cues for a high-stakes owner finance call. Do not make a marketing landing page; the first screen must be the working app.

## Non-goals
- Do not build a marketing landing page for Phase A.
- Do not implement a custom demo during Phase A.
- Do not claim external sources prove market size; they are problem evidence only.

## Success metrics
- User can understand the problem, target user, key workflow, and visual direction from the spec.
- Stitch can paste the prompt directly and generate a working first-screen app prototype.
- The prototype slot has no placeholder requirement fields.
