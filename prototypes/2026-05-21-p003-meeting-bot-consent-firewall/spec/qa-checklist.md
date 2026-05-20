# QA checklist - Meeting Bot Consent Firewall

## Happy path
- Classify a board/client call, block default bots, generate consent note, track opt-outs, set retention, preview safe summary.

## Edge cases
- External participant brings their own bot; consent denied mid-call; recurring meeting with mixed sensitivity; no calendar integration.

## Acceptance verification
- meta.json includes title, one-liner, designProfile, theme, category, signalRefs, and stitchPrompt.
- PRD includes target user, key UX, required UI sections, assigned design profile, assigned theme, and signal references.
- Stitch prompt is copy/paste ready and includes an explicit design-direction sentence.

## Design profile
- operator-dense

## Theme
- 자산 방어

## Signal references
- Cyber Unit: AI meeting recorders collect data from people who may not have agreed
- Yahoo Finance / Canadian Press: AI meeting tools carry privacy and distribution risks
