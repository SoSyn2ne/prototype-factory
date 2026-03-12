# QA checklist

## Happy path
- Open `demo/index.html` and confirm the page shows the message form, message feed, admin controls, and a visible `Scan me` QR placeholder.
- Submit a message with relation, text, and emoji while `Approve mode` is off; confirm the card appears in the public wall immediately.
- Submit a message with the simulated photo toggle enabled; confirm the resulting card shows the photo-memory treatment.
- Turn `Approve mode` on, submit another message, and confirm it lands in the pending moderation queue instead of the public wall.
- Approve the pending message and confirm it moves into the public wall without losing its content.
- Refresh the page and confirm the toggle state and message list persist from `localStorage`.
- Click `Export JSON` and confirm a JSON file downloads containing the current messages and moderation metadata.

## Edge cases
- Try submitting with an empty message and confirm the form blocks the action with a clear validation message.
- Leave the name blank and confirm the message still submits with an anonymous fallback label.
- Toggle the simulated photo checkbox on and off and confirm the caption field enables and disables correctly.
- Confirm the pending queue empty state is understandable when no messages need review.
- Confirm long but reasonable messages remain readable in cards without breaking the layout on mobile width.
- Confirm turning `Approve mode` off does not auto-approve existing pending messages; they should still require an explicit action.

## Acceptance verification
- Demo is pure vanilla HTML, CSS, and JavaScript with no external CDN, QR library, or hosted font dependency.
- Required sections are present:
  - `Leave a message`
  - `Message feed`
  - `Admin controls`
- Required interactions are present:
  - `Approve mode` toggle changes new message behavior.
  - `Export JSON` downloads current message state.
  - Refresh keeps state through `localStorage`.
- The product framing in the docs emphasizes offline-first-ish capture, moderation, and keepsake export rather than generic event messaging.
