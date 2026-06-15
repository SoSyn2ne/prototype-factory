---
name: Vibe Shift
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#494454'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#7b7486'
  outline-variant: '#cbc3d7'
  surface-tint: '#6d3bd7'
  primary: '#6b38d4'
  on-primary: '#ffffff'
  primary-container: '#8455ef'
  on-primary-container: '#fffbff'
  inverse-primary: '#d0bcff'
  secondary: '#6d5e00'
  on-secondary: '#ffffff'
  secondary-container: '#fcdf46'
  on-secondary-container: '#726200'
  tertiary: '#006a34'
  on-tertiary: '#ffffff'
  tertiary-container: '#008644'
  on-tertiary-container: '#f6fff3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#d0bcff'
  on-primary-fixed: '#23005c'
  on-primary-fixed-variant: '#5516be'
  secondary-fixed: '#ffe24c'
  secondary-fixed-dim: '#e2c62d'
  on-secondary-fixed: '#211b00'
  on-secondary-fixed-variant: '#524600'
  tertiary-fixed: '#6dfe9c'
  tertiary-fixed-dim: '#4de082'
  on-tertiary-fixed: '#00210c'
  on-tertiary-fixed-variant: '#005227'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-xl:
    fontFamily: Bricolage Grotesque
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-xl-mobile:
    fontFamily: Bricolage Grotesque
    fontSize: 36px
    fontWeight: '800'
    lineHeight: '1.1'
  headline-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Bricolage Grotesque
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.5'
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-mono:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  sticker-sm:
    fontFamily: Bricolage Grotesque
    fontSize: 12px
    fontWeight: '800'
    lineHeight: '1'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 120px
---

## Brand & Style

The brand personality is high-energy, unapologetically social, and experimental. It shifts the dating narrative from "finding the one" to "sharing the energy." The target audience consists of urban socials, event-goers, and people who prioritize chemistry over profiles. 

The design style is **Bricolage-Modernist**: a mix of clean layouts and expressive, almost "sticker-book" chaos. It utilizes elements of **Brutalism** (heavy strokes and bold contrast) tempered by **Modernist** precision. The goal is to evoke the feeling of a vibrant physical mixer—noisy, colorful, and kinetic—while maintaining the utility required for complex event logistics.

## Colors

The palette is built on high-vibrancy "Electric" tones to maintain a pulse of excitement throughout the experience.

- **Primary (Electric Purple):** Used for core actions, active states, and "Prime Energy" indicators.
- **Secondary (Sunny Yellow):** Used for attention-grabbing accents, status stickers, and "Spark" moments.
- **Tertiary (Mint Green):** Reserved for mutual opt-ins, "Ready" states, and positive rotations.
- **Neutral (Ink Blue/Black):** Used for heavy borders and high-contrast typography to ensure legibility against the vibrant accents.
- **Background:** A crisp, high-brightness off-white to allow the bold colors to "pop" without creating visual fatigue.

## Typography

The typography strategy is built on a "Functional vs. Expressive" axis. 

- **Headlines:** Use Bricolage Grotesque with tight tracking and heavy weights. These should feel loud and intentional.
- **Body:** Work Sans provides a grounded, professional contrast to the expressive headlines, ensuring that table instructions and bio details are easily scannable.
- **Data/Status:** Space Mono is used for "Table Rotations," "Time Remaining," and "Seat Numbers." The monospaced nature emphasizes the "game mechanics" of the mixer.
- **Hierarchy:** Use extreme scale differences. A large display headline should often sit right next to a small, monospaced label.

## Layout & Spacing

This design system uses a **Rigid Grid with Fluid Overlays**. 

- **The Grid:** A strict 12-column grid for desktop and a 4-column grid for mobile. All primary containers must snap to this grid with 2px solid black borders.
- **Spacing Rhythm:** Use an 8px base unit. Component padding should be generous (24px+) to prevent the bold borders from feeling cramped.
- **The "Energy" Overlay:** Status stickers and "Spark" icons do not follow the grid; they are placed at slight rotations (between -3 and +3 degrees) to break the rigidity and add a sense of physical, handheld playfulness.
- **Table View:** For table rotations, use a horizontal "strip" layout that clearly separates "Current Table" from "Next Up," utilizing heavy gutters to delineate the transition.

## Elevation & Depth

Depth is not achieved through shadows or blurs, but through **Hard Offsets and Layering**.

- **Hard Shadows:** Instead of blurs, use "Hard-Stop" shadows. A 4px or 8px solid black offset (`#0F172A`) behind cards and buttons to give them a "pop-out" sticker effect.
- **Tonal Stacking:** Use high-contrast background fills to denote hierarchy. A Primary Purple button sits on a Sunny Yellow card, which sits on a White background.
- **Stroke-Weight Depth:** Elements "closer" to the user have thicker borders (3px), while secondary elements have thinner borders (1px).
- **Zero Transparency:** Avoid glassmorphism or opacity. All colors must be 100% opaque to maintain the bold, graphic aesthetic.

## Shapes

The shape language is "Geometric-Industrial."

- **Containers:** Use `rounded-sm` (4px) for most cards and containers. The radius should be just enough to take the edge off, but not enough to look "soft" or "bubbly."
- **Interactive Elements:** Buttons and Inputs should match the 4px radius.
- **Stickers/Badges:** These are the exception. "Energy Stickers" can be irregular polygons, starbursts, or circles to contrast against the rectangular grid.
- **Borders:** Every container must have a minimum 2px solid border in the Neutral color.

## Components

- **Buttons:** High-contrast fills (Primary or Secondary) with a 4px black hard-offset shadow. On hover, the shadow disappears, and the button "pushes" down into the page.
- **Energy Stickers:** Small, floating badges with "Status" text (e.g., "VIBING," "TALKATIVE," "CHILL"). These use the `sticker-sm` type and are rotated slightly.
- **Table Rotation Cards:** Large containers that use Mint Green for the "Current Seat" and light grey for "Future Seats." They use Space Mono for the seat numbers to feel like a boarding pass or ticket.
- **Spark Toggle:** A custom checkbox that replaces the standard tick with a Sunny Yellow "Spark" icon when active.
- **Input Fields:** Thick 2px borders with `label-mono` descriptions sitting on top of the border line (breaking the frame), creating a technical, "form-fill" vibe.
- **Mutual Opt-in "Match":** A full-screen takeover with a split-diagonal layout using Primary Purple and Secondary Yellow, featuring large-scale `display-xl` typography.