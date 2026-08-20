# PRD — WebAudio Tab Culprit Probe

## Problem
Find the browser tab silently hijacking Bluetooth audio and export a reproducible evidence receipt.

## Target user
Bluetooth multipoint users, IT help desks, browser support teams

## Key UX
Run a guided tab-by-tab isolation sweep, watch audio-session ownership change, then export a culprit receipt with reproduction steps.

## Required UI sections
- device/link status
- open-tab suspect strip
- one-click isolation sweep
- audio-session timeline
- culprit evidence receipt
- vendor support export

## Design profile
- field-ops

## Theme
- device ownership / invisible interference

## Source signal references
- S1: HN discussion: AliExpress silent WebAudio fingerprinting keeps a Bluetooth multipoint link active; user traced a confusing device failure to one browser tab. (https://news.ycombinator.com/item?id=49372583)

## Reference pattern / twist
- Pattern: device diagnostics wizard
- Twist: Treat browser tabs as physical audio suspects and produce a shareable proof receipt.
- Small-group fit: Multipoint-headset users already close tabs randomly; this turns the workaround into a 60-second test.
- Spread trigger: Receipt can be attached to vendor support or shared with coworkers who hit the same failure.

## Stitch prompt

```text
Create a responsive working web app called "WebAudio Tab Culprit Probe" for Bluetooth multipoint users and IT help desks. First screen: live device/link status plus open browser tabs ranked as audio-session suspects. Core interaction: run a guided tab-by-tab isolation sweep, observe phone/PC audio handoff, mark the culprit, and export a reproduction receipt. Required sections: device/link status, suspect-tab strip, isolation controls, audio-session timeline, culprit receipt, vendor support export. Use realistic sample data based on a silent WebAudio stream keeping a headset PC link active. Design direction: use the field-ops profile with high-contrast device states, large test controls, steel neutrals, one cyan action accent, compact evidence rows, and no decorative hero. Show idle, testing, culprit-found, and no-culprit states.
```

## QA / screenshot criteria
- First screen communicates the core job in 3 seconds.
- All required sections and meaningful empty/error/success states appear.
- Exactly one design profile is used: field-ops.
- Desktop and mobile remain usable.
