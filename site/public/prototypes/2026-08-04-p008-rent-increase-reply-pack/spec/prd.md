# PRD — Rent-Increase Reply Pack with Market Comps

## Problem
- 미국 임차인은 rent $300 인상 통보 → 1) 시장 comps 2) counter 3) 3 시나리오 4) letter 3-pack 5) state law — 를 매번 새로 함. 07-30의 KR 갱신 협상 3시나리오는 KR 전세, 오늘은 US + comps + state law.

## Target user
- 미국 1·2인 가구, 임대 갱신 시즌 (5~8월) 임차인.

## Arrival path
- r/personalfinance + r/Landlord + Zillow → 본 도구.

## Business / validation route
- 무료 + 이사 서비스 referral + tenant insurance partner.

## Core loop
- input → comps 5 → counter slider → 3 시나리오 → letter → state law.

## First screen
- input + comps 5.

## Key screens
- input, comps, counter, scenarios, letter, state law, move-out.

## Interaction rules
- 모바일 1-hand. 1분 안에 comps 5 + counter 1개.

## Output artifact
- 1-pager PNG/PDF + reply templates / report packet

## Share / return loop
- "내 renewal comps -$120 → counter OK" X 공유.

## Constraints
- Time: prototype-only Phase A
- Budget: no paid APIs
- Platform: web responsive + mobile-first where applicable

## Non-goals
- Live scraping / live LLM calls
- Fulfilling any real legal / insurance / contractual effect

## Success metrics
- Recovery / score feels useful on real pasted input
- Recipients can copy 1-pager and templates without edits

## QA / screenshot criteria
- comps 정확도 (Zillow/Redfin freshness), letter 자연스러움, state law 정확도.

## Design profile
- financial-analyst

## Theme
- 자산 방어 (임대료 + 이사 비용)

## Source signals
- S11

## Development start prompt

```text
You are Codex working in the prototype-factory repo. Build "Rent-Increase Reply Pack with Market Comps" as a polished local HTML/React prototype from this PRD.

Goal:
- A US renter enters current rent + city/zip + lease end date and gets 5 market comps (mocked), a counter-offer slider (-$200..$200), a 3-scenario cost compare (stay at increase / counter / move-out), 3 reply letters (polite decline / polite counter / firm decline), and a state tenant law 1-pager.

Implementation constraints:
- Use a financial-analyst profile: ink/graphite, restrained cards, 2:1 number/unit hierarchy, no fake precision, one quiet accent.
- The comps must be clearly labeled "sample" or "static"; do not pretend to scrape Zillow/Redfin.
- The 3-scenario compare must show cumulative 12-month cost honestly (deposit + moving + new rent); do not hide moving cost.
- The state law 1-pager must be a separate tab/toggle, not a footer; keep the legal wording conservative and disclaimer visible.
- The reply letter composer must be tone-aware and copyable; do not invent clauses.
- No external paid APIs; mock comps and state law snippets from a small static dataset.
- Verify with build/typecheck, then run a Puppeteer desktop + mobile screenshot QA pass.
```

## Notes
- 5명 임차인이 "이미 Zillow로 comps 봤다"고 답하면 kill.
