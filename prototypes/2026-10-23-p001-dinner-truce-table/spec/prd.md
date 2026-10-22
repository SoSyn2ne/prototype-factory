# PRD — 한상 눈치해제

## Product intent

- One-liner: 각자 못 먹는 것·먹고 싶은 양·예산을 익명으로 눌러 공유 메뉴와 개인 메뉴, 굽기·보충 역할까지 20초에 합의하는 외식 테이블.
- Problem evidence: S01. Actual user actions: (1) diners eat less to avoid conflict, (2) one person grills/cuts/refills, (3) groups silently negotiate shared dishes and cost.
- Target user: Korean family groups, mixed-preference friends, foreign residents, and barbecue restaurants.
- Trigger moment: everyone has sat down but no one wants to be the difficult diner.
- User language: “못 먹는 것과 먹을 양은 남 눈치 안 보고 먼저 누르고 싶어요.”
- Three-second sting: four sealed diner chips around an empty table say “또 한 명이 다 굽고, 한 명은 덜 먹나요?”

## Arrival and validation

- Arrival path: restaurant reservation link, table QR, family/chat share before ordering, search phrase “가족 외식 메뉴 정하기”.
- Existing workaround: one loud diner orders, dislikes are disclosed late, or the group over-orders and splits equally.
- Buyer/share audience: restaurants, reservation services, group organizers, and diners.
- First validation test: run 20 mock four-person orders and compare discussion time, unchosen food, and role imbalance against ordinary verbal ordering.
- loved_by_small_group: 4/5 — multigenerational families, mixed-diet friend groups, and visitors to Korean barbecue feel the friction immediately.
- small_group_fit: groups with allergies, small appetites, strict budgets, or recurring grill-duty resentment can decide in one meal whether it helps.

## Core experience

- Format: anonymous tabletop companion.
- Mechanic: sealed appetite chips reveal together, then a center plate composes shared and personal dishes plus rotating table roles.
- Key UX: each diner privately taps avoid, crave, appetite, budget, and willingness to grill/refill; all reveal at once into a table map with individual exceptions and short role rotations.
- First screen: an empty round table with four sealed chips, one 20-second countdown, and no menu catalogue yet.
- Twist: it resolves invisible appetite and labor before menu optimization; nobody's private answer is attributed after reveal.
- Output artifact: table agreement card with order split, portion assumptions, personal dishes, and role rotation.
- Share/revisit loop: invite diners → private chips → reveal → adjust one conflict → dine → share balanced-table card.
- Spread trigger: a graceful “everyone ate enough / roles rotated” table card can be shared with the group or restaurant.

## Required UI sections

- table join
- sealed diner chips
- private preference sheet
- simultaneous reveal
- shared/personal plate composer
- budget split
- grill/refill rotation
- conflict state
- final table card.

## Design system

- Exactly one design profile: premium-editorial.
- Theme: 외로움 — belonging without silently sacrificing appetite or doing all the table labor.
- Reference pattern: anonymous party ballot + Korean shared-table ordering + round-robin chore token.

## Source signals

- S01: https://www.reddit.com/r/Living_in_Korea/comments/1xci38i/going_out_to_eat_in_korea_is_so_much_work/ — Shared-meal etiquette, appetite compromise, and table-labor discussion.

## Interaction rules

- The main interaction must remain sealed appetite chips reveal together, then a center plate composes shared and personal dishes plus rotating table roles.
- The first screen must communicate: four sealed diner chips around an empty table say “또 한 명이 다 굽고, 한 명은 덜 먹나요?”
- The output must be a concrete artifact: table agreement card with order split, portion assumptions, personal dishes, and role rotation.
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

User problem: shared dining etiquette hides hunger, dislikes, and labor. Inflow: table QR or reservation share. Business/validation: restaurant pilot priced per table or reservation integration. Core loop: join → private chips → reveal → compose → rotate roles → confirm. First screen: sealed diners, not a menu. Core screens: private input, reveal table, order composition, final card. Interaction rules: no answer attribution; one conflict at a time; diners can opt out. QA: two-person table, one abstention, allergy conflict, unequal budget, no shared dish, 390px mobile, Korean/English. Risk: the ritual must take less time than conversation.

## Development start prompt

Build a tabletop companion with four mocked diners, private preference states, synchronized reveal, shared-versus-personal dish composition, budget split, rotating grill/refill roles, one conflict resolution, and a shareable table agreement. Do not build a restaurant discovery or menu analytics dashboard.

## Copy/paste-ready Stitch prompt

Create a responsive Korean tabletop companion called “한상 눈치해제” for families, mixed-preference friends, foreign residents, and Korean barbecue restaurants. The observed pull is social: diners report eating less than they want while one person orders, grills, cuts, and refills for everyone. Open on an elegant empty round table with four sealed diner chips and one sentence: “또 한 명이 다 굽고, 한 명은 덜 먹나요?” Each diner privately chooses foods to avoid, one craving, appetite size, budget comfort, and whether they can grill or refill. Flip all chips together after 20 seconds, then compose shared dishes, personal exceptions, a fair budget split, and short rotating table roles. Show allergy conflict, abstention, unequal budget, no-shared-dish, and late-join states. Required sections: join, private chips, synchronized reveal, shared/personal plate map, budget, role rotation, conflict resolution, and final table card. Emotional pressure: belonging without hunger, shame, or invisible labor. Design direction: use the premium-editorial profile with warm paper, deep charcoal type, one muted persimmon accent, refined plate-like cards, 44px controls, gentle reveal motion, and no restaurant-discovery grid or analytics dashboard.
