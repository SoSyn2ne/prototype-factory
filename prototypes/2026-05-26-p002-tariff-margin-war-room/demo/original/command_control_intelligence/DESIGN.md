---
name: Command & Control Intelligence
colors:
  surface: '#081425'
  surface-dim: '#081425'
  surface-bright: '#2f3a4c'
  surface-container-lowest: '#040e1f'
  surface-container-low: '#111c2d'
  surface-container: '#152031'
  surface-container-high: '#1f2a3c'
  surface-container-highest: '#2a3548'
  on-surface: '#d8e3fb'
  on-surface-variant: '#c6c6cd'
  inverse-surface: '#d8e3fb'
  inverse-on-surface: '#263143'
  outline: '#909097'
  outline-variant: '#45464c'
  surface-tint: '#c1c6db'
  primary: '#c1c6db'
  on-primary: '#2a3040'
  primary-container: '#0b1120'
  on-primary-container: '#777c90'
  inverse-primary: '#585e70'
  secondary: '#d3fbff'
  on-secondary: '#00363a'
  secondary-container: '#00eefc'
  on-secondary-container: '#00686f'
  tertiary: '#ffb95f'
  on-tertiary: '#472a00'
  tertiary-container: '#1d0e00'
  on-tertiary-container: '#af6f00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dde2f8'
  primary-fixed-dim: '#c1c6db'
  on-primary-fixed: '#151b2b'
  on-primary-fixed-variant: '#414658'
  secondary-fixed: '#7df4ff'
  secondary-fixed-dim: '#00dbe9'
  on-secondary-fixed: '#002022'
  on-secondary-fixed-variant: '#004f54'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#081425'
  on-background: '#d8e3fb'
  surface-variant: '#2a3548'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  data-lg:
    fontFamily: JetBrains Mono
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  data-md:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
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
  margin-desktop: 32px
  margin-mobile: 16px
  container-padding: 24px
---

## Brand & Style

The design system is engineered for high-stakes decision-making in global supply chain and finance environments. The brand personality is authoritative, precise, and vigilant. It evokes the atmosphere of a strategic "War Room," providing executives with a sense of total situational awareness over complex global variables.

The aesthetic utilizes a **Modern-Industrial Dark Mode** blended with **Glassmorphism**. It prioritizes data density without sacrificing clarity, using high-contrast accents against a deep, non-distracting void. Visual cues are inspired by aerospace telemetry and financial terminals, employing subtle glows and grid-aligned elements to signal technical sophistication and real-time responsiveness.

## Colors

The palette is anchored by **Deep Midnight Navy**, providing a low-light foundation that reduces eye strain during long-duration monitoring. 

- **Primary Base (#0B1120):** Used for the global canvas and deep background layers.
- **Electric Cyan (#00F0FF):** The primary action and "all-clear" color. Used for active states, positive margin trends, and primary data visualizations.
- **Urgent Amber (#F59E0B):** Reserved for warnings, pending tariff changes, and moderate margin risks.
- **High-Alert Crimson (#EF4444):** Used sparingly for critical margin erosion, blockages, or immediate financial threats.
- **Neutral/Surface (#1E293B):** Used for card backgrounds and elevated surface containers to create depth against the primary navy.

## Typography

This design system employs a dual-font strategy to distinguish between interface guidance and raw intelligence. 

- **Inter** is the structural workhorse, used for headers, navigation, and instructional text. It provides high legibility and a neutral, professional tone.
- **JetBrains Mono** is utilized for all numerical data, tariff codes, and financial metrics. The monospaced nature ensures that columns of numbers align perfectly, allowing executives to scan for anomalies in margin percentages across global regions instantly.

**Hierarchy Rules:**
- Use `label-caps` for all table headers and small metadata tags.
- Use `data-lg` for primary KPIs (e.g., Total Margin %).
- Headings should remain concise and objective.

## Layout & Spacing

The layout follows a **Strict Fixed Grid** model to convey precision. The screen is divided into a 12-column grid on desktop, emphasizing modular "widgets" that can be rearranged but always snap to the grid lines.

- **Data Density:** Spacing is compact, utilizing a 4px base unit. 
- **Gutters:** Standard 16px gutters between data cards to maintain breathing room while maximizing information per square inch.
- **Responsive Behavior:** On mobile, the grid collapses to a single column, but data-dense tables should utilize horizontal scrolling with "sticky" first columns to preserve the relationship between Tariff Codes and Margin impact.
- **Layout Model:** Use a sidebar-heavy layout for global filters (Region, Commodity, Timeframe) with a persistent "Global Alert" header.

## Elevation & Depth

Depth is achieved through **Tonal Layering** and **Glassmorphism** rather than traditional drop shadows.

- **Background:** The base layer is `#0B1120`.
- **Containers:** Surface cards use `#1E293B` at 60% opacity with a `24px` backdrop blur. This creates a "glass" effect that suggests a sophisticated, multi-layered digital environment.
- **Outlines:** Instead of shadows, use 1px inner borders (strokes) with 10% white opacity to define edges.
- **Glows:** For "High-Alert" or "Active" states, use a subtle outer glow (0px 0px 12px) matching the Cyan or Crimson accent colors to draw the eye to critical data points.

## Shapes

The shape language is **Soft-Industrial**. We avoid hyper-rounded or "friendly" pill shapes to maintain a serious, technical tone.

- **Standard Radius:** 4px (0.25rem) for cards and input fields. This provides a modern touch while maintaining a rigid, grid-like structure.
- **Data Points:** Graphs and trend lines should use sharp angles or very minimal smoothing to reflect precise mathematical calculations.
- **Interactive Elements:** Buttons and toggles follow the same 4px radius, ensuring a cohesive "instrument panel" feel.

## Components

### Buttons
- **Primary:** Filled Cyan (#00F0FF) with black text for high contrast. 
- **Ghost:** Transparent background with a 1px Cyan border for secondary actions.
- **Alert:** Filled Crimson (#EF4444) for destructive or critical override actions.

### Cards & Data Modules
Cards are the primary container. They must include a `label-caps` header and a subtle top-border highlight (1px) in a neutral-blue shade. Use glassmorphism (backdrop-blur) for overlays like tooltips or modals.

### Input Fields
Dark backgrounds (#0B1120) with 1px borders (#334155). Focus states must trigger the Electric Cyan glow and border.

### Status Indicators
Small, circular "pips" that glow. 
- **Steady State:** Cyan glow.
- **Pending/Warning:** Amber pulse.
- **Critical:** Rapid Crimson flash or static bright Crimson.

### Data Tables
Tables are the heart of the system. 
- Zebra striping is prohibited; use 1px horizontal dividers instead.
- All numerical data must be right-aligned using JetBrains Mono.
- Negative values are prefixed with a minus sign and colored in High-Alert Crimson.

### Margin Trend Sparklines
Small, high-density line charts embedded within rows. Use Cyan for upward trends (improving margin) and Crimson for downward trends (margin erosion).