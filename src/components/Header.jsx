import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const location = useLocation()
  const dropdownRef = useRef(null)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const products = [
    { name: 'SBA Loans', href: '/products/sba-loans', description: 'Government-backed financing' },
    { name: 'Merchant Cash Advance', href: '/products/mca', description: 'Fast, flexible funding' },
    { name: 'Business Loans', href: '/products/business-loans', description: 'Traditional term loans' },
    { name: 'Line of Credit', href: '/products/line-of-credit', description: 'Revolving credit' },
    { name: 'Loan Consolidation', href: '/products/loan-consolidation', description: 'Simplify your debt' },
    { name: 'Term Loans', href: '/products/term-loans', description: 'Fixed-rate financing' },
  ]

  const isActive = (path) => location.pathname === path

  const isProductPage = () => location.pathname.startsWith('/products')

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
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="section-container">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-anchor-blue to-anchor-teal rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-2xl font-bold text-anchor-navy">
              Anchor <span className="text-anchor-teal">Funding</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-base font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-anchor-blue border-b-2 border-anchor-blue'
                    : 'text-gray-700 hover:text-anchor-blue'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Products Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className={`flex items-center text-base font-medium transition-colors duration-200 ${
                  isProductPage()
                    ? 'text-anchor-blue border-b-2 border-anchor-blue'
                    : 'text-gray-700 hover:text-anchor-blue'
                }`}
              >
                Products
                <ChevronDown
                  className={`ml-1 transition-transform duration-200 ${
                    isProductsOpen ? 'rotate-180' : ''
                  }`}
                  size={18}
                />
              </button>

              {/* Dropdown Menu */}
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-2xl border border-gray-100 py-2 animate-fadeIn">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Our Products
                    </p>
                  </div>
                  {products.map((product) => (
                    <Link
                      key={product.name}
                      to={product.href}
                      className="block px-4 py-3 hover:bg-blue-50 transition-colors duration-200"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      <div className="font-medium text-gray-900 hover:text-anchor-blue">
                        {product.name}
                      </div>
                      <div className="text-sm text-gray-500">{product.description}</div>
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-2 pt-2 px-4 py-2">
                    <Link
                      to="/services"
                      className="text-sm font-semibold text-anchor-blue hover:text-anchor-navy"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      View All Products →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Phone Number */}
            <a
              href="tel:+16469936971"
              className="flex items-center text-gray-700 hover:text-anchor-blue transition-colors duration-200"
            >
              <Phone size={18} className="mr-2" />
              <span className="font-medium">(646) 993-6971</span>
            </a>

            {/* CTA Buttons */}
            <Link to="/apply" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-anchor-blue hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t animate-slideDown">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-base font-medium px-4 py-2 rounded-md transition-colors duration-200 ${
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
                  className="w-full flex items-center justify-between text-base font-medium px-4 py-2 rounded-md text-gray-700 hover:text-anchor-blue hover:bg-gray-50"
                >
                  Products
                  <ChevronDown
                    className={`transition-transform duration-200 ${
                      isProductsOpen ? 'rotate-180' : ''
                    }`}
                    size={18}
                  />
                </button>
                {isProductsOpen && (
                  <div className="mt-2 ml-4 space-y-2 border-l-2 border-gray-200 pl-4">
                    {products.map((product) => (
                      <Link
                        key={product.name}
                        to={product.href}
                        className="block py-2 text-sm"
                        onClick={() => {
                          setIsMenuOpen(false)
                          setIsProductsOpen(false)
                        }}
                      >
                        <div className="font-medium text-gray-900 hover:text-anchor-blue">
                          {product.name}
                        </div>
                        <div className="text-xs text-gray-500">{product.description}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Phone */}
              <a
                href="tel:+16469936971"
                className="flex items-center text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50"
              >
                <Phone size={18} className="mr-2" />
                <span className="font-medium">(646) 993-6971</span>
              </a>

              {/* Mobile CTA */}
              <Link
                to="/apply"
                className="btn-primary mx-4"
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
