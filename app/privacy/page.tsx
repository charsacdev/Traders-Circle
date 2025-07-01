import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye, Database, FileText } from "lucide-react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
              <p className="text-xl text-gray-600 mb-8">
                Your privacy is important to us. Learn how we collect, use, and protect your information.
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <span>Last updated: December 19, 2024</span>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span>Effective: December 19, 2024</span>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Highlights */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Privacy Commitments</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <Card className="text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <Lock className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Data Encryption</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      All personal and financial data is encrypted using industry-standard AES-256 encryption
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <Eye className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">No Data Selling</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      We never sell your personal information to third parties or use it for advertising
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <Database className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Secure Storage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Data stored in secure, compliant facilities with regular security audits and monitoring
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">NDPR Compliant</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Fully compliant with Nigeria Data Protection Regulation and international standards
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2" />
                    Quick Navigation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <a href="#information" className="text-primary hover:underline">
                      1. Information We Collect
                    </a>
                    <a href="#usage" className="text-primary hover:underline">
                      2. How We Use Information
                    </a>
                    <a href="#sharing" className="text-primary hover:underline">
                      3. Information Sharing
                    </a>
                    <a href="#security" className="text-primary hover:underline">
                      4. Data Security
                    </a>
                    <a href="#retention" className="text-primary hover:underline">
                      5. Data Retention
                    </a>
                    <a href="#rights" className="text-primary hover:underline">
                      6. Your Rights
                    </a>
                    <a href="#cookies" className="text-primary hover:underline">
                      7. Cookies & Tracking
                    </a>
                    <a href="#international" className="text-primary hover:underline">
                      8. International Transfers
                    </a>
                    <a href="#contact" className="text-primary hover:underline">
                      9. Contact Us
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="mb-8">
                <p className="text-gray-700 text-lg">
                  Traders Circle Nigeria Limited ("we," "our," or "us") is committed to protecting your privacy. This
                  Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our
                  copy trading platform and related services.
                </p>
              </div>

              <div id="information" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Information We Collect</h2>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">1.1 Personal Information</h3>
                <p className="text-gray-700 mb-4">
                  We collect personal information you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>
                    <strong>Identity Information:</strong> Full name, date of birth, nationality, government-issued ID
                  </li>
                  <li>
                    <strong>Contact Information:</strong> Email address, phone number, residential address
                  </li>
                  <li>
                    <strong>Financial Information:</strong> Bank account details, trading account information, income
                    verification
                  </li>
                  <li>
                    <strong>Professional Information:</strong> Employment status, trading experience, investment
                    objectives
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">1.2 Trading Data</h3>
                <p className="text-gray-700 mb-4">We collect information related to your trading activities:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Trade history and performance data</li>
                  <li>Portfolio allocation and risk settings</li>
                  <li>Master trader selections and copying preferences</li>
                  <li>Platform usage patterns and preferences</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">1.3 Technical Information</h3>
                <p className="text-gray-700 mb-4">
                  We automatically collect technical information when you use our platform:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>IP address, device type, and browser information</li>
                  <li>Login times and platform usage statistics</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Error logs and performance metrics</li>
                </ul>
              </div>

              <div id="usage" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">2. How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">We use your information for the following purposes:</p>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">2.1 Service Provision</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Provide and maintain our copy trading platform</li>
                  <li>Execute and manage your trading activities</li>
                  <li>Process payments and manage subscriptions</li>
                  <li>Provide customer support and technical assistance</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">2.2 Legal and Regulatory Compliance</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Verify your identity and comply with KYC requirements</li>
                  <li>Monitor for anti-money laundering (AML) compliance</li>
                  <li>Report to regulatory authorities as required</li>
                  <li>Maintain records as required by Nigerian law</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">2.3 Platform Improvement</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Analyze platform usage to improve our services</li>
                  <li>Develop new features and functionality</li>
                  <li>Conduct research and analytics</li>
                  <li>Ensure platform security and prevent fraud</li>
                </ul>
              </div>

              <div id="sharing" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Information Sharing and Disclosure</h2>
                <p className="text-gray-700 mb-4">We may share your information in the following circumstances:</p>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">3.1 Service Providers</h3>
                <p className="text-gray-700 mb-4">
                  We share information with trusted third-party service providers who assist us in operating our
                  platform:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Licensed brokers for trade execution</li>
                  <li>Payment processors for subscription management</li>
                  <li>Cloud hosting providers for data storage</li>
                  <li>Identity verification services for KYC compliance</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">3.2 Legal Requirements</h3>
                <p className="text-gray-700 mb-4">We may disclose information when required by law or to:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Comply with legal processes or government requests</li>
                  <li>Enforce our Terms of Service</li>
                  <li>Protect our rights, property, or safety</li>
                  <li>Investigate potential violations or fraud</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">3.3 Business Transfers</h3>
                <p className="text-gray-700 mb-4">
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred as part
                  of the business transaction, subject to confidentiality agreements.
                </p>
              </div>

              <div id="security" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Data Security</h2>
                <p className="text-gray-700 mb-4">
                  We implement comprehensive security measures to protect your information:
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
                  <h3 className="font-semibold text-blue-800 mb-3">Security Measures Include:</h3>
                  <ul className="list-disc pl-6 text-blue-700 text-sm space-y-1">
                    <li>AES-256 encryption for data at rest and in transit</li>
                    <li>Multi-factor authentication for account access</li>
                    <li>Regular security audits and penetration testing</li>
                    <li>Secure data centers with 24/7 monitoring</li>
                    <li>Employee background checks and security training</li>
                    <li>Incident response and breach notification procedures</li>
                  </ul>
                </div>

                <p className="text-gray-700">
                  While we strive to protect your information, no method of transmission over the internet or electronic
                  storage is 100% secure. We cannot guarantee absolute security.
                </p>
              </div>

              <div id="retention" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Data Retention</h2>
                <p className="text-gray-700 mb-4">
                  We retain your information for as long as necessary to provide our services and comply with legal
                  obligations:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>
                    <strong>Account Information:</strong> Retained while your account is active and for 7 years after
                    closure
                  </li>
                  <li>
                    <strong>Trading Records:</strong> Retained for 7 years as required by Nigerian financial regulations
                  </li>
                  <li>
                    <strong>Communication Records:</strong> Retained for 3 years for customer service purposes
                  </li>
                  <li>
                    <strong>Marketing Data:</strong> Retained until you opt out or for 2 years of inactivity
                  </li>
                </ul>
              </div>

              <div id="rights" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Your Privacy Rights</h2>
                <p className="text-gray-700 mb-4">
                  Under the Nigeria Data Protection Regulation (NDPR), you have the following rights:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Access & Portability</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Request copies of your personal data</li>
                        <li>• Receive data in a portable format</li>
                        <li>• Transfer data to another service</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Correction & Deletion</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Correct inaccurate information</li>
                        <li>• Request deletion of your data</li>
                        <li>• Restrict processing activities</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <p className="text-gray-700 mb-4">
                  To exercise your rights, contact us at privacy@traderscircle.ng. We will respond within 30 days as
                  required by NDPR.
                </p>
              </div>

              <div id="cookies" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Cookies and Tracking Technologies</h2>
                <p className="text-gray-700 mb-4">
                  We use cookies and similar technologies to enhance your experience:
                </p>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">7.1 Types of Cookies</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>
                    <strong>Essential Cookies:</strong> Required for platform functionality and security
                  </li>
                  <li>
                    <strong>Performance Cookies:</strong> Help us analyze platform usage and performance
                  </li>
                  <li>
                    <strong>Functional Cookies:</strong> Remember your preferences and settings
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Provide insights into user behavior and platform improvement
                  </li>
                </ul>

                <p className="text-gray-700">
                  You can control cookies through your browser settings, but disabling certain cookies may affect
                  platform functionality.
                </p>
              </div>

              <div id="international" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">8. International Data Transfers</h2>
                <p className="text-gray-700 mb-4">
                  Your information may be transferred to and processed in countries outside Nigeria for the following
                  purposes:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Cloud hosting and data storage services</li>
                  <li>Customer support and technical assistance</li>
                  <li>Fraud prevention and security monitoring</li>
                  <li>Analytics and platform improvement</li>
                </ul>
                <p className="text-gray-700">
                  We ensure appropriate safeguards are in place for international transfers, including standard
                  contractual clauses and adequacy decisions.
                </p>
              </div>

              <div id="contact" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  For privacy-related questions or to exercise your rights, contact our Data Protection Officer:
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-2">
                    <strong>Data Protection Officer</strong>
                  </p>
                  <p className="text-gray-700 mb-2">Email: privacy@traderscircle.ng</p>
                  <p className="text-gray-700 mb-2">Phone: +234 812 345 6789</p>
                  <p className="text-gray-700 mb-2">Address: 123 Victoria Island, Lagos, Nigeria</p>
                  <p className="text-gray-700 text-sm mt-4">
                    <strong>Response Time:</strong> We will respond to privacy requests within 30 days as required by
                    NDPR.
                  </p>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">10. Changes to This Policy</h2>
                <p className="text-gray-700 mb-4">
                  We may update this Privacy Policy periodically to reflect changes in our practices or legal
                  requirements. We will notify you of material changes via email or platform notification.
                </p>
                <p className="text-gray-700">
                  Your continued use of our platform after changes become effective constitutes acceptance of the
                  updated policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
