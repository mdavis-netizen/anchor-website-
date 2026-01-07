import { Link } from 'react-router-dom'
import { DollarSign, Landmark, Zap, CreditCard, Layers, Calendar, ArrowRight, CheckCircle } from 'lucide-react'

const Services = () => {
  const services = [
    {
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop',
      title: 'SBA Loans',
      description: 'Government-backed financing with the lowest rates and longest terms available.',
      features: [
        'Up to $5M in funding',
        'Rates as low as 6-10%',
        'Terms up to 25 years',
        'Government guaranteed',
      ],
      color: 'from-blue-500 to-blue-600',
      link: '/products/sba-loans',
    },
    {
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop',
      title: 'Merchant Cash Advance',
      description: 'Fast, flexible funding that adjusts to your daily credit card sales.',
      features: [
        'Up to $500K in funding',
        'Approval in 2 hours',
        'No fixed monthly payments',
        'Bad credit accepted',
      ],
      color: 'from-purple-500 to-purple-600',
      link: '/products/mca',
    },
    {
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=600&auto=format&fit=crop',
      title: 'Business Loans',
      description: 'Straightforward term loans with predictable payments for growth and operations.',
      features: [
        'Up to $500K in funding',
        'Fixed interest rates 8-18%',
        'Terms from 3 to 36 months',
        'No prepayment penalties',
      ],
      color: 'from-teal-500 to-teal-600',
      link: '/products/business-loans',
    },
    {
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop',
      title: 'Line of Credit',
      description: 'Revolving credit up to $250K that you can draw from whenever needed.',
      features: [
        'Up to $250K available',
        'Only pay for what you use',
        'Reuse as you repay',
        'Perfect for cash flow',
      ],
      color: 'from-indigo-500 to-indigo-600',
      link: '/products/line-of-credit',
    },
    {
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&auto=format&fit=crop',
      title: 'Loan Consolidation',
      description: 'Simplify multiple debts into one payment with lower rates and better terms.',
      features: [
        'Consolidate all business debts',
        'Lower monthly payments',
        'Reduce interest rates',
        'Improve cash flow',
      ],
      color: 'from-emerald-500 to-emerald-600',
      link: '/products/loan-consolidation',
    },
    {
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop',
      title: 'Term Loans',
      description: 'Fixed-rate financing with flexible terms for any business investment.',
      features: [
        '$25K to $500K funding',
        'Fixed rates 9-16%',
        'Terms from 6 to 60 months',
        'Predictable payments',
      ],
      color: 'from-cyan-500 to-cyan-600',
      link: '/products/term-loans',
    },
  ]

  const industries = [
    'Retail & E-commerce',
    'Manufacturing',
    'Healthcare',
    'Construction',
    'Transportation',
    'Hospitality',
    'Professional Services',
    'Technology',
    'Real Estate',
    'Food & Beverage',
    'Auto Services',
    'And many more...',
  ]

  return (
    <div className="bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-br from-anchor-navy to-anchor-blue text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2400&auto=format&fit=crop" 
            alt="Professional business team planning growth strategy" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Funding Solutions for Every Business Need
            </h1>
            <p className="text-xl text-blue-100">
              From working capital to major investments, we have the right funding solution to help your business grow.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Funding Products
            </h2>
            <p className="text-xl text-gray-600">
              Choose the financing option that best fits your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col"
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80 group-hover:opacity-70 transition-opacity duration-300`}></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white text-sm opacity-90">{service.description}</p>
                  </div>
                </div>
                
                {/* Features */}
                <div className="p-8 flex-grow flex flex-col">
                  <ul className="space-y-3 mb-6 flex-grow">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.link}
                    className="flex items-center justify-center w-full px-6 py-3 bg-gray-100 hover:bg-anchor-blue text-gray-900 hover:text-white font-semibold rounded-lg transition-all duration-300 group-hover:bg-anchor-blue group-hover:text-white"
                  >
                    Learn More <ArrowRight className="ml-2" size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Compare Our Products
          </h2>
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden shadow-xl rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-anchor-blue">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Product</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Amount</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Rate/Cost</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Term</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">SBA Loans</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">Up to $5M</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">6-10%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">10-25 years</td>
                      <td className="px-6 py-4 text-gray-700">Major investments</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">MCA</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">$5K - $500K</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">Factor Rate</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">3-12 months</td>
                      <td className="px-6 py-4 text-gray-700">Quick cash needs</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Business Loans</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">$10K - $500K</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">8-18%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">3-36 months</td>
                      <td className="px-6 py-4 text-gray-700">General growth</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Line of Credit</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">Up to $250K</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">12-20%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">Revolving</td>
                      <td className="px-6 py-4 text-gray-700">Cash flow gaps</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Loan Consolidation</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">Varies</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">Lower rates</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">12-60 months</td>
                      <td className="px-6 py-4 text-gray-700">Simplify debt</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Term Loans</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">$25K - $500K</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">9-16%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">6-60 months</td>
                      <td className="px-6 py-4 text-gray-700">Fixed payments</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Simple Requirements
            </h2>
            {/* Professional Consultation Image */}
            <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop" 
                alt="Business consultant helping client with funding application" 
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Time in Business</h3>
                    <p className="text-gray-600">Minimum 6 months operating history</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Annual Revenue</h3>
                    <p className="text-gray-600">At least $100K in annual revenue</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Credit Score</h3>
                    <p className="text-gray-600">Flexible requirements, bad credit accepted</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Documentation</h3>
                    <p className="text-gray-600">Basic business and financial documents</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Link to="/apply" className="btn-primary">
                  Check Your Eligibility
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              We provide funding solutions to businesses across all industries
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-4 text-gray-700 font-medium hover:bg-anchor-blue hover:text-white transition-colors duration-200"
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-anchor-blue to-anchor-navy text-white py-16">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Apply now and receive a funding decision within 2 hours during business hours.
          </p>
          <Link to="/apply" className="btn-primary bg-white text-anchor-blue hover:bg-gray-100">
            Apply for Funding
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
