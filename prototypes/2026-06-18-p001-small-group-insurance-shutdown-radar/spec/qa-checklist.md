# QA checklist

## Phase A completeness
- Title is present: Small Group Insurance Shutdown Radar
- One-liner is present: Small employers compare renewal shocks, PEO quotes, and shutdown risk before benefits costs break payroll.
- Target user is present: US small-business owners with 2-20 employees, office managers, founders weighing PEOs, and brokers trying to explain renewal shocks.
- Key UX is present: Owner enters current plan, renewal quote, payroll, headcount, employee contribution limits, PEO alternatives, and shutdown thresholds; the app produces a keep/switch/cut decision radar and employee-safe memo.
- Assigned design profile is exactly one profile: financial-analyst
- Theme is present: 자산 방어 / 건강 - benefits cost, employee retention, founder family coverage, and shutdown anxiety.
- Source signal references are present:
- S1: Small-business health insurance quotes feel business-ending (https://www.reddit.com/r/smallbusiness/comments/1pbs5ri/health_insurance/)
- S2: Small-group premiums rising in 2026 (https://www.kff.org/health-costs/how-much-and-why-premiums-are-going-up-for-small-businesses-in-2026/)
- Copy/paste-ready Stitch prompt is present.

## Stitch prompt acceptance
- First screen is the working app, not a landing page.
- Required UI sections appear in the prompt.
- Sample data is realistic and tied to the source signals.
- Design direction sentence is tailored to financial-analyst.
- Prompt does not ask Stitch to call external APIs.

## Review gate before Phase B
- Slot p001 exists under prototypes/2026-06-18-p001-small-group-insurance-shutdown-radar.
- No placeholder bullets remain in spec files.
- The 08:30 job should export to /home/sy/Downloads/stitch_drop/2026-06-18/p001/code.html and /home/sy/Downloads/stitch_drop/2026-06-18/p001/screen.png.

## Prompt
Build a production-grade web app prototype called "Small Group Insurance Shutdown Radar" for US small-business owners comparing 2026 health-insurance renewal shocks. The first screen must be a working financial decision workbench with a renewal shock header, plan comparison grid, employee impact lanes, shutdown-risk meter, broker question packet, owner decision memo, and renewal calendar. Use realistic sample data: 3 employees, owner plus spouse, current $9,800 monthly premium, renewal quote at $13,900, $10k deductible plan, PEO quote, ICHRA option, payroll runway, and a renewal deadline in 19 days. Design direction: use the financial-analyst profile with institutional ink/off-white panels, restrained risk bands, precise comparison tables, and calm decision cues for a high-stakes owner finance call. Do not make a marketing landing page; the first screen must be the working app.
