# PRD - Turnover Photo Proof Board

## One-liner
A same-day rental turnover command board that protects hosts and cleaners with timed tasks, photo proof, and damage-claim evidence.

## Category
Practical / Commercial

## Target user
Short-term rental hosts, co-hosts, and cleaning teams handling tight checkout-to-check-in windows.

## Problem
- Same-day short-term rental turnovers compress cleaning, restocking, damage detection, and guest readiness into a narrow window.
- Informal text threads and generic checklists do not create reliable proof when reviews or damage claims go bad.

## Key UX
Host creates a turnover run, cleaner works through timed room tasks, required photos, restock checks, damage notes, and completion proof before the next guest arrives.

## Required UI sections
- Property and same-day turnover timeline
- Room-by-room task list with timers
- Required photo proof grid
- Damage/restock issue capture
- Cleaner arrival/completion status
- Guest-ready handoff and claim packet export

## Design profile
field-ops

## Theme
자산 방어

## Signal references
- Reddit r/airbnb_hosts: late checkout vs self-cleaning window - https://www.reddit.com/r/airbnb_hosts/comments/1tit8m1/what_would_you_do/
- Reddit r/airbnb_hosts: cleaner SOP with photo + text proof - https://www.reddit.com/r/airbnb_hosts/comments/1swc86n/my_cleaner_sop_steal_it/

## Stitch prompt
Create a responsive field-ops web app called "Turnover Photo Proof Board" for short-term rental hosts, co-hosts, and cleaning teams managing tight same-day checkout-to-check-in windows. The product should run a live turnover: property timeline, room-by-room timed checklist, required photo proof grid, restock and damage capture, cleaner arrival/completion status, guest-ready handoff, and exportable damage-claim packet. Required screens/sections: dispatch header, property timeline, task board, photo proof drawer, issue log, cleaner status rail, and final handoff summary. Design direction: use the field-ops profile with disciplined service-operations styling, steel/slate neutrals, vivid action accents, pressure-legible hierarchy, and mobile-friendly controls for cleaners in the field.

## Constraints
- Time: Phase A spec only; Stitch export expected later.
- Budget: lightweight field-ops prototype.
- Platform: responsive web with mobile-first cleaner flow.

## Non-goals
- Do not implement live messaging or claims submission in Phase A.
- Do not replace property-management systems.

## Success metrics
- Cleaner can complete required proof steps from a phone.
- Host can export a defensible guest-ready or damage-claim packet.

## Notes
- Inspired by host community SOPs and late-checkout turnover pressure.
