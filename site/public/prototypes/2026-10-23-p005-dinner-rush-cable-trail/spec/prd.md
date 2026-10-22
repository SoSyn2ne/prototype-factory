# PRD — Dinner Rush Cable Trail

## Product intent

- One-liner: POS·KDS·배달 태블릿·라우터에 붙인 QR/NFC 태그를 따라 60초 안에 끊긴 연결을 찾고 수동 서비스로 우회하는 식당 현장 키트.
- Problem evidence: S06. Actual user actions: (1) reboot several devices, (2) unplug cables at random, (3) wait 45 minutes for support while switching to paper.
- Target user: independent restaurants, general managers, shift leads, POS/KDS installers, and support desks.
- Trigger moment: a POS or kitchen screen goes blank during peak service.
- User language: “다 뽑지 말고, 지금 이 화면에서 어느 선부터 따라가죠?”
- Three-second sting: “KDS 2 offline · 46 open tickets” sits over a floor path with one flashing tagged cable.

## Arrival and validation

- Arrival path: restaurant-owner communities, POS/KDS installers, managed-service partners, search phrase “POS down dinner rush”.
- Existing workaround: handwritten cable labels, photos in staff chat, vendor phone trees, and “restart everything”.
- Buyer/share audience: restaurant owners, hospitality MSPs, POS vendors, and franchise operators.
- First validation test: stage five common failures in a mock restaurant and compare recovery time and accidental disconnections against unlabeled troubleshooting.
- loved_by_small_group: 5/5 — independent restaurants with many vendor devices lose money and staff confidence during each outage.
- small_group_fit: restaurants with 8–20 networked endpoints are too complex for memory but too small for a dedicated sysadmin.

## Core experience

- Format: QR/NFC label kit plus offline field companion.
- Mechanic: scan the dead endpoint, walk a highlighted physical cable trail, test one edge at a time, then activate a role-specific manual service mode.
- Key UX: endpoint scan → last-good edge → physical walk → one safe test → recovered or paper mode → support trail export.
- First screen: one failed KDS, remaining open tickets, a 60-second clock, and the next physical tag to scan.
- Twist: the room and tagged cables are the interface; the screen never asks a manager to interpret a network dashboard.
- Output artifact: printable label sheet, live cable trail, manual-service role card, and support-ready action log.
- Share/revisit loop: scan → walk → test → recover or enter paper mode → attach trail to vendor ticket → update label after repair.
- Spread trigger: a vendor-ready trail card names the failed edge and every action already tried; staff can also share the paper-service route.

## Required UI sections

- dinner-rush header
- device constellation
- scan entry
- physical route
- one-edge test
- do-not-unplug warning
- recovered state
- paper-service mode
- open-ticket preservation
- support export
- offline state.

## Design system

- Exactly one design profile: field-ops.
- Theme: 자산 방어 — protect the dinner rush and staff attention.
- Reference pattern: cable toner + airport wayfinding + restaurant fire-drill card.

## Source signals

- S06: https://www.reddit.com/r/restaurantowners/comments/1xa0at0/i_didnt_open_a_restaurant_to_become_a_parttime/ — Restaurant managers troubleshoot many networked devices during service.

## Interaction rules

- The main interaction must remain scan the dead endpoint, walk a highlighted physical cable trail, test one edge at a time, then activate a role-specific manual service mode.
- The first screen must communicate: “KDS 2 offline · 46 open tickets” sits over a floor path with one flashing tagged cable.
- The output must be a concrete artifact: printable label sheet, live cable trail, manual-service role card, and support-ready action log.
- Unsupported certainty, hidden state changes, and generic dashboard framing are prohibited.
- Error, empty, incomplete, offline, recovery, and accessible states must be explicit.

## Constraints and non-goals

- Phase A contains no custom demo and calls no external LLM API.
- The prototype does not claim market size from source signals.
- The prototype does not replace emergency, legal, financial, medical, or platform authority.
- The assigned design profile must not be mixed with a second PF profile.

## Success metrics

- A first-time user understands the main action in under 15 seconds.
- The first validation test can be run with mocked/local data.
- The output artifact is legible on a 390px mobile viewport and in a desktop screenshot.
- Users can explain the recovery or fallback state without operator help.

## Screenshot QA

- First-screen sting is visible above the fold.
- One primary accent, one radius system, consistent 40–48px controls, and explicit states.
- No marketing hero, generic KPI grid, decorative gradient, or placeholder copy.
- Profile-specific direction remains visible at 1440px and 390px.

## Plan brief

User problem: multi-vendor hardware turns managers into network technicians. Inflow: POS installer or outage search. Business: label kit plus subscription/MSP bundle. Core loop: scan endpoint → trace one edge → test → recover/fallback → export. First screen: service impact and next tag. Rules: never power-cycle an unverified device; preserve ticket counts; offline-first. QA: dead router, loose Ethernet, one tablet only, mislabeled cable, no internet, wet hands, dark kitchen, 48px controls. Risk: real wiring varies; prototype uses a mocked topology.

## Development start prompt

Build an offline-first restaurant field companion with a mocked floor topology, QR/NFC scan simulation, one failed KDS, one-edge-at-a-time trace, do-not-unplug warnings, recovery, paper-service mode, preserved ticket count, and vendor-ready action export. Avoid a network-monitoring dashboard.

## Copy/paste-ready Stitch prompt

Create a responsive restaurant field app called “Dinner Rush Cable Trail” for independent owners and general managers who have become part-time sysadmins for delivery tablets, KDS screens, POS terminals, and a Friday-night router. Start during service: “KDS 2 offline · 46 open tickets · 60 seconds to paper mode.” Show a simple floor route, not a network diagram. The manager scans the KDS tag, follows the next glowing QR/NFC tag to one switch port and one cable, performs exactly one safe test, and either restores service or activates role-specific paper tickets without losing open-order counts. Include a wrong-tag state, do-not-unplug warning, dead-router branch, isolated-tablet branch, offline mode, wet-hand controls, and a vendor-ready trail of actions already tried. Required sections: rush header, endpoint scan, physical route, one-edge test, recovery, paper mode, ticket preservation, support export, and device-label preview. Emotional pressure: revenue and staff trust disappearing while support is on hold. Design direction: use the field-ops profile with warm off-white and graphite, one high-visibility green action accent, reserved red for stop warnings, 48px touch targets, bold route arrows, durable 8px panels, and no abstract topology graph or KPI dashboard.
