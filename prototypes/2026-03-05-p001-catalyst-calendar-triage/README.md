# Catalyst Calendar Triage

A lightweight dashboard to score upcoming catalysts (earnings, product launches, macro events) by impact × confidence and generate a prioritized watchlist.

## Status
- prototype

## What's inside
- `spec/prd.md` — one-page product definition (problem, user, constraints, success metrics)
- `spec/assumptions.md` — explicit KNOWN / ASSUMPTION / UNKNOWN map
- `spec/falsification.md` — concrete questions that can disprove the concept quickly
- `spec/qa-checklist.md` — manual checks for demo quality and decision usefulness
- `demo/` — static UI shell (`index.html`, `assets/style.css`, `assets/app.js`)

## How to run demo (static)
- Open `demo/index.html` in a browser, or:
- `cd prototypes/2026-03-05-p001-catalyst-calendar-triage/demo`
- `python3 -m http.server 4173`
- Visit `http://localhost:4173`

## Current scope
- This prototype validates workflow framing and interface clarity first.
- Catalyst scoring logic, event ingestion, and persistence are not implemented in this demo build.

## Routes (if published to gallery/site)
- Detail route: `/p/2026-03-05-p001`
- Demo route: `/d/2026-03-05-p001`
