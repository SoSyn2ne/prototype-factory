# GPU Job Cost & Carbon Meter

A lightweight dashboard that estimates ₩ cost and CO₂ for your GPU jobs using power draw + runtime + grid factor.

## Status
- prototype

## Why this exists
On a single GPU box, “one more run” has real cost: electricity, time, and (if you care) carbon footprint. Operators often guess, or only look after the fact.

This prototype is an **offline calculator**: enter runtime + average watts + KRW/kWh + grid kgCO₂/kWh, then see cost and emissions. Includes a quick “power cap” what-if.

## How to run (demo)
- Open `demo/index.html` in a browser (offline / `file://`).
- Fill inputs and toggle a power cap.

## Manual checklist
- Changing any input updates energy/cost/CO₂.
- Power cap toggles (-10%, -20%) recompute using adjusted watts.
- Works offline (no external assets/CDNs).

## Links
- Detail route: `/p/2026-03-17-p003`
- Demo route: `/d/2026-03-17-p003`
