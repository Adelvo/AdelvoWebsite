# Setup & Customization Guide

## Quick Start

1. Open `index.html` in any browser to preview the website
2. All files are self-contained—no build process needed
3. Customize as needed using this guide

---

## 🎯 Essential Customizations

### 1. Company Branding

**Step 1: Search and Replace**
Find and replace across all files:
- `Adelvo` → Your company name
- `info@adelvo-global.ae` → Your email
- `2025` → Current year

**Files to update:**
- `index.html` (logo, footer)
- `pages/services.html` (header, footer)
- `pages/use-cases.html` (header, footer)
- `pages/about.html` (header, footer, company name)
- `pages/book-a-call.html` (header, footer)
- `pages/legal/privacy.html`
- `pages/legal/imprint.html`
- `css/styles.css` (if changing logo styling)

### 2. Add Calendly Integration

**In `pages/book-a-call.html`:**

Find this line:
```html
<iframe 
  src="https://calendly.com/your-calendly-url" 
  width="100%" 
  height="650" 
  frameborder="0"
  style="border-radius: 0.5rem;">
</iframe>
```

Replace `https://calendly.com/your-calendly-url` with your Calendly link.

To get your Calendly URL:
1. Log in to Calendly
2. Go to Share Calendar
3. Copy your unique URL
4. Paste it in the iframe src

### 3. Complete Legal Information

**Privacy Policy (`pages/legal/privacy.html`):**
- Already has template structure
- Update company email
- Add any specific data collection practices
- Ensure GDPR/CCPA compliance for your jurisdiction

**Imprint (`pages/legal/imprint.html`):**

Required fields to fill in:
```
[Company Name]
[Street Address]
[City, Postal Code]
[Country]
[Owner Name]
[Registration Number]
[VAT Number]
[Tax Number]
[Phone Number]
[Location] - for jurisdiction in "Governing Law"
```

Search for `[...]` in the file and replace with your information.

### 4. Customize Services

**File: `pages/services.html`**

Each service card has this structure:
```html
<div class="service-card">
  <h3>Service Name</h3>
  
  <div class="service-item">
    <div class="service-label">Problem</div>
    <div class="service-content">
      Description of the problem your clients face
    </div>
  </div>
  
  <div class="service-item">
    <div class="service-label">Solution</div>
    <div class="service-content">
      How you solve this problem
    </div>
  </div>
  
  <div class="service-item">
    <div class="service-label">Outcome</div>
    <div class="service-content">
      What clients gain from your solution
    </div>
  </div>
</div>
```

To add/remove services:
- Duplicate or delete the entire `.service-card` div
- Update the h3 title and content
- Keep the problem/solution/outcome structure

### 5. Customize Use Cases

**File: `pages/use-cases.html`**

Each use case section follows this pattern:
```html
<section class="section">
  <div class="container">
    <div class="use-case">
      <div class="use-case-title">
        <h2>Industry Name</h2>
        <p>Brief description</p>
      </div>

      <div class="before-after">
        <div class="before-after-item">
          <div class="before-after-label">Before Automation</div>
          <ul>
            <li>Problem 1</li>
            <li>Problem 2</li>
            <!-- etc -->
          </ul>
        </div>
        
        <div class="before-after-item">
          <div class="before-after-label">After Automation</div>
          <ul>
            <li>Benefit 1</li>
            <li>Benefit 2</li>
            <!-- etc -->
          </ul>
        </div>
      </div>

      <div class="result-box">
        <div class="label">Result</div>
        <p>Quantified outcome</p>
      </div>
    </div>
  </div>
</section>
```

To modify:
- Keep the same HTML structure
- Update industry names and descriptions
- Adjust before/after bullet points
- Update result metrics to match your experience

### 6. Update Home Page Content

**File: `index.html`**

Key sections to customize:

**Hero Section:**
```html
<h1>Automate Your Business. Scale Without Chaos.</h1>
<p class="subheading">
  Update this value proposition to match your offering
</p>
```

**Use Case Cards:**
Replace or add to the 4-card grid to show your specific services.

**Trust Section:**
Update these metrics to real numbers:
```html
<div class="number">40%</div>
<div class="label">Average time saved per week</div>
```

---

## 🎨 Design Customization

### Colors

All colors are CSS variables in `css/styles.css`:

```css
:root {
  --color-bg-primary: #0B0C10;      /* Dark background */
  --color-bg-secondary: #1F2833;    /* Lighter background */
  --color-text-primary: #C5C6C7;    /* Main text */
  --color-accent: #66FCF1;          /* Primary CTA color */
  --color-accent-secondary: #45A29E; /* Secondary accent */
}
```

To change colors:
1. Open `css/styles.css`
2. Find the `:root` section at the top
3. Update the hex values
4. All pages will automatically use the new colors

### Typography

Font settings in `css/styles.css`:

```css
--font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
```

To change to a different font:
- Keep system fonts for best performance
- Or add Google Fonts link in `<head>` of HTML files
- Update the `--font-family` variable

### Spacing & Layout

Adjust spacing by modifying these variables:

```css
--spacing-xs: 0.5rem;   /* 8px */
--spacing-sm: 1rem;     /* 16px */
--spacing-md: 1.5rem;   /* 24px */
--spacing-lg: 2rem;     /* 32px */
--spacing-xl: 3rem;     /* 48px */
--spacing-2xl: 4rem;    /* 64px */
```

### Container Width

Max content width (change from 1200px):

```css
--max-width: 1200px;
```

---

## 📱 Responsive Behavior

Breakpoints are already configured:
- **Mobile** (`max-width: 480px`)
- **Tablet** (`max-width: 768px`)
- **Desktop** (above 768px)

To adjust breakpoints, edit the `@media` queries in `css/styles.css`.

---

## 🔗 Navigation & Links

All internal links use relative paths and work from any directory. 

**Link structure:**
- From root (`index.html`): `pages/services.html`
- From pages: `../index.html` (go up one level)
- From legal pages: `../../index.html` (go up two levels)

When deploying, ensure you maintain this folder structure.

---

## 📊 Analytics & Tracking

To add Google Analytics or other tracking:

Add to the `<head>` of each HTML file:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

Or use the easier Google Tag Manager integration.

---

## 🚀 Deployment Options

### Netlify
1. Drag & drop the entire folder
2. Website goes live instantly
3. Automatic HTTPS, CDN

### Vercel
1. Create account at vercel.com
2. Import GitHub repo or drag folder
3. Automatic deployments on updates

### GitHub Pages
1. Create GitHub repo
2. Push files to main branch
3. Enable Pages in repo settings
4. Site available at `username.github.io/repo-name`

### Traditional Hosting
1. Upload all files via FTP/SFTP
2. Maintain folder structure
3. Point domain to hosting
4. No build process needed

---

## ✅ Pre-Launch Checklist

- [ ] **Branding**: Company name, logo, colors updated
- [ ] **Contact**: Email and phone information accurate
- [ ] **Services**: Updated to match your offerings
- [ ] **Use Cases**: Match your actual client industries
- [ ] **About**: Professional bio and expertise summary
- [ ] **Legal**: Imprint and Privacy Policy completed
- [ ] **Calendly**: Booking link integrated
- [ ] **Links**: All internal and external links working
- [ ] **Mobile**: Test on phones and tablets
- [ ] **Performance**: Images optimized (if added)
- [ ] **Security**: HTTPS enabled on domain
- [ ] **DNS**: Domain pointing to hosting

---

## 🔧 Advanced Customizations

### Add a Blog
1. Create `pages/blog/` folder
2. Create `pages/blog/index.html` for blog listing
3. Create individual post files: `pages/blog/post-1.html`
4. Add Blog link to navigation in all HTML files

### Add More Pages
1. Create new file in `pages/` (e.g., `pages/contact.html`)
2. Copy header/footer from existing page
3. Update navigation to link to new page
4. Add link to new page in all existing pages

### Add Images/Videos
1. Create `assets/images/` folder
2. Add optimized images (use PNG/WebP for graphics, JPG for photos)
3. Reference in HTML: `<img src="../assets/images/filename.png" alt="description">`
4. Never exceed 2MB per image for web

---

## 📞 Support Notes

**Common Issues:**

**Q: Links aren't working**
- A: Verify folder structure matches. Relative paths are case-sensitive on Linux/Mac.

**Q: Styles not applying**
- A: Make sure `css/styles.css` path is correct in the `<link>` tag.

**Q: Mobile menu not appearing**
- A: Check that `script.js` is loaded at bottom of each page.

**Q: Calendly iframe not showing**
- A: Verify your Calendly URL is correct. Check browser console for errors.

---

**Last Updated**: December 18, 2025
