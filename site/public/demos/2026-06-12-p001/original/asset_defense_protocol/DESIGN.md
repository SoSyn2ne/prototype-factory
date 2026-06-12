---
name: Asset Defense Protocol
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
  on-surface-variant: '#45474c'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#75777d'
  outline-variant: '#c5c6cd'
  surface-tint: '#545f73'
  primary: '#091426'
  on-primary: '#ffffff'
  primary-container: '#1e293b'
  on-primary-container: '#8590a6'
  inverse-primary: '#bcc7de'
  secondary: '#b6171e'
  on-secondary: '#ffffff'
  secondary-container: '#da3433'
  on-secondary-container: '#fffbff'
  tertiary: '#001626'
  on-tertiary: '#ffffff'
  tertiary-container: '#002b46'
  on-tertiary-container: '#4b95d0'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e3fb'
  primary-fixed-dim: '#bcc7de'
  on-primary-fixed: '#111c2d'
  on-primary-fixed-variant: '#3c475a'
  secondary-fixed: '#ffdad6'
  secondary-fixed-dim: '#ffb3ac'
  on-secondary-fixed: '#410003'
  on-secondary-fixed-variant: '#930010'
  tertiary-fixed: '#cde5ff'
  tertiary-fixed-dim: '#94ccff'
  on-tertiary-fixed: '#001d32'
  on-tertiary-fixed-variant: '#004b74'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.05em
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
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  code-data:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-padding: 1.5rem
  gutter: 1rem
  stack-compact: 0.5rem
  stack-dense: 0.25rem
---

## Brand & Style

The design system is engineered for **High-Stakes Legal Operations** and **Reputation Risk Management**. The brand personality is severe, defensive, and authoritative. It is designed to evoke the feeling of a digital "Situation Room" where precision is the only priority.

The aesthetic follows an **Operator-Dense Functionalism**—a mix of **Modern Corporate** reliability and **Technical Brutalism**. It prioritizes information density over white space, ensuring that legal professionals can scan massive amounts of data, timestamps, and liability markers without visual fatigue. The emotional response should be one of "Defensibility"—the user must feel that every piece of data on the screen is verified, recorded, and ready for litigation.

## Colors

The palette mimics the sobriety of legal documentation and the urgency of crisis management.
- **Primary (Deep Slate):** Used for structural elements, primary actions, and authoritative headers. It provides a grounded, stable foundation.
- **Secondary (Correction Red):** Reserved strictly for liability triggers, false claims, and urgent reputation threats. It acts as a digital "red pen" for auditors.
- **Accents (Cyber Blue):** Used for verification states, cryptographic timestamps, and secure link chips.
- **Backgrounds:** A range of neutral grays (`#F1F5F9` to `#F8FAFC`) to create layered panels without using heavy shadows.

## Typography

This design system utilizes a dual-font approach to distinguish between narrative content and technical data.
- **Inter (Primary Sans):** Used for all UI controls, navigation, and legal summaries. It is chosen for its exceptional legibility at small sizes.
- **JetBrains Mono (Technical):** Used for timestamps, hash values, liability receipts, and raw AI-generated strings. It reinforces the "recorded" and "immutable" nature of the data.
- **Hierarchy:** Use all-caps labels for section headers and metadata categories to create a rigid, tabular structure.

## Layout & Spacing

The design system employs a **Dense Fixed Grid** model. Content is organized into modular panels that fit into a 12-column system on desktop. 
- **Density:** Spacing is tighter than standard SaaS products (utilizing a 4px base unit). This allows for a "birds-eye view" of legal risks.
- **Margins:** Outer page margins are kept at a consistent 24px (1.5rem) to maintain an "official document" feel.
- **Alignment:** Every element must align to the grid. Use vertical dividers (1px solid borders) instead of white space to separate functional zones.

## Elevation & Depth

To maintain a "flat/official" aesthetic, this design system avoids traditional drop shadows.
- **Tonal Layering:** Depth is conveyed through subtle background shifts. The base surface is `#F8FAFC`. Secondary panels or "sidebar drawers" use `#F1F5F9`.
- **Borders as Depth:** Elements are defined by 1px solid borders in `#CBD5E1`. 
- **Active States:** Instead of elevation, active panels or selected items use a 2px "Cyber Blue" left-hand border accent to denote focus.
- **Inertia:** Non-interactive data blocks should feel "sunken" using a slightly darker background than the container they sit in.

## Shapes

The shape language is **Rigid and Precise**. 
- **Small Radii:** Use a maximum of 4px (`rounded-sm`) for buttons and cards. This provides just enough visual polish to look modern while maintaining the "unrefined" authority of a legal terminal.
- **Square Terminals:** Checkboxes, radio buttons, and input fields should remain strictly square or have the minimum 2px radius. 
- **Dividers:** Use horizontal and vertical hairlines (1px) to create the "grid-density" look.

## Components

### Buttons & Inputs
- **Primary Action:** Solid Deep Slate background, white text, 4px radius.
- **Danger Action:** Solid Correction Red background. Used only for "Flag for Litigation" or "Report Error."
- **Inputs:** Square corners, 1px slate border. Use monospaced font for data entry fields.

### Verification Chips
- Small, pill-shaped markers (using the "Cyber Blue" accent) used for "Verified," "Timestamped," or "On-Chain." Text must be `label-caps`.

### Liability Cards
- These are the primary data containers. They feature a 1px border and a header bar with a `Correction Red` status indicator if a risk is detected. They should contain "Asset Defense" metadata at the bottom in monospaced type.

### Alert Triangles & Stamps
- Icons are stroke-based (2pt weight). High-priority errors use a "STAMP" style component—bold, boxed text with a slight tilt, mimicking physical document stamps.

### Data Tables
- The core of the tool. Use zebra-striping (`#F1F5F9`) and high-contrast text. Rows should be compact (32px - 40px height) to maximize information density.