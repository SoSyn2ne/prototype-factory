# PRD — Used-Car BLE Tracker Sweep

## Problem / target
Used-car buyers cannot separate persistent unknown BLE trackers from noisy transient devices. Target: buyers, inspectors, rental return staff, and safety advocates.

## Core UX
Local scan → persistence filter → six-zone car walk → hot/cold signal → finding outcome → handover receipt. Sections: privacy promise, scan, signals, car map, locator, log, checklist.

## Design / theme / evidence
- Profile: `field-ops`; theme: 건강/안전.
- Sources: S6 https://news.ycombinator.com/item?id=49226365; S4 https://news.hada.io/topic?id=32332.
- QA: no claim of guaranteed tracker detection; 48px controls; sunlight contrast; offline/simulated state disclosed.

## Stitch prompt
Design a mobile-first field web app named “Used-Car BLE Tracker Sweep.” Show a privacy-first start screen stating that scans stay local, then a live-looking but clearly simulated list of BLE signals grouped as known, transient, and persistent unknown. The core screen is a top-down car silhouette with a six-zone walk-around path and a large hot/cold signal meter that strengthens as the user taps through zones. Add Find, Owner-confirmed, Removed, and Could not locate outcomes plus a printable handover checklist. Design direction: use the field-ops profile with glove-friendly 48px controls, high-contrast charcoal/lime, sunlight-readable type, minimal motion, and a single-action bottom bar.
