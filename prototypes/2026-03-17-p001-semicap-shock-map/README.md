# Semicap Shock Map

A simple shock-simulator that shows how a single capacity or export restriction ripple can change your chip watchlist priorities.

## Status
- prototype

## Why this exists
Korean retail investors often react to “headline shocks” (export controls, capacity incidents, sudden demand spikes) without a quick way to translate the story into a *watchlist priority* across the semicap stack.

This prototype is an **offline, deterministic** ranking toy: you pick a shock type + magnitude and it reorders a small example basket with a short rationale.

## How to run (demo)
- Open `demo/index.html` in a browser (works offline / `file://`).
- Choose a **Shock type** and move the **Shock (%)** slider.
- See the ranked table update and read the “Why the top moved” explanation.

## Manual checklist
- Demo loads offline (no external network requests).
- Changing shock type and slider re-ranks the tickers immediately.
- Explanation text changes when ranking changes.

## Links
- Detail route: `/p/2026-03-17-p001`
- Demo route: `/d/2026-03-17-p001`
