# QA checklist

## Happy path
- All required UI sections from the idea appear in the Stitch output.
- The first screen communicates: A homeowner evidence workspace for fighting insurance roof flags from drone, satellite, or virtual inspections.
- The main workflow supports: The homeowner enters the insurer notice, roof age, inspection deadline, photos, roofer letters, and recent repairs; the app builds a response timeline, evidence checklist, contractor packet, and appeal letter.
- Design direction visibly follows calm-consumer.

## Edge cases
- Long source names, URLs, or evidence labels do not break cards.
- Mobile view keeps primary controls usable.
- Empty states explain the next input without adding marketing fluff.

## Acceptance verification
- meta.json includes designProfile, theme, externalSignalRefs, stitchPrompt, and expectedDropFolder.
- spec/prd.md contains the idea text, signal references, and Stitch prompt.
- Drop folder expected for ingest: /home/sy/Downloads/stitch_drop/2026-05-27/p003/
