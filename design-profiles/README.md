# PF Design Profiles

These profiles are reusable design-direction presets for Prototype Factory ideas.

## Purpose
- Give every candidate idea exactly one default design profile.
- Reduce vague or generic design-direction writing.
- Keep Stitch prompts and future non-Stitch UI generation more consistent.

## Default profiles
1. `operator-dense`
2. `premium-editorial`
3. `field-ops`
4. `financial-analyst`
5. `calm-consumer`
6. `playful-experimental`

## Rule
- Every PF candidate idea must be assigned exactly one design profile.
- The profile name must appear in `daily/YYYY-MM-DD/ideas.md`.
- The profile summary should be reflected in `meta.json` and `spec/prd.md`.
- The Stitch prompt should include the profile guidance inline, adapted to the specific product.
- Apply `docs/UI_SYSTEM.md` when translating a profile into UI: one accent, one radius system, consistent controls, clear states, and no generic "modern dashboard" phrasing.

## Selection heuristic
- Revenue ops / tables / triage / prioritization -> `operator-dense`
- Premium hospitality / curated service / elegant control -> `premium-editorial`
- Field teams / dispatch / service workflows / labor risk -> `field-ops`
- Investor / research / strategy / signal reading -> `financial-analyst`
- Family / lifestyle / guidance / reassurance -> `calm-consumer`
- Portfolio bait / novelty / shareable / bold concept -> `playful-experimental`
