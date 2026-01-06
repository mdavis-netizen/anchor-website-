import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, DollarSign, Clock, TrendingUp, Calendar } from 'lucide-react'

const TermLoans = () => {
  const features = [
    'Loan amounts from $25K to $500K',
    'Fixed interest rates (9-16%)',
    'Terms from 6 to 60 months',
    'Predictable monthly payments',
    'Fast approval process',
    'No prepayment penalties',
  ]

  const requirements = [
    'At least 1 year in business',
    'Minimum $250K annual revenue',
    'Credit score 600+',
    'Consistent cash flow',
    'Financial documentation',
    'Personal guarantee',
  ]

  const loanTerms = [
    {
      term: 'Short-Term',
      duration: '6-18 months',
      ideal: 'Quick projects, immediate needs',
      rate: '9-12%',
    },
    {
      term: 'Mid-Term',
      duration: '18-36 months',
      ideal: 'Equipment, expansion, inventory',
      rate: '10-14%',
    },
    {
      term: 'Long-Term',
      duration: '36-60 months',
      ideal: 'Real estate, major investments',
      rate: '12-16%',
    },
  ]

  const useCases = [
    'Business expansion',
    'Equipment purchase',
    'Real estate investment',
    'Marketing campaigns',
    'Inventory stocking',
    'Debt refinancing',
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-600 text-white py-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-semibold">Fixed-Rate Financing</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Term Loans
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Predictable, fixed-rate financing with flexible terms. Get the capital you need with payments that fit your budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/apply" className="btn-primary">
                Apply Now <ArrowRight className="inline ml-2" size={20} />
              </Link>
              <Link to="/contact" className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-blue-800">
                Calculate Payment
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
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">$25K - $500K</h3>
              <p className="text-gray-600 text-sm">Loan Amount</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">9-16%</h3>
              <p className="text-gray-600 text-sm">Fixed Rate</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">6-60 Months</h3>
              <p className="text-gray-600 text-sm">Term Options</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">24-48 Hours</h3>
              <p className="text-gray-600 text-sm">Approval Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Terms Options */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Choose Your Term Length
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {loanTerms.map((option, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-semibold mb-4">
                    {option.term}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{option.duration}</h3>
                  <p className="text-gray-600 mb-4">{option.ideal}</p>
                  <div className="text-2xl font-bold text-blue-600">{option.rate}</div>
                  <p className="text-sm text-gray-500">Interest Rate Range</p>
                </div>
                <Link to="/apply" className="btn-secondary w-full text-center block">
                  Apply Now
                </Link>
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
                Loan Features
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
                      <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
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
              What Can You Use Term Loans For?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Flexible funding for a variety of business needs
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <p className="font-semibold">{useCase}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Advantages of Term Loans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fixed Payments</h3>
              <p className="text-gray-700">Know exactly what you'll pay each month. Makes budgeting and financial planning simple and predictable.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fixed Interest Rate</h3>
              <p className="text-gray-700">Your rate never changes, protecting you from market fluctuations and rising interest rates.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Build Credit</h3>
              <p className="text-gray-700">Regular on-time payments help build your business credit score for better financing options in the future.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">No Prepayment Penalty</h3>
              <p className="text-gray-700">Pay off your loan early if you want to, without any additional fees or penalties.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Term Loans vs. Other Options
          </h2>
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Feature</th>
                    <th className="px-6 py-4 text-center">Term Loans</th>
                    <th className="px-6 py-4 text-center">Line of Credit</th>
                    <th className="px-6 py-4 text-center">MCA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Payment Type</td>
                    <td className="px-6 py-4 text-center text-green-600">Fixed</td>
                    <td className="px-6 py-4 text-center text-gray-600">Variable</td>
                    <td className="px-6 py-4 text-center text-gray-600">Daily %</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Interest Rate</td>
                    <td className="px-6 py-4 text-center text-green-600">9-16%</td>
                    <td className="px-6 py-4 text-center text-gray-600">12-20%</td>
                    <td className="px-6 py-4 text-center text-gray-600">Factor Rate</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Best For</td>
                    <td className="px-6 py-4 text-center text-gray-600">Growth projects</td>
                    <td className="px-6 py-4 text-center text-gray-600">Cash flow</td>
                    <td className="px-6 py-4 text-center text-gray-600">Quick needs</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Approval Time</td>
                    <td className="px-6 py-4 text-center text-green-600">24-48 hours</td>
                    <td className="px-6 py-4 text-center text-gray-600">24-48 hours</td>
                    <td className="px-6 py-4 text-center text-gray-600">24 hours</td>
                  </tr>
                </tbody>
              </table>
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
                  How do I choose the right term length for my loan?
                </h3>
                <p className="text-gray-600">
                  Choose your term based on the loan purpose and your cash flow. Short-term (6-18 months) works for quick-return investments with lower rates. Mid-term (18-36 months) balances manageable payments with moderate rates. Long-term (36-60 months) offers the lowest payments but higher total interest. We'll help you find the right balance.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What's the difference between fixed and variable rate term loans?
                </h3>
                <p className="text-gray-600">
                  All our term loans have fixed rates, meaning your interest rate and monthly payment never change during the loan term. This provides predictability for budgeting. Variable rate loans can fluctuate with market conditions, creating uncertainty. Fixed rates give you peace of mind and stable payments.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Can I pay off my term loan early?
                </h3>
                <p className="text-gray-600">
                  Yes, and with no prepayment penalties! If your business is doing well and you want to save on interest by paying off the loan early, you can do so at any time. Some businesses make extra principal payments monthly to reduce the loan term and total interest paid.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What are the typical approval criteria for term loans?
                </h3>
                <p className="text-gray-600">
                  We look for at least 1 year in business, minimum $250K annual revenue, credit score of 600+, and consistent cash flow. We also consider your industry, debt-to-income ratio, and business growth trajectory. Even if you don't meet all criteria, we may still be able to work with you.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What's the best use for a term loan vs other products?
                </h3>
                <p className="text-gray-600">
                  Term loans are ideal when you need a specific amount for a defined purpose like equipment purchase, expansion project, or inventory buy. Use a line of credit for ongoing or unpredictable needs. Use an MCA if you need funds very quickly and have strong credit card sales. Term loans offer the best balance of rate, term, and predictability.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How quickly can I get funded with a term loan?
                </h3>
                <p className="text-gray-600">
                  After approval (typically 24-48 hours), funding usually takes 3-5 business days. This is faster than traditional bank loans (which can take weeks) but slightly longer than an MCA. The wait is worth it for the better rates and terms you'll receive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for a Term Loan?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Get predictable financing with fixed rates and flexible terms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply" className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
              Apply Now
            </Link>
            <Link to="/services" className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-blue-600">
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TermLoans
