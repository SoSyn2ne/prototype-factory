---
name: Field-Ops Utilitarian
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#ffb693'
  on-secondary: '#561f00'
  secondary-container: '#fe6b00'
  on-secondary-container: '#572000'
  tertiary: '#ffffff'
  on-tertiary: '#003915'
  tertiary-container: '#6bff8f'
  on-tertiary-container: '#007432'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#ffdbcc'
  secondary-fixed-dim: '#ffb693'
  on-secondary-fixed: '#351000'
  on-secondary-fixed-variant: '#7a3000'
  tertiary-fixed: '#6bff8f'
  tertiary-fixed-dim: '#4ae176'
  on-tertiary-fixed: '#002109'
  on-tertiary-fixed-variant: '#005321'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 26px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  data-lg:
    fontFamily: JetBrains Mono
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 24px
  data-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '800'
    lineHeight: 16px
    letterSpacing: 0.05em
spacing:
  base: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  touch-target: 48px
  gutter: 16px
  margin-mobile: 16px
---

## Brand & Style
The design system is engineered for high-stakes, high-glare environments typical of logistics and delivery field operations. The brand personality is "Asset Defense"—an uncompromising, protective, and evidence-based aesthetic that prioritizes speed of comprehension over decorative flourish. 

The visual style is **Industrial Brutalism mixed with High-Contrast Utility**. It employs heavy borders, rigid structural grids, and intentional "unrefined" elements to evoke a sense of physical durability. The interface should feel like a digital extension of rugged hardware, providing the driver with a sense of security and absolute clarity during high-pressure confirm-and-pay cycles.

## Colors
The palette is optimized for outdoor visibility and night-mode comfort. 
- **Neutral/Background:** A deep charcoal (#0A0A0A) reduces screen glare and battery drain on OLED mobile devices. 
- **Primary:** Crisp white (#FFFFFF) is used exclusively for critical information and primary actions to ensure maximum contrast.
- **Safety Orange (#FF6B00):** Reserved for alerts, lost tips, and urgent interventions. It functions as a "Hazard" indicator.
- **Success Green (#22C55E):** Used for confirmed payouts and successful delivery completions, signaling a "Safe" state.
- **Borders:** Mid-tone greys are used to define structural boundaries without cluttering the visual field.

## Typography
Typography is the primary tool for hierarchy. This design system utilizes **Inter** for all UI prose to maintain readability in vibration-heavy environments. **JetBrains Mono** is utilized for all "Evidence" data—currency, timestamps, and order IDs—to provide a technical, indisputable feel.

Headlines use heavy weights (Bold/ExtraBold) to ensure they are legible even when the user is moving. Data points must be tabular (monospaced) so that numerical values align vertically in ledger views, facilitating quick scanning of earnings and times.

## Layout & Spacing
The layout follows a **Fluid Grid** with a strict 4px baseline. Mobile layouts use a 16px side margin. 

The philosophy is "Thumb-First":
- All interactive elements must adhere to a minimum 48px touch target height.
- Stacked layouts are preferred over multi-column grids to prevent mis-taps.
- Spacing between cards in the ledger should be generous (12px to 16px) to clearly separate individual work events.
- Large bottom-anchored action bars are mandatory for primary task completions.

## Elevation & Depth
In this design system, depth is communicated through **Tonal Layering and Bold Outlines** rather than soft shadows. Shadows are largely avoided as they appear muddy in high-glare environments.

- **Level 0 (Background):** #0A0A0A.
- **Level 1 (Cards/Surface):** #1A1A1A with a 1px solid border (#333333).
- **Level 2 (Active/Pressed):** #262626 with a 2px solid primary border.
- **Focus States:** High-visibility 2px strokes in Safety Orange (#FF6B00) for input fields to ensure the user knows exactly which field is being edited.

## Shapes
The shape language is **Sharp (0px)**. All buttons, cards, and input fields use right-angle corners. This reinforces the "rugged" and "industrial" feel of the tool, distinguishing it from soft consumer apps. Sharp corners maximize screen real estate and align perfectly with the technical, evidence-based nature of the "Asset Defense" theme.

## Components
- **Primary Buttons:** High-contrast White background with Black text. 48px minimum height. All-caps heavy typography.
- **Safety Buttons:** Used for "Dispute" or "Emergency," these use a Safety Orange border with White text.
- **Ledger Cards:** Solid #1A1A1A background with 1px border. The top right corner is reserved for the monospaced timestamp. The bottom section uses a divider and JetBrains Mono for the currency payout.
- **Input Fields:** 2px solid borders. Background is darker than the card surface. Labels are always visible (never floating) in `label-caps` style above the field.
- **Status Chips:** Rectangular boxes with 1px borders. Use Success Green for "Verified" and Safety Orange for "Action Required."
- **Evidence Logs:** Monospaced lists with alternating row tints (Zebra striping) for maximum legibility when scrolling quickly.