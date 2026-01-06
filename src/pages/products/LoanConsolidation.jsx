import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, DollarSign, TrendingDown, PiggyBank, Layers } from 'lucide-react'

const LoanConsolidation = () => {
  const features = [
    'Consolidate multiple debts into one',
    'Lower monthly payments',
    'Reduce interest rates',
    'Simplify financial management',
    'Improve cash flow',
    'Fixed repayment schedule',
  ]

  const requirements = [
    'At least 1 year in business',
    'Minimum $200K annual revenue',
    'Current debt obligations',
    'Credit score 580+',
    'Financial statements',
    'Debt payment history',
  ]

  const benefits = [
    {
      icon: <Layers className="w-8 h-8 text-anchor-teal" />,
      title: 'Simplify Payments',
      description: 'Combine multiple payments into one easy monthly payment',
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-anchor-teal" />,
      title: 'Lower Rates',
      description: 'Potentially reduce your overall interest rate and save money',
    },
    {
      icon: <PiggyBank className="w-8 h-8 text-anchor-teal" />,
      title: 'Improve Cash Flow',
      description: 'Free up working capital with lower monthly obligations',
    },
  ]

  const debtTypes = [
    'Merchant Cash Advances',
    'Business Credit Cards',
    'Short-term Business Loans',
    'Equipment Financing',
    'Invoice Factoring',
    'Working Capital Loans',
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-700 to-teal-600 text-white py-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-semibold">Debt Management</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Loan Consolidation
            </h1>
            <p className="text-xl text-emerald-100 mb-8">
              Simplify your finances and reduce your debt burden by consolidating multiple loans into one manageable payment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/apply" className="btn-primary">
                Apply Now <ArrowRight className="inline ml-2" size={20} />
              </Link>
              <Link to="/contact" className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-emerald-800">
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Potential Savings */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              How Much Could You Save?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">30-50%</div>
                <p className="text-gray-700">Reduction in monthly payments</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">5-15%</div>
                <p className="text-gray-700">Lower interest rates possible</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">$1000s</div>
                <p className="text-gray-700">In potential interest savings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Benefits of Loan Consolidation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                Consolidation Features
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
                      <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Debt Types */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Debts We Can Consolidate
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              We can help consolidate various types of business debt
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {debtTypes.map((debtType, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <p className="font-semibold text-gray-800">{debtType}</p>
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
            How Consolidation Works
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-red-600 font-bold">Before</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Multiple Debts</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Multiple payment dates</li>
                  <li>• Various interest rates</li>
                  <li>• High total monthly payment</li>
                  <li>• Complex bookkeeping</li>
                  <li>• Cash flow challenges</li>
                </ul>
              </div>
              <div className="bg-emerald-50 rounded-xl p-8">
                <div className="bg-emerald-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-white font-bold">After</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">One Simple Payment</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Single monthly payment</li>
                  <li>• One competitive rate</li>
                  <li>• Lower monthly obligation</li>
                  <li>• Simplified accounting</li>
                  <li>• Improved cash flow</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            The Consolidation Process
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6 flex items-start space-x-6">
              <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Debt Analysis</h3>
                <p className="text-gray-600">We review all your current business debts and payment obligations.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex items-start space-x-6">
              <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Solution</h3>
                <p className="text-gray-600">We design a consolidation plan that reduces your monthly burden and saves you money.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex items-start space-x-6">
              <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Payoff & Setup</h3>
                <p className="text-gray-600">We pay off your existing debts and set up your new consolidated loan.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex items-start space-x-6">
              <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enjoy Simplicity</h3>
                <p className="text-gray-600">Make one simple payment and enjoy improved cash flow and peace of mind.</p>
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
                  How does loan consolidation work?
                </h3>
                <p className="text-gray-600">
                  Loan consolidation combines multiple business debts into a single new loan. We pay off your existing debts, and you make one monthly payment to us at a typically lower rate. This simplifies your finances, reduces your monthly obligations, and can save you thousands in interest.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How much can I realistically save with consolidation?
                </h3>
                <p className="text-gray-600">
                  Savings vary by situation, but most businesses save 30-50% on monthly payments and 5-15% on interest rates. For example, if you're paying $5,000/month across multiple debts, consolidation might reduce that to $2,500-$3,500/month while also extending terms to improve cash flow.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Will consolidation hurt my credit score?
                </h3>
                <p className="text-gray-600">
                  Initially, there may be a small temporary dip from the credit inquiry and paying off accounts. However, consolidation typically improves your credit over time by reducing your credit utilization, establishing a positive payment history, and showing you're managing debt responsibly.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What types of business debt can be consolidated?
                </h3>
                <p className="text-gray-600">
                  You can consolidate most types of business debt including merchant cash advances, business credit cards, short-term loans, equipment financing, invoice factoring advances, working capital loans, and even some SBA loans. We'll evaluate all your debts to create the best consolidation plan.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Do I need good credit to consolidate?
                </h3>
                <p className="text-gray-600">
                  Not necessarily. While better credit helps you get lower rates, we can work with credit scores as low as 580 if you have consistent revenue and have been making payments on your existing debts. The fact that you're consolidating shows lenders you're taking action to improve your situation.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How long does the consolidation process take?
                </h3>
                <p className="text-gray-600">
                  The analysis takes 1-2 business days. Once you approve the consolidation plan, funding and payoff of existing debts typically happens within 5-7 business days. You'll start making your simplified single payment the following month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Simplify Your Business Debt?
          </h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
            Get a free consolidation analysis and see how much you could save.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply" className="btn-primary bg-white text-emerald-600 hover:bg-gray-100">
              Apply Now
            </Link>
            <Link to="/services" className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-emerald-600">
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LoanConsolidation
