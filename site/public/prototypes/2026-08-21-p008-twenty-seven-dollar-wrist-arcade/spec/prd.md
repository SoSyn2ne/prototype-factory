# PRD — Twenty-Seven-Dollar Wrist Arcade

## Problem
Turn cheap smartwatch sensors into ten-second gesture challenges made for replay clips.

## Target user
Hardware hackers, makerspaces, streamer-friendly party players

## Key UX
Pick a gesture rule, calibrate a cheap watch, play a ten-second motion round, then replay the sensor trace against the failed pose.

## Required UI sections
- watch pairing/calibration
- gesture rule deck
- ten-second round screen
- live sensor trail
- fail replay
- challenge QR and clip export

## Design profile
- playful-experimental

## Theme
- cheap hardware remix / bodily comedy

## Source signal references
- S13: HN: hacking with Claude on a $27 smartwatch shows cheap wearable sensors can become a programmable interaction toy. (https://www.mikekasberg.com/blog/2026/08/19/hacking-with-claude-on-a-27-smart-watch.html)

## Reference pattern / twist
- Pattern: motion-controlled party microgame
- Twist: Uses commodity watch sensors for rapid spectator-readable gesture failures.
- Small-group fit: Makers already own cheap watches but lack a tiny demo that makes sensor hacking instantly fun.
- Spread trigger: Funny failed gestures and challenge QR pull friends into the next ten-second round.

## Stitch prompt

```text
Create a companion web prototype for a non-web wearable game called "Twenty-Seven-Dollar Wrist Arcade" for hardware hackers and party players using a cheap smartwatch. First screen: pair/calibrate watch and choose a one-line gesture rule such as “draw a square before the buzzer.” Core loop: ten-second motion round, live sensor trail, instant pass/fail pop, funny replay overlay, and challenge QR for the next player. Required sections: pairing, calibration, rule deck, round screen, sensor trail, fail replay, clip/QR export. Design direction: use the playful-experimental profile with arcade-black background, one electric lime accent plus semantic red, oversized countdown controls, elastic motion trails, 12px cards, and spectator-readable states; avoid fitness-dashboard styling.
```

## QA / screenshot criteria
- First screen communicates the core job in 3 seconds.
- All required sections and meaningful empty/error/success states appear.
- Exactly one design profile is used: playful-experimental.
- Desktop and mobile remain usable.
