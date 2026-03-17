# QA checklist

## Happy path
- Open `demo/index.html` offline and confirm the full UI renders.
- Change each control and confirm all three variants regenerate without reload.
- Click the tone-seed randomizer and confirm phrasing changes while the input state stays intact.
- Copy each variant and confirm the pasted text matches the visible message.

## Edge cases
- Leave the event date empty and confirm the copy still reads naturally.
- Enter long notes and confirm output stays concise and the layout does not break.
- Disable or block `navigator.clipboard` and confirm the fallback copy path still runs.

## Acceptance verification
- No external CDN, font, or runtime dependency remains in the demo files.
- The demo uses only vanilla HTML, CSS, and JS.
- The UI clearly shows three scored variants: Polite, Playful, and Direct.
