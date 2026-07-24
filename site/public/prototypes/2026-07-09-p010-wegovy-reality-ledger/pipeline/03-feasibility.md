# Stage 4 — Feasibility (stack / effort / risk)

> Goal: know what it costs to build the real thing before committing.

## Prototype vs real product
- Prototype (this pipeline): React client component, all logic in-browser, mock +
  user-entered data, no persistence. Fully deployable on the existing site.
- Real product later: add persistence (localStorage → account), optional
  crowd-sourced clinic price data, PDF/image export of the monthly report.

## Stack
- Frontend: Next.js (existing site) + React + Tailwind
- State / logic: `useState` + pure computation functions (no libraries needed)
- Data source (prototype): mock seed + user input
- Data source (real): localStorage first; a lightweight KV/store only if sharing lands

## Effort estimate
| Piece | Prototype | Real MVP |
|-------|-----------|----------|
| Core logic (cost-per-kg, rate, scenario) | 0.5 day | 1 day (edge cases, units) |
| UI (calc, check-ins, side-effect calendar, report) | 1 day | 2-3 days (polish, mobile) |
| Data/integration | none | 1-2 days (persistence + export) |
| **Total** | **~1.5 days** | **~1 week** |

## Risks
| Risk | Severity | Mitigation |
|------|----------|------------|
| Medical liability / dosing advice | High | Never advise dose; recommend "병원 상담" and frame cost-only |
| Users won't re-enter weekly | Medium | Make the 3-field quick calc valuable on visit 1, no login |
| Clinic prices vary / go stale | Medium | Prototype uses user-entered quotes, not a scraped feed |
| Rebound framing feels shaming | Medium | Neutral, payer-siding copy; "taper/stop" is a valid win |

## Hardest unknown
- Whether people return weekly. The prototype de-risks this by making visit-one
  (the 3-field calc) worth it alone, so weekly logging is upside, not a gate.
