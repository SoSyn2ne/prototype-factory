# QA checklist

## Happy path
- Tap a product tag anonymously, compare variants and a bundle, then mark purchase intent.
- Turn the vendor price dial, preview all twelve changes, and publish the mocked tag update.

## Edge cases
- Sold out, tag offline, stale sync, missing price, conflicting bundle, seller cancels a bulk update.

## Acceptance verification
- Title, one-liner, target user, key UX, profile, theme, UI sections, and S03 reference match ideas.md and meta.json.
- Exactly one design profile is used: premium-editorial.
- Price and stock contrast remains strong despite the refined visual tone.
- Shopper 390px and seller 1024px layouts both preserve the core interaction.
- No real payment, personal pricing, placeholder, or Phase A custom demo exists.
