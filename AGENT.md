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
