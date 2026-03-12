# Assumptions (KNOWN / ASSUMPTION / UNKNOWN)

## KNOWN
- The prototype is for a solo operator, not a distributed team or approval workflow.
- The deliverable must stay inside this prototype folder and use vanilla HTML/CSS/JS only.
- The checklist needs real preloaded maintenance tasks with estimated minutes, per-task notes, and a generated text log.
- Draft session data must persist in `localStorage` so a reload does not discard in-progress work.
- The exported log must include timestamps, completed tasks, notes, and selected risk flags.

## ASSUMPTION
- Operators are comfortable entering short manual notes during maintenance if the UI keeps the action cheap.
- A text export is sufficient for the first version because most operators will paste it into tickets, chat, or plain incident docs.
- The maintenance session usually happens in a single browser tab on one machine, so `localStorage` is an acceptable persistence layer.
- A fixed default checklist covers the most common recurring GPU upkeep tasks well enough for a prototype.
- Estimated minutes are more valuable than exact SLA tracking because they help operators pace the runbook rather than measure compliance.

## UNKNOWN
- Which maintenance steps are most frequently skipped today: thermals, storage cleanup, validation, or documentation.
- Whether operators want editable checklist templates or if a curated fixed list is actually preferred.
- How often maintenance sessions require attaching artifact files, screenshots, or terminal output beyond short notes.
- Whether risk flags should remain a simple checklist or evolve into severity-based incident markers with follow-up actions.
- What level of timestamp detail is most useful in practice: session-level times only, or per-task completion timestamps in later versions.
