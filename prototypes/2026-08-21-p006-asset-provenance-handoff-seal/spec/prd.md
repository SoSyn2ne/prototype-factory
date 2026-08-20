# PRD — Asset Provenance Handoff Seal

## Problem
Package creative assets with origin, edits, consent, and delivery proof before client handoff.

## Target user
Design studios, photographers, AI-assisted creative teams

## Key UX
Drop an asset batch, attach source and edit claims, detect missing provenance, then seal a client-facing manifest beside deliverables.

## Required UI sections
- asset batch tray
- origin and license claims
- edit history ribbon
- consent/model release links
- missing-proof queue
- sealed handoff manifest

## Design profile
- premium-editorial

## Theme
- creative trust / provenance fragility

## Source signal references
- S10: watermarks-remover reached 16k stars after offering multi-format removal of AI provenance marks, highlighting provenance fragility and handoff disputes. (https://github.com/guillaumemeyer/watermarks-remover)
- S11: anydoc reached 17k stars for offline conversion of documents into Markdown, showing strong pull for inspectable local file workflows. (https://github.com/firecrawl/anydoc)

## Reference pattern / twist
- Pattern: chain-of-custody manifest
- Twist: Uses provenance removal pressure to make client handoff proof legible and elegant, not a forensic backend.
- Small-group fit: Small studios already send ZIP files and scattered license screenshots; seal turns them into one professional artifact.
- Spread trigger: Client-facing seal travels with every delivered asset and differentiates trustworthy studios.

## Stitch prompt

```text
Create a polished working app called "Asset Provenance Handoff Seal" for design studios and AI-assisted creative teams. First screen: a visual asset batch tray with origin, license, consent, and edit-proof completeness for every file. Core interaction: attach claims and evidence, inspect metadata changes, resolve missing proof, then seal a client-facing manifest alongside the delivery bundle. Required sections: asset tray, origin/license claims, edit-history ribbon, consent links, missing-proof queue, sealed manifest preview. Design direction: use the premium-editorial profile with restrained black/ivory typography, one cobalt accent, generous asset previews, crisp 8px cards, refined document hierarchy, and explicit complete/missing/disputed states; avoid crypto styling and generic analytics.
```

## QA / screenshot criteria
- First screen communicates the core job in 3 seconds.
- All required sections and meaningful empty/error/success states appear.
- Exactly one design profile is used: premium-editorial.
- Desktop and mobile remain usable.
