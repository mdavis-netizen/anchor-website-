import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, DollarSign, Clock, RefreshCw, Wallet } from 'lucide-react'

const LineOfCredit = () => {
  const features = [
    'Credit lines from $10K to $250K',
    'Draw funds as needed',
    'Only pay interest on what you use',
    'Revolving credit structure',
    'Quick access to funds',
    'Renew as you repay',
  ]

  const requirements = [
    'At least 1 year in business',
    'Minimum $150K annual revenue',
    'Credit score 620+',
    'Strong cash flow',
    'Current financial statements',
    'Personal guarantee',
  ]

  const benefits = [
    {
      icon: <RefreshCw className="w-8 h-8 text-anchor-teal" />,
      title: 'Revolving Credit',
      description: 'Access funds repeatedly as you pay down your balance',
    },
    {
      icon: <Wallet className="w-8 h-8 text-anchor-teal" />,
      title: 'Pay for What You Use',
      description: 'Only pay interest on the funds you actually draw',
    },
    {
      icon: <Clock className="w-8 h-8 text-anchor-teal" />,
      title: 'Always Available',
      description: 'Funds ready when you need them for emergencies or opportunities',
    },
  ]

  const useCases = [
    'Managing cash flow gaps',
    'Seasonal inventory',
    'Emergency expenses',
    'Taking advantage of opportunities',
    'Bridging payment delays',
    'Short-term working capital',
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-indigo-700 to-blue-600 text-white py-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-semibold">Revolving Credit</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Business Line of Credit
            </h1>
            <p className="text-xl text-indigo-100 mb-8">
              Flexible revolving credit that's there when you need it. Perfect for managing cash flow and unexpected expenses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/apply" className="btn-primary">
                Apply Now <ArrowRight className="inline ml-2" size={20} />
              </Link>
              <Link to="/contact" className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-indigo-800">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-indigo-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Up to $250K</h3>
              <p className="text-gray-600 text-sm">Credit Limit</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Revolving</h3>
              <p className="text-gray-600 text-sm">Credit Type</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">24-48 Hours</h3>
              <p className="text-gray-600 text-sm">Approval Time</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Wallet className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">As Needed</h3>
              <p className="text-gray-600 text-sm">Draw Funds</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why a Line of Credit is Perfect for Your Business
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Requirements */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Credit Line Features
              </h2>
              <div className="bg-gray-50 rounded-xl p-8">
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Basic Requirements
              </h2>
              <div className="bg-gray-50 rounded-xl p-8">
                <ul className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Common Uses for a Line of Credit
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Flexible funding for various business situations
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <p className="font-semibold">{useCase}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            How It Works
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-2xl shadow-xl p-8 md:p-12 text-white">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-white text-indigo-600 rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Get Approved</h3>
                    <p className="text-indigo-100">Apply and get approved for your credit limit based on your business financials.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-white text-indigo-600 rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Draw Funds</h3>
                    <p className="text-indigo-100">Access funds whenever you need them, up to your approved credit limit.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-white text-indigo-600 rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Pay Interest</h3>
                    <p className="text-indigo-100">Make minimum payments or pay more to reduce your balance and interest charges.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-white text-indigo-600 rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Reuse Credit</h3>
                    <p className="text-indigo-100">As you repay, your available credit increases—draw again whenever needed.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How does a business line of credit work?
                </h3>
                <p className="text-gray-600">
                  A business line of credit works like a credit card. You're approved for a maximum amount, but you only draw what you need when you need it. Interest is only charged on the amount you've drawn, not your total credit limit. As you repay, the credit becomes available again for future use.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How is interest calculated on a line of credit?
                </h3>
                <p className="text-gray-600">
                  Interest is calculated daily on your outstanding balance. For example, if you have a $100K line with a 15% annual rate and draw $20K, you'll only pay interest on the $20K. The daily rate would be approximately $8 per day (15% ÷ 365 × $20,000).
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How quickly can I access funds from my line of credit?
                </h3>
                <p className="text-gray-600">
                  Once your line of credit is established, you can typically access funds within 24 hours through a simple request. Some lines offer same-day transfers or even instant access through a dedicated business card linked to your credit line.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What's the difference between a line of credit and a loan?
                </h3>
                <p className="text-gray-600">
                  A loan provides a lump sum upfront with fixed payments, while a line of credit gives you ongoing access to funds up to a limit. Lines of credit are revolving (reusable) and you only pay interest on what you draw. Loans are better for one-time purchases; lines of credit are better for ongoing or unpredictable needs.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Do lines of credit have annual fees?
                </h3>
                <p className="text-gray-600">
                  Some business lines of credit have small annual maintenance fees ($50-$200), while others don't. We'll clearly disclose any fees upfront. Many businesses find the flexibility worth any small fee, especially since you're not paying interest when the line isn't being used.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Can my line of credit be renewed or increased?
                </h3>
                <p className="text-gray-600">
                  Yes! Lines of credit are typically renewed annually. With good payment history and business growth, you can request an increase to your credit limit. Many businesses start with a $50K line and grow to $250K+ over time as their needs and qualifications increase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Your Business Line of Credit
          </h2>
          <p className="text-xl mb-8 text-indigo-100 max-w-2xl mx-auto">
            Secure flexible funding that's there when you need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply" className="btn-primary bg-white text-indigo-600 hover:bg-gray-100">
              Apply Now
            </Link>
            <Link to="/services" className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-indigo-600">
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LineOfCredit
