---
name: Financial Precision Framework
colors:
  surface: '#fbf8fb'
  surface-dim: '#dbd9dc'
  surface-bright: '#fbf8fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f6'
  surface-container: '#efedf0'
  surface-container-high: '#eae7ea'
  surface-container-highest: '#e4e2e5'
  on-surface: '#1b1b1e'
  on-surface-variant: '#44474d'
  inverse-surface: '#303033'
  inverse-on-surface: '#f2f0f3'
  outline: '#75777e'
  outline-variant: '#c5c6ce'
  surface-tint: '#4f5e7e'
  primary: '#041632'
  on-primary: '#ffffff'
  primary-container: '#1b2b48'
  on-primary-container: '#8393b5'
  inverse-primary: '#b7c7eb'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#211500'
  on-tertiary: '#ffffff'
  tertiary-container: '#3b2800'
  on-tertiary-container: '#ac8e5b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#b7c7eb'
  on-primary-fixed: '#091b37'
  on-primary-fixed-variant: '#374765'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#ffdea7'
  tertiary-fixed-dim: '#e3c28a'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#594317'
  background: '#fbf8fb'
  on-background: '#1b1b1e'
  surface-variant: '#e4e2e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
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
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  data-tabular:
    fontFamily: Inter
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
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  container-max: 1280px
  gutter: 20px
---

## Brand & Style

The design system is engineered for the "Restaurant Direct Order Migration Kit," a professional tool assisting merchants in transitioning from high-commission delivery platforms to direct-to-consumer models. The brand personality is **authoritative, analytical, and supportive**, aiming to instill financial confidence in small business owners.

The visual style is **Corporate Modern**, prioritizing high utility, clarity, and systematic organization. It avoids decorative flourishes in favor of information density and logical grouping. The interface uses flat panels with 1px borders to define functional zones, ensuring that complex financial data remains digestible and actionable.

## Colors

The palette is restricted to promote a focused, data-centric environment. 
- **Primary (#1B2B48):** Deep Navy used for high-level navigation, primary call-to-action buttons, and header backgrounds. It conveys stability and institutional trust.
- **Secondary/Neutral (#64748B):** A neutral Slate Gray used for secondary UI elements, icons, and supporting text.
- **System Accents:** Warning Amber (#F59E0B) and Critical Red (#EF4444) are used sparingly, specifically to highlight predatory platform fees or negative margin projections.
- **Background (#F8F9FA):** An off-white base that reduces screen glare during long periods of analytical work.

## Typography

The typography system relies on **Inter**, chosen for its exceptional legibility and support for Korean glyphs. 

A critical requirement for this design system is the use of **Tabular Figures** (`tnum`) for all financial data and currency displays (₩). This ensures that columns of numbers align vertically, allowing merchants to scan and compare figures like "Commission Totals" and "Net Profit" with ease. 

Headline levels are tight and bold to establish hierarchy, while body text maintains generous line height for readability. Small labels utilize medium weights to remain visible against gray backgrounds.

## Layout & Spacing

The design system utilizes a **12-column fixed grid** for desktop, centered on the screen with a maximum width of 1280px. This constraint prevents data tables from becoming overly wide and difficult to read on ultra-wide monitors.

A 4px base unit governs all spacing.
- **Dashboards:** Use `lg` (24px) padding between major cards to create a sense of professional whitespace.
- **Data Tables:** Use `sm` (8px) vertical padding for rows to maintain a high information density without sacrificing touch/click targets.
- **Mobile:** The grid collapses to a single column with `md` (16px) side margins.

## Elevation & Depth

This system avoids heavy shadows and complex gradients to maintain a "flat professional" aesthetic. Depth is communicated through:
- **Surface Layering:** The primary background is `#F8F9FA`. Secondary panels and cards are white (`#FFFFFF`) with a 1px border of `#E2E8F0`.
- **Subtle Shadows:** Only the "active" state of a card or a floating dropdown menu receives a shadow. Shadows are very soft: `0px 4px 6px -1px rgba(0, 0, 0, 0.05)`.
- **Outline Priority:** Internal divisions within panels use 1px solid lines rather than shadows to separate data points, mimicking the structure of a financial ledger.

## Shapes

The design system uses a **Soft** shape language. 
- Standard components like buttons and input fields use a `0.25rem` (4px) corner radius. 
- Larger containers and cards use `0.5rem` (8px). 

This subtle rounding prevents the UI from feeling overly aggressive or "brutalist" while maintaining a precise, structured appearance suitable for financial software.

## Components

### Data Tables
Tables are the core of this system. They must feature sticky headers, zebra-striping on hover, and right-aligned numeric columns. The currency symbol (₩) should be placed to the left of the value with consistent spacing.

### Comparison Cards
Used for "Current vs. Migrated" scenarios. These cards use a vertical split or side-by-side layout. The "Migrated" (Direct Order) side should use the Primary Navy color for its primary metrics to denote the target state.

### Input Fields with Suffixes
Financial inputs must include fixed suffixes within the field (e.g., "KRW" or "%") to prevent user error. These suffixes are styled in Slate Gray to distinguish them from user-entered text.

### Status Badges
Used for merchant status or fee categories (e.g., "Active," "High Commission," "Optimized"). Badges use a subtle background tint of the status color with high-contrast text for accessibility.

### Primary Buttons
Solid Primary Navy (#1B2B48) with white text. For Korean localization, buttons should use clear, action-oriented verbs (e.g., "계산하기" for Calculate, "리포트 다운로드" for Download Report).