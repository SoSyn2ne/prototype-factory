---
name: Serene Recovery System
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#44474c'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#75777d'
  outline-variant: '#c5c6cd'
  surface-tint: '#515f74'
  primary: '#1d2b3e'
  on-primary: '#ffffff'
  primary-container: '#334155'
  on-primary-container: '#9eadc5'
  inverse-primary: '#b9c7e0'
  secondary: '#2b6193'
  on-secondary: '#ffffff'
  secondary-container: '#93c5fd'
  on-secondary-container: '#145283'
  tertiary: '#1c2b3c'
  on-tertiary: '#ffffff'
  tertiary-container: '#334153'
  on-tertiary-container: '#9eadc2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3fd'
  primary-fixed-dim: '#b9c7e0'
  on-primary-fixed: '#0d1c2f'
  on-primary-fixed-variant: '#3a485c'
  secondary-fixed: '#d0e4ff'
  secondary-fixed-dim: '#9ccaff'
  on-secondary-fixed: '#001d35'
  on-secondary-fixed-variant: '#03497a'
  tertiary-fixed: '#d4e4fa'
  tertiary-fixed-dim: '#b9c8de'
  on-tertiary-fixed: '#0d1c2d'
  on-tertiary-fixed-variant: '#39485a'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Manrope
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
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
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
  base: 8px
  container-max: 1120px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The brand personality is **Empathetic, Professional, and Resolute**. This design system is built to transition users from a state of high-stress "panic" to a state of controlled "action." It prioritizes psychological safety by avoiding the chaotic visual language typically associated with scams (red alerts, jagged lines, high-frequency motion).

The visual direction follows a **Corporate Minimalism** style. It leverages heavy whitespace to reduce cognitive load and a structured hierarchy to guide the user through recovery steps without overwhelm. The aesthetic is clean and institutional, signaling that the platform is a stable authority in a moment of crisis.

**Key Principles:**
- **Clarity over Cleverness:** Information is presented directly, with no ambiguous icons or decorative elements.
- **Visual De-escalation:** Use of soft transitions and a cool-toned palette to lower the user's heart rate.
- **Institutional Trust:** Drawing from modern fintech and healthcare interfaces to provide a sense of security.

## Colors

The palette is anchored in **Professional Slate** to provide a grounded, serious foundation. **Calming Soft Blue** is used for interactive elements and primary actions, providing a sense of progress and flow.

**Sage Green** is employed as a secondary accent for "Safe State" indicators and successful recovery steps, reinforcing a sense of resolution. **Emergency Orange** is strictly reserved for high-priority alerts that require immediate user intervention; it must never be used for decorative purposes to prevent unnecessary alarm. 

Backgrounds should primarily use **Clean White** and **Off-White Slates** to maintain a clinical, organized atmosphere.

## Typography

This design system utilizes **Manrope** for headlines to provide a modern, balanced, and trustworthy feel. Its geometric nature provides a sense of order. **Inter** is used for all body text and UI labels due to its exceptional legibility and systematic, utilitarian appearance.

**Usage Rules:**
- Large headings should be used sparingly to define the current "state" of the recovery process.
- Body text maintains a generous line height (1.5x+) to ensure readability for users who may be experiencing visual stress or fatigue.
- Use `label-sm` with slight letter spacing for secondary metadata or instructional hints to maintain a professional, organized layout.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to prevent information from feeling "lost" or overly expansive, which can cause anxiety. 

**Structure:**
- **Grid:** 12-column system with 24px gutters.
- **Alignment:** Content is centered with a max-width of 1120px to keep the eye focused on the central "action path."
- **Rhythm:** An 8px base unit governs all spacing. Vertical "stacks" use 48px gaps between major sections to provide the user "room to breathe."
- **Mobile:** On mobile devices, margins reduce to 20px, and the layout reflows to a single column. Information density is intentionally kept low to prevent cognitive overload during on-the-go recovery efforts.

## Elevation & Depth

To maintain a calm and grounded atmosphere, the design system avoids heavy shadows or dramatic 3D effects. Depth is communicated through **Tonal Layering** and **Low-Contrast Outlines**.

- **Surface Levels:** The main background is the lowest level (`#F8FAFC`). Cards and interactive containers sit on top in pure white (`#FFFFFF`).
- **Outlines:** Instead of shadows, use 1px borders in a soft slate (`#E2E8F0`) to define boundaries.
- **Soft Depth:** For "Actionable" items like Triage Cards, a very subtle, highly diffused ambient shadow (0px 4px 20px, 4% opacity Slate) may be used to indicate interactivity without creating a cluttered "floating" effect.
- **Glassmorphism:** Reserved only for secondary navigation overlays or modal backdrops to maintain focus on the primary task.

## Shapes

The design system uses a **Rounded** (Level 2) shape language. This level of corner radius (0.5rem base) strikes a balance between professional rigor and approachable softness. 

- **Standard Elements:** Buttons, input fields, and small cards use 0.5rem (8px).
- **Container Elements:** Large triage modules or document mocks use 1rem (16px) to feel more like distinct, safe spaces.
- **Checklist/Progress:** Use fully rounded (pill-shaped) ends for progress bar indicators to signify "flow" and movement toward completion.

## Components

### Triage Cards
The primary vehicle for recovery. These cards feature a bold headline, a concise sub-text, and a single primary action button. They should never contain more than two paragraphs of text.

### Progress Bars
Used at the top of every recovery flow. They use a Soft Blue fill on a light gray track. Labels should clearly state "Step X of Y" to give the user a definitive end point.

### Checklist Items
Checkboxes are larger than standard (20x20px) to provide a satisfying interaction. When checked, the item background should transition to a very faint Sage Green (`#F0FDF4`) to provide positive reinforcement.

### Formal Document Mocks
When displaying visa application examples or legal documents, wrap them in a 1px Slate border with a "paper" texture feel. Use monospaced fonts (like Courier Prime) only within these mocks to differentiate "data" from "guidance."

### Buttons
- **Primary:** Solid Professional Slate with white text. High contrast, signaling the "Main Path."
- **Secondary:** Outlined Soft Blue. Used for "Go Back" or "Download for later."
- **Emergency:** Solid Emergency Orange. Reserved for "Revoke Access" or "Report Scam" actions.

### Input Fields
Minimalist with clear top-aligned labels. Use a Soft Blue border on focus to provide a calm, reassuring feedback loop.