---
name: Field Ops Industrial
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
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#9d4300'
  on-secondary: '#ffffff'
  secondary-container: '#fd761a'
  on-secondary-container: '#5c2400'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#0d1c2f'
  on-tertiary-container: '#76859b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#ffb690'
  on-secondary-fixed: '#341100'
  on-secondary-fixed-variant: '#783200'
  tertiary-fixed: '#d5e3fd'
  tertiary-fixed-dim: '#b9c7e0'
  on-tertiary-fixed: '#0d1c2f'
  on-tertiary-fixed-variant: '#3a485c'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
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
  label-bold:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  data-mono:
    fontFamily: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
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
  margin-mobile: 16px
  margin-desktop: 32px
  touch-target: 44px
---

## Brand & Style
The design system is engineered for "Tech Value Receipt," prioritizing utility, speed, and high-visibility in field-service environments. The personality is disciplined, systematic, and authoritative—reflecting the precision required for technical field operations.

The aesthetic follows a **High-Contrast / Modern** approach. It borrows from industrial signage and aviation interfaces to ensure that data is legible under varied lighting conditions, including high-glare outdoor environments. The visual language avoids decorative flourishes in favor of structural clarity, using weight and contrast to establish hierarchy.

## Colors
The palette is grounded in **Industrial Neutrals**. The primary color is a deep Slate (#0F172A) used for text and core structural elements to maintain maximum contrast against white backgrounds. 

A **High-Visibility Orange** (#F97316) serves as the vivid action accent. This color is reserved strictly for primary calls-to-action (CTAs), critical alerts, and active status indicators. Secondary UI elements utilize cool greys to recede, ensuring the user's focus remains on high-priority data points. For outdoor readability, the system utilizes a high-contrast ratio that exceeds WCAG AAA standards for critical text.

## Typography
This design system utilizes **Inter** for its exceptional legibility and systematic feel. The type scale is optimized for data-dense environments where clarity is paramount.

- **Headlines:** Set with tight tracking and heavy weights to act as clear anchors for page sections.
- **Data Rows:** Use `body-md` for standard entries. For serial numbers, receipt IDs, or technical coordinates, a monospaced font fallback is used to prevent character confusion (e.g., 0 vs O).
- **Labels:** Small caps or bold uppercase labels are used for metadata headers to distinguish "Field Names" from "Field Values."
- **Mobile Adjustments:** Headline sizes scale down significantly on mobile to maximize horizontal space for data tables and list items.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a strict 4px baseline rhythm. 

- **Mobile/Field View:** A single-column layout with full-width cards. Margins are set to 16px to maximize data real estate while preventing accidental edge-taps.
- **Desktop/Dispatch View:** A 12-column grid with 24px gutters. Sidebars are used for persistent navigation, while main content areas utilize "Composed Tables"—multi-row groupings that keep related receipt data together.
- **Touch Considerations:** All interactive elements maintain a minimum 44px height to accommodate gloved hands or movement in the field.

## Elevation & Depth
To ensure maximum visibility in high-glare environments, this design system avoids soft ambient shadows. Instead, it uses **Tonal Layers** and **Bold Outlines**.

- **Level 0 (Background):** Pure white or light grey (#F1F5F9).
- **Level 1 (Cards/Surface):** White background with a 1px solid border (#CBD5E1).
- **Interactive State:** Elements do not use depth to show "press"; they use high-contrast color shifts (e.g., a border changing from Grey to Orange).
- **Sectioning:** Content is separated by thick 2px dividers rather than subtle shadows to ensure clear visual boundaries when screen brightness is low.

## Shapes
The shape language is **Soft (0.25rem)**. This provides a disciplined, engineered appearance that is more approachable than sharp corners but more professional and "industrial" than fully rounded components. 

Buttons and input fields use the base 4px radius. Status badges and tags may use a slightly higher `rounded-lg` (8px) to differentiate them from functional inputs, creating a visual distinction between "information" and "action."

## Components

### Buttons
- **Primary:** High-visibility Orange background, white text, bold weight. Minimal padding of 12px vertical for large touch targets.
- **Secondary:** Slate-900 border (1px), Slate-900 text, no background. Used for destructive or "Back" actions.

### Status Badges
High-contrast indicators are critical. Use a "Solid/Muted" pattern:
- **Pending:** Grey background, dark text.
- **Active:** Electric Blue background, white text.
- **Critical/Late:** High-visibility Orange background, white text.
- **Complete:** Emerald Green background, white text.

### Field Visit Cards
Cards are the primary container for field summaries. They must feature a 4px left-border accent color that reflects the status of the visit. Headers within cards should use `label-bold` for field descriptors (e.g., "ASSET ID") to ensure quick scanning.

### Input Fields
Inputs use a 1px Slate-300 border that thickens to 2px Slate-900 on focus. Labels are always persistent (not floating) to ensure the user never loses context while entering technical data.

### Data Tables
Tables are designed for density. Rows use alternating subtle background tints (Zebra striping) and a minimum height of 48px. "Status" columns are always right-aligned or pinned for immediate recognition.