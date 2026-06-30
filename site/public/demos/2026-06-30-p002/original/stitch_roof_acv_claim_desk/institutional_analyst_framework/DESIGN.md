---
name: Institutional Analyst Framework
colors:
  surface: '#f7fafc'
  surface-dim: '#d7dadc'
  surface-bright: '#f7fafc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f4f6'
  surface-container: '#ebeef0'
  surface-container-high: '#e5e9eb'
  surface-container-highest: '#e0e3e5'
  on-surface: '#181c1e'
  on-surface-variant: '#44474c'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eef1f3'
  outline: '#74777d'
  outline-variant: '#c4c6cd'
  surface-tint: '#4f6073'
  primary: '#041627'
  on-primary: '#ffffff'
  primary-container: '#1a2b3c'
  on-primary-container: '#8192a7'
  inverse-primary: '#b7c8de'
  secondary: '#545f72'
  on-secondary: '#ffffff'
  secondary-container: '#d5e0f7'
  on-secondary-container: '#586377'
  tertiary: '#001a07'
  on-tertiary: '#ffffff'
  tertiary-container: '#0f3018'
  on-tertiary-container: '#769a7a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4fb'
  primary-fixed-dim: '#b7c8de'
  on-primary-fixed: '#0b1d2d'
  on-primary-fixed-variant: '#38485a'
  secondary-fixed: '#d8e3fa'
  secondary-fixed-dim: '#bcc7dd'
  on-secondary-fixed: '#111c2c'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#c6ecc8'
  tertiary-fixed-dim: '#abd0ad'
  on-tertiary-fixed: '#01210b'
  on-tertiary-fixed-variant: '#2d4e33'
  background: '#f7fafc'
  on-background: '#181c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Source Serif 4
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Source Serif 4
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
  data-display:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: -0.01em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  section-gap: 64px
---

## Brand & Style
The design system is engineered for high-stakes financial transparency, specifically addressing the complexity of Actual Cash Value (ACV) insurance claims. The brand personality is **Institutional, Analytical, and Composed**. It avoids the "tech-startup" aesthetic in favor of a "consultancy-grade" report style that evokes the authority of a premium financial firm.

The visual style is **Corporate Modern with a hint of Editorial Precision**. It utilizes a structured, high-whitespace approach to reduce the cognitive load of "claim shock." By combining the utilitarian efficiency of data-driven SaaS with the legibility of traditional financial reporting, the design system transforms overwhelming insurance data into a clear, actionable narrative.

## Colors
The palette is rooted in stability and professional rigor.
- **Primary (Deep Navy):** Used for headers, primary navigation, and key structural elements to establish immediate authority.
- **Secondary (Slate):** Employed for supporting UI elements and icons, maintaining a neutral but professional tone.
- **Confidence Sage:** A muted green used exclusively for positive financial outcomes, "safe" claim ranges, and verified data indicators.
- **Risk Amber:** A restrained, non-alarmist yellow used for "cash-at-risk" callouts, depreciation warnings, and areas requiring homeowner attention.
- **Neutral/Background:** A cool gray-white palette ensures the interface feels like a clean, physical document.

## Typography
This design system employs a hybrid typographic approach:
- **Inter (Sans-Serif):** Reserved for data points, labels, navigation, and headers. It provides a functional, neutral clarity for numerical information.
- **Source Serif 4 (Serif):** Used for all explanatory text, narrative interpretations, and "written word" sections. This differentiates the *calculation* (Inter) from the *explanation* (Source Serif 4), mimicking a professional analyst's report.
- **Data Display:** Numerical values should always use Inter with tabular lining figures to ensure vertical alignment in tables and lists.

## Layout & Spacing
The layout follows a **Fixed Grid** model for desktop to maintain the feel of a formal dossier. 
- **Grid:** A 12-column system with a generous 24px gutter. 
- **Rhythm:** An 8px base unit drives all padding and margins. 
- **White Space:** Heavy use of margins between sections (64px+) is encouraged to prevent the "data-density" from becoming overwhelming. 
- **Responsive Behavior:** On mobile, columns stack vertically, and horizontal padding reduces to 16px. Large KPI cards should maintain a minimum height to ensure legibility of numerical data.

## Elevation & Depth
Depth is signaled through **Tonal Layering** and **Subtle Shadows** rather than aggressive elevation.
- **Base Layer:** The main page background is slightly off-white (#F7FAFC).
- **Surface Layer:** White cards or containers used for specific data modules.
- **Shadows:** Use extremely diffused, low-opacity shadows (e.g., `y: 2, blur: 8, opacity: 0.05`) to lift cards off the background without creating a "floating" app feel.
- **Borders:** Thin 1px borders in Slate (#E2E8F0) provide structure and definition, reinforcing the "paper report" aesthetic.

## Shapes
The shape language is **Soft (0.25rem)**. This slight rounding takes the edge off the institutional rigidity without making the interface feel "bubbly" or informal. Large containers like primary KPI cards may use `rounded-lg` (0.5rem) to differentiate them from smaller interactive elements like buttons.

## Components
- **KPI Cards:** White background, 1px border, subtle shadow. The primary figure (e.g., Claim Total) should be prominent in Inter Bold.
- **Buttons:** Primary buttons use the Deep Navy background with white text. Secondary buttons are outlined. Transitions should be instant or very fast (150ms) to feel "efficient."
- **Data Tables:** Row-based with thin Slate horizontal dividers. No vertical lines. Header cells use `label-bold` typography.
- **Interpreted Text Blocks:** Styled with a subtle Sage or Light Blue left-accent border to denote a "Summary Insight" from the analyst.
- **Input Fields:** Minimalist style with a 1px border that darkens on focus. Use Serif for long-form user notes and Sans for numerical inputs.
- **Confidence Gauges:** Minimalist horizontal bars using the Sage/Amber palette to indicate claim health/risk.