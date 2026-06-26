---
name: Operator Grade Data Console
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#ffb2b7'
  on-secondary: '#67001b'
  secondary-container: '#b50036'
  on-secondary-container: '#ffc2c4'
  tertiary: '#89ceff'
  on-tertiary: '#00344d'
  tertiary-container: '#009ada'
  on-tertiary-container: '#002d43'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#ffdadb'
  secondary-fixed-dim: '#ffb2b7'
  on-secondary-fixed: '#40000d'
  on-secondary-fixed-variant: '#92002a'
  tertiary-fixed: '#c9e6ff'
  tertiary-fixed-dim: '#89ceff'
  on-tertiary-fixed: '#001e2f'
  on-tertiary-fixed-variant: '#004c6e'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-table-num:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.05em
  krw-lg:
    fontFamily: JetBrains Mono
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-padding: 24px
  gutter: 12px
  cell-padding-v: 8px
  cell-padding-h: 12px
  stack-gap: 16px
---

## Brand & Style
This design system is engineered for high-stakes restaurant operations, prioritizing utility, density, and cognitive clarity over aesthetic flourish. The target audience consists of Korean restaurant owners and operators managing complex financial margins and supply chains. 

The style is **Operator-Grade Functionalism**, characterized by a dark, low-fatigue environment that directs focus toward data anomalies and actionable insights. It draws from **Minimalism** and **Technical Professionalism**, utilizing strict grid alignment, compact hit areas, and high-contrast status indicators. The emotional response is one of control, precision, and institutional reliability.

## Colors
The palette is centered on a "Deep Slate" foundation to reduce screen glare during long operational shifts. 

- **Primary (Indigo):** Reserved strictly for primary calls to action and active navigational states.
- **Danger (Rose):** Used for "Margin Risk" indicators, negative KRW values, and critical stock-outs. This is the highest-priority visual signal.
- **Surface Tiers:** Backgrounds use Slate 900, while elevated modules (cards, modals) use Slate 800 to create subtle hierarchical separation.
- **Text:** Primary data points use high-contrast White/Slate 50. Descriptive labels and metadata use Slate 400/500 to maintain a clear visual scan path.

## Typography
The typographic system is optimized for bilingual (Korean/English) technical data. 

- **Numerical Precision:** All currency (KRW) and percentage values must use **JetBrains Mono** to ensure tabular alignment (fixed-width digits). This allows operators to compare vertical columns of numbers instantly.
- **Korean Readability:** **Inter** is utilized for body text due to its exceptional clarity at small sizes and high compatibility with Korean glyph rendering.
- **Scale:** Sizes are kept compact (12px-14px) to maximize information density. Titles are bold but restrained in size to prevent "ui noise."

## Layout & Spacing
The layout employs a **high-density fluid grid** optimized for 1440px+ dashboard views, but remains fully functional on 1024px tablets. 

- **Density:** We use a 4px baseline grid. Padding in data tables is minimized (8px vertical) to maximize the number of rows visible above the fold.
- **Evidence Packets:** Logical groupings of data are housed in card-based modules. These modules use a 12px gutter to maintain a tight, "instrument-panel" feel.
- **Mobile/Tablet:** On smaller viewports, sidebars collapse into icons, and data tables enable horizontal scrolling with "sticky" first columns (Product Name/Date).

## Elevation & Depth
Depth is conveyed through **Tonal Layering** and **Low-Contrast Outlines** rather than traditional shadows.

- **Background:** Slate 950 (#020617).
- **Surface:** Slate 900 (#0f172a).
- **Interactive:** Slate 800 (#1e293b).
- **Borders:** All modules use a 1px solid border of Slate 800. Active or focused states use a 1px Indigo border. 
- **Shadows:** Avoid shadows entirely to keep the UI feeling "flat" and performant, suggesting a software-as-an-instrument toolset.

## Shapes
In line with the "Operator-Grade" narrative, the shape language is **Sharp/Technical**. 

- **Standard Radius:** 4px (Soft) for buttons and cards to provide just enough definition to separate elements without feeling "consumer-soft."
- **Inputs:** Square corners or 2px radius to emphasize a rigid, systematic feel.
- **Status Pills:** 2px radius, avoiding full "pill" shapes to maintain a serious, data-centric aesthetic.

## Components
- **Data Tables:** The core component. Must feature hover-row highlighting in Slate 800, sortable headers with micro-indicators, and "Risk" cells that flash or tint Rose when margins drop below 10%.
- **Simulation Sliders:** Used for "What-if" cost analysis. Use thin Indigo tracks with small, square Slate handles. Real-time value updates must appear in JetBrains Mono above the handle.
- **Evidence Packets (Cards):** Compact containers for supply-chain receipts or digital invoices. Must include a header with a "Status Dot" and a secondary-action icon (External Link).
- **Inputs:** Inset fields with Slate 950 backgrounds and 1px Slate 700 borders. Focus state is a 1px Indigo ring.
- **Buttons:** 
  - *Primary:* Indigo background, white text, 4px radius. 
  - *Secondary/Ghost:* Slate 800 border, no background, Slate 400 text.
- **Margin Indicators:** Small sparklines or trend arrows (Up/Down) placed directly adjacent to KRW totals to provide immediate context of financial direction.