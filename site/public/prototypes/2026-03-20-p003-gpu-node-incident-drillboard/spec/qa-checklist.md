# QA checklist

## Happy path
- Open `demo/index.html`.
- Click **Inject: Thermal** and **Start timer**.
- Toggle checklist steps and add a note.
- Inject another alert type and confirm the checklist updates.

## Edge cases
- Start timer twice → no duplicate timers.
- Clear incident → resets log, checklist, and timer.
- Mobile width → layout stacks.

## Acceptance verification
- Works offline; no external assets.
- No console errors when injecting alerts repeatedly.
