# Earnings Tripwire for Chip/AI Stocks

A checklist-driven daily alert that flags early risk signals in earnings calls/news for semiconductor & AI equities — with quotes and links.

## Status
- spec (document-only)

## What it is
A **Telegram-first** daily brief for a stock watchlist that answers:
- “Did anything *thesis-breaking* show up in text today?”

Instead of another news feed, it runs a fixed **Tripwire Checklist** (like a pre-flight checklist / SRE incident detector) and only pings when something crosses the line.

## How to use
- Read the spec in `spec/`.
- Next implementation step (not included here): build a minimal job that ingests a single transcript/news item and formats a Telegram alert.

## Files
- `spec/prd.md` — problem, solution, constraints, success metrics
- `spec/assumptions.md` — G1 uncertainty labeling
- `spec/falsification.md` — G2 falsification checklist
- `spec/qa-checklist.md` — acceptance + edge cases

## Links
- Preview: (TBD)
