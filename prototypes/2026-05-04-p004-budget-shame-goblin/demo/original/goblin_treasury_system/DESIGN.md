---
name: Goblin Treasury System
colors:
  surface: '#0e1416'
  surface-dim: '#0e1416'
  surface-bright: '#333a3c'
  surface-container-lowest: '#080f11'
  surface-container-low: '#161d1f'
  surface-container: '#1a2123'
  surface-container-high: '#242b2d'
  surface-container-highest: '#2f3638'
  on-surface: '#dde4e6'
  on-surface-variant: '#bdc9c3'
  inverse-surface: '#dde4e6'
  inverse-on-surface: '#2b3234'
  outline: '#87938e'
  outline-variant: '#3e4945'
  surface-tint: '#77d8bc'
  primary: '#77d8bc'
  on-primary: '#00382c'
  primary-container: '#3da188'
  on-primary-container: '#003026'
  inverse-primary: '#006b57'
  secondary: '#ecb2ff'
  on-secondary: '#520071'
  secondary-container: '#6f258e'
  on-secondary-container: '#e59dff'
  tertiary: '#efc209'
  on-tertiary: '#3c2f00'
  tertiary-container: '#cea700'
  on-tertiary-container: '#4e3e00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#94f5d8'
  primary-fixed-dim: '#77d8bc'
  on-primary-fixed: '#002019'
  on-primary-fixed-variant: '#005141'
  secondary-fixed: '#f8d8ff'
  secondary-fixed-dim: '#ecb2ff'
  on-secondary-fixed: '#320047'
  on-secondary-fixed-variant: '#6c228c'
  tertiary-fixed: '#ffe084'
  tertiary-fixed-dim: '#eec209'
  on-tertiary-fixed: '#231b00'
  on-tertiary-fixed-variant: '#574500'
  background: '#0e1416'
  on-background: '#dde4e6'
  surface-variant: '#2f3638'
typography:
  h1:
    fontFamily: Newsreader
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  h3:
    fontFamily: Newsreader
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  data-mono:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-page: 40px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The design system is built on the concept of a "High-Fidelity Hoard." It merges the gritty, textured world of folklore with the precision of modern wealth management. The brand personality is that of a "frenemy" financial advisor—a mischievous goblin who hoards your gold but wants you to grow your pile.

The visual style is **Glassmorphism with Organic Textures**. Surfaces are not just translucent; they contain "micro-moss" noise and soft grain to simulate an ancient, enchanted environment. The aesthetic moves away from sterile corporate fintech toward an immersive, "Loot & Ledger" experience, where every transaction feels like an entry in a magical scroll.

## Colors

The palette is anchored in **Deep Charcoal (#2D3436)** and **Mossy Green (#218C74)**, creating a subterranean, earthy foundation. 

- **Neon Purple (#8E44AD)** serves as the "Guilt" and "Magic" indicator, used for overspending alerts and interactive enchantments.
- **Gold (#F1C40F)** is reserved for rewards, savings goals, and high-value data points, symbolizing the "Hoard."
- **Glass Surfaces** utilize a semi-transparent version of the charcoal neutral to allow background "cavern" textures to bleed through.
- **Glowing Accents** use the purple and gold with high-saturation glows (box-shadows) to represent active magical states.

## Typography

This design system utilizes a high-contrast typographic pairing to balance the whimsical theme with financial utility.

- **Headings (Newsreader):** A literary, editorial serif that evokes storybook charm. It should be used for personality-driven copy and page titles.
- **Body & Interface (Manrope):** A clean, modern sans-serif that ensures financial legibility and professional reliability.
- **Financial Data (Space Grotesk):** A technical, geometric font used for currency, percentages, and labels. Its slightly quirky "g" and "y" characters echo the goblin theme while maintaining a grid-based, fintech feel.

## Layout & Spacing

The design system employs a **12-column fluid grid** for data-heavy dashboards, but utilizes **organic, asymmetrical spacing** for narrative elements. 

- **The Layout:** Content is housed within "Hoard Containers" that use 24px gutters.
- **Rhythm:** An 8px base unit drives all padding and margins. 
- **The "Goblin Gap":** Layouts should avoid perfect symmetry. Use slightly varied padding (e.g., `pt-10 pb-8`) to give the UI an "artisan-crafted" rather than "factory-made" feel.

## Elevation & Depth

Depth is conveyed through **Glassmorphism and Layered Illumination** rather than traditional drop shadows.

1.  **The Floor (Level 0):** Deep Charcoal with a subtle "moss" noise texture overlay.
2.  **The Vessel (Level 1):** Semi-transparent surfaces (`rgba(45, 52, 54, 0.6)`) with a 12px backdrop-blur and a 1px inner border in Mossy Green (#218C74) at 30% opacity.
3.  **The Focus (Level 2):** Modals and active cards use a stronger blur (24px) and a **Neon Purple or Gold glowing border** (2px width, 8px spread).
4.  **The Goblin's Breath:** Subtle, slow-pulsing radial gradients in the background simulate ambient "cavern" light, shifting between purple and charcoal.

## Shapes

The shape language is **Organic and Softened**. 

While the system uses a standard `0.5rem` (8px) base for buttons, **Cards and Containers** should utilize "Squircle" or heavily rounded corners (`1.5rem`) to feel like pebbles or smoothed treasure. 

Avoid sharp 90-degree angles entirely to maintain the "gentle goblin" persona. Icons should be encased in circular or "blob-like" decorative frames to reinforce the whimsical, non-linear nature of the brand.

## Components

### Buttons
- **Primary (The Gold Mine):** Solid #F1C40F background with black text. On hover, add a 10px gold outer glow.
- **Secondary (The Moss Path):** Ghost style with #218C74 borders. On hover, the background fills with a subtle moss-green gradient.
- **Shame Action:** For "bad" financial moves, use a #8E44AD border with a vibrating hover animation.

### Cards (The Hoard)
Cards feature the signature glassmorphism. They must include a `backdrop-filter: blur(12px)` and a subtle "grain" SVG filter to mimic stone or moss. Headers within cards use the Newsreader serif.

### Input Fields
Inputs are dark, recessed wells with bottom-only borders in Mossy Green. When focused, the border "blooms" into a Neon Purple glow, symbolizing the goblin's attention shifting to your data.

### Guilt Indicators (The Goblin's Eye)
A custom progress bar component where the "filled" portion uses a gradient from Gold to Purple. As the user nears their budget limit, the Purple "guilt" color dominates the bar, accompanied by a small goblin-ear icon that perks up.

### Custom Components
- **The Treasure Pile:** A visual widget showing savings as a stack of illustrated gold coins that grows physically larger.
- **The Cave Map:** A whimsical version of a pie chart, styled like a hand-drawn treasure map using charcoal and gold ink lines.