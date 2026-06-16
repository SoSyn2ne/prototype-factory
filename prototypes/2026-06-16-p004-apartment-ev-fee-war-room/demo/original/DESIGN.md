---
name: Apartment EV Fee War Room
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
  on-surface-variant: '#bcc9cd'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#869397'
  outline-variant: '#3d494c'
  surface-tint: '#4cd7f6'
  primary: '#4cd7f6'
  on-primary: '#003640'
  primary-container: '#06b6d4'
  on-primary-container: '#00424f'
  inverse-primary: '#00687a'
  secondary: '#ffb690'
  on-secondary: '#552100'
  secondary-container: '#ec6a06'
  on-secondary-container: '#4a1c00'
  tertiary: '#b9c8de'
  on-tertiary: '#233143'
  tertiary-container: '#99a8bd'
  on-tertiary-container: '#2f3d4f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#acedff'
  primary-fixed-dim: '#4cd7f6'
  on-primary-fixed: '#001f26'
  on-primary-fixed-variant: '#004e5c'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#ffb690'
  on-secondary-fixed: '#341100'
  on-secondary-fixed-variant: '#783200'
  tertiary-fixed: '#d4e4fa'
  tertiary-fixed-dim: '#b9c8de'
  on-tertiary-fixed: '#0d1c2d'
  on-tertiary-fixed-variant: '#39485a'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-padding: 16px
  gutter: 12px
  stack-sm: 4px
  stack-md: 8px
  stack-lg: 16px
---

## Brand & Style
The design system is engineered for high-stakes, high-density field operations. The brand personality is **authoritative, functional, and industrial**, reflecting a "mission control" atmosphere where precision is paramount. 

The aesthetic is a blend of **Corporate Modern** and **Industrial Minimalism**. It prioritizes information density over white space, using a "Slate and Steel" motif to create a resilient, professional environment. The UI should feel like a physical console: structured, reliable, and devoid of unnecessary decoration. Every element serves a functional purpose in the decision-making pipeline.

## Colors
This design system utilizes a **dark-mode primary** palette to reduce eye strain during extended operational monitoring.

- **Primary (Cyan):** Used exclusively for high-priority actions and active states. It provides a sharp contrast against the dark background to draw the eye to "Commit" or "Execute" functions.
- **Secondary (Muted Orange):** Reserved for risk, warnings, and fee-related anomalies. Its use should be restrained to maintain its psychological impact.
- **Neutral (Slate/Steel):** A range of deep charcoals and cool grays form the foundation. `#0F172A` serves as the base background, while `#1E293B` defines container surfaces. 
- **Borders (Steel):** A light steel gray (`#334155`) is used for crisp structural definition, ensuring clear separation in high-density data views.

## Typography
Typography is optimized for **legibility and scanability**. **Inter** is the workhorse font, used for its excellent performance at small sizes in dense interfaces. 

A secondary monospaced font, **JetBrains Mono**, is introduced specifically for numeric data, fee calculations, and timestamps to ensure character alignment in tables and technical logs. 

- Use **label-caps** for section headers and table column headers to create a clear hierarchy.
- Use **data-mono** for any variable financial figures or technical ID strings.
- Maintain tight line heights to support high-density information layouts without sacrificing readability.

## Layout & Spacing
The layout follows a **Fixed-Fluid hybrid grid**. Sidebars and control panels occupy fixed widths (e.g., 280px), while the central "War Room" dashboard scales to fill available real estate.

- **Rhythm:** A 4px baseline grid governs all spacing. 
- **Density:** This is a high-density system. Use `stack-sm` (4px) for related label-input pairs and `stack-md` (8px) for spacing between distinct data modules.
- **Margins:** Standard page margins are set to 16px to maximize the functional area for data tables and maps.
- **Breakpoints:** 
  - **Desktop (1280px+):** Full 12-column visibility.
  - **Tablet (768px-1279px):** Collapse secondary sidebars into drawers.
  - **Mobile:** Not recommended for this operational tool, but if necessary, use a single-column stacked view with horizontal-scroll tables.

## Elevation & Depth
Depth is conveyed through **Tonal Layering** and **Crisp Outlines** rather than traditional shadows. 

- **Base Layer:** `#0F172A` (Background).
- **Surface Layer:** `#1E293B` (Cards, panels).
- **Interactive Layer:** `#334155` (Hover states, active inputs).
- **Dividers:** 1px solid strokes in `#334155` define all structural boundaries. 

Avoid drop shadows. If an element needs to "pop" (like a modal), use a high-contrast border and a slight background dimming rather than a soft shadow. This maintains the "industrial" feel.

## Shapes
The shape language is **geometric and rigid**. 

- Use **Soft (0.25rem)** roundedness for standard components like buttons and inputs. This provides just enough "touchability" without appearing soft or consumer-oriented.
- Larger containers and dashboard panels should maintain sharp or very tight corners to emphasize the technical nature of the application.
- Status indicators (dots) are the only fully circular elements allowed.

## Components
- **Buttons:** Primary buttons are solid Cyan (`#06B6D4`) with black text for maximum contrast. Secondary buttons are outlined in Steel. Use "Small" variants (28-32px height) for high-density toolbars.
- **Data Tables:** Row heights should be tight (32px-40px). Use zebra-striping with a very subtle tonal shift for readability. Active rows should have a 2px left border in Cyan.
- **Status Chips:** Small, rectangular chips with a 1px border. Use the secondary Orange for "Risk" or "Late" statuses and Cyan for "Active" or "Processing."
- **Input Fields:** Dark background surfaces with 1px Steel borders. Use the monospaced font for numeric inputs.
- **Cards:** No shadows. Use a 1px border. Header areas of cards should have a slightly darker background to distinguish the title from the content.
- **Indicators:** Use "LED-style" dots for system status. A glowing effect (blur) is only permitted for the Primary Action color to simulate a "live" system.