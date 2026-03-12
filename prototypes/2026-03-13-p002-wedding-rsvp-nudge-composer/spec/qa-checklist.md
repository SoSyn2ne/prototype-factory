# QA checklist

## Happy path
- Fill inputs and click Generate; 3 variants appear.
- Toggle language; variants regenerate in chosen language.
- Each variant shows character count and pushy risk score.
- One variant is marked Recommended.
- Copy button copies text (or shows fallback instructions if unsupported).

## Edge cases
- Empty guest name: validation blocks generation.
- Event date in the past: UI warns but still allows generation.
- Firm tone + tight deadline increases risk score noticeably.
- "No" status generates a courteous acknowledgement message (not a nudge).

## Acceptance verification
- Demo is local-only HTML/CSS/JS (no CDNs).
- Visible labels and focus styles for keyboard use.
- No console errors after generate/toggle/copy.
