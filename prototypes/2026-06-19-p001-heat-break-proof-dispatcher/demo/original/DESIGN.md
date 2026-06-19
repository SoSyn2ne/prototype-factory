---
name: Heat Break Proof Dispatcher
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
  on-surface-variant: '#e2bfb0'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#a98a7d'
  outline-variant: '#5a4136'
  surface-tint: '#ffb693'
  primary: '#ffb693'
  on-primary: '#561f00'
  primary-container: '#ff6b00'
  on-primary-container: '#572000'
  inverse-primary: '#a04100'
  secondary: '#ffd79b'
  on-secondary: '#432c00'
  secondary-container: '#ffb211'
  on-secondary-container: '#6b4800'
  tertiary: '#ffb3ac'
  on-tertiary: '#680008'
  tertiary-container: '#ff675e'
  on-tertiary-container: '#6a0008'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbcc'
  primary-fixed-dim: '#ffb693'
  on-primary-fixed: '#351000'
  on-primary-fixed-variant: '#7a3000'
  secondary-fixed: '#ffdeae'
  secondary-fixed-dim: '#ffba3f'
  on-secondary-fixed: '#281800'
  on-secondary-fixed-variant: '#604100'
  tertiary-fixed: '#ffdad6'
  tertiary-fixed-dim: '#ffb3ac'
  on-tertiary-fixed: '#410003'
  on-tertiary-fixed-variant: '#930010'
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
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '800'
    lineHeight: 30px
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
  status-badge:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '900'
    lineHeight: 16px
    letterSpacing: 0.05em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
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
  touch-target-min: 48px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  stack-gap: 12px
---

## Brand & Style
The design system is engineered for high-stakes industrial environments where clarity is a safety requirement. It adopts a **Utility-First / Rugged Industrial** aesthetic, prioritizing legibility under harsh lighting and high-stress field conditions. The personality is uncompromising, reliable, and authoritative. 

The visual language draws from heavy machinery interfaces and tactical equipment: high contrast, structural rigidity, and zero unnecessary decoration. It utilizes a "Safety-First" hierarchy where every pixel serves to communicate status or facilitate action. The UI mimics the physical resilience of field-grade hardware, using thick borders and reinforced containers to frame critical data.

## Colors
The palette is optimized for high-glare environments using a deep charcoal foundation to minimize screen reflection and maximize the "pop" of safety indicators.

- **Primary (Safety Orange):** Reserved strictly for primary calls to action, active dispatching, and critical alerts.
- **Secondary (Amber):** Used for cautionary states, pending tasks, and warnings.
- **Tertiary (Danger Red):** Dedicated to emergency stops, heat-index breaches, and critical system failures.
- **Neutral Stack:** A range of deep grays (`#121212` to `#2A2A2A`) provides the structural scaffolding, ensuring white text (`#FFFFFF`) maintains a contrast ratio exceeding 7:1 for accessibility.

## Typography
This design system utilizes **Inter** for its exceptional legibility and neutral, systematic tone. **JetBrains Mono** is introduced for technical data, coordinates, and timestamps to ensure character distinction (e.g., distinguishing '0' from 'O') in the field.

Weight is used as a functional tool: heavy weights (800-900) are applied to status indicators to ensure they are readable at a glance or from a distance. All labels use uppercase styling with increased letter spacing to prevent visual crowding on small, high-density displays.

## Layout & Spacing
The layout follows a **Fixed Grid** model on desktop (12 columns) and a **Fluid Single Column** model on mobile to maximize horizontal space for data tables and lists. 

A rigorous **4px baseline grid** governs all spacing. A "Heavy Touch" philosophy is applied: all interactive elements must maintain a minimum 48x48px hit area to accommodate gloved hands or shaky environments. Padding within cards is generous (20px+) to prevent "information bleed" where users might misread adjacent data points under stress.

## Elevation & Depth
In this design system, depth is communicated through **Bold Borders** and **Tonal Layers** rather than soft shadows, which can wash out in sunlight. 

- **Surface Levels:** The background is the darkest shade (`#121212`). Interactive cards sit on a slightly lighter surface (`#1E1E1E`). 
- **Structural Outlines:** Elements are separated by 2px solid borders (`#333333`).
- **Active State:** When an element is selected or active, the border thickens to 3px and adopts the Primary Safety Orange color. 
- **No Shadows:** Shadows are avoided to maintain a "flat-panel" industrial aesthetic that mimics physical ruggedized monitors.

## Shapes
The design system uses **Soft** geometry. A small radius (0.25rem) is applied to all containers to prevent the "sharpness" of pure brutalism while maintaining a rigid, machined appearance. This slight rounding suggests a manufactured, durable component rather than a digital abstraction. Buttons and input fields share this uniform radius to create a cohesive equipment-like feel.

## Components
- **Data Cards:** High-contrast containers with a 2px border. Headlines are always paired with a technical "Data-Mono" timestamp.
- **Safety Checklists:** Large-format checkboxes (24x24px) with a heavy 3px stroke when checked. Success states use a high-visibility green, but all unchecked items remain neutral until interaction.
- **Status Badges:** Solid-fill blocks using safety colors (Orange, Amber, Red). Text inside is always black or white based on maximum contrast.
- **Primary Buttons:** Solid `#FF6B00` fill with black text. No gradients. Active states involve a slight inward "inset" stroke to simulate a physical press.
- **Map-List Items:** Hybrid components that show a small localized map thumbnail alongside critical dispatch details. These use high-density layouts to show 4-5 key data points (ID, Status, Time, Distance) without tapping.
- **Inputs:** Dark background, 2px gray border, 16px internal padding. Focus states use the Safety Orange border.