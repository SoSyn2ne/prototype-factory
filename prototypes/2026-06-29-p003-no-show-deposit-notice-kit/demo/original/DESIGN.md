---
name: Pro-Operator Core
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
  secondary: '#ad2c00'
  on-secondary: '#ffffff'
  secondary-container: '#d83900'
  on-secondary-container: '#fffbff'
  tertiary: '#1e1200'
  on-tertiary: '#ffffff'
  tertiary-container: '#35260c'
  on-tertiary-container: '#a38c6a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e3fb'
  primary-fixed-dim: '#bcc7de'
  on-primary-fixed: '#111c2d'
  on-primary-fixed-variant: '#3c475a'
  secondary-fixed: '#ffdbd1'
  secondary-fixed-dim: '#ffb5a0'
  on-secondary-fixed: '#3b0900'
  on-secondary-fixed-variant: '#872000'
  tertiary-fixed: '#fadfb8'
  tertiary-fixed-dim: '#ddc39d'
  on-tertiary-fixed: '#271902'
  on-tertiary-fixed-variant: '#564427'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  title-sm:
    fontFamily: Noto Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Noto Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Noto Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-bold:
    fontFamily: Noto Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Noto Sans
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
  data-mono:
    fontFamily: notoSans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1440px
  gutter: 16px
  margin-page: 24px
  row-height-dense: 32px
  row-height-standard: 48px
  cell-padding-x: 12px
---

## Brand & Style
The design system focuses on high-utility, production-grade management for Korean restaurant operators. The personality is authoritative, reliable, and strictly functional. The target audience is business owners who require rapid information processing to mitigate financial loss from "no-shows."

The visual style is **Minimalist-Corporate**, leaning into a high-density "operator console" aesthetic. It prioritizes data integrity and legibility over decorative elements. The UI utilizes a compact structure with clear visual hierarchy to ensure that legal notices and financial deposit states are unmistakable. The emotional response is one of control, precision, and professional security.

## Colors
The palette is intentionally restrained to maintain a professional, legal-proof atmosphere. 

- **Primary (#1E293B):** A deep slate used for primary navigation, headings, and high-importance UI boundaries.
- **Secondary/Accent (#FF4500):** A sharp red-orange reserved *exclusively* for high-risk no-show alerts, urgent deposit deadlines (예약금 미납), and critical system errors.
- **Neutral/Surface:** A range of soft grays (Slate-50 to Slate-400) used for tabular backgrounds, borders, and secondary text.
- **Status Colors:** Use standard semantic greens for "Confirmed" (확정) and blues for "Sent" (발송 완료), but ensure they remain desaturated to not compete with the secondary accent color.

## Typography
The system uses **Hanken Grotesk** for structural headers and **Noto Sans (KR)** for all functional and body text to ensure maximum readability for complex Korean legal terminology.

The hierarchy is optimized for density. **Body-sm (13px)** is the workhorse for table data and form labels. **Label-bold** is used for table headers (TH) to distinguish them from the data rows. For numerical values and timestamps (time of booking), maintain tight tracking to allow more columns within the viewport.

## Layout & Spacing
The layout follows a **Fixed-Fluid hybrid grid**. The main navigation is a fixed sidebar (240px), while the content area uses a 12-column fluid grid.

**Density Principles:**
- Use a base-4px spacing scale.
- Data tables must support a "Compact" mode where row heights are reduced to 32px.
- Horizontal padding in table cells is fixed at 12px to prevent visual drift in wide displays.
- Group related fields in multi-step forms using 24px vertical gaps, with internal field spacing at 8px.

## Elevation & Depth
This design system avoids heavy shadows to maintain a "flat and functional" console feel. 

- **Level 0 (Background):** Slate-50 (#F8FAFC) for the main application canvas.
- **Level 1 (Cards/Tables):** Pure white surface with a 1px solid border (#E2E8F0). No shadow.
- **Level 2 (Modals/Popovers):** Pure white with a subtle 4px blur, 10% opacity black shadow to provide focus without breaking the industrial aesthetic.
- **Interactions:** Use tonal changes (e.g., Slate-50 to Slate-100) for hover states rather than elevation shifts.

## Shapes
Shapes are disciplined and sharp. A consistent **4px (0.25rem)** border radius is applied to all primary components (Buttons, Inputs, Cards). This "Soft" setting maintains a modern look while appearing more precise and "industrial" than pill-shaped or highly rounded alternatives. 

- **Badges:** 2px radius for a strictly architectural feel.
- **Buttons:** 4px radius.
- **Input Fields:** 4px radius with 1px inset borders.

## Components

### Data Tables (데이터 테이블)
The core of the console. Columns must have fixed widths for predictable scanning. Header text (TH) is `label-bold` in Slate-500. Row text is `body-sm`. Use alternating "Zebra stripes" (Slate-25) for lists exceeding 20 rows.

### Status Badges (상태 배지)
Small, rectangular tags with `label-sm` text.
- **Urgent (긴급):** White text on #FF4500.
- **Pending (대기):** Slate-600 on Slate-100.
- **Deposited (입금 완료):** Green-700 on Green-50.

### Multi-step Forms (단계별 서식)
Used for creating deposit notices (예약금 고지서). Use a vertical stepper on the left and a preview pane on the right. The preview pane must replicate the legal notice as the customer will see it.

### Buttons (버튼)
- **Primary:** Slate-900 background, white text.
- **Alert:** #FF4500 background, white text (used for "Send No-Show Notice").
- **Secondary:** White background, Slate-200 border, Slate-700 text.

### Input Fields (입력 필드)
High-contrast borders (#CBD5E1). Focused state uses a 1px Primary color border. Error states use the #FF4500 accent color for both the border and the helper text.