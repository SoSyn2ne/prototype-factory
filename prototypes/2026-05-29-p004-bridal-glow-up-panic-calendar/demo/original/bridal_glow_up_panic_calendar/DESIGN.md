---
name: Bridal Glow-Up Panic Calendar
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#454742'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#767872'
  outline-variant: '#c6c7c0'
  surface-tint: '#5e5e5c'
  primary: '#5e5e5c'
  on-primary: '#ffffff'
  primary-container: '#fdfbf7'
  on-primary-container: '#747471'
  inverse-primary: '#c8c6c3'
  secondary: '#ae2f34'
  on-secondary: '#ffffff'
  secondary-container: '#ff6b6b'
  on-secondary-container: '#6d0010'
  tertiary: '#4a654e'
  on-tertiary: '#ffffff'
  tertiary-container: '#f2fff0'
  on-tertiary-container: '#5f7a62'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e4e2de'
  primary-fixed-dim: '#c8c6c3'
  on-primary-fixed: '#1b1c1a'
  on-primary-fixed-variant: '#474744'
  secondary-fixed: '#ffdad8'
  secondary-fixed-dim: '#ffb3b0'
  on-secondary-fixed: '#410006'
  on-secondary-fixed-variant: '#8c1520'
  tertiary-fixed: '#cceace'
  tertiary-fixed-dim: '#b0ceb2'
  on-tertiary-fixed: '#07200f'
  on-tertiary-fixed-variant: '#334d38'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  headline-lg:
    fontFamily: EB Garamond
    fontSize: 48px
    fontWeight: '500'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-md:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-sm:
    fontFamily: EB Garamond
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
  button:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-padding: 24px
  gutter: 16px
  card-gap: 20px
---

## Brand & Style
The design system is built to balance the high-stakes urgency of wedding preparation with the premium feel of a luxury editorial magazine. The brand personality is "The Chic Best Friend Who Has a Plan"—it is witty, visually stunning, and authoritative enough to prevent skincare disasters.

The visual style is **Experimental Professionalism**. It utilizes a sophisticated "White Space" foundation typical of high-end bridal brands but disrupts it with playful, tactile elements and bold, high-contrast alerts. The goal is to evoke a sense of organized calm while using "Panic Accents" to command attention for critical beauty deadlines. It feels like a physical, high-fidelity planner brought to life in a digital space.

## Colors
The palette is designed around the "State of the Bride" emotional spectrum:

*   **Foundation:** `Primary (#FDFBF7)` and `Accent Cream (#F5F0E6)` provide the soft, "bridal-white" canvas that makes the UI feel expensive and airy.
*   **The Panic Alert:** `Secondary (#FF6B6B)` is a vibrant Coral used exclusively for "No-Go" zones, urgent deadlines, and the "Panic State" UI.
*   **The Safe Zone:** `Tertiary (#8BA88E)` is a muted Sage Green used for "Safe to Try" products, completed tasks, and soothing affirmations.
*   **The Law:** `Neutral (#1A1A1A)` is a deep, high-contrast black used for "Lock-In" rules (e.g., *No new chemical peels after this date*) and crisp typography.

## Typography
The typography uses a high-contrast pairing to distinguish between "Dreaming" and "Doing":

*   **EB Garamond** is used for headlines. Its classical proportions and elegant serifs ground the app in the bridal world, making every countdown feel like a magazine feature.
*   **Hanken Grotesk** is the functional workhorse. It is a modern, tactile sans-serif that provides clarity for calendar dates, ingredient lists, and decision cards. 
*   **Styling Note:** Large headlines should use tight letter spacing and "optical" sizing where available to maintain a premium, editorial look. Labels and small metadata should always be uppercase with generous letter spacing for a "planner-tab" aesthetic.

## Layout & Spacing
The design system follows a **Fixed-Fluid Hybrid** model. Content is contained within a maximum width of 1200px on desktop to mimic the feel of an open planner spread, while margins scale on mobile.

*   **Rhythm:** An 8px base grid is used for all internal component spacing.
*   **Negative Space:** Large 64px+ vertical gaps are encouraged between major sections (e.g., "Monthly View" vs "Daily Checklist") to reduce visual panic.
*   **Mobile Reflow:** On mobile, cards stack vertically with a consistent 20px gap. The "Panic Status" bar remains persistent at the top or bottom of the viewport to provide constant reassurance.

## Elevation & Depth
The design system uses **Tactile Layering** to create a physical sense of "Decision Cards."

*   **Surface:** The background is the Primary Cream, treated as a matte paper surface.
*   **Cards:** Containers use a subtle white-on-cream contrast with highly diffused, low-opacity shadows (Color: #1A1A1A at 4% alpha, Y: 4, Blur: 20).
*   **Active State:** When a card is "In Focus" or being interacted with, it lifts higher (Blur: 40) and gains a thin, 1px Neutral border to signify a "Locked" decision.
*   **Glassmorphism:** Overlays (like ingredient glossaries or budget pop-ups) use a heavy backdrop blur (20px) to maintain the airy feel without losing context.

## Shapes
Shapes are intentionally friendly but structured:

*   **Components:** Standard cards and buttons use a **0.5rem (8px)** radius to feel modern and approachable.
*   **Status Badges:** Use **Pill-shaped (Full round)** corners to distinguish them as "Tags" or "Labels" rather than interactive buttons.
*   **Input Fields:** Use the same 8px radius but with a slightly heavier 1.5px border to feel "drawn" on the planner.

## Components

### Tactile Decision Cards
The central component of the design system. These cards contain a beauty task (e.g., "Start Retinol"). They feature a "Confidence Score" (Sage to Coral gradient) and a "Lock-In Date." When a decision is made, the card's border turns Neutral Black.

### Status Badges
High-visibility tags using the brand's logic:
*   **Safe to Try:** Sage background, white text, pill-shaped.
*   **No-Go Zone:** Coral background, white text, bold uppercase.
*   **Locked:** Solid Black background, white text, with a small padlock icon.

### Panic Buttons
Main "Call to Action" buttons are large and solid Black. Secondary buttons are "Ghost" style with a 1px Sage or Coral border depending on the context of the action.

### Budget Cues
Small, elegant currency icons (e.g., "$$$") rendered in the Label font. These appear in the top right of cards to denote the "Splurge Level" of a beauty treatment.

### The "Shareable" Card
A specific layout variant of the Decision Card designed with increased padding and a centered EB Garamond headline, optimized for exporting as an image for bridesmaids or social media.