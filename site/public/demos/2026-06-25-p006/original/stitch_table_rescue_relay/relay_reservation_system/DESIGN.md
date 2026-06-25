---
name: Relay Reservation System
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
  on-surface-variant: '#5c4037'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#916f65'
  outline-variant: '#e6beb2'
  surface-tint: '#ae3200'
  primary: '#aa3000'
  on-primary: '#ffffff'
  primary-container: '#d43f00'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb59e'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2e2e2'
  on-secondary-container: '#646464'
  tertiary: '#5b5c59'
  on-tertiary: '#ffffff'
  tertiary-container: '#747571'
  on-tertiary-container: '#fdfdf8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbd0'
  primary-fixed-dim: '#ffb59e'
  on-primary-fixed: '#3a0b00'
  on-primary-fixed-variant: '#852400'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1b1b1b'
  on-secondary-fixed-variant: '#474747'
  tertiary-fixed: '#e3e3de'
  tertiary-fixed-dim: '#c6c7c2'
  on-tertiary-fixed: '#1a1c19'
  on-tertiary-fixed-variant: '#454744'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-relay:
    fontFamily: Anybody
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.0'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Anybody
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.1'
  headline-lg-mobile:
    fontFamily: Anybody
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.1'
  headline-md:
    fontFamily: Anybody
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
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
  label-mono:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.0'
  timer-md:
    fontFamily: Space Mono
    fontSize: 20px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.05em
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 48px
  container-max: 1280px
---

## Brand & Style

The brand personality is high-energy, athletic, and urgent. This design system bridges the gap between a high-stakes sporting event and a premium dining experience. It targets urban food enthusiasts who are quick on their feet and ready to "take the baton" of a world-class reservation.

The design style is **Modern-Brutalist with a Kinetic edge**. It utilizes heavy strokes, high-contrast surfaces, and intentional "starting block" geometry to evoke the feeling of a relay race. The emotional response is one of excitement and "the thrill of the chase," balanced by structural precision to ensure the transfer of high-value reservations feels secure and professional.

## Colors

The palette is dominated by **Relay Red (#FF4D00)**, an aggressive, high-visibility orange-red that signals both urgency and appetite. This is the "Starting Block" color, used for primary actions and critical countdown timers. 

- **Primary:** Relay Red (#FF4D00). Used for "Claim" buttons, active progress bars, and urgent alerts.
- **Secondary:** Pitch Black (#000000). Provides the grounding "track" for the vibrant accents.
- **Tertiary/Surface:** Stadium Bone (#F5F5F0). A warm, off-white neutral that prevents the high-contrast UI from feeling overly clinical.
- **Functional Green:** Finish Line Green (#00C853). Used exclusively for successful transfers and confirmed availability.

## Typography

Typography is used as a graphic element to convey speed. **Anybody** is the headline workhorse, chosen for its variable width and athletic, contemporary feel. Large-scale headings should utilize tight leading and negative letter spacing to feel "compressed" and ready to launch.

**Hanken Grotesk** provides a clean, professional counterpoint for body copy, ensuring that restaurant details and terms of service remain highly legible. **Space Mono** is reserved for technical data: countdown timers, seat counts, and price points. This monospaced font reinforces the "data-driven" nature of a marketplace and adds a subtle tech-industrial vibe.

## Layout & Spacing

This design system uses a **Rigid Grid** model based on a 4px baseline. The layout is structured around a 12-column grid for desktop and a 4-column grid for mobile. 

To emphasize the "Relay" theme, layouts should favor horizontal progression and "lanes." Information should be grouped into distinct horizontal tracks. Margins are generous on the sides to focus the eye on the "lane" (the central content), while gutters are kept tight (16px) to maintain a sense of density and speed. Content reflows should be abrupt and decisive at breakpoints (768px and 1024px) rather than overly fluid, maintaining the Brutalist aesthetic.

## Elevation & Depth

This system rejects soft, ambient shadows in favor of **Hard Tonal Offsets**. Depth is communicated through thick, black borders (2px to 4px) and "block" shadows—solid offsets of Relay Red or Black that do not blur.

- **Level 0 (Track):** Stadium Bone background.
- **Level 1 (Baton):** Cards and surfaces with a 2px solid Black border.
- **Level 2 (Active/Urgent):** Level 1 surfaces with a 4px solid Relay Red offset shadow (bottom-right).
- **Interactive:** Elements should appear to "depress" into the page when clicked by removing the offset shadow and translating the element X and Y by 2px.

## Shapes

The shape language is **Sharp**. Zero-radius corners are used across all components—buttons, cards, and input fields—to maintain an aggressive, precise, and architectural feel. The only exception is the "Baton" icon or specific progress indicators which may use circular geometry to contrast against the rigid environment.

Horizontal lines should be used frequently to divide content, mimicking track lanes. Diagonal "speed lines" (45-degree shears) can be applied to decorative elements or status badges to imply motion.

## Components

### Buttons
Primary buttons are high-contrast Relay Red with Pitch Black text, using a 4px black hard shadow. Hover states remove the shadow and shift the button position. The "Claim Baton" button should be significantly larger than secondary actions.

### Cards
Reservation cards use a 2px black border. When a reservation is "Urgent" (less than 1 hour remaining), the border switches to Relay Red and gains a flickering "Live" indicator. Headers within cards should use the `label-mono` style.

### Countdown Timers
Housed in high-contrast black boxes with Relay Red `timer-md` text. The colon in the timer should blink at 1Hz to signal active counting.

### Lists
Lists of available tables are styled as "Lanes." Each row is separated by a 2px horizontal line. The left-most column always features the time/status in `label-mono`, followed by the restaurant name in `headline-md`.

### Input Fields
Inputs are Stadium Bone with a 2px black bottom-border only. When focused, the bottom border thickens to 4px and turns Relay Red. Labels use the `label-mono` style and sit above the input.

### Progress/Relay Tracker
A custom component that visualizes the transfer process. It uses a thick horizontal line with sharp diamond-shaped nodes. The "Baton" (a vertical Relay Red bar) moves across these nodes as the transaction progresses from "Request" to "Verified" to "Claimed."