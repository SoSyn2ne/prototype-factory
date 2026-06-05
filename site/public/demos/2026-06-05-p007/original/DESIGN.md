---
name: Fiscal Harmony
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#44474c'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#74777d'
  outline-variant: '#c4c6cd'
  surface-tint: '#4f6073'
  primary: '#041627'
  on-primary: '#ffffff'
  primary-container: '#1a2b3c'
  on-primary-container: '#8192a7'
  inverse-primary: '#b7c8de'
  secondary: '#006a63'
  on-secondary: '#ffffff'
  secondary-container: '#8bf1e6'
  on-secondary-container: '#006f67'
  tertiary: '#350003'
  on-tertiary: '#ffffff'
  tertiary-container: '#5c0008'
  on-tertiary-container: '#f95a57'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4fb'
  primary-fixed-dim: '#b7c8de'
  on-primary-fixed: '#0b1d2d'
  on-primary-fixed-variant: '#38485a'
  secondary-fixed: '#8ef4e9'
  secondary-fixed-dim: '#71d7cd'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#00504a'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3ae'
  on-tertiary-fixed: '#410004'
  on-tertiary-fixed-variant: '#910816'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-currency:
    fontFamily: Noto Sans KR
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Noto Sans KR
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Noto Sans KR
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Noto Sans KR
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Noto Sans KR
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Noto Sans KR
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Noto Sans KR
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Noto Sans KR
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  container-max: 1200px
  gutter: 20px
---

## Brand & Style

The design system is built for "Fiscal Harmony," a platform designed to facilitate high-stakes family negotiations regarding education costs. The brand personality balances the gravity of financial planning with the intimacy of home life. It evokes a "Tense Finance Room" aesthetic—deliberate, structured, and professional—while maintaining a sense of shared purpose and familial support.

The visual style is **Corporate / Modern** with a lean toward **Minimalism**. It utilizes a structured, card-based interface to break down complex financial data into digestible, non-threatening units. The interface avoids unnecessary decoration to focus the user's attention on the numbers that matter, using quality typography and intentional whitespace to reduce cognitive load during stressful conversations.

## Colors

The color palette is functionally driven to signal financial status and emotional tone.

- **Primary (Deep Navy - #1A2B3C):** Represents stability, institutional trust, and the "negotiation table." Used for headers, primary navigation, and dominant text.
- **Secondary (Mint Green - #4DB6AC):** Signals "Positive Cash Flow." Used for scholarships, successful savings goals, and "agreed" negotiation statuses.
- **Tertiary (Soft Coral - #EF5350):** Signals "Shortfalls/Urgency." Reserved for budget gaps, high interest rates, or items requiring immediate family attention.
- **Neutral (Warm Gray - #F5F5F5):** The foundation of the "Family Atmosphere." Provides a soft, approachable background that prevents the UI from feeling cold or purely clinical.
- **Surface Colors:** Pure white (#FFFFFF) is used for active cards to separate them from the Warm Gray background.

## Typography

The design system utilizes **Noto Sans KR** for its exceptional readability in data-heavy financial contexts. The typographic scale is designed to emphasize currency values and clear hierarchy.

- **Currency Display:** Large, bold numeric values use `display-currency` with tight letter-spacing to feel impactful and grounded.
- **Hierarchy:** Use `headline-lg` for section titles (e.g., "Semester 1 Budget"). `label-sm` is used for metadata like "Monthly Average" or "Interest Rate."
- **Readability:** Body copy uses a generous 1.5x line height to ensure that "Negotiation Scripts" are easy to read during verbal discussions.
- **Mobile:** Headlines scale down on mobile to prevent awkward line breaks in narrow currency tables.

## Layout & Spacing

This design system employs a **Fixed Grid** on desktop (1200px max width) to maintain a sense of a "dashboard" or "control room." On mobile devices, it transitions to a fluid single-column layout.

- **The Card Grid:** Content is organized into a 12-column grid. Comparison tables typically span 12 columns, while "Negotiation Script" cards and "Numeric Inputs" often span 6 columns on desktop.
- **Spacing Rhythm:** An 8px-based system is used for internal component padding, while 24px (lg) or 40px (xl) is used to separate major logical sections of the negotiation.
- **Margins:** Standard mobile margins are 16px to maximize screen real estate for complex tables.

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layers** combined with **Ambient Shadows**.

- **Level 0 (Base):** The Warm Gray (#F5F5F5) background.
- **Level 1 (Cards):** White surfaces with a soft, diffused shadow (0px 4px 12px, 5% opacity Primary color tint). This creates a sense of physical paper documents on a table.
- **Level 2 (Interactive):** Elements like "Numeric Input Cards" gain a slightly more defined shadow and a subtle Primary color border (1px) when focused, signaling active negotiation.
- **Gauges & Progress:** Balance gauges are inset (inner shadow) to appear as though they are etched into the card surface, adding a tactile feel.

## Shapes

The design system uses a **Rounded** shape language (8px default) to soften the "tense" nature of financial discussions.

- **Standard Cards:** 16px (rounded-lg) to feel friendly and modern.
- **Buttons & Inputs:** 8px (default) to maintain a professional, structured appearance.
- **Interactive Checklists:** 4px (soft) for smaller interactive elements to keep them feeling precise and efficient.

## Components

- **Numeric Input Cards:** Large white cards featuring a prominent KRW (₩) symbol. Use a subtle bottom-border in Primary Navy. The font size for the input is `headline-lg`.
- **Balance Gauges:** Linear or semi-circular tracks. The "filled" portion uses Mint Green for surplus and Soft Coral for deficits. Include a "Target Marker" in Navy.
- **Negotiation Script Cards:** High-contrast cards with a Primary Navy left-accent border. These contain suggested talking points in `body-lg` to guide family members through difficult topics.
- **Interactive Checklist:** Items use a custom square checkbox. When checked, the background of the row transitions to a very pale Mint Green.
- **Comparison Tables:** Minimalist rows with `body-md` text. Use alternating row colors (Warm Gray/White) only if the data exceeds 10 rows. Headlines remain sticky at the top.
- **Action Buttons:**
    - *Primary:* Solid Deep Navy with White text.
    - *Agreement:* Solid Mint Green with White text for finalizing a budget.
    - *Warning:* Ghost-style (outline) with Soft Coral text for deleting or resetting data.