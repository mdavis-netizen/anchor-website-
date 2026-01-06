# 💬 Tawk.to Live Chat Setup Guide

Quick guide to add live chat to your Anchor Funding website.

## 🚀 Setup (5 Minutes)

### Step 1: Create Tawk.to Account

1. Go to [Tawk.to](https://www.tawk.to/)
2. Click **"Sign Up Free"** (100% FREE forever!)
3. Create your account

### Step 2: Add Your Website

1. After logging in, go to **Administration** → **Property**
2. Click **"Add Property"**
3. Enter your website details:
   - **Property Name:** Anchor Funding
   - **Property URL:** your-domain.com (or localhost:5173 for testing)
4. Click **"Add Property"**

### Step 3: Get Your Widget Code

1. Go to **Administration** → **Chat Widget**
2. You'll see your widget code that looks like:
```javascript
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
```

### Step 4: Update Your Website

Open `index.html` and find this section (around line 14):

```html
<!-- Tawk.to Live Chat Widget -->
<script type="text/javascript">
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
  })();
</script>
```

**Replace** `YOUR_PROPERTY_ID/YOUR_WIDGET_ID` with your actual IDs from step 3.

Example:
```javascript
s1.src='https://embed.tawk.to/507f1f77bcf86cd799439011/default';
```

### Step 5: Test It!

1. Save the file
2. Refresh your website
3. You should see a chat widget in the bottom-right corner! 💬

---

## 🎨 Customize Your Widget

### Change Widget Appearance

1. Go to **Administration** → **Chat Widget**
2. Click **"Widget Appearance"**
3. Customize:
   - Widget color (match your brand: #1e40af for anchor-blue)
   - Widget position (default: bottom-right)
   - Widget size
   - Chat bubble text
   - Welcome message

### Set Business Hours

1. Go to **Administration** → **Property**
2. Click **"Settings"**
3. Set your business hours:
   - Example: Mon-Fri, 9 AM - 6 PM EST
4. Configure away message for off-hours

### Pre-Chat Form

1. Go to **Administration** → **Chat Widget**
2. Click **"Pre-Chat Form"**
3. Enable to collect visitor info before chat:
   - Name
   - Email
   - Phone
   - Funding amount needed
4. This helps qualify leads!

---

## 📱 Mobile App

Download Tawk.to mobile apps to chat on-the-go:
- **iOS:** [App Store](https://apps.apple.com/app/tawk-to/id684785907)
- **Android:** [Google Play](https://play.google.com/store/apps/details?id=to.tawk.app)

Get instant notifications when visitors start chatting!

---

## ⚙️ Advanced Features

### Triggers & Automation

Set up automatic messages:

**Example 1: Greet visitors after 10 seconds**
```
Trigger: Visitor on page for 10 seconds
Action: Send message "Hi! Need help finding the right funding option?"
```

**Example 2: Exit intent**
```
Trigger: Mouse moves to close tab
Action: Send message "Wait! Have questions? We're here to help!"
```

### Canned Responses

Create quick replies for common questions:
- "What are your business hours?"
- "What funding options do you offer?"
- "How long does approval take?"
- "What are the requirements?"

### Shortcuts

Set up shortcuts for your team:
- `#hours` → "We're open Mon-Fri, 9 AM - 6 PM EST"
- `#rates` → "Rates range from 6-18% depending on the product"
- `#apply` → "You can apply here: [link to /apply]"

### Knowledge Base Integration

Create articles for common questions:
1. Go to **Knowledge Base**
2. Create categories (SBA Loans, MCA, etc.)
3. Write help articles
4. Articles show in chat widget search

---

## 👥 Add Team Members

1. Go to **Administration** → **Agents**
2. Click **"Add Agent"**
3. Enter email addresses of team members
4. Set permissions:
   - **Admin:** Full control
   - **Agent:** Can chat only
   - **Monitor:** Can view chats only

---

## 📊 Analytics & Reporting

### View Chat Statistics

1. Go to **Dashboard**
2. See metrics:
   - Total chats
   - Response time
   - Chat duration
   - Visitor locations
   - Pages visited

### Generate Reports

1. Go to **Reporting** → **Chat Reports**
2. Export data for analysis
3. Track conversion rates

---

## 🔧 Integrations

Tawk.to integrates with:
- **Slack** - Get notifications in Slack
- **Google Analytics** - Track chat events
- **Zapier** - Connect to 5000+ apps
- **Shopify** - E-commerce integration
- **WordPress** - Plugin available
- **CRM** - Salesforce, HubSpot, etc.

---

## 💡 Best Practices

### Response Time
- **Goal:** Under 30 seconds
- Set up mobile notifications
- Use canned responses for speed
- Enable auto-assignment to available agents

### Chat Availability
- Show online/offline status
- Set expectations for response time
- Offer form for off-hours inquiries

### Qualifying Leads
1. Ask about funding needs early
2. Collect contact info
3. Tag chats (hot-lead, cold-lead, etc.)
4. Follow up within 24 hours

### Professional Communication
- Use proper grammar
- Be friendly but professional
- Personalize responses
- End with clear next steps

---

## 🎯 Widget Positioning

### Default Position
Bottom-right corner is standard and works great.

### Alternative Positions
If you prefer, you can change to:
- Bottom-left
- Top-right
- Top-left

**To change:**
1. Go to **Widget Appearance**
2. Select position
3. Adjust margins if needed

---

## 🔒 Privacy & Security

### GDPR Compliant
- Tawk.to is GDPR compliant
- Add privacy notice to pre-chat form
- Visitors can request data deletion

### Data Security
- All chats are encrypted
- Secure data centers
- Regular security audits
- HIPAA compliance available (paid plans)

---

## 📞 Pricing

**FREE Plan (Recommended):**
- ✅ Unlimited agents
- ✅ Unlimited chats
- ✅ Mobile apps
- ✅ Triggers & automation
- ✅ File sharing
- ✅ Screen sharing
- ✅ Visitor monitoring
- ✅ Chat history
- ✅ Knowledge base
- ✅ No Tawk.to branding

**Paid Options:**
- **Remove branding:** $19/month
- **Hire chat agents:** Starting at $1/hour
- **Video/audio calls:** $29/month per agent

---

## 🐛 Troubleshooting

### Widget Not Showing?

**Check:**
1. Is the script in `index.html` between `<body>` tags?
2. Did you replace YOUR_PROPERTY_ID/YOUR_WIDGET_ID?
3. Try hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
4. Check browser console for errors (F12)

### Widget Showing But Not Working?

**Try:**
1. Log into Tawk.to dashboard
2. Go to **Monitoring** → **Visitors**
3. See if your visit is tracked
4. Test with different browser
5. Disable browser extensions (adblockers)

### Can't Receive Messages?

**Check:**
1. Are you logged into the dashboard?
2. Is the mobile app installed?
3. Are notifications enabled?
4. Check spam folder for email notifications

---

## ✨ Pro Tips

### 1. Customize Chat Bubble
Change the default "Hi there 👋" to something specific:
- "Need Funding? Let's Chat!"
- "Questions? We're Here!"
- "Get Approved in 24hrs"

### 2. Set Up Departments
If you have multiple teams:
- **Sales** - New inquiries
- **Support** - Existing clients
- **Applications** - Application help

### 3. Use Visitor Notes
Add notes to visitor profiles:
- Interested in SBA loans
- Budget: $100K-$250K
- Follow up: Tomorrow

### 4. Tag Conversations
Create tags for easy filtering:
- hot-lead
- follow-up-needed
- converted
- information-only

### 5. Integrate with EmailJS
When chat ends, you can:
1. Get email via Tawk.to
2. Send follow-up via EmailJS
3. Track in CRM

---

## 📈 Maximize Conversions

### Welcome Message
```
"Hi! 👋 Looking for business funding?

I can help you:
✅ Find the right product
✅ Check eligibility
✅ Start your application

What brings you here today?"
```

### Qualifying Questions
1. "What's your business looking to fund?"
2. "How much capital do you need?"
3. "How long have you been in business?"
4. "What's your timeline?"

### Closing
```
"Great! I can definitely help with that.

Would you like to:
1. Start an application now?
2. Schedule a call with a specialist?
3. Receive more information by email?"
```

---

## 🎓 Training Resources

- **Tawk.to University:** Free video tutorials
- **Help Center:** docs.tawk.to
- **Community Forum:** community.tawk.to
- **YouTube Channel:** Tawk.to tutorials

---

## 📞 Tawk.to Support

- **Email:** support@tawk.to
- **Chat:** Available on tawk.to (they use their own product!)
- **Response Time:** Usually within 24 hours

---

## ✅ Quick Checklist

- [ ] Created Tawk.to account
- [ ] Added property
- [ ] Copied widget code
- [ ] Updated index.html with IDs
- [ ] Tested widget appears
- [ ] Customized appearance (color, position)
- [ ] Set business hours
- [ ] Configured pre-chat form
- [ ] Downloaded mobile app
- [ ] Set up canned responses
- [ ] Added team members (if applicable)
- [ ] Configured triggers
- [ ] Tested receiving messages

---

## 🎉 You're All Set!

Once configured, the live chat widget will appear on all pages of your website, allowing visitors to get instant answers to their questions!

**Benefits:**
- ✅ Instant customer support
- ✅ Higher conversion rates
- ✅ Qualify leads in real-time
- ✅ Build trust with visitors
- ✅ 24/7 availability with mobile app
- ✅ Professional appearance

---

**Setup Time:** ~5 minutes  
**Cost:** FREE forever  
**Difficulty:** Very Easy 🟢

Start chatting with your visitors today! 💬
