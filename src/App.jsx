import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Apply from './pages/Apply'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import SBALoans from './pages/products/SBALoans'
import MCA from './pages/products/MCA'
import BusinessLoans from './pages/products/BusinessLoans'
import LineOfCredit from './pages/products/LineOfCredit'
import LoanConsolidation from './pages/products/LoanConsolidation'
import TermLoans from './pages/products/TermLoans'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            
            {/* Product Pages */}
            <Route path="/products/sba-loans" element={<SBALoans />} />
            <Route path="/products/mca" element={<MCA />} />
            <Route path="/products/business-loans" element={<BusinessLoans />} />
            <Route path="/products/line-of-credit" element={<LineOfCredit />} />
            <Route path="/products/loan-consolidation" element={<LoanConsolidation />} />
            <Route path="/products/term-loans" element={<TermLoans />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
