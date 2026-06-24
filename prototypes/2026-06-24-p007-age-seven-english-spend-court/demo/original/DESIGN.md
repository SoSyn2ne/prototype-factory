---
name: Decision Insight System
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
  on-surface-variant: '#44474d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#75777e'
  outline-variant: '#c5c6ce'
  surface-tint: '#4f5e7e'
  primary: '#041632'
  on-primary: '#ffffff'
  primary-container: '#1b2b48'
  on-primary-container: '#8393b5'
  inverse-primary: '#b7c7eb'
  secondary: '#156967'
  on-secondary: '#ffffff'
  secondary-container: '#a3edea'
  on-secondary-container: '#1c6d6b'
  tertiary: '#380001'
  on-tertiary: '#ffffff'
  tertiary-container: '#57110e'
  on-tertiary-container: '#db766b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#b7c7eb'
  on-primary-fixed: '#091b37'
  on-primary-fixed-variant: '#374765'
  secondary-fixed: '#a6f0ed'
  secondary-fixed-dim: '#8ad3d0'
  on-secondary-fixed: '#00201f'
  on-secondary-fixed-variant: '#00504e'
  tertiary-fixed: '#ffdad6'
  tertiary-fixed-dim: '#ffb4ab'
  on-tertiary-fixed: '#400102'
  on-tertiary-fixed-variant: '#7c2c26'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Noto Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Noto Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  data-mono:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

The design system is engineered for high-stakes educational decision-making, tailored for the South Korean market where precision and academic rigor are paramount. The brand personality is that of a "Financial Analyst": objective, meticulous, and calm. It avoids the frenetic energy of typical ed-tech platforms in favor of a professional, data-centric environment that fosters deep concentration.

The visual style is **Corporate / Modern** with a lean toward **Minimalism**. It prioritizes information density without clutter, using ample whitespace and structural alignment to guide the eye through complex data sets. The emotional response should be one of quiet confidence and clarity, empowering students and parents to make informed choices based on logic rather than pressure.

## Colors

The palette is anchored in trust and analytical clarity.

*   **Primary (Deep Navy):** Used for structural elements, headers, and core brand moments to establish authority and stability.
*   **Secondary (Muted Teal):** Represents positive growth, "Safe Bet" indicators, and successful data matches. It is calming and less aggressive than a standard green.
*   **Tertiary (Restrained Coral):** Reserved strictly for warnings, high-risk alerts, or critical deadlines. It provides necessary friction without inducing panic.
*   **Neutral (Slate Grays):** A sophisticated range of grays manages the hierarchy of secondary information, background layers, and borders.

The background is a very light "Paper" gray (#F8FAFC) to reduce eye strain during long analysis sessions.

## Typography

This design system utilizes a dual-font strategy to balance modern aesthetics with high functional legibility.

1.  **Hanken Grotesk (Headlines & Labels):** Provides a sharp, contemporary look for all structural and navigational elements. Its geometry feels precise and technical.
2.  **Noto Sans (Body & Data):** Chosen for its exceptional multi-language support, specifically ensuring that Korean glyphs and English text sit harmoniously at the same visual weight and line height.

For data-heavy tables, use `label-md` or `data-mono` to ensure numbers are easily scannable and comparable.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to maintain the "report" feel of a professional document. 

*   **Desktop:** 12-column grid, 1200px max-width, 24px gutters.
*   **Tablet:** 8-column grid, fluid width, 24px gutters.
*   **Mobile:** 4-column grid, fluid width, 16px gutters.

Spacing follows a strict 8px base unit. Data cards and table rows should use consistent vertical padding (16px or 24px) to ensure the "Analysis" feels organized and rhythmic. Heavy use of "Section Dividers" (1px lines in light gray) is encouraged over large gaps of whitespace to maintain the structured, tabular feel.

## Elevation & Depth

This design system uses **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows.

*   **Level 0 (Background):** #F8FAFC.
*   **Level 1 (Cards/Containers):** Pure White (#FFFFFF) with a 1px border (#E2E8F0). No shadow.
*   **Level 2 (Dropdowns/Modals):** Pure White with a subtle, ultra-diffused ambient shadow (0px 4px 20px rgba(27, 43, 72, 0.08)).
*   **Interactive State:** On hover, a card may transition to a slightly thicker border or a subtle neutral-tinted shadow to indicate interactivity.

This approach mimics a physical dossier or financial report, keeping the interface flat, professional, and grounded.

## Shapes

The shape language is **Soft (0.25rem)**. 

While fully sharp corners feel too aggressive and "Pill-shaped" corners feel too casual/social, the Soft setting provides a professional balance. It acknowledges modern UI trends while maintaining a disciplined, structured silhouette. 

*   **Small Elements (Buttons, Inputs):** 4px radius.
*   **Medium Elements (Cards, Data Modules):** 8px radius.
*   **Large Elements (Modals):** 12px radius.

## Components

### Data Cards
The core of the experience. Cards must have a clear title in `label-md` and a "Confidence Label" in the top right corner. Confidence Labels use a light background tint of the status color (Teal or Coral) with a darker text color.

### Buttons
*   **Primary:** Deep Navy background, white text. Squared off with 4px radius.
*   **Secondary:** Ghost style. 1px Slate Gray border, Slate Gray text.
*   **Positive Action:** Muted Teal background.

### Structured Tables
Use alternating row stripes (Zebra striping) in #F1F5F9 for readability. Header cells should have a subtle background of #E2E8F0 and use uppercase `label-sm` typography.

### Confidence Labels
Small, pill-shaped badges used to indicate the reliability of a data point (e.g., "High Confidence", "Projected"). They should never be the loudest element on the page.

### Input Fields
Strict, rectangular fields with 1px borders. Focus state uses a 2px Deep Navy border. Labels always sit above the field in `label-sm` Slate Gray.

### Progress Indicators
Thin, horizontal bars. Use Teal for "on-track" and Navy for "total progress." Avoid circular loaders unless the entire page is fetching.