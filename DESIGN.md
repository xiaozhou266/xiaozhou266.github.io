# Design

## Visual Theme

Apple product-launch restraint with a personal, technical voice: pale graphite surfaces, large typographic statements, a single precise technology blue, documentary portrait photography, and long scroll sections with generous breathing room.

## Physical Scene

An enterprise CTO reads the site on a bright 27-inch display between meetings, looking for evidence that one developer can move from an ambiguous business problem to a deployed system.

## Color Strategy

Restrained: tinted near-whites and graphite neutrals with technology blue reserved for links, labels, focus, and key transitions. No gradients or gradient text.

## Typography

Use Geist for display and body, with system Chinese fallbacks. Oversized headings use strong weight contrast and short line lengths. Body copy stays under 70ch.

## Layout

Maximum content width 1200px. Full-bleed sections alternate light and graphite surfaces. Prefer editorial rows, horizontal capability bands, and one large featured project over repeated cards.

## Motion

Framer Motion reveal-on-scroll with ease-out curves, subtle image scale on entry, and a reduced-motion fallback. Never animate layout dimensions.

## Accessibility

Semantic landmarks, keyboard-visible focus, alt text, 44px touch targets, bilingual labels, and `prefers-reduced-motion` support.

