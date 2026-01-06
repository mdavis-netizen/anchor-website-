import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, DollarSign, Clock, TrendingUp, Shield } from 'lucide-react'

const SBALoans = () => {
  const features = [
    'Loan amounts from $50K to $5M',
    'Competitive interest rates (6-10%)',
    'Long repayment terms (10-25 years)',
    'Low down payment requirements',
    'Government-backed security',
    'Multiple use cases approved',
  ]

  const requirements = [
    'At least 2 years in business',
    'Strong credit score (680+)',
    'Personal guarantee required',
    'Detailed business plan',
    'Collateral may be required',
    'Owner equity investment',
  ]

  const useCases = [
    'Real estate purchase',
    'Equipment acquisition',
    'Business expansion',
    'Working capital',
    'Refinancing debt',
    'New construction',
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-anchor-navy to-anchor-blue text-white py-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-semibold">Government-Backed Financing</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              SBA Loans
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Access low-cost, long-term financing backed by the Small Business Administration. Perfect for major investments and business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/apply" className="btn-primary">
                Apply Now <ArrowRight className="inline ml-2" size={20} />
              </Link>
              <Link to="/contact" className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-anchor-blue">
                Speak to an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-anchor-blue" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Up to $5M</h3>
              <p className="text-gray-600 text-sm">Loan Amount</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-anchor-blue" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">6-10%</h3>
              <p className="text-gray-600 text-sm">Interest Rate</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-anchor-blue" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">10-25 Years</h3>
              <p className="text-gray-600 text-sm">Repayment Terms</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-anchor-blue" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Government</h3>
              <p className="text-gray-600 text-sm">Backed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Loan Features
              </h2>
              <div className="bg-white rounded-xl shadow-md p-8">
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

            {/* Requirements */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Basic Requirements
              </h2>
              <div className="bg-white rounded-xl shadow-md p-8">
                <ul className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-anchor-blue flex-shrink-0 mt-0.5" />
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
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Can You Use SBA Loans For?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              SBA loans offer flexible financing for a wide range of business needs
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-anchor-blue to-anchor-teal text-white rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <p className="font-semibold">{useCase}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Application Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md p-6 flex items-start space-x-6">
                <div className="bg-anchor-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Pre-Qualification</h3>
                  <p className="text-gray-600">Submit your initial application and business information. We'll review your eligibility within 48 hours.</p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 flex items-start space-x-6">
                <div className="bg-anchor-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Documentation</h3>
                  <p className="text-gray-600">Provide detailed financial statements, business plan, and supporting documents for SBA review.</p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 flex items-start space-x-6">
                <div className="bg-anchor-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">SBA Approval</h3>
                  <p className="text-gray-600">We submit your application to the SBA for guarantee approval (typically 5-10 business days).</p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 flex items-start space-x-6">
                <div className="bg-anchor-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Funding</h3>
                  <p className="text-gray-600">Once approved, closing documents are signed and funds are disbursed to your business account.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What is an SBA loan?
                </h3>
                <p className="text-gray-600">
                  An SBA loan is a small business loan partially guaranteed by the U.S. Small Business Administration. This guarantee allows lenders to offer better terms, lower rates, and longer repayment periods than conventional loans.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How long does the SBA approval process take?
                </h3>
                <p className="text-gray-600">
                  While pre-qualification can happen within 48 hours, the full SBA approval process typically takes 5-10 business days. The timeline depends on the completeness of your application and documentation.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What can I use an SBA loan for?
                </h3>
                <p className="text-gray-600">
                  SBA loans can be used for various business purposes including real estate purchase, equipment acquisition, working capital, business expansion, refinancing existing debt, and new construction. However, they cannot be used for passive real estate investments or illegal activities.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Do I need to provide collateral?
                </h3>
                <p className="text-gray-600">
                  For loans over $25,000, collateral is typically required. The SBA requires lenders to take collateral when available, but lack of collateral alone won't prevent you from getting a loan. The SBA doesn't require collateral for loans under $25,000.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What is the down payment requirement?
                </h3>
                <p className="text-gray-600">
                  Down payment requirements vary by loan type and use. For SBA 7(a) loans, expect to contribute 10-20% of the total project cost. For real estate purchases, 10% is typically required. Owner-occupied commercial real estate often requires 15% down.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Can startups qualify for SBA loans?
                </h3>
                <p className="text-gray-600">
                  Yes, startups can qualify, but it's more challenging. You'll need a strong business plan, good personal credit (680+), relevant industry experience, and sufficient capital injection. Startups typically need to show they have the ability to repay the loan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-anchor-blue to-anchor-navy text-white py-16">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started with an SBA Loan?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Our SBA loan specialists are here to help you through every step of the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply" className="btn-primary bg-white text-anchor-blue hover:bg-gray-100">
              Apply Now
            </Link>
            <Link to="/services" className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-anchor-blue">
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SBALoans
