# QA checklist

## Happy path
- Open `demo/index.html` offline.
- Edit a guest’s RSVP from “No response” → “Accepted”: score decreases and table resorts.
- Click a row: selection highlight changes and message updates.
- Click **Add guest**: new row appears; editing it updates ranking.

## Edge cases
- Empty name: message panel shows a generic placeholder.
- Friction outside 0–3: UI clamps to 0–3.
- Many rows: table remains scrollable.

## Acceptance verification
- No external assets/CDNs.
- Keyboard navigation: tab into table inputs and controls.
- Selection remains stable after re-sort (select by row id).
