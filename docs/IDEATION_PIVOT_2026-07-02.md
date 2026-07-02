# PF Ideation Pivot - 2026-07-02

## Decision

Prototype Factory ideation is moving away from hallucination-first idea
generation.

The model is no longer the source of the idea. The source is observed pull:
searches, complaints, community questions, purchases, templates, screenshots,
offline rituals, repo momentum, policy deadlines, or repeated workarounds. The
model translates those signals into a product wedge, validation format, and
Stitch prompt.

## Why

The 2026-07-02 Phase A batch had useful search notes, but the final selection
still drifted into familiar proof-packet and money-defense ideas. It missed
several operator requirements:

- domestic 4 / overseas 4 balance
- desire-axis spread across the seven themes
- `loved_by_small_group` scoring
- `spread_trigger`
- GitHub rising repo scan documentation
- hard rejection of repeated money-defense/proof-packet patterns

That means search alone is not enough. The selection gate must be explicit.

## New Rule

Every `/pf idea` and daily Phase A run must pass the anti-hallucination gate
before Stitch prompts are considered complete:

- Search-first signal lanes are written before candidate synthesis.
- `GitHub Rising Repo Scan` is attempted and documented, even if no repo idea
  survives.
- Final 8 include domestic/Korea vs overseas/global classification.
- Final 8 include `loved_by_small_group` and `spread_trigger`.
- No default batch has more than 2 candidates in the same desire axis.
- No default batch has more than 2 candidates in the same money-defense,
  appeal, or proof-packet pattern.
- Recent 7 daily batches are checked for near-duplicates.
- Failed gates trigger reselection, not a completion report.

## Practical Effect

Good PF ideas should feel less like generic dashboards and more like translated
evidence from a real behavior:

- a complaint people already post repeatedly
- a spreadsheet they already maintain
- a receipt, photo, text thread, form, or policy deadline they already collect
- a local/offline workflow that can become a sharper product ritual
- a shareable artifact that relieves money, status, relationship, health, or
  opportunity pressure

The desired output is not "8 clever app names." It is 8 evidence-backed wedges
that a small group could strongly love.
