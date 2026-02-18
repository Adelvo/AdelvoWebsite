# Design System Reference

## 🎨 Color Palette

| Purpose | Color | Hex | RGB |
|---------|-------|-----|-----|
| Primary Background | Deep Black | `#0B0C10` | rgb(11, 12, 16) |
| Secondary Background | Dark Gray | `#1F2833` | rgb(31, 40, 51) |
| Primary Text | Light Gray | `#C5C6C7` | rgb(197, 198, 199) |
| Accent / CTA | Cyan | `#66FCF1` | rgb(102, 252, 241) |
| Secondary Accent | Teal | `#45A29E` | rgb(69, 162, 158) |

### Usage Guidelines
- **Primary Background**: Page background, card backgrounds in non-emphasized sections
- **Secondary Background**: Cards, sections that need visual hierarchy, form backgrounds
- **Primary Text**: All body text, headings on secondary backgrounds
- **Accent**: CTAs, important UI elements, highlights (max 10% of total UI)
- **Secondary Accent**: Hover states, secondary CTAs, subtle highlights

## 📏 Spacing System

| Size | Value | Use Case |
|------|-------|----------|
| XS | 0.5rem (8px) | Small gaps, icon spacing |
| SM | 1rem (16px) | Padding in small components, minor gaps |
| MD | 1.5rem (24px) | Standard section padding, card gaps |
| LG | 2rem (32px) | Container padding, major section spacing |
| XL | 3rem (48px) | Section spacing, large gaps |
| 2XL | 4rem (64px) | Section top/bottom padding |

## 🔤 Typography

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 | 3rem (48px) | 700 | 1.2 |
| H2 | 2rem (32px) | 700 | 1.2 |
| H3 | 1.5rem (24px) | 600 | 1.2 |
| Body | 1rem (16px) | 400 | 1.6 |
| Small | 0.875rem (14px) | 400 | 1.6 |

### Font Family
```
-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif
```

## 🎯 Component Styles

### Buttons

**Primary Button**
- Background: `#66FCF1` (Accent)
- Text: `#0B0C10` (Primary BG)
- Padding: `1rem 2rem` (var(--spacing-sm) var(--spacing-lg))
- Hover: Background changes to `#45A29E`

**Secondary Button**
- Background: `#1F2833` (Secondary BG)
- Border: 1px solid `#66FCF1`
- Text: `#66FCF1`
- Padding: `1rem 2rem`
- Hover: Inverts to primary button style

### Cards
- Background: `#1F2833`
- Border: 1px solid `#0B0C10`
- Padding: `2rem` (var(--spacing-lg))
- Border Radius: 0.375rem (6px)
- Hover: Border becomes `#66FCF1`, slight lift (translate -2px)

### Service Cards
- Same as cards but with labeled sections
- Each section has a service-label (uppercase, accent color)
- Use for Problem/Solution/Outcome structure

## 📐 Layout

### Max Content Width
```css
--max-width: 1200px;
```

### Container Padding
- Desktop: 2rem (32px)
- Tablet: 1.5rem (24px)
- Mobile: 1.5rem (24px)

### Section Padding
- Normal: 4rem (64px) top/bottom
- Mobile: 3rem (48px) top/bottom

### Grid System
- Card Grid: `repeat(auto-fit, minmax(300px, 1fr))`
- Gap: 3rem (48px) desktop, 1.5rem (24px) mobile

## 📱 Responsive Breakpoints

| Breakpoint | Size | Changes |
|------------|------|---------|
| Desktop | > 768px | Full navigation, multi-column layouts |
| Tablet | ≤ 768px | Navigation toggle appears, adjusted spacing |
| Mobile | ≤ 480px | Single column, larger touch targets |

## ♿ Accessibility

- **Color Contrast**: 7:1+ ratio (WCAG AAA)
- **Font Sizes**: Minimum 14px (0.875rem) for body
- **Line Height**: 1.6 for body text
- **Touch Targets**: Minimum 44px × 44px
- **Interactive Elements**: All keyboard accessible
- **Semantic HTML**: Proper heading hierarchy, landmarks

## 🎬 Animations & Transitions

- **Global Transition Duration**: 200ms (var(--transition))
- **Easing**: ease-in-out
- **Hover Effects**: Color change, slight elevation
- **No**: Unnecessary animations, gradients, or neon effects

## 🏗️ Component Grid

### Basic Layout Pattern
```
┌─────────────────────────────────────┐
│         Header (Sticky)             │
├─────────────────────────────────────┤
│  Hero Section / Main Content        │
├─────────────────────────────────────┤
│  Featured Section (Alt BG)          │
├─────────────────────────────────────┤
│  Content / Cards                    │
├─────────────────────────────────────┤
│  CTA Section                        │
├─────────────────────────────────────┤
│           Footer                    │
└─────────────────────────────────────┘
```

## 🎨 Visual Hierarchy

1. **Most Important**: H1 + Primary CTA (Accent color)
2. **Important**: H2, service headings
3. **Supporting**: H3, card content
4. **Detail**: Body text, labels
5. **Secondary**: Small text, muted information

## 📝 Accent Usage

Accent color (`#66FCF1`) should appear in:
- Primary CTAs (buttons)
- H1/H2 emphasis (optional)
- Logo/branding
- Links/interactive elements
- Icons/highlights
- **Max**: 10% of total UI

## CSS Variable Quick Reference

```css
/* Colors */
--color-bg-primary
--color-bg-secondary
--color-text-primary
--color-accent
--color-accent-secondary

/* Typography */
--font-family
--font-size-h1 / h2 / h3 / body / small
--line-height-body / heading

/* Spacing */
--spacing-xs / sm / md / lg / xl / 2xl

/* Layout */
--max-width
--container-padding

/* Animations */
--transition
```

---

For complete implementation details, see `SETUP_GUIDE.md`
