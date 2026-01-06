import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const dropdownRef = useRef(null)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const products = [
    { name: 'SBA Loans', href: '/products/sba-loans', description: 'Government-backed financing', icon: '🏛️' },
    { name: 'Merchant Cash Advance', href: '/products/mca', description: 'Fast, flexible funding', icon: '💳' },
    { name: 'Business Loans', href: '/products/business-loans', description: 'Traditional term loans', icon: '💼' },
    { name: 'Line of Credit', href: '/products/line-of-credit', description: 'Revolving credit', icon: '🔄' },
    { name: 'Loan Consolidation', href: '/products/loan-consolidation', description: 'Simplify your debt', icon: '📊' },
    { name: 'Term Loans', href: '/products/term-loans', description: 'Fixed-rate financing', icon: '📈' },
  ]

  const isActive = (path) => location.pathname === path

  const isProductPage = () => location.pathname.startsWith('/products')

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProductsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
    setIsProductsOpen(false)
  }, [location])

  return (
    <header className={`bg-white sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : 'shadow-sm border-b border-gray-100'}`}>
      <nav className="section-container">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group relative">
            <img 
              src="/logo.svg" 
              alt="Anchor Funding - Business Capital Solutions" 
              className="h-12 w-auto transition-all duration-300 group-hover:scale-105"
            />
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-anchor-blue to-anchor-teal group-hover:w-full transition-all duration-300"></div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-base font-semibold transition-all duration-200 px-4 py-2 rounded-lg relative ${
                  isActive(item.href)
                    ? 'text-anchor-blue bg-blue-50'
                    : 'text-gray-700 hover:text-anchor-blue hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Products Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className={`flex items-center text-base font-semibold transition-all duration-200 px-4 py-2 rounded-lg ${
                  isProductPage()
                    ? 'text-anchor-blue bg-blue-50'
                    : 'text-gray-700 hover:text-anchor-blue hover:bg-gray-50'
                }`}
              >
                Products
                <ChevronDown
                  className={`ml-1 transition-transform duration-300 ${
                    isProductsOpen ? 'rotate-180' : ''
                  }`}
                  size={18}
                />
              </button>

              {/* Dropdown Menu - Enhanced */}
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-3 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-fadeIn">
                  <div className="bg-gradient-to-r from-anchor-blue to-anchor-teal px-5 py-3">
                    <p className="text-xs font-bold text-white uppercase tracking-wide">
                      Funding Solutions
                    </p>
                  </div>
                  <div className="py-2">
                    {products.map((product, index) => (
                      <Link
                        key={product.name}
                        to={product.href}
                        className="flex items-start px-5 py-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 transition-all duration-200 group"
                        onClick={() => setIsProductsOpen(false)}
                        style={{ animationDelay: `${index * 30}ms` }}
                      >
                        <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-200">{product.icon}</span>
                        <div>
                          <div className="font-semibold text-gray-900 group-hover:text-anchor-blue transition-colors">
                            {product.name}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">{product.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-gray-100 bg-gray-50 px-5 py-3">
                    <Link
                      to="/services"
                      className="text-sm font-bold text-anchor-blue hover:text-anchor-navy flex items-center group"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      View All Products 
                      <span className="ml-1 group-hover:ml-2 transition-all duration-200">→</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Phone Number */}
            <a
              href="tel:+16469936971"
              className="flex items-center text-gray-700 hover:text-anchor-blue transition-all duration-200 px-4 py-2 rounded-lg hover:bg-gray-50 group"
            >
              <Phone size={18} className="mr-2 group-hover:rotate-12 transition-transform duration-200" />
              <span className="font-semibold">(646) 993-6971</span>
            </a>

            {/* CTA Button - Enhanced */}
            <Link
              to="/apply"
              className="relative bg-gradient-to-r from-anchor-blue to-anchor-teal text-white px-6 py-2.5 rounded-lg font-bold hover:shadow-xl hover:shadow-anchor-blue/30 hover:scale-105 transition-all duration-300 overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-anchor-navy to-anchor-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-anchor-blue hover:bg-gray-100 transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation - Enhanced */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t animate-slideDown">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-base font-semibold px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-anchor-blue bg-blue-50'
                      : 'text-gray-700 hover:text-anchor-blue hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Products Menu */}
              <div>
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="w-full flex items-center justify-between text-base font-semibold px-4 py-3 rounded-lg text-gray-700 hover:text-anchor-blue hover:bg-gray-50 transition-all duration-200"
                >
                  Products
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isProductsOpen ? 'rotate-180' : ''
                    }`}
                    size={18}
                  />
                </button>
                {isProductsOpen && (
                  <div className="mt-2 ml-4 space-y-2 border-l-2 border-anchor-teal pl-4">
                    {products.map((product) => (
                      <Link
                        key={product.name}
                        to={product.href}
                        className="flex items-start py-2 text-sm group"
                        onClick={() => {
                          setIsMenuOpen(false)
                          setIsProductsOpen(false)
                        }}
                      >
                        <span className="text-xl mr-2">{product.icon}</span>
                        <div>
                          <div className="font-semibold text-gray-900 group-hover:text-anchor-blue transition-colors">
                            {product.name}
                          </div>
                          <div className="text-xs text-gray-500">{product.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Phone */}
              <a
                href="tel:+16469936971"
                className="flex items-center text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
              >
                <Phone size={18} className="mr-2" />
                <span className="font-semibold">(646) 993-6971</span>
              </a>

              {/* Mobile CTA */}
              <Link
                to="/apply"
                className="bg-gradient-to-r from-anchor-blue to-anchor-teal text-white px-6 py-3 rounded-lg font-bold text-center hover:shadow-lg transition-all duration-200 mx-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
