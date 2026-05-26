---
name: NurturePath
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
  on-surface-variant: '#434655'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#006a61'
  on-secondary: '#ffffff'
  secondary-container: '#86f2e4'
  on-secondary-container: '#006f66'
  tertiary: '#784b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#996100'
  on-tertiary-container: '#ffeedd'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#89f5e7'
  secondary-fixed-dim: '#6bd8cb'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#005049'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 60px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Plus Jakarta Sans
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
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The design system is built to bridge the gap between institutional reliability and the warmth of early childhood education. It targets busy parents and childcare administrators who require clarity and transparency during high-stress transition periods.

The visual style is **Corporate Modern with a Soft Edge**. It utilizes the structural integrity of a professional SaaS platform but softens the experience through generous white space, rounded geometry, and a calming color palette. The goal is to evoke a sense of organized calm, transforming a complex logistical process (the waitlist) into a manageable, supportive journey. Every interaction should feel intentional, reducing cognitive load through "breathable" layouts and high-legibility type.

## Colors

The color strategy uses "Trust Blue" as the anchor to establish professional authority. The secondary "Playful Teal" is used for growth-oriented actions and success states, subtly nodding to the childcare industry without becoming juvenile.

- **Primary (#2563EB):** Reserved for primary actions, active navigation states, and brand-critical information.
- **Secondary (#0D9488):** Used for progress indicators, "Open" status labels, and secondary interactive elements.
- **Backgrounds:** The interface relies on `White (#FFFFFF)` for primary surfaces and `Slate-50 (#F8FAFC)` for section differentiation to maintain a clinical but airy feel.
- **Accents (#F59E0B):** A warm amber used sparingly for alerts, "Action Required" notifications, and waitlist position updates to draw attention without causing alarm.

## Typography

This design system pairs **Plus Jakarta Sans** for headings with **Inter** for functional data. 

Plus Jakarta Sans provides a contemporary, friendly geometric rhythm that feels approachable for parents. Inter is utilized for the core application experience—specifically waitlist tables, status badges, and form inputs—where maximum legibility and neutral information density are required. 

- **Hierarchy:** Use `display-lg` only for onboarding or marketing hero sections.
- **Data Display:** Use `body-sm` for secondary metadata in cards and `label-md` for table headers to ensure a clear distinction between data and metadata.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model for desktop to ensure data-heavy cards remain readable and don't stretch excessively. 

- **Grid:** A 12-column grid with a 24px gutter.
- **Vertical Rhythm:** A strict 8px baseline grid is used. Sections should be separated by `stack-lg` (48px) to provide the "generous whitespace" required to reduce parent anxiety.
- **Mobile Adaptivity:** On mobile, margins shrink to 16px. Cards should stack vertically, and complex data tables should transition into "Data Cards" to maintain legibility.
- **Breathability:** Increase padding within containers (e.g., card internal padding) to `24px` or `32px` to prevent the UI from feeling "cramped" or "institutional."

## Elevation & Depth

To maintain a soft and trustworthy aesthetic, this design system avoids heavy shadows and instead uses **Tonal Layers** supplemented by **Ambient Shadows**.

1.  **Level 0 (Background):** Slate-50 for the main canvas.
2.  **Level 1 (Cards/Surface):** Pure White with a very soft, diffused shadow (Blur: 12px, Y: 4px, Color: Primary mixed with 4% Opacity). This "tinted shadow" keeps the UI feeling clean and cohesive.
3.  **Level 2 (Hover/Active):** A slightly more pronounced shadow (Blur: 20px, Y: 8px, Color: Primary mixed with 8% Opacity) to provide tactile feedback.

Outlines are used for form inputs and inactive states, using a low-contrast `Slate-200` to keep the interface soft.

## Shapes

The shape language is consistently **Rounded**, reinforcing the friendly and safe nature of the platform.

- **Standard Elements:** Buttons, input fields, and small UI components use a 0.5rem (8px) radius.
- **Container Elements:** Cards, modals, and major sections use `rounded-lg` (16px) to create a soft, inviting frame for content.
- **Status Badges:** Use a pill-shaped (full-round) style to distinguish them from interactive buttons.
- **Icons:** Should always feature rounded terminals and corners—avoid sharp 90-degree angles in iconography.

## Components

### Buttons
- **Primary:** Solid Primary Blue, white text, 16px height-padding.
- **Secondary:** Transparent background with a Primary Blue 1px border.
- **Ghost:** Primary Blue text, no border/background unless hovered.

### Waitlist Cards
The core of the platform. Cards must feature:
- A `headline-md` title for the daycare or child's name.
- A prominent status badge in the top right corner.
- A "Timeline" visual component showing the estimated wait duration using the Secondary Teal.

### Form Inputs
- Large touch targets (minimum 48px height).
- 16px corner radius to match the soft aesthetic.
- Subtle `Slate-100` background that clears to white on focus.

### Status Chips
- **High Transparency:** Use 10% opacity backgrounds of the status color (e.g., 10% Teal for "Available") with 100% opacity text for a modern, accessible look.

### Progress Indicators
Used for "Waitlist Position." Use a thick, rounded progress bar (8px height) with a smooth transition animation.