# PRD - Caregiver Handoff Baton

## Problem
- When care costs $7,500 to $24,000 a month, “I think they did it” is not enough.
- Source signals: S7 (Reddit r/eldercare, 2026); S8 (A Place for Mom, 2026); S9 (Reddit r/AgingParents, 2026)

## One-liner
- A family eldercare handoff surface for meds, routines, shift notes, and “did this actually happen?” proof between private caregivers.

## Target user
- Families coordinating private or agency caregivers for aging parents across expensive, fragmented shifts.

## Key UX
- At each shift change, caregivers tap through essential tasks, log exceptions, attach photos, and leave the next person a focused handoff instead of a messy family chat.

## Required UI sections
- Today care baton
- Medication and meal checkoff
- Exception photo/note log
- Next caregiver briefing
- Monthly cost and coverage snapshot

## Design profile
- field-ops
- use the `field-ops` profile with large touch targets, high-contrast task rows, visible done/missed states, and an always-available emergency note strip; make it usable on a kitchen counter phone.

## Theme
- 건강

## Output artifact
- Shift handoff report and weekly care consistency summary.

## First validation test
- Test the handoff checklist with one family caregiver group and measure whether it replaces chat-thread status updates.

## Stitch prompt

```text
Create a responsive web app called "Caregiver Handoff Baton" for Families coordinating private or agency caregivers for aging parents across expensive, fragmented shifts.. The app is based on observed user pull: Families compare private caregiver costs, disappointments with agencies, and detailed medical tasks handled by trusted caregivers. 24/7 in-home care can cost roughly $24,733/month nationally at $34/hour, making coordination mistakes financially painful. Caregivers ask whether to keep aging parents on routines as fatigue, meds, and health issues complicate daily care. The app should use a field handoff kiosk/mobile log around the trigger moment "When care costs $7,500 to $24,000 a month, “I think they did it” is not enough." and make the first screen communicate "When care costs $7,500 to $24,000 a month, “I think they did it” is not enough.". Use the user's own language: "A family eldercare handoff surface for meds, routines, shift notes, and “did this actually happen?” proof between private caregivers.". Build the core workflow around shift baton and produce Shift handoff report and weekly care consistency summary.. Required sections: Today care baton; Medication and meal checkoff; Exception photo/note log; Next caregiver briefing; Monthly cost and coverage snapshot. Emotional pressure to make visible: 건강, with loss of money, time, reputation, or health clarity. Design direction: use the `field-ops` profile with large touch targets, high-contrast task rows, visible done/missed states, and an always-available emergency note strip; make it usable on a kitchen counter phone. Avoid generic dashboard framing; make the main interaction feel like a field handoff kiosk/mobile log.
```
