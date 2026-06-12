---
name: Stadium Pulse
colors:
  surface: '#12131c'
  surface-dim: '#12131c'
  surface-bright: '#383843'
  surface-container-lowest: '#0d0e17'
  surface-container-low: '#1a1b24'
  surface-container: '#1e1f29'
  surface-container-high: '#282933'
  surface-container-highest: '#33343e'
  on-surface: '#e3e1ef'
  on-surface-variant: '#b9ccb2'
  inverse-surface: '#e3e1ef'
  inverse-on-surface: '#2f303a'
  outline: '#84967e'
  outline-variant: '#3b4b37'
  surface-tint: '#00e639'
  primary: '#ebffe2'
  on-primary: '#003907'
  primary-container: '#00ff41'
  on-primary-container: '#007117'
  inverse-primary: '#006e16'
  secondary: '#ffb59a'
  on-secondary: '#5a1b00'
  secondary-container: '#ff5e07'
  on-secondary-container: '#531900'
  tertiary: '#fff8ed'
  on-tertiary: '#3a3000'
  tertiary-container: '#ffda3f'
  on-tertiary-container: '#735f00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#72ff70'
  primary-fixed-dim: '#00e639'
  on-primary-fixed: '#002203'
  on-primary-fixed-variant: '#00530e'
  secondary-fixed: '#ffdbce'
  secondary-fixed-dim: '#ffb59a'
  on-secondary-fixed: '#370e00'
  on-secondary-fixed-variant: '#802a00'
  tertiary-fixed: '#ffe170'
  tertiary-fixed-dim: '#e9c400'
  on-tertiary-fixed: '#221b00'
  on-tertiary-fixed-variant: '#544600'
  background: '#12131c'
  on-background: '#e3e1ef'
  surface-variant: '#33343e'
typography:
  display-xl:
    fontFamily: Anton
    fontSize: 80px
    fontWeight: '400'
    lineHeight: 80px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Anton
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Anton
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 36px
  match-score:
    fontFamily: Anton
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.1em
  body-lg:
    fontFamily: Archivo Narrow
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Archivo Narrow
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 22px
  data-label:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
spacing:
  base: 8px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 48px
  stack-tight: 4px
  stack-loose: 32px
---

## Brand & Style

This design system captures the raw, kinetic energy of the 2026 World Cup. It is built for fans who navigate the chaos of international travel with the spirit of a match-day supporter. The brand personality is **electric, competitive, and communal**. It prioritizes "stadium energy"—the high-contrast, high-stakes atmosphere of a floodlit pitch.

The aesthetic is a hybrid of **High-Contrast/Bold** and **Experimental Brutalism**. We utilize aggressive visuals, massive scoreboard-style typography, and intentional "irregularities" like slight rotations and thick borders to mimic the tactile feel of physical tickets and street posters. The UI should evoke a sense of "Group Readiness," using visual urgency to ensure every traveler in a group is locked in and ready for kick-off.

## Colors

The palette is anchored in **Deep Stadium Navy (#0A0B14)** to provide a high-contrast foundation that makes the accent colors vibrate. 

- **Pitch Green (#00FF41):** Used for primary actions, "ready" states, and confirmed travel legs.
- **Caution Orange (#FF5C00) & Energy Yellow (#FFD600):** Used for urgency, countdowns, and "Panic" indicators when a group member hasn't checked in.
- **Route Accents:** Cyan and Magenta are reserved exclusively for travel paths, transit lines, and flight trajectories to separate navigation from the "game" logic of the app.

## Typography

Typography functions as an extension of the stadium scoreboard. **Anton** is the dominant voice—heavy, condensed, and authoritative. It is used for all major headers and "Match Stats" (travel times, gate numbers, seat assignments).

**Archivo Narrow** provides a utilitarian, high-density sans-serif for lists and descriptions, ensuring readability even when the UI feels crowded and energetic. **JetBrains Mono** is used for technical data (confirmation codes, coordinates, timestamps), reinforcing a "broadcast feed" aesthetic.

## Layout & Spacing

The layout follows a **Fluid Grid** model with high-density spacing. We use a 12-column system for desktop and a 4-column system for mobile. 

To achieve the "Experimental" feel, elements frequently break the grid. Containers may have a `-1deg` or `+1deg` rotation. We utilize "Offset Stack" layouts where cards overlap slightly, mimicking a fan holding a fan of tickets. Gutters are kept tight (16px) to maintain a sense of high-energy density and urgency.

## Elevation & Depth

We avoid soft shadows and realism. Depth is created through **Bold Borders** and **Hard-Edge Offsets**.

- **Level 1:** Flat surface with a 2px solid Pitch Green or White border.
- **Level 2:** A "Shadow Box" effect created by a solid black or secondary-color rectangle offset by 4px or 8px behind the main element.
- **Urgency State:** Elements in a "Panic" or "Urgent" state use a vibrating 4px border that flashes between Caution Orange and Yellow.
- **Overlays:** Use high-opacity (95%) Stadium Navy with no blur, keeping the edges sharp and aggressive.

## Shapes

The design system utilizes **Sharp (0px)** corners for all primary containers, buttons, and input fields to maintain a brutalist, industrial look. 

To contrast this, specific travel metaphors use unique shapes:
- **Tickets:** Rectangles with circular "punches" cut out of the sides using CSS mask-image.
- **Stamps:** Hexagonal or circular badges used for "Passport Confirmed" states.
- **Connectors:** Angled 45-degree lines for connecting group members.

## Components

### Buttons & Interaction
- **Primary Button:** High-contrast Pitch Green background with Black Anton text. On hover, the button offsets 4px to the top-left, revealing a solid white "shadow" underneath.
- **The "Panic" Button:** A large, circular orange button used for group alerts, featuring a pulsing stroke that expands outward.

### Cards & Progress
- **Ticket Cards:** Containers for flights/matches. Features a perforated edge graphic and a rotated "STAMPED" overlay when the travel leg is completed.
- **Relay Progress Bars:** Travel progress is tracked via "Batons." Instead of a smooth bar, it's a series of segmented rectangles that fill with Pitch Green as steps are completed.

### Status Indicators
- **The Missing Link:** Group member icons appear in a vertical stack. If a member hasn't completed a task, their slot turns Caution Orange with a "Warning" icon, and the entire group's progress bar is blocked by a red "X".
- **Match Countdown:** Large-format scoreboard numbers that tick down in real-time, using a monospaced font for character stability.

### Input Fields
- Heavy 3px borders. Labels are placed inside the border in the top-left corner, set in JetBrains Mono at 10px. Focused states turn the border Pitch Green.