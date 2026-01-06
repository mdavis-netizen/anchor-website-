# 📄 Page Documentation - Anchor Funding

Complete guide to all pages in the Anchor Funding website.

## 🏠 Main Pages

### Home Page (`/`)
**File:** `src/pages/Home.jsx`

**Sections:**
- Hero section with gradient background and CTA buttons
- Stats section (4 key metrics)
- Features section (4 key benefits)
- Benefits section with checklist and application process
- Testimonials section (3 client success stories)
- Call-to-action section

**Key Elements:**
- Dynamic testimonial cards with ratings
- Step-by-step application process
- Links to Apply page and Services

### About Page (`/about`)
**File:** `src/pages/About.jsx`

**Sections:**
- Hero section with company introduction
- Company story (narrative text)
- What Drives Us (4 core values)
- Our Journey (timeline from 2015-2024)
- Stats section (achievements)

**Key Elements:**
- Icon-based value propositions
- Timeline visualization
- Achievement metrics

### Services Page (`/services`)
**File:** `src/pages/Services.jsx`

**Sections:**
- Hero section
- Services grid (6 funding products)
- Product comparison table
- Requirements section
- Industries served
- Call-to-action

**Key Elements:**
- 6 product cards with links to individual pages
- Interactive comparison table
- Industry tags

**Products Listed:**
1. SBA Loans
2. Merchant Cash Advance
3. Business Loans
4. Line of Credit
5. Loan Consolidation
6. Term Loans

### Apply Now Page (`/apply`)
**File:** `src/pages/Apply.jsx`

**Multi-Step Form with 5 Steps:**

**Step 1: Business Information**
- Legal business name
- Business type (LLC, Corporation, etc.)
- Industry
- EIN (Tax ID)
- Years in business
- Business phone
- Business address (full address)

**Step 2: Owner Information**
- Full name
- Email address
- Phone number
- Social Security Number
- Date of birth
- Ownership percentage

**Step 3: Funding Details**
- Funding amount needed
- Product type selection
- Desired term length
- Purpose of funds (textarea)

**Step 4: Financial Information**
- Annual revenue
- Average monthly revenue
- Personal credit score
- Existing business debt
- Primary bank name
- Months with current bank

**Step 5: Review & Submit**
- Summary of all information
- Terms and conditions checkbox
- Submit button

**Key Features:**
- Progress bar showing current step
- Back/Next navigation
- Form validation
- Visual step indicators
- Trust indicators below form

### Contact Page (`/contact`)
**File:** `src/pages/Contact.jsx`

**Sections:**
- Hero section
- Contact information sidebar (phone, email, address, hours)
- Contact form
- FAQ section (4 common questions)

**Form Fields:**
- Full name
- Email address
- Phone number
- Company name
- Funding amount dropdown
- Message textarea

## 🏷️ Product Pages

All product pages follow a similar structure with customized content.

### SBA Loans (`/products/sba-loans`)
**File:** `src/pages/products/SBALoans.jsx`

**Details:**
- Loan amounts: $50K to $5M
- Interest rates: 6-10%
- Terms: 10-25 years
- Government-backed security

**Sections:**
- Hero with product highlights
- Key benefits (4 metrics)
- Features and requirements
- Use cases
- Application process (4 steps)
- CTA section

### Merchant Cash Advance (`/products/mca`)
**File:** `src/pages/products/MCA.jsx`

**Details:**
- Advance amounts: $5K to $500K
- Approval: 24 hours
- Repayment: Daily percentage of credit card sales
- No fixed monthly payments

**Sections:**
- Hero section
- Key stats
- Benefits (3 main advantages)
- Features and requirements
- How it works

### Business Loans (`/products/business-loans`)
**File:** `src/pages/products/BusinessLoans.jsx`

**Details:**
- Loan amounts: $10K to $500K
- Interest rates: 8-18%
- Terms: 3 to 36 months
- Fixed monthly payments

**Sections:**
- Hero section
- Key stats
- Features and requirements
- Use cases
- Why choose section

### Line of Credit (`/products/line-of-credit`)
**File:** `src/pages/products/LineOfCredit.jsx`

**Details:**
- Credit limits: $10K to $250K
- Revolving credit structure
- Pay interest only on what you use
- Reuse as you repay

**Sections:**
- Hero section
- Key stats
- Benefits
- Features and requirements
- Use cases
- How it works (4 steps)

### Loan Consolidation (`/products/loan-consolidation`)
**File:** `src/pages/products/LoanConsolidation.jsx`

**Details:**
- Consolidate multiple business debts
- Lower monthly payments
- Reduce interest rates
- Simplify financial management

**Sections:**
- Hero section
- Potential savings calculator
- Benefits
- Features and requirements
- Debt types we consolidate
- Before/After comparison
- Process steps

### Term Loans (`/products/term-loans`)
**File:** `src/pages/products/TermLoans.jsx`

**Details:**
- Loan amounts: $25K to $500K
- Fixed rates: 9-16%
- Terms: 6 to 60 months
- Predictable monthly payments

**Sections:**
- Hero section
- Key stats
- Term length options (Short, Mid, Long)
- Features and requirements
- Use cases
- Advantages
- Comparison table

## 🧭 Navigation

### Header Navigation
**File:** `src/components/Header.jsx`

**Desktop Menu:**
- Home
- About
- Services
- Contact
- Apply Now (CTA button)

**Mobile Menu:**
- Hamburger icon
- Slide-out navigation
- Same links as desktop

### Footer
**File:** `src/components/Footer.jsx`

**Sections:**
- Company info with logo
- Quick links
- Services list
- Contact information
- Social media links
- Copyright notice

## 🎨 Design Elements

### Color Scheme
- Primary Blue: `#1e40af` (anchor-blue)
- Navy: `#1e3a8a` (anchor-navy)
- Teal: `#0d9488` (anchor-teal)

### Typography
- Font Family: Inter
- Headings: Bold
- Body: Regular to Medium

### Components
- **Buttons:**
  - `.btn-primary` - Blue background, white text
  - `.btn-secondary` - White background, blue text with border

- **Sections:**
  - `.section-container` - Max-width container with padding

### Icons
Using Lucide React for all icons throughout the site.

## 📱 Responsive Behavior

All pages are fully responsive:
- **Mobile (< 768px):** Single column layouts, hamburger menu
- **Tablet (768px - 1024px):** 2-column grids where applicable
- **Desktop (> 1024px):** Full multi-column layouts, all features visible

## 🔗 Internal Linking

**Common Paths:**
- Home to Apply: Hero CTA, Testimonials CTA
- Services to Products: Product cards link to individual pages
- Products to Apply: CTAs on every product page
- Any page to Contact: Footer links

## 📝 Content Guidelines

### Updating Content:
1. **Stats:** Update numbers in respective page files
2. **Testimonials:** Modify testimonials array in Home.jsx
3. **Product details:** Edit features/requirements arrays in product pages
4. **Contact info:** Update in Contact.jsx and Footer.jsx

### Adding New Pages:
1. Create page component in `src/pages/`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/components/Header.jsx` if needed
4. Update Footer links if applicable

## ✅ SEO Considerations

- Semantic HTML structure
- Proper heading hierarchy (h1, h2, h3)
- Descriptive link text
- Alt text ready for images (when added)
- Meta tags can be added to index.html or using React Helmet

---

**Total Pages:** 11 (5 main pages + 6 product pages)
**Total Routes:** 11 unique paths
