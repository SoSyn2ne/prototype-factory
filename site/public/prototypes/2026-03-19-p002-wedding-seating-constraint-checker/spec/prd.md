# PRD — Wedding Seating Constraint Checker

## Problem
- Wedding seating is a “constraint satisfaction” problem disguised as a spreadsheet.
- Couples typically discover conflicts late (family dynamics, exes, workplace politics), causing last-minute churn and stress.
- Tools exist for full seating charts, but many planners only need a **fast conflict checker** for “does this arrangement violate the obvious rules?”

## Target user
- Primary: bride/groom or a helper doing seating on a laptop the week of the wedding.
- Secondary: planner/coordinator sanity-checking a draft chart.

## Constraints
- Time: 1-day prototype.
- Budget: $0 runtime.
- Platform: offline demo, open `demo/index.html`.
- Scope: small weddings (50–250 guests) with simple constraints.

## Non-goals
- Optimal seating (this is not a solver/optimizer in v0).
- Guest invitation management, RSVPs, meal selection.
- Complex constraints (multi-table group splitting, weighted preferences).

## Success metrics
- User can input guests + constraints and detect conflicts in under 1 minute.
- Conflicts are actionable (who/where/why), enabling a quick fix loop.

## Notes
- If validated, next step is a real solver with “suggest fix” actions (swap candidates) and export to CSV.
