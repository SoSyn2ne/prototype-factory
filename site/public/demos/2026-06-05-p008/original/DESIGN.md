---
name: Harmonious Care
colors:
  surface: '#f4faff'
  surface-dim: '#cbdde7'
  surface-bright: '#f4faff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#e7f6ff'
  surface-container: '#dff1fb'
  surface-container-high: '#d9ebf5'
  surface-container-highest: '#d4e5ef'
  on-surface: '#0d1e25'
  on-surface-variant: '#424939'
  inverse-surface: '#23333a'
  inverse-on-surface: '#e2f3fd'
  outline: '#737a68'
  outline-variant: '#c2c9b5'
  surface-tint: '#3c6a00'
  primary: '#3c6a00'
  on-primary: '#ffffff'
  primary-container: '#7cb342'
  on-primary-container: '#234100'
  inverse-primary: '#9dd761'
  secondary: '#0060a8'
  on-secondary: '#ffffff'
  secondary-container: '#47a1ff'
  on-secondary-container: '#003663'
  tertiary: '#875200'
  on-tertiary: '#ffffff'
  tertiary-container: '#e79000'
  on-tertiary-container: '#553200'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b8f47a'
  primary-fixed-dim: '#9dd761'
  on-primary-fixed: '#0e2000'
  on-primary-fixed-variant: '#2c5000'
  secondary-fixed: '#d3e4ff'
  secondary-fixed-dim: '#a2c9ff'
  on-secondary-fixed: '#001c38'
  on-secondary-fixed-variant: '#004881'
  tertiary-fixed: '#ffddba'
  tertiary-fixed-dim: '#ffb865'
  on-tertiary-fixed: '#2b1700'
  on-tertiary-fixed-variant: '#663d00'
  background: '#f4faff'
  on-background: '#0d1e25'
  surface-variant: '#d4e5ef'
typography:
  headline-lg:
    fontFamily: Noto Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Noto Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Noto Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Noto Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Noto Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Noto Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Noto Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Noto Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  headline-lg-mobile:
    fontFamily: Noto Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-padding: 24px
  gutter: 16px
  section-gap: 32px
  schedule-row-height: 64px
---

## Brand & Style

The design system is centered on the concept of **Collaborative Equilibrium**. In high-stress family caregiving environments, the UI must act as a neutral arbiter, reducing cognitive load and emotional friction through clarity and structural balance.

The visual style is **Corporate / Modern** with a strong leaning toward **Minimalism**. It prioritizes information density without overcrowding, using generous whitespace and subtle dividers to create a sense of order and reliability. The aesthetic avoids medical coldness by using soft, organic background tones, ensuring the interface feels like a supportive tool rather than a clinical requirement.

## Colors

The palette uses a dual-anchor approach to categorize information. **Soft Sage Green** is used for wellness, routine tasks, and positive status updates, promoting a sense of growth and calm. **Medical Blue** is reserved for clinical data, professional appointments, and records, providing a grounded, authoritative feel.

**Deep Charcoal** provides high-contrast legibility for all body text and data points, ensuring accessibility for all age groups. **Soft Amber** serves as a non-aggressive warning system, highlighting missing documents or scheduling gaps without triggering "alarm fatigue."

- **Backgrounds:** Use Sage for personal/home care contexts and Blue for hospital/formal contexts.
- **Surface:** Pure white (#FFFFFF) is used for cards to pop against the tinted backgrounds.

## Typography

The design system utilizes **Noto Sans** to provide a highly legible, neutral, and professional reading experience across both Latin and Korean characters. The hierarchy is designed for rapid scanning of schedules and logs.

- **Weight Usage:** Use Bold (700) sparingly for primary headers. Semi-bold (600) is preferred for UI labels and sub-headers to maintain a professional, non-shouting tone.
- **Line Height:** Expanded line heights are used for body text to improve readability for family members who may be reviewing complex medical notes under stress.

## Layout & Spacing

The system employs a **Fixed Grid** on desktop (1280px max-width) and a **Fluid Grid** on mobile. A 12-column system is used to organize dashboard widgets, allowing for a 3:1 ratio between the primary schedule and the sidebar summary.

**The Schedule Grid:**
For caregiving timelines, a strict linear grid is used. Vertical lines represent hourly increments, while horizontal lanes represent different family members or caregivers. This "fairness-first" layout makes it immediately obvious who is responsible for specific time blocks, reducing ambiguity.

- **Desktop:** 12 columns, 24px margins, 16px gutters.
- **Tablet:** 8 columns, 16px margins, 16px gutters.
- **Mobile:** 4 columns, 16px margins, 12px gutters.

## Elevation & Depth

This design system uses **Tonal Layering** combined with **Ambient Shadows** to define hierarchy. Since the primary goal is clarity and "calm," depth is kept shallow to avoid visual noise.

- **Level 0 (Background):** The tinted sage or blue backgrounds.
- **Level 1 (Cards):** Pure white surfaces with a soft, 4% opacity charcoal shadow (8px blur, 2px offset). This level is used for the main dashboard content.
- **Level 2 (Modals/Popovers):** Higher contrast shadows (12% opacity) to focus attention on critical inputs like adding a medication or logging an incident.
- **Dividers:** Instead of heavy shadows, use 1px solid borders in a slightly darker shade of the background color to delineate segments within cards.

## Shapes

The design system uses a **Rounded** shape language to soften the clinical nature of the data. 

- **Cards and Containers:** 0.5rem (8px) corner radius. This provides a modern, friendly feel while maintaining a professional structure.
- **Interactive Elements:** Buttons and Input fields follow the 8px standard.
- **Status Pills:** Use 1rem (16px) or fully pill-shaped rounding to distinguish them from interactive buttons.
- **Visual Rhythm:** All icons should be enclosed in circular or highly rounded containers to act as soft focal points.

## Components

### Status Indicators ("Fairness" & "Missing")
- **Fairness Tracker:** A horizontal segmented bar showing the distribution of care hours. Use primary sage for completed hours and neutral charcoal for unassigned slots.
- **Status Chips:** Small, pill-shaped badges. 
    - *Missing Documents:* Soft Amber background with Deep Charcoal text and a small alert icon.
    - *Verified:* Soft Sage background with a checkmark.

### Cards
Cards must have a clear "Header" section with a 1px bottom border. Information density inside cards should be managed with "Label: Value" pairings using `label-md` for labels and `body-md` for values.

### Schedule Grid
The grid uses 64px height rows. Active tasks are filled with a light blue or green tint. Past tasks are desaturated (60% opacity). Overlapping tasks (conflicts) are outlined in a thin Amber border to signal a need for family discussion.

### Buttons
- **Primary:** Filled with Medical Blue or Sage Green, using white text.
- **Secondary:** Ghost style with a 1px border of the brand color.
- **Urgent/Log:** A specialized "Log Incident" button uses a subtle amber tint to ensure it is found quickly during emergencies without looking like an error state.

### Input Fields
Inputs are white with a 1px border in a mid-tone neutral. On focus, the border shifts to Medical Blue with a soft 2px outer glow. Labels always sit above the field for maximum accessibility.