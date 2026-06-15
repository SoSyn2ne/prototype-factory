# QA checklist

## Happy path
- Open the Stitch-generated app and confirm the first screen is the working app, not a landing page.
- Confirm these sections exist: Staple basket savings header by store and week; Receipt scan inbox with detected item, paid price, shelf-tag claim, and correction status; Local price map for milk, eggs, rice, chicken, produce, diapers, and household staples; Stock-up threshold tracker using household inventory and historical low prices; Trip tradeoff planner balancing savings, distance, cold-chain time, and Uber/gas cost; Error dispute card for overcharge proof, photo, receipt line, and service-desk script; Shareable neighborhood price board with confidence and last-seen date.
- Confirm realistic sample data reflects: S11, S12.
- Confirm design direction follows financial-analyst.

## Edge cases
- Missing source evidence still leaves a clear next action.
- High-risk or urgent rows/chips do not visually overlap other UI.
- Mobile/tablet view keeps controls readable.
- The output artifact can be exported, copied, or shared in the prototype.

## Acceptance verification
- pNNN slot exists with no placeholders in meta.json and spec files.
- Stitch prompt is copy/paste-ready.
- Drop folder target is /home/sy/Downloads/stitch_drop/2026-06-16/p006/.
