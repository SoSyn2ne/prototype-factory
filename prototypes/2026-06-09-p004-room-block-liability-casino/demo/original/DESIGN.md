---
name: High Stakes Hospitality
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
  on-surface-variant: '#bfc9c3'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#89938d'
  outline-variant: '#404944'
  surface-tint: '#95d3ba'
  primary: '#95d3ba'
  on-primary: '#003829'
  primary-container: '#064e3b'
  on-primary-container: '#80bea6'
  inverse-primary: '#2b6954'
  secondary: '#ffc640'
  on-secondary: '#402d00'
  secondary-container: '#e3aa00'
  on-secondary-container: '#5a4100'
  tertiary: '#ffb3ad'
  on-tertiary: '#68000a'
  tertiary-container: '#8e0012'
  on-tertiary-container: '#ff938c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#b0f0d6'
  primary-fixed-dim: '#95d3ba'
  on-primary-fixed: '#002117'
  on-primary-fixed-variant: '#0b513d'
  secondary-fixed: '#ffdf9f'
  secondary-fixed-dim: '#f9bd22'
  on-secondary-fixed: '#261a00'
  on-secondary-fixed-variant: '#5c4300'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3ad'
  on-tertiary-fixed: '#410004'
  on-tertiary-fixed-variant: '#930013'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
  data-mono:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '800'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin: 24px
  container-max: 1200px
---

## Brand & Style

This design system captures the adrenaline-fueled tension of the "night before the room block cutoff." It blends the refined elegance of a Monte Carlo casino with the high-contrast urgency of a Las Vegas sportsbook. The target audience is couples navigating the financial "gamble" of hotel contracts, transforming a stressful logistical hurdle into a witty, high-stakes game.

The visual style is **Skeuomorphic-lite**. It utilizes tactile surfaces—specifically felt-textured backgrounds and plastic-molded "chips"—combined with **Glassmorphism** and neon accents. The interface should feel like a physical gaming table where the stakes are guest counts and attrition rates. It is unapologetically dark, high-contrast, and polished, evoking an emotional response that is equal parts prestigious and playfully anxious.

## Colors

The palette is built on the psychological cues of the casino floor:
- **Casino Green (#064e3b):** The foundation. Used for large surface areas to mimic the classic felt of a craps or blackjack table.
- **Vegas Gold (#fbbf24):** The color of "winnings" and prestige. Reserved for primary actions, success states, and decorative flourishes.
- **Liability Red (#ef4444):** The color of risk. Used for deadlines, attrition warnings, and financial penalties.
- **Neon Mint (#2dd4bf):** An electric accent used for active "bets," live data updates, and interactive states that need to pop against the dark green.
- **Surface Neutrals:** Deep slates and charcoals are used for the "table edges" and background depth to ensure the green felt remains the focus.

## Typography

This design system utilizes a high-contrast typographic pairing to distinguish between the "Grand Casino" atmosphere and the "Hard Data" of the liability.

- **Playfair Display (Serif):** Used for headlines and display text. It provides the "classy" atmosphere of a luxury hotel and the authoritative weight of a casino host.
- **Inter (Sans-Serif):** Used for all functional data, body copy, and UI labels. To lean into the casino theme, use the Bold or Extra Bold weights of Inter for numerical data to mimic the clarity of a sportsbook odds board.
- **Data Mono:** A specific stylistic use of Inter with increased letter spacing and heavy weights should be used for countdowns and dollar amounts, creating a digital "scoreboard" aesthetic.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop, centered like a gaming table, while transitioning to a fluid stack on mobile. 

- **The Pit Boss Grid:** Use a 12-column system for desktop with generous 24px margins. Elements should feel "placed" on the table.
- **Density:** Maintain high density in data-heavy areas (the "odds" section) to mimic the information-rich environment of a casino, but use wide margins around the "Liability Cards" to give them a sense of importance.
- **Mobile Adaptivity:** On mobile, margins reduce to 16px and the 12-column grid collapses to a single-column stack, ensuring that "Risk Chips" remain large enough for easy thumb-tapping.

## Elevation & Depth

Visual hierarchy is established through **Physical Layering** and **Neon Luminescence**:

1.  **The Base (The Felt):** The lowest layer is the deep green surface. It should have a subtle noise texture to mimic fabric.
2.  **The Cards (The Stakes):** Surface-level cards use a slightly lighter green or dark slate with a subtle "inner glow" of Neon Mint to suggest they are active.
3.  **The Chips (The Actions):** These have the highest elevation. Use multiple stacked shadows (0px 4px 8px rgba(0,0,0,0.5)) to make them look like they are sitting 3D on the felt.
4.  **Neon Glows:** Instead of traditional shadows for primary buttons, use a 0px 0px 15px outer glow in Vegas Gold or Neon Mint to simulate a flickering neon sign.

## Shapes

The shape language is dominated by circles and "stadium" shapes, contrasting with sharp-edged cards.

- **The Circle:** Reserved exclusively for "Risk Chips" and progress indicators. 
- **The Rounded Rectangle:** Used for Liability Cards and input fields (0.5rem radius). This provides a professional but modern feel.
- **The Stadium (Pill):** Used for secondary buttons and status tags (e.g., "Confirmed," "At Risk").

## Components

### Risk Chips
Circular buttons or indicators that display numerical stats (e.g., "12 Rooms Left"). They should have a "knurled" border effect (alternating light/dark strokes) to look like high-value casino chips.

### Liability Cards
Main content containers. They feature a dark background, a 1px border in Vegas Gold, and a "glow" state when hovered. The header of the card should use Playfair Display.

### Deadline Counters
A specific component for cutoff dates. Use a black background with Neon Mint or Liability Red text in the "Data Mono" style. The numbers should look like they are part of a mechanical split-flap display or a digital scoreboard.

### Buttons
- **Primary:** "All In" style. Vegas Gold background with dark text. High gloss and a tactile "pressed" state.
- **Secondary:** "Place Bet" style. Transparent background with a Neon Mint border and matching neon text glow.

### Inputs
Input fields should look like "betting slots"—sunken into the felt using an inner shadow (inset 0px 2px 4px rgba(0,0,0,0.3)) with a subtle gold underline.