import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Shield, CheckCircle, Lock } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-anchor-blue to-anchor-teal rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <span className="text-xl font-bold text-white">
                Anchor Funding
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Empowering businesses with flexible funding solutions to fuel growth and success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-anchor-teal transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-anchor-teal transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-anchor-teal transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-anchor-teal transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-anchor-teal transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-anchor-teal transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-anchor-teal transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-sm">Business Loans</li>
              <li className="text-sm">Equipment Financing</li>
              <li className="text-sm">Invoice Factoring</li>
              <li className="text-sm">Line of Credit</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <span>(646) 993-6971</span>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <span>david@anchorfundingusa.com</span>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>123 Financial District, New York, NY 10004</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="mb-4 md:mb-0">&copy; {currentYear} Anchor Funding. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="hover:text-anchor-teal transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-anchor-teal transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="flex items-center space-x-2 text-gray-400">
                <Shield size={24} className="text-green-500" />
                <span className="text-sm">SSL Secure</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Shield size={24} className="text-blue-500" />
                <span className="text-sm">Bank-Level Security</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <CheckCircle size={24} className="text-green-500" />
                <span className="text-sm">HTTPS Encrypted</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Lock size={24} className="text-anchor-teal" />
                <span className="text-sm">Data Protected</span>
              </div>
            </div>
            <p className="text-center text-xs text-gray-500 mt-6">
              Your information is protected by 256-bit SSL encryption
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
