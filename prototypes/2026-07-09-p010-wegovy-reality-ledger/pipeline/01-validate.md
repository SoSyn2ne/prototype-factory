# Stage 2 — Validate (cheap test)

> Goal: prove the pull is real BEFORE building. Mark every result KNOWN /
> ASSUMPTION / UNKNOWN.

## Idea
- Wegovy Reality Ledger (2026-07-09-p010)

## Pull hypothesis (falsifiable)
- Korean GLP-1 users already track weight, side-effect days, and clinic prices
  by hand in community threads and notes apps, and would use a tool that turns
  those scattered logs into a single "1kg당 비용 + 계속/감량/중단" decision.

## Cheap tests (run these; ≤ 1 day each)
- [x] Search-demand check: keywords, autocomplete, community volume
- [x] Community probe: read active threads, count real logging behavior
- [ ] Fake-door / landing: cost-per-kg calculator link posted to one thread — NOT YET RUN
- [x] Competitor teardown: what existing diet apps miss

## Results
| Test | Metric | Result | Verdict |
|------|--------|--------|---------|
| Search / community | Active Korean threads trading price + side-effect + yo-yo logs | 팬마음/여신티켓/닥터나우/WorkingUS threads with month-by-month logs, "위고비 가격 얼마", "위고비 부작용 기록", "호갱 탈출" language | KNOWN — verified via S19 signal sweep (2026-07-09) |
| Manual substitute | People already keep logs by hand | Users post weekly weight + side-effect diaries and screenshot clinic quotes (prices vary per hospital, 40만원+/월) | KNOWN — observed behavior |
| Competitor teardown | Do diet apps show cost-per-kg + side-effect ledger? | Generic diet/health apps track weight but NOT drug cost-per-kg, side-effect calendars, or a taper decision | ASSUMPTION — spot-checked, not exhaustive |
| Fake-door click-through | % who click "이번 달 1kg당 비용 계산" | Not run — needs a live link drop in a community thread | UNKNOWN |

## Kill / continue
- Pull evidence score (1-5): **4** — direct logging behavior + price-shopping is
  confirmed; only the fake-door conversion number is still UNKNOWN.
- Decision: **continue to Spec.** The manual workaround is real and specific.
- Why: The tool doesn't have to create the habit — the habit (hand-kept logs)
  already exists. It only has to compute the number those logs are reaching for.
- Cheapest next real-world test (post-prototype): drop the cost-per-kg calc link
  in one thread, measure completed entries.
