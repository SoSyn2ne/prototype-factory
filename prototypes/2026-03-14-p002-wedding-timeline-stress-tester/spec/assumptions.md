# Assumptions (KNOWN / ASSUMPTION / UNKNOWN)

## KNOWN
- Wedding schedules frequently slip due to upstream delays.
- Buffer/travel time is often underestimated.
- Planners think in tasks + handoffs (HMU → photos → ceremony → reception).
- A visual timeline is faster to understand than a table alone.
- Exporting a plan (JSON/text) is helpful for reuse.

## ASSUMPTION
- Users will enter times/durations manually rather than import calendars.
- A single-track propagation model is sufficient for a first version.
- “Impossible travel” checks can be approximated with simple minutes inputs.
- Surfacing the *first* break point is more valuable than listing all issues equally.
- Warm, calm UI reduces anxiety and encourages iteration.
- Couples will run 2–3 scenarios (late HMU, late ceremony, late photos).
- JSON export is enough; PDF is not required for this prototype.

## UNKNOWN
- Whether users want multi-track modeling (bride/groom split, vendor parallel work).
- The right default task templates by culture/venue type.
- If the tool should output mitigation suggestions automatically or just alerts.
- Whether minute-level precision is necessary (vs 5-min blocks).
- How to model venue constraints (elevators, crowd flow) simply.
- Whether planners would pay/use this vs spreadsheets.
