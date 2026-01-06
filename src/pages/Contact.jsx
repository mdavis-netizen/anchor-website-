import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    fundingAmount: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // EmailJS configuration - use same credentials as Apply form
      const serviceID = 'YOUR_SERVICE_ID' // Same as Apply form
      const templateID = 'YOUR_CONTACT_TEMPLATE_ID' // Create a separate template for contact
      const publicKey = 'YOUR_PUBLIC_KEY' // Same as Apply form

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        funding_amount: formData.fundingAmount,
        message: formData.message,
        submission_date: new Date().toLocaleString(),
      }

      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      )

      if (response.status === 200) {
        setSubmitStatus('success')
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          fundingAmount: '',
          message: '',
        })
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: '(646) 993-6971',
      subdetails: 'Mon-Fri 9am-6pm EST',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: 'david@anchorfundingusa.com',
      subdetails: 'We reply within 24 hours',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      details: '123 Financial District',
      subdetails: 'New York, NY 10004',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      details: 'Monday - Friday',
      subdetails: '9:00 AM - 6:00 PM EST',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-anchor-navy to-anchor-blue text-white py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-blue-100">
              Ready to take your business to the next level? Contact us today for a free consultation and funding quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-anchor-blue text-white rounded-lg p-3 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{info.title}</h3>
                      <p className="text-gray-700">{info.details}</p>
                      <p className="text-gray-500 text-sm">{info.subdetails}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3">Quick Response</h3>
                <p className="text-gray-600 text-sm">
                  We understand that timing is crucial for your business. Our team is committed to responding to all inquiries within 24 hours, typically much sooner.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Request a Free Consultation
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-anchor-blue focus:border-transparent outline-none transition"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-anchor-blue focus:border-transparent outline-none transition"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-anchor-blue focus:border-transparent outline-none transition"
                        placeholder="(646) 993-6971"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-anchor-blue focus:border-transparent outline-none transition"
                        placeholder="Your Company LLC"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="fundingAmount" className="block text-sm font-medium text-gray-700 mb-2">
                      Funding Amount Needed
                    </label>
                    <select
                      id="fundingAmount"
                      name="fundingAmount"
                      value={formData.fundingAmount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-anchor-blue focus:border-transparent outline-none transition"
                    >
                      <option value="">Select an amount</option>
                      <option value="10k-50k">$10,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-250k">$100,000 - $250,000</option>
                      <option value="250k-500k">$250,000 - $500,000</option>
                      <option value="500k+">$500,000+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us about your business and funding needs
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-anchor-blue focus:border-transparent outline-none transition resize-none"
                      placeholder="Describe your business and what you plan to use the funding for..."
                    ></textarea>
                  </div>

                  <div>
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className={`btn-primary w-full flex items-center justify-center ${
                        isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2" size={20} />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center">
                        <CheckCircle className="text-green-600 mr-3" size={24} />
                        <div>
                          <h4 className="text-green-800 font-semibold">Message Sent Successfully!</h4>
                          <p className="text-green-700 text-sm mt-1">
                            Thank you for contacting us. We'll get back to you within 24 hours.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center">
                        <div className="text-red-600 mr-3">✕</div>
                        <div>
                          <h4 className="text-red-800 font-semibold">Submission Failed</h4>
                          <p className="text-red-700 text-sm mt-1">
                            There was an error sending your message. Please call us at (646) 993-6971.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How long does the approval process take?
                </h3>
                <p className="text-gray-600">
                  Most applications are reviewed within 24 hours. Once approved, funding can be deposited into your account within 1-3 business days.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What documents do I need to apply?
                </h3>
                <p className="text-gray-600">
                  Typically, we need basic business information, recent bank statements (3-6 months), and a valid ID. Additional documents may be requested based on your specific situation.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can I get funding with bad credit?
                </h3>
                <p className="text-gray-600">
                  Yes! We work with businesses of all credit profiles. While credit is a factor, we also consider your revenue, time in business, and overall business health.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Are there any upfront fees?
                </h3>
                <p className="text-gray-600">
                  No, we never charge upfront fees. You only pay if you accept our funding offer and receive the funds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
