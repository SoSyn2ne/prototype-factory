# Assumptions (KNOWN / ASSUMPTION / UNKNOWN)

## KNOWN
- Incidents are easier to resolve when you have a checklist and a clean snapshot of current state.
- Thermals + disk space are common failure modes for home GPU boxes.

## ASSUMPTION
- A single page UI reduces cognitive load vs. jumping between CLI commands and logs.
- Persistent checklist state is valuable (operators return to incidents after interruptions).

## UNKNOWN
- Which signals matter most day-to-day (VRAM vs CPU vs network vs job backlog).
- Whether the report format should be text, JSON, or Markdown.
- How many distinct “modes” are needed (normal, warning, incident).
