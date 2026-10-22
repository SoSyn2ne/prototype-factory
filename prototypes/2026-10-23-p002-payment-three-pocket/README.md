# 결제 3칸 포켓

여행 전 세 곳을 골라 카드·교통카드·현금의 주·백업·비상 순서를 실제 실패 장면으로 익히고 오프라인 포켓카드로 가져가는 결제 리허설.

## Phase A status

- Status: phase-a
- Prototype type: practical-commercial
- Market: Korea
- Design profile: calm-consumer
- Theme: 자산 방어 — prevent payment panic and unnecessary cash exposure.
- Custom demo: intentionally not created in Phase A
- Expected Stitch input: /home/sy/Downloads/stitch_drop/2026-10-23/p002/code.html and screen.png

## Target user

first-time Korea visitors, exchange students, older travelers, and hotels onboarding guests.

## Key UX

choose three upcoming stops, arrange payment tools, flip failure scenarios, correct the sequence, then download a minimal offline card with exact fallback order and Korean help phrases.

## Required UI sections

- trip stops
- payment-tool tray
- three pockets
- failure cards
- airport-only caveat
- transit-balance note
- Korean phrase strip
- offline preview
- companion share.

## Source signals

- S02: https://www.reddit.com/r/koreatravel/comments/1xax1wj/apps_for_money/ — Traveler payment panic and improvised card, cash, and transit backups.

## Development start prompt

Build a mobile travel rehearsal with three mocked destinations, draggable payment methods, Primary/Backup/Emergency pockets, failure flips, corrective feedback, Korean help phrases, and an offline card preview. Keep acceptance claims caveated and dated.

## Stitch prompt

Create a mobile-first Korea travel companion called “결제 3칸 포켓” for first-time visitors who are panicking over T-money, WOWPASS, foreign cards, cash, and airport-only top-up rules. Start at a subway gate that rejects a foreign card; beside it are three empty pockets labeled 주수단, 백업, 비상. Let the traveler choose their next three stops—a subway gate, convenience store, and small market—then drag their real payment tools into the pockets. Flip realistic failure cards one at a time, explain only the next safe action, and let the traveler correct the order. Finish with a bilingual offline wallet card containing the three-stop sequence, top-up caveats, a conservative cash note, and Korean help phrases. Include no-NFC-phone, empty transit balance, lost card, closed kiosk, and companion-share states. Required sections: stops, tool tray, three pockets, failure cards, correction, caveats, phrase strip, offline card, and share. Emotional pressure: being stranded or exposing too much cash. Design direction: use the calm-consumer profile with warm white and pale sage surfaces, one clear teal accent, large friendly pockets, 48px drag targets, explicit offline state, and no fintech charts, product ranking, or glossy travel hero.
