# PRD — Permit Hot Potato

## Product intent

- One-liner: 한 명이 건설안을 내면 나머지는 비밀 이해관계자로 20초씩 양보를 요구하고, 계획을 망치지 않은 채 네 표를 모아야 하는 협상 파티게임.
- Problem evidence: S13. Actual user actions: (1) play a bureaucracy-heavy city sandbox, (2) negotiate concessions, (3) share rage-inducing delays and tradeoffs.
- Target user: friends, classrooms, streamers, planners, and urban-policy communities.
- Trigger moment: the mayor reveals a seemingly perfect project and the first objection clock starts.
- User language: “네 표를 얻되, 원래 짓고 싶던 건 남겨야 해요.”
- Three-second sting: a beautiful park sits under four locked vote stamps and the line “20초마다 하나를 양보하세요.”

## Arrival and validation

- Arrival path: browser-game portals, classroom civics links, streamer clips, party-game communities.
- Existing workaround: dense city builders, debate games, or improvised role-play with no visible consequence.
- Buyer/share audience: party-game players, educators, event hosts, and viewers.
- First validation test: run 30 four-player rounds; measure rule comprehension under 15 seconds, negotiation completion, laughter/fail clips, and rematch rate.
- loved_by_small_group: 4/5 — urbanism nerds, civics classes, tabletop groups, and streamers enjoy arguing over tradeoffs.
- small_group_fit: four people can play from a link without learning a city simulation.

## Core experience

- Format: timed multiplayer negotiation party game.
- Mechanic: one proposal, four secret interests, one concession per player, simultaneous vote, visible project deformation.
- Key UX: deal proposal → secret role reveal → timed demand → drag one concession onto the plan → simultaneous stamps → side-effect burst → clip/rematch.
- First screen: one attractive proposal, four sealed stakeholder cards, four vote stamps, and a 20-second rule.
- Twist: concessions physically mutate the shared plan, so “winning” with an unrecognizable project is a comic failure.
- Output artifact: deformed before/after proposal poster, vote breakdown, and seven-second failure clip.
- Share/revisit loop: propose → object → concede → stamp → explode side effects → clip → swap mayor → rematch.
- Spread trigger: every failed vote produces a 7-second “concession pile” clip showing who killed the project and why.
- Dopamine hook: thumping objection timer, magnetic concession snap, last-second stamp flip, absurd side-effect pop, seven-second recap, rematch under ten seconds.

## Required UI sections

- room code
- proposal board
- secret interest cards
- demand timer
- concession tray
- vote stamps
- side-effect burst
- result poster
- clip preview
- instant rematch.

## Design system

- Exactly one design profile: playful-experimental.
- Theme: 역전 — a tiny stakeholder card can overturn the mayor's grand plan.
- Reference pattern: city hearing + Hot Potato timer + simultaneous party-game vote.

## Source signals

- S13: https://news.hada.io/topic?id=35727 — Permit Pending makes concessions, public hearings, and votes playable.

## Interaction rules

- The main interaction must remain one proposal, four secret interests, one concession per player, simultaneous vote, visible project deformation.
- The first screen must communicate: a beautiful park sits under four locked vote stamps and the line “20초마다 하나를 양보하세요.”
- The output must be a concrete artifact: deformed before/after proposal poster, vote breakdown, and seven-second failure clip.
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

Opportunity: policy conflict is inherently dramatic when consequences are visible. Inflow: party link, stream, or classroom. Validation: comprehension/rematch/clips. Core loop: proposal → roles → demands → concessions → vote → result. First screen teaches the whole rule. Rules: one demand and one concession each; no real political persuasion data. QA: late join, tie, all-no, over-conceded plan, color blindness, reduced motion, classroom-safe names. Risk: complexity; keep each card to one sentence.

## Development start prompt

Build a four-player browser party-game simulation with proposal, secret interests, 20-second demand turns, drag-and-snap concessions, simultaneous vote stamps, visible plan deformation, side-effect burst, seven-second recap, mayor swap, and instant rematch.

## Copy/paste-ready Stitch prompt

Create a responsive four-player party game called “Permit Hot Potato.” The entire rule must fit in one sentence on the first screen: “Win four votes, but do not concede away the thing you wanted to build.” Open on a beautiful riverside park proposal surrounded by four locked vote stamps and four sealed stakeholder cards. The mayor reveals the plan; each player sees one secret interest, gets 20 seconds to demand one concession, and the mayor drags exactly one change onto the shared plan. After four rounds, all stamps flip together. Make concessions visibly deform the project—parking swallows the trees, height limits crush housing, noise walls block the river—so winning an absurd plan is also funny. Include tie, all-no, over-conceded, surprise-support, classroom-safe, reduced-motion, seven-second recap, mayor swap, and rematch states. Required sections: room, proposal, secret cards, timer, concession tray, vote stamps, side effects, result poster, clip, and rematch. Design direction: use the playful-experimental profile with deep plum, one hot coral accent, oversized stamps, chunky 12px cards, elastic snap motion, stable central geometry, and no city-management dashboard or copied SimCity branding.
