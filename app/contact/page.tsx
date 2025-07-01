"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  HelpCircle,
  Users,
  Shield,
  Headphones,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Star,
  Globe,
  Zap,
  Award,
  Search,
  ChevronDown,
  ChevronUp,
  PhoneCall,
  Video,
  AlertCircle,
  CheckCircle2,
  Clock3,
  ArrowRight,
} from "lucide-react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: "",
    priority: "normal",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        category: "",
        message: "",
        priority: "normal",
      })
    }, 5000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp Support",
      description: "Get instant help via WhatsApp",
      value: "+234 901 234 5678",
      action: "Start Chat",
      href: "https://wa.me/2349012345678?text=Hello%20Traders%20Circle,%20I%20need%20help%20with...",
      available: "24/7 Available",
      responseTime: "< 2 minutes",
      color: "bg-green-500",
      gradient: "from-green-400 to-green-600",
      popular: true,
    },
    {
      icon: PhoneCall,
      title: "Phone Support",
      description: "Speak directly with our team",
      value: "+234 901 234 5678",
      action: "Call Now",
      href: "tel:+2349012345678",
      available: "9AM - 6PM WAT",
      responseTime: "Immediate",
      color: "bg-blue-500",
      gradient: "from-blue-400 to-blue-600",
      popular: false,
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send detailed inquiries",
      value: "support@traderscircle.ng",
      action: "Send Email",
      href: "mailto:support@traderscircle.ng?subject=Support%20Request",
      available: "24/7 Monitoring",
      responseTime: "< 2 hours",
      color: "bg-purple-500",
      gradient: "from-purple-400 to-purple-600",
      popular: false,
    },
    {
      icon: Video,
      title: "Video Call",
      description: "Schedule a video consultation",
      value: "Book a Session",
      action: "Schedule Call",
      href: "#",
      available: "Mon - Fri",
      responseTime: "Same day",
      color: "bg-orange-500",
      gradient: "from-orange-400 to-orange-600",
      popular: false,
    },
  ]

  const offices = [
    {
      city: "Lagos",
      address: "15 Adeola Odeku Street, Victoria Island, Lagos State",
      phone: "+234 901 234 5678",
      email: "lagos@traderscircle.ng",
      hours: "Monday - Friday: 9AM - 6PM WAT",
      manager: "Adebayo Johnson",
      image: "/placeholder.svg?height=200&width=300",
      isHeadquarters: true,
    },
    {
      city: "Abuja",
      address: "23 Gana Street, Maitama District, FCT Abuja",
      phone: "+234 902 345 6789",
      email: "abuja@traderscircle.ng",
      hours: "Monday - Friday: 9AM - 6PM WAT",
      manager: "Fatima Abdullahi",
      image: "/placeholder.svg?height=200&width=300",
      isHeadquarters: false,
    },
  ]

  const faqs = [
    {
      category: "General",
      question: "How quickly do you respond to inquiries?",
      answer:
        "We pride ourselves on fast response times: WhatsApp messages are typically answered within 2 minutes, emails within 2 hours during business hours, and phone calls are answered immediately during our operating hours (9AM-6PM WAT).",
      priority: "high",
    },
    {
      category: "Security",
      question: "Is my money safe with Traders Circle?",
      answer:
        "Absolutely. Your funds remain in your own brokerage account at all times. We never hold, touch, or have access to your money. Our platform only facilitates copy trading through secure, encrypted API connections. We're also regulated by SEC Nigeria and follow strict compliance protocols.",
      priority: "high",
    },
    {
      category: "Trading",
      question: "What are your platform's trading hours?",
      answer:
        "Our copy trading platform operates 24/5, following global forex market hours (Sunday 5PM EST to Friday 5PM EST). However, our customer support team is available 24/7 via WhatsApp for urgent issues, and during business hours (9AM-6PM WAT) for phone support.",
      priority: "medium",
    },
    {
      category: "Education",
      question: "Do you provide training for new traders?",
      answer:
        "Yes! We offer comprehensive educational resources including: live webinars every Tuesday and Thursday, one-on-one mentoring sessions, detailed video tutorials, risk management courses, and a complete beginner's guide to copy trading. All training is conducted by certified Nigerian financial experts.",
      priority: "medium",
    },
    {
      category: "Payments",
      question: "What payment methods do you accept?",
      answer:
        "We accept all major Nigerian payment methods: Bank transfers (all Nigerian banks), Paystack, Flutterwave, USSD payments, debit cards (Visa, Mastercard, Verve), and mobile money. All transactions are processed securely in Nigerian Naira with instant confirmation.",
      priority: "high",
    },
    {
      category: "Account",
      question: "How do I upgrade my account type?",
      answer:
        "You can upgrade from Slave to Master account anytime through your dashboard. Requirements include: minimum 6 months trading experience, verified trading history, completion of our Master Trader Assessment, and maintaining a minimum account balance of ₦500,000.",
      priority: "low",
    },
    {
      category: "Technical",
      question: "What if I experience technical issues?",
      answer:
        "Our technical support team is available 24/7. For immediate assistance, contact us via WhatsApp. We also have a comprehensive troubleshooting guide in your dashboard, and our average resolution time for technical issues is under 30 minutes.",
      priority: "medium",
    },
    {
      category: "Compliance",
      question: "Are you regulated in Nigeria?",
      answer:
        "Yes, we are fully licensed and regulated by the Securities and Exchange Commission (SEC) Nigeria, registered with the Corporate Affairs Commission (CAC), and compliant with Central Bank of Nigeria (CBN) guidelines for fintech operations. Our license number is SEC/LIC/DTM/2024/001.",
      priority: "high",
    },
  ]

  const socialLinks = [
    { icon: Facebook, name: "Facebook", href: "#", followers: "12.5K", engagement: "High" },
    { icon: Twitter, name: "Twitter", href: "#", followers: "8.7K", engagement: "Very High" },
    { icon: Instagram, name: "Instagram", href: "#", followers: "15.2K", engagement: "High" },
    { icon: Linkedin, name: "LinkedIn", href: "#", followers: "5.8K", engagement: "Medium" },
  ]

  const supportStats = [
    { label: "Average Response Time", value: "< 2 minutes", icon: Clock3, color: "text-green-600" },
    { label: "Customer Satisfaction", value: "98.5%", icon: Star, color: "text-yellow-600" },
    { label: "Issues Resolved", value: "99.2%", icon: CheckCircle2, color: "text-blue-600" },
    { label: "Support Languages", value: "4 Languages", icon: Globe, color: "text-purple-600" },
  ]

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <SiteHeader />

      <main className="flex-1">
        {/* Enhanced Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary via-blue-600 to-purple-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-10"></div>

          <div className="relative max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              <Headphones className="w-4 h-4 mr-2" />
              24/7 Nigerian Support Team
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              We're Here to Help You Succeed
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Get expert support from our Nigerian team of trading professionals. We speak your language and understand
              your market.
            </p>

            {/* Support Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 mb-8">
              {supportStats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Quick Contact CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href="https://wa.me/2349012345678" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                <a href="tel:+2349012345678">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Enhanced Contact Methods */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Choose Your Preferred Contact Method
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Multiple ways to reach us, all staffed by Nigerian professionals who understand your needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  {method.popular && (
                    <Badge className="absolute top-4 right-4 z-10 bg-orange-500 text-white">Most Popular</Badge>
                  )}

                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>

                  <CardContent className="p-8 text-center relative">
                    <div
                      className={`w-16 h-16 ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <method.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-gray-900">{method.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{method.description}</p>

                    <div className="space-y-2 mb-6">
                      <p className="font-mono text-sm font-medium text-gray-800">{method.value}</p>
                      <div className="flex justify-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {method.available}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {method.responseTime}
                        </Badge>
                      </div>
                    </div>

                    <Button
                      asChild
                      className={`w-full ${method.color} hover:opacity-90 shadow-md hover:shadow-lg transition-all duration-300`}
                    >
                      <a href={method.href} target="_blank" rel="noopener noreferrer">
                        {method.action}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Enhanced Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-2xl border-0 overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-blue-600 p-6 text-white">
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <Send className="w-6 h-6" />
                    Send us a Detailed Message
                  </CardTitle>
                  <CardDescription className="text-blue-100 mt-2">
                    Our Nigerian support team will respond within 2 hours during business hours
                  </CardDescription>
                </div>

                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-12 h-12 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-green-700 mb-3">Message Sent Successfully!</h3>
                      <p className="text-gray-600 mb-4">
                        Thank you for contacting Traders Circle. Our team will respond within 2 hours.
                      </p>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <p className="text-sm text-green-700">
                          <strong>What's next?</strong> You'll receive a confirmation email shortly, and one of our
                          Nigerian support specialists will contact you directly.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name" className="text-sm font-semibold text-gray-700">
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            placeholder="Enter your full name"
                            className="mt-2 h-12 border-gray-300 focus:border-primary focus:ring-primary"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder="your.email@example.com"
                            className="mt-2 h-12 border-gray-300 focus:border-primary focus:ring-primary"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            placeholder="+234 901 234 5678"
                            className="mt-2 h-12 border-gray-300 focus:border-primary focus:ring-primary"
                          />
                        </div>
                        <div>
                          <Label htmlFor="priority" className="text-sm font-semibold text-gray-700">
                            Priority Level
                          </Label>
                          <Select
                            value={formData.priority}
                            onValueChange={(value) => handleInputChange("priority", value)}
                          >
                            <SelectTrigger className="mt-2 h-12 border-gray-300 focus:border-primary focus:ring-primary">
                              <SelectValue placeholder="Select priority" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="low">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                  Low - General inquiry
                                </div>
                              </SelectItem>
                              <SelectItem value="normal">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                  Normal - Standard support
                                </div>
                              </SelectItem>
                              <SelectItem value="high">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                  High - Account issues
                                </div>
                              </SelectItem>
                              <SelectItem value="urgent">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                  Urgent - Trading problems
                                </div>
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="category" className="text-sm font-semibold text-gray-700">
                          Category *
                        </Label>
                        <Select
                          value={formData.category}
                          onValueChange={(value) => handleInputChange("category", value)}
                        >
                          <SelectTrigger className="mt-2 h-12 border-gray-300 focus:border-primary focus:ring-primary">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="technical">Technical Support</SelectItem>
                            <SelectItem value="account">Account Issues</SelectItem>
                            <SelectItem value="trading">Trading Questions</SelectItem>
                            <SelectItem value="billing">Billing & Payments</SelectItem>
                            <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                            <SelectItem value="compliance">Compliance & Legal</SelectItem>
                            <SelectItem value="feedback">Feedback & Suggestions</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="subject" className="text-sm font-semibold text-gray-700">
                          Subject *
                        </Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => handleInputChange("subject", e.target.value)}
                          placeholder="Brief description of your inquiry"
                          className="mt-2 h-12 border-gray-300 focus:border-primary focus:ring-primary"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-sm font-semibold text-gray-700">
                          Detailed Message *
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          placeholder="Please provide as much detail as possible about your inquiry. Include any error messages, account details, or specific questions you have..."
                          rows={6}
                          className="mt-2 border-gray-300 focus:border-primary focus:ring-primary resize-none"
                          required
                        />
                        <div className="text-xs text-gray-500 mt-1">{formData.message.length}/1000 characters</div>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <div className="text-sm text-blue-800">
                            <strong>Response Time Guarantee:</strong> We respond to all inquiries within 2 hours during
                            business hours (9AM-6PM WAT). For urgent trading issues, contact us via WhatsApp for
                            immediate assistance.
                          </div>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-5 h-5 ml-2" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Contact Information */}
            <div className="space-y-8">
              {/* Office Locations */}
              <Card className="shadow-xl border-0 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 border-b">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <MapPin className="w-5 h-5 text-primary" />
                    Our Nigerian Offices
                  </CardTitle>
                  <CardDescription>Visit us at our physical locations</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  {offices.map((office, index) => (
                    <div key={index} className="p-6 border-b last:border-b-0">
                      <div className="relative mb-4 rounded-lg overflow-hidden">
                        <img
                          src={office.image || "/placeholder.svg"}
                          alt={`${office.city} office`}
                          className="w-full h-32 object-cover"
                        />
                        {office.isHeadquarters && (
                          <Badge className="absolute top-2 right-2 bg-primary text-white">Headquarters</Badge>
                        )}
                      </div>

                      <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                        {office.city} Office
                        {office.isHeadquarters && <Award className="w-4 h-4 text-yellow-500" />}
                      </h3>

                      <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{office.address}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                          <a href={`tel:${office.phone}`} className="text-primary hover:underline">
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                          <a href={`mailto:${office.email}`} className="text-primary hover:underline">
                            {office.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700">{office.hours}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Users className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700">Manager: {office.manager}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Support Availability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-green-600" />
                        <span className="font-medium">WhatsApp Support</span>
                      </div>
                      <Badge className="bg-green-500 text-white">24/7</Badge>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-blue-600" />
                        <span className="font-medium">Phone Support</span>
                      </div>
                      <span className="text-sm text-gray-600">9AM - 6PM WAT</span>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-purple-600" />
                        <span className="font-medium">Email Support</span>
                      </div>
                      <span className="text-sm text-gray-600">24/7 (2hr response)</span>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg border border-orange-200">
                      <div className="flex items-center gap-2">
                        <Video className="w-4 h-4 text-orange-600" />
                        <span className="font-medium">Video Calls</span>
                      </div>
                      <span className="text-sm text-gray-600">Mon - Fri, 10AM - 5PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle>Connect With Us</CardTitle>
                  <CardDescription>Follow us for trading tips and platform updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        asChild
                        className="h-auto p-4 flex flex-col items-center gap-2 hover:shadow-md transition-all duration-300"
                      >
                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                          <social.icon className="w-6 h-6" />
                          <div className="text-center">
                            <div className="font-medium text-sm">{social.name}</div>
                            <div className="text-xs text-gray-500">{social.followers}</div>
                            <Badge variant="secondary" className="text-xs mt-1">
                              {social.engagement}
                            </Badge>
                          </div>
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Enhanced FAQ Section */}
          <section className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                Quick answers to common questions. Can't find what you're looking for? Our Nigerian support team is here
                to help.
              </p>

              {/* FAQ Search */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 border-gray-300 focus:border-primary focus:ring-primary"
                />
              </div>
            </div>

            {/* FAQ Categories */}
            <Tabs defaultValue="all" className="mb-8">
              <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 lg:grid-cols-9">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="General">General</TabsTrigger>
                <TabsTrigger value="Security">Security</TabsTrigger>
                <TabsTrigger value="Trading">Trading</TabsTrigger>
                <TabsTrigger value="Payments">Payments</TabsTrigger>
                <TabsTrigger value="Account">Account</TabsTrigger>
                <TabsTrigger value="Technical">Technical</TabsTrigger>
                <TabsTrigger value="Education">Education</TabsTrigger>
                <TabsTrigger value="Compliance">Compliance</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredFaqs.map((faq, index) => (
                    <Card key={index} className="shadow-lg border-0 overflow-hidden">
                      <CardContent className="p-0">
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-start gap-3 flex-1">
                              <div
                                className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                                  faq.priority === "high"
                                    ? "bg-red-500"
                                    : faq.priority === "medium"
                                      ? "bg-yellow-500"
                                      : "bg-green-500"
                                }`}
                              ></div>
                              <div className="flex-1">
                                <Badge variant="secondary" className="mb-2 text-xs">
                                  {faq.category}
                                </Badge>
                                <h3 className="font-semibold text-gray-900 mb-2 leading-tight">{faq.question}</h3>
                              </div>
                            </div>
                            {expandedFaq === index ? (
                              <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                            )}
                          </div>
                        </button>

                        {expandedFaq === index && (
                          <div className="px-6 pb-6">
                            <div className="pl-5 border-l-2 border-primary/20">
                              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Category-specific content */}
              {["General", "Security", "Trading", "Payments", "Account", "Technical", "Education", "Compliance"].map(
                (category) => (
                  <TabsContent key={category} value={category} className="mt-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      {faqs
                        .filter((faq) => faq.category === category)
                        .map((faq, index) => (
                          <Card key={index} className="shadow-lg border-0">
                            <CardContent className="p-6">
                              <div className="flex items-start gap-3">
                                <HelpCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                <div>
                                  <h3 className="font-semibold mb-3 text-gray-900">{faq.question}</h3>
                                  <p className="text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                    </div>
                  </TabsContent>
                ),
              )}
            </Tabs>
          </section>

          {/* Trust Indicators */}
          <section className="mt-20 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Choose Our Support?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're committed to providing world-class support with a Nigerian touch
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Nigerian Expertise</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our entire support team is based in Nigeria and understands the local market, regulations, and
                  cultural nuances that matter to you.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Secure & Compliant</h3>
                <p className="text-gray-600 leading-relaxed">
                  All communications are encrypted and we follow strict data protection protocols in compliance with
                  Nigerian and international standards.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Lightning Fast</h3>
                <p className="text-gray-600 leading-relaxed">
                  With 24/7 WhatsApp support and guaranteed 2-hour email response times, we're always here when you need
                  us most.
                </p>
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center mt-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Still Have Questions?</h3>
                <p className="text-gray-600 mb-6">
                  Our Nigerian support team is standing by to help you succeed in copy trading
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <a href="https://wa.me/2349012345678" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <a href="tel:+2349012345678">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Our Team
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
