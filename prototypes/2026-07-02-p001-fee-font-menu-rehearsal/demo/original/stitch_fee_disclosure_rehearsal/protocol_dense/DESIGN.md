---
name: Protocol Dense
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#383939'
  surface-container-lowest: '#0d0e0f'
  surface-container-low: '#1b1c1c'
  surface-container: '#1f2020'
  surface-container-high: '#292a2a'
  surface-container-highest: '#343535'
  on-surface: '#e3e2e2'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e3e2e2'
  inverse-on-surface: '#303031'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c8c6c5'
  primary: '#c8c6c5'
  on-primary: '#313030'
  primary-container: '#1a1a1a'
  on-primary-container: '#848282'
  inverse-primary: '#5f5e5e'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#ffb5a0'
  on-tertiary: '#601400'
  tertiary-container: '#390800'
  on-tertiary-container: '#f24100'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#ffdbd1'
  tertiary-fixed-dim: '#ffb5a0'
  on-tertiary-fixed: '#3b0900'
  on-tertiary-fixed-variant: '#872000'
  background: '#121414'
  on-background: '#e3e2e2'
  surface-variant: '#343535'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
spacing:
  unit: 4px
  gutter: 12px
  margin: 16px
  container-max-width: 1440px
---

## Brand & Style

The design system is engineered for high-stakes restaurant compliance, where the primary objective is asset protection (*자산 방어*). The personality is authoritative, urgent, and severe—stripping away all decorative elements to focus entirely on the precision of data and the gravity of regulatory adherence. 

The aesthetic is **Operator-Dense Minimalism**. It draws from industrial control panels and legal ledgers, prioritizing information density over whitespace. Every pixel must serve a functional purpose. The user should feel like an auditor in a high-pressure environment where "good enough" is a liability. 

- **Target Audience:** Compliance officers, franchise owners, and legal consultants.
- **Emotional Response:** Vigilance, precision, and urgency.
- **Visual Style:** Sharp-edged, high-contrast, and systematically rigid.

## Colors

The palette is restricted to a utilitarian spectrum to ensure that attention is never diverted from critical data points.

- **Primary (Deep Charcoal):** Used for the global background and core UI containers to reduce eye strain during long audits.
- **Secondary (Fog & Off-White):** Used for primary text and surface layers to provide maximum legibility against the charcoal base.
- **Accent (International Orange):** Reserved strictly for "Violation" states, non-compliant fee lines, and destructive actions. Its presence should indicate immediate financial or legal risk.
- **Neutrals:** Mid-tone greys are used for borders, secondary labels, and disabled states to maintain a clear hierarchy without introducing new hues.

## Typography

Typography is the core of this design system, as the tool specifically audits font size and legibility compliance. We use **Inter** for its neutral, highly legible character at small sizes, and **JetBrains Mono** for data-heavy fee tables to ensure numerical alignment.

- **Scale:** The scale is compact. We avoid oversized display type to maximize the amount of data visible on a single screen.
- **Compliance Simulation:** In the rehearsal interface, the system must be able to toggle between "System Sans" and the actual "Menu Font" being audited, while keeping the surrounding UI stable.
- **Hierarchy:** Strong use of all-caps labels and monospaced digits to distinguish between metadata and operational data.

## Layout & Spacing

This design system utilizes a **Fixed Grid** approach for the main workspace to ensure that fee tables and audit checklists remain predictable and scannable.

- **Density:** We use a 4px baseline grid. Padding within components is kept to a minimum (typically 8px or 12px) to allow for the "Operator-Dense" feel.
- **Grid:** A 12-column layout on desktop. On mobile, the layout reflows into a single column, but table horizontal scrolling is preserved to maintain data integrity.
- **Sectioning:** Distinct modules are separated by 1px solid borders rather than expansive whitespace to maintain a sense of structural rigidity.

## Elevation & Depth

To maintain the severe and functional aesthetic, this design system avoids soft ambient shadows. 

- **Tonal Layering:** Depth is conveyed through "Surface-on-Surface" layering. The background is `#1A1A1A`. Primary containers are `#262626`. Active or hovered items use `#333333`.
- **Low-Contrast Outlines:** Elements are defined by 1px borders using `#404040`. This creates a "blueprint" feel that emphasizes structure over atmosphere.
- **Intervention Depth:** Only critical modals or alerts may use a hard, 4px offset shadow (non-blurred) in black to physically "push" the alert toward the user.

## Shapes

The shape language is **Sharp (0)**. There are no rounded corners in this design system. 

- **Rationale:** Right angles communicate industrial precision and legal formality. Rounded corners are perceived as "friendly" or "soft," which contradicts the authoritative nature of asset protection and compliance.
- **Consistency:** All buttons, input fields, badges, and cards must have a 0px border-radius.

## Components

### Data Tables (The Core)
Tables are the primary interface. They must feature:
- High-contrast headers with `#F2F2F2` text on a `#333333` background.
- Zebra striping for horizontal scanning.
- Monospaced font for all numerical fee values.
- A "Violation Row" state: When a fee is non-compliant, the left border of the row becomes 4px wide and `#FF4500`.

### Status Badges
- **Safe:** Solid white text on a subtle `#262626` background with a white border.
- **At Risk:** Outline-only badge with white text.
- **Violation:** Solid `#FF4500` background with black text.

### Buttons
- **Primary:** Solid `#F2F2F2` with black text. Sharp edges.
- **Secondary:** Transparent with a 1px white border.
- **Critical:** Solid `#FF4500` with white text. Reserved for "Submit Audit" or "Confirm Violation."

### Rehearsal Toggles
A specialized component for the "Menu Rehearsal" view. Use heavy, industrial-style switches that look like physical hardware toggles. They should have a clear "Active" state using high-contrast borders.

### Compact Audit Checklists
Checklists should use minimal vertical padding. The checkbox itself is a sharp 14px square. Checked states use a simple "X" mark rather than a checkmark to maintain the severe, "marked-off" aesthetic.