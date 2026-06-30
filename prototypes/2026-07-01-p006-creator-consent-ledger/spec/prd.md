# PRD - Creator Consent Ledger

## Problem
- “Fair use” feels different when your face, voice, article, or fan community becomes someone else’s model fuel.
- Source signals: S15 (SFGate, 2026-06-30); S16 (The Guardian, 2026); S17 (AP, 2025)

## One-liner
- A creator rights ledger that turns voice, image, writing, and dataset-use permissions into a visible licensing and takedown trail.

## Target user
- Independent creators and small publishers worried their work, likeness, or community content is being scraped into AI systems.

## Key UX
- Creators catalog works, mark what was licensed or never consented to, attach scrape/use evidence, and generate a licensing ask or takedown notice.

## Required UI sections
- Work catalog intake
- Consent status timeline
- AI-use evidence drawer
- License ask calculator
- Takedown/notice draft

## Design profile
- premium-editorial
- use the `premium-editorial` profile with refined typography, archival content cards, one ink-black CTA accent, and polished document previews; avoid generic legal-tech dashboards.

## Theme
- 자산 방어

## Output artifact
- Consent ledger page plus takedown/licensing draft.

## First validation test
- Test with newsletter writers and artists by measuring whether they complete a consent ledger for one work collection.

## Stitch prompt

```text
Create a responsive web app called "Creator Consent Ledger" for Independent creators and small publishers worried their work, likeness, or community content is being scraped into AI systems.. The app is based on observed user pull: 35 newspaper publishers representing nearly 400 local outlets sued OpenAI and Microsoft over alleged scraping of paywalled/copyrighted content. Actors, musicians, and authors back a campaign accusing AI firms of using creative work without permission or compensation. Reddit sued Anthropic over alleged scraping of user comments and personal information to train Claude. The app should use a rights ledger around the trigger moment "“Fair use” feels different when your face, voice, article, or fan community becomes someone else’s model fuel." and make the first screen communicate "“Fair use” feels different when your face, voice, article, or fan community becomes someone else’s model fuel.". Use the user's own language: "A creator rights ledger that turns voice, image, writing, and dataset-use permissions into a visible licensing and takedown trail.". Build the core workflow around consent/takedown timeline and produce Consent ledger page plus takedown/licensing draft.. Required sections: Work catalog intake; Consent status timeline; AI-use evidence drawer; License ask calculator; Takedown/notice draft. Emotional pressure to make visible: 자산 방어, with loss of money, time, reputation, or health clarity. Design direction: use the `premium-editorial` profile with refined typography, archival content cards, one ink-black CTA accent, and polished document previews; avoid generic legal-tech dashboards. Avoid generic dashboard framing; make the main interaction feel like a rights ledger.
```
