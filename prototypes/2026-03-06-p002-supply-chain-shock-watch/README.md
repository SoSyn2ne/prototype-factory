# Supply Chain Shock Watch

Supply Chain Shock Watch is an operator-focused risk triage dashboard for vendor-part-product dependencies. It helps supply chain teams quickly detect single points of failure, simulate updated risk posture, and prioritize mitigation steps.

## Status
- prototype (spec + interactive demo)

## What this prototype demonstrates
- A dependency table for `Vendor -> Part -> Product` with criticality and alternatives.
- A calculated `Shock Score (0-100)` derived from average criticality and SPOF exposure.
- Fast filtering by vendor and `SPOF only` mode.
- Inline row edits that immediately recalculate risk and recommendations.
- Actionable mitigation suggestions tied to the current filtered view.

## Folder map
- `spec/`: decision artifacts (PRD, assumptions, falsification, QA checklist)
- `demo/`: vanilla HTML/CSS/JS interactive operator dashboard
- `meta.json`: prototype metadata

## Run demo
1. Open `demo/index.html` in a browser.
2. Use vendor filter and `SPOF only` checkbox.
3. Edit `Criticality` or `Alternatives` in the table and observe live score changes.

## Build notes
- No build step required.
- No external network calls, CDNs, or font dependencies are used.
<!-- Summary: Replaced placeholder docs with concrete Supply Chain Shock Watch specs and implemented an interactive operator dashboard with seeded dependency data, live Shock Score, filtering, inline editing, and dynamic mitigation suggestions. -->
