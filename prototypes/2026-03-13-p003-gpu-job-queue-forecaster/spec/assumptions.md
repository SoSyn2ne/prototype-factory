# Assumptions (KNOWN / ASSUMPTION / UNKNOWN)

## KNOWN
- Operators often have rough runtime estimates even when actual times vary.
- Priority changes during the day (urgent jobs cut the line).
- Sustained high-power sessions increase likelihood of throttling or discomfort (especially small cases).

## ASSUMPTION
- A coarse `low/med/high` power label is enough for initial planning.
- Two lanes + exclusive mode is a useful mental model for many single-host setups.
- Relative finish time from "now" is more useful than a complex Gantt view.

## UNKNOWN
- Whether VRAM pressure or I/O bottlenecks matter more than this timeline for most users.
- If the thresholds (45/90 minutes) match real-world risk perception.
- Whether users need explicit cooldown buffers between jobs.
