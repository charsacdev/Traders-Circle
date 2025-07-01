import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, FileCheck, Users, Building, Scale, CheckCircle, FileText } from "lucide-react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function CompliancePage() {
  const certifications = [
    {
      name: "SEC Nigeria License",
      status: "Active",
      number: "SEC/LIC/2024/001",
      description: "Licensed by Securities and Exchange Commission Nigeria",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      name: "ISO 27001",
      status: "Certified",
      number: "ISO27001:2022",
      description: "Information Security Management System",
      icon: <FileCheck className="h-6 w-6" />,
    },
    {
      name: "NDPR Compliance",
      status: "Compliant",
      number: "NDPR/2024/TC",
      description: "Nigeria Data Protection Regulation",
      icon: <Users className="h-6 w-6" />,
    },
    {
      name: "CBN Guidelines",
      status: "Compliant",
      number: "CBN/BSD/2024",
      description: "Central Bank of Nigeria Banking Guidelines",
      icon: <Building className="h-6 w-6" />,
    },
  ]

  const policies = [
    {
      title: "Anti-Money Laundering (AML)",
      description: "Comprehensive AML policies to prevent financial crimes",
      details: [
        "Customer Due Diligence (CDD) procedures",
        "Enhanced Due Diligence (EDD) for high-risk clients",
        "Suspicious Activity Reporting (SAR)",
        "Regular AML training for staff",
      ],
    },
    {
      title: "Know Your Customer (KYC)",
      description: "Robust identity verification and customer onboarding",
      details: [
        "Government-issued ID verification",
        "Proof of address validation",
        "Source of funds verification",
        "Ongoing customer monitoring",
      ],
    },
    {
      title: "Data Protection & Privacy",
      description: "Protecting customer data in accordance with NDPR",
      details: [
        "Data encryption at rest and in transit",
        "Access controls and audit trails",
        "Regular security assessments",
        "Privacy by design principles",
      ],
    },
    {
      title: "Risk Management",
      description: "Comprehensive risk management framework",
      details: [
        "Market risk assessment and monitoring",
        "Operational risk controls",
        "Liquidity risk management",
        "Regular stress testing",
      ],
    },
  ]

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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Regulatory Compliance</h1>
              <p className="text-xl text-gray-600 mb-8">
                Committed to the highest standards of regulatory compliance and customer protection
              </p>
              <div className="flex items-center justify-center space-x-6 mb-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-600">SEC Nigeria Licensed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-600">ISO 27001 Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-600">NDPR Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Licenses & Certifications</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-primary/10 rounded-lg text-primary">{cert.icon}</div>
                          <div>
                            <CardTitle className="text-lg">{cert.name}</CardTitle>
                            <p className="text-sm text-gray-600">{cert.number}</p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {cert.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{cert.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Regulatory Framework */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Regulatory Framework</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Building className="h-5 w-5 mr-2 text-primary" />
                      Nigerian Regulations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span className="text-sm">Securities and Exchange Commission (SEC) Nigeria</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span className="text-sm">Central Bank of Nigeria (CBN) Guidelines</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span className="text-sm">Nigeria Data Protection Regulation (NDPR)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span className="text-sm">Financial Intelligence Unit (NFIU) Requirements</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Scale className="h-5 w-5 mr-2 text-primary" />
                      International Standards
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span className="text-sm">Financial Action Task Force (FATF) Guidelines</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span className="text-sm">Basel III Capital Requirements</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span className="text-sm">ISO 27001 Information Security</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span className="text-sm">GDPR Privacy Principles</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Policies */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Compliance Policies</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {policies.map((policy, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{policy.title}</CardTitle>
                      <p className="text-gray-600 text-sm">{policy.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {policy.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
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
                    Compliance Documentation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <a href="#governance" className="text-primary hover:underline">
                      1. Corporate Governance
                    </a>
                    <a href="#aml" className="text-primary hover:underline">
                      2. AML/CTF Framework
                    </a>
                    <a href="#kyc" className="text-primary hover:underline">
                      3. KYC Procedures
                    </a>
                    <a href="#data" className="text-primary hover:underline">
                      4. Data Protection
                    </a>
                    <a href="#risk" className="text-primary hover:underline">
                      5. Risk Management
                    </a>
                    <a href="#reporting" className="text-primary hover:underline">
                      6. Regulatory Reporting
                    </a>
                    <a href="#audit" className="text-primary hover:underline">
                      7. Internal Audit
                    </a>
                    <a href="#training" className="text-primary hover:underline">
                      8. Staff Training
                    </a>
                    <a href="#monitoring" className="text-primary hover:underline">
                      9. Ongoing Monitoring
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Detailed Compliance Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div id="governance" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Corporate Governance</h2>
                <p className="text-gray-700 mb-4">
                  Traders Circle maintains the highest standards of corporate governance in accordance with Nigerian
                  corporate law and international best practices.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">Board of Directors</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Independent board oversight with diverse expertise</li>
                  <li>Regular board meetings and comprehensive reporting</li>
                  <li>Risk and audit committee supervision</li>
                  <li>Compliance officer reporting directly to the board</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">Regulatory Reporting</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Monthly regulatory returns to SEC Nigeria</li>
                  <li>Quarterly financial statements and audits</li>
                  <li>Annual compliance certification</li>
                  <li>Incident reporting within required timeframes</li>
                </ul>
              </div>

              <div id="aml" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Anti-Money Laundering (AML) Framework</h2>
                <p className="text-gray-700 mb-4">
                  Our comprehensive AML program is designed to detect, prevent, and report money laundering and
                  terrorist financing activities.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">AML Policies and Procedures</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Written AML policies approved by senior management</li>
                  <li>Regular policy updates to reflect regulatory changes</li>
                  <li>Clear escalation procedures for suspicious activities</li>
                  <li>Comprehensive record-keeping requirements</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">Transaction Monitoring</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Automated transaction monitoring systems</li>
                  <li>Real-time screening against sanctions lists</li>
                  <li>Threshold-based reporting for large transactions</li>
                  <li>Pattern analysis for unusual trading behavior</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">Suspicious Activity Reporting</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Timely filing of Suspicious Transaction Reports (STRs)</li>
                  <li>Coordination with Nigerian Financial Intelligence Unit (NFIU)</li>
                  <li>Confidential reporting procedures</li>
                  <li>Regular review of reporting thresholds</li>
                </ul>
              </div>

              <div id="kyc" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Know Your Customer (KYC) Procedures</h2>
                <p className="text-gray-700 mb-4">
                  Our KYC procedures ensure we know our customers and understand the nature and purpose of their
                  business relationships with us.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">Customer Identification</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Government-issued photo identification verification</li>
                  <li>Proof of address within the last 3 months</li>
                  <li>Biometric verification where applicable</li>
                  <li>Digital identity verification using trusted providers</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">Customer Due Diligence (CDD)</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Risk assessment based on customer profile</li>
                  <li>Source of funds and wealth verification</li>
                  <li>Purpose and intended nature of business relationship</li>
                  <li>Ongoing monitoring of customer transactions</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">Enhanced Due Diligence (EDD)</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Additional verification for high-risk customers</li>
                  <li>Politically Exposed Persons (PEP) screening</li>
                  <li>Enhanced monitoring of high-value transactions</li>
                  <li>Senior management approval for high-risk relationships</li>
                </ul>
              </div>

              <div id="data" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Data Protection Compliance</h2>
                <p className="text-gray-700 mb-4">
                  We are fully compliant with the Nigeria Data Protection Regulation (NDPR) and implement international
                  best practices for data protection.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">Data Processing Principles</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Lawful, fair, and transparent processing</li>
                  <li>Purpose limitation and data minimization</li>
                  <li>Accuracy and storage limitation</li>
                  <li>Integrity, confidentiality, and accountability</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">Technical and Organizational Measures</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>End-to-end encryption for data in transit and at rest</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Regular security assessments and penetration testing</li>
                  <li>Data breach response and notification procedures</li>
                </ul>
              </div>

              <div id="risk" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Risk Management Framework</h2>
                <p className="text-gray-700 mb-4">
                  Our comprehensive risk management framework identifies, assesses, and mitigates various risks
                  associated with our business operations.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">Risk Categories</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Market risk and volatility management</li>
                  <li>Credit and counterparty risk assessment</li>
                  <li>Operational risk controls and procedures</li>
                  <li>Liquidity risk monitoring and management</li>
                  <li>Regulatory and compliance risk oversight</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">Risk Monitoring and Reporting</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Daily risk monitoring and reporting</li>
                  <li>Regular stress testing and scenario analysis</li>
                  <li>Risk appetite statements and limits</li>
                  <li>Escalation procedures for risk breaches</li>
                </ul>
              </div>

              <div id="reporting" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Regulatory Reporting</h2>
                <p className="text-gray-700 mb-4">
                  We maintain comprehensive reporting procedures to ensure timely and accurate submission of all
                  required regulatory reports.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">Reporting Requirements</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Monthly returns to SEC Nigeria</li>
                  <li>Quarterly financial statements</li>
                  <li>Annual audited accounts</li>
                  <li>Suspicious transaction reports to NFIU</li>
                  <li>Large transaction reports</li>
                  <li>Incident and breach notifications</li>
                </ul>
              </div>

              <div id="audit" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Internal Audit Function</h2>
                <p className="text-gray-700 mb-4">
                  Our independent internal audit function provides assurance on the effectiveness of our risk
                  management, control, and governance processes.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">Audit Activities</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Annual risk-based audit planning</li>
                  <li>Regular compliance testing and reviews</li>
                  <li>Systems and process audits</li>
                  <li>Follow-up on audit recommendations</li>
                  <li>External audit coordination</li>
                </ul>
              </div>

              <div id="training" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Staff Training and Awareness</h2>
                <p className="text-gray-700 mb-4">
                  All staff receive comprehensive training on compliance requirements and are regularly updated on
                  regulatory changes.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">Training Programs</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Initial compliance training for new employees</li>
                  <li>Annual refresher training for all staff</li>
                  <li>Specialized training for high-risk roles</li>
                  <li>Regular updates on regulatory changes</li>
                  <li>Testing and certification requirements</li>
                </ul>
              </div>

              <div id="monitoring" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Ongoing Monitoring and Review</h2>
                <p className="text-gray-700 mb-4">
                  We continuously monitor our compliance with regulatory requirements and regularly review and update
                  our policies and procedures.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">Monitoring Activities</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Daily compliance monitoring and reporting</li>
                  <li>Regular policy and procedure reviews</li>
                  <li>Regulatory change impact assessments</li>
                  <li>Customer feedback and complaint analysis</li>
                  <li>Continuous improvement initiatives</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Contact Our Compliance Team</h2>
                <p className="text-gray-700 mb-4">
                  For compliance-related questions or to report concerns, contact our dedicated compliance team:
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-2">
                    <strong>Chief Compliance Officer</strong>
                  </p>
                  <p className="text-gray-700 mb-2">Email: compliance@traderscircle.ng</p>
                  <p className="text-gray-700 mb-2">Phone: +234 812 345 6789</p>
                  <p className="text-gray-700 mb-2">Address: 123 Victoria Island, Lagos, Nigeria</p>
                  <p className="text-gray-700 text-sm mt-4">
                    <strong>Confidential Reporting:</strong> We maintain a confidential reporting system for compliance
                    concerns and potential violations.
                  </p>
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
