# QA checklist

## Happy path
- Add 3 attending guests across 2 groups; verify counts + meal breakdown.
- Add 1 declined guest; verify declined count.
- Add allergy note; verify allergy flags and print dietary section.
- Generate seating suggestions; verify tables sum equals attending guests.
- Refresh page; verify guests + seating persist.

## Edge cases
- Group larger than table size (spillover): verify the group splits cleanly across tables.
- Empty notes: ensure no false allergy flags.
- Special characters in names/notes: ensure no HTML injection (escaped in table).

## Acceptance verification
- No external network requests (no CDNs).
- All inputs have labels; keyboard focus is visible.
- Print view hides non-print sections and prints arrivals + dietary + seating.
