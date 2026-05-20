# QA checklist

## Happy path
- User lands on a complete product surface, not a marketing page.
- All required UI sections are visible or reachable.
- Sample data demonstrates the cited external signals.
- Primary CTA produces a packet, checklist, decision, zine, or export preview.

## Edge cases
- Missing evidence or incomplete documents are explicitly called out.
- High-risk states use clear labels and do not rely on color alone.
- Long titles and source names fit on mobile.
- The UI remains usable without external API calls.

## Acceptance verification
- meta.json includes title, oneLiner, designProfile, theme, externalSignals, and stitchPrompt.
- spec/prd.md includes target user, key UX, required sections, signal references, and full Stitch prompt.
- Slot 2026-05-20-p003 exists for the day.
