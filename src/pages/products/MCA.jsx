import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, DollarSign, Clock, Zap, CreditCard } from 'lucide-react'

const MCA = () => {
  const features = [
    'Funding from $5K to $500K',
    'No fixed monthly payments',
    'Repay as you earn revenue',
    'Approval in 24 hours',
    'No collateral required',
    'Bad credit accepted',
  ]

  const requirements = [
    'Minimum 6 months in business',
    'At least $10K monthly revenue',
    'Active business bank account',
    'Credit card sales (preferred)',
    'Basic business documentation',
    'Personal credit check',
  ]

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-anchor-teal" />,
      title: 'Fast Funding',
      description: 'Get approved in 24 hours and funded within 2-3 business days',
    },
    {
      icon: <CreditCard className="w-8 h-8 text-anchor-teal" />,
      title: 'Flexible Repayment',
      description: 'Payments adjust based on your daily credit card sales',
    },
    {
      icon: <DollarSign className="w-8 h-8 text-anchor-teal" />,
      title: 'No Fixed Payments',
      description: 'Pay more when business is good, less when it\'s slow',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-700 text-white py-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-semibold">Revenue-Based Funding</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Merchant Cash Advance (MCA)
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              Fast, flexible funding that adjusts to your business revenue. Perfect for businesses with daily credit card sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/apply" className="btn-primary">
                Apply Now <ArrowRight className="inline ml-2" size={20} />
              </Link>
              <Link to="/contact" className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-purple-800">
                Get a Quote
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
              <div className="bg-purple-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">$5K - $500K</h3>
              <p className="text-gray-600 text-sm">Advance Amount</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">24 Hours</h3>
              <p className="text-gray-600 text-sm">Approval Time</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">2-3 Days</h3>
              <p className="text-gray-600 text-sm">Funding Time</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Daily</h3>
              <p className="text-gray-600 text-sm">Repayment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Choose a Merchant Cash Advance?
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
                MCA Features
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
                      <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            How Merchant Cash Advance Works
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Apply & Get Approved</h3>
                    <p className="text-gray-600">Submit your application with basic business and revenue information. Get approved within 24 hours.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Receive Your Advance</h3>
                    <p className="text-gray-600">Once approved, your merchant cash advance is deposited directly into your business bank account.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Automatic Repayment</h3>
                    <p className="text-gray-600">A small percentage of your daily credit card sales is automatically deducted until the advance is repaid.</p>
                  </div>
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
                  How does a Merchant Cash Advance work?
                </h3>
                <p className="text-gray-600">
                  An MCA provides you with a lump sum of capital upfront. Repayment happens automatically through a percentage of your daily credit card sales. When sales are high, you pay more; when sales are slow, you pay less. There are no fixed monthly payments.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What percentage of my sales will be taken?
                </h3>
                <p className="text-gray-600">
                  Typically, 10-20% of your daily credit card sales will go toward repayment. The exact percentage depends on your business's revenue, risk profile, and the advance amount. We work with you to set a percentage that won't strain your cash flow.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Can I get an MCA with bad credit?
                </h3>
                <p className="text-gray-600">
                  Yes! MCAs are primarily based on your revenue and sales volume, not your credit score. While we do check credit, businesses with scores as low as 500 can qualify if they have strong daily sales. This makes MCAs ideal for businesses rebuilding credit.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What if my business doesn't take credit cards?
                </h3>
                <p className="text-gray-600">
                  While credit card sales make the process easier, we can also work with ACH withdrawals from your business bank account for a fixed daily or weekly amount. This works well for businesses with consistent revenue streams.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Is an MCA better than a traditional loan?
                </h3>
                <p className="text-gray-600">
                  It depends on your needs. MCAs offer faster approval, flexible repayment tied to revenue, and easier qualification. However, they typically have higher costs than traditional loans. They're best for businesses needing quick capital with variable revenue or credit challenges.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Can I get another advance before paying off the first?
                </h3>
                <p className="text-gray-600">
                  Yes! Once you've paid down at least 50% of your original advance and have a good payment history, you can apply for an additional advance. Many businesses use MCAs for ongoing working capital needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Fast Funding Today
          </h2>
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            Apply now and receive your merchant cash advance within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply" className="btn-primary bg-white text-purple-600 hover:bg-gray-100">
              Apply Now
            </Link>
            <Link to="/services" className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-purple-600">
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MCA
