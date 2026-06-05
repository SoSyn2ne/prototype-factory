---
name: Medi-Audit Console
colors:
  surface: '#f7f9fc'
  surface-dim: '#d8dadd'
  surface-bright: '#f7f9fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f7'
  surface-container: '#eceef1'
  surface-container-high: '#e6e8eb'
  surface-container-highest: '#e0e3e6'
  on-surface: '#191c1e'
  on-surface-variant: '#404752'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f4'
  outline: '#707883'
  outline-variant: '#bfc7d4'
  surface-tint: '#0061a4'
  primary: '#0061a4'
  on-primary: '#ffffff'
  primary-container: '#2196f3'
  on-primary-container: '#002c4f'
  inverse-primary: '#9ecaff'
  secondary: '#4c56af'
  on-secondary: '#ffffff'
  secondary-container: '#959efd'
  on-secondary-container: '#27308a'
  tertiary: '#875200'
  on-tertiary: '#ffffff'
  tertiary-container: '#ce8000'
  on-tertiary-container: '#402400'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d1e4ff'
  primary-fixed-dim: '#9ecaff'
  on-primary-fixed: '#001d36'
  on-primary-fixed-variant: '#00497d'
  secondary-fixed: '#e0e0ff'
  secondary-fixed-dim: '#bdc2ff'
  on-secondary-fixed: '#000767'
  on-secondary-fixed-variant: '#343d96'
  tertiary-fixed: '#ffddba'
  tertiary-fixed-dim: '#ffb865'
  on-tertiary-fixed: '#2b1700'
  on-tertiary-fixed-variant: '#663d00'
  background: '#f7f9fc'
  on-background: '#191c1e'
  surface-variant: '#e0e3e6'
typography:
  headline-lg:
    fontFamily: Noto Sans KR
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 44px
  headline-lg-mobile:
    fontFamily: Noto Sans KR
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Noto Sans KR
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
  body-lg:
    fontFamily: Noto Sans KR
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Noto Sans KR
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Noto Sans KR
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Noto Sans KR
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.03em
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  max-width: 1200px
---

## Brand & Style

The design system is centered on the "Calm Healthcare Cost Console" aesthetic. It targets users navigating the complex landscape of Korean medical billing—specifically private indemnity insurance (실손) and national health insurance (건보). 

The visual language balances the authority of a financial tool with the empathy required for healthcare. We employ a **Corporate / Modern** style with a focus on data density and legibility. The interface should feel like a precision instrument: surgical, transparent, and stable. High whitespace is used not for decoration, but to compartmentalize dense financial data, reducing cognitive load for users potentially under stress.

## Colors

The palette is anchored by **Deep Navy (#1A237E)**, used for structural headers and navigation to establish immediate trust and institutional weight. **Medical Blue (#2196F3)** serves as the primary action color, signaling interaction and progress.

**Warning Amber (#FFA000)** is reserved strictly for critical financial discrepancies or "Urgency" notes, such as non-reimbursable (비급여) items that significantly impact the total cost. The background uses **Soft Gray (#F5F7FA)** to provide a neutral canvas that prevents screen glare and fatigue during long periods of data entry.

- **Primary:** Actions, active states, and focus indicators.
- **Secondary:** Navigation backgrounds, typography for headers.
- **Tertiary:** Warnings, important highlights, and cautionary data points.
- **Neutral:** Backgrounds, surface borders, and subtle text.

## Typography

This design system utilizes **Noto Sans KR** for its exceptional clarity in both Korean and alphanumeric characters. The type scale is structured to prioritize hierarchy in financial tables.

- **Headlines:** Bold and authoritative for section titles (e.g., '급여 항목 합계').
- **Body:** Standardized for descriptive text and tooltips.
- **Labels:** Used for metadata and table headers.
- **Data Mono:** We introduce **JetBrains Mono** specifically for currency values (₩) and numeric calculations to ensure vertical alignment in tables, which is critical for professional cost calculators.

## Layout & Spacing

The design system employs a **Fixed Grid** model for desktop to maintain the "Console" feel, centered at 1200px. On mobile, it transitions to a **Fluid Grid** with 16px margins.

We use an 8px base grid. Spacing between related input fields should be 8px or 16px, while spacing between distinct logical cards (e.g., 'Hospital Info' vs 'Cost Breakdown') should be 24px or 32px. This rhythm ensures that even with a high density of data, the user can easily distinguish between different billing categories.

## Elevation & Depth

We utilize **Tonal Layers** rather than heavy shadows to maintain a professional, flat aesthetic. 
- **Level 0 (Background):** Soft Gray (#F5F7FA).
- **Level 1 (Cards):** Pure White (#FFFFFF) with a 1px solid border in a subtle gray (#E0E4E9). No shadow.
- **Level 2 (Modals/Popovers):** Pure White (#FFFFFF) with a soft, diffused ambient shadow (10% opacity) to provide focus.

This approach mimics a physical folder or document stack, reinforcing the "Audit" and "Calculation" nature of the product.

## Shapes

The design system uses a **Soft (1)** roundedness profile. A 4px radius (0.25rem) is applied to buttons, input fields, and cards. This subtly softens the "Institutional" feel without appearing overly casual or consumer-focused. Large containers like main dashboard panels may use `rounded-lg` (8px) to frame the content.

## Components

### Buttons
- **Primary:** Medical Blue background, White text. Used for "Calculate" or "Save."
- **Secondary:** Deep Navy outline, Deep Navy text. Used for "Add Item" or "Export PDF."
- **Ghost:** No background, Gray text. Used for "Cancel" or "Reset."

### Cards & Data Rows
- **Structured Cards:** White background, 1px border. Includes a 40px height header row in Deep Navy for category titles.
- **Data Rows:** Alternating subtle background tints for long lists of bill items. Every row should have a clear "Won" (₩) alignment on the right.

### Input Fields
- **Calculation Fields:** White background with a clear focus state in Medical Blue. 
- **Currency Inputs:** Include a fixed '₩' prefix and clear separators for thousands.
- **Status Chips:** Use small, high-contrast labels for '급여' (Reimbursable - Blue tint) and '비급여' (Non-reimbursable - Amber tint).

### Specialized Components
- **Cost Summary Bar:** A sticky footer that updates in real-time as items are added, highlighting the 'Final Out-of-Pocket Cost' (최종 본인부담금).