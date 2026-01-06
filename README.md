# Anchor Funding - Business Funding Website

A modern, professional business funding website built with React, Vite, Tailwind CSS, and React Router. Designed with a trustworthy and clean aesthetic similar to leading fintech companies.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations and transitions
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Sticky Navigation**: Fixed header with dropdown menu and phone number
- **Products Dropdown**: Desktop and mobile dropdown menus for all 6 products
- **Multi-Step Form**: 5-step application with progress tracking and validation
- **EmailJS Integration**: Form submissions sent directly to your email
- **Professional Color Scheme**: Trust-building blues and greens perfect for finance
- **Trust Badges**: Security icons and SSL badges in footer
- **Legal Pages**: Privacy Policy and Terms of Service
- **SEO Optimized**: Complete meta tags, Open Graph, and Twitter Cards
- **Custom Favicon**: Professional gradient logo favicon
- **Live Chat Ready**: Tawk.to integration for customer support
- **Fast Performance**: Built with Vite for lightning-fast development and production builds
- **Easy Navigation**: React Router implementation for seamless page transitions
- **Professional Components**: Reusable header, footer, and UI components

## 📋 Pages

### Main Pages
- **Home**: Hero section, features, statistics, benefits, testimonials, and call-to-action
- **About**: Company story, values, timeline, and achievements
- **Services**: Overview of all 6 funding products with comparison table
- **Contact**: Contact form, business information, and FAQ section
- **Apply Now**: Multi-step application form (5 steps) with progress tracking
- **Privacy Policy**: Comprehensive privacy policy with GDPR compliance
- **Terms of Service**: Legal terms and conditions

### Product Pages
- **SBA Loans**: Government-backed financing up to $5M
- **Merchant Cash Advance (MCA)**: Fast, flexible revenue-based funding
- **Business Loans**: Traditional term loans with fixed payments
- **Line of Credit**: Revolving credit up to $250K
- **Loan Consolidation**: Debt consolidation and simplification
- **Term Loans**: Fixed-rate financing with flexible terms

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Router DOM 7** - Client-side routing
- **Lucide React** - Beautiful icon library
- **EmailJS** - Form submission service

## 📦 Installation

1. Navigate to the project directory:
```bash
cd anchor-funding
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

## 🏗️ Build for Production

Create a production-ready build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
anchor-funding/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Contact.jsx
│   │   ├── Apply.jsx
│   │   └── products/   # Individual product pages
│   │       ├── SBALoans.jsx
│   │       ├── MCA.jsx
│   │       ├── BusinessLoans.jsx
│   │       ├── LineOfCredit.jsx
│   │       ├── LoanConsolidation.jsx
│   │       └── TermLoans.jsx
│   ├── App.jsx         # Main app component with routing
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles with Tailwind
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS configuration
└── vite.config.js      # Vite configuration
```

## 🎨 Customization

### Professional Color Scheme

The website uses a trust-building color palette perfect for finance:

**Primary Colors:**
- **Anchor Blue** (#1e40af) - Primary CTA buttons, headings, trust
- **Anchor Navy** (#1e3a8a) - Hover states, dark accents, security
- **Anchor Teal** (#0d9488) - Accent color, icons, growth/money

**Why These Colors Work:**
- Blues = Most trusted color in finance and banking
- Teal/Green = Money, growth, prosperity, positive outcomes
- High contrast = Accessibility and readability
- Combined = Professional yet approachable

Customize in `tailwind.config.js`:

```javascript
colors: {
  anchor: {
    blue: '#1e40af',   // Trust, professionalism
    navy: '#1e3a8a',   // Security, stability
    teal: '#0d9488',   // Growth, money
  }
}
```

### Content

Update the content in each page component:
- `src/pages/Home.jsx` - Update stats, features, testimonials, and hero text
- `src/pages/About.jsx` - Add your company's story and timeline
- `src/pages/Services.jsx` - Modify service offerings and comparison table
- `src/pages/Contact.jsx` - Update contact information
- `src/pages/Apply.jsx` - Customize application form fields
- `src/pages/products/*` - Update product details, rates, and features

### Forms

**Application Form** (`src/pages/Apply.jsx`):
- ✅ EmailJS integration ready
- See **EMAILJS_SETUP.md** for 5-minute setup
- Replace service ID, template ID, and public key
- Forms will automatically email to your inbox

**Contact Form** (`src/pages/Contact.jsx`):
- Currently shows alert on submission
- Can integrate with EmailJS (similar to Apply form)
- Alternative: Formspree, Netlify Forms, or backend API

### Logo & Favicon

**Update the logo:**
- Header: `src/components/Header.jsx`
- Footer: `src/components/Footer.jsx`

**Favicon:**
- Current: SVG favicon with gradient "A" logo
- Location: `public/favicon.svg`
- See **IMAGES_AND_SEO_GUIDE.md** for creating multiple sizes

### Images

**Add Professional Images:**
See **IMAGES_AND_SEO_GUIDE.md** for:
- Where to find free stock photos (Unsplash, Pexels, Pixabay)
- Recommended search terms for business/finance images
- Where to add images on each page
- Image optimization tools and tips
- Image folder structure

**Trust Elements:**
- ✅ SSL security badges in footer
- ✅ Bank-level security icons
- ✅ HTTPS encryption badge
- ✅ Data protection indicators

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📚 Documentation

- **README.md** - This file (getting started, overview)
- **QUICKSTART.md** - Quick setup guide
- **EMAILJS_SETUP.md** - Email integration setup (5 minutes)
- **IMAGES_AND_SEO_GUIDE.md** - Complete guide for images and SEO
- **FEATURES.md** - Comprehensive feature list
- **PAGES.md** - Detailed page documentation
- **PROJECT_SUMMARY.md** - Overall project summary

## 🔒 SEO & Trust Elements

### SEO Meta Tags ✅
- **Primary Meta Tags**: Title, description, keywords, author
- **Open Graph**: Facebook sharing optimization
- **Twitter Cards**: Twitter sharing optimization
- **Canonical URLs**: Proper page indexing
- **Structured Data**: Ready for schema.org markup

### Trust & Security ✅
- **SSL Badges**: Visible security indicators
- **Privacy Policy**: Comprehensive GDPR-compliant policy
- **Terms of Service**: Complete legal terms
- **Security Icons**: Bank-level security messaging
- **Legal Footer Links**: Easy access to policies

### Favicon ✅
- Professional gradient "A" logo
- SVG format (scalable)
- Blue-to-teal gradient matching brand
- Visible on all devices

## 🚀 Deployment Checklist

Before going live:

**EmailJS Setup:**
- [ ] Create EmailJS account
- [ ] Configure email templates
- [ ] Add service ID, template ID, public key
- [ ] Test form submissions

**Images:**
- [ ] Add hero background image
- [ ] Add testimonial photos (or use initials)
- [ ] Add product page images
- [ ] Optimize all images (WebP, <200KB)
- [ ] Add alt text for accessibility

**SEO:**
- [ ] Add Google Analytics tracking ID
- [ ] Create sitemap.xml
- [ ] Create robots.txt
- [ ] Submit to Google Search Console
- [ ] Add Open Graph social sharing image

**Favicon:**
- [ ] Generate multiple favicon sizes
- [ ] Add to public folder
- [ ] Test on mobile devices

**Content:**
- [ ] Update all contact information
- [ ] Replace placeholder addresses/phone numbers
- [ ] Review all legal pages
- [ ] Update company name throughout
- [ ] Test all links and forms

**Security:**
- [ ] Add SSL certificate
- [ ] Enable HTTPS
- [ ] Test form security
- [ ] Review privacy policy accuracy

## 📱 Production-Ready Features

✅ **Fully Functional**
- Multi-step application form with EmailJS
- Contact form with EmailJS integration
- Click-to-call phone numbers
- Smooth scroll animations (Framer Motion)
- Live chat widget (Tawk.to)
- Responsive design (mobile/tablet/desktop)
- All internal links working
- Legal pages (Privacy, Terms)
- Trust badges and security icons
- SEO meta tags and favicon

🎯 **Ready to Launch**
Just add:
1. Your EmailJS credentials
2. Professional stock images
3. Your company information
4. Deploy to hosting

## 📄 License

This project is private and proprietary.

## 👥 Support

For support, email david@anchorfundingusa.com or call (646) 993-6971

---

Built with ❤️ for Anchor Funding
