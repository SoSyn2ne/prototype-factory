# Wedding RSVP Follow-up Triage

A mini console that ranks guests by follow-up urgency and suggests the next message based on relationship + friction.

## Status
- prototype

## Why this exists
RSVP follow-ups are emotionally expensive: you don’t want to spam people, but you also need headcount certainty. Couples (or planners) end up with messy spreadsheets and ad-hoc texting.

This prototype provides an **offline triage queue**: edit guest rows → it sorts by urgency and drafts a polite Korean follow-up message.

## How to run (demo)
- Open `demo/index.html` in a browser (offline / `file://`).
- Edit any row or click **Add guest**.
- Click a row to select a guest and see a suggested message.

## Manual checklist
- Table re-sorts when values change.
- Suggested message updates when selecting a guest.
- Works offline (no external assets/CDNs).

## Links
- Detail route: `/p/2026-03-17-p002`
- Demo route: `/d/2026-03-17-p002`
