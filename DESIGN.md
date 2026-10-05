---
name: EcoTrack DIU
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#3e4a3d'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#6e7b6c'
  outline-variant: '#bdcaba'
  surface-tint: '#006e2d'
  primary: '#006b2c'
  on-primary: '#ffffff'
  primary-container: '#00873a'
  on-primary-container: '#f7fff2'
  inverse-primary: '#62df7d'
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fc'
  on-secondary-container: '#57657a'
  tertiary: '#825100'
  on-tertiary: '#ffffff'
  tertiary-container: '#a36700'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#7ffc97'
  primary-fixed-dim: '#62df7d'
  on-primary-fixed: '#002109'
  on-primary-fixed-variant: '#005320'
  secondary-fixed: '#d5e3fc'
  secondary-fixed-dim: '#b9c7df'
  on-secondary-fixed: '#0d1c2e'
  on-secondary-fixed-variant: '#3a485b'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
  headline-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 21px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  meta:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-md: 1.5rem
  gutter-lg: 2rem
  margin: 1rem
  margin-md: 2rem
  margin-lg: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style
The design system establishes a welcoming, ecological, and institutional environment tailored for Daffodil International University (DIU). It communicates community agency, transparency, and operational clarity.

The visual style is **Modern Ecological Minimalism**—combining generous white space, soft tactile surfaces, and crisp emerald and slate accents. The interface avoids dense enterprise clutter in favor of approachable, breathable compositions that encourage students, faculty, and maintenance crews to report and monitor campus waste management issues effortlessly. The emotional target is reassuring, dependable, and actively pro-environment.

## Colors
The color architecture reflects DIU’s lush green campus landscapes anchored by clear, authoritative typography.

- **Primary (`#16A34A` / `green-600`)**: Key actions, positive status, and sustainability indicators. Active/hover transitions lean to `#15803D` (`green-700`), while `#F0FDF4` (`green-50`) serves as a soft, reassuring tint for container backgrounds and active highlights.
- **Secondary (`#475569` / `slate-600`)**: Supporting metadata, labels, inactive indicators, and structural icons.
- **Neutral Palette**: 
  - Canvas Background: `#F8FAFC` (`slate-50`)
  - Elevated Surfaces/Cards: `#FFFFFF`
  - Subtle Borders/Dividers: `#E2E8F0` (`slate-200`)
  - Muted Text & Placeholders: `#94A3B8` (`slate-400`)
  - High-Contrast Primary Text: `#0F172A` (`slate-900`)
- **Semantic Functional Badges**:
  - *Full*: Amber (`#FEF3C7` bg / `#B45309` text / `#F59E0B` icon)
  - *Damaged*: Red (`#FEE2E2` bg / `#B91C1C` text / `#DC2626` icon)
  - *Overflowing*: Orange (`#FFEDD5` bg / `#C2410C` text / `#EA580C` icon)
  - *Status - Open*: Slate (`#F1F5F9` bg / `#475569` text)
  - *Status - Resolved*: Green (`#DCFCE7` bg / `#15803D` text)

All foreground-to-background combinations meet or exceed WCAG AA standards (minimum 4.5:1 for body copy and 3.0:1 for graphical/badge components).

## Typography
The system employs `Inter` as the primary Latin typeface, valued for its geometric legibility at small sizes and high screen clarity. When rendering Bengali script (e.g., student alerts, dual-language signage), the stack transitions smoothly to fallback fonts `Noto Sans Bengali` or `Hind Siliguri`.

- **Bangla Line Heights**: When Bengali text is active, line heights scale adaptively to 1.6–1.7 to accommodate ascenders, descenders, and complex conjuncts without clipping.
- **Rhythm**: Default Latin body text adheres strictly to a 1.5 line-height ratio. Headers leverage tighter tracking (`-0.02em` for headlines above 24px) to retain graphic cohesion.

## Layout & Spacing
The layout relies on a fluid responsive grid system designed to support outdoor mobile audits on campus as seamlessly as administrative monitoring on widescreen desktop dashboards:

- **Breakpoints**:
  - `sm` (640px): Single-column view, full-width cards, edge gutters at `1rem`.
  - `md` (768px): 6-column grid with `1.5rem` gutters, suitable for tablets carried by field staff.
  - `lg` (1024px+): 12-column layout with centered maximum width container (`1280px`), 2rem gutters, and 3rem section margins.
- **Vertical Rhythm**: UI modules maintain a disciplined 8px modular cadence. Inner container paddings range from `1rem` (compact cards) to `1.5rem` (major report modules), preserving the airy and uncluttered aesthetic.

## Elevation & Depth
Depth in the design system is restrained, soft, and realistic—avoiding heavy black drop-shadows or stark borders:

- **Low-Elevation Ambient Shadows**: Card elements, interactive panels, and status summaries sit on clean white containers (`#FFFFFF`) framed by a 1px border (`#E2E8F0`) and an ambient, low-contrast shadow: `0 1px 3px 0 rgba(15, 23, 42, 0.05), 0 1px 2px -1px rgba(15, 23, 42, 0.03)`.
- **Raised Interactive Cards (Hover)**: Subtle lift to `0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.05)` with smooth 150ms ease transitions.
- **Overlays & Modals**: For issue submittal or photo previews, use soft backdrop blurs (`backdrop-blur-sm` over `rgba(15, 23, 42, 0.4)`) with an elevated surface shadow: `0 20px 25px -5px rgba(15, 23, 42, 0.1)`.

## Shapes
The shape language uses distinct tiers of corner curvature to distinguish large structural groupings from immediate touch points:

- **Cards and Containers**: 12px to 16px (`rounded-xl` to `rounded-2xl`) corner radius to create an approachable, gentle silhouette.
- **Buttons, Controls, and Inputs**: 8px to 10px (`rounded-lg`) corner radius for precise, crisp affordance.
- **Badges, Tags, and Pill Counters**: Full radius (`rounded-full`) to delineate metadata from primary structural elements.

## Components

- **Buttons**:
  - Primary button: Solid `#16A34A` background, white text, 8–10px border radius, min-height of 44px for thumb accessibility. Hover state shifts to `#15803D`.
  - Secondary button: `#FFFFFF` background, `#E2E8F0` border, `#0F172A` text, hovering to `#F8FAFC`.
  - Floating Action Button (FAB): Prominent 52px circular or rounded-pill action button for "Report Waste" (`+`) with green fill and a subtle drop shadow.
- **Issue & Status Chips / Badges**:
  - Compact padding (`0.25rem 0.625rem`), `rounded-full` curvature, and font weight 500 (`text-xs` to `text-sm`).
  - Colors strictly follow designated semantic sets (e.g., Full = Amber, Damaged = Red, Overflowing = Orange, Resolved = Green).
- **Form Inputs**:
  - Minimum height 44px. Background `#FFFFFF`, border `#E2E8F0`, interior text `#0F172A`, placeholder `#94A3B8`.
  - Focus ring: 2px offset ring colored `#16A34A` with 20% alpha tint.
- **Report & Dashboard Cards**:
  - Crisp `#FFFFFF` surface with `#E2E8F0` border and 12–16px border-radius.
  - Generous internal padding (16px–24px) pairing Lucide icons (`leaf`, `trash-2`, `map-pin`, `clock`, `check-circle`) at 18–20px sizing with `#475569` neutral stroke.
- **Touch & Accessibility Standards**:
  - All interactive elements respect the 44×44px minimum bounding box.
  - Visible keyboard focus rings applied across all form controls and links.