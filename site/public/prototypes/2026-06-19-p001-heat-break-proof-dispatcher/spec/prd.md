# PRD — Heat Break Proof Dispatcher

## Problem
- Field crews prove heat-safety breaks, water, shade, and shift changes before inspections or injuries hit.
- Source signals: S1, S2 from daily/2026-06-19/ideas.md.

## Target user
- Small construction contractors, landscapers, roofing crews, warehouse supervisors, and safety coordinators preparing for hot-weather compliance.

## Key UX
- Supervisor opens today's route, sees crew heat-risk bands, taps break/water/shade proof, resolves missing documentation, and exports an inspection-ready daily log.

## Required UI sections
- Heat-risk shift header with weather, crew count, and trigger thresholds
- Crew route board with jobsite heat index, acclimatization status, and break windows
- Water/shade/rest proof checklist with timestamped supervisor attestations
- Worker symptom triage lane and stop-work decision card
- PPE/equipment receipt tracker for cooling gear and shade spend
- Inspection packet exporter with photos, notes, and policy acknowledgments
- Tomorrow staffing adjuster for early starts, rotation, and high-risk workers

## Assigned design profile
- field-ops

## Theme
- 건강 / 자산 방어 - heat injury prevention, inspection proof, crew trust, and fine avoidance.

## Stitch prompt

Build a production-grade web app prototype called "Heat Break Proof Dispatcher" for contractors and field supervisors proving heat-safety breaks, water, shade, and shift adjustments during hot-weather jobs. The first screen must be a working field operations console with a heat-risk shift header, crew route board, water/shade/rest proof checklist, symptom triage lane, PPE receipt tracker, inspection packet exporter, and tomorrow staffing adjuster. Use realistic sample data: 4 roofing crews, 96F forecast, two new workers not acclimatized, missing shade photo at jobsite 3, cooling towel purchase, break logs, and an OSHA/Cal-OSHA style inspection risk note. Design direction: use the field-ops profile with rugged mobile-first panels, large touch targets, high-contrast heat states, map-like job lanes, and a sparing safety-orange action accent. Do not make a marketing landing page; the first screen must be the working app.

## Constraints
- Time: Phase A spec only; Stitch generation/export happens in the separate 08:30 job.
- Budget: No custom demo implementation in Phase A.
- Platform: Stitch Web project, not App.

## Non-goals
- Do not implement a custom local demo during Phase A.
- Do not call external LLM APIs.
- Do not treat external source signals as market-size proof.

## Success metrics
- Stitch output clearly exposes the working app on the first screen.
- All required UI sections are visible or reachable without a marketing landing page.
- The assigned design profile is visibly reflected in layout, density, controls, and visual tone.
