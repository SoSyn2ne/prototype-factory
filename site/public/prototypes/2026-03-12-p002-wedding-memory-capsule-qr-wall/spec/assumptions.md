# Assumptions (KNOWN / ASSUMPTION / UNKNOWN)

## KNOWN
- The concept is a reception-time QR wall, so the first interaction has to work on personal phones with little to no setup.
- Guests may be on mixed devices across recent iPhone Safari, Android Chrome, and older mid-range phones with limited attention spans and inconsistent connectivity.
- The couple needs at least light moderation controls because some messages are intended for the public wall and some may be better reviewed first.
- Name is optional to reduce friction and respect guests who do not want to identify themselves publicly.
- The keepsake export must preserve message content, timestamps, relation labels, reactions, and moderation state.

## ASSUMPTION
- Privacy: the wedding hosts clearly disclose that submissions are stored on-device in this prototype and may later be exported by the couple or planner.
- Privacy: the final product would avoid collecting phone numbers, email addresses, or precise location unless the couple explicitly opts in.
- Device diversity: modern browser APIs like `localStorage`, `Blob`, and file download are available on the main target devices, even if behavior varies slightly.
- Moderation workload: one person can realistically review pending messages every few minutes without missing key wedding duties.
- Message volume will stay small enough for browser storage because the current prototype simulates photos instead of storing binary media files.
- A JSON export is acceptable at prototype stage even if the eventual keepsake format could become a gallery, printable booklet, or cloud archive.

## UNKNOWN
- Whether guests expect one shared live wall across all tables or are comfortable with local-only capture per device and later merge/export.
- How often a real wedding would generate inappropriate, duplicate, or accidental posts that make moderation mandatory rather than optional.
- Whether couples want private-only notes, public wall notes, or both in the same experience.
- Whether planners prefer a separate admin device instead of exposing admin controls on the same screen as guest submission.
- How browser download limitations on iOS affect the practicality of exporting directly from the venue.
- Whether multilingual weddings need language-specific prompts, emoji defaults, or right-to-left support.
