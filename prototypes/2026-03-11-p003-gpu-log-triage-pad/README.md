# GPU Log Triage Pad

Paste GPU/driver logs and get a fast, local heuristic diagnosis (OOM, thermal throttle, CUDA error) with a checklist of next actions.

## Status
- prototype

## How to run (demo)
- Open `demo/index.html` in a browser.
- Paste logs; nothing is uploaded.

## Manual checklist
- Paste a sample OOM line (e.g., "CUDA out of memory") and verify OOM is detected.
- Paste an Xid line ("NVRM: Xid") and verify Driver Reset is detected.
- Save a note and refresh; it should persist.

## Links
- Preview: (TBD)
