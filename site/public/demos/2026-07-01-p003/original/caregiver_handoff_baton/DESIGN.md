---
name: Caregiver Handoff Baton
colors:
  surface: '#fcf8fa'
  surface-dim: '#dcd9db'
  surface-bright: '#fcf8fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f5'
  surface-container: '#f0edef'
  surface-container-high: '#eae7e9'
  surface-container-highest: '#e4e2e4'
  on-surface: '#1b1b1d'
  on-surface-variant: '#45464d'
  inverse-surface: '#303032'
  inverse-on-surface: '#f3f0f2'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fd'
  on-secondary-container: '#57657b'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#271901'
  on-tertiary-container: '#98805d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d5e3fd'
  secondary-fixed-dim: '#b9c7e0'
  on-secondary-fixed: '#0d1c2f'
  on-secondary-fixed-variant: '#3a485c'
  tertiary-fixed: '#fcdeb5'
  tertiary-fixed-dim: '#dec29a'
  on-tertiary-fixed: '#271901'
  on-tertiary-fixed-variant: '#574425'
  background: '#fcf8fa'
  on-background: '#1b1b1d'
  surface-variant: '#e4e2e4'
typography:
  display-critical:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '800'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 24px
  body-xl:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  status-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  touch-target-min: 48px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 24px
---

## Brand & Style

The design system is engineered for high-stakes clinical and home-care environments where precision is non-negotiable. The brand personality is **Reliable, Precise, and Transparent**, prioritizing functional utility over aesthetic flourish. It targets professional caregivers and family coordinators who operate under high cognitive load and time pressure.

The visual style follows a **High-Contrast / Utility-First** approach. It leverages a rigorous structural grid and heavy information hierarchy to eliminate ambiguity. The emotional response is one of "Institutional Trust"—the UI should feel like a medical instrument: sterile, dependable, and authoritative.

Key principles:
- **No Ambiguity:** Every action must have a definitive state (Done, Missed, Pending).
- **Extreme Legibility:** High contrast ratios and generous whitespace ensure readability in low-light or high-stress situations.
- **Physicality:** Large touch targets and thick structural borders provide a sense of tactile "field-ops" durability.

## Colors

The palette is anchored in **Deep Navy** and **Charcoal** to provide a grounded, professional foundation. Backgrounds are kept stark white (#FFFFFF) to maximize the contrast of text and status indicators.

- **Primary (Navy):** Used for primary navigation, headers, and critical structural elements.
- **Secondary (Slate):** Used for secondary information and de-emphasized metadata.
- **Functional Spectrum:** 
  - **Success Green:** High-saturation for confirmed handoffs and completed tasks.
  - **Warning Amber:** For pending items nearing a deadline.
  - **Error Red:** Reserved for missed tasks and critical medical alerts.
- **Emergency Strip:** A specific light-red tint (#FEF2F2) background with a thick 4px solid Red border to denote the most critical information tier.

## Typography

This design system utilizes **Inter** exclusively for its neutral, systematic, and highly legible characteristics. Typography is scaled up to ensure accessibility for caregivers who may be viewing the screen at arm's length or while in motion.

- **Vertical Rhythm:** Line heights are intentionally generous (1.4x - 1.5x) to prevent lines of text from blurring together during rapid scanning.
- **Emphasis:** Use font weight rather than color to denote hierarchy. Critical instructions use `Bold` or `ExtraBold`.
- **Labels:** Small labels use uppercase with increased letter spacing to distinguish metadata from actionable content.

## Layout & Spacing

The layout is built on a **Fluid Grid** with a strict 8px spacing scale. 

- **Mobile First:** Because this is a "field-ops" tool, the mobile experience is the primary driver. All interactive elements must adhere to a 48px minimum height/width.
- **Content Reflow:** On desktop, cards expand to a maximum width of 800px to maintain line-length readability, centering the workspace to keep the eye focused.
- **Padding:** Internal card padding is locked at 20px (`stack-lg` equivalent) to ensure content never feels cramped against the thick borders.

## Elevation & Depth

This design system rejects soft shadows and blurs in favor of **Bold Borders** and **Tonal Layers**. 

- **Depth via Borders:** Instead of shadows, elevation is communicated through border weight. A standard card has a 1px border; an active or high-priority card has a 2px or 3px border.
- **Flat Surface Logic:** Elements do not "float." They are either on the base layer or "stuck" to the top (like the Emergency Note Strip).
- **Z-Index Hierarchy:** 
  - **Level 0:** Background (White)
  - **Level 1:** Standard Task Cards (White with Navy border)
  - **Level 2:** Active Modals or Emergency Strips (Fixed position with high-contrast borders)

## Shapes

The shape language is **Soft (0.25rem)**. This provides a subtle modern feel without sacrificing the "industrial" or "professional" aesthetic. 

- **Standard Elements:** Buttons, inputs, and cards use a 4px corner radius.
- **Status Pills:** Can use `rounded-xl` (12px) to distinguish them from actionable buttons.
- **Emergency Elements:** Keep 0px (Sharp) corners if the alert is system-critical to increase the sense of urgency.

## Components

### Buttons & Touch Targets
- **Primary Action:** Solid Navy background, white text, 48px height.
- **Destructive Action:** Solid Red background, white text.
- **Stateful Buttons:** Must show a clear "Loading" or "Confirmed" state to prevent double-tapping.

### Task Cards
- **Structure:** 2px solid Navy border. White background.
- **Header:** Contains the task name in `headline-lg` and a time-stamp.
- **Interaction:** A large checkbox (32px x 32px) on the right side for clear "Done" marking.

### Emergency Note Strip
- **Position:** Persistent at the top of the viewport.
- **Visuals:** Light red background, 2px solid Red top/bottom borders, Bold Navy text.
- **Content:** Vital signs or "Last Administered" data that must never be scrolled out of view.

### Inputs & Fields
- **Style:** 2px solid Slate border. On focus, border thickens to 3px Navy. 
- **Labels:** Always visible above the input field (never use placeholder-only labels).

### Status Chips
- **Done:** Green background with checkmark icon.
- **Missed:** Red background with "X" icon.
- **Pending:** Grey background, no icon.
- **Note:** Use heavy weight icons (3px stroke) to ensure visibility at a glance.