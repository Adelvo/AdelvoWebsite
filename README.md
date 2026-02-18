# Adelvo Agency Website

A clean, production-ready B2B AI Automation Agency website. Fast, minimal, conversion-focused.

## 📋 Project Structure

```
/Adelvo_Agency_Website
├── index.html                 # Home page
├── script.js                  # Navigation & interactivity
├── css/
│   └── styles.css             # Complete design system & styles
├── pages/
│   ├── services.html          # Services overview
│   ├── use-cases.html         # Industry-specific use cases
│   ├── about.html             # About the agency
│   ├── book-a-call.html       # Calendly booking page
│   └── legal/
│       ├── privacy.html       # Privacy policy
│       └── imprint.html       # Legal imprint
└── assets/                    # Placeholder for future assets
```

## 🎨 Design System

### Color Palette
- **Primary Background**: `#0B0C10` (Deep black)
- **Secondary Background**: `#1F2833` (Dark gray)
- **Primary Text**: `#C5C6C7` (Light gray)
- **Accent**: `#66FCF1` (Cyan)
- **Secondary Accent**: `#45A29E` (Teal)

All colors are defined as CSS variables in `css/styles.css` for easy updates.

### Typography
- **Font Family**: System fonts (SF Pro, Segoe UI, Roboto fallback)
- **Hierarchy**: H1 (3rem) → H2 (2rem) → H3 (1.5rem) → Body (1rem)
- **Line Height**: 1.6 for body, 1.2 for headings
- **Spacing**: 8px base unit system (0.5rem increments)

### Features
- Mobile-first responsive design
- Sticky navigation with mobile menu toggle
- Accessibility-focused HTML5 semantics
- No frameworks, pure CSS
- Performance optimized

## 🚀 Getting Started

### Local Development
1. Open `index.html` in your browser
2. All files are self-contained (CSS & JS included)
3. No build process or dependencies required

### Customization

#### Update Company Information
Edit all pages and change:
- Company name: Replace "Adelvo" throughout
- Email: `info@adelvo-global.ae` → your email
- Phone: Add your phone number in relevant places

#### Add Calendly Integration
In `pages/book-a-call.html`, replace:
```html
src="https://calendly.com/your-calendly-url"
```
with your actual Calendly URL.

#### Update Legal Information
Edit `pages/legal/imprint.html` with:
- Company name, address, registration details
- Owner information
- Tax ID, VAT number
- Governing law (your jurisdiction)

#### Customize Services
In `pages/services.html`, edit the service cards:
- Update problem/solution/outcome descriptions
- Add or remove services as needed
- Keep the same structure for consistency

#### Customize Use Cases
In `pages/use-cases.html`, adjust:
- Industry-specific use cases
- Before/after scenarios
- Results and metrics

## 📱 Responsive Design

The website is fully responsive:
- **Desktop**: Full navigation, multi-column layouts
- **Tablet (≤768px)**: Navigation toggle appears
- **Mobile (≤480px)**: Single-column layout, optimized touch targets

All breakpoints use CSS variables for easy adjustment.

## ♿ Accessibility

- Semantic HTML5 structure
- ARIA labels on interactive elements
- Color contrast ratio >7:1 (WCAG AAA compliant)
- Keyboard navigation support
- Mobile-friendly viewport settings

## 🔍 SEO Optimization

- Meta descriptions on all pages
- Semantic HTML structure
- Descriptive page titles
- Mobile viewport configuration
- Structured content hierarchy

## 📊 Performance

- Zero external dependencies
- Pure CSS (no preprocessors)
- Vanilla JavaScript
- Minimal HTTP requests
- Optimized CSS variables
- No render-blocking resources

## 🔧 Files Reference

### index.html
Home page with hero section, use case cards, trust metrics, and CTA. Main entry point.

### pages/services.html
Service offerings with problem/solution/outcome structure. Includes process steps and FAQ.

### pages/use-cases.html
Industry-specific automation examples: Agencies, E-Commerce, Coaches/SMBs.

### pages/about.html
Company overview, expertise areas, and value proposition.

### pages/book-a-call.html
Calendly booking integration with FAQ and expectations.

### css/styles.css
Complete design system with:
- CSS variables for all colors, spacing, typography
- Base reset and typography styles
- Component styles (cards, buttons, sections)
- Responsive breakpoints
- No framework dependencies

### script.js
Lightweight interactivity:
- Mobile menu toggle
- Active navigation link detection
- Utility functions for future enhancements

## 🔄 Deployment

The website is ready for deployment to any static host:
- Netlify
- Vercel
- GitHub Pages
- Any traditional web host
- CDN (no build process required)

### Pre-deployment Checklist
- [ ] Update company information and contact details
- [ ] Add Calendly URL to book-a-call page
- [ ] Update legal information (Imprint & Privacy Policy)
- [ ] Replace placeholder text with real service descriptions
- [ ] Add company logo to assets folder (optional)
- [ ] Test all navigation links
- [ ] Test on mobile devices
- [ ] Verify all CTAs work

## 📞 Support & Customization

To extend this website:

1. **Add Pages**: Create new `.html` file in `pages/`, use same header/footer structure
2. **Add Sections**: Use existing card and grid layouts in `css/styles.css`
3. **Add Components**: Define new classes following the established naming conventions
4. **Add Interactivity**: Extend `script.js` with vanilla JavaScript

All styling uses CSS variables—update colors, spacing, or typography in one place.

## 📄 License

This website template is production-ready and can be used for your B2B business.

---

**Last Updated**: December 18, 2025
**Version**: 1.0
**Status**: Production Ready ✓
