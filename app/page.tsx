import Link from "next/link"
import { ArrowRight, BarChart3, CheckCircle, Globe, LineChart, Lock, TrendingUp, Users, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import MasterAccountCard from "@/components/master-account-card"
import TestimonialCard from "@/components/testimonial-card"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
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
              <Link
                href="/about"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                About
              </Link>
              <Link
                href="/features"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
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
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-16 md:py-24">
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              <div className="flex flex-col gap-4 text-center md:text-left">
                <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                  Grow Your Wealth, <span className="text-primary">Effortlessly</span>
                </h1>
                <h2 className="text-xl md:text-2xl text-muted-foreground">Copy AI-Vetted Traders in Nigeria</h2>
                <p className="text-lg text-muted-foreground">
                  Leverage expert strategies on your own MT5, with AI ensuring quality. Invest like a pro without being
                  one.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button size="lg" className="gap-2">
                    Start Copying Now - Free Account
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    How It Works
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>AI-Vetted Traders</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Your Broker, Your Control</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Pay Only on New Profits</span>
                  </div>
                </div>
              </div>
              <div className="relative mx-auto aspect-video w-full max-w-xl overflow-hidden rounded-xl bg-muted shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-muted flex items-center justify-center">
                  <div className="p-4 bg-background/90 backdrop-blur-sm rounded-lg shadow-lg w-4/5">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold">AI Trading Performance</h3>
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                        <div className="text-sm text-primary font-medium">AI Verified</div>
                      </div>
                    </div>
                    <div className="h-32 w-full bg-muted/50 rounded-md relative overflow-hidden mb-4">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <LineChart className="h-24 w-24 text-primary/40" />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-muted/50 p-2 rounded">
                        <div className="text-xs text-muted-foreground">AI Score</div>
                        <div className="font-semibold text-primary">9.2/10</div>
                      </div>
                      <div className="bg-muted/50 p-2 rounded">
                        <div className="text-xs text-muted-foreground">Profit</div>
                        <div className="font-semibold">₦2,450,000</div>
                      </div>
                      <div className="bg-muted/50 p-2 rounded">
                        <div className="text-xs text-muted-foreground">Followers</div>
                        <div className="font-semibold">1,240</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-grid-white/10 bg-[size:100px_100px] [mask-image:radial-gradient(white,transparent_70%)]"></div>
        </section>

        {/* Trust & Credibility Section */}
        <section className="border-t border-b py-12 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Why Trust Traders Circle?</h2>
              <p className="text-muted-foreground">Built for Nigerians, by experts who understand your needs</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">AI-Vetted Traders</h3>
                <p className="text-sm text-muted-foreground">
                  1-month AI evaluation ensures only consistent, low-risk traders qualify
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Secure & Regulated</h3>
                <p className="text-sm text-muted-foreground">
                  Your funds stay with your chosen broker. We never touch your money
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Transparent Performance</h3>
                <p className="text-sm text-muted-foreground">
                  Real-time results, verified track records, no hidden fees
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">5,000+</div>
                <div className="text-sm text-muted-foreground">Nigerian Traders</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">₦2.5B+</div>
                <div className="text-sm text-muted-foreground">Funds Under Management</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">94%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Nigerian Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="mt-4 text-lg text-muted-foreground">Start copying expert traders in 3 simple steps</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 mb-16">
              <div className="flex flex-col items-center text-center p-6 bg-background rounded-xl shadow-sm border">
                <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Create Account & Connect MT5</h3>
                <p className="text-muted-foreground">
                  Sign up for free and securely connect your existing MT5 account from any Nigerian broker. Your funds
                  stay with your broker - we never touch your money.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-background rounded-xl shadow-sm border">
                <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Discover AI-Vetted Masters</h3>
                <p className="text-muted-foreground">
                  Browse traders who passed our 1-month AI evaluation. See their AI scores, performance history, and
                  risk levels before you choose.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-background rounded-xl shadow-sm border">
                <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Start Copying & Grow</h3>
                <p className="text-muted-foreground">
                  Our system automatically copies their trades to your account. Pay only 30% on new profits using High
                  Water Mark - no profits, no fees.
                </p>
              </div>
            </div>

            {/* USP Breakdown */}
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">AI-Vetted Masters</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Our AI evaluates traders for 30 days, checking consistency, risk management, and drawdown control.
                  Only the top 5% qualify.
                </p>
                <div className="flex items-center gap-2">
                  <Badge className="bg-primary/10 text-primary">AI Score: 9.2/10</Badge>
                  <Badge variant="outline">Verified</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Your Broker, Your Control</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Works with any Nigerian MT5 broker - FXTM, HotForex, XM, or your preferred choice. Complete
                  flexibility and control.
                </p>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">MT5 Compatible</Badge>
                  <Badge variant="outline">Any Broker</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Fair Profit Sharing</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Pay only 30% on NEW profits using High Water Mark. If you lose money, we don't earn until you're
                  profitable again.
                </p>
                <div className="bg-muted/50 rounded-lg p-3 mt-4">
                  <div className="text-xs text-muted-foreground">Example: ₦100k → ₦120k</div>
                  <div className="font-semibold">You keep: ₦114k | We earn: ₦6k</div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Master Accounts */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Top Performing Masters</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  These expert traders consistently deliver exceptional results
                </p>
              </div>
              <Link href="/masters" className="text-primary font-medium flex items-center gap-1 hover:underline">
                View All <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <MasterAccountCard
                name="Alex Morgan"
                specialty="Forex"
                winRate={94}
                followers={1240}
                trades={3450}
                monthlyFee={30}
                avatarUrl="/placeholder.svg?height=100&width=100"
              />
              <MasterAccountCard
                name="Sarah Chen"
                specialty="Crypto"
                winRate={91}
                followers={980}
                trades={2780}
                monthlyFee={25}
                avatarUrl="/placeholder.svg?height=100&width=100"
              />
              <MasterAccountCard
                name="Michael Rodriguez"
                specialty="Commodities"
                winRate={89}
                followers={1560}
                trades={4120}
                monthlyFee={35}
                avatarUrl="/placeholder.svg?height=100&width=100"
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Platform Features</h2>
              <p className="mt-4 text-lg text-muted-foreground">Everything you need for successful copy trading</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-6 bg-background rounded-xl shadow-sm border">
                <CheckCircle className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Rigorous Trader Verification</h3>
                <p className="text-muted-foreground">
                  All Master Accounts undergo strict performance evaluation with minimum 80% win rate requirement.
                </p>
              </div>

              <div className="p-6 bg-background rounded-xl shadow-sm border">
                <Globe className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Real-Time Trade Mirroring</h3>
                <p className="text-muted-foreground">
                  Trades are copied instantly from Master to Slave accounts with high-speed execution.
                </p>
              </div>

              <div className="p-6 bg-background rounded-xl shadow-sm border">
                <Lock className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Secure KYC Verification</h3>
                <p className="text-muted-foreground">
                  Enhanced security with mandatory KYC process and two-factor authentication.
                </p>
              </div>

              <div className="p-6 bg-background rounded-xl shadow-sm border">
                <BarChart3 className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Comprehensive Analytics</h3>
                <p className="text-muted-foreground">
                  Track performance metrics, account balances, and trade history in real-time.
                </p>
              </div>

              <div className="p-6 bg-background rounded-xl shadow-sm border">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Multiple Master Connections</h3>
                <p className="text-muted-foreground">
                  Connect to multiple Master Accounts to diversify your trading strategy.
                </p>
              </div>

              <div className="p-6 bg-background rounded-xl shadow-sm border">
                <TrendingUp className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Flexible Subscription Model</h3>
                <p className="text-muted-foreground">
                  Choose from various subscription plans based on trader performance and your budget.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Trader Success Stories</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Hear from traders who have transformed their trading experience
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <TestimonialCard
                quote="Since joining Traders Circle, my monthly returns have increased by 65%. The platform is intuitive and the Master Accounts I follow consistently deliver great results."
                author="David K."
                role="Forex Trader"
                avatarUrl="/placeholder.svg?height=80&width=80"
              />
              <TestimonialCard
                quote="As someone new to trading, this platform has been a game-changer. I'm learning from the best while actually making profits instead of losing money on rookie mistakes."
                author="Jennifer L."
                role="New Investor"
                avatarUrl="/placeholder.svg?height=80&width=80"
              />
              <TestimonialCard
                quote="The transparency is what sets Traders Circle apart. I can see exactly how my Master Accounts are performing and make informed decisions about who to follow."
                author="Robert T."
                role="Experienced Trader"
                avatarUrl="/placeholder.svg?height=80&width=80"
              />
            </div>
          </div>
        </section>

        {/* Nigerian Payment Partners */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-2">Trusted Payment Partners</h3>
              <p className="text-muted-foreground">Secure payments with Nigeria's leading providers</p>
            </div>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-lg font-bold">Paystack</div>
              <div className="text-lg font-bold">Flutterwave</div>
              <div className="text-lg font-bold">Bank Transfer</div>
              <div className="text-lg font-bold">USSD</div>
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
                    Join 5,000+ Nigerian Traders
                  </h2>
                  <p className="mt-4 text-lg text-primary-foreground/90">
                    Start copying AI-vetted expert traders today. Free account setup, no hidden fees, and Nigerian
                    customer support.
                  </p>
                  <div className="flex items-center gap-4 mt-4 text-primary-foreground/80">
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm">Free Account</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm">Nigerian Support</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm">No Hidden Fees</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
                  <Button size="lg" variant="secondary" className="gap-2">
                    Start Copying Now - Free
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Watch Demo
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
                <li className="text-muted-foreground">support@traderscircle.ng</li>
                <li className="text-muted-foreground">+234 (0) 123-456-7890</li>
                <li className="text-muted-foreground">Lagos, Nigeria</li>
                <li className="text-muted-foreground">WhatsApp: +234 (0) 123-456-7890</li>
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
