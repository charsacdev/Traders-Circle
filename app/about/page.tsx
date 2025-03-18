import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, LineChart, Shield, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
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
              <Link href="/about" className="text-sm font-medium text-primary transition-colors hover:text-primary">
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
        <section className="py-20 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">About Traders Circle</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Revolutionizing financial trading through our innovative master-slave account model
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Traders Circle was founded in 2020 by a team of experienced traders and fintech professionals who
                    recognized a fundamental problem in the trading world: the steep learning curve that prevents many
                    individuals from successful trading.
                  </p>
                  <p>
                    Our founders had witnessed countless talented traders who lacked the platform to monetize their
                    skills, while simultaneously seeing beginners struggle to navigate the complex world of financial
                    markets.
                  </p>
                  <p>
                    This realization led to the development of Traders Circle - a platform that bridges this gap by
                    connecting expert traders with those looking to benefit from their expertise through our innovative
                    master-slave account model.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-muted flex items-center justify-center">
                  <div className="p-6 bg-background/90 backdrop-blur-sm rounded-lg shadow-lg w-4/5">
                    <h3 className="font-semibold text-xl mb-4">Our Mission</h3>
                    <p className="text-muted-foreground mb-6">
                      To democratize financial trading by making expert strategies accessible to everyone while
                      providing talented traders with a platform to showcase their skills and earn additional income.
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <TrendingUp className="h-5 w-5 text-primary" />
                      </div>
                      <div className="text-sm">
                        <div className="font-medium">Founded in 2020</div>
                        <div className="text-muted-foreground">By traders, for traders</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Understanding Our Platform</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The master-slave account model explained
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-background rounded-xl p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    M
                  </div>
                  <h3 className="text-2xl font-bold">Master Accounts</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Master Accounts are experienced traders who have demonstrated exceptional trading skills with a
                    minimum win rate of 80%.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Undergo rigorous performance evaluation before approval</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Set subscription fees between $10-$50 per month</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Earn 70% of subscription revenue (30% platform fee)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Build a following based on consistent performance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Trade normally while the platform mirrors trades to followers</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-background rounded-xl p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    S
                  </div>
                  <h3 className="text-2xl font-bold">Slave Accounts</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Slave Accounts are traders who want to benefit from the expertise of proven traders without needing
                    advanced trading knowledge.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Connect MT5 accounts to the platform securely</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Browse and select Master Accounts based on performance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Pay monthly subscription fees to follow chosen Masters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Automatically copy all trades from subscribed Masters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Track performance and manage multiple Master connections</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Core Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-background rounded-xl p-8 shadow-sm border">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Transparency</h3>
                <p className="text-muted-foreground">
                  We believe in complete transparency in all aspects of our platform. From trader performance metrics to
                  fee structures, everything is clearly visible to all users.
                </p>
              </div>

              <div className="bg-background rounded-xl p-8 shadow-sm border">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Community</h3>
                <p className="text-muted-foreground">
                  We foster a supportive community where knowledge sharing and mutual growth are encouraged. Our
                  platform connects traders of all experience levels.
                </p>
              </div>

              <div className="bg-background rounded-xl p-8 shadow-sm border">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Excellence</h3>
                <p className="text-muted-foreground">
                  We maintain high standards for our Master Accounts, ensuring that only traders with proven track
                  records can offer their strategies to our community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Leadership Team</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Meet the experts behind Traders Circle</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-background rounded-xl p-6 shadow-sm text-center">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image
                    src="/placeholder.svg?height=128&width=128"
                    alt="CEO"
                    width={128}
                    height={128}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Jonathan Chen</h3>
                <p className="text-primary mb-4">CEO & Co-Founder</p>
                <p className="text-muted-foreground text-sm">
                  Former hedge fund manager with 15+ years of experience in forex and commodities trading.
                </p>
              </div>

              <div className="bg-background rounded-xl p-6 shadow-sm text-center">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image
                    src="/placeholder.svg?height=128&width=128"
                    alt="CTO"
                    width={128}
                    height={128}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Maria Rodriguez</h3>
                <p className="text-primary mb-4">CTO & Co-Founder</p>
                <p className="text-muted-foreground text-sm">
                  Fintech innovator with background in developing trading algorithms and secure financial platforms.
                </p>
              </div>

              <div className="bg-background rounded-xl p-6 shadow-sm text-center">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image
                    src="/placeholder.svg?height=128&width=128"
                    alt="COO"
                    width={128}
                    height={128}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">David Thompson</h3>
                <p className="text-primary mb-4">COO</p>
                <p className="text-muted-foreground text-sm">
                  Operations expert with extensive experience in scaling fintech startups and ensuring regulatory
                  compliance.
                </p>
              </div>
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
                    Join Our Trading Community
                  </h2>
                  <p className="mt-4 text-lg text-primary-foreground/90">
                    Whether you're an experienced trader looking to monetize your skills or a beginner seeking expert
                    guidance, Traders Circle has a place for you.
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

