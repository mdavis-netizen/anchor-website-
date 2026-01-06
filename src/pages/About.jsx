import { Target, Users, Heart, TrendingUp } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: <Target className="w-12 h-12 text-anchor-teal" />,
      title: 'Our Mission',
      description: 'To empower businesses of all sizes with accessible, flexible funding solutions that drive growth and success.',
    },
    {
      icon: <Users className="w-12 h-12 text-anchor-teal" />,
      title: 'Our Team',
      description: 'Experienced financial professionals dedicated to understanding your business and providing personalized support.',
    },
    {
      icon: <Heart className="w-12 h-12 text-anchor-teal" />,
      title: 'Our Values',
      description: 'Integrity, transparency, and customer success are at the heart of everything we do.',
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-anchor-teal" />,
      title: 'Our Vision',
      description: 'To be the most trusted partner for business funding, helping companies achieve their full potential.',
    },
  ]

  const timeline = [
    { year: '2015', event: 'Anchor Funding founded with a vision to revolutionize business lending' },
    { year: '2017', event: 'Reached $50M in total funding provided to small businesses' },
    { year: '2019', event: 'Expanded services to include equipment financing and invoice factoring' },
    { year: '2021', event: 'Served over 2,500 businesses across the United States' },
    { year: '2024', event: 'Surpassed $500M in total funding and earned 4.9/5 client rating' },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-anchor-navy to-anchor-blue text-white py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Anchor Funding
            </h1>
            <p className="text-xl text-blue-100">
              We're more than a funding company—we're your partner in business growth. Since 2015, we've been helping businesses secure the capital they need to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Story
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop" 
                  alt="Professional team meeting discussing business growth" 
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
              {/* Text */}
              <div className="order-1 lg:order-2">
                <div className="prose prose-lg text-gray-600">
                  <p className="text-lg leading-relaxed mb-6">
                    Anchor Funding was born from a simple observation: traditional business lending was broken. Small and medium-sized businesses faced lengthy approval processes, rigid requirements, and impersonal service. We knew there had to be a better way.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    Our founders, experienced finance professionals who had worked with hundreds of businesses, set out to create a funding company that put businesses first. One that combined the speed and flexibility of alternative lending with the trustworthiness and expertise of traditional banks.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Today, Anchor Funding has helped thousands of businesses access over $500 million in funding. But more importantly, we've helped businesses expand, hire new employees, purchase equipment, manage cash flow, and achieve their dreams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            What Drives Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Journey
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="bg-anchor-blue text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg">
                      {item.year}
                    </div>
                  </div>
                  <div className="flex-grow pt-3">
                    <p className="text-lg text-gray-700">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-anchor-blue to-anchor-teal text-white py-16">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">$500M+</div>
              <div className="text-blue-100">Total Funding</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">5,000+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">9+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">4.9/5</div>
              <div className="text-blue-100">Client Rating</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
