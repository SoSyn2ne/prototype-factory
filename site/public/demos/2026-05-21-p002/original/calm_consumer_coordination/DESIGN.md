---
name: Calm Consumer Coordination
colors:
  surface: '#fbf9fb'
  surface-dim: '#dbd9db'
  surface-bright: '#fbf9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f5'
  surface-container: '#efedef'
  surface-container-high: '#eae7e9'
  surface-container-highest: '#e4e2e4'
  on-surface: '#1b1b1d'
  on-surface-variant: '#44474d'
  inverse-surface: '#303032'
  inverse-on-surface: '#f2f0f2'
  outline: '#75777d'
  outline-variant: '#c5c6cd'
  surface-tint: '#515f77'
  primary: '#000410'
  on-primary: '#ffffff'
  primary-container: '#101e33'
  on-primary-container: '#7986a0'
  inverse-primary: '#b9c7e3'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#000503'
  on-tertiary: '#ffffff'
  tertiary-container: '#002318'
  on-tertiary-container: '#678e7d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b9c7e3'
  on-primary-fixed: '#0e1c31'
  on-primary-fixed-variant: '#3a475e'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#c3ecd9'
  tertiary-fixed-dim: '#a7cfbd'
  on-tertiary-fixed: '#002116'
  on-tertiary-fixed-variant: '#294e40'
  background: '#fbf9fb'
  on-background: '#1b1b1d'
  surface-variant: '#e4e2e4'
typography:
  headline-lg:
    fontFamily: Public Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Public Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Public Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Public Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
  body-md:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  label-md:
    fontFamily: Public Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Public Sans
    fontSize: 12px
    fontWeight: '700'
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
  margin-mobile: 20px
  margin-desktop: 40px
  gutter: 24px
  section-gap: 48px
  stack-sm: 12px
  stack-md: 24px
---

## Brand & Style

The design system is anchored in the "Calm Consumer" aesthetic—a sophisticated intersection of healthcare reliability and premium consumer software. The personality is reassuring, organized, and stable, specifically tailored for adult children managing complex care logistics. 

The style utilizes a **Corporate Modern** foundation infused with **Minimalist** spacing. By stripping away decorative clutter and "beige-heavy" medical tropes, the UI focuses on reducing cognitive load during high-stress moments. The visual language conveys competence and order, using structured layouts and a grounding color palette to provide a sense of control to the user.

## Colors

This design system employs a palette designed for emotional regulation and clarity:

*   **Primary (Deep Navy):** Used for core navigation and headers to establish a foundation of authority and stability.
*   **Secondary (Soft Slate):** Applied to supporting text and borders to maintain a professional, neutral tone without the harshness of pure black.
*   **Tertiary (Sage Green):** Reserved for "stable" or "completed" states, providing a calming visual cue for positive progress.
*   **Urgent/Alert (Coral & Amber):** High-contrast tones used sparingly for critical medical updates or immediate tasks.
*   **Neutral (Cool Gray/White):** A crisp, clean background strategy that avoids medical beige, opting instead for cool slates and bright whites to feel contemporary and hygienic.

## Typography

**Public Sans** is chosen for its institutional clarity and highly readable grotesque letterforms. The typography system prioritizes legibility over stylistic expression.

Large headlines are set with tight letter-spacing for a modern feel, while body copy utilizes a generous line height (minimum 1.6x) to ensure users can scan medical notes and shift logs without eye strain. Use `label-sm` in all-caps for metadata and table headers to create a distinct visual hierarchy against body content.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model on desktop to mimic the structured feel of a physical binder, transitioning to a fluid model on mobile. 

A "reassuringly spacious" rhythm is maintained through a strict 8px base unit. Wide margins on desktop (40px) prevent the content from feeling cramped, while the vertical "Stack" spacing (Section Gaps) ensures that different care categories (Meds, Appointments, Contacts) are clearly demarcated. The intention is to use white space as a structural tool rather than just a design preference.

## Elevation & Depth

To maintain the "Calm Consumer" feel, the design system avoids heavy shadows or neomorphic effects. Instead, it uses **Tonal Layers** and **Low-Contrast Outlines**.

1.  **Level 0 (Background):** Solid `neutral_background_hex`.
2.  **Level 1 (Cards):** White surfaces with a 1px border in a very light slate. No shadow.
3.  **Level 2 (Active States):** A very soft, diffused ambient shadow (4px blur, 5% opacity) is used only when a card is being interacted with or "picked up."
4.  **Binder Effect:** Depth is communicated through overlapping tab headers rather than Z-axis shadows, creating a tactile "folder" metaphor that feels grounded and physical.

## Shapes

The design system utilizes **Rounded** corners (0.5rem base) to soften the UI and make it feel approachable. While the primary layout is structured and grid-bound, these rounded corners prevent the app from feeling "clinical" or "sharp." Larger containers like cards use `rounded-lg` (1rem) to emphasize their role as distinct modules of information.

## Components

### Tab-Based Navigation (The "Binder")
The primary navigation uses top-aligned tabs with a flat, folder-like aesthetic. Active tabs should use the Primary Navy color with a bottom-weighted indicator, while inactive tabs remain Soft Slate.

### Status Indicators
Small, pill-shaped chips used to denote "Stable," "Pending," or "Action Required."
*   **Stable:** Sage Green background with white text.
*   **Crisis/Urgent:** Coral background with white text.

### Care Cards
White background containers with 1px slate borders. Headers within cards should use `headline-md` and always include a clear icon (e.g., a pill icon for meds, a clock for appointments) to aid quick scanning.

### Input Fields
Forms should be large and accessible. Borders use a 1px slate stroke that thickens and changes to Primary Navy on focus. Labels must always be visible (no floating placeholders) to ensure clarity during data entry.

### Shift Log Buttons
Primary action buttons use the Deep Navy color with white text, featuring `rounded-md` corners. Secondary actions (e.g., "Add Note") use an outlined style with no fill to maintain visual hierarchy.