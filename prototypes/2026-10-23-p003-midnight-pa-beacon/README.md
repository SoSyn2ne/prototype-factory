# 심야 방송 등대

저음질 아파트 방송을 로컬에서 받아 원문·번역·불확실성을 즉시 띄우고 공식 확인 행동까지 연결하는 탁상형 안전 등대.

## Phase A status

- Status: phase-a
- Prototype type: practical-commercial
- Market: Korea
- Design profile: field-ops
- Theme: 건강 — safety without pretending a machine can certify an emergency.
- Custom demo: intentionally not created in Phase A
- Expected Stitch input: /home/sy/Downloads/stitch_drop/2026-10-23/p003/code.html and screen.png

## Target user

foreign residents, hard-of-hearing households, older residents, pet owners, and apartment managers.

## Key UX

local audio capture → verbatim Korean → translated summary → uncertainty badge → official app/management/112/119 path; red is reserved for an official confirmed emergency state.

## Required UI sections

- puck halo state
- live waveform
- verbatim transcript
- translation
- uncertainty
- official-source check
- pet/family action shortcut
- audio deletion
- offline/storage state
- event history.

## Source signals

- S03: https://www.reddit.com/r/Living_in_Korea/comments/1x96tbw/apartment_announcements/ — Residents cannot reliably understand or triage muffled apartment PA messages.

## Development start prompt

Build a simulated local-device companion with PA detection, waveform, verbatim Korean, editable translation, confidence/uncertainty, official verification actions, red-only confirmed emergency state, local deletion, offline state, and a minimal neighbor-share card. Never claim emergency classification.

## Stitch prompt

Create a responsive companion interface for a Korean tabletop device called “심야 방송 등대.” It serves foreign residents, hard-of-hearing households, pet owners, and families who hear a muffled apartment PA message and cannot tell what to do. Open on a dark, quiet 1 a.m. scene: the puck glows amber and the phone says “방송 감지 · 긴급 여부 불명확.” Show the exact Korean transcript first, a replay button, an editable translation, and why confidence is low. Offer direct checks for the official building app, management office, 112, and 119; reserve red only for a mocked official confirmed emergency. Let users create a minimal neighbor card, choose pet/family actions, and delete local audio immediately. Include background-TV false trigger, repeated message, offline, low storage, no official text, and confirmed-alert states. Required sections: halo, waveform, verbatim text, translation, uncertainty, official-source actions, household shortcuts, deletion, offline/storage, and history. Emotional pressure: safety without false reassurance. Design direction: use the field-ops profile with matte charcoal and warm off-white, one amber attention accent, reserved safety red, 48px night-readable controls, sturdy 8px panels, and no smart-home dashboard or decorative waveform wall.
