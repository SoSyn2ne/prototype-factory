# PRD — Scrape Canary Studio

## Problem
- Creators can suspect scraping but struggle to connect a reused image to a dated publication source.

## Target user
- Independent illustrators, photographers, and small agencies.

## Arrival path
- Live source signal, operator search, or peer share.

## Business / validation route
- Test five target users completing the core loop with realistic local data.

## Core loop
- Add art → derive channel canaries → log publications → compare match → export evidence.

## First screen
- One artwork with four channel variants and provenance tokens.

## Key screens
- Artwork intake; canary map; publishing ledger; match viewer; confidence boundary; evidence packet.

## Interaction rules
- The product separates exact canary evidence from uncertain visual similarity.

## Output artifact
- Dated provenance and suspected-reuse case packet.

## Share / return loop
- Send packet to a platform, client, or advisor; revisit on new matches.

## Constraints
- Time: one-session prototype loop under 15 minutes.
- Budget: local mock data; no paid APIs.
- Platform: responsive web/mobile concept appropriate to the interaction.

## Non-goals
- No production integration, automated external action, or custom demo in Phase A.

## Success metrics
- 80% of five testers explain the core rule in 15 seconds and finish the main loop without help.

## QA / screenshot criteria
- Show no match, crop, stripped metadata, licensed use, and suspected scrape without overclaiming.

## Design profile
- premium-editorial

## Theme
- 자산 방어

## Source signal references
- S7 artist scraping reports and Lanternite; S11 reliability boundary.

## Development start prompt

```text
Build Scrape Canary Studio from this PRD using the premium-editorial profile, realistic local data, the listed interaction states, responsive desktop/mobile QA, and no paid external APIs.
```

## Notes
- Phase A scaffold only; Stitch export is handled by the separate 08:30 job.

