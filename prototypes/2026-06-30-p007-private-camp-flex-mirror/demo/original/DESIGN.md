---
name: Prestige & Provocation
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#20201f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c1c8c3'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8b928e'
  outline-variant: '#414845'
  surface-tint: '#adcec0'
  primary: '#adcec0'
  on-primary: '#19362c'
  primary-container: '#0d2b22'
  on-primary-container: '#759487'
  inverse-primary: '#476459'
  secondary: '#ffffff'
  on-secondary: '#283500'
  secondary-container: '#c3f400'
  on-secondary-container: '#556d00'
  tertiary: '#c9c6bf'
  on-tertiary: '#31312b'
  tertiary-container: '#262621'
  on-tertiary-container: '#8e8d86'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c9eadc'
  primary-fixed-dim: '#adcec0'
  on-primary-fixed: '#022018'
  on-primary-fixed-variant: '#2f4c42'
  secondary-fixed: '#c3f400'
  secondary-fixed-dim: '#abd600'
  on-secondary-fixed: '#161e00'
  on-secondary-fixed-variant: '#3c4d00'
  tertiary-fixed: '#e5e2db'
  tertiary-fixed-dim: '#c9c6bf'
  on-tertiary-fixed: '#1c1c17'
  on-tertiary-fixed-variant: '#474741'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '900'
    lineHeight: '1.1'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-mono:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  status-number:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '800'
    lineHeight: '1'
    letterSpacing: -0.01em
spacing:
  unit: 8px
  container-margin: 32px
  gutter: 16px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style
This design system navigates the tension between inherited prestige and modern digital "flexing." It is designed for an audience that values exclusivity but participates in the satirical high-stakes world of social status. 

The aesthetic is **Playful-Experimental** anchored in a **High-Contrast** framework. We combine the visual language of an elite country club—stable, deep, and traditional—with the disruptive energy of a digital-first trend. The UI should feel like a physical artifact from a private vault that has been spray-painted with neon highlighter. It is bold, unapologetic, and highly readable, prioritizing clarity even in its most experimental layouts.

## Colors
The palette is built on a foundation of **Deep Forest Green** (#0D2B22), representing "Old Money" and institutional stability. This base color should cover 70-80% of the UI surface area to maintain an air of luxury.

The "Flex" is represented by **Electric Lime** (#CCFF00). This is a loud, aggressive accent used for critical status indicators, primary actions, and "provocative" data points. **Antique Cream** (#F9F6EE) is utilized for typography and high-level containers to mimic the feel of premium heavy-stock paper invitations. 

Contrast ratios must remain high; text on the deep forest background should predominantly be Antique Cream or Electric Lime to ensure readability while maintaining the high-energy aesthetic.

## Typography
The typographic system uses a deliberate hierarchy to signal authority and modernity.

- **Headlines (Playfair Display):** Used for titles and "Status Claims." These should feel like the masthead of a luxury magazine. Use heavy weights (700-900) to maximize the contrast between thick and thin strokes.
- **Body & UI (Hanken Grotesk):** Provides a sharp, modern, and neutral counter-balance. It ensures the "Flex" elements remain readable and professional.
- **Labels & Data (Space Mono):** Used for "Social Pressure Receipts" and technical metrics. The monospaced nature suggests an unalterable, computer-generated truth—like a ledger or a high-end financial receipt.

All headlines should use tight letter-spacing, while labels should be generously tracked for a technical, "data-stamped" feel.

## Layout & Spacing
The layout follows a **Fluid Grid** model with an emphasis on oversized margins to create an "editorial" feel. 

- **Grid:** 12-column system for desktop, 4-column for mobile.
- **Asymmetry:** Elements should frequently break the grid. For example, a "Tradeoff Card" might be offset by 16px to create a feeling of intentional disruption.
- **Padding:** Use generous internal padding within containers (minimum 32px) to ensure the bold typography has room to breathe.
- **Rhythm:** A strict 8px baseline grid is used to align all elements, ensuring that even when the layout is "experimental," the underlying structure feels precise and engineered.

## Elevation & Depth
This design system rejects soft, realistic shadows in favor of **High-Contrast Outlines** and **Tonal Layering**.

- **Surface Tiers:** The base layer is the deepest Forest Green. Elevated containers use a slightly lighter tint of green or a solid stroke of Antique Cream.
- **Hard Shadows:** If depth is required, use "Brutalist Shadows"—solid, 100% opaque offsets in Electric Lime or Black. For example, a card may have a 4px offset shadow with no blur.
- **Glassmorphism:** Reserved strictly for "Network Value" gauges and overlays. Use a high-density blur (20px+) with a 10% opacity white tint to simulate a "Mirror" finish, reflecting the product's name.

## Shapes
The primary shape language is **Sharp (0px)**. Rectilinear containers suggest architectural stability and prestige. 

However, we introduce a "Contradictory Roundness" for specific interactive elements:
- **Primary Buttons & Chips:** Should be perfectly pill-shaped (999px) to contrast against the sharp-edged cards.
- **Gauges:** Circular or semi-circular to represent the "Mirror" and "Meter" metaphors. 
- **Dividers:** Use thick (2px-4px) solid lines rather than thin, subtle ones.

## Components

### Tradeoff Cards
Large, sharp-edged containers. The left side features a "Sacrifice" (e.g., "Family Time") in muted tones, while the right side features a "Flex" (e.g., "Aspen Gala") in Electric Lime. Use 2px Antique Cream borders.

### Social Pressure Receipts
A specialized component using Space Mono. It should look like a long thermal receipt. Use a "jagged" bottom edge graphic. It lists "Status Costs" (e.g., Summer Camp Deposit: $15,000) with a total "Flex Score" at the bottom in the status-number type style.

### Network Value Gauges
Circular meters with an Electric Lime "needle." The background of the gauge should use the glassmorphic blur effect. These gauges track provocative metrics like "Neighborhood Envy" or "Ivy League Probability."

### Buttons
Primary buttons are pill-shaped, Electric Lime backgrounds with Black Hanken Grotesk text. Secondary buttons are Antique Cream outlines with no fill. All buttons should have a solid 4px offset shadow on hover to create a "tactile click" feel.

### Input Fields
Underlined only (no full box). The label should be in Space Mono above the line. When focused, the underline should animate from Antique Cream to Electric Lime.