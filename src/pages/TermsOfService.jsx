import { Link } from 'react-router-dom'

const TermsOfService = () => {
  const lastUpdated = "January 6, 2026"

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-anchor-navy to-anchor-blue text-white py-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms of Service
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms of Service ("Terms") govern your access to and use of the Anchor Funding website and services (collectively, the "Service"). By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.
                </p>
              </div>

              {/* Use of Service */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of Service</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Eligibility</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You must be at least 18 years old and legally able to enter into contracts to use our Service. By using the Service, you represent and warrant that you meet these requirements.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Account Registration</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When you create an account or submit an application, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and promptly update your information</li>
                  <li>Maintain the security of your account</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized use</li>
                </ul>
              </div>

              {/* Services Provided */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Services Provided</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Anchor Funding provides business funding services including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>SBA Loans</li>
                  <li>Merchant Cash Advances</li>
                  <li>Business Loans</li>
                  <li>Lines of Credit</li>
                  <li>Loan Consolidation</li>
                  <li>Term Loans</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Approval and terms of funding are subject to our underwriting criteria and may vary based on your business qualifications.
                </p>
              </div>

              {/* Application Process */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Application and Approval</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Application Submission</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By submitting an application, you:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Authorize us to obtain credit reports and verify information</li>
                  <li>Certify that all information provided is true and accurate</li>
                  <li>Understand that false information may result in application denial</li>
                  <li>Agree to provide additional documentation as requested</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 No Guarantee of Approval</h3>
                <p className="text-gray-700 leading-relaxed">
                  Submission of an application does not guarantee approval. We reserve the right to decline any application at our sole discretion. Applications are subject to credit approval and underwriting criteria.
                </p>
              </div>

              {/* Fees and Payments */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Fees and Payments</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Application Fees</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We do not charge upfront application fees. You only pay if you accept a funding offer.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Funding Terms</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If approved, specific terms including interest rates, fees, repayment schedule, and other conditions will be provided in your funding agreement. You agree to review and accept these terms before receiving funds.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.3 Repayment</h3>
                <p className="text-gray-700 leading-relaxed">
                  You agree to repay all borrowed funds according to the terms specified in your funding agreement. Failure to repay may result in additional fees, collection actions, and negative impact to your credit.
                </p>
              </div>

              {/* Prohibited Uses */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Prohibited Uses</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You may not use our Service to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Violate any laws or regulations</li>
                  <li>Provide false or misleading information</li>
                  <li>Impersonate any person or entity</li>
                  <li>Interfere with the Service or servers</li>
                  <li>Attempt to gain unauthorized access to systems</li>
                  <li>Use automated systems to access the Service</li>
                  <li>Engage in fraudulent activities</li>
                  <li>Transmit viruses or malicious code</li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Service and its original content, features, and functionality are owned by Anchor Funding and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any of our content without our express written permission.
                </p>
              </div>

              {/* User Content */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. User Content</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By submitting content to us (including applications, documents, and communications), you grant us a license to use, reproduce, and process this content for the purpose of providing our services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You retain ownership of your content but represent that you have the right to grant us this license.
                </p>
              </div>

              {/* Disclaimer */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Disclaimer of Warranties</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We do not warrant that the Service will be uninterrupted, secure, or error-free, or that defects will be corrected.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, ANCHOR FUNDING SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF OR INABILITY TO USE THE SERVICE.
                </p>
              </div>

              {/* Indemnification */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Indemnification</h2>
                <p className="text-gray-700 leading-relaxed">
                  You agree to indemnify, defend, and hold harmless Anchor Funding and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses arising out of your use of the Service, violation of these Terms, or violation of any rights of another.
                </p>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved in the courts located in New York, NY.
                </p>
              </div>

              {/* Changes to Terms */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last Updated" date. Your continued use of the Service after such modifications constitutes your acceptance of the updated Terms.
                </p>
              </div>

              {/* Termination */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Termination</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including breach of these Terms. Upon termination, your right to use the Service will immediately cease.
                </p>
              </div>

              {/* Severability */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Severability</h2>
                <p className="text-gray-700 leading-relaxed">
                  If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-900 font-semibold mb-2">Anchor Funding</p>
                  <p className="text-gray-700">123 Financial District</p>
                  <p className="text-gray-700">New York, NY 10004</p>
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

export default TermsOfService
