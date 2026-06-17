# PF UI System

This project uses StyleSeed as a reference layer, not as an installed dependency.
The goal is to improve PF's gallery, demo wrapper, and daily Stitch prompt quality
without changing preserved Stitch exports.

## Reference Source

- StyleSeed repo: `https://github.com/bitjaru/styleseed`
- Reference commit checked during this pass: `34e9fcf2d3da69355defad7afa5e50ff15ed8cb2`
- Relevant files read:
  - `engine/DESIGN-LANGUAGE.md`
  - `engine/VISUAL-CRAFT.md`
  - `engine/APP-PLAYBOOKS.md`
  - `engine/PAGE-TYPES.md`
  - `skins/linear/skin.json`
  - `skins/vercel/skin.json`
  - `skins/raycast/skin.json`

## Non-Negotiables

1. Do not install StyleSeed or copy its runtime components into PF by default.
2. Do not rewrite or restyle `demo/original/code.html` or copied Stitch demo HTML.
3. Keep `/d/<id>` environment-preserving: the original Stitch experience remains
   the main iframe content.
4. Use one primary accent for PF site chrome. Semantic red, green, and amber are
   allowed only for status meaning.
5. Prefer compact, operator-grade surfaces over marketing hero pages.

## Site Chrome Rules

- Radius: use `rounded-lg` for cards, buttons, panels, and preview frames.
- Borders: use one neutral 1px border family. Avoid border plus heavy shadow.
- Shadow: use only subtle tokenized shadows (`shadow-card`, `shadow-lift`).
- Accent: reserve `primary` for active filters, main CTAs, and selected states.
- Type: use weight and spacing for hierarchy; avoid oversized hero type inside
  operational panels.
- Numbers: keep tabular numerals enabled for counts, dates, and KPI-like values.
- Controls: buttons, inputs, and selects should share 40-44px heights.
- Lists/cards: title first, metadata quiet, action row stable.
- Mobile: keep filters horizontally scrollable and controls at 40px minimum.

## Gallery Page Bias

Domain blend: SaaS dashboard + productivity workspace.

- Job: scan many prototypes quickly, filter by intent, open demo/details.
- Top section: one clear operational statement, then compact stats.
- Priority section: sales-validation candidates should read as ranked work items,
  not decorative marketing cards.
- Card grid: consistent card anatomy beats visual variety here.
- Empty/missing visuals: provide a quiet recovery hint instead of a blank panel.

## Demo Wrapper Bias

Domain blend: developer tool + quality assurance surface.

- The wrapper is chrome around the prototype, not the prototype itself.
- Device presets should feel like a testing toolbar.
- Full-tab access stays visible.
- The iframe frame must not cover, crop, or cosmetically replace the original demo.

## Daily Stitch Prompt Rule

Every Stitch prompt should include a design profile, but the profile must be
expressed as concrete UI judgment:

- one accent and disciplined neutral ramp
- explicit density level
- card/control radius personality
- expected first-screen layout pattern
- state coverage for key data surfaces
- what to avoid

Weak: "make it modern and clean."
Strong: "use a compact SaaS workbench with one indigo action accent, neutral
cards, 40px controls, dense queue rows, visible empty/error states, and no
decorative gradient hero."
