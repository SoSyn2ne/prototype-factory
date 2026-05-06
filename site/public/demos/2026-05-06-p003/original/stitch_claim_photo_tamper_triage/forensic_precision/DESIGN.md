---
name: Forensic Precision
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393b'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1b1b1d'
  surface-container: '#1f1f21'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353436'
  on-surface: '#e4e2e4'
  on-surface-variant: '#c6c6cd'
  inverse-surface: '#e4e2e4'
  inverse-on-surface: '#303032'
  outline: '#909097'
  outline-variant: '#45464d'
  surface-tint: '#bec6e0'
  primary: '#bec6e0'
  on-primary: '#283044'
  primary-container: '#0f172a'
  on-primary-container: '#798098'
  inverse-primary: '#565e74'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#b7c8e1'
  on-tertiary: '#213145'
  tertiary-container: '#06182b'
  on-tertiary-container: '#728299'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#131315'
  on-background: '#e4e2e4'
  surface-variant: '#353436'
typography:
  display-table:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-section:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-standard:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-dense:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  mono-data:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
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
  margin-page: 24px
  component-gap: 8px
  density-dense: 4px
  density-standard: 12px
---

## Brand & Style

The visual identity of this design system is rooted in the high-stakes environment of financial auditing and digital forensics. It communicates absolute objectivity, clinical precision, and institutional trust. The target audience—insurance fraud investigators and senior analysts—requires a workspace that minimizes cognitive load while maximizing data visibility.

The style is **Corporate Modern with a "Functional Forensic" overlay**. It avoids decorative elements in favor of structural integrity. Every border, line, and hue serves a communicative purpose. The emotional response is one of calm authority; the UI does not panic when high-risk tampering is detected—it simply presents the evidence with surgical clarity. The aesthetic draws from Bloomberg-terminal efficiency and modern intelligence dashboards, utilizing a structured information hierarchy that supports "deep-dive" analysis and rapid "triage" decision-making.

## Colors

The palette is engineered for prolonged focus in high-density environments. The background utilizes a **deep midnight navy** to reduce eye strain, while surfaces use a slightly lighter **cool navy** to create structural depth. 

**Risk Layers & Probability Bands:**
- **Cyan (Primary Accent):** Used for interactive elements, active risk layers, and forensic overlays on image data.
- **Emerald (Low Risk):** Used for verified data points and "clean" audit trails.
- **Amber (Caution):** Indicates statistical anomalies or metadata mismatches requiring manual review.
- **Deep Red (High Suspicion):** Reserved for high-probability tampering flags and critical system alerts.

Slate grays serve as the connective tissue, providing a neutral backdrop for secondary data points and supporting labels, ensuring that the risk colors remain the most prominent visual signals.

## Typography

This design system utilizes **Inter** for its exceptional legibility at small scales and neutral, systematic tone. The typography strategy prioritizes **data density** without sacrificing clarity. 

Key headers are kept compact but weighted heavily to anchor sections. A specialized `label-caps` style is used for table headers and metadata categories to create a rhythmic separation between "Label" and "Value." For forensic metadata (EXIF data, coordinates, timestamps), use the `mono-data` setting to ensure character alignment for easy vertical scanning. Line heights are kept tight to allow more information "above the fold" while maintaining enough air to prevent visual crowding during intense investigation sessions.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid Grid**. The primary navigation and "Evidence Sidecar" (containing audit logs) are fixed-width to ensure consistent tool access, while the central "Triage Workspace" is fluid, expanding to maximize the view of high-resolution forensic images.

A **4px base unit** governs the rhythm. Spacing is intentionally tighter than consumer applications to reflect the tool's professional utility. Components should favor `density-dense` (4px-8px) within data tables and `density-standard` (12px-16px) for major layout containers. Use a 12-column grid within the central workspace for aligning forensic cards and "Decision Waterfall" charts.

## Elevation & Depth

Hierarchy is established through **Tonal Layering** rather than traditional shadows. This creates a "glass-on-glass" aesthetic that feels technical and precise.

- **Base Level:** Midnight Navy (#020617) for the application backdrop.
- **Surface Level:** Cool Navy (#0F172A) for primary cards and workspace modules.
- **Raised Level:** Cyan-tinted borders (1px, 20% opacity) define active or selected forensic cards.
- **Overlays:** Modals and tooltips use a high-blur backdrop filter (glassmorphism) with a subtle 1px border in a lighter slate to indicate they are temporary "lenses" over the data. 

Shadows are used sparingly, limited to a single, tight, non-diffused 4px offset in a darker navy to give a "stacked paper" effect to forensic cards.

## Shapes

The shape language is **Soft-Rigid**. Small-radius corners (0.25rem) are applied to all primary containers to provide a professional, modern feel that avoids the clinical coldness of 90-degree corners while remaining significantly more serious than rounded consumer apps.

**Specific Shape Rules:**
- **Forensic Image Cards:** These must maintain sharp corners (0px) to imply unedited, raw data integrity.
- **Action Buttons:** Use the standard 0.25rem radius.
- **Status Chips & Tags:** These use a full pill-shape (rounded-full) to distinguish "metadata" from "interactive buttons."

## Components

**Forensic Image Cards:** The core component. Features a header with the image filename and a risk-color-coded border. Includes a "Histogram Overlay" button and a "Metadata Toggle."

**Audit-Trail Chips:** Small, low-profile tags that appear in a chronological list. They use neutral slate backgrounds with emerald or amber dots to indicate the result of specific automated checks (e.g., [●] EXIF Intact).

**Decision Waterfalls:** A specialized vertical stepper showing the logic path taken by the AI/Triage system. Each step is connected by a thin slate line, with probability percentages displayed in `mono-data` typography next to each node.

**Buttons:** 
- *Primary:* Solid Cyan with Navy text for "Confirm Suspicion."
- *Secondary:* Ghost style (slate border) for "Request More Info."
- *Critical:* Solid Deep Red for "Flag as Fraud."

**Input Fields:** Darker than the surface color with a 1px slate border. Upon focus, the border glows with a subtle Cyan 1px solid stroke.

**Data Tables:** High-density, no vertical borders. Horizontal borders are 1px Slate/900. Zebra striping is used sparingly with a 2% lighter navy tint on alternate rows.