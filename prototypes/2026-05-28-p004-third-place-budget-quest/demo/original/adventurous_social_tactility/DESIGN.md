---
name: Adventurous Social Tactility
colors:
  surface: '#fff9ef'
  surface-dim: '#e1d9c7'
  surface-bright: '#fff9ef'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fbf3e0'
  surface-container: '#f6edda'
  surface-container-high: '#f0e7d5'
  surface-container-highest: '#eae2cf'
  on-surface: '#1f1b10'
  on-surface-variant: '#4d4732'
  inverse-surface: '#343024'
  inverse-on-surface: '#f9f0dd'
  outline: '#7e775f'
  outline-variant: '#d0c6ab'
  surface-tint: '#705d00'
  primary: '#705d00'
  on-primary: '#ffffff'
  primary-container: '#ffd700'
  on-primary-container: '#705e00'
  inverse-primary: '#e9c400'
  secondary: '#6b38d4'
  on-secondary: '#ffffff'
  secondary-container: '#8455ef'
  on-secondary-container: '#fffbff'
  tertiary: '#006a61'
  on-tertiary: '#ffffff'
  tertiary-container: '#80ecde'
  on-tertiary-container: '#006b62'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe16d'
  primary-fixed-dim: '#e9c400'
  on-primary-fixed: '#221b00'
  on-primary-fixed-variant: '#544600'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#89f5e7'
  tertiary-fixed-dim: '#6bd8cb'
  on-tertiary-fixed: '#00201d'
  on-tertiary-fixed-variant: '#005049'
  background: '#fff9ef'
  on-background: '#1f1b10'
  surface-variant: '#eae2cf'
typography:
  display-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Bricolage Grotesque
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Bricolage Grotesque
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-bold:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  micro-copy:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 40px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The design system is built on the concept of "Digital Scrapbooking"—merging the tactile, physical world of board games and field journals with high-energy social gaming. It targets friend groups seeking adventure without the friction of planning, evoking feelings of spontaneity, nostalgia, and friendly competition.

The aesthetic follows a **Tactile / Bold** movement. It rejects the sterility of flat UI in favor of "squishy" buttons, heavy shadows, and paper-like textures. It uses a high-contrast palette to communicate urgency and excitement, while the "Tactile Cream" background prevents the interface from feeling over-digitized, providing a grounded, physical canvas for quest-based interactions.

## Colors

The color palette is high-contrast and functional, designed to distinguish between different "game states" within the quest:

- **Quest Gold (Primary):** Used for rewards, achievements, and active quest markers. It signifies value and progress.
- **Electric Purple (Secondary):** The brand's energy. Used for primary interactions, social features, and "the unknown."
- **Broke-Friendly Green (Tertiary):** Used for budget-friendly indicators and "Go" signals.
- **Warning Orange & Safety Pink (Accents):** Used for "Hidden Cost" alerts and the "Awkwardness Valve" (emergency exit or social icebreakers).
- **Tactile Cream (Background):** A warm, off-white base that mimics aged paper or a clean game board, providing a soft contrast to the vibrant primary colors.

## Typography

This design system utilizes a "Hero/Sidekick" typographic pairing. 

**Bricolage Grotesque** serves as the expressive display font. Its quirky, slightly eccentric letterforms provide the "game energy" required for quest titles, victory states, and major headers. Use tighter tracking and line-height for large headlines to emphasize its bold personality.

**DM Sans** acts as the utilitarian anchor. It is a clean, geometric sans-serif that ensures readability for quest descriptions, budget breakdowns, and UI labels. It should be used for all functional micro-copy to balance the visual weight of the display font.

## Layout & Spacing

The layout philosophy follows a **Modular Card** model. Rather than a standard rigid grid, the UI is treated as a series of "Quest Cards" stacked on a board. 

- **Grid:** Use a 4-column grid for mobile and a 12-column grid for desktop.
- **Rhythm:** Spacing is strictly based on 4px increments. Use `stack-md` (24px) for most vertical gaps between related items.
- **Organic Alignment:** Elements within "map snippets" or "scrapbook sections" should have slight rotational offsets (e.g., -1 to +1 degrees) to mimic the feeling of items laid out by hand on a physical table.
- **Safe Zones:** High-contrast borders should be used to define containers, with generous internal padding (min 20px) to maintain a "roomy" board-game feel.

## Elevation & Depth

Depth in this design system is conveyed through **Hard-Shadow Tactility** rather than soft blurs.

- **Level 1 (Surface):** The Tactile Cream background. 
- **Level 2 (Cards):** Quest cards use a 4px solid black or dark purple offset shadow (non-diffused). This creates a "cut-out paper" effect.
- **Level 3 (Interactive):** Active buttons and markers use an 8px offset shadow.
- **Press State:** When an element is pressed, the shadow disappears and the element translates (moves) down and to the right by the shadow's width, mimicking a physical click-in.
- **Overlays:** Modals and quest details use a semi-transparent "Newspaper Grey" backdrop with a heavy blur to keep focus on the physical card appearing in the foreground.

## Shapes

The shape language is consistently **Rounded & Chunkier**. 

- **Containers:** Standard cards use `rounded-lg` (1rem). 
- **Buttons:** Interactive game buttons use `rounded-xl` (1.5rem) or pill-shapes to invite clicking.
- **Icons/Markers:** Map markers and progress trackers use organic, slightly imperfect circles to maintain the "hand-drawn" aesthetic. 
- **Borders:** Use thick 2px or 3px stroke widths for all card borders to reinforce the high-contrast, physical boundary.

## Components

- **Quest Cards:** The primary unit. Features a thick border, 4px offset shadow, and a "texture overlay" (subtle noise or paper grain). Headers use Bricolage Grotesque.
- **Game Buttons:** These must feel "pressable." They feature a primary color fill, a thick bottom border that acts as a 3D edge, and white text. The button "sinks" on click.
- **Progress Trackers:** Styled like board game paths (curved lines with dotted segments). Completed "nodes" turn into Quest Gold stars; upcoming nodes are simple circles.
- **Map Snippets:** Rectangular containers with "torn paper" edges (SVG masks) and hand-drawn marker styles for location pins.
- **The "Awkwardness Valve":** A Safety Pink floating action button (FAB) with a heart or safety-pin icon, always accessible for quick social pivots.
- **Budget Chips:** Small, tactile capsules using "Broke-Friendly Green" or "Warning Orange" to categorize costs at a glance.
- **Input Fields:** Styled like a physical form or "fill-in-the-blank" quest log, using underlined text fields instead of traditional boxes where possible to enhance the scrapbook feel.