# Prototype Factory Agent Instructions

<!-- styleseed-default-ui:start -->
## StyleSeed UI Standard

StyleSeed is the default design judgment layer for this project.
Before building or changing UI, read https://styleseed-demo.vercel.app/llms.txt and apply StyleSeed rules to every page, component, dashboard, mobile screen, game HUD, empty/loading/error/success state, and motion detail.

Golden rules to enforce:
- Keep content inside cards/surfaces, not bare page backgrounds.
- Use one accent color/brand token; everything else should be grayscale/system tokens.
- Avoid pure black and hardcoded hex in components; use semantic Tailwind/CSS tokens.
- Keep one coherent system for radius, spacing, shadows, icons, and accent usage.
- Use clear typography hierarchy; large numbers need smaller units with the right ratio.
- Build real UI states and feedback; do not leave static mockups or generic library demos.
- Touch targets should be at least 44×44px.
- Pick one StyleSeed skin/aesthetic per project and keep it coherent (Toss for Korean/consumer/mobile, Linear for tools/agent consoles, Stripe for SaaS/commerce analytics, Vercel for dev platforms, Notion for docs/workspaces).
- After generating a page, review it against StyleSeed rules or run `/ss-review` / `/ss-score` if those skills are available.
<!-- styleseed-default-ui:end -->

This file captures durable agent instructions for this project.

## PF Ideation Pivot

Daily Phase A and `/pf idea` must be signal-first. Do not use the model as a
hallucination engine for plausible app concepts. Use the model as a translator:
external signals and user workarounds in, product wedge and Stitch prompt out.

Before reporting Phase A complete, verify:
- `docs/IDEA_BOARD.md` gates are satisfied.
- `daily/YYYY-MM-DD/ideas.md` includes Hada/current news, GitHub Rising Repo
  Scan, community complaint/question, and non-web/offline lanes, or explicitly
  records why a lane was unavailable.
- The final 8 include domestic/Korea vs overseas/global classification,
  `loved_by_small_group`, `spread_trigger`, source lane counts, theme counts,
  and recent-7-days duplicate check.
- No default batch has more than 2 candidates in the same desire axis or the
  same money-defense/proof-packet pattern.

If any of those checks fail, say the batch is incomplete and reselect before
Stitch. Do not claim that the user's direction was reflected just because
search links exist.
