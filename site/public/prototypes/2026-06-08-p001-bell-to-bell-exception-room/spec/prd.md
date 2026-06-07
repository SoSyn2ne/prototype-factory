# PRD - Bell-to-Bell Exception Room

## Problem
- Phone-ban policies fail when consequences, parent exceptions, hallway coverage, and teacher buy-in are inconsistent across the building.

## Target user
- Assistant principals, deans, department heads, and teacher leads at middle/high schools implementing phone restrictions.

## Key UX
- A live enforcement room where staff log exceptions, weak zones, parent pressure, and policy drift, then leave with a same-day enforcement plan.

## Required UI sections
- Enforcement heatmap by period and location.
- Exception queue with parent reason, approval owner, and expiry.
- Consequence consistency table.
- Parent pressure inbox.
- Rollout checklist and daily admin huddle script.
- Staff buy-in meter.

## Design profile
- field-ops: disciplined slate/steel surfaces, compact pressure-ready controls, reliable operational tone.

## Theme
- 사교육 / 건강: attention protection, classroom control, parent anxiety, and status pressure around exceptions.

## Source signal references
- S1: Reddit r/Teachers phone-ban policy has no consequences.
- S2: Reddit r/Teachers high-school phone-ban buy-in failures.
- S3: Reddit r/Teachers enforcement tips and parent messaging.

## Stitch prompt
Build a production-grade web app prototype called "Bell-to-Bell Exception Room" for school leaders enforcing a student phone ban. The main workflow is a live enforcement room: an operations header with today status, an enforcement heatmap by period/location, an exception queue with parent reason and expiry, a consequence consistency table, a parent pressure inbox, and a rollout checklist. Include realistic sample data for high-school periods, hallway zones, cafeteria, medical exception, parent complaint, and teacher buy-in gaps. Design direction: use the field-ops profile with disciplined slate/steel surfaces, a restrained cyan or orange action accent, compact high-pressure controls, and legible tables that feel reliable during a school-day incident. Do not make a marketing landing page; the first screen must be the working app.

## Non-goals
- Student surveillance.
- LMS replacement.
- Legal policy drafting.

## Success metrics
- Admin can identify the top 3 enforcement gaps in under 60 seconds.
- Exception owners and expiry dates are visible without opening a modal.
- Parent response copy is generated from the selected case context.
