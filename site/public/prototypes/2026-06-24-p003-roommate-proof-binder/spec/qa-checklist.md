# QA checklist - Roommate Proof Binder

## Happy path
- Open the generated Stitch demo for p003.
- Confirm the first viewport is the working app, not a hero landing page.
- Confirm the main workflow supports: User lists household members, lease status, addresses, income proof, roommate exclusions, and landlord replies; the app builds a document map, appeal packet, and missing-proof script.
- Confirm all required sections appear: Application risk header with deadline and disputed household member; Roommate and lease relationship map; Document vault for leases, affidavits, utility bills, and address proof; Housing-office request vs available-proof comparison; Appeal timeline and reply tracker; Plain-language explanation script for impossible documents; Shareable proof packet export for portal upload.

## Edge cases
- Missing or weak evidence/data should show a visible gap state, not a blank panel.
- Risky or urgent states should be clear without using alarm red everywhere.
- Mobile layout should keep primary controls readable and non-overlapping.

## Acceptance verification
- Design profile visible: calm-consumer.
- Theme visible: 자산 방어 / 외로움 - renters avoiding rejection when bureaucracy misunderstands household reality..
- Source signals cited in metadata and PRD: S6, S7.
- Expected drop files: /home/sy/Downloads/stitch_drop/2026-06-24/p003/code.html and /home/sy/Downloads/stitch_drop/2026-06-24/p003/screen.png.
