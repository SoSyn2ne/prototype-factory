# PRD — Wedding Timeline Stress Tester

## Problem
Wedding-day schedules look fine on paper until one upstream task runs late (hair/makeup, photographer travel, ceremony start). Most couples/planners don’t know **where the plan breaks** because they don’t simulate delays + travel buffers.

This prototype is a lightweight model: define tasks, inject a delay, and surface collisions + “impossible travel” alerts.

## Target user
- Couple (or planner) coordinating vendors on a tight day-of schedule.
- Wants to reduce “day-of chaos” by identifying fragile points.

## Constraints
- Time: build a basic schedule in ≤ 3 minutes.
- Budget: $0.
- Platform: browser (static demo), offline.
- Data: local only (optional export JSON).

## Non-goals
- Full calendar sync.
- Vendor communication / messaging automation.
- Perfect optimization (this is stress testing, not auto-scheduling).

## Success metrics
- After injecting a delay, the tool produces:
  - a clear list of collisions (overlaps) and buffer violations
  - the earliest “break point” task
  - a suggested mitigation note (e.g., add buffer, move location, start earlier)
- Users can export the plan to JSON for reuse.

## Timeline model
Each task:
- name
- startTime (HH:MM)
- durationMin
- bufferMin (optional)
- owner/vendor
- location (string)
- travelMinFromPrev (optional; simple per-task input in prototype)

## Stress test rules (prototype)
- Apply a delay (minutes) to one task.
- Propagate downstream by shifting subsequent tasks in the same “track” (single-track by default).
- Alerts:
  - Overlap: task A end > task B start.
  - Buffer violation: (end + buffer) > next start.
  - Travel impossible: (end + travelMin) > next start when location changes.

## Notes
- The goal is visibility, not perfect realism.
