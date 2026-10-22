# Dinner Rush Cable Trail

POS·KDS·배달 태블릿·라우터에 붙인 QR/NFC 태그를 따라 60초 안에 끊긴 연결을 찾고 수동 서비스로 우회하는 식당 현장 키트.

## Phase A status

- Status: phase-a
- Prototype type: practical-commercial
- Market: Global
- Design profile: field-ops
- Theme: 자산 방어 — protect the dinner rush and staff attention.
- Custom demo: intentionally not created in Phase A
- Expected Stitch input: /home/sy/Downloads/stitch_drop/2026-10-23/p005/code.html and screen.png

## Target user

independent restaurants, general managers, shift leads, POS/KDS installers, and support desks.

## Key UX

endpoint scan → last-good edge → physical walk → one safe test → recovered or paper mode → support trail export.

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

## Source signals

- S06: https://www.reddit.com/r/restaurantowners/comments/1xa0at0/i_didnt_open_a_restaurant_to_become_a_parttime/ — Restaurant managers troubleshoot many networked devices during service.

## Development start prompt

Build an offline-first restaurant field companion with a mocked floor topology, QR/NFC scan simulation, one failed KDS, one-edge-at-a-time trace, do-not-unplug warnings, recovery, paper-service mode, preserved ticket count, and vendor-ready action export. Avoid a network-monitoring dashboard.

## Stitch prompt

Create a responsive restaurant field app called “Dinner Rush Cable Trail” for independent owners and general managers who have become part-time sysadmins for delivery tablets, KDS screens, POS terminals, and a Friday-night router. Start during service: “KDS 2 offline · 46 open tickets · 60 seconds to paper mode.” Show a simple floor route, not a network diagram. The manager scans the KDS tag, follows the next glowing QR/NFC tag to one switch port and one cable, performs exactly one safe test, and either restores service or activates role-specific paper tickets without losing open-order counts. Include a wrong-tag state, do-not-unplug warning, dead-router branch, isolated-tablet branch, offline mode, wet-hand controls, and a vendor-ready trail of actions already tried. Required sections: rush header, endpoint scan, physical route, one-edge test, recovery, paper mode, ticket preservation, support export, and device-label preview. Emotional pressure: revenue and staff trust disappearing while support is on hold. Design direction: use the field-ops profile with warm off-white and graphite, one high-visibility green action accent, reserved red for stop warnings, 48px touch targets, bold route arrows, durable 8px panels, and no abstract topology graph or KPI dashboard.
