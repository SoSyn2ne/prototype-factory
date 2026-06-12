---
name: Calm Ledger
colors:
  surface: '#fff8f2'
  surface-dim: '#dfd9d3'
  surface-bright: '#fff8f2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f9f2ed'
  surface-container: '#f3ede7'
  surface-container-high: '#ede7e1'
  surface-container-highest: '#e7e1dc'
  on-surface: '#1d1b18'
  on-surface-variant: '#3f4948'
  inverse-surface: '#33302c'
  inverse-on-surface: '#f6f0ea'
  outline: '#6f7978'
  outline-variant: '#bec9c7'
  surface-tint: '#156967'
  primary: '#03615f'
  on-primary: '#ffffff'
  primary-container: '#2d7a78'
  on-primary-container: '#c0fffc'
  inverse-primary: '#8ad3d0'
  secondary: '#5f5e5b'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2dd'
  on-secondary-container: '#656461'
  tertiary: '#774c38'
  on-tertiary: '#ffffff'
  tertiary-container: '#93644f'
  on-tertiary-container: '#fff0eb'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a6f0ed'
  primary-fixed-dim: '#8ad3d0'
  on-primary-fixed: '#00201f'
  on-primary-fixed-variant: '#00504e'
  secondary-fixed: '#e5e2dd'
  secondary-fixed-dim: '#c9c6c2'
  on-secondary-fixed: '#1c1c19'
  on-secondary-fixed-variant: '#474743'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#f4baa0'
  on-tertiary-fixed: '#311304'
  on-tertiary-fixed-variant: '#653d2a'
  background: '#fff8f2'
  on-background: '#1d1b18'
  surface-variant: '#e7e1dc'
typography:
  headline-xl:
    fontFamily: Source Serif 4
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Source Serif 4
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Source Serif 4
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Source Serif 4
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  data-mono:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: -0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-padding-desktop: 40px
  container-padding-mobile: 20px
  gutter: 24px
  section-gap: 64px
---

## Brand & Style
The design system is centered on the "Calm-Consumer" philosophy, specifically tailored for family caregivers navigating the financial complexities of elder care. The goal is to transform overwhelming financial data into a manageable, serene experience. 

The visual direction leans into a **Modern-Tactile** aesthetic. It moves away from the cold, clinical whites of healthcare and the aggressive, high-energy blues of traditional fintech. Instead, it utilizes a "warm ledger" feel—spacious, grounded, and intentionally soft. By combining the stability of traditional editorial layouts with the softness of modern interface design, the system evokes feelings of reliability, empathy, and clarity.

## Colors
The palette is designed to de-escalate stress while maintaining high accessibility standards.

- **Primary (Confidence Teal - #2D7A78):** Used for primary actions, success states, and progress indicators. It represents stability and professional guidance.
- **Secondary (Warm Surface - #F5F2ED):** The foundational background color. It replaces pure white to reduce eye strain and create a "paper-like" warmth.
- **Tertiary (Soft Amber - #E8AF96):** Used for gentle alerts and attention-seeking items. It provides a noticeable contrast to the teal without the "danger" associations of bright red.
- **Neutral (Charcoal Stone - #4A4743):** The primary color for text and data, ensuring high contrast against the cream backgrounds while feeling softer than pure black.
- **Accents:** Use a very light wash of the primary teal (10% opacity) for container backgrounds to signify "active" or "saved" sections.

## Typography
This design system employs a sophisticated pairing to balance trust with legibility.

- **Headlines (Source Serif 4):** A professional, academic-leaning serif that provides a sense of history and "vetted" authority. It suggests that the information is permanent and reliable.
- **Body & Data (Atkinson Hyperlegible Next):** Specifically chosen for its superior readability. In a financial context where every decimal point matters, this font ensures that numbers and labels are unmistakable, even for users under high cognitive load or with varying visual acuity.
- **Data Treatment:** Large financial figures should use `headline-md` sizing but with `body-font` weight to ensure the numbers are the focal point without feeling aggressive.

## Layout & Spacing
The layout follows a **Fixed-Width Centered Grid** for desktop (max-width 1200px) to maintain a sense of containment and focus. 

- **The Ledger Model:** Use wide margins and generous white space (section-gap) to prevent "information density anxiety."
- **Comparison Lanes:** For comparing care quotes, use a multi-column horizontal scroll on mobile and a side-by-side vertical alignment on desktop. Each lane should be separated by at least 24px of gutter space.
- **Breakpoints:**
  - Mobile: < 600px (1 column, 20px margins)
  - Tablet: 601px - 1024px (2 columns, 32px margins)
  - Desktop: > 1025px (12-column grid, 40px margins)

## Elevation & Depth
Depth is created through **Tonal Layering** and **Ambient Shadows** rather than sharp borders.

- **The Base:** The secondary color (#F5F2ED) acts as the floor.
- **The Surface:** Cards and input areas are white (#FFFFFF). This creates a subtle "lift" from the warm background without needing heavy shadows.
- **The Shadow:** Use a very soft, diffused shadow for interactive cards: `0px 4px 20px rgba(74, 71, 67, 0.08)`.
- **Active State:** When an element is selected (like a specific quote), apply a 2px solid stroke of the Primary Teal instead of increasing the shadow depth, keeping the UI flat and calm.

## Shapes
The shape language is consistently soft to minimize the "sharpness" often found in financial spreadsheets. 

- **Standard Containers:** Use `rounded-lg` (16px) for cards, quote containers, and comparison modules.
- **Interactive Elements:** Use `rounded-md` (8px) for buttons and input fields to maintain a distinct "clickable" silhouette that differs from the larger layout blocks.
- **Progress Pills:** Use fully rounded (pill-shaped) ends for progress bars and status tags to emphasize movement and flow.

## Components
- **Cost Cards:** High-contrast containers for financial quotes. The total price should be in the top right, using `headline-md`. Features should be listed with Primary Teal checkmarks.
- **Comparison Lanes:** Side-by-side modules that highlight "Value Differences." Use the Soft Amber color to highlight discrepancies or missing data points in a quote.
- **Step-by-Step Progress Indicators:** A horizontal bar at the top of multi-step forms. Completed steps use a solid Primary Teal circle; current steps use a Teal outline; future steps use a Neutral outline.
- **Primary Buttons:** Solid Primary Teal with white text. Use 16px vertical padding to create a large, confident hit area.
- **Data Inputs:** White background with a 1px border of the Neutral color at 20% opacity. Upon focus, the border transitions to Primary Teal.
- **Alert Chips:** Small, pill-shaped tags using the Tertiary Soft Amber with 15% opacity background and 100% opacity text for non-urgent reminders.