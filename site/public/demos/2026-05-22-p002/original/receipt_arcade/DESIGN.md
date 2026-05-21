---
name: Receipt Arcade
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c6c9ab'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#909378'
  outline-variant: '#464932'
  surface-tint: '#b9d200'
  primary: '#ffffff'
  on-primary: '#2d3400'
  primary-container: '#d4f000'
  on-primary-container: '#5d6b00'
  inverse-primary: '#586400'
  secondary: '#ecffe3'
  on-secondary: '#003907'
  secondary-container: '#13ff43'
  on-secondary-container: '#007117'
  tertiary: '#ffffff'
  on-tertiary: '#680012'
  tertiary-container: '#ffdad8'
  on-tertiary-container: '#ca002d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d4f000'
  primary-fixed-dim: '#b9d200'
  on-primary-fixed: '#191e00'
  on-primary-fixed-variant: '#424b00'
  secondary-fixed: '#72ff70'
  secondary-fixed-dim: '#00e639'
  on-secondary-fixed: '#002203'
  on-secondary-fixed-variant: '#00530e'
  tertiary-fixed: '#ffdad8'
  tertiary-fixed-dim: '#ffb3b2'
  on-tertiary-fixed: '#410008'
  on-tertiary-fixed-variant: '#92001e'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Anybody
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Anybody
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Anybody
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Anybody
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 28px
  body-lg:
    fontFamily: Space Mono
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  data-mono:
    fontFamily: Space Mono
    fontSize: 16px
    fontWeight: '700'
    lineHeight: 24px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  receipt-width: 400px
---

## Brand & Style

This design system is built for a "Consumer Champion" experience, blending the high-energy aesthetics of 1980s coin-op arcades with the raw, information-heavy utility of a financial audit. The style is **Kinetic Brutalism**: a high-contrast, dark-mode-first environment that uses glowing accents to highlight "wins" (savings) and aggressive red signals for "losses" (fees). 

The target audience consists of savvy, modern consumers who are exhausted by corporate "subscription creep" and want their financial data presented with transparency and a defiant edge. The UI should feel tactile, responsive, and slightly hyperactive—turning the mundane task of tracking expenses into a high-stakes game where the user always wins back their money.

## Colors

The palette is rooted in a deep **Ink Black** (#0A0A0A) background to mimic the abyss of an arcade cabinet screen. 

- **Primary (Electric Yellow):** Used for interactive elements, "Start" buttons, and essential navigational calls to action.
- **Secondary (Neon Green):** Represents "Fairness," "Savings," and "Player Health." It is reserved for positive financial outcomes and verified data.
- **Tertiary (Power Red):** Represents "Fee Creep," alerts, and "Enemy" data. Use this for aggressive highlighting of hidden costs.
- **Neutral Accents:** Mid-range charcoals (#1A1A1A) are used for "pixel-perfect" card containers to separate them from the pure black background.

## Typography

Typography follows a "Display vs. Data" hierarchy. 

**Anybody** is used for all major headings and "Call-to-Action" moments. It should be used at heavy weights (700+) to provide a bold, modern-arcade feel that commands attention. 

**Space Mono** is the workhorse for all receipt data, body copy, and technical details. This monospaced font ensures that currency values and dates align perfectly in vertical columns, reinforcing the "digital receipt" metaphor. All data labels should be uppercase to maintain a technical, utilitarian vibe.

## Layout & Spacing

The layout is built on a strict **8px pixel grid**. While the overall container is fluid, individual "Receipt Cards" have a fixed maximum width to maintain their vertical, slip-like appearance. 

- **Desktop:** A multi-column view where receipts sit side-by-side with 24px gutters. 
- **Mobile:** A single-column "stack" with generous top/bottom padding to give the impression of a continuous paper feed. 
- **The "Vending" Effect:** Content should appear to "scroll up" from the bottom, mimicking the way a printer ejects a receipt. Use heavy 48px margins on the left and right of the main content area on desktop to focus the user's eye on the central "Arcade Screen."

## Elevation & Depth

This system avoids soft, organic shadows. Instead, it uses **Hard-Offset Brutalism** and **Inner Glows**.

- **Level 1 (Surface):** Pure Ink Black.
- **Level 2 (Containers):** Charcoal background with a 1px solid primary-colored border.
- **Level 3 (Interactive):** "Joystick" buttons use a 4px bottom-offset border (Primary color) to create a mechanical, pressable feel. 
- **Active States:** Elements in focus or "winning" states use a 0px 0px 15px neon-green outer glow to simulate a lit arcade button or CRT screen flicker.
- **Recessed Areas:** Input fields use a 2px inset border to look like "coin slots."

## Shapes

The shape language is **Sharp (0)**. Everything is built from rectangles and hard angles to reinforce the "Pixel-Perfect" arcade aesthetic. 

The only exception to the sharp rule is for specific "Joystick" style buttons which may use a strictly defined 45-degree chamfer (clipped corners) to look like molded plastic components, but standard UI containers must remain at 0px radius to maintain the digital-grid integrity.

## Components

### Tactile Buttons
Buttons are tall (min-height: 56px) with a heavy 4px hard-shadow offset in the Primary color. On "hover," the button moves 2px down; on "active," it moves the full 4px down, "clicking" into place.

### Receipt Cards
Cards feature a "zigzag" or "dotted" border-bottom to simulate a torn paper edge. They use a Charcoal background with Electric Yellow text for headers and Neon Green/Power Red for the financial data lines.

### Fee Stack Meter
A custom "Life Bar" component. It is a segmented horizontal bar. As fees increase, segments turn from Green to Yellow to Red. Each segment is separated by a 2px gap.

### Input Fields
Inputs are styled as "Coin Slots." They feature a black background, a 1px primary border, and a blinking cursor. Labels are placed inside the top-left border line of the input.

### Status Chips
Small, rectangular tags with no rounded corners. They use high-contrast inverted colors (e.g., Neon Green background with Black text) to signal "PAID" or "SAVED."