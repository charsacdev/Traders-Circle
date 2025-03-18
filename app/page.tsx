import Link from "next/link"
import { ArrowRight, BarChart3, CheckCircle, Globe, Lock, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import MasterAccountCard from "@/components/master-account-card"
import StatsCounter from "@/components/stats-counter"
import TestimonialCard from "@/components/testimonial-card"
import HeroSlider from "@/components/hero-slider"

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
            <Link href="/dashboard">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-24 md:py-32">
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <div className="flex flex-col gap-4">
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                  Copy the Trades of <span className="text-primary">Expert Traders</span>
                </h1>
                <p className="text-xl text-muted-foreground md:text-2xl">
                  Join Traders Circle and automatically mirror the strategies of top-performing traders with proven
                  success rates.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button size="lg" className="gap-2">
                    Start Trading Now
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative mx-auto aspect-video w-full max-w-xl overflow-hidden rounded-xl bg-muted shadow-xl">
                <HeroSlider />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-grid-white/10 bg-[size:100px_100px] [mask-image:radial-gradient(white,transparent_70%)]"></div>
        </section>

        {/* Rest of the homepage content remains the same */}
        {/* Stats Section */}
        <section className="border-t border-b py-12 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatsCounter value={15000} label="Active Traders" />
              <StatsCounter value={92} suffix="%" label="Average Win Rate" />
              <StatsCounter value={250} prefix="$" suffix="M+" label="Monthly Volume" />
              <StatsCounter value={99.9} suffix="%" label="Execution Rate" />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our master-slave account model makes copy trading simple and effective
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center p-6 bg-background rounded-xl shadow-sm border">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1. Choose a Master</h3>
                <p className="text-muted-foreground">
                  Browse our pool of expert traders with verified 80%+ win rates and select the ones that match your
                  trading style.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-background rounded-xl shadow-sm border">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">2. Connect Your Account</h3>
                <p className="text-muted-foreground">
                  Link your MT5 account to our secure platform and subscribe to your chosen Master Accounts.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-background rounded-xl shadow-sm border">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">3. Automatic Trading</h3>
                <p className="text-muted-foreground">
                  Sit back and watch as trades are automatically copied from your Master Accounts to your trading
                  account in real-time.
                </p>
              </div>
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

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="rounded-2xl bg-primary p-8 md:p-12 shadow-lg">
              <div className="grid gap-6 md:grid-cols-2 items-center">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
                    Ready to Transform Your Trading?
                  </h2>
                  <p className="mt-4 text-lg text-primary-foreground/90">
                    Join thousands of traders who are already benefiting from our copy-trading platform. Get started
                    today with just a few clicks.
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

