import Link from "next/link"
import { ArrowRight, BarChart3, CheckCircle, Globe, LineChart, Lock, Shield, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">Traders Circle</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                About
              </Link>
              <Link href="/features" className="text-sm font-medium text-primary transition-colors hover:text-primary">
                Features
              </Link>
              <Link
                href="/masters"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Top Traders
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Log In
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Platform Features</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover the powerful tools and capabilities that make Traders Circle the premier copy trading platform
              </p>
            </div>
          </div>
        </section>

        {/* Feature Tabs */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <Tabs defaultValue="slave" className="space-y-8">
              <div className="flex justify-center">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="slave">For Traders</TabsTrigger>
                  <TabsTrigger value="master">For Expert Traders</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="slave" className="space-y-12">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Expert Selection</CardTitle>
                      <CardDescription>Browse and select from a pool of verified expert traders</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            Access detailed performance metrics for all Master Accounts
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            Filter by trading style, win rate, and specialty
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            View detailed trader profiles before subscribing
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                        <Globe className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Automated Copy Trading</CardTitle>
                      <CardDescription>Seamlessly mirror trades from expert traders</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            Real-time trade mirroring with high-speed execution
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            Proportional position sizing based on your account balance
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Follow multiple Master Accounts simultaneously</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                        <BarChart3 className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Performance Tracking</CardTitle>
                      <CardDescription>Monitor your trading results in real-time</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            Comprehensive dashboard with key performance metrics
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Detailed trade history and analysis</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            Performance comparison across different Master Accounts
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                        <Lock className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Secure Account Connection</CardTitle>
                      <CardDescription>Connect your MT5 account with confidence</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            End-to-end encryption for all account connections
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">No direct access to your trading capital</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            Ability to disconnect or pause copying at any time
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Risk Management</CardTitle>
                      <CardDescription>Trade with confidence using built-in safeguards</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            Set maximum drawdown limits for automatic disconnection
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Customize risk levels for each Master Account</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            Real-time alerts for significant account changes
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                        <TrendingUp className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Flexible Subscription Model</CardTitle>
                      <CardDescription>Choose the right experts for your budget</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            Subscription fees ranging from $10-$50 per month
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            No commission on profits, just fixed monthly fees
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Cancel or change subscriptions at any time</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="master" className="space-y-12">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Monetize Your Expertise</CardTitle>
                      <CardDescription>Turn your trading skills into a steady income stream</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            Set your own subscription fee between $10-$50 per month
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            Earn 70% of all subscription revenue (30% platform fee)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Scale your income as you attract more followers</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                        <LineChart className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Performance Tracking</CardTitle>
                      <CardDescription>Monitor your trading metrics and follower growth</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            Comprehensive dashboard with key performance indicators
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Track follower growth and subscription revenue</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Analyze trade history and success rates</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                        <Globe className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Build Your Reputation</CardTitle>
                      <CardDescription>Showcase your skills to a global audience</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            Create a detailed profile highlighting your expertise
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Customize your page with banner and bio</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            Gain visibility in our marketplace based on performance
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                        <TrendingUp className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Seamless Trading</CardTitle>
                      <CardDescription>Trade normally while we handle the copying</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">No change to your trading workflow or strategy</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            Our system automatically mirrors your trades to followers
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            Trade on your own MT5 account as you normally would
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Verified Status</CardTitle>
                      <CardDescription>Stand out with our performance verification</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            Undergo performance evaluation to earn verified status
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Maintain minimum 80% win rate to stay active</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            Receive verification badge to attract more followers
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                        <BarChart3 className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Earnings Management</CardTitle>
                      <CardDescription>Track and withdraw your subscription revenue</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Detailed breakdown of subscription earnings</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            Flexible withdrawal options to your preferred method
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            Monthly payment schedule with transparent reporting
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Platform Security */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Platform Security</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Your security is our top priority</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Secure Account Connection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Our platform uses advanced encryption to ensure your MT5 account credentials are always protected.
                    We never store your actual password, and all connections are established through secure API
                    protocols.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>KYC Verification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    All users undergo a comprehensive Know Your Customer (KYC) verification process to prevent fraud and
                    ensure regulatory compliance. This creates a trusted community of verified traders.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Your personal and financial data is protected with industry-leading security measures. We employ
                    end-to-end encryption, regular security audits, and strict access controls to safeguard your
                    information.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="rounded-2xl bg-primary p-8 md:p-12 shadow-lg">
              <div className="grid gap-6 md:grid-cols-2 items-center">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
                    Ready to Experience These Features?
                  </h2>
                  <p className="mt-4 text-lg text-primary-foreground/90">
                    Join Traders Circle today and discover why thousands of traders trust our platform for copy trading.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
                  <Button size="lg" variant="secondary" className="gap-2">
                    Create Account
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
                <span className="font-bold text-xl">Traders Circle</span>
              </div>
              <p className="text-muted-foreground">
                The premier platform for copy trading with verified expert traders.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="text-muted-foreground hover:text-primary">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/masters" className="text-muted-foreground hover:text-primary">
                    Top Traders
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-muted-foreground hover:text-primary">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/risk" className="text-muted-foreground hover:text-primary">
                    Risk Disclosure
                  </Link>
                </li>
                <li>
                  <Link href="/compliance" className="text-muted-foreground hover:text-primary">
                    Compliance
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">support@traderscircle.com</li>
                <li className="text-muted-foreground">+1 (555) 123-4567</li>
                <li className="text-muted-foreground">123 Trading St, Financial District</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-6">
            <p className="text-center text-muted-foreground">
              © {new Date().getFullYear()} Traders Circle. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

