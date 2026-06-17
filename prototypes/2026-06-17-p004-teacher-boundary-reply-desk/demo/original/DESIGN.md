---
name: Calm Authority
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
  on-surface-variant: '#45474c'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#75777d'
  outline-variant: '#c5c6cd'
  surface-tint: '#545f73'
  primary: '#091426'
  on-primary: '#ffffff'
  primary-container: '#1e293b'
  on-primary-container: '#8590a6'
  inverse-primary: '#bcc7de'
  secondary: '#b02d29'
  on-secondary: '#ffffff'
  secondary-container: '#ff665c'
  on-secondary-container: '#690007'
  tertiary: '#111516'
  on-tertiary: '#ffffff'
  tertiary-container: '#26292b'
  on-tertiary-container: '#8d9092'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e3fb'
  primary-fixed-dim: '#bcc7de'
  on-primary-fixed: '#111c2d'
  on-primary-fixed-variant: '#3c475a'
  secondary-fixed: '#ffdad6'
  secondary-fixed-dim: '#ffb4ac'
  on-secondary-fixed: '#410002'
  on-secondary-fixed-variant: '#8e1214'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
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
  label-caps:
    fontFamily: Geist
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  code-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin: 24px
  sidebar-width: 240px
  density-compact: 8px
  density-tight: 4px
---

## Brand & Style
The design system is engineered for the high-stakes environment of educator-parent communication. It embodies a persona of "Calm Authority"—a professional, non-confrontational, yet firm stance that protects the teacher's time and mental well-being. 

The visual style is a blend of **Modern Corporate** and **Minimalism**, prioritizing high information density and cognitive ease. The UI avoids unnecessary ornamentation, focusing instead on "operator-dense" layouts that allow teachers to scan, triage, and reply to messages with clinical efficiency. The emotional response is one of control and composure; the interface serves as a protective layer between the educator and the external demands of their role.

## Colors
The palette is rooted in professional stability and decisive action. 

- **Primary (Deep Slate):** Used for navigation, primary text, and structural elements to establish a grounded, authoritative foundation.
- **Secondary (Firm Crimson):** Reserved exclusively for high-impact actions like "Escalate," "Block," or "Send." This singular accent color signals importance without inducing panic.
- **Surface & Backgrounds:** A range of soft grays (Cool Gray) provide subtle differentiation between UI zones without the harshness of pure white or high-contrast black.
- **Status Indicators:** Success is marked by a muted sage green, while warnings use a burnt ochre—keeping the "calm" in the system even during conflict.

## Typography
This design system utilizes **Inter** for its systematic, utilitarian clarity. It is supplemented by **Geist** for technical labels and status markers to reinforce the "operator" aesthetic. 

Scale is intentionally compact. Body text at 14px and 13px allows for dense threads of communication to be visible on a single screen without scrolling. Letter spacing is slightly tightened on headings for a "crisp" appearance and widened on uppercase labels to ensure legibility in small-scale status tags.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid** model. A fixed-width sidebar (240px) handles navigation, while the main content area utilizes a systematic 12-column grid for data tables and reply desks.

Spacing is built on a 4px baseline grid. To achieve the "operator-dense" requirement, vertical padding in list items and table rows is kept to a minimum (8px or 4px). Negative space is used strategically to group related content (e.g., parent details and message history) rather than simply to "breathe." This ensures that the educator has all necessary context visible at a single glance.

## Elevation & Depth
Depth is communicated through **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows. 

The background is the lowest tier (Slate-50). The sidebar sits on a slightly darker tier (Slate-100), and active workspace cards or modals use the highest tier (White) with a subtle 1px border in Slate-200. Shadows, when used for dropdowns or modals, are extremely diffused and low-opacity (#000000 at 0.05 alpha) to avoid breaking the flat, professional "desk" aesthetic.

## Shapes
The shape language is **Soft (0.25rem)**. This provides a subtle nod to modern software while maintaining the rigid, structural feel of a professional tool. Buttons and input fields use this 4px radius consistently. Status chips and badges may use a slightly higher radius (8px) to differentiate them from actionable elements, but the system overall avoids "bubbly" or pill-shaped geometry to stay aligned with the "Calm Authority" persona.

## Components

- **Buttons:** Primary buttons use the Deep Slate (#1E293B) for standard actions. "Send" or "Escalate" utilize the Firm Crimson (#991B1B). Buttons are compact (32px height) with bold, 13px labels.
- **Data Tables:** Dense layout with 1px Slate-200 horizontal borders. Row hover states use a subtle Slate-50 tint. Column headers are Geist Bold, uppercase, 11px.
- **Status Indicators:** Small, rectangular badges with low-saturation backgrounds and high-contrast text. Example: "Pending" (Slate text on Gray-100 background).
- **Reply Desk:** A split-pane view. Left pane: Contextual history (dense list). Right pane: Composing area with pre-defined "Boundary Templates" accessible via a tight sidebar or dropdown.
- **Sidebar:** Dark-themed (Deep Slate background). Active states are indicated by a 3px vertical accent line in the Crimson accent color on the left edge.
- **Inputs:** Crisp 1px borders. Focused state uses a 1px solid Primary Slate ring. Labels are placed inside the top-left border or directly above in 11px Geist.