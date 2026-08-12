# PRD — Guest Wi-Fi Rescue Card

## Problem
- Venue staff diagnose captive-portal failures and hand guests a device-specific recovery card in under a minute.

## Target user
- Cafe, clinic, hotel, coworking, and event staff repeatedly helping guests connect to Wi-Fi.

## Arrival path
- Search/community referral at the moment this trigger becomes urgent: front-desk support / connectivity friction.

## Business / validation route
- Validate with a focused landing/demo and measure completion plus artifact sharing; monetize through a lightweight subscription, template pack, or qualified partner lead.

## Core loop
- Select device and symptom, run a short branching diagnosis, reveal a safe fallback, and print or QR-share a recovery card.

## First screen
- Communicate the one-liner in three seconds and expose the first input beside a realistic result preview.

## Key screens
- device selector; symptom buttons; diagnostic path; network status; fallback steps; printable/QR rescue card.

## Interaction rules
- One decisive primary action per state; preserve entered data; show loading, empty, success, and blocked/error states.

## Output artifact
- The QR rescue card reduces repeated staff explanations and can sit beside the register.

## Share / return loop
- The QR rescue card reduces repeated staff explanations and can sit beside the register.

## Constraints
- Time: one-session prototype.
- Budget: local mock data; no paid external API.
- Platform: responsive web, desktop and mobile.

## Non-goals
- Full production integrations, legal guarantees, payments, or custom Phase A demo.

## Success metrics
- First action understood in 3 seconds; core flow completed without instruction; output shared or saved.

## QA / screenshot criteria
- Assigned profile field-ops is unmistakable; primary interaction and result fit above fold; mobile has no overflow; all required sections visible.

## Development start prompt

```text
Build Guest Wi-Fi Rescue Card as a polished local HTML/React prototype in prototype-factory. Venue staff diagnose captive-portal failures and hand guests a device-specific recovery card in under a minute. Target: Cafe, clinic, hotel, coworking, and event staff repeatedly helping guests connect to Wi-Fi. Implement: Select device and symptom, run a short branching diagnosis, reveal a safe fallback, and print or QR-share a recovery card. Required sections: device selector; symptom buttons; diagnostic path; network status; fallback steps; printable/QR rescue card. Preserve design profile field-ops. Use realistic local data, complete interaction states, responsive desktop/mobile layouts, and screenshot QA. Do not use paid external APIs.
```

## Source signals
- S9, S10: see daily/2026-08-13/ideas.md.

## Design
- Profile: field-ops
- Theme: front-desk support / connectivity friction
- Direction: Use a field-ops profile with extra-large touch targets, one safety-orange accent, high-contrast step states, printable card preview, and no marketing chrome.

