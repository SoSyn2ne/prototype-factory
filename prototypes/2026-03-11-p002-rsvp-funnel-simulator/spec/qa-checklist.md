# QA checklist

## Happy path
- Set event date + caterer deadline.
- Enter invited count and baseline rates.
- Add a reminder; see forecast shift.
- Save scenario; switch between scenarios.
- Reload; scenarios persist.

## Edge cases
- Deadline after event date should be rejected.
- Rates outside 0–100% should clamp/validate.
- Many reminders (10+) should remain usable.

## Acceptance verification
- No external dependencies.
- Keyboard usable.
- LocalStorage persistence works.
