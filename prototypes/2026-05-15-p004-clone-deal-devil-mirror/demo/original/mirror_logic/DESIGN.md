---
name: Mirror Logic
colors:
  surface: '#131318'
  surface-dim: '#131318'
  surface-bright: '#39383e'
  surface-container-lowest: '#0e0e13'
  surface-container-low: '#1b1b20'
  surface-container: '#1f1f24'
  surface-container-high: '#2a292f'
  surface-container-highest: '#35343a'
  on-surface: '#e4e1e9'
  on-surface-variant: '#dcbed4'
  inverse-surface: '#e4e1e9'
  inverse-on-surface: '#303035'
  outline: '#a4899d'
  outline-variant: '#564052'
  surface-tint: '#ffabf3'
  primary: '#ffabf3'
  on-primary: '#5b005b'
  primary-container: '#ff00ff'
  on-primary-container: '#510051'
  inverse-primary: '#a900a9'
  secondary: '#ffffff'
  on-secondary: '#263500'
  secondary-container: '#b8f600'
  on-secondary-container: '#506e00'
  tertiary: '#c6c4df'
  on-tertiary: '#2f2e43'
  tertiary-container: '#908fa8'
  on-tertiary-container: '#28283d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffd7f5'
  primary-fixed-dim: '#ffabf3'
  on-primary-fixed: '#380038'
  on-primary-fixed-variant: '#810081'
  secondary-fixed: '#b8f600'
  secondary-fixed-dim: '#a1d800'
  on-secondary-fixed: '#141f00'
  on-secondary-fixed-variant: '#384e00'
  tertiary-fixed: '#e2e0fc'
  tertiary-fixed-dim: '#c6c4df'
  on-tertiary-fixed: '#1a1a2e'
  on-tertiary-fixed-variant: '#45455b'
  background: '#131318'
  on-background: '#e4e1e9'
  surface-variant: '#35343a'
typography:
  display-lg:
    fontFamily: Syne
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Syne
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Syne
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  contract-body:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  ui-label:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  badge-label:
    fontFamily: Syne
    fontSize: 12px
    fontWeight: '800'
    lineHeight: '1'
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style
The design system is a high-drama, experimental interface tailored for creators navigating the complex world of synthetic media legalities. It balances the "devil in the details" of contract review with a theatrical, portfolio-worthy aesthetic that makes legal scrutiny feel like a creative act.

The visual direction is **Bold / High-Contrast** with elements of **Glassmorphism** to evoke the "Mirror" motif. It utilizes sharp edges, glowing neon accents, and deep, velvet-textured surfaces. The atmosphere is one of high-stakes precision—serious enough for legal work, but expressive enough for the creator economy. 

Key motifs include:
- **Reflective Surfaces:** Subtle backdrop blurs and "silvered" borders that mimic mirrors.
- **Theatrical Contrasts:** Heavy shadows meeting piercing neon lights.
- **Comic-Book Severity:** Bold strokes and expressive badges for identifying contract "red flags."

## Colors
The palette is rooted in a "Dark Velvet" theme to reduce eye strain during long reading sessions while providing a dramatic stage for accents.

- **Primary (Neon Magenta):** Reserved for "danger," red-flags, and critical highlights. It represents the "Devil" aspect—the points of high risk in a contract.
- **Secondary (Acid Green):** Used for "safe" clauses, finalized actions, and successful validations. It provides a sharp, electric contrast to the magenta.
- **Neutral (Obsidian & Indigo):** The base surfaces. Use the deep obsidian for the primary background and the indigo for "raised" surfaces like cards and drawers.
- **Accents:** High-white text is used sparingly for maximum legibility against dark backgrounds, while muted indigo-greys are used for secondary UI elements.

## Typography
Typography is split into two distinct functional roles: **Theatrical Presence** and **Technical Precision**.

- **Display & Headlines:** Utilizing **Syne**, an avant-garde sans-serif. Its ultra-bold weights provide the dramatic, "portfolio-worthy" look required for the brand. Use "Extra Bold" for major headings to create a sense of authority.
- **Contract Text:** Utilizing **JetBrains Mono**. This monospaced font is used for the actual contract content. It conveys a "raw data" or "code-like" feel, essential for synthetic media/AI-driven agreements, and ensures every character is distinct for legal clarity.
- **Functional UI:** **Inter** is used for buttons, navigation, and settings to ensure the interface remains grounded and professional without distracting from the content.

## Layout & Spacing
The layout follows a **Fixed Grid** model for contract reading to maintain line-length legibility, while the surrounding UI is fluid.

- **The Review Stage:** The central contract area is constrained to a maximum width of 800px to ensure the monospaced text remains readable.
- **Mirror Panels:** Sidebars and inspector panels use a "hanging" layout, appearing to float over the main surface with wide margins.
- **Rhythm:** An 8px base unit drives all padding and margins. Use generous spacing (48px+) between major sections to emphasize the "Minimalist" clarity within the "Dramatic" aesthetic.

## Elevation & Depth
Depth is created through **Tonal Layering** and **Neon Glows** rather than traditional soft shadows.

- **Level 0 (Base):** Deep Obsidian (#0D0D12).
- **Level 1 (Panels):** Velvet Indigo (#1A1A2E). These surfaces use a 1px solid border in a slightly lighter indigo or a dim magenta/green depending on the context.
- **Level 2 (Active Mirrors):** Use a Backdrop Blur (20px) with 10% opacity white fill to create a glass effect.
- **The "Devil" Glow:** High-priority warnings do not use shadows; they use a "Neon Spread"—a Magenta drop shadow with 0 blur and a 4px offset, or a highly diffused Magenta outer glow (blur 20px, opacity 30%).

## Shapes
The design system utilizes **Sharp (0px)** corners for all structural elements (panels, inputs, buttons) to maintain a brutalist, professional edge. 

Exceptions:
- **Red-Flag Badges:** These use a "jagged" or "burst" shape (comic-book style) rather than standard rounded pills.
- **Selection Highlights:** Use hard-edged blocks of color behind text.
- **Icons:** Use sharp, geometric line-art with a consistent 2px stroke width.

## Components
- **Buttons:** Rectangular with 0px radius. "Action" buttons use Acid Green background with black text. "Danger" buttons use a Neon Magenta border with no fill.
- **Red-Flag Badges:** High-contrast Magenta blocks with "Syne" bold text. They should appear slightly rotated (2-3 degrees) to break the grid and feel like a stamped physical warning.
- **Contract Viewer:** A dedicated container with a subtle vertical "timeline" or "scroll-mirror" on the right that shows hotspots of where Magenta and Green clauses are located.
- **Input Fields:** Bottom-border only (2px thickness). When focused, the border glows with the Primary Magenta.
- **Cards:** No shadows. Use a 1px solid border in Neon Magenta (for risks) or Acid Green (for safe areas).
- **The "Mirror" Inspector:** A glassmorphic drawer that slides from the right, blurring the contract text beneath it to focus the user's attention on the specific clause analysis.