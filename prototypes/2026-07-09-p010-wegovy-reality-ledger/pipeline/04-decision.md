# Stage 6 — Go / No-Go

> Goal: an evidence-backed decision, not a vibe.

## Decision
- **GO (build a real MVP)**
- Date: 2026-07-24

## Evidence summary
- Pull (validate stage): Score 4/5. Korean GLP-1 communities already keep
  month-by-month weight + side-effect logs and shop clinic prices by hand
  (KNOWN). Only the fake-door conversion number is still UNKNOWN.
- Utility (does the prototype compute a number worth having?): Yes. The
  interactive prototype computes cost-per-kg, recent loss rate, and an N-month
  scenario the user cannot get from any diet app — and turns it into a
  continue/taper/stop call. Verified working in `/lab/wegovy-reality-ledger`.
- Feasibility: Prototype ~1.5 days (done), real MVP ~1 week. No backend needed
  to start; medical-liability risk mitigated by cost-only framing + "병원 상담".

## Scorecard (1-5)
| Axis | Score | Note |
|------|-------|------|
| Pull | 4 | direct logging behavior confirmed |
| Utility | 4 | computes cost-per-kg + taper decision, works with mock+user data |
| Feasibility | 4 | client-side, no API to start |
| Reach / arrival path | 4 | "위고비 가격/부작용 기록" search + diet community threads |
| Willingness to pay | 3 | payer clear (the user), but free-tool expectation is high |

## If GO — next action
- Run the one real-world test still open: drop the cost-per-kg calc link in one
  Korean diet-community thread and measure completed entries + "계속 쓸래요"
  replies. That converts the last UNKNOWN into a KNOWN before MVP spend.

## Notes
- This is the first idea taken through the full graduation pipeline. It doubles
  as the reference example for `docs/GRADUATION_PIPELINE.md`.
