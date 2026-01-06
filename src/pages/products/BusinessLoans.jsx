import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, DollarSign, Clock, TrendingUp, Target } from 'lucide-react'

const BusinessLoans = () => {
  const features = [
    'Loan amounts from $10K to $500K',
    'Competitive interest rates (8-18%)',
    'Flexible terms (3 to 36 months)',
    'Fixed monthly payments',
    'No prepayment penalties',
    'Multiple business uses',
  ]

  const requirements = [
    'At least 6 months in business',
    'Minimum $100K annual revenue',
    'Credit score 600+',
    'Active business bank account',
    'Basic financial documentation',
    'Personal guarantee',
  ]

  const useCases = [
    'Inventory purchase',
    'Marketing campaigns',
    'Hiring employees',
    'Office expansion',
    'Technology upgrades',
    'Seasonal expenses',
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-900 via-teal-700 to-cyan-600 text-white py-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-semibold">Traditional Financing</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Business Loans
            </h1>
            <p className="text-xl text-teal-100 mb-8">
              Straightforward term loans with predictable payments. Perfect for businesses needing capital for growth and operational needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/apply" className="btn-primary">
                Apply Now <ArrowRight className="inline ml-2" size={20} />
              </Link>
              <Link to="/contact" className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-teal-800">
                Get Information
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
              <div className="bg-teal-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">$10K - $500K</h3>
              <p className="text-gray-600 text-sm">Loan Amount</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">8-18%</h3>
              <p className="text-gray-600 text-sm">Interest Rate</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">3-36 Months</h3>
              <p className="text-gray-600 text-sm">Term Length</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fixed</h3>
              <p className="text-gray-600 text-sm">Monthly Payment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Basic Requirements
              </h2>
              <div className="bg-white rounded-xl shadow-md p-8">
                <ul className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
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
              What Can You Use Business Loans For?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Flexible funding for various business needs
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-teal-600 to-cyan-600 text-white rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <p className="font-semibold">{useCase}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Our Business Loans?
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Predictable Payments</h3>
                <p className="text-gray-600">Know exactly what you'll pay each month with fixed payment amounts and schedules.</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Approval</h3>
                <p className="text-gray-600">Get approved in 24-48 hours with minimal documentation and simple requirements.</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Use</h3>
                <p className="text-gray-600">Use the funds for any legitimate business purpose—we don't restrict how you spend.</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Build Credit</h3>
                <p className="text-gray-600">Make on-time payments to build your business credit and qualify for better terms in the future.</p>
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
                  How quickly can I get approved for a business loan?
                </h3>
                <p className="text-gray-600">
                  Most business loan applications are reviewed within 24-48 hours. Once approved, funding is typically deposited within 2-5 business days. The timeline depends on the completeness of your application and how quickly you provide any requested documents.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What credit score do I need to qualify?
                </h3>
                <p className="text-gray-600">
                  We work with businesses with credit scores as low as 600. While higher credit scores (680+) qualify for better rates, we consider your entire financial picture including revenue, time in business, and cash flow when making lending decisions.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Are there any restrictions on how I use the funds?
                </h3>
                <p className="text-gray-600">
                  No! Business loans can be used for any legitimate business purpose including inventory, equipment, marketing, hiring, expansion, or working capital. You have complete flexibility in how you deploy the capital to grow your business.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Can I pay off my loan early without penalty?
                </h3>
                <p className="text-gray-600">
                  Yes! All our business loans come with no prepayment penalties. If your business generates extra cash and you want to pay off the loan early to save on interest, you're free to do so at any time without additional fees.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What documentation do I need to apply?
                </h3>
                <p className="text-gray-600">
                  You'll need basic business information (EIN, business license), recent bank statements (3-6 months), personal and business tax returns (if available), and a valid government ID. We keep the documentation requirements simple and streamlined.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Do I need collateral for a business loan?
                </h3>
                <p className="text-gray-600">
                  Most of our business loans are unsecured, meaning no collateral is required for amounts up to $250K. For larger loan amounts, we may require a blanket lien on business assets, but we don't typically require specific equipment or real estate as collateral.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-16">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for a Business Loan?
          </h2>
          <p className="text-xl mb-8 text-teal-100 max-w-2xl mx-auto">
            Get the capital you need with predictable terms and fast approval.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply" className="btn-primary bg-white text-teal-600 hover:bg-gray-100">
              Apply Now
            </Link>
            <Link to="/services" className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-teal-600">
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BusinessLoans
