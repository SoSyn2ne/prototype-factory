---
name: Truth Mirror
colors:
  surface: '#faf9f7'
  surface-dim: '#dadad8'
  surface-bright: '#faf9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeec'
  surface-container-high: '#e9e8e6'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1b'
  on-surface-variant: '#454842'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#767872'
  outline-variant: '#c6c7c0'
  surface-tint: '#5d5f5a'
  primary: '#171916'
  on-primary: '#ffffff'
  primary-container: '#2c2e2a'
  on-primary-container: '#949590'
  inverse-primary: '#c6c7c1'
  secondary: '#615e58'
  on-secondary: '#ffffff'
  secondary-container: '#e4dfd7'
  on-secondary-container: '#65625c'
  tertiary: '#161a0c'
  on-tertiary: '#ffffff'
  tertiary-container: '#2a2f1f'
  on-tertiary-container: '#929781'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e3e3dd'
  primary-fixed-dim: '#c6c7c1'
  on-primary-fixed: '#1a1c19'
  on-primary-fixed-variant: '#454743'
  secondary-fixed: '#e7e2da'
  secondary-fixed-dim: '#cbc6be'
  on-secondary-fixed: '#1d1b17'
  on-secondary-fixed-variant: '#494741'
  tertiary-fixed: '#e0e5cc'
  tertiary-fixed-dim: '#c4c9b1'
  on-tertiary-fixed: '#191d0e'
  on-tertiary-fixed-variant: '#444937'
  background: '#faf9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e3e2e0'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 42px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  headline-sm:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  baseline: 4px
  container-max: 1140px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  stack-lg: 48px
  stack-md: 24px
  stack-sm: 12px
---

## Brand & Style

This design system is built on a foundation of **Editorial Minimalism** and **Atmospheric Professionalism**. The target audience is a discerning international clientele seeking transparency in the complex landscape of medical tourism. The UI must evoke an immediate sense of relief, clarity, and uncompromising authority.

The aesthetic blends high-fashion editorial layouts with the systematic precision of a medical journal. Key visual drivers include:
- **Quiet Luxury:** Utilizing expansive whitespace (negative space) to allow information to breathe, suggesting that the platform has nothing to hide.
- **Micro-Contrast:** High-precision borders and subtle tonal shifts rather than heavy shadows or loud colors.
- **Documentary Clarity:** A focus on scannability, utilizing structured grids that feel like a premium printed report.
- **Sophistication:** A rejection of typical "medical blue" in favor of organic, warm neutrals that feel human and grounded.

## Colors

The palette is designed to lower the user's heart rate while maintaining a sharp, professional edge.

- **Warm Charcoal (Primary):** Used for typography and primary structural elements. It provides the depth of black without the harshness, feeling more like premium ink on paper.
- **Soft Stone/Linen (Neutral):** The base of the UI. Rather than pure white, these off-white tones prevent eye strain and create a "material" feel.
- **Deep Sage (Tertiary/CTA):** A muted, botanical green used sparingly for calls to action and "verified" states. It represents growth, healing, and calm.
- **Restrained Contrast:** Use the secondary "Stone" color for subtle layering and card backgrounds to create a soft, non-invasive hierarchy.

## Typography

The typography strategy employs a "High-Low" pairing to balance heritage with modern utility.

- **Heading (Libre Caslon Text):** This serif choice provides the "Truth" in the system. It feels literary, established, and uncompromisingly premium. Use it for storytelling, clinic names, and major section headers.
- **UI & Data (Hanken Grotesk):** A clean, contemporary sans-serif with excellent legibility at small sizes. Use this for all functional elements, data tables, and body copy to ensure the medical information remains accessible and objective.
- **Hierarchy Rule:** Use all-caps labels with slight letter-spacing for category headers to create an organized, "indexed" feel across the platform.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid** model. Content is centered within a maximum-width container on desktop to maintain readability, while utilizing generous outer margins to emphasize the "Editorial" look.

- **Grid:** A 12-column grid for desktop, 6-column for tablet, and 2-column for mobile.
- **Rhythm:** Use a strict 4px/8px baseline shift. Vertical rhythm is critical; section spacing should be aggressive (e.g., `stack-lg`) to prevent information density from feeling overwhelming.
- **Data Tables:** When displaying refund data or clinic metrics, use a "No-Border" approach, relying on alignment and background tinting to separate rows, ensuring the interface feels light.

## Elevation & Depth

This design system avoids traditional shadows in favor of **Tonal Layering** and **Line-Work**.

- **Surfaces:** Depth is achieved by placing "Soft Stone" containers on top of "Neutral" backgrounds. 
- **Borders:** Use ultra-thin (1px) borders in a slightly darker neutral tint rather than shadows. This creates a "blueprint" or "archival" precision.
- **Interactive States:** When an element is hovered, use a subtle shift in background tone (e.g., from Neutral to Stone) rather than a lift effect.
- **Glassmorphism:** Reserved exclusively for navigation bars. Use a high-density backdrop blur (20px+) with a 90% opacity "Linen" tint to maintain context while scrolling.

## Shapes

The shape language is **Structured and Architectural**. 

- **Soft Corners:** Use the `Soft` (0.25rem) setting for most UI components (inputs, buttons, cards). This takes the "sting" off the medical context without becoming too playful or "bubbly."
- **Geometric Rigor:** Maintain sharp 0px corners for large hero sections or image containers to preserve the editorial, high-fashion aesthetic. 
- **Iconography:** Use light-weight (thin stroke) linear icons with slightly rounded terminals to match the typography's sophisticated tone.

## Components

### Buttons
- **Primary:** Warm Charcoal background with Stone text. Rectangular with minimal rounding. No icons unless for navigation.
- **Secondary:** Transparent background with a thin Charcoal border.
- **CTA:** Deep Sage background, used only for final conversion points (e.g., "Start Refund Process").

### Input Fields
- **Style:** Underlined or very subtle 1px bordered boxes. Use Hanken Grotesk for input text to ensure clarity. Focus states should be a simple color shift of the border to Deep Sage.

### Cards
- **Editorial Cards:** No borders, no shadows. Use a different background shade (Stone) to define the area. Typography should be the primary driver of the card's hierarchy.
- **Medical Data Chips:** Small, pill-shaped labels with Deep Sage text on a very light Sage tint background for "Verified" statuses.

### Lists & Data
- **The Mirror List:** For clinic comparisons, use heavy horizontal dividers and large serif numbers for rankings. Ensure rows have ample padding (16px-24px) to remain scannable.

### Navigation
- **Utility Nav:** Clean, minimalist top bar. Primary navigation items in uppercase Hanken Grotesk. The "User Profile" should be a simple text link or a very restrained avatar.