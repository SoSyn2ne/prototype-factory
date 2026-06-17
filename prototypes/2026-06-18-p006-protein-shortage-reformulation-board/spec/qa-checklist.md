# QA checklist

## Phase A completeness
- Title is present: Protein Shortage Reformulation Board
- One-liner is present: Snack brands model whey price spikes, GLP-1 appetites, and pack-size changes before margins melt.
- Target user is present: Small CPG founders, nutrition-bar brands, food R&D teams, contract manufacturers, and category managers exposed to whey-price volatility.
- Key UX is present: Brand manager enters recipe, pack size, protein claim, whey cost, alternative ingredients, and GLP-1 consumer target; the app compares reformulation, shrink, price, and margin paths.
- Assigned design profile is exactly one profile: operator-dense
- Theme is present: 건강 / 자산 방어 / 역전 - protein demand, margin defense, and product repositioning under GLP-1 eating shifts.
- Source signal references are present:
- S11: Protein craze and GLP-1 behavior create whey shortage pressure (https://apnews.com/article/c5638b9d65b0fa5967488852993d76db)
- S12: Food brands redesign packs for smaller GLP-1 appetites (https://www.alixpartners.com/insights/102mndi/glp-1-and-the-snack-sector-disruptive-trend-not-existential-threat/)
- Copy/paste-ready Stitch prompt is present.

## Stitch prompt acceptance
- First screen is the working app, not a landing page.
- Required UI sections appear in the prompt.
- Sample data is realistic and tied to the source signals.
- Design direction sentence is tailored to operator-dense.
- Prompt does not ask Stitch to call external APIs.

## Review gate before Phase B
- Slot p006 exists under prototypes/2026-06-18-p006-protein-shortage-reformulation-board.
- No placeholder bullets remain in spec files.
- The 08:30 job should export to /home/sy/Downloads/stitch_drop/2026-06-18/p006/code.html and /home/sy/Downloads/stitch_drop/2026-06-18/p006/screen.png.

## Prompt
Build a production-grade web app prototype called "Protein Shortage Reformulation Board" for small snack and nutrition brands facing whey price spikes and GLP-1-driven eating shifts. The first screen must be a working CPG operations board with an ingredient shock header, recipe cost stack, GLP-1 pack strategy board, claim compliance checklist, scenario grid, retail buyer memo, and taste-risk panel notes. Use realistic sample data: 12g protein bar, whey isolate shortage, 250% cost spike scenario, smaller single-serve pack, fiber-forward variant, contract manufacturer lead time, and margin target. Design direction: use the operator-dense profile with compact cost tables, disciplined production-console styling, tabular numbers, muted industrial neutrals, and one sharp accent for the recommended reformulation path. Do not make a marketing landing page; the first screen must be the working app.
