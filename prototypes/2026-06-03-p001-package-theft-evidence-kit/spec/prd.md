# PRD - Package Theft Evidence Kit

## Problem
- A renter-safe proof kit that turns stolen package chaos into carrier claims, landlord requests, and locker reroutes.
- Source signals: S1, S2, S3 from daily/2026-06-03/ideas.md.

## Target user
- Apartment renters, condo residents, and remote workers whose deliveries disappear from shared mailrooms or unsecured lobbies.

## Key UX
- Log each missing package, collect carrier photos, delivery scans, building messages, and camera-footage requests, then generate claim packets and prevention reroutes.

## Required UI sections
- Incident intake timeline
- Carrier and tracking proof panel
- Building footage request composer
- Neighbor/mailroom notice generator
- Claim packet checklist
- Locker and hold-for-pickup reroute planner
- Repeat-loss heatmap
- Landlord escalation letter preview

## Design profile
- field-ops

## Theme
- 자산 방어

## Constraints
- Time: Phase A spec only; Stitch generation happens in the separate 08:30 job.
- Budget: no custom demo implementation in Phase A.
- Platform: Stitch web prototype prompt, responsive UI.

## Non-goals
- Do not implement a custom demo during Phase A.
- Do not claim market size from the external signals.

## Success metrics
- Stitch prompt can be pasted directly and produce a full first-screen prototype.
- Prototype preserves the named design profile and required sections.
- User can identify the core action in under 10 seconds.

## Stitch prompt
Create a responsive web app prototype called "Package Theft Evidence Kit" for apartment renters and condo residents dealing with stolen or missing packages. The app should turn each missing delivery into an organized incident file with carrier proof, delivery photos, tracking scans, building messages, camera-footage requests, claim steps, and safer reroute options. Required sections: incident intake timeline, carrier and tracking proof panel, building footage request composer, neighbor/mailroom notice generator, claim packet checklist, locker and hold-for-pickup reroute planner, repeat-loss heatmap, and landlord escalation letter preview. Use realistic renter sample data and keep the product practical, non-accusatory, and focused on evidence plus prevention. Design direction: use the `field-ops` profile with rugged mobile-first task cards, strong incident status markers, map-like mailroom cues, and durable controls that feel useful during a stressful delivery dispute.
