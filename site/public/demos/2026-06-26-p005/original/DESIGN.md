---
name: Vibe Code Launch Firewall
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
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#ffd393'
  on-secondary: '#432c00'
  secondary-container: '#fdaf00'
  on-secondary-container: '#694600'
  tertiary: '#fff3f2'
  on-tertiary: '#68000b'
  tertiary-container: '#ffceca'
  on-tertiary-container: '#bb1824'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#ffddaf'
  secondary-fixed-dim: '#ffba43'
  on-secondary-fixed: '#281800'
  on-secondary-fixed-variant: '#614000'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3ae'
  on-tertiary-fixed: '#410004'
  on-tertiary-fixed-variant: '#930014'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 18px
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
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '450'
    lineHeight: 20px
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '450'
    lineHeight: 16px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.08em
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
  row-height-compact: 32px
  gutter: 12px
---

## Brand & Style
The design system is engineered for **Vibe Code Launch Firewall**, a high-density security dashboard for solo founders who need to monitor production environments with clinical precision. The personality is **authoritative, urgent, and technical**, moving away from "friendly SaaS" tropes toward a professional **Operator-Dense** aesthetic.

The visual direction blends **Modern Minimalism** with **Cyber-Industrial** elements. It prioritizes information density over whitespace, ensuring that founders can see a complete security posture at a single glance. The interface should feel like a mission-critical terminal—focused on immediate remediation and technical transparency.

## Colors
This design system utilizes a **"Deep Graphite"** palette to minimize eye strain during long monitoring sessions.

- **Primary (Electric Blue - #00F0FF):** Used for primary navigation, system focus, and active selection.
- **Secondary (Amber - #FFB000):** Reserved strictly for medium-severity warnings and non-critical scan alerts.
- **Tertiary (Red - #FF4D4D):** Used for critical vulnerabilities and firewall breaches.
- **Action Accent (Cyber Green - #39FF14):** Reserved exclusively for "Remediate" or "Fix" actions, providing a clear path to resolution.
- **Neutrals:** The background uses `#121212`, with UI containers using `#1C1C1C`. Borders use a subtle `#2D2D2D` to maintain a low-contrast structural grid.

## Typography
The typography strategy employs a **dual-font system** to distinguish between interface controls and raw data.

- **Inter:** Used for the core UI, navigation, and body text. It provides high legibility at small scales. 
- **JetBrains Mono:** Used for all "Evidence" data, severity badges, timestamps, and IP addresses. The monospaced nature ensures that data columns align perfectly, facilitating rapid scanning of logs.

Headlines are kept compact (max 24px) to preserve vertical space. Labels use an uppercase monospaced style to denote system-level metadata.

## Layout & Spacing
The system follows a **Fixed-Grid Efficiency** model based on a 4px base unit. 

- **Density:** Components are tightly packed. Standard list rows are 32px or 40px high to maximize the number of visible security events.
- **Breakpoints:**
  - **Desktop (1440px+):** 12-column grid, 16px margins.
  - **Tablet (768px - 1024px):** 8-column grid, content reflows into a single vertical stack for logs.
  - **Mobile (Under 768px):** Minimal view focusing only on the "Critical" feed and "Remediate" buttons.
- **Safe Areas:** Use 12px gutters between data panels to maintain separation without wasting space.

## Elevation & Depth
In this design system, depth is achieved through **Tonal Layering** and **Low-Contrast Outlines** rather than traditional shadows.

- **Level 0 (Base):** `#121212` for the main application background.
- **Level 1 (Panels):** `#1C1C1C` for the main data cards and sidebar.
- **Level 2 (Trays/Popovers):** `#252525` with a 1px solid border of `#333333`.
- **Interactions:** Hover states on rows use a subtle background shift to `#2A2A2A` rather than an elevation lift.

Shadows are avoided entirely to keep the UI feeling "flat" to the glass, emphasizing the digital, technical nature of the tool.

## Shapes
The shape language is **Soft-Industrial**. We use a conservative `0.25rem` (4px) corner radius for most UI elements (buttons, input fields, panels).

- **Standard Elements:** 4px radius. This provides a professional, "tooled" look that feels more precise than fully rounded corners.
- **Badges/Chips:** 2px radius (near-sharp) to distinguish them as technical status indicators rather than interactive buttons.
- **Progress Bars:** Sharp (0px) to maximize the visual weight of the "filling" data.

## Components
- **Compact Risk Rows:** These are the primary data entry. They use `code-md` for the event title and `label-caps` for the timestamp. They feature a 2px left-border accent colored by severity (Red/Amber/Blue).
- **Severity Badges:** Small, rectangular chips using JetBrains Mono. Use high-contrast text on background: Red `#FF4D4D` (Critical), Amber `#FFB000` (Warning), Blue `#00F0FF` (Info).
- **Evidence Trays:** Collapsible panels that expand within a list row. The background is slightly darker than the parent row, utilizing `code-sm` for raw JSON or log output.
- **Remediation Buttons:** Primary actions use the Cyber Green background with black text for maximum punch. Secondary actions use the Ghost style (outline only).
- **Scan Progress Bars:** Thin (4px height) bars. The "track" is `#2D2D2D` and the "fill" is a gradient from `#00F0FF` to `#39FF14`.
- **Input Fields:** Dark background (`#121212`), 1px border (`#333333`), with a Primary Blue focus ring.