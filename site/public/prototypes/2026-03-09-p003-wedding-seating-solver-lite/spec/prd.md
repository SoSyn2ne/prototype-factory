# PRD — Wedding Seating Solver Lite

## Problem
Wedding seating is a constraint problem disguised as a spreadsheet:
- table capacities
- family/friend groups you want to keep together
- pairs who should not be seated together

Most people do this with Google Sheets and stress. The cost of mistakes is real: awkward tables, hurt feelings, day-of chaos.

## Target user
- Couples planning a wedding (often with one “ops” person doing logistics)
- Wedding planners who need a quick first draft before manual refinement

## Constraints
- Time: create a first workable plan in < 10 minutes
- Budget: free/offline demo; no accounts
- Platform: desktop web, drag-and-drop

## Non-goals
- Perfect optimization (v1 is a "constraint flagger" not a full solver)
- Guest RSVP collection (handled elsewhere)
- Printing/exporting to vendor-specific formats

## Success metrics
- User can drag guests into tables and instantly see capacity and conflicts.
- User can define "cannot sit with" pairs and see warnings.
- User can export a JSON seating plan and a simple printable text summary.

## Notes
- The killer feature is *conflict visibility* while arranging, not automatic solving.
- Keep the UI forgiving: quick undo, clear flags, minimal clicks.
