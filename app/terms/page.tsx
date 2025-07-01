import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, FileText, Scale } from "lucide-react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function TermsPage() {
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
                  <Scale className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
              <p className="text-xl text-gray-600 mb-8">Please read these terms carefully before using our platform</p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <span>Last updated: December 19, 2024</span>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span>Effective: December 19, 2024</span>
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
                    <a href="#acceptance" className="text-primary hover:underline">
                      1. Acceptance of Terms
                    </a>
                    <a href="#services" className="text-primary hover:underline">
                      2. Description of Services
                    </a>
                    <a href="#eligibility" className="text-primary hover:underline">
                      3. User Eligibility
                    </a>
                    <a href="#accounts" className="text-primary hover:underline">
                      4. User Accounts
                    </a>
                    <a href="#trading" className="text-primary hover:underline">
                      5. Trading Services
                    </a>
                    <a href="#fees" className="text-primary hover:underline">
                      6. Fees and Payments
                    </a>
                    <a href="#risks" className="text-primary hover:underline">
                      7. Risk Disclosure
                    </a>
                    <a href="#prohibited" className="text-primary hover:underline">
                      8. Prohibited Activities
                    </a>
                    <a href="#liability" className="text-primary hover:underline">
                      9. Limitation of Liability
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div id="acceptance" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Acceptance of Terms</h2>
                <p className="text-gray-700 mb-4">
                  By accessing or using the Traders Circle platform ("Platform"), you agree to be bound by these Terms
                  of Service ("Terms"). If you do not agree to these Terms, you may not access or use our Platform.
                </p>
                <p className="text-gray-700">
                  These Terms constitute a legally binding agreement between you and Traders Circle Nigeria Limited, a
                  company incorporated under Nigerian law with registration number RC123456789.
                </p>
              </div>

              <div id="services" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Description of Services</h2>
                <p className="text-gray-700 mb-4">
                  Traders Circle provides a copy trading platform that allows users to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Connect with verified master traders</li>
                  <li>Automatically copy trading strategies</li>
                  <li>Access trading analytics and performance data</li>
                  <li>Manage risk and portfolio allocation</li>
                  <li>Receive educational content and market insights</li>
                </ul>
                <p className="text-gray-700">
                  Our services are provided through partnerships with licensed brokers regulated by the Securities and
                  Exchange Commission (SEC) of Nigeria and other relevant authorities.
                </p>
              </div>

              <div id="eligibility" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">3. User Eligibility</h2>
                <p className="text-gray-700 mb-4">To use our Platform, you must:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Be at least 18 years of age</li>
                  <li>Be a legal resident of Nigeria or other supported jurisdiction</li>
                  <li>Have the legal capacity to enter into binding agreements</li>
                  <li>Provide accurate and complete registration information</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                    <p className="text-yellow-800 text-sm">
                      <strong>Important:</strong> Trading involves significant risk of loss. You should only trade with
                      money you can afford to lose.
                    </p>
                  </div>
                </div>
              </div>

              <div id="accounts" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">4. User Accounts</h2>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">4.1 Account Registration</h3>
                <p className="text-gray-700 mb-4">
                  You must create an account to access our services. You agree to provide accurate, current, and
                  complete information during registration and to update such information as necessary.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">4.2 Account Security</h3>
                <p className="text-gray-700 mb-4">
                  You are responsible for maintaining the confidentiality of your account credentials and for all
                  activities that occur under your account. You must notify us immediately of any unauthorized use of
                  your account.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">4.3 KYC Requirements</h3>
                <p className="text-gray-700">
                  In compliance with Nigerian Anti-Money Laundering (AML) regulations, we require identity verification
                  including valid government-issued ID, proof of address, and other documentation as required by law.
                </p>
              </div>

              <div id="trading" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Trading Services</h2>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">5.1 Copy Trading</h3>
                <p className="text-gray-700 mb-4">
                  Our copy trading service allows you to automatically replicate the trades of selected master traders.
                  You acknowledge that:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Past performance does not guarantee future results</li>
                  <li>All trading involves risk of substantial loss</li>
                  <li>You are responsible for your own trading decisions</li>
                  <li>Master traders' strategies may not be suitable for your risk profile</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">5.2 Master Trader Verification</h3>
                <p className="text-gray-700 mb-4">
                  While we conduct thorough vetting of master traders using AI analysis and performance verification, we
                  do not guarantee their future performance or the profitability of their strategies.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">5.3 Execution and Slippage</h3>
                <p className="text-gray-700">
                  Trade execution is subject to market conditions, broker availability, and technical factors. Slippage
                  may occur, and actual execution prices may differ from intended prices.
                </p>
              </div>

              <div id="fees" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Fees and Payments</h2>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">6.1 Platform Fees</h3>
                <p className="text-gray-700 mb-4">
                  Our platform charges monthly subscription fees as outlined in our pricing page. Fees are charged in
                  Nigerian Naira (₦) and are non-refundable except as required by law.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">6.2 Master Trader Fees</h3>
                <p className="text-gray-700 mb-4">
                  Master traders may charge performance fees, typically 20-30% of profits generated. These fees are
                  clearly disclosed before you begin copying a trader.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">6.3 Third-Party Costs</h3>
                <p className="text-gray-700">
                  Additional costs may include broker spreads, commissions, and other trading-related fees charged by
                  your chosen broker.
                </p>
              </div>

              <div id="risks" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Risk Disclosure</h2>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-4">
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-red-600 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-red-800 mb-2">High Risk Warning</h3>
                      <p className="text-red-700 text-sm">
                        Trading foreign exchange, contracts for difference (CFDs), and other leveraged products carries
                        a high level of risk and may not be suitable for all investors. You could lose more than your
                        initial investment.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">
                  For detailed risk information, please review our comprehensive
                  <Link href="/risk" className="text-primary hover:underline ml-1">
                    Risk Disclosure Statement
                  </Link>
                  .
                </p>
              </div>

              <div id="prohibited" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Prohibited Activities</h2>
                <p className="text-gray-700 mb-4">You agree not to:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Use the Platform for any illegal or unauthorized purpose</li>
                  <li>Manipulate or attempt to manipulate market prices</li>
                  <li>Engage in money laundering or terrorist financing</li>
                  <li>Share your account credentials with third parties</li>
                  <li>Reverse engineer or attempt to access our proprietary systems</li>
                  <li>Provide false or misleading information</li>
                  <li>Engage in abusive or disruptive behavior</li>
                </ul>
              </div>

              <div id="liability" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  To the maximum extent permitted by Nigerian law, Traders Circle shall not be liable for:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Any trading losses or investment losses</li>
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Technical failures or system downtime</li>
                  <li>Actions or omissions of third-party brokers</li>
                </ul>
                <p className="text-gray-700">
                  Our total liability to you shall not exceed the fees paid by you to us in the 12 months preceding the
                  claim.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">10. Governing Law and Jurisdiction</h2>
                <p className="text-gray-700 mb-4">
                  These Terms are governed by the laws of the Federal Republic of Nigeria. Any disputes arising from
                  these Terms shall be subject to the exclusive jurisdiction of the Nigerian courts.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">11. Changes to Terms</h2>
                <p className="text-gray-700 mb-4">
                  We reserve the right to modify these Terms at any time. We will notify users of material changes via
                  email or platform notification. Continued use of the Platform after changes constitutes acceptance of
                  the new Terms.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">12. Contact Information</h2>
                <p className="text-gray-700 mb-4">For questions about these Terms, please contact us:</p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700 mb-2">
                    <strong>Traders Circle Nigeria Limited</strong>
                  </p>
                  <p className="text-gray-700 mb-2">Email: legal@traderscircle.ng</p>
                  <p className="text-gray-700 mb-2">Phone: +234 812 345 6789</p>
                  <p className="text-gray-700">Address: 123 Victoria Island, Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
