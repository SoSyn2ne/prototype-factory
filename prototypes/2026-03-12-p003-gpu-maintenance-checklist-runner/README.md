# GPU Maintenance Checklist Runner

A static runbook UI for solo GPU operators who need a repeatable maintenance flow without juggling shell notes, sticky docs, and ad hoc timestamps.

## Status
- prototype

## What the demo does
- Starts a timed maintenance session and keeps the draft alive in `localStorage`.
- Ships with a preloaded 7-step GPU maintenance checklist and estimated minutes per task.
- Lets the operator add notes per task and mark risk flags such as thermal spikes or low disk headroom.
- Generates a formatted maintenance log with timestamps and offers a `.txt` download.

## Demo flow
1. Open `demo/index.html`.
2. Start a session to lock in the start timestamp and begin the live timer.
3. Work through the checklist, capture notes, and tick any active risk flags.
4. Generate the maintenance log and download the text file for incident records or handoff notes.

## Prototype contents
- `spec/prd.md`: product framing, operator constraints, non-goals, and success metrics.
- `spec/assumptions.md`: current knowns, assumptions, and unresolved questions.
- `spec/falsification.md`: viability checks that would invalidate the concept.
- `spec/qa-checklist.md`: manual verification steps for the prototype.
- `demo/`: custom vanilla HTML/CSS/JS implementation with no external dependencies.
