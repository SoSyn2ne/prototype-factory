---
name: Industrial Efficiency
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
  on-surface-variant: '#3e4944'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#6e7a73'
  outline-variant: '#bdc9c2'
  surface-tint: '#006c50'
  primary: '#00654b'
  on-primary: '#ffffff'
  primary-container: '#008060'
  on-primary-container: '#d6ffeb'
  inverse-primary: '#75d9b3'
  secondary: '#5d5e60'
  on-secondary: '#ffffff'
  secondary-container: '#dfdfe0'
  on-secondary-container: '#616364'
  tertiary: '#8f3f37'
  on-tertiary: '#ffffff'
  tertiary-container: '#ae564d'
  on-tertiary-container: '#fff2f1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#92f6cf'
  primary-fixed-dim: '#75d9b3'
  on-primary-fixed: '#002116'
  on-primary-fixed-variant: '#00513c'
  secondary-fixed: '#e2e2e3'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1d'
  on-secondary-fixed-variant: '#454748'
  tertiary-fixed: '#ffdad6'
  tertiary-fixed-dim: '#ffb4ab'
  on-tertiary-fixed: '#3f0303'
  on-tertiary-fixed-variant: '#7a2e28'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
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
    fontWeight: '600'
    lineHeight: 20px
  body-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.05em
  tabular-num:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  gutter: 12px
  margin: 16px
---

## Brand & Style

This design system is engineered for high-frequency operators and financial analysts managing Shopify ecosystems. The aesthetic is strictly **Industrial Minimalism**, prioritizing information density over aesthetic fluff. It evokes a sense of "Mission Control" for e-commerce—professional, unsentimental, and highly structured. 

The visual language utilizes a "utility-first" approach: every pixel must serve a functional purpose. Expect heavy use of borders for structure, a lack of decorative whitespace, and a focus on visual scannability. The emotional response is one of control, precision, and clarity.

## Colors

The palette is anchored in **Restrained Industrial Neutrals**. We use a scale of cool grays and deep slates to establish a hierarchy of surfaces without introducing visual noise. 

- **Primary Accent:** Shopify Green (#008060). Reserved exclusively for primary actions and "success" states. It should be used sparingly to ensure it acts as a beacon in a sea of data.
- **Surface & Backgrounds:** We use a high-contrast relationship between surface containers (#FFFFFF) and the page background (#F8FAFC) to define work areas.
- **Functional Colors:** Red is used for cost overruns/errors, Amber for warnings/idle apps, and Blue for informational status. All functional colors are slightly desaturated to maintain the industrial tone.

## Typography

**Inter** is utilized for its exceptional legibility at small sizes and its robust support for tabular figures. 

- **Numerical Data:** All financial figures and app IDs must use the `tabular-num` style to ensure columns of data align perfectly for vertical scanning.
- **Hierarchy:** We use a compact scale. The difference between body and headline text is primarily weight-based rather than size-based, allowing for higher vertical density.
- **Labels:** Small, uppercase labels with increased letter spacing are used for table headers and metadata to distinguish them from actionable data.

## Layout & Spacing

The system uses a **4px base grid** to allow for surgical precision in layout. 

- **Grid Model:** A 12-column fluid grid is used for the main dashboard, but most "pruning" workflows happen within a sidebar/main-content split (25/75).
- **Density:** We utilize "Compact" spacing as the default. Standard padding for table cells is `8px` (sm), and container margins are `16px` (lg). 
- **Reflow:** On smaller screens (Tablets), sidebars collapse into icons. On Mobile, tables transform into cards to maintain readability of financial figures. Large-scale data visualization is optimized for 1440px+ viewports.

## Elevation & Depth

To maintain the "Industrial" look, we avoid soft, ambient shadows. Instead, we use **Tonal Layers** and **Low-Contrast Outlines**.

- **Borders:** Every container and interactive element uses a 1px solid border (#E2E8F0). This creates a crisp, architectural feel.
- **Stacking:** Depth is conveyed by shifting background colors. The base is light gray, work surfaces are white, and "elevated" items (like tooltips or active modals) use a very thin 2px "hard" shadow with high transparency.
- **Interaction:** Hover states do not lift elements; they change background tones (e.g., White to #F1F5F9) or border colors to indicate interactivity.

## Shapes

The design system utilizes **Soft** corners (4px radius) to prevent the UI from feeling hostile, while still appearing rigorous and structural.

- **Components:** Buttons, Input fields, and Cards all share the same 4px radius.
- **Badges:** Status chips utilize a slightly larger radius (6px) or are fully square to contrast against the standard component language.
- **Icons:** Use 20px strokes with square ends to match the industrial border logic.

## Components

### Data Tables
The core of the system. Tables must have:
- **Sticky Headers:** Always visible during scroll.
- **Bordered Cells:** Subtle vertical lines to separate dense columns of figures.
- **Striped Rows:** Alternating backgrounds (#F8FAFC) to assist horizontal scanning.

### KPI Cards
Dense, small cards displaying a single metric (e.g., "Monthly App Spend"). They feature a small sparkline and a "delta" badge (green/red) in the top right.

### Buttons & Controls
- **Primary:** Solid #008060 with white text. No gradients.
- **Secondary:** White background with #E2E8F0 border and #1A1C1D text.
- **Tertiary/Ghost:** No border, used for utility actions like "Export" or "Filter."

### Input Fields
Inputs are compact (32px height) with internal labels or "Floating" labels to save vertical space. Focus states use a 1px #008060 solid outline.

### Status Badges
Used for "Active," "Trial," or "Over budget." These use high-saturation text on low-saturation backgrounds (e.g., Deep Red text on Pale Red background) for maximum visibility without vibration.