# PRD — GPU Job Queue Forecaster

## Problem
Small GPU operators (solo ML, rendering, inference) plan work queues manually. The pain spikes when:
- durations are uncertain,
- some jobs can overlap while others effectively need exclusive use,
- long streaks of high-power work raises thermal risk and throttling.

The operator needs a fast way to answer: "If I start this queue now, when do I finish, what overlaps, and am I stacking too much heat?"

## Target user
- Solo operator managing one GPU host/workstation.
- Wants a planning aid before pressing run (not a full scheduler).

## Constraints
- Time: build a queue plan in 30–90 seconds.
- Budget: $0; static demo.
- Platform: local browser; no backend.
- Inputs: manual entry only (no telemetry integration in this prototype).

## Non-goals
- Slurm/K8s integration, preemption, retries.
- Accurate thermal physics or fan control.
- Multi-node optimization.

## Success metrics
- User can enter jobs and see a computed timeline and finish time immediately.
- User understands the lane model and the thermal risk heuristic.
- Baseline example set makes the demo self-explanatory.

## Notes
### Scheduling model (deliberately simple)
- Jobs are sorted by priority (P0 → P1 → P2), then insertion order.
- Host has two lanes (A and B).
- If `can run in parallel` is checked, the job can run on a single lane.
- If unchecked, the job is **EXCLUSIVE**: it waits until both lanes are free, then blocks the whole host for its duration.

### Thermal heuristic
Compute **consecutive high-power minutes** in the scheduled timeline.
- OK: < 45
- WATCH: 45–89
- HIGH: ≥ 90

This is a planning prompt, not real telemetry.
