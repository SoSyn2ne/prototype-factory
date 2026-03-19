# Semicap Thesis Stress Tester

A quick scenario+assumption board that stress-tests a semiconductor thesis against macro shocks (export controls, demand slump, FX, rates).

## Status
- prototype

## Why this exists
Headlines move semicap stocks fast, but most people don’t have a structured way to translate “shock X happened” into:
- which thesis assumptions broke,
- what evidence to check next,
- whether the thesis still holds under stress.

This prototype is an **offline, deterministic** stress tester: you set a shock scenario and it flags assumption cards and a simple risk score.

## How to run (demo)
- Open `demo/index.html` in a browser (works offline / `file://`).
- Choose a **Scenario preset** and move the sliders.
- Watch the **Risk score** and **Assumption cards** update.

## Manual checklist
- Demo loads offline (no external network requests).
- Changing sliders recomputes the score instantly.
- Assumption cards show OK/WATCH/BROKEN states with readable reasons.

## Links
- Gallery: https://prototype-factory.vercel.app/p/2026-03-20-p001
- Demo: https://prototype-factory.vercel.app/d/2026-03-20-p001
