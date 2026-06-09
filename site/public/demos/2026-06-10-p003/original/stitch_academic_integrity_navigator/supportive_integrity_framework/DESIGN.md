---
name: Supportive Integrity Framework
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
  on-surface-variant: '#414844'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#717974'
  outline-variant: '#c1c8c3'
  surface-tint: '#436557'
  primary: '#416354'
  on-primary: '#ffffff'
  primary-container: '#597c6c'
  on-primary-container: '#f5fff8'
  inverse-primary: '#aacfbd'
  secondary: '#825516'
  on-secondary: '#ffffff'
  secondary-container: '#fec178'
  on-secondary-container: '#784d0d'
  tertiary: '#3c5f7f'
  on-tertiary: '#ffffff'
  tertiary-container: '#567899'
  on-tertiary-container: '#fdfcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c5ebd8'
  primary-fixed-dim: '#aacfbd'
  on-primary-fixed: '#002116'
  on-primary-fixed-variant: '#2c4d40'
  secondary-fixed: '#ffddb9'
  secondary-fixed-dim: '#f8bb73'
  on-secondary-fixed: '#2b1700'
  on-secondary-fixed-variant: '#663e00'
  tertiary-fixed: '#cfe5ff'
  tertiary-fixed-dim: '#a7caef'
  on-tertiary-fixed: '#001d33'
  on-tertiary-fixed-variant: '#264969'
  background: '#faf9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e3e2e0'
typography:
  display-lg:
    fontFamily: Public Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Public Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Public Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-md:
    fontFamily: Public Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Public Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Public Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Public Sans
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
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 48px
  container-max: 1140px
  gutter: 24px
---

## Brand & Style
The design system is built on a **Calm-Consumer** philosophy, specifically tailored for educators navigating the sensitive landscape of academic integrity. The primary goal is to lower the emotional temperature of parental conferences by providing an objective, guidance-focused interface. 

The visual style leans into **Minimalism** with a touch of **Tactile** warmth. It avoids the clinical coldness of traditional enterprise software in favor of a soft, approachable aesthetic that feels like a trusted digital assistant. The emotional response should be one of "structured support"—moving from the anxiety of a potential cheating incident to the clarity of a resolution path.

Key attributes:
- **Objective:** Layouts prioritize evidence over accusation.
- **Defensible:** Clear hierarchy and data visualization provide a firm foundation for difficult conversations.
- **Supportive:** Soft edges and warm tones reassure the teacher that the system is an ally, not just a ledger.

## Colors
The palette is intentionally muted to de-escalate tension. 
- **Primary (Sage Green):** Used exclusively for "next best action" and progression buttons. It signals growth and resolution.
- **Secondary (Soft Amber):** Replaces traditional "Error Red" for highlights or caution areas. It suggests "Review Required" rather than "Warning."
- **Tertiary (Muted Periwinkle):** Used for informational accents and "Fact vs. Assumption" toggles.
- **Neutrals (Cream & Warm Grey):** The foundation of the UI. Backgrounds use a very soft cream (`#FCFBF9`) to reduce eye strain and feel more "paper-like" and scholarly.

## Typography
This design system utilizes **Public Sans**, an open-source typeface designed for legibility and institutional neutrality. 

- **Hierarchy:** Large display titles are reserved for case summaries. 
- **Readability:** Body text uses a generous 1.5x line height to ensure educators can easily scan through logs and evidence during live conferences.
- **Emphasis:** We use medium weights (500-600) for labels rather than bold weights to maintain the "calm" profile.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to ensure information density remains controlled and non-overwhelming. 

- **Grid:** A 12-column grid with a 1140px max-width container. 
- **Rhythm:** An 8px linear scale (using a 4px base) ensures consistent vertical rhythm.
- **Mobile:** On smaller screens, the grid collapses to 1 column with 16px margins.
- **White Space:** Generous padding (minimum 24px) is used inside cards to separate disparate pieces of evidence, preventing the UI from feeling cluttered or "noisy."

## Elevation & Depth
To maintain the "Calm-Consumer" vibe, this design system avoids heavy shadows. 

- **Tonal Layers:** Depth is primarily created through subtle color shifts (e.g., a white card on a cream background).
- **Ambient Shadows:** Where necessary for focus (like a modal or an active card), we use extremely diffused, low-opacity shadows with a hint of the primary sage color in the tint: `0 4px 20px rgba(107, 142, 126, 0.08)`.
- **Low-Contrast Outlines:** Interactive elements use 1px borders in a slightly darker neutral shade rather than shadows to define their boundaries.

## Shapes
We use a **Rounded** shape language to evoke a friendly, non-threatening atmosphere. 
- **Standard UI (Buttons, Inputs):** 0.5rem (8px) radius.
- **Large Components (Cards, Progress Containers):** 1rem (16px) radius.
- **Interactive Toggles:** Pill-shaped for clear binary selection.

## Components

### Cards
All student data and evidence are housed in cards with a white fill (`#FFFFFF`) and a subtle neutral border. Use `lg` rounding (16px).

### Progress Indicators
Step-by-step indicators for the "Conference Flow" should be horizontal with soft sage green connectors for completed steps and empty circles with neutral outlines for upcoming steps.

### Fact vs. Assumption Toggles
A specialized component featuring two segmented controls. The "Fact" side uses the Tertiary blue accent when active; the "Assumption" side uses the Secondary amber accent. This visually separates objective data from subjective observation.

### Consequence Matrix (Data Tables)
Tables should have no vertical borders, only soft horizontal dividers. The header row should use a light cream background (`#F9F8F6`) with `label-sm` typography.

### Primary Action Buttons
Use the Sage Green primary color. To maintain the "calm" profile, avoid all-caps labels; use title case with `label-md` or `body-md` weight.

### Evidence Chips
Small, rounded chips used to tag specific AI indicators (e.g., "Inconsistent Syntax," "No Citations"). Use a background that is a 10% opacity version of the accent color to keep them readable but unobtrusive.