import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Shield, CheckCircle, Lock } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-anchor-navy to-gray-900 text-gray-300">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4 group">
              <img 
                src="/logo-white.svg" 
                alt="Anchor Funding" 
                className="h-12 w-auto transition-all duration-300 group-hover:scale-105 brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering businesses with flexible funding solutions to fuel growth and success since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-anchor-teal transition-colors duration-200 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-anchor-teal transition-all duration-200 mr-0 group-hover:mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-anchor-teal transition-colors duration-200 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-anchor-teal transition-all duration-200 mr-0 group-hover:mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-anchor-teal transition-colors duration-200 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-anchor-teal transition-all duration-200 mr-0 group-hover:mr-2"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/apply" className="text-gray-400 hover:text-anchor-teal transition-colors duration-200 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-anchor-teal transition-all duration-200 mr-0 group-hover:mr-2"></span>
                  Apply Now
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-anchor-teal transition-colors duration-200 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-anchor-teal transition-all duration-200 mr-0 group-hover:mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Our Products</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products/sba-loans" className="text-gray-400 hover:text-anchor-teal transition-colors duration-200 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-anchor-teal transition-all duration-200 mr-0 group-hover:mr-2"></span>
                  SBA Loans
                </Link>
              </li>
              <li>
                <Link to="/products/mca" className="text-gray-400 hover:text-anchor-teal transition-colors duration-200 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-anchor-teal transition-all duration-200 mr-0 group-hover:mr-2"></span>
                  Merchant Cash Advance
                </Link>
              </li>
              <li>
                <Link to="/products/business-loans" className="text-gray-400 hover:text-anchor-teal transition-colors duration-200 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-anchor-teal transition-all duration-200 mr-0 group-hover:mr-2"></span>
                  Business Loans
                </Link>
              </li>
              <li>
                <Link to="/products/line-of-credit" className="text-gray-400 hover:text-anchor-teal transition-colors duration-200 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-anchor-teal transition-all duration-200 mr-0 group-hover:mr-2"></span>
                  Line of Credit
                </Link>
              </li>
              <li>
                <Link to="/products/term-loans" className="text-gray-400 hover:text-anchor-teal transition-colors duration-200 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-anchor-teal transition-all duration-200 mr-0 group-hover:mr-2"></span>
                  Term Loans
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm group">
                <Phone size={18} className="mt-0.5 flex-shrink-0 text-anchor-teal group-hover:scale-110 transition-transform duration-200" />
                <a href="tel:+16469936971" className="hover:text-anchor-teal transition-colors duration-200">
                  (646) 993-6971
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm group">
                <Mail size={18} className="mt-0.5 flex-shrink-0 text-anchor-teal group-hover:scale-110 transition-transform duration-200" />
                <a href="mailto:david@anchorfundingusa.com" className="hover:text-anchor-teal transition-colors duration-200">
                  david@anchorfundingusa.com
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm group">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-anchor-teal group-hover:scale-110 transition-transform duration-200" />
                <span className="text-gray-400">
                  88 Pine Street<br />
                  Manhattan, New York 10005
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <p className="text-sm mb-4 md:mb-0 text-gray-400">
              &copy; {currentYear} Anchor Funding USA. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-anchor-teal transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-anchor-teal transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
          
          {/* Trust Badges - Enhanced */}
          <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="flex items-center space-x-3 text-gray-400 group">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield size={24} className="text-green-500" />
                </div>
                <div>
                  <span className="text-sm font-bold text-white block">SSL Secure</span>
                  <span className="text-xs text-gray-500">256-bit Encryption</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 group">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield size={24} className="text-blue-500" />
                </div>
                <div>
                  <span className="text-sm font-bold text-white block">Bank-Level Security</span>
                  <span className="text-xs text-gray-500">PCI Compliant</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 group">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle size={24} className="text-green-500" />
                </div>
                <div>
                  <span className="text-sm font-bold text-white block">HTTPS Encrypted</span>
                  <span className="text-xs text-gray-500">Verified & Secure</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 group">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500/20 to-teal-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Lock size={24} className="text-anchor-teal" />
                </div>
                <div>
                  <span className="text-sm font-bold text-white block">Data Protected</span>
                  <span className="text-xs text-gray-500">GDPR Compliant</span>
                </div>
              </div>
            </div>
            <p className="text-center text-xs text-gray-500 mt-6">
              🔒 Your information is protected by industry-leading 256-bit SSL encryption
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
