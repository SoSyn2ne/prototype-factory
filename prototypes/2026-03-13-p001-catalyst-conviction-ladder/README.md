# Catalyst Conviction Ladder

Turn raw investing catalysts into a ranked conviction ladder with explicit scoring and falsification prompts.

## Overview
This prototype helps you convert messy catalyst notes into a repeatable ranking:
- capture the catalyst (type + note)
- score impact + confidence
- include time horizon
- get a transparent Conviction Score and a ranked ladder
- generate disconfirming questions (so you don’t overfit to the bullish story)

## How To Run Demo
```bash
# from repo root
cd prototypes/2026-03-13-p001-catalyst-conviction-ladder/demo
python3 -m http.server 8000
# open http://localhost:8000
```

## Manual Checklist
- Add 3 catalysts and verify the ladder sorts by score.
- Select each catalyst and confirm details update.
- Click "Falsify" and confirm questions change by type/horizon.
- Confirm the formula explanation matches the computed score.

## Folder Contents
- `spec/`: PRD + assumptions + falsification + QA checklist
- `demo/`: single-page static demo (vanilla HTML/CSS/JS)

## Links
- Preview: (TBD)
