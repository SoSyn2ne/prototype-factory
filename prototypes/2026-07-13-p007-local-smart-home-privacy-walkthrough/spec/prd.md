# PRD - Local Smart Home Privacy Walkthrough

## Problem
- Households walk room by room to see which smart-home devices are local, cloud-linked, voice-exposed, or safe for guests.

## Target user
- Home Assistant users, privacy-conscious families, and local installers setting up smart homes for nontechnical households.

## Key UX
- Map rooms and devices, tag local/cloud behavior, test voice aliases, and print a guest-safe privacy walkthrough card.

## Required UI sections
  - Room-by-room device map
  - Local vs cloud tag rail
  - Voice alias test list
  - Guest mode checklist
  - Camera and sensor visibility
  - Offline fallback notes
  - Privacy walkthrough card

## Design profile
- field-ops

## Theme
- Smart home privacy / local control

## Source signal references
- S3 (GitHub Trending, captured 2026-07-13; https://github.com/trending); S14 (Home Assistant GitHub/issues and community pages surfaced in search; https://github.com/home-assistant/core/issues)

## Output artifact
- room-by-room smart-home privacy card

## Stitch prompt

```text
Create a responsive mobile-first app called "Local Smart Home Privacy Walkthrough" for Home Assistant users auditing smart-home privacy room by room. Show a room device map, local vs cloud tag rail, voice alias test list, guest mode checklist, camera and sensor visibility, offline fallback notes, and printable privacy walkthrough card. Design direction: use the field-ops profile with sturdy mobile controls, room inspection rails, clear local/cloud badges, and practical house-walkthrough pacing.
```

## Non-goals
- Do not implement a custom demo during Phase A.
- Do not claim source signals prove market size. Treat them as problem evidence only.

## Success metrics
- First screen communicates the one-liner within 5 seconds.
- Main interaction produces the output artifact with no placeholder content.
- Visual direction clearly matches the assigned field-ops profile.
