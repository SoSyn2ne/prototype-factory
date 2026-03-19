# QA checklist

## Happy path
- Open `demo/index.html`.
- Change **Segment** and see counts update.
- Click a guest row → details panel opens.
- Click **Generate nudge** → message appears; changing tone updates it.

## Edge cases
- Segment with 0 guests → show empty state.
- Guest already submitted → generator suggests “thank you / confirm details” not a nudge.
- Mobile width → layout stacks, still readable.

## Acceptance verification
- Works offline; no external fonts/CDNs.
- No console errors when switching segments rapidly.
