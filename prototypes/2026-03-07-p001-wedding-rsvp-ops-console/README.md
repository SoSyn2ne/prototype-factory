# Wedding RSVP Ops Console

A lightweight RSVP + seating intake that turns guest responses into a day-of ops checklist.

## What it is
A local-only operator console for small weddings where a coordinator needs a single place to:
- collect RSVP info (incl. meal + allergy/accessibility notes)
- spot dietary risk quickly
- generate a *good-enough* seating suggestion
- print a simple day-of checklist

## How to use (demo)
This prototype ships as a static demo.

```bash
# from repo root
cd prototypes/2026-03-07-p001-wedding-rsvp-ops-console/demo
python3 -m http.server 8000
# open http://localhost:8000
```

Data persists in the browser via `localStorage`.

## Manual checklist
- Add a few guests; confirm counts + meal breakdown update.
- Add an allergy note; confirm “Allergy flags” increments.
- Filter by group + search; confirm list updates live.
- Generate seating suggestions; confirm tables render and persist on refresh.
- Click “Print day-of checklist”; confirm print view shows arrivals + dietary notes + seating.

## Status
- prototype
