import { Check, X, Star, Shield, Zap, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "₦15,000",
      period: "/month",
      description: "Perfect for beginners starting their copy trading journey",
      icon: <Zap className="h-6 w-6" />,
      popular: false,
      features: [
        "Copy up to 2 master traders",
        "Basic portfolio analytics",
        "Email support",
        "Mobile app access",
        "Risk management tools",
        "Monthly performance reports",
      ],
      limitations: ["Limited to ₦500,000 portfolio", "Standard execution speed", "Basic customer support"],
    },
    {
      name: "Professional",
      price: "₦35,000",
      period: "/month",
      description: "Most popular plan for serious traders",
      icon: <Star className="h-6 w-6" />,
      popular: true,
      features: [
        "Copy up to 5 master traders",
        "Advanced analytics & insights",
        "Priority WhatsApp support",
        "Real-time notifications",
        "Advanced risk controls",
        "Weekly strategy calls",
        "Portfolio diversification tools",
        "Custom alerts & signals",
      ],
      limitations: ["Limited to ₦2,000,000 portfolio"],
    },
    {
      name: "Elite",
      price: "₦75,000",
      period: "/month",
      description: "For high-volume traders and institutions",
      icon: <Crown className="h-6 w-6" />,
      popular: false,
      features: [
        "Copy unlimited master traders",
        "Premium analytics suite",
        "Dedicated account manager",
        "24/7 phone support",
        "Advanced portfolio tools",
        "Daily market briefings",
        "Custom strategy development",
        "API access for automation",
        "Institutional-grade execution",
        "Tax reporting assistance",
      ],
      limitations: [],
    },
  ]

  const faqs = [
    {
      question: "Are there any hidden fees?",
      answer:
        "No hidden fees! Our pricing is transparent. You only pay the monthly subscription fee. Master traders set their own profit-sharing rates (typically 20-30%).",
    },
    {
      question: "Can I change plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept bank transfers, debit cards, Paystack, Flutterwave, and USSD payments. All payments are processed securely.",
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! We offer a 7-day free trial on all plans. No credit card required to start.",
    },
    {
      question: "What happens if I exceed my portfolio limit?",
      answer:
        "You'll receive notifications when approaching your limit. To continue trading, you can upgrade your plan or reduce your portfolio size.",
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee if you're not satisfied with our service.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Simple, Transparent
              <span className="text-primary block">Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Choose the perfect plan for your trading journey. All plans include our AI-vetted master traders and
              secure copy trading technology.
            </p>
            <div className="flex items-center justify-center space-x-4 mb-12">
              <Shield className="h-5 w-5 text-green-600" />
              <span className="text-sm text-gray-600">7-day free trial</span>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <Shield className="h-5 w-5 text-green-600" />
              <span className="text-sm text-gray-600">30-day money-back guarantee</span>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <Shield className="h-5 w-5 text-green-600" />
              <span className="text-sm text-gray-600">No setup fees</span>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative ${plan.popular ? "border-primary shadow-xl scale-105" : "border-gray-200"}`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center pb-8">
                    <div className="flex justify-center mb-4">
                      <div
                        className={`p-3 rounded-full ${plan.popular ? "bg-primary text-white" : "bg-gray-100 text-gray-600"}`}
                      >
                        {plan.icon}
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <CardDescription className="text-gray-600 mt-2">{plan.description}</CardDescription>
                    <div className="mt-6">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 mb-8">
                      <h4 className="font-semibold text-green-700 flex items-center">
                        <Check className="h-4 w-4 mr-2" />
                        What's included:
                      </h4>
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <Check className="h-4 w-4 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}

                      {plan.limitations.length > 0 && (
                        <>
                          <h4 className="font-semibold text-gray-600 flex items-center mt-6">
                            <X className="h-4 w-4 mr-2" />
                            Limitations:
                          </h4>
                          {plan.limitations.map((limitation, idx) => (
                            <div key={idx} className="flex items-start">
                              <X className="h-4 w-4 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{limitation}</span>
                            </div>
                          ))}
                        </>
                      )}
                    </div>

                    <Button
                      className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      Start Free Trial
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Costs */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Additional Information</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="h-5 w-5 mr-2 text-primary" />
                      Master Trader Fees
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Master traders set their own profit-sharing rates, typically ranging from 20-30% of profits
                      generated.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Only pay when you profit</li>
                      <li>• No fees on losing trades</li>
                      <li>• Transparent fee structure</li>
                      <li>• Fees clearly displayed before copying</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="h-5 w-5 mr-2 text-primary" />
                      Broker Costs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Standard broker spreads and commissions apply based on your chosen broker.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Competitive spreads from 0.1 pips</li>
                      <li>• No markup on broker fees</li>
                      <li>• Choose from vetted Nigerian brokers</li>
                      <li>• Transparent cost breakdown</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Copy Trading?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of Nigerian traders already profiting with our AI-vetted masters
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Start 7-Day Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Schedule Demo Call
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
