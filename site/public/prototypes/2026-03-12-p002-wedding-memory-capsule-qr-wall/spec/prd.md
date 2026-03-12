# PRD — Wedding Memory Capsule QR Wall

## Problem
- Paper guestbooks are easy to ignore during a wedding, and shared online albums usually collect photos later but miss the in-the-moment advice, private jokes, and table-specific memories from the reception.
- Venue Wi-Fi is often unreliable, so a guest experience that depends on live connectivity can fail exactly when the room is most active.
- Couples want a keepsake they can revisit after the wedding, but they still need basic moderation so the public wall does not show accidental duplicates, off-topic notes, or private messages they would rather review first.

## Target user
- Primary: couples and planners who want a low-friction digital guestbook that feels more personal than a hashtag wall.
- Secondary: wedding guests scanning a QR code from their own phones with no account creation and minimal typing.
- Admin: one trusted person from the couple, wedding party, or planner team who can moderate pending entries and export the final set.

## Constraints
- Time: guests should be able to submit in under 30 seconds while standing, eating, or waiting between reception moments.
- Budget: prototype should stay frontend-only and avoid paid infrastructure, printers beyond a QR card, or on-site technical setup.
- Platform: mobile-first web experience that runs in a modern browser and degrades gracefully when internet access is poor or absent after the page has loaded.
- Moderation: approval must be lightweight enough for one person to review intermittently without becoming a full-time operator.
- Keepsake: captured entries must be easy to export in a structured format for later reuse in albums, slideshows, or print artifacts.

## Non-goals
- Real-time cross-device syncing between every guest phone.
- Full photo upload, compression, and media storage.
- Identity verification, invitations, seating logic, or RSVP management.
- A production-ready admin dashboard with roles, audit logs, or spam detection.

## Success metrics
- Guests understand the value proposition within one screen after scanning the QR.
- A guest can submit a message locally with no account and minimal required fields.
- When `Approve mode` is enabled, new entries remain pending until explicitly approved.
- Refreshing the page keeps the captured state intact on the same device.
- Export produces a valid JSON file containing the current message set and moderation status.
- For the real product direction, a planner or couple should say the export is useful enough to become a post-wedding keepsake workflow.

## Notes
- Core happy path:
  1. Guest scans a table QR and lands on the message wall.
  2. Guest writes a short note, chooses a relation and emoji, optionally adds a simulated photo memory, and saves locally.
  3. If moderation is off, the note appears on the public wall immediately; if moderation is on, it moves into a pending queue.
  4. Admin approves selected pending entries and exports the final set after the event.
- Product principles:
  - Offline-first-ish capture beats perfect live sync for the wedding setting.
  - Moderation must be optional because some couples will prefer a fully open wall.
  - Export matters as much as collection because the keepsake is the lasting value.
- Risks and unknowns:
  - Local-only storage creates fragmentation if multiple devices are expected to contribute to one shared wall.
  - Browser download behavior differs across phones, especially older iOS devices.
  - Privacy expectations may vary when guests think they are leaving a private note but the wall is publicly visible.
