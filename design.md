# Présentation sur le tourisme — Design

Classroom slide deck (16:9, projected) in French, inspired by travel and Morocco. Warm, colorful, elegant. Source: the attached reference layout (soft gradient orbs, thin rules, white cards) recolored into a Moroccan palette.

## Colors

| Token | Hex | Use |
|-------|-----|-----|
| cream | #FBF4E8 | Slide background |
| indigo | #1B2A4A | Headings and body text |
| terracotta | #C8553D | Primary accent, section numbers |
| saffron | #F2A93B | Secondary accent, highlights |
| zellige teal | #1F7A7A | Tertiary accent, progress |
| sky | #9ED2E6 | Soft gradient orb |
| card | #FFFFFF | Text and photo cards |

## Typography

- Display: Playfair Display (titles and section headings)
- Body: Poppins (paragraph text, minimum 36px on a 1920×1080 stage)

## Layout

- Fixed 1920×1080 stage, scaled to fit the window, so the deck looks identical on any projector.
- Text on the left half, photo cards on the right, boy presenter bottom-right.
- Cover and closing slides center the presenter.

## Motion

- Slide change: fade plus 40px rise, staggered text reveal.
- Photos: slow 8s zoom on enter.
- Presenter: gentle bob; click to wave.
- Respects prefers-reduced-motion.

## Interaction

- Arrow keys, Space, click right or left side, or the bottom dots to navigate.
- Click any photo to view it full screen.
- Click the presenter to wave.

## Files

- `src/web/deck/slides.ts`: exact provided text and photo mapping.
- `src/web/deck/Deck.tsx`: presentation engine and slide layouts.
- `public/images/`, `public/character/`: photos and presenter art.
