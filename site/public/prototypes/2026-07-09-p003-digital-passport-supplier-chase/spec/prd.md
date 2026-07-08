# PRD - Digital Passport Supplier Chase

## One-liner
Small exporters turn EU product-passport uncertainty into a supplier checklist, QR data gap map, and escalation script.

## Problem
SME exporters, textile/electronics suppliers, sourcing managers, and operations teams preparing for EU DPP obligations. are reacting to fresh market/community signals but still solve the work with scattered screenshots, invoices, threads, or ad hoc spreadsheets. The prototype should turn that repeated pain into one focused first-screen workflow.

## Target user
SME exporters, textile/electronics suppliers, sourcing managers, and operations teams preparing for EU DPP obligations.

## Key UX
A chase board shows which supplier data is missing, what QR fields are blocked, and which email/script should be sent next.

## Required UI sections
- Product passport readiness score
- Supplier data gap matrix
- QR field checklist: materials, repair, lifecycle, identifiers
- Escalation email composer
- Audit trail and deadline lane

## Design profile
- field-ops

## Theme
- EU compliance / supplier coordination

## Source signal references
S5: GitHub trending: OfficeCLI, office files built for AI agents (GitHub Trending, captured 2026-07-09 KST) https://github.com/trending
S10: EU Digital Product Passport registry and requirements loom for SMEs selling regulated goods (CarbonBright / Greenly / Packaging Digest 2026 DPP guides) https://www.carbonbright.co/insight/digital-product-passport-dpp-how-to-prepare-for-compliance-in-2026

## Reference pattern
- compliance checklist + field follow-up board

## Twist
- Turns confusing DPP policy into a tactile supplier chase workflow instead of a static compliance explainer.

## Small group fit
- Exporters with a handful of SKUs can test it manually before buying heavy compliance software.

## Spread trigger
- The gap map can be sent to suppliers as a clear ask list, making the tool naturally collaborative.

## Copy/paste Stitch prompt
Create a field-ops compliance tool called “Digital Passport Supplier Chase” for SME exporters preparing EU Digital Product Passport records. Show a readiness score, supplier gap matrix, QR data checklist, escalation email composer, deadline lane, and audit trail. Design direction: use the field-ops profile with disciplined steel/slate styling, high-contrast status rows, large action controls, and urgent colors only for small deadline badges.

## Non-goals
- Do not implement a custom local demo in Phase A.
- Do not present source signals as proof of market size.
- Do not turn the product into a generic dashboard without the specific trigger and workflow.

## Success metrics
- A viewer understands the target user and core action within 5 seconds.
- The primary workflow can be inferred from the first screen without explanatory marketing copy.
- The Stitch output preserves the assigned design profile and includes all required sections.
