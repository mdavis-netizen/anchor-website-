import { useState } from 'react'
import { CheckCircle, ArrowRight, ArrowLeft, Building2, User, DollarSign, FileText, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Apply = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [formData, setFormData] = useState({
    // Business Information
    businessName: '',
    businessType: '',
    industry: '',
    ein: '',
    yearsInBusiness: '',
    businessPhone: '',
    businessAddress: '',
    city: '',
    state: '',
    zipCode: '',
    // Owner Information
    ownerName: '',
    ownerEmail: '',
    ownerPhone: '',
    ownerSSN: '',
    ownerDOB: '',
    ownershipPercentage: '',
    // Funding Details
    fundingAmount: '',
    fundingPurpose: '',
    productType: '',
    desiredTerm: '',
    // Financial Information
    annualRevenue: '',
    monthlyRevenue: '',
    creditScore: '',
    existingDebt: '',
    bankName: '',
    monthsWithBank: '',
  })

  const totalSteps = 5

  const steps = [
    { number: 1, title: 'Business Info', icon: <Building2 size={20} /> },
    { number: 2, title: 'Owner Info', icon: <User size={20} /> },
    { number: 3, title: 'Funding Details', icon: <DollarSign size={20} /> },
    { number: 4, title: 'Financial Info', icon: <FileText size={20} /> },
    { number: 5, title: 'Review', icon: <CheckCircle size={20} /> },
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // EmailJS configuration
      // Replace these with your actual EmailJS credentials
      const serviceID = 'YOUR_SERVICE_ID' // Get from EmailJS dashboard
      const templateID = 'YOUR_TEMPLATE_ID' // Get from EmailJS dashboard
      const publicKey = 'YOUR_PUBLIC_KEY' // Get from EmailJS dashboard

      // Format the data for the email template
      const templateParams = {
        // Business Information
        business_name: formData.businessName,
        business_type: formData.businessType,
        industry: formData.industry,
        ein: formData.ein,
        years_in_business: formData.yearsInBusiness,
        business_phone: formData.businessPhone,
        business_address: `${formData.businessAddress}, ${formData.city}, ${formData.state} ${formData.zipCode}`,
        
        // Owner Information
        owner_name: formData.ownerName,
        owner_email: formData.ownerEmail,
        owner_phone: formData.ownerPhone,
        ownership_percentage: formData.ownershipPercentage,
        
        // Funding Details
        funding_amount: formData.fundingAmount,
        product_type: formData.productType,
        desired_term: formData.desiredTerm,
        funding_purpose: formData.fundingPurpose,
        
        // Financial Information
        annual_revenue: formData.annualRevenue,
        monthly_revenue: formData.monthlyRevenue,
        credit_score: formData.creditScore,
        existing_debt: formData.existingDebt,
        bank_name: formData.bankName,
        months_with_bank: formData.monthsWithBank,
        
        // Additional info
        submission_date: new Date().toLocaleString(),
      }

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      )

      if (response.status === 200) {
        setSubmitStatus('success')
        // Reset form after successful submission
        setTimeout(() => {
          window.location.href = '/contact?success=true'
        }, 3000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section with Background */}
      <section className="relative bg-gradient-to-br from-anchor-navy to-anchor-blue text-white py-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2400&auto=format&fit=crop" 
            alt="Confident business owner ready to grow" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Apply for Funding
            </h1>
            <p className="text-xl text-blue-100">
              Complete your application in minutes and get approved within 2 hours during business hours
            </p>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="bg-white border-b sticky top-20 z-40">
        <div className="section-container py-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                        currentStep === step.number
                          ? 'bg-anchor-blue text-white scale-110'
                          : currentStep > step.number
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {currentStep > step.number ? (
                        <CheckCircle size={24} />
                      ) : (
                        step.icon
                      )}
                    </div>
                    <div className="mt-2 text-xs md:text-sm font-medium text-center">
                      {step.title}
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="flex-1 h-1 mx-2 bg-gray-200 hidden md:block">
                      <div
                        className={`h-full transition-all duration-300 ${
                          currentStep > step.number ? 'bg-green-500' : 'bg-gray-200'
                        }`}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form Content */}
      <section className="py-12">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Business Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Business Information</h2>
                      <p className="text-gray-600">Tell us about your business</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Legal Business Name *
                        </label>
                        <input
                          type="text"
                          name="businessName"
                          required
                          value={formData.businessName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-anchor-blue focus:border-transparent outline-none"
                          placeholder="ABC Company LLC"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Business Type *
                        </label>
                        <select
                          name="businessType"
                          required
                          value={formData.businessType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-anchor-blue focus:border-transparent outline-none"
                        >
                          <option value="">Select type</option>
                          <option value="llc">LLC</option>
                          <option value="corporation">Corporation</option>
                          <option value="partnership">Partnership</option>
                          <option value="sole-proprietor">Sole Proprietorship</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Industry *
                        </label>
                        <select
                          name="industry"
                          required
                          value={formData.industry}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-anchor-blue focus:border-transparent outline-none"
                        >
                          <option value="">Select industry</option>
                          <option value="retail">Retail & E-commerce</option>
                          <option value="restaurant">Restaurant & Food</option>
                          <option value="construction">Construction</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="professional">Professional Services</option>
                          <option value="manufacturing">Manufacturing</option>
                          <option value="transportation">Transportation</option>
                          <option value="technology">Technology</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          EIN (Tax ID) *
                        </label>
                        <input
                          type="text"
                          name="ein"
                          required
                          value={formData.ein}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-anchor-blue focus:border-transparent outline-none"
                          placeholder="XX-XXXXXXX"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Years in Business *
                        </label>
                        <input
                          type="number"
                          name="yearsInBusiness"
                          required
                          value={formData.yearsInBusiness}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-anchor-blue focus:border-transparent outline-none"
                          placeholder="2"
                          min="0"
                          step="0.5"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Business Phone *
                        </label>
                        <input
                          type="tel"
                          name="businessPhone"
                          required
                          value={formData.businessPhone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-anchor-blue focus:border-transparent outline-none"
                          placeholder="(646) 993-6971"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Business Address *
                        </label>
                        <input
                          type="text"
                          name="businessAddress"
                          required
                          value={formData.businessAddress}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-anchor-blue focus:border-transparent outline-none"
                          placeholder="123 Main Street"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-anchor-blue focus:border-transparent outline-none"
                          placeholder="New York"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          State *
                        </label>
                        <input
                          type="text"
                          name="state"
                          required
                          value={formData.state}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-anchor-blue focus:border-transparent outline-none"
                          placeholder="NY"
                          maxLength="2"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          ZIP Code *
                        </label>
                        <input
                          type="text"
                          name="zipCode"
                          required
                          value={formData.zipCode}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-anchor-blue focus:border-transparent outline-none"
                          placeholder="10001"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Owner Information */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Owner Information</h2>
                      <p className="text-gray-600">Tell us about the primary business owner</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="ownerName"
                          required
                          value={formData.ownerName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-anchor-blue focus:border-transparent outline-none"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="ownerEmail"
                          required
                          value={formData.ownerEmail}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-anchor-blue focus:border-transparent outline-none"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="ownerPhone"
                          required
                          value={formData.ownerPhone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-anchor-blue focus:border-transparent outline-none"
                          placeholder="(646) 993-6971"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Social Security Number *
                        </label>
                        <input
                          type="text"
                          name="ownerSSN"
                          required
                          value={formData.ownerSSN}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-anchor-blue focus:border-transparent outline-none"
                          placeholder="XXX-XX-XXXX"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Date of Birth *
                        </label>
                        <input
                          type="date"
                          name="ownerDOB"
                          required
                          value={formData.ownerDOB}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-anchor-blue focus:border-transparent outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Ownership Percentage *
                        </label>
                        <input
                          type="number"
                          name="ownershipPercentage"
                          required
                          value={formData.ownershipPercentage}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-anchor-blue focus:border-transparent outline-none"
                          placeholder="100"
                          min="0"
                          max="100"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Funding Details */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Funding Details</h2>
                      <p className="text-gray-600">Tell us about your funding needs</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Funding Amount Needed *
                        </label>
                        <select
                          name="fundingAmount"
                          required
                          value={formData.fundingAmount}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-anchor-blue focus:border-transparent outline-none"
                        >
                          <option value="">Select amount</option>
                          <option value="10k-25k">$10,000 - $25,000</option>
                          <option value="25k-50k">$25,000 - $50,000</option>
                          <option value="50k-100k">$50,000 - $100,000</option>
                          <option value="100k-250k">$100,000 - $250,000</option>
                          <option value="250k-500k">$250,000 - $500,000</option>
                          <option value="500k+">$500,000+</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Product Type *
                        </label>
                        <select
                          name="productType"
                          required
                          value={formData.productType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-anchor-blue focus:border-transparent outline-none"
                        >
                          <option value="">Select product</option>
                          <option value="business-loan">Business Loan</option>
                          <option value="sba-loan">SBA Loan</option>
                          <option value="mca">Merchant Cash Advance</option>
                          <option value="line-of-credit">Line of Credit</option>
                          <option value="term-loan">Term Loan</option>
                          <option value="loan-consolidation">Loan Consolidation</option>
                        </select>
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Desired Term Length
                        </label>
                        <select
                          name="desiredTerm"
                          value={formData.desiredTerm}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-anchor-blue focus:border-transparent outline-none"
                        >
                          <option value="">Select term (if applicable)</option>
                          <option value="3-6">3-6 months</option>
                          <option value="6-12">6-12 months</option>
                          <option value="12-24">12-24 months</option>
                          <option value="24-36">24-36 months</option>
                          <option value="36-60">36-60 months</option>
                        </select>
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          How will you use the funds? *
                        </label>
                        <textarea
                          name="fundingPurpose"
                          required
                          value={formData.fundingPurpose}
                          onChange={handleChange}
                          rows="4"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-anchor-blue focus:border-transparent outline-none resize-none"
                          placeholder="Describe how you plan to use the funding (e.g., inventory purchase, equipment, expansion, etc.)"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Financial Information */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Financial Information</h2>
                      <p className="text-gray-600">Help us understand your business finances</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Annual Revenue *
                        </label>
                        <select
                          name="annualRevenue"
                          required
                          value={formData.annualRevenue}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-anchor-blue focus:border-transparent outline-none"
                        >
                          <option value="">Select range</option>
                          <option value="50k-100k">$50K - $100K</option>
                          <option value="100k-250k">$100K - $250K</option>
                          <option value="250k-500k">$250K - $500K</option>
                          <option value="500k-1m">$500K - $1M</option>
                          <option value="1m-5m">$1M - $5M</option>
                          <option value="5m+">$5M+</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Average Monthly Revenue *
                        </label>
                        <input
                          type="text"
                          name="monthlyRevenue"
                          required
                          value={formData.monthlyRevenue}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-anchor-blue focus:border-transparent outline-none"
                          placeholder="$25,000"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Personal Credit Score *
                        </label>
                        <select
                          name="creditScore"
                          required
                          value={formData.creditScore}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-anchor-blue focus:border-transparent outline-none"
                        >
                          <option value="">Select range</option>
                          <option value="below-550">Below 550</option>
                          <option value="550-600">550 - 600</option>
                          <option value="600-650">600 - 650</option>
                          <option value="650-700">650 - 700</option>
                          <option value="700-750">700 - 750</option>
                          <option value="750+">750+</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Existing Business Debt
                        </label>
                        <select
                          name="existingDebt"
                          value={formData.existingDebt}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-anchor-blue focus:border-transparent outline-none"
                        >
                          <option value="">Select amount</option>
                          <option value="none">None</option>
                          <option value="under-25k">Under $25K</option>
                          <option value="25k-50k">$25K - $50K</option>
                          <option value="50k-100k">$50K - $100K</option>
                          <option value="100k-250k">$100K - $250K</option>
                          <option value="250k+">$250K+</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Primary Bank Name *
                        </label>
                        <input
                          type="text"
                          name="bankName"
                          required
                          value={formData.bankName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-anchor-blue focus:border-transparent outline-none"
                          placeholder="Bank of America"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Months with Current Bank *
                        </label>
                        <input
                          type="number"
                          name="monthsWithBank"
                          required
                          value={formData.monthsWithBank}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-anchor-blue focus:border-transparent outline-none"
                          placeholder="12"
                          min="0"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 5: Review & Submit */}
                {currentStep === 5 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Review Your Application</h2>
                      <p className="text-gray-600">Please review your information before submitting</p>
                    </div>

                    <div className="space-y-6">
                      {/* Business Information Summary */}
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                          <Building2 className="mr-2" size={20} />
                          Business Information
                        </h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-500">Business Name</p>
                            <p className="font-medium text-gray-900">{formData.businessName || '-'}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Industry</p>
                            <p className="font-medium text-gray-900">{formData.industry || '-'}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Years in Business</p>
                            <p className="font-medium text-gray-900">{formData.yearsInBusiness || '-'}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Business Type</p>
                            <p className="font-medium text-gray-900">{formData.businessType || '-'}</p>
                          </div>
                        </div>
                      </div>

                      {/* Owner Information Summary */}
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                          <User className="mr-2" size={20} />
                          Owner Information
                        </h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-500">Owner Name</p>
                            <p className="font-medium text-gray-900">{formData.ownerName || '-'}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Email</p>
                            <p className="font-medium text-gray-900">{formData.ownerEmail || '-'}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Phone</p>
                            <p className="font-medium text-gray-900">{formData.ownerPhone || '-'}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Ownership %</p>
                            <p className="font-medium text-gray-900">{formData.ownershipPercentage || '-'}%</p>
                          </div>
                        </div>
                      </div>

                      {/* Funding Details Summary */}
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                          <DollarSign className="mr-2" size={20} />
                          Funding Details
                        </h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-500">Funding Amount</p>
                            <p className="font-medium text-gray-900">{formData.fundingAmount || '-'}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Product Type</p>
                            <p className="font-medium text-gray-900">{formData.productType || '-'}</p>
                          </div>
                          <div className="col-span-2">
                            <p className="text-gray-500">Purpose</p>
                            <p className="font-medium text-gray-900">{formData.fundingPurpose || '-'}</p>
                          </div>
                        </div>
                      </div>

                      {/* Financial Information Summary */}
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                          <FileText className="mr-2" size={20} />
                          Financial Information
                        </h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-500">Annual Revenue</p>
                            <p className="font-medium text-gray-900">{formData.annualRevenue || '-'}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Credit Score</p>
                            <p className="font-medium text-gray-900">{formData.creditScore || '-'}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Primary Bank</p>
                            <p className="font-medium text-gray-900">{formData.bankName || '-'}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Existing Debt</p>
                            <p className="font-medium text-gray-900">{formData.existingDebt || '-'}</p>
                          </div>
                        </div>
                      </div>

                      {/* Terms & Conditions */}
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                        <div className="flex items-start space-x-3">
                          <input type="checkbox" required className="mt-1" />
                          <div className="text-sm text-gray-700">
                            <p className="font-medium mb-2">I agree to the following:</p>
                            <ul className="space-y-1 text-gray-600">
                              <li>• All information provided is accurate and complete</li>
                              <li>• Anchor Funding may verify information and run credit checks</li>
                              <li>• I authorize Anchor Funding to contact me about my application</li>
                              <li>• I have read and agree to the Terms of Service and Privacy Policy</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-8 pt-8 border-t">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      currentStep === 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                    disabled={currentStep === 1}
                  >
                    <ArrowLeft className="mr-2" size={20} />
                    Previous
                  </button>

                  {currentStep < totalSteps ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="btn-primary flex items-center"
                    >
                      Next
                      <ArrowRight className="ml-2" size={20} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`btn-primary flex items-center justify-center ${
                        isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2" size={20} />
                          Submit Application
                        </>
                      )}
                    </button>
                  )}
                </div>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="text-green-600 mr-3" size={24} />
                      <div>
                        <h4 className="text-green-800 font-semibold">Application Submitted Successfully!</h4>
                        <p className="text-green-700 text-sm mt-1">
                          Thank you for your application. Our team will review it and contact you within 2 hours during business hours.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center">
                      <div className="text-red-600 mr-3">✕</div>
                      <div>
                        <h4 className="text-red-800 font-semibold">Submission Failed</h4>
                        <p className="text-red-700 text-sm mt-1">
                          There was an error submitting your application. Please try again or contact us directly at (646) 993-6971.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <Clock className="w-10 h-10 text-anchor-teal mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">2-Hour Response</h3>
                <p className="text-sm text-gray-600">Applications during business hours reviewed within 2 hours</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <CheckCircle className="w-10 h-10 text-anchor-teal mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Secure & Confidential</h3>
                <p className="text-sm text-gray-600">Your information is encrypted and protected</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <User className="w-10 h-10 text-anchor-teal mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Expert Support</h3>
                <p className="text-sm text-gray-600">Dedicated specialists guide you through the process</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Apply
