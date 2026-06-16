# QA checklist

## Happy path
- Open the Stitch-exported demo for p005.
- Confirm the first screen is the working app, not a marketing landing page.
- Confirm these sections exist: Six-photo profile strip with freshness and trust badges; Current-look proof checklist for today-photo, full-body, smile, hobby, social, and no-filter evidence; Cringe risk meter for car flex, old travel bait, sunglasses overload, gym mirror, and group confusion; Conversation impact preview showing what a match may ask next; Before/after photo order builder; Friend verdict card designed to screenshot and share; Tiny prompt bank for asking for a fresh photo without sounding creepy.
- Confirm sample data matches: S9, S10.

## Edge cases
- Long labels and Korean/English mixed copy do not overflow.
- Empty or risky inputs show useful next actions.
- Urgent states are visible without overwhelming the assigned playful-experimental profile.

## Acceptance verification
- /home/sy/Downloads/stitch_drop/2026-06-17/p005/code.html exists after Stitch export.
- /home/sy/Downloads/stitch_drop/2026-06-17/p005/screen.png exists after Stitch export.
- The resulting PF ingest preserves the original Stitch environment as the main demo.
