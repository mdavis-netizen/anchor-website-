import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { TrendingUp, Shield, Clock, Award, ArrowRight, CheckCircle2, Star, Quote, Landmark, Zap, DollarSign, CreditCard, Layers, Calendar } from 'lucide-react'

const Home = () => {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
  }
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-anchor-teal" />,
      title: 'Fast Approval',
      description: 'Get approved within 2 hours when received during business hours with our streamlined application process.',
    },
    {
      icon: <Shield className="w-8 h-8 text-anchor-teal" />,
      title: 'Competitive Rates',
      description: 'Access the most competitive rates in the market with transparent terms you can trust.',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-anchor-teal" />,
      title: 'Flexible Terms',
      description: 'Customized funding solutions that adapt to your business needs and cash flow.',
    },
    {
      icon: <Award className="w-8 h-8 text-anchor-teal" />,
      title: 'Expert Support',
      description: 'Dedicated funding specialists to guide you through every step of the process.',
    },
  ]

  const stats = [
    { value: '$500M+', label: 'Total Funded' },
    { value: '10,000+', label: 'Businesses Helped' },
    { value: '4.9/5', label: 'Client Rating' },
    { value: '2hrs', label: 'Fast Approval' },
  ]

  const services = [
    {
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop',
      title: 'SBA Loans',
      description: 'Government-backed financing up to $5M with the lowest rates and longest terms.',
      color: 'from-blue-500 to-blue-600',
      link: '/products/sba-loans',
    },
    {
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop',
      title: 'Merchant Cash Advance',
      description: 'Fast funding up to $500K with flexible repayment based on your daily sales.',
      color: 'from-purple-500 to-purple-600',
      link: '/products/mca',
    },
    {
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=600&auto=format&fit=crop',
      title: 'Business Loans',
      description: 'Traditional term loans from $10K to $500K with predictable monthly payments.',
      color: 'from-teal-500 to-teal-600',
      link: '/products/business-loans',
    },
    {
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop',
      title: 'Line of Credit',
      description: 'Revolving credit up to $250K - draw funds as needed and pay for what you use.',
      color: 'from-indigo-500 to-indigo-600',
      link: '/products/line-of-credit',
    },
    {
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&auto=format&fit=crop',
      title: 'Loan Consolidation',
      description: 'Simplify multiple debts into one payment with lower rates and better terms.',
      color: 'from-emerald-500 to-emerald-600',
      link: '/products/loan-consolidation',
    },
    {
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop',
      title: 'Term Loans',
      description: 'Fixed-rate financing from $25K to $500K with flexible terms from 6-60 months.',
      color: 'from-cyan-500 to-cyan-600',
      link: '/products/term-loans',
    },
  ]

  const benefits = [
    'No collateral required',
    'Bad credit accepted',
    'Multiple funding options',
    'Same-day funding available',
    'No hidden fees',
    'Flexible repayment terms',
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Johnson\'s Retail Store',
      location: 'Austin, TX',
      rating: 5,
      text: 'Anchor Funding helped us expand to a second location. The process was fast, transparent, and the team was incredibly supportive. We got approved in less than 2 hours!',
      amount: '$150K',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    },
    {
      name: 'Michael Chen',
      company: 'Tech Solutions Inc',
      location: 'San Francisco, CA',
      rating: 5,
      text: 'As a growing tech company, we needed capital quickly. Anchor Funding delivered exactly what we needed with flexible terms that worked for our cash flow.',
      amount: '$250K',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
    },
    {
      name: 'David Rodriguez',
      company: 'Rodriguez Construction',
      location: 'Miami, FL',
      rating: 5,
      text: 'The equipment financing option was perfect for our business. We purchased new machinery and saw immediate ROI. Highly recommend Anchor Funding!',
      amount: '$300K',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section - Sophisticated Design */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white overflow-hidden min-h-screen flex items-center">
        {/* Background Image - Manhattan Skyline */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400&auto=format&fit=crop" 
            alt="Manhattan Financial District skyline" 
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        {/* Elegant Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-blue-950/95 to-gray-900/95"></div>
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
        
        <div className="section-container relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div 
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              {/* Elegant Badge */}
              <motion.div 
                className="flex justify-start mb-8"
                variants={fadeInUp}
              >
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                  <span className="w-2 h-2 bg-teal-400 rounded-full mr-2 animate-pulse"></span>
                  <span className="text-sm font-semibold tracking-wide text-gray-200">TRUSTED BY 10,000+ BUSINESSES</span>
                </div>
              </motion.div>

              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
                variants={fadeInUp}
                style={{letterSpacing: '-0.03em'}}
              >
                <span className="block text-white">Capital That Moves</span>
                <span className="block bg-gradient-to-r from-blue-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
                  Your Business Forward
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl mb-10 text-gray-300 font-light leading-relaxed"
                variants={fadeInUp}
              >
                From $10K to $5M in flexible business funding. Fast decisions, competitive rates, and personalized service for ambitious companies.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-12"
                variants={fadeInUp}
              >
                <Link to="/apply" className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-bold rounded-full text-lg hover:shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center">
                    Get Funded Now 
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link to="/contact" className="px-10 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-full text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 text-center">
                  Speak with an Expert
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div 
                className="flex flex-wrap items-center gap-8"
                variants={fadeInUp}
              >
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">$500M+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Funded</div>
                </div>
                <div className="h-10 w-px bg-white/20"></div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">2hrs</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Approval</div>
                </div>
                <div className="h-10 w-px bg-white/20"></div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">4.9★</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Rating</div>
                </div>
                <div className="h-10 w-px bg-white/20"></div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">10K+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Clients</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Hero Image */}
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-teal-500/30 rounded-3xl blur-3xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1400&auto=format&fit=crop" 
                  alt="Professional business team meeting for funding consultation" 
                  className="relative rounded-3xl shadow-2xl border-2 border-white/10 w-full h-auto object-cover"
                />
                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 max-w-xs">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">$500M+</div>
                      <div className="text-sm text-gray-600">Successfully Funded</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Social Proof / Stats Section */}
      <section className="bg-white py-16 border-b shadow-sm">
        <div className="section-container">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                variants={scaleIn}
              >
                <div className="text-4xl md:text-5xl font-bold text-anchor-blue mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm md:text-base font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Funding Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from six flexible financing options designed to meet your business needs
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
              >
                <Link
                  to={service.link}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group block h-full flex flex-col"
                >
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80 group-hover:opacity-70 transition-opacity duration-300`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-white text-center px-4">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6 flex-grow flex flex-col">
                    <p className="text-gray-700 text-center mb-4 flex-grow">{service.description}</p>
                    <div className="text-center">
                      <span className="text-anchor-blue font-semibold group-hover:text-anchor-navy inline-flex items-center">
                        Learn More <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-secondary text-lg px-8 py-4">
              Compare All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits / Features Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Anchor Funding?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide fast, flexible business funding solutions designed to help your company thrive
            </p>
          </div>

          {/* Professional Team Image */}
          <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2400&auto=format&fit=crop" 
              alt="Professional financial advisors working with clients" 
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Additional Benefits Grid */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Everything You Need to Succeed
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Get Funded in 3 Simple Steps
              </h2>
              <p className="text-xl text-gray-600">
                Our streamlined process gets you the funding you need, fast
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <div className="bg-anchor-blue text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mx-auto mb-6">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Apply Online</h3>
                <p className="text-gray-600">Complete our simple application in just 5 minutes with basic business information</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <div className="bg-anchor-teal text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mx-auto mb-6">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Get Approved</h3>
                <p className="text-gray-600">Receive approval within 2 hours when submitted during business hours from our expert funding specialists</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <div className="bg-anchor-navy text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mx-auto mb-6">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Receive Funds</h3>
                <p className="text-gray-600">Funding deposited within 1 hour of signing your contract directly into your business account</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied businesses who have achieved their goals with Anchor Funding
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-anchor-teal opacity-30" />
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center space-x-4 mb-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-anchor-blue shadow-md"
                    />
                    <div>
                      <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                      <p className="text-sm text-gray-600 font-medium">{testimonial.company}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <span className="inline-block bg-green-100 text-green-800 text-xs font-bold px-3 py-1.5 rounded-full">
                      Funded {testimonial.amount}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/about" className="text-anchor-blue font-semibold hover:text-anchor-navy inline-flex items-center text-lg">
              Read More Success Stories <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-anchor-blue via-anchor-navy to-anchor-teal text-white py-20">
        <div className="section-container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto">
            Get started today and see how Anchor Funding can help your business succeed. Apply now and receive a decision within 2 hours during business hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply" className="btn-primary bg-white text-anchor-blue hover:bg-gray-100 text-lg px-10 py-4 shadow-xl">
              Get Funded Today
            </Link>
            <Link to="/contact" className="btn-secondary bg-white/10 border-2 border-white text-white hover:bg-white hover:text-anchor-blue text-lg px-10 py-4">
              Speak to an Expert
            </Link>
          </div>
          <p className="mt-8 text-blue-200 text-sm">
            No obligation • Fast approval • Competitive rates
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home
