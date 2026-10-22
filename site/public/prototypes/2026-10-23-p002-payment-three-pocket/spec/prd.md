# PRD — 결제 3칸 포켓

## Product intent

- One-liner: 여행 전 세 곳을 골라 카드·교통카드·현금의 주·백업·비상 순서를 실제 실패 장면으로 익히고 오프라인 포켓카드로 가져가는 결제 리허설.
- Problem evidence: S02. Actual user actions: (1) carry excess cash, (2) compare T-money and WOWPASS in forums, (3) collect airport top-up and foreign-card exceptions.
- Target user: first-time Korea visitors, exchange students, older travelers, and hotels onboarding guests.
- Trigger moment: the traveler is packing and cannot tell which payment method works where.
- User language: “카드가 안 되면 뭘 먼저 꺼내야 하는지 출국 전에 알고 싶어요.”
- Three-second sting: a subway gate rejects the foreign card while three empty pockets ask “다음 수단은?”

## Arrival and validation

- Arrival path: pre-trip checklist, airline/hotel welcome email, Korea travel communities, search phrase “한국 여행 결제 뭐 준비”.
- Existing workaround: screenshots, blog lists, several cards, cash envelopes, and asking again at each counter.
- Buyer/share audience: travelers, hotels, airlines, tour operators, and travel insurers.
- First validation test: test 15 visitors on subway, convenience-store, and small-market scenarios; measure correct fallback selection and cash over-carry intention.
- loved_by_small_group: 4/5 — first-time visitors with foreign cards and tightly budgeted itineraries fear being stranded at transit gates.
- small_group_fit: visitors who have never used Korean transit can validate value before landing.

## Core experience

- Format: interactive rehearsal plus printable/offline wallet card.
- Mechanic: drag payment tools into Primary, Backup, and Emergency pockets, then survive three realistic failure cards.
- Key UX: choose three upcoming stops, arrange payment tools, flip failure scenarios, correct the sequence, then download a minimal offline card with exact fallback order and Korean help phrases.
- First screen: one rejected subway gate, three empty pockets, and the traveler's actual next three stops.
- Twist: it teaches action order through failure instead of comparing payment products in a static article.
- Output artifact: bilingual offline three-pocket payment card tied to three planned stops.
- Share/revisit loop: rehearse → save card → share with companion → mark which fallback actually worked → update the card.
- Spread trigger: a bilingual three-pocket card can be saved offline and forwarded to travel companions.

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

## Design system

- Exactly one design profile: calm-consumer.
- Theme: 자산 방어 — prevent payment panic and unnecessary cash exposure.
- Reference pattern: emergency go-bag + card-game rehearsal + travel phrase card.

## Source signals

- S02: https://www.reddit.com/r/koreatravel/comments/1xax1wj/apps_for_money/ — Traveler payment panic and improvised card, cash, and transit backups.

## Interaction rules

- The main interaction must remain drag payment tools into Primary, Backup, and Emergency pockets, then survive three realistic failure cards.
- The first screen must communicate: a subway gate rejects the foreign card while three empty pockets ask “다음 수단은?”
- The output must be a concrete artifact: bilingual offline three-pocket payment card tied to three planned stops.
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

User problem: payment knowledge is fragmented by place and top-up method. Inflow: trip confirmation or community search. Business: hotel/tour onboarding kit. Core loop: choose stops → place tools → face failures → correct → save offline. First screen: a failed gate, not a comparison table. Interaction rules: no claim that a card is universally accepted; always show observation date and cash safety. QA: no NFC phone, no airport kiosk, empty transit balance, lost card, offline state, two languages, large text. Risk: acceptance rules change.

## Development start prompt

Build a mobile travel rehearsal with three mocked destinations, draggable payment methods, Primary/Backup/Emergency pockets, failure flips, corrective feedback, Korean help phrases, and an offline card preview. Keep acceptance claims caveated and dated.

## Copy/paste-ready Stitch prompt

Create a mobile-first Korea travel companion called “결제 3칸 포켓” for first-time visitors who are panicking over T-money, WOWPASS, foreign cards, cash, and airport-only top-up rules. Start at a subway gate that rejects a foreign card; beside it are three empty pockets labeled 주수단, 백업, 비상. Let the traveler choose their next three stops—a subway gate, convenience store, and small market—then drag their real payment tools into the pockets. Flip realistic failure cards one at a time, explain only the next safe action, and let the traveler correct the order. Finish with a bilingual offline wallet card containing the three-stop sequence, top-up caveats, a conservative cash note, and Korean help phrases. Include no-NFC-phone, empty transit balance, lost card, closed kiosk, and companion-share states. Required sections: stops, tool tray, three pockets, failure cards, correction, caveats, phrase strip, offline card, and share. Emotional pressure: being stranded or exposing too much cash. Design direction: use the calm-consumer profile with warm white and pale sage surfaces, one clear teal accent, large friendly pockets, 48px drag targets, explicit offline state, and no fintech charts, product ranking, or glossy travel hero.
