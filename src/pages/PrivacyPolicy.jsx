import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
  const lastUpdated = "January 6, 2026"

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-anchor-navy to-anchor-blue text-white py-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-blue-100">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8">
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  Anchor Funding ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Personal Information</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Apply for funding through our application form</li>
                  <li>Contact us via our contact form</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Use our live chat feature</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This information may include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Name and contact information (email, phone, address)</li>
                  <li>Business information (company name, EIN, industry)</li>
                  <li>Financial information (revenue, credit score, bank details)</li>
                  <li>Social Security Number (for credit checks)</li>
                  <li>Any other information you choose to provide</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.2 Automatically Collected Information</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When you visit our website, we automatically collect certain information about your device, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>IP address and browser type</li>
                  <li>Operating system</li>
                  <li>Access times and pages viewed</li>
                  <li>Referring website addresses</li>
                </ul>
              </div>

              {/* How We Use Your Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Process and evaluate your funding applications</li>
                  <li>Communicate with you about our services</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                  <li>Prevent fraud and enhance security</li>
                  <li>Analyze website usage and trends</li>
                </ul>
              </div>

              {/* Information Sharing */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may share your information with:
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Service Providers</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may share your information with third-party service providers who perform services on our behalf, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Email service providers</li>
                  <li>Payment processors</li>
                  <li>Credit bureaus</li>
                  <li>Analytics providers</li>
                  <li>Cloud hosting services</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Legal Requirements</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may disclose your information if required by law or in response to valid requests by public authorities.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.3 Business Transfers</h3>
                <p className="text-gray-700 leading-relaxed">
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
                </p>
              </div>

              {/* Data Security */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Regular security assessments</li>
                  <li>Limited access to personal information</li>
                  <li>Secure servers and firewalls</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  However, no method of transmission over the Internet is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.
                </p>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Privacy Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Access:</strong> Request copies of your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Restriction:</strong> Request restriction of processing</li>
                  <li><strong>Portability:</strong> Request transfer of your information</li>
                  <li><strong>Objection:</strong> Object to our processing of your information</li>
                  <li><strong>Opt-out:</strong> Opt-out of marketing communications</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  To exercise these rights, please contact us at <a href="mailto:david@anchorfundingusa.com" className="text-anchor-blue hover:text-anchor-navy">david@anchorfundingusa.com</a>
                </p>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies and Tracking Technologies</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to collect information about your browsing activities. You can instruct your browser to refuse cookies or indicate when a cookie is being sent. However, some parts of our website may not function properly without cookies.
                </p>
              </div>

              {/* Third-Party Links */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Third-Party Websites</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites. We encourage you to read the privacy policies of any third-party sites you visit.
                </p>
              </div>

              {/* Children's Privacy */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </div>

              {/* Changes to Policy */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have questions or concerns about this Privacy Policy, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-900 font-semibold mb-2">Anchor Funding</p>
                  <p className="text-gray-700">88 Pine Street</p>
                  <p className="text-gray-700">Manhattan, New York 10005</p>
                  <p className="text-gray-700 mt-2">Email: <a href="mailto:david@anchorfundingusa.com" className="text-anchor-blue hover:text-anchor-navy">david@anchorfundingusa.com</a></p>
                  <p className="text-gray-700">Phone: <a href="tel:+16469936971" className="text-anchor-blue hover:text-anchor-navy">(646) 993-6971</a></p>
                </div>
              </div>
            </div>

            {/* Back to Home */}
            <div className="mt-12 text-center">
              <Link to="/" className="btn-primary inline-block">
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy
