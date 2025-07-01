import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Shield, TrendingUp, Star, BarChart3, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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
        <section className="py-16 md:py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
                We're Building Nigeria's Most Trusted <span className="text-primary">Copy Trading Platform</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Born from frustration with scam platforms and complex trading, we created a solution that puts Nigerian
                traders first.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  Start Your Journey
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Meet Our Team
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem We Solve */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">The Problem We Saw</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 font-bold">✗</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Too Many Scam Platforms</h3>
                      <p className="text-muted-foreground">
                        Nigerians losing money to fake trading platforms that disappear with their funds.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 font-bold">✗</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Unverified "Expert" Traders</h3>
                      <p className="text-muted-foreground">
                        Anyone can claim to be a trading expert without proof of consistent performance.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 font-bold">✗</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Complex Trading Requirements</h3>
                      <p className="text-muted-foreground">
                        Most platforms require you to learn complex trading before you can start making money.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 font-bold">✗</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Hidden Fees & Unfair Charges</h3>
                      <p className="text-muted-foreground">
                        Platforms charging fees even when you lose money, making it impossible to recover.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8">
                  <div className="text-center">
                    <div className="text-4xl mb-4">😔</div>
                    <h3 className="font-bold text-xl mb-4">The Reality for Most Nigerian Traders</h3>
                    <div className="space-y-3 text-left">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-red-500"></div>
                        <span className="text-sm">Lost money to fake platforms</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-red-500"></div>
                        <span className="text-sm">Followed unverified "experts"</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-red-500"></div>
                        <span className="text-sm">Paid fees while losing money</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-red-500"></div>
                        <span className="text-sm">No control over their funds</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Solution */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Solution: AI-Powered Trust</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We built a platform that solves every problem Nigerian traders face, using AI to ensure only the best
                traders qualify.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6 bg-background">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">AI Vetting System</h3>
                <p className="text-muted-foreground mb-4">
                  Our AI evaluates every trader for 30 days, checking 50+ performance metrics. Only 5% pass our tests.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Consistency tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Risk management analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Drawdown control verification</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-background">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Your Broker, Your Control</h3>
                <p className="text-muted-foreground mb-4">
                  Your money stays with YOUR chosen broker. We never touch your funds - we just copy trades.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Works with any MT5 broker</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">You control withdrawals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Complete transparency</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-background">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Fair Profit Sharing</h3>
                <p className="text-muted-foreground mb-4">
                  Pay only 30% on NEW profits using High Water Mark. No profits = no fees. It's that simple.
                </p>
                <div className="bg-muted/50 rounded-lg p-3">
                  <div className="text-xs text-muted-foreground">Example:</div>
                  <div className="font-semibold">₦100k → ₦120k profit</div>
                  <div className="text-sm">You keep: ₦114k | We earn: ₦6k</div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8">
                  <div className="text-center">
                    <div className="text-4xl mb-4">💡</div>
                    <h3 className="font-bold text-xl mb-4">The "Aha!" Moment</h3>
                    <p className="text-muted-foreground">
                      "Why should Nigerians lose money to scam platforms when we can use AI to identify truly skilled
                      traders and let people copy them safely?"
                    </p>
                    <div className="mt-6 p-4 bg-background rounded-lg">
                      <div className="text-sm font-medium">Our Founding Principle</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        "Technology should make trading accessible, not complicated"
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">How Traders Circle Was Born</h2>
                <div className="space-y-6">
                  <p className="text-muted-foreground">
                    In 2020, our founder lost ₦500,000 to a fake trading platform that promised "guaranteed profits."
                    Like many Nigerians, he was looking for a way to grow his money but didn't have the time to learn
                    complex trading.
                  </p>
                  <p className="text-muted-foreground">
                    After this painful experience, he spent 2 years studying successful traders and noticed something:
                    the best traders had consistent patterns that could be identified and verified using AI.
                  </p>
                  <p className="text-muted-foreground">
                    That's when the idea hit: What if we could use AI to identify truly skilled traders, let people copy
                    their trades, but keep their money safe with their own brokers?
                  </p>
                  <div className="bg-primary/10 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Our Mission Today</h4>
                    <p className="text-sm text-muted-foreground">
                      To make professional trading accessible to every Nigerian, regardless of their experience level,
                      while ensuring their money stays safe and under their control.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why We're Different */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Why We're Different</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We're not just another trading platform. We're Nigerian traders building for Nigerian traders.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Other Platforms</h3>
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 bg-red-50 rounded-lg">
                    <div className="h-6 w-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">✗</span>
                    </div>
                    <div>
                      <div className="font-medium">Anyone can become a "master trader"</div>
                      <div className="text-sm text-muted-foreground">No verification process</div>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-red-50 rounded-lg">
                    <div className="h-6 w-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">✗</span>
                    </div>
                    <div>
                      <div className="font-medium">They hold your money</div>
                      <div className="text-sm text-muted-foreground">High risk of losing everything</div>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-red-50 rounded-lg">
                    <div className="h-6 w-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">✗</span>
                    </div>
                    <div>
                      <div className="font-medium">Charge fees even when you lose</div>
                      <div className="text-sm text-muted-foreground">Makes recovery impossible</div>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-red-50 rounded-lg">
                    <div className="h-6 w-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">✗</span>
                    </div>
                    <div>
                      <div className="font-medium">Foreign companies, no local support</div>
                      <div className="text-sm text-muted-foreground">Don't understand Nigerian needs</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary">Traders Circle</h3>
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 bg-green-50 rounded-lg">
                    <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">AI vets every trader for 30 days</div>
                      <div className="text-sm text-muted-foreground">Only 5% pass our strict tests</div>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-green-50 rounded-lg">
                    <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Your money stays with your broker</div>
                      <div className="text-sm text-muted-foreground">Complete control and security</div>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-green-50 rounded-lg">
                    <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Pay only on NEW profits (HWM)</div>
                      <div className="text-sm text-muted-foreground">No profits = no fees, ever</div>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-green-50 rounded-lg">
                    <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Built by Nigerians for Nigerians</div>
                      <div className="text-sm text-muted-foreground">Local support, Naira payments</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Numbers */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Impact So Far</h2>
              <p className="text-xl text-muted-foreground">Real numbers from real Nigerian traders who trust us</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5,000+</div>
                <div className="text-sm text-muted-foreground">Nigerian Traders</div>
                <div className="text-xs text-muted-foreground mt-1">Across all 36 states</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">₦2.5B+</div>
                <div className="text-sm text-muted-foreground">Funds Protected</div>
                <div className="text-xs text-muted-foreground mt-1">Safely with user brokers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">94%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
                <div className="text-xs text-muted-foreground mt-1">Of our AI-vetted traders</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Nigerian Support</div>
                <div className="text-xs text-muted-foreground mt-1">WhatsApp & phone</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Meet the Team</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Nigerian entrepreneurs and tech experts who understand your trading journey
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="p-6 text-center bg-background">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image
                    src="/placeholder.svg?height=128&width=128"
                    alt="CEO"
                    width={128}
                    height={128}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Adebayo Chen</h3>
                <p className="text-primary mb-4">CEO & Co-Founder</p>
                <p className="text-muted-foreground text-sm mb-4">
                  Former investment banker who lost money to trading scams. Built Traders Circle to protect other
                  Nigerians.
                </p>
                <div className="flex justify-center gap-2">
                  <Badge variant="outline">15+ years finance</Badge>
                  <Badge variant="outline">Lagos Business School</Badge>
                </div>
              </Card>

              <Card className="p-6 text-center bg-background">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image
                    src="/placeholder.svg?height=128&width=128"
                    alt="CTO"
                    width={128}
                    height={128}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Kemi Rodriguez</h3>
                <p className="text-primary mb-4">CTO & Co-Founder</p>
                <p className="text-muted-foreground text-sm mb-4">
                  AI expert who built the trader vetting system. Previously worked at Paystack and Flutterwave.
                </p>
                <div className="flex justify-center gap-2">
                  <Badge variant="outline">AI/ML Expert</Badge>
                  <Badge variant="outline">University of Lagos</Badge>
                </div>
              </Card>

              <Card className="p-6 text-center bg-background">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image
                    src="/placeholder.svg?height=128&width=128"
                    alt="COO"
                    width={128}
                    height={128}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Emeka Thompson</h3>
                <p className="text-primary mb-4">Head of Operations</p>
                <p className="text-muted-foreground text-sm mb-4">
                  Operations expert who ensures smooth trading execution. Former trader with 10+ years experience.
                </p>
                <div className="flex justify-center gap-2">
                  <Badge variant="outline">Trading Expert</Badge>
                  <Badge variant="outline">Covenant University</Badge>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Core Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide every decision we make
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="p-8 text-center bg-background">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Trust First</h3>
                <p className="text-muted-foreground">
                  We know Nigerians have been burned by scam platforms. That's why we built complete transparency into
                  everything we do. Your money stays with your broker, our AI vetting is open, and our fees are crystal
                  clear.
                </p>
              </Card>

              <Card className="p-8 text-center bg-background">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Nigerian First</h3>
                <p className="text-muted-foreground">
                  We're not a foreign company trying to understand Nigeria. We ARE Nigeria. We accept Naira payments,
                  provide WhatsApp support, and understand the unique challenges Nigerian traders face.
                </p>
              </Card>

              <Card className="p-8 text-center bg-background">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Success Together</h3>
                <p className="text-muted-foreground">
                  We only make money when you make money. Our High Water Mark system ensures we're truly aligned with
                  your success. If you lose, we don't earn until you're profitable again.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">What Nigerian Traders Say</h2>
              <p className="text-xl text-muted-foreground">
                Real stories from real people who've transformed their trading
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="p-6 bg-background">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Testimonial"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold">Chioma A.</div>
                    <div className="text-sm text-muted-foreground">Lagos State</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "I lost ₦300k to a fake platform before finding Traders Circle. Now I've made back ₦450k in 6 months.
                  The AI vetting gives me confidence that these traders are real."
                </p>
              </Card>

              <Card className="p-6 bg-background">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Testimonial"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold">Ibrahim M.</div>
                    <div className="text-sm text-muted-foreground">Kano State</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "As a civil servant, I needed something simple. Traders Circle lets me copy expert traders without
                  learning complex analysis. My ₦50k is now ₦85k in 4 months."
                </p>
              </Card>

              <Card className="p-6 bg-background">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Testimonial"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold">Funmi O.</div>
                    <div className="text-sm text-muted-foreground">Ogun State</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "The best part is my money stays with my broker. I can withdraw anytime. Other platforms wanted to
                  hold my money - that's when I knew they were scams."
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="rounded-2xl bg-primary p-8 md:p-12 shadow-lg">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl mb-4">
                  Ready to Join 5,000+ Nigerian Traders?
                </h2>
                <p className="text-lg text-primary-foreground/90 mb-8">
                  Start copying AI-vetted expert traders today. Your money stays safe with your broker, you only pay on
                  profits, and our Nigerian team supports you 24/7.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="gap-2">
                    Start Your Free Account
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Chat with Our Team
                  </Button>
                </div>
                <div className="flex items-center justify-center gap-6 mt-8 text-primary-foreground/80">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm">Free Account Setup</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm">Nigerian Support Team</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm">No Hidden Fees</span>
                  </div>
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
                Nigeria's most trusted copy trading platform, built by Nigerians for Nigerians.
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
