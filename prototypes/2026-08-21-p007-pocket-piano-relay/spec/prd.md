# PRD — Pocket Piano Relay

## Problem
Trade two-bar melodies with an on-device autocomplete partner and friends.

## Target user
Casual musicians, music students, short-form creators

## Key UX
Play two bars, choose one of three on-device continuations, mutate it, then pass the phrase to a friend as a ten-second challenge.

## Required UI sections
- playable mini keyboard
- two-bar recorder
- three continuation cards
- mutation knobs
- friend relay chain
- clip and MIDI export

## Design profile
- playful-experimental

## Theme
- creative surprise / social play

## Source signal references
- S12: HN front page: a 125M on-device model autocompletes piano, with 461 points; fast musical call-and-response is understandable and replayable. (https://simedw.com/2026/08/20/midi-autocomplete/)

## Reference pattern / twist
- Pattern: call-and-response music toy
- Twist: Autocomplete becomes a turn-based relay with human mutation rather than a passive generator.
- Small-group fit: Casual musicians can understand two bars instantly and produce something shareable without a DAW.
- Spread trigger: Every round exports a before/after clip and challenges the next friend to continue it.

## Stitch prompt

```text
Build a playful responsive music toy called "Pocket Piano Relay" for casual musicians and short-form creators. First screen: a playable mini keyboard and a two-bar record button. Core loop: play two bars, receive three on-device continuation cards, choose and mutate one with rhythm/mood knobs, then pass the phrase to a friend for the next turn. Required sections: keyboard, recorder, continuation cards, mutation controls, relay chain, clip/MIDI export. Design direction: use the playful-experimental profile with bold candy accents on a dark stage, chunky 12px controls, animated beat pulses, highly readable turn states, and no dashboard chrome. Show recording, generating, choosing, remixed, and shared states.
```

## QA / screenshot criteria
- First screen communicates the core job in 3 seconds.
- All required sections and meaningful empty/error/success states appear.
- Exactly one design profile is used: playful-experimental.
- Desktop and mobile remain usable.
