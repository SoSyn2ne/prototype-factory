# Wedding RSVP Nudge Composer

Compose personalized RSVP reminders by guest status, relationship, and tone—without sounding pushy.

## Overview
This prototype is a local-only message generator for wedding RSVP follow-ups.
You enter a guest + context and it outputs 3 ready-to-copy variants with:
- character count (helpful for SMS/chat),
- a simple "Too pushy?" risk score,
- a recommended option.

## How To Run Demo
```bash
# from repo root
cd prototypes/2026-03-13-p002-wedding-rsvp-nudge-composer/demo
python3 -m http.server 8000
# open http://localhost:8000
```

## Manual Checklist
- Generate variants for "no response" warm tone and copy one.
- Switch to Korean and regenerate.
- Set tone=firm and add an early deadline → risk should increase.
- Status=no should output a polite acknowledgement (no pressure).

## Links
- Preview: (TBD)
