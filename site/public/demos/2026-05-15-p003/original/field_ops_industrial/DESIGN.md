---
name: Field-Ops Industrial
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#20201f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#bac9cc'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#849396'
  outline-variant: '#3b494c'
  surface-tint: '#00daf3'
  primary: '#c3f5ff'
  on-primary: '#00363d'
  primary-container: '#00e5ff'
  on-primary-container: '#00626e'
  inverse-primary: '#006875'
  secondary: '#ffb778'
  on-secondary: '#4c2700'
  secondary-container: '#fd9000'
  on-secondary-container: '#613400'
  tertiary: '#e0eeff'
  on-tertiary: '#203243'
  tertiary-container: '#bfd2e9'
  on-tertiary-container: '#485a6e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#9cf0ff'
  primary-fixed-dim: '#00daf3'
  on-primary-fixed: '#001f24'
  on-primary-fixed-variant: '#004f58'
  secondary-fixed: '#ffdcc1'
  secondary-fixed-dim: '#ffb778'
  on-secondary-fixed: '#2e1500'
  on-secondary-fixed-variant: '#6c3a00'
  tertiary-fixed: '#d1e4fb'
  tertiary-fixed-dim: '#b5c8df'
  on-tertiary-fixed: '#091d2e'
  on-tertiary-fixed-variant: '#36485b'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  data-mono:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: -0.01em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style
This design system is built for the high-pressure environment of restaurant operations and allergen safety. The brand personality is **authoritative, precise, and utilitarian**. It avoids decorative flourishes in favor of "inspection-ready" clarity, evoking the feeling of a specialized piece of hardware or a tactical field-ops interface.

The design style is a blend of **Corporate Modern and Industrial Minimalism**. It utilizes a rigid structural grid, high-contrast action colors, and a dark, low-glare base to reduce eye strain during long kitchen shifts. Every element is designed to feel "sturdy" and reliable, prioritizing data density and rapid decision-making.

## Colors
The palette is dominated by **Graphite (#1C1C1C)** for the primary background and **Steel Blue (#2C3E50)** for secondary surfaces and paneling. This creates a deep, low-fatigue environment suitable for kitchen lighting.

- **Vivid Cyan (#00E5FF)**: Reserved for primary actions, success states, and interactive elements. It provides a sharp, high-visibility "glow" against the dark base.
- **Bright Orange (#FF9100)**: Used exclusively for urgency, warnings, and allergen alerts. It demands immediate attention without overwhelming the user.
- **Accents**: Use subtle gray-blue tints for borders to maintain structure without creating visual noise.

## Typography
The typography system prioritizes legibility in high-movement scenarios. **Geist** is used for headlines and data-heavy labels to provide a technical, monospaced feel that aligns with the industrial aesthetic. **Inter** handles body copy and descriptions, ensuring fluid readability for dense allergen information.

Data points (such as ingredient lists or timestamps) should utilize the `data-mono` style to ensure characters line up vertically, aiding in rapid scanning of lists.

## Layout & Spacing
This design system uses a **Rigid Grid** model. Layouts are strictly aligned to a 4px baseline shift to maintain a disciplined, "engineered" appearance. 

- **Desktop**: A 12-column grid with 16px gutters. Panels are often fixed-width to ensure data doesn't stretch across ultra-wide monitors, maintaining scan-lines.
- **Mobile/Tablet**: A 4-column grid with 16px margins. Content cards should occupy full width to maximize touch targets for kitchen staff wearing gloves.
- **Density**: High. Information is packed tightly but separated by clear, heavy borders rather than whitespace to maximize the utility of every pixel.

## Elevation & Depth
Depth is conveyed through **Tonal Layering** and **Low-Contrast Outlines** rather than shadows. In a kitchen environment, soft shadows can feel "muddy" on screen.

- **Level 0 (Base)**: Graphite (#1C1C1C) for the main application background.
- **Level 1 (Panels)**: Steel Blue (#2C3E50) for sidebars, headers, and card containers.
- **Level 2 (Active Elements)**: Subtle 1px borders using a lighter Steel Blue or Cyan to indicate focus.
- **Overlays**: Modals use a heavy backdrop blur (20px) but maintain a solid 2px border in Cyan or White to define the boundary clearly.

## Shapes
The shape language is **Technical and Precise**. We use a "Soft" roundedness (4px) which provides enough radius to prevent the UI from feeling aggressive while maintaining the rigid, "machined" look of industrial equipment. 

- **Standard Elements**: 4px radius (buttons, inputs, cards).
- **Status Indicators**: Square or slightly rounded (2px) to denote a "checkbox" or "tag" feel.
- **Icons**: Utilize sharp strokes (2px weight) with minimal rounding to match the typography.

## Components
### Buttons & Actions
- **Primary**: Solid Cyan (#00E5FF) with black text for maximum contrast. 
- **Warning**: Solid Orange (#FF9100) with black text for urgent allergen flags.
- **Ghost**: Steel Blue outline with white/cyan text for secondary navigation.

### Checklist Cards
Cards are the primary container for "Proofs." They must feature a heavy 2px border on the left side to indicate status (Cyan for Verified, Orange for Pending/Warning). Use a rigid header with `label-caps` for metadata.

### Input Fields
Inputs use the Steel Blue surface with a 1px gray-blue border. On focus, the border transitions to Cyan with a subtle 2px outer "glow" (not a shadow, but a hard-edged neon stroke).

### Chips & Tags
Used for allergen indicators (e.g., "Contains Dairy"). These should be high-contrast: black text on a light neutral background, or white text on a deep colored background to ensure they are the first thing a user sees.

### Lists & Data Surfaces
Use alternating row tints (Zebra striping) using a slightly lighter Graphite for long tables. Headers must remain "sticky" and use the `label-caps` style for clarity during scrolling.