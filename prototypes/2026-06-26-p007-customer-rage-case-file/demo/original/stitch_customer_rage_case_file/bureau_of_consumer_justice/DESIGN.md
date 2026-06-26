---
name: Bureau of Consumer Justice
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#4a473b'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0ef'
  outline: '#7b776a'
  outline-variant: '#ccc6b7'
  surface-tint: '#685e31'
  primary: '#685e31'
  on-primary: '#ffffff'
  primary-container: '#f3e5ab'
  on-primary-container: '#706637'
  inverse-primary: '#d4c78f'
  secondary: '#b6171e'
  on-secondary: '#ffffff'
  secondary-container: '#da3433'
  on-secondary-container: '#fffbff'
  tertiary: '#005faf'
  on-tertiary: '#ffffff'
  tertiary-container: '#d8e5ff'
  on-tertiary-container: '#0066bc'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#f1e3a9'
  primary-fixed-dim: '#d4c78f'
  on-primary-fixed: '#211b00'
  on-primary-fixed-variant: '#4f471b'
  secondary-fixed: '#ffdad6'
  secondary-fixed-dim: '#ffb3ac'
  on-secondary-fixed: '#410003'
  on-secondary-fixed-variant: '#930010'
  tertiary-fixed: '#d4e3ff'
  tertiary-fixed-dim: '#a5c8ff'
  on-tertiary-fixed: '#001c3a'
  on-tertiary-fixed-variant: '#004786'
  background: '#fcf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e5e2e1'
typography:
  headline-lg:
    fontFamily: Courier Prime
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Courier Prime
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Courier Prime
    fontSize: 20px
    fontWeight: '700'
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
  label-md:
    fontFamily: Courier Prime
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.2'
  label-sm:
    fontFamily: Courier Prime
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.2'
  stamp-lg:
    fontFamily: Courier Prime
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1'
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  folder-tab-width: 120px
---

## Brand & Style

This design system employs a **Tactile Case-File** aesthetic, blending the physical nostalgia of 1970s bureaucracy with modern, high-contrast digital utility. The brand personality is "Empowered Accountability"—it feels like a formal investigation led by a friend who isn't afraid to make a scene. 

The visual style leans into **Experimental Brutalism** through the use of heavy borders, manila textures, and "stamped" metadata. It mimics the experience of flipping through a physical folder: overlapping layers, clipped attachments, and redacted information. The goal is to make the user feel like their grievance is no longer just a "support ticket," but a high-priority "Evidence File" with legal weight.

Key design motifs include:
- **Redaction bars:** Used for decorative accents or to obscure sensitive data during loading states.
- **Rubber Stamps:** Status indicators (e.g., "RESOLVED," "URGENT") appear as tilted, textured overlays.
- **Paper Textures:** Subtle grain on background surfaces to mimic manila cardstock.

## Colors

The palette is driven by high-contrast functionalism. The primary **Manila Yellow** acts as the universal surface color, providing a warm, non-white canvas that reduces eye strain while maintaining the "file folder" metaphor.

- **Primary (Manila):** Used for main backgrounds and container surfaces.
- **Secondary (Confidential Red):** Reserved for high-priority alerts, "Rage" triggers, and "REJECTED" status stamps.
- **Tertiary (Evidence Blue):** Used for links, primary actions, and "FILED" status stamps.
- **Neutral (Charcoal):** Used for all primary text, borders, and "ink" effects to ensure maximum readability and a stark, typewriter-ink feel.
- **Surface Accents:** A secondary neutral (#E6D595) is used for "folder tabs" and stacked depth.

## Typography

This system uses a dual-font strategy to balance legibility with thematic immersion. 

**Courier Prime** is the "voice of the system." It is used for headers, labels, and status indicators to mimic typewriter output. It should feel authoritative and slightly mechanical.

**Inter** is the "voice of the data." It is used for all body copy, user-generated descriptions, and form inputs. Its high x-height and clean glyphs provide a necessary modern contrast to the vintage typewriter aesthetic, ensuring the app remains highly functional for long-form reading.

**Stylistic Note:** Labels should often be paired with a "colon" suffix (e.g., SUBJECT:) to reinforce the form-filling nature of the UI.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid** model. While the main content container adheres to a 12-column grid on desktop, individual "Evidence Folders" (cards) use internal padding that mimics physical document margins.

- **Stacking:** Elements should often "stagger" slightly. Use small 4px or 8px offsets to make cards look like they are sitting in a physical pile.
- **The Folder Tab:** Use a consistent 120px wide "tab" at the top-left or top-right of main containers to house secondary navigation or category labels.
- **Margins:** Generous 32px margins on desktop to prevent the "Evidence" from feeling cluttered, maintaining a professional investigative look.

## Elevation & Depth

Depth in this design system is created through **Tonal Stacking and Hard Shadows** rather than soft blurs.

1.  **Low Elevation:** Elements are defined by a 2px solid Charcoal border.
2.  **High Elevation:** Elements use a "Block Shadow"—a solid 4px Charcoal offset to the bottom-right (no blur). This creates a tactile, pop-art feel that reinforces the physical presence of the "folders."
3.  **Tonal Layers:** Surfaces deeper in the "file" use a slightly darker Manila shade (#E6D595) to indicate they are behind the current active document.
4.  **Overlays:** Use a semi-transparent Charcoal wash (opacity 40%) for modals, but keep the modal container itself opaque Manila with a heavy black border.

## Shapes

The shape language is strictly **Sharp (0px roundedness)**. Every element is cut with right angles to mimic the edges of paper and cardstock. 

Exceptions are made only for **Stamp Icons**, which may have a slight irregular "grunge" border, and **Action Buttons**, which remain rectangular but may feature a 45-degree "clipped corner" to distinguish them from static evidence blocks.

## Components

### Buttons
- **Primary:** Manila background, 2px Charcoal border, 4px solid Charcoal shadow. Text in Courier Prime (Bold).
- **Secondary:** Transparent background, 2px Charcoal border, no shadow.
- **"Rage" Action:** Red background, white Courier Prime text. Used for "File Complaint" or "Escalate."

### Evidence Folders (Cards)
Cards must feature a "Tab" at the top. The top border should be broken by a label in Courier Prime. Use a slight 1-2 degree rotation on cards in a list to create a "scattered papers" effect.

### Input Fields
Inputs should look like underline-style forms. Remove the top, left, and right borders, leaving only a 2px Charcoal bottom border. Labels should sit above the line in a smaller Courier Prime font.

### Stamps & Badges
Status indicators (Open, Closed, Urgent) should be enclosed in a thick, distressed border. They should be placed at a slight 15-degree angle over the corner of an Evidence Folder, utilizing "Confidential Red" or "Evidence Blue" with 80% opacity to let underlying text peak through.

### Redaction Bars
Use solid Charcoal blocks to hide sensitive ID numbers or as a hover state for "Reveal Secret Information."