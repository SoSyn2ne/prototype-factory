# Wedding Memory Capsule QR Wall

A QR-driven guest message wall that captures table-side notes on flaky venue Wi-Fi, lets a moderator approve posts before they appear publicly, and exports the whole night as a keepsake JSON file.

## Status
- prototype

## What this prototype demonstrates
- Guests scan a table QR and leave a short message with an optional name, relation, emoji reaction, and simulated photo memory.
- The device stores entries locally so the experience still works when venue connectivity is unreliable.
- A trusted admin can turn on `Approve mode` so new submissions stay pending until reviewed.
- The current wall can be exported as JSON for handoff, archiving, or later import into a fuller product.

## Demo
- Open `demo/index.html` in a browser.
- Submit a message while `Approve mode` is off to see it appear on the public wall immediately.
- Turn `Approve mode` on, submit another message, and approve it from the moderation queue.
- Use `Export JSON` to download the locally stored message set.

## Folder contents
- `spec/prd.md`: product framing, constraints, and success metrics.
- `spec/assumptions.md`: knowns, assumptions, and unknowns around privacy, devices, and operations.
- `spec/falsification.md`: real-world questions that could invalidate the concept.
- `spec/qa-checklist.md`: manual verification for the prototype.
- `demo/`: custom vanilla HTML/CSS/JS implementation.

## Prototype notes
- This demo is intentionally local-only. It does not sync across guests' devices.
- Photo upload is simulated to keep the prototype lightweight and focused on the moderation and export workflow.
- Export is the handoff mechanism for the keepsake; no backend is included in this folder.
