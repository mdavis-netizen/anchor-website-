# 📧 EmailJS Setup Guide for Anchor Funding

Complete guide to integrate EmailJS with the application form.

## 🚀 Quick Setup (5 Minutes)

### Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click **"Sign Up"** (it's FREE - up to 200 emails/month)
3. Confirm your email address

### Step 2: Connect Your Email Service

1. In EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended for testing)
   - Outlook
   - Yahoo
   - Or use EmailJS's own email service
4. Follow the connection steps
5. **Copy your Service ID** (e.g., `service_abc1234`)

### Step 3: Create Email Template

1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Use this template content:

#### Template Name
```
Business Funding Application
```

#### Subject Line
```
New Funding Application from {{business_name}}
```

#### Template Content
```
NEW FUNDING APPLICATION RECEIVED
================================

BUSINESS INFORMATION
--------------------
Business Name: {{business_name}}
Business Type: {{business_type}}
Industry: {{industry}}
EIN: {{ein}}
Years in Business: {{years_in_business}}
Phone: {{business_phone}}
Address: {{business_address}}

OWNER INFORMATION
-----------------
Name: {{owner_name}}
Email: {{owner_email}}
Phone: {{owner_phone}}
Ownership: {{ownership_percentage}}%

FUNDING DETAILS
---------------
Amount Requested: {{funding_amount}}
Product Type: {{product_type}}
Desired Term: {{desired_term}}
Purpose: {{funding_purpose}}

FINANCIAL INFORMATION
---------------------
Annual Revenue: {{annual_revenue}}
Monthly Revenue: {{monthly_revenue}}
Credit Score: {{credit_score}}
Existing Debt: {{existing_debt}}
Bank: {{bank_name}}
Months with Bank: {{months_with_bank}}

SUBMISSION INFO
---------------
Submitted: {{submission_date}}

---
This application was submitted through anchorfunding.com
```

4. **Save the template**
5. **Copy your Template ID** (e.g., `template_xyz5678`)

### Step 4: Get Your Public Key

1. Go to **"Account"** → **"General"**
2. Find **"Public Key"** section
3. **Copy your Public Key** (e.g., `ABCdefGHI123jkl`)

### Step 5: Update the Application Code

Open `src/pages/Apply.jsx` and replace these lines (around line 89-91):

```javascript
// REPLACE THESE VALUES:
const serviceID = 'YOUR_SERVICE_ID'      // Replace with your Service ID
const templateID = 'YOUR_TEMPLATE_ID'    // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY'      // Replace with your Public Key
```

With your actual values:

```javascript
const serviceID = 'service_abc1234'      // Your actual Service ID
const templateID = 'template_xyz5678'    // Your actual Template ID
const publicKey = 'ABCdefGHI123jkl'      // Your actual Public Key
```

## ✅ Testing

1. Start your development server: `npm run dev`
2. Go to the Apply page: `http://localhost:5173/apply`
3. Fill out the form (use test data)
4. Submit the application
5. Check your email inbox (the one connected to EmailJS)
6. You should receive the application details!

## 🎨 Customization Options

### Change Recipient Email

By default, emails go to the email you used to sign up. To change:

1. In EmailJS dashboard → **Email Services**
2. Edit your service
3. Change the **"To Email"** address

### Send to Multiple Recipients

In your email template settings:

1. Go to **Email Templates** → Edit your template
2. In **Settings** → **To email**
3. Add multiple emails separated by commas:
   ```
   sales@anchorfunding.com, applications@anchorfunding.com
   ```

### Auto-Reply to Applicant

Create a second template for confirmation emails:

1. Create new template: **"Application Confirmation"**
2. Subject: `Your Funding Application - Anchor Funding`
3. To: `{{owner_email}}` (uses applicant's email)
4. Content:
```
Dear {{owner_name}},

Thank you for applying for funding with Anchor Funding!

We have received your application for {{funding_amount}} and will review it within 24 hours.

Application Details:
- Business: {{business_name}}
- Amount: {{funding_amount}}
- Product: {{product_type}}

Our funding specialists will contact you at {{owner_phone}} or {{owner_email}} soon.

Best regards,
Anchor Funding Team
(555) 123-4567
info@anchorfunding.com
```

5. In `Apply.jsx`, add a second email send after the first:

```javascript
// Send confirmation to applicant
await emailjs.send(
  serviceID,
  'template_confirmation_id', // Your confirmation template ID
  templateParams,
  publicKey
)
```

## 🔧 Advanced Configuration

### Add Email Attachments

EmailJS Pro ($15/month) allows attachments. To add:

```javascript
const templateParams = {
  // ... existing params
  attachment: fileData, // Base64 encoded file
}
```

### Send to Different Services Based on Amount

```javascript
let serviceID = 'service_small_loans'
if (formData.fundingAmount.includes('250k+')) {
  serviceID = 'service_large_loans'
}
```

### Add Spam Protection

Install reCAPTCHA:
```bash
npm install react-google-recaptcha
```

Add to form before submit.

## 📊 Email Limits

**Free Plan:**
- 200 emails/month
- 2 email templates
- 1 email service

**Personal Plan ($8/month):**
- 1,000 emails/month
- Unlimited templates
- Unlimited services
- Auto-reply support

**Pro Plan ($15/month):**
- 10,000 emails/month
- Priority support
- File attachments
- Custom SMTP

## 🐛 Troubleshooting

### Error: "Service ID not found"
- Double-check you copied the correct Service ID from dashboard
- Make sure the service is active (not paused)

### Error: "Template ID not found"
- Verify Template ID is correct
- Make sure template variables match ({{business_name}}, etc.)

### Emails not arriving
1. Check spam folder
2. Verify email service is connected properly
3. Check EmailJS dashboard logs
4. Test with EmailJS "Test Email" feature first

### Form submits but no email
1. Open browser console (F12) to check for errors
2. Verify Public Key is correct
3. Check network tab for EmailJS API response
4. Ensure all template variables are spelled correctly

## 🔐 Security Notes

1. **Public Key is safe** - It's designed to be public (client-side)
2. **Service ID is safe** - Also designed to be public
3. **Template ID is safe** - Also public
4. **Never expose** - Private keys, email passwords, API secrets

The EmailJS public key only allows sending to YOUR templates, so it's safe in client-side code.

## 📱 Alternative: Formspree

If you prefer Formspree instead:

1. Go to [Formspree.io](https://formspree.io/)
2. Create free account
3. Create a form, get endpoint URL
4. Replace EmailJS code with:

```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
```

## 📞 Support

- **EmailJS Documentation**: [docs.emailjs.com](https://www.emailjs.com/docs/)
- **EmailJS Support**: support@emailjs.com
- **Status Page**: [status.emailjs.com](https://status.emailjs.com/)

## ✨ Next Steps

After setup:
1. Test with real email addresses
2. Customize email template design
3. Add auto-reply confirmation
4. Monitor EmailJS dashboard for delivery stats
5. Consider upgrading plan if you expect high volume

---

**Setup Time**: ~5 minutes  
**Cost**: FREE (up to 200 emails/month)  
**Difficulty**: Easy 🟢

Once configured, the form will automatically email applications to your inbox!
