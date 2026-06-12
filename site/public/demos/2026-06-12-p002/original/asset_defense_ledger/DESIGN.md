---
name: Asset Defense Ledger
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#444748'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#1e1e1e'
  on-primary: '#ffffff'
  primary-container: '#333333'
  on-primary-container: '#9c9b9b'
  inverse-primary: '#c8c6c6'
  secondary: '#455f88'
  on-secondary: '#ffffff'
  secondary-container: '#b6d0ff'
  on-secondary-container: '#3f5882'
  tertiary: '#002505'
  on-tertiary: '#ffffff'
  tertiary-container: '#003d0b'
  on-tertiary-container: '#4db051'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e4e2e1'
  primary-fixed-dim: '#c8c6c6'
  on-primary-fixed: '#1b1c1c'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#d6e3ff'
  secondary-fixed-dim: '#adc7f7'
  on-secondary-fixed: '#001b3c'
  on-secondary-fixed-variant: '#2d476f'
  tertiary-fixed: '#94f990'
  tertiary-fixed-dim: '#78dc77'
  on-tertiary-fixed: '#002204'
  on-tertiary-fixed-variant: '#005313'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  display-lg:
    fontFamily: Public Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Public Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Public Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Public Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  data-lg:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 24px
  data-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  data-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
spacing:
  unit: 4px
  gutter: 16px
  margin: 24px
  container-max: 1200px
---

## Brand & Style
This design system is built for the "Delivery Fee Truth Menu," a diagnostic tool for restaurant owners. The brand personality is rooted in **Financial Precision** and **Radical Transparency**. It adopts a **Modern-Brutalism** aesthetic mixed with **Documentary Realism**, mimicking the physical artifacts of restaurant management: receipts, ledgers, and carbon-copy forms.

The UI must evoke the feeling of a high-stakes audit. It is authoritative yet empathetic, using language like "Asset Defense" (자산 방어) to frame profitability as a protective measure against "Margin Leaks." The visual style avoids unnecessary ornamentation, focusing on data density, structural integrity, and the tactile quality of stacked paper.

## Colors
The palette is inspired by professional accounting stationery.
- **Graphite (#333333):** Used for primary text, table headers, and structural 1px borders. It represents the "ink" of the ledger.
- **Ledger Surface (#F9F7F2):** The base background color, mimicking off-white receipt paper to reduce eye strain compared to pure white.
- **Ink Blue (#1A365D):** Reserved for "Verified" states, signatures, and formal call-to-actions.
- **Safe Green (#4CAF50):** Indicates healthy margins and "Asset Defense" success.
- **Warning Amber (#FFBF00):** Highlights "Fee Leaks" and high-risk operational costs.
- **Grid Lines:** A faint version of Graphite at 8% opacity is used for background graph paper patterns.

## Typography
The typography system uses a dual-font strategy to separate narrative from data.
- **Public Sans:** Used for all headings and instructional text. It provides a clean, authoritative, and neutral voice.
- **JetBrains Mono:** Used for all numerical data, table cells, and financial labels. The monospaced nature ensures that columns of numbers align perfectly, facilitating quick scanning of margins and costs.
- **Formatting:** Use `label-caps` for table headers and metadata labels to create a clear "form-fill" hierarchy.

## Layout & Spacing
The layout follows a strict **Fixed Grid** model to maintain the appearance of a printed financial report. 
- **Grid:** A 12-column grid on desktop, 4-column on mobile.
- **Rhythm:** Spacing is based on a 4px baseline. Use 16px (4 units) for standard component spacing and 24px (6 units) for section margins.
- **Waterfalls:** For "Margin Leak" breakdowns, use a recursive indentation pattern (24px per level) to show how revenue trickles down into different fee buckets.
- **Safe Areas:** Content should be centered within a 1200px container to ensure readability on wide monitors used by analysts.

## Elevation & Depth
This design system eschews traditional soft shadows in favor of **Layered Stacking**.
- **The "Stacked Paper" Effect:** Instead of diffused blurs, use hard 1px or 2px offset shadows in Graphite (#333333) at 15% opacity to make cards look like physical sheets of paper sitting on a desk.
- **Flat Depth:** Use 1px borders for all containers. No backdrop blurs or glassmorphism.
- **Tonal Tiers:** The primary surface is `#F9F7F2`. Secondary "indented" areas or tooltips use a slightly cooler off-white or light grey to indicate they are "below" the primary document level.

## Shapes
To maintain the "Financial Analyst" precision, the shape language is strictly **Sharp (0px roundedness)**. 
- All buttons, input fields, cards, and data tags must have square corners. 
- This reinforces the feeling of a structured ledger and differentiates the tool from "soft" consumer-facing apps.
- **Exceptions:** Use a 45-degree clipped corner for "Status Tags" to mimic the look of a clipped receipt or a physical tag.

## Components
- **Primary Button:** Solid Graphite background with White JetBrains Mono text. 1px border. No rounding.
- **Data Tables:** 1px Graphite bottom borders for rows. Headers in `label-caps`. Use zebra-striping with 4% Graphite opacity for long-form audit logs.
- **Input Fields:** 1px Graphite borders. Background matches the Ledger Surface. Placeholder text in JetBrains Mono.
- **Margin Cards:** These act as the primary containers for "Asset Defense" stats. They should feature a hard 2px offset shadow and a thin top-border in Green or Amber depending on the data health.
- **Sparklines:** Used within table rows to show "Owner Burnout" trends (order volume vs. net profit) without taking up vertical space.
- **Verified Seal:** A component using the Ink Blue (#1A365D) color with a simple 1px border and a checkmark, signifying that the data has been audited against official platform statements.