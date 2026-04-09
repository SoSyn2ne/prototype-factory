# PRD — Mobile Vet Route Margin Planner

## Problem
- Mobile veterinary teams lose margin when urgent visits, long drive times, and clinician capacity collide in manual route planning.
- A day can look full on paper while hiding low-profit sequences and avoidable travel waste.

## Target user
- Mobile veterinary practice managers, dispatch coordinators, and field clinicians running house-call schedules.

## Constraints
- Time: A dispatcher should rebalance the day's route plan in under 15 minutes before the first visit starts.
- Budget: Must feel useful before live map optimization or EHR integration exists.
- Platform: Desktop-first schedule planning tool for morning dispatch and same-day adjustments.

## Non-goals
- Clinical recordkeeping or treatment documentation.
- Full turn-by-turn navigation for drivers.
- Insurance billing or prescription management.

## Success metrics
- Users can identify the least efficient route segment and a better reassignment path quickly.
- Teams can see margin tradeoffs between urgency, travel time, and clinician load on one screen.
- The interface supports same-day replanning without requiring advanced optimization tooling.

## Notes
- Design profile: field-ops.
- Core UI sections: route margin KPI bar, territory map with stop clusters, appointment urgency queue, travel-time versus revenue chart, clinician load panel, reroute recommendation drawer.
