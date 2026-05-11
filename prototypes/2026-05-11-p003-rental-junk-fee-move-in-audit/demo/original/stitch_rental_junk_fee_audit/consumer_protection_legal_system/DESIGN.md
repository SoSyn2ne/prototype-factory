---
name: Consumer Protection Legal System
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#444651'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#757682'
  outline-variant: '#c5c5d3'
  surface-tint: '#4059aa'
  primary: '#00236f'
  on-primary: '#ffffff'
  primary-container: '#1e3a8a'
  on-primary-container: '#90a8ff'
  inverse-primary: '#b6c4ff'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#4b1c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#6e2c00'
  on-tertiary-container: '#f39461'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b6c4ff'
  on-primary-fixed: '#00164e'
  on-primary-fixed-variant: '#264191'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#ffdbcb'
  tertiary-fixed-dim: '#ffb691'
  on-tertiary-fixed: '#341100'
  on-tertiary-fixed-variant: '#773205'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
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
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
---

## Brand & Style
The brand personality of the design system is anchored in **authority, clarity, and advocacy**. It is designed to bridge the gap between complex legal jargon and consumer accessibility. The UI must feel like a "digital attorney"—competent, protective, and precise.

The chosen style is **Corporate / Modern** with a lean toward **Institutional Minimalism**. It prioritizes high-contrast text and generous whitespace to reduce cognitive load during stressful legal disputes. The aesthetic is intentional and structured, avoiding unnecessary ornamentation in favor of crisp lines and a focus on data integrity. The emotional response should be one of immediate trust and relief, signaling to the user that their consumer rights are being professionally managed.

## Colors
The palette is built on a foundation of **Trustworthy Deep Blues** to establish professional credibility. 

- **Primary (#1E3A8A):** Used for navigation, headers, and primary actions to anchor the visual hierarchy.
- **Secondary (#3B82F6):** Used for interactive elements, links, and illustrative highlights to provide a modern, tech-forward feel.
- **Surface:** The background is a clean, absolute white (#FFFFFF) to ensure maximum readability of legal documents.
- **Status Tones:** These are critical for fee breakdowns. **Alert Red (#EF4444)** is specifically reserved for highlighting "junk fees" or legal violations, while **Success Green (#10B981)** validates successful dispute generation.

## Typography
The design system utilizes **Inter** for all primary interfaces. Inter was selected for its exceptional tall x-height and legibility in dense data environments, making it ideal for reviewing fee line items and legal fine print.

- **Headlines:** Use a Semi-Bold (600) or Bold (700) weight with slight negative letter spacing to feel authoritative.
- **Body Copy:** Standardized at 16px for optimal desktop readability. Line heights are set at 1.5x (24px) to ensure legal clauses do not feel cramped.
- **Labels:** Small, uppercase labels with increased letter spacing are used for metadata and table headers to distinguish them from actionable data.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for desktop to maintain a structured, document-like feel, while transitioning to a fluid model for mobile devices.

- **Grid:** A 12-column grid with 24px gutters. Content is typically housed in an 8-column central container for long-form text (legal disputes) to keep line lengths readable.
- **Rhythm:** An 8px base unit drives all padding and margins. 
- **Desktop:** 1280px max-width container with 48px top/bottom page padding.
- **Mobile:** 16px side margins with stacked card layouts.

## Elevation & Depth
To maintain a professional and trustworthy appearance, the design system avoids heavy shadows and floating effects. Depth is communicated through:

1.  **Subtle Ambient Shadows:** Surfaces use a low-blur, low-opacity shadow (e.g., `0 2px 4px rgba(30, 58, 138, 0.05)`) to gently lift cards from the background without creating a "gamified" feel.
2.  **Tonal Layering:** The primary background is white (#FFFFFF), while secondary containers or sidebars use a very light grey-blue (#F8FAFC) to create distinct functional zones.
3.  **Low-Contrast Outlines:** All input fields and cards feature a 1px border (#E2E8F0) to ensure clear boundaries for accessibility, regardless of shadow presence.

## Shapes
The shape language is **Soft (0.25rem / 4px)**. This choice reflects a balance between the "sharp" corners of traditional legal documents and the modern "rounded" friendliness of consumer tech.

- **Components:** Buttons and input fields use a 4px radius.
- **Containers:** Large cards and dispute containers use `rounded-lg` (8px) to soften the overall interface.
- **Status Indicators:** Small "pills" for fee tags may use fully rounded corners to distinguish them as non-interactive status labels.

## Components
Consistent styling of these key elements ensures a cohesive legal-tech experience:

- **Action Buttons:** The primary "Generate Dispute" button uses the deep Primary Blue with white text. It is large and prominent, with a subtle hover state that darkens the blue to signify intent.
- **Data Tables:** Used for fee breakdowns. Headers are sticky with a light grey background. Every row has a subtle 1px bottom border. "Junk Fees" are highlighted with an extremely light Red tint (#FEF2F2) and a bold Red text status.
- **Professional Cards:** Used to group related information like "Bank Details" or "Case Summary." Cards feature a white background, a 1px border, and a very light shadow.
- **Input Fields:** Labeled clearly above the field. Focus states use a 2px Secondary Blue (#3B82F6) ring for high visibility.
- **Status Chips:** Small badges used in tables to show dispute status (e.g., "Pending," "Refunded"). These use the status colors in high-contrast (dark text on light background) for accessibility.
- **Progress Steppers:** Horizontal indicators for multi-step dispute processes, using the Primary Blue for completed steps.