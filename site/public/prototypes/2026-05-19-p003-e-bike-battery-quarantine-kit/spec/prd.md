# PRD — E-Bike Battery Quarantine Kit

## One-liner
A shop-floor safety tool that helps bike shops and building managers log risky lithium batteries, storage zones, and insurer-ready fire precautions.

## Candidate type
Practical / Commercial

## Problem
- A shop-floor safety tool that helps bike shops and building managers log risky lithium batteries, storage zones, and insurer-ready fire precautions.
- Inspired by external problem signals Signal 5 and Signal 6 from today's search sweep.

## Target user
- Independent e-bike repair shops, micromobility fleets, apartment/building managers, office facilities teams, and electronics repair counters that need to accept, reject, store, charge, or quarantine lithium batteries without relying on vague verbal rules.

## Key UX
Scan or enter battery brand, age, condition, charger type, recall notes, swelling/damage signs, customer intake photos, storage location, and charge status; the app assigns quarantine zones, prints intake tags, schedules safe charging windows, and exports insurer/landlord-ready handling logs.

## Required UI sections
- battery intake scanner
- damage/recall risk triage
- quarantine zone board
- charging window scheduler
- customer waiver and rejection script
- photo evidence locker
- insurer/fire-marshal safety log export

## Design profile
field-ops

## Theme
건강

## External signal references
- Signal 5: ERI — New Year, New Compliance Risks: Electronics Disposal Rules to Watch in 2026 — https://eridirect.com/blog/2026/01/new-year-new-compliance-risks-electronics-disposal-rules-to-watch-in-2026/
- Signal 6: Reddit r/ebike — Am I being paranoid about e-bike battery fires, or is this a real risk? — https://www.reddit.com/r/ebike/comments/1lnu5e2/am_i_being_paranoid_about_ebike_battery_fires_or/

## Stitch prompt
Design a tablet-first field-ops product called E-Bike Battery Quarantine Kit for independent e-bike repair shops, micromobility fleets, apartment/building managers, office facilities teams, and electronics repair counters handling lithium battery fire risk. Users scan or enter battery brand, age, condition, charger type, recall notes, swelling or damage signs, customer intake photos, storage location, and charge status; the app assigns quarantine zones, prints intake tags, schedules safe charging windows, and exports insurer or landlord-ready handling logs. Include a battery intake scanner, damage/recall risk triage, quarantine zone board, charging window scheduler, customer waiver and rejection script, photo evidence locker, and insurer/fire-marshal safety log export. Design direction: use a field-ops aesthetic with glove-friendly controls, hazard-label colors balanced by steel gray panels, large zone maps, tactile tag previews, and offline-ready checklists so it feels usable on a noisy shop floor.

## Constraints
- Phase A only: do not implement a custom demo before Stitch exports arrive.
- Preserve the assigned design profile and theme in the Stitch result.
- Expected drop folder: /home/sy/Downloads/stitch_drop/2026-05-19/p003/

## Non-goals
- Full production compliance/legal advice.
- External LLM API calls during Phase A.

## Success metrics
- meta.json and spec files include title, theme, design profile, target user, key UX, UI sections, signal references, and full Stitch prompt.
- The eventual Stitch export preserves the original generated HTML environment.

