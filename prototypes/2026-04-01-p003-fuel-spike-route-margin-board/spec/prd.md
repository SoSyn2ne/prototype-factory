# PRD — Fuel Spike Route Margin Board

## One-liner
A field-service margin board that shows which jobs become unprofitable when fuel costs jump and how to rebalance the day before trucks roll.

## Problem
- Fuel spikes can quietly turn long-drive service calls into low-margin or negative-margin work.
- Small dispatch teams rarely have a morning control view that blends route distance, crew schedule, and job margin.
- Operators need to decide quickly whether to regroup routes, reschedule jobs, or apply a surcharge.

## Target user
- Primary: owners and dispatch managers at small HVAC, plumbing, cleaning, and repair businesses.
- Secondary: operations analysts or branch managers watching daily profitability.

## Why now
- Fuel price shocks return unpredictably and hit route-heavy businesses immediately.
- Small field-service operators already work with thin margins and mixed job sizes.
- Existing scheduling tools optimize dispatch, not fast margin rescue under price volatility.

## Key UX
- Show route-level margin erosion before crews depart.
- Compare regrouping, repricing, or rescheduling actions with clear tradeoffs.
- Protect customer relationships while recovering as much margin as possible.

## Required UI sections
- Daily margin hero
- Crew route timeline
- Fuel exposure map
- Job repricing or regrouping panel
- Customer sensitivity queue
- Recovered-margin footer

## Constraints
- Time: Phase A only; no dispatch integration or custom demo build.
- Budget: built for small operators with limited back-office staff.
- Platform: desktop web operations dashboard.

## Non-goals
- Full route optimization engine.
- Payroll or vehicle maintenance management.
- Customer invoicing automation.

## Success metrics
- Increase number of days where operators act before route margin collapses.
- Reduce low-margin long-drive jobs left unchanged.
- Cut morning decision time for dispatch managers.

## Stitch-ready design direction
Use a pragmatic fleet-ops design direction with midnight blue, warm white, and high-visibility lime accents; keep hierarchy bold, route blocks easy to scan, and the overall product feel energetic, action-oriented, and financially aware.
