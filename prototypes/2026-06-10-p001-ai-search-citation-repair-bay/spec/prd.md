# PRD — AI Search Citation Repair Bay

## Problem
- AI search answers can misname, omit, or under-cite local businesses, sending customers to competitors or stale facts.
- Local owners usually know their business facts but do not know which pages, listings, reviews, or third-party citations an AI answer is relying on.
- The product must feel like a repair bay, not a generic SEO dashboard.

## Target user
- Independent local businesses, clinics, salons, accountants, and niche service firms without a dedicated SEO team.

## Constraints
- Time: Phase A spec only; Stitch will generate the first visual prototype.
- Budget: no paid APIs or external LLM calls in this phase.
- Platform: responsive web app concept, optimized for desktop owner/operator work with mobile review support.

## Non-goals
- No automated scraping or ranking claims.
- No promise that AI answer providers will update quickly.
- No custom demo implementation in Phase A.

## Success metrics
- Owner can identify the highest-severity wrong AI answer in under 60 seconds.
- Owner can export a repair packet with at least 5 prioritized citation actions.
- UI clearly distinguishes bad facts, missing citations, and competitor displacement.

## Notes
- Assigned design profile: operator-dense.
- Theme: 자산 방어.
- Source signals: S1, S2, S3 from daily/2026-06-10/ideas.md.
- Stitch prompt: Create a responsive web app prototype called "AI Search Citation Repair Bay" for independent local business owners who need to fix how AI search engines describe and cite them. Build the main screen as an operator console with a brand fact card, AI answer comparison lanes for Google AI Overview, ChatGPT, Perplexity, and local search, a citation gap table, a prioritized repair queue, competitor mention map, copy-ready citation patch snippets, weekly watchlist, and an exportable repair packet. Use realistic sample data for a local dental clinic that is being confused with a competitor in another neighborhood. Design direction: follow the operator-dense profile with disciplined B2B console styling, compact tables, crisp severity badges, charcoal/fog surfaces, and one sharp action accent for urgent citation fixes. Make the core interaction feel like triage: select a bad AI answer, inspect the missing/wrong source, assign a repair action, and see the packet update.
