# PRD - 8a Eligibility Change Radar

## Problem
- A procurement eligibility workbench for small firms worried a 2026 SBA rule shift will break their certification story.
- Evidence: S3 (SBA 8(a) proposed rule changes disadvantage presumption; Federal Register, 2026-06-11); S4 (2026 laws can create legal risk for small businesses; Rocket Lawyer, 2026).

## Target user
- Small federal contractors, 8(a) applicants, certification consultants, and founders who rely on disadvantaged-business status for pipeline access.

## Key UX
- Founder maps current certification claims, owner narrative, contract pipeline, missing proof, and comment deadlines into a risk-ranked eligibility action board.

## Required UI sections
- Rule-change alert bar with comment deadline and impact tier
- Current certification profile and owner-control proof checklist
- Pipeline exposure table by contract, agency, NAICS, and bid date
- Narrative evidence mapper for disadvantage claims and supporting documents
- Gap queue for affidavits, financials, ownership, and mentor-protege issues
- Advisor handoff packet with questions for counsel or PTAC/SBDC
- Scenario toggle for proposed rule passes, changes, or stalls

## Assigned design profile
- financial-analyst

## Theme
- 자산 방어 / 역전 - procurement access, certification risk, status preservation, and fear of losing a narrow contracting edge.

## Practical vs fun label
- Practical / Commercial

## Stitch prompt
Build a production-grade web app prototype called "8a Eligibility Change Radar" for small federal contractors tracking 2026 SBA 8(a) eligibility uncertainty. The first screen must be a working procurement risk workbench with a rule-change alert bar, current certification profile, pipeline exposure table, narrative evidence mapper, gap queue, advisor handoff packet, and scenario toggles. Use realistic sample data: disadvantaged-business certification, three open agency opportunities, owner narrative documents, missing tax records, mentor-protege note, Federal Register comment deadline, and counsel review status. Design direction: use the financial-analyst profile with institutional ink/off-white panels, confidence bands, precise regulatory timelines, and calm high-signal comparison tables. Do not make a marketing landing page; the first screen must be the working app.

## Constraints
- Time: Phase A only; do not implement custom demo before Stitch export.
- Budget: Use existing PF scaffolding and generated Stitch output.
- Platform: Web prototype exported from Stitch into the expected drop folder.

## Non-goals
- No custom demo implementation during Phase A.
- No external LLM API calls.
- Do not claim market size from these sources; treat them as problem evidence.

## Success metrics
- Stitch output has all required sections on the first working screen.
- The prototype preserves the assigned design profile.
- The main workflow is visible without a marketing landing page.

## Notes
- Expected Stitch drop folder: /home/sy/Downloads/stitch_drop/2026-06-17/p002/
