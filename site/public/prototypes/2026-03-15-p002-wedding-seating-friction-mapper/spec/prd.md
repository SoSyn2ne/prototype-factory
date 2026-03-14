# PRD — Wedding Seating Friction Mapper

## Problem
Couples (and planners) routinely “finish” the seating chart and then reopen it 10+ times because of social constraints:
- divorced parents who must not share a table,
- an uncle who drinks too much around a cousin,
- friends who *must* sit near each other to feel comfortable,
- ex-partners who can coexist only with distance,
- family members who will read seating placement as a political statement.

Today this lives in scattered text messages, Google Sheets comments, and a planner’s memory. The failure mode is predictable: a high-risk pairing gets missed until the last week, when moving one person forces a cascade.

We need a fast way to capture *pairwise* constraints and surface “friction hotspots” before tables get locked.

## Target user
- Primary: an engaged couple planning their own seating (often in a spreadsheet) who wants to avoid drama and last‑minute reshuffles.
- Secondary: a wedding planner or coordinator who wants a quick “risk map” to sanity-check the couple’s inputs.

## Constraints
- Time: 1-day prototype; friction mapping only (no full seat assignment).
- Budget: $0 (offline, no backend).
- Platform: offline, single HTML file experience (works when opened from disk).

## Non-goals
- Compute an “optimal” table plan or automatically assign guests to tables.
- Model table sizes, distances, venue layout, or family hierarchy rules.
- Support group constraints (“all cousins together”) beyond pairwise links.
- Replace human judgement; the output is a prompt for discussion.

## Success metrics
- A user can enter 25 guests + 20 constraints in under 10 minutes without getting lost.
- After clicking **Map friction**, the user immediately sees:
  - the top 5 “hotspot guests” who will drive most seat-moving,
  - the top 5 highest-impact constraints,
  - at least one “cluster” (tight must-sit-near group) or “landmine” (must-separate ties) they hadn’t noticed.
- Qualitative: users describe it as “helpful for deciding what to talk about” rather than “another spreadsheet”.

## Notes
- Scoring model should stay intentionally simple for the prototype: weights and constraint type feed a friction score per constraint and a summed score per guest.
- The UI should encourage “good enough” constraints:
  - 1 = nice-to-have (preference),
  - 2 = important (strong preference),
  - 3 = non‑negotiable (avoid blow‑ups / key comfort).
- Privacy expectation: wedding guest info is sensitive; offline-by-default avoids the “where is this data going?” question.
