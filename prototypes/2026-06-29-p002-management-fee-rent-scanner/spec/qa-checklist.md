# QA checklist

## Happy path
- First screen opens directly into the working app.
- All required UI sections are visible or reachable from the first screen.
- Sample data matches the target user and source-signal context.
- The main CTA advances the key UX: Renter enters listing rent, management-fee line items, prior bills, utilities, and disclosure gaps; the app flags suspicious charges and builds a negotiation checklist.

## Edge cases
- Long Korean/English labels wrap without overlapping controls.
- Risk badges and warning states are legible without using excessive red.
- The interface still works on a mobile-width viewport where appropriate.
- No section reads as placeholder, lorem ipsum, or generic SaaS filler.

## Acceptance verification
- Title, one-liner, target user, profile, theme, and source signals match daily/2026-06-29/ideas.md.
- Stitch prompt is copied exactly from the daily idea pack.
- No custom demo implementation is added during Phase A.
